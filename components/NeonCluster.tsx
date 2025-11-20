"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useInView } from "framer-motion";
import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
} from "react";
import * as THREE from "three";

type ClusterProps = {
  className?: string;
};

const palette = ["#95F5FF", "#C084FC", "#F472B6", "#8B5CF6", "#FDE68A"];
const layout: [number, number, number][] = [
  [0, 0.9, 0],
  [-1.25, -0.15, 0],
  [1.25, -0.15, 0],
  [0, -0.15, -1.25],
  [0, -0.15, 1.25],
];

function Starfield({ progress }: { progress: MutableRefObject<number> }) {
  const positions = useMemo(() => {
    const buffer = new Float32Array(420 * 3);
    for (let i = 0; i < 420; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 6 + Math.random() * 4;
      buffer[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      buffer[i * 3 + 1] = radius * Math.cos(phi);
      buffer[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    return buffer;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.02;
    const mat = ref.current.material as THREE.PointsMaterial;
    mat.opacity = THREE.MathUtils.lerp(0, 0.45, progress.current);
  });

  useEffect(() => {
    return () => {
      ref.current?.geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(), 3));
    };
  }, []);

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#fff" size={0.04} sizeAttenuation transparent opacity={0} />
    </points>
  );
}

function Cluster({ target }: { target: number }) {
  const group = useRef<THREE.Group>(null);
  const cubes = useRef<(THREE.Mesh | null)[]>([]);
  const progress = useRef(0);
  const geometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);

  useFrame((state, delta) => {
    progress.current = THREE.MathUtils.damp(progress.current, target, 2.5, delta);

    if (group.current) {
      const wobble = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
      group.current.rotation.x = THREE.MathUtils.lerp(-0.9, -0.25, progress.current) + wobble;
      group.current.rotation.y = state.clock.elapsedTime * 0.12;
      const scale = 0.55 + progress.current * 0.45;
      group.current.scale.setScalar(scale);
    }

    cubes.current.forEach((cube, idx) => {
      if (!cube) return;
      const { home, hidden } = cube.userData as { home: THREE.Vector3; hidden: THREE.Vector3 };
      cube.position.lerpVectors(hidden, home, progress.current);
      cube.scale.setScalar(THREE.MathUtils.lerp(0.3, 1, progress.current));
      if (!Array.isArray(cube.material)) {
        cube.material.opacity = THREE.MathUtils.lerp(0, 1, progress.current);
      }
    });
  });

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <>
      <group ref={group}>
        {layout.map((pos, idx) => (
          <mesh
            key={idx}
            geometry={geometry}
            ref={(node) => {
              cubes.current[idx] = node;
              if (node) {
                const home = new THREE.Vector3(...pos);
                const hidden = home.clone().add(new THREE.Vector3(0, -2 - idx * 0.35, 0));
                node.userData = { home, hidden };
                node.position.copy(hidden);
              }
            }}
          >
            <meshPhysicalMaterial
              color={palette[idx % palette.length]}
              roughness={0.12}
              metalness={0.25}
              clearcoat={1}
              clearcoatRoughness={0.12}
              emissive={palette[idx % palette.length]}
              emissiveIntensity={0.3}
              envMapIntensity={1.3}
              transparent
              opacity={0}
            />
          </mesh>
        ))}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
          <ringGeometry args={[1.3, 2.5, 64]} />
          <meshBasicMaterial color="#c084fc" transparent opacity={0.25} />
        </mesh>
      </group>
      <Starfield progress={progress} />
    </>
  );
}

export default function NeonCluster({ className }: ClusterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: false });
  const [target, setTarget] = useState(0);

  useEffect(() => {
    setTarget(inView ? 1 : 0);
  }, [inView]);

  return (
    <div ref={ref} className={`relative ${className ?? ""}`}>
      <Canvas camera={{ position: [0, 0, 7], fov: 40 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <color attach="background" args={["#050617"]} />
          <ambientLight intensity={1.4} />
          <spotLight position={[5, 7, 5]} intensity={2} angle={0.5} penumbra={0.7} />
          <Cluster target={target} />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_60%)]" />
    </div>
  );
}
