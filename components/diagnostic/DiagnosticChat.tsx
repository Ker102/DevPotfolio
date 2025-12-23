'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Loader2, Sparkles, Search, Send } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export function DiagnosticChat() {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [input, setInput] = useState('');

    const { messages, sendMessage, status, stop } = useChat({
        transport: new DefaultChatTransport({ api: '/api/chat' }),
    });

    const isLoading = status === 'streaming' || status === 'submitted';

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && status === 'ready') {
            sendMessage({ text: input });
            setInput('');
        }
    };

    // Extract text content from message parts
    const getMessageText = (message: (typeof messages)[number]): string => {
        if (!message.parts) return '';
        const textParts = message.parts.filter(
            (p): p is { type: 'text'; text: string } => p.type === 'text'
        );
        return textParts.map((p) => p.text).join('');
    };

    // Get tool-related parts
    const getToolParts = (message: (typeof messages)[number]) => {
        if (!message.parts) return [];
        return message.parts.filter((p) => p.type.startsWith('tool-'));
    };

    const renderToolPart = (part: { type: string; state?: string; input?: unknown; output?: unknown }) => {
        const toolState = part.state;

        if (toolState === 'input-streaming' || toolState === 'input-available') {
            return (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 text-cyan-400 text-sm bg-cyan-500/10 rounded-lg px-3 py-2 mt-2"
                >
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {part.type.includes('HuggingFace') && (
                        <>
                            <Search className="w-4 h-4" />
                            <span>Searching AI models on Hugging Face...</span>
                        </>
                    )}
                    {!part.type.includes('HuggingFace') && <span>Processing...</span>}
                </motion.div>
            );
        }

        if (toolState === 'output-available' && part.output) {
            const typedOutput = part.output as {
                models?: Array<{ id: string; downloads: string; task: string }>;
            };

            return (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm mt-2"
                >
                    <div className="flex items-center gap-2 text-green-400 mb-2">
                        <Sparkles className="w-4 h-4" />
                        <span className="font-medium">
                            Found {typedOutput.models?.length || 0} models
                        </span>
                    </div>
                    {typedOutput.models && typedOutput.models.length > 0 && (
                        <div className="space-y-1 text-gray-300">
                            {typedOutput.models.slice(0, 3).map((model, idx) => (
                                <div key={idx} className="flex items-center justify-between text-xs">
                                    <span className="font-mono text-cyan-300">{model.id}</span>
                                    <span className="text-gray-500">
                                        {model.downloads} downloads • {model.task}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            );
        }

        return null;
    };

    // Show welcome message if no messages yet
    const showWelcome = messages.length === 0;

    return (
        <div className="relative w-full max-w-3xl mx-auto">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-green-500/5 rounded-2xl" />

            {/* Chat Container */}
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">Kaelux Diagnostic Agent</h3>
                        <p className="text-xs text-gray-400">AI-powered solution consulting</p>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                        <span
                            className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}
                        />
                        <span className="text-xs text-gray-400">
                            {isLoading ? 'Thinking...' : 'Online'}
                        </span>
                        {isLoading && stop && (
                            <button
                                onClick={stop}
                                className="text-xs text-red-400 hover:text-red-300 transition-colors"
                            >
                                Stop
                            </button>
                        )}
                    </div>
                </div>

                {/* Messages */}
                <div className="h-[450px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
                    {/* Welcome Message */}
                    {showWelcome && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-3 justify-start"
                        >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div className="max-w-[80%] bg-white/10 text-gray-100 rounded-2xl px-4 py-3">
                                <p className="whitespace-pre-wrap leading-relaxed">
                                    Hello! I&apos;m the Kaelux Diagnostic Agent. I&apos;m here to understand your business needs and recommend tailored AI solutions. Let&apos;s start with a quick conversation - what industry does your business operate in?
                                </p>
                            </div>
                        </motion.div>
                    )}

                    <AnimatePresence mode="popLayout">
                        {messages.map((message) => (
                            <motion.div
                                key={message.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                                className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {/* Assistant Avatar */}
                                {message.role === 'assistant' && (
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center">
                                        <Bot className="w-4 h-4 text-white" />
                                    </div>
                                )}

                                {/* Message Bubble */}
                                <div
                                    className={`max-w-[80%] ${message.role === 'user'
                                            ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white'
                                            : 'bg-white/10 text-gray-100'
                                        } rounded-2xl px-4 py-3`}
                                >
                                    <p className="whitespace-pre-wrap leading-relaxed">
                                        {getMessageText(message)}
                                    </p>

                                    {/* Tool Parts */}
                                    {getToolParts(message).map((part, i) => (
                                        <div key={i}>
                                            {renderToolPart(
                                                part as {
                                                    type: string;
                                                    state?: string;
                                                    input?: unknown;
                                                    output?: unknown;
                                                }
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* User Avatar */}
                                {message.role === 'user' && (
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                        <User className="w-4 h-4 text-white" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Typing Indicator */}
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div className="bg-white/10 rounded-2xl px-4 py-3">
                                <div className="flex items-center gap-1">
                                    <span
                                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                        style={{ animationDelay: '0ms' }}
                                    />
                                    <span
                                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                        style={{ animationDelay: '150ms' }}
                                    />
                                    <span
                                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                        style={{ animationDelay: '300ms' }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-white/5">
                    <div className="flex items-center gap-3">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Tell me about your business..."
                            disabled={status !== 'ready'}
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 
                       text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                       focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all
                       disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <button
                            type="submit"
                            disabled={status !== 'ready' || !input.trim()}
                            className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-green-500 
                       flex items-center justify-center text-white
                       hover:shadow-lg hover:shadow-cyan-500/25 transition-all
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                        >
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
