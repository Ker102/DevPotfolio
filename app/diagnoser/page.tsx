import { Metadata } from 'next';
import { DiagnosticChat } from '@/components/diagnostic';

export const metadata: Metadata = {
    title: 'Kaelux Intake Agent | Kaelux',
    description: 'Ask about Kaelux ventures, investor and partner fit, selective build inquiries, MedAI, and business automations.',
    openGraph: {
        title: 'Kaelux Intake Agent | Kaelux',
        description: 'Route questions about Kaelux ventures, partnerships, build inquiries, and business automations.',
        type: 'website',
        url: 'https://kaelux.dev/diagnoser',
    },
    alternates: {
        canonical: 'https://kaelux.dev/diagnoser',
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
                        <span className="text-sm text-gray-600 font-semibold tracking-wide">Kaelux Intake</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500">
                        Ask Kaelux
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg font-light">
                        Use the intake agent to understand Kaelux ventures, investor and partner fit, selective build inquiries, MedAI, and business automations.
                    </p>
                </div>

                {/* Chat Component */}
                <DiagnosticChat initialMessage={initialMessage} />

                {/* Footer Info */}
                <div className="mt-12 text-center">
                    <span className="text-xs font-mono text-gray-400">RAG-backed intake for Kaelux venture and partner questions</span>
                </div>
            </div>
        </main>
    );
}
