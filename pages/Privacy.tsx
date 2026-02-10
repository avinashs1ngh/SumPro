import React from 'react';
import ScrollReveal from '../components/ui/ScrollReveal';

const Privacy: React.FC = () => {
    return (
        <div className="pt-24 pb-20 min-h-screen bg-dark">
            <div className="container mx-auto px-6 max-w-4xl">
                <ScrollReveal animation="fade-up">
                    <h1 className="text-4xl font-bold text-white mb-8 text-center">Privacy Policy</h1>
                    <div className="glass-panel p-8 md:p-12 rounded-2xl space-y-6 text-gray-300 leading-relaxed">
                        <p className="text-sm text-gray-500 mb-6">Last Updated: May 20, 2024</p>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
                            <p>
                                We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request customer support, or otherwise communicate with us. This information may include your name, email address, phone number, and any other information you choose to provide.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                            <p>
                                We use the information we collect to provide, maintain, and improve our services, including to:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Process transactions and send related information.</li>
                                <li>Send you technical notices, updates, security alerts, and support messages.</li>
                                <li>Respond to your comments, questions, and requests.</li>
                                <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">3. Data Security</h2>
                            <p>
                                We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no internet transmission is completely secure, and we cannot guarantee the security of your data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">4. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@sumpro.in" className="text-primary hover:underline">contact@sumpro.in</a>.
                            </p>
                        </section>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Privacy;
