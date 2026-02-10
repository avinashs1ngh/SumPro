import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, MessageCircle, Loader2, CheckCircle, AlertCircle, Linkedin } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    const [status, setStatus] = useState<{ loading: boolean; success: boolean; error: string | null }>({
        loading: false,
        success: false,
        error: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        // Mock submission
        setTimeout(() => {
            setStatus({ loading: false, success: true, error: null });
            setFormData({ firstName: '', lastName: '', email: '', subject: 'General Inquiry', message: '' });
        }, 1500);
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-dark relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal animation="fade-down">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                            Let's <span className="text-primary">Collaborate</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                            Ready to transform your business infrastructure? We're here to help.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Sidebar - Compact Info (Span 4) */}
                    <div className="lg:col-span-4 space-y-6">
                        <ScrollReveal animation="fade-right" delay="0.1s">
                            <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-secondary/30 backdrop-blur-xl">
                                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                        <MessageCircle className="w-4 h-4 text-primary" />
                                    </div>
                                    Contact Information
                                </h3>

                                <div className="space-y-6">
                                    <ContactItem
                                        icon={Phone}
                                        label="Call Us"
                                        value="+91 9288038926"
                                        href="tel:+919288038926"
                                    />
                                    <ContactItem
                                        icon={Mail}
                                        label="Email Us"
                                        value="contact@sumpro.in"
                                        href="mailto:contact@sumpro.in"
                                    />
                                    <ContactItem
                                        icon={MapPin}
                                        label="Headquarters"
                                        value="0028, Maheshpur, Korha, Katihar - 854108"
                                        href="https://maps.google.com"
                                    />
                                    <ContactItem
                                        icon={MapPin}
                                        label="Branch Office"
                                        value="Mayur Vihar -1, Delhi - 110091"
                                        href="https://maps.google.com"
                                    />
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Follow Us</h4>
                                    <div className="flex gap-3">
                                        <SocialBtn icon={Facebook} href="https://www.facebook.com/share/1DRHeYZLnC/" />
                                        <SocialBtn icon={Twitter} href="https://x.com/in_sumPRO" />
                                        <SocialBtn icon={Instagram} href="https://www.instagram.com/sumpro.in" />
                                        <SocialBtn icon={MessageCircle} href="https://wa.link/p4hftd" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Main Area - Form (Span 8) */}
                    <div className="lg:col-span-8">
                        <ScrollReveal animation="fade-left" delay="0.2s" className="h-full">
                            <div className="glass-card p-6 md:p-8 rounded-2xl h-full border border-white/10 bg-white/5 backdrop-blur-xl">
                                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

                                {status.success ? (
                                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle className="w-8 h-8 text-green-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-gray-400 max-w-sm text-sm">
                                            We'll get back to you shortly.
                                        </p>
                                        <button
                                            onClick={() => setStatus({ ...status, success: false })}
                                            className="mt-6 text-primary text-sm font-medium hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form className="space-y-5" onSubmit={handleSubmit}>
                                        {status.error && (
                                            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-start gap-3 text-red-400 text-sm">
                                                <AlertCircle className="w-5 h-5 shrink-0" />
                                                <span>{status.error}</span>
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <InputGroup label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                                            <InputGroup label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                                        </div>
                                        <InputGroup label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} />

                                        <div>
                                            <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Subject</label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                                            >
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Service Request">Service Request</option>
                                                <option value="Partnership">Partnership</option>
                                                <option value="Career">Career</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={4}
                                                className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                            ></textarea>
                                        </div>

                                        <div className="pt-2">
                                            <Button fullWidth size="lg" type="submit" disabled={status.loading}>
                                                {status.loading ? (
                                                    <span className="flex items-center gap-2">
                                                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                                                    </span>
                                                ) : (
                                                    'Send Message'
                                                )}
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactItem = ({ icon: Icon, label, value, href }: any) => (
    <div className="flex items-start gap-4 group">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:text-primary transition-colors text-gray-400">
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">{label}</p>
            <a href={href} className="text-sm font-medium text-white hover:text-primary transition-colors block leading-relaxed">
                {value}
            </a>
        </div>
    </div>
);

const SocialBtn = ({ icon: Icon, href }: any) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"
    >
        <Icon className="w-5 h-5" />
    </a>
);

const InputGroup = ({ label, type = "text", name, value, onChange }: any) => (
    <div>
        <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required
            className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
        />
    </div>
);

export default Contact;