import { Metadata } from 'next';
import { DiagnosticChat } from '@/components/diagnostic';

export const metadata: Metadata = {
    title: 'AI Diagnostic | Kaelux',
    description: 'Get a personalized AI solution assessment for your business. Our diagnostic agent will understand your needs and recommend tailored solutions.',
    openGraph: {
        title: 'AI Diagnostic | Kaelux',
        description: 'Get a personalized AI solution assessment for your business',
        type: 'website',
    },
};

interface PageProps {
    searchParams: Promise<{ q?: string }>;
}

export default async function DiagnoserPage({ searchParams }: PageProps) {
    const params = await searchParams;
    const initialMessage = params.q || '';

    return (
        <main className="min-h-screen bg-white relative overflow-hidden">
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/80 border border-gray-200/50 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] mb-8">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-pulse" />
                        <span className="text-sm text-gray-600 font-semibold tracking-wide">Intelligent Diagnostics</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500">
                        Kaelux Diagnostic Agent
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg font-light">
                        Let our AI understand your business needs and recommend tailored solutions.
                    </p>
                </div>

                {/* Chat Component */}
                <DiagnosticChat initialMessage={initialMessage} />

                {/* Footer Info */}
                <div className="mt-12 text-center">
                    <span className="text-xs font-mono text-gray-400">Powered by Enterprise Neural Engine v3.5</span>
                </div>
            </div>
        </main>
    );
}
