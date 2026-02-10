import React from 'react';
import ScrollReveal from '../components/ui/ScrollReveal';

const Terms: React.FC = () => {
    return (
        <div className="pt-24 pb-20 min-h-screen bg-dark">
            <div className="container mx-auto px-6 max-w-4xl">
                <ScrollReveal animation="fade-up">
                    <h1 className="text-4xl font-bold text-white mb-8 text-center">Terms of Service</h1>
                    <div className="glass-panel p-8 md:p-12 rounded-2xl space-y-6 text-gray-300 leading-relaxed">
                        <p className="text-sm text-gray-500 mb-6">Last Updated: May 20, 2024</p>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">2. Description of Services</h2>
                            <p>
                                sumPRO provides technology consulting, HR services, and statutory compliance solutions. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">3. User Responsibilities</h2>
                            <p>
                                You are responsible for your use of the services and for any content you provide. You agree not to use the services for any illegal or unauthorized purpose and to comply with all locally applicable laws regarding online conduct.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">4. Limitation of Liability</h2>
                            <p>
                                To the fullest extent permitted by law, sumPRO shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">5. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                            </p>
                        </section>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Terms;
