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
        <main className="min-h-screen bg-black relative overflow-hidden">
            {/* Background Gradient Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[128px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 to-transparent rounded-full" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
                            Kaelux Diagnostic Agent
                        </span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Let our AI understand your business needs and recommend tailored solutions.
                        Just answer a few questions to get started.
                    </p>
                </div>

                {/* Chat Component */}
                <DiagnosticChat initialMessage={initialMessage} />

                {/* Footer Info */}
                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        Powered by <span className="text-cyan-400">Groq</span> •
                        <span className="text-green-400"> Llama 3.3</span> •
                        Real-time model search via <span className="text-yellow-400">Hugging Face</span>
                    </p>
                </div>
            </div>
        </main>
    );
}

