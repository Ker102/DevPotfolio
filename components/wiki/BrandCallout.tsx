interface BrandCalloutProps {
    children: React.ReactNode;
}

export default function BrandCallout({ children }: BrandCalloutProps) {
    return (
        <div className="my-8 p-5 rounded-lg border border-white/10 bg-white/[0.02]">
            <p className="text-gray-300 leading-relaxed">
                {children}
            </p>
        </div>
    );
}
