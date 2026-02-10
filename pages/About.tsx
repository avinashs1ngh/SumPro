import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Lightbulb, Heart, Shield, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const CORE_VALUES = [
    { icon: Target, title: "Precision", description: "Executing every task with exactitude and attention to detail." },
    { icon: Shield, title: "Integrity", description: "Upholding the highest standards of ethics and transparency." },
    { icon: Lightbulb, title: "Innovation", description: "Constantly evolving to meet the challenges of tomorrow." },
    { icon: Heart, title: "Empathy", description: "Understanding the human element behind every corporate need." }
];

const TIMELINE = [
    { year: "2012", title: "Inception", description: "SumPRO was founded with a mission to simplify corporate compliance." },
    { year: "2015", title: "Expansion", description: "Expanded operations to 5 major cities across India, establishing regional HQs." },
    { year: "2018", title: "Global Reach", description: "Started serving international clients with remote infrastructure support." },
    { year: "2021", title: "Digital First", description: "Launched our proprietary digital platform for HR and Compliance management." },
    { year: "2024", title: "AI Integration", description: "Integrating AI-driven insights into our core service offerings." }
];

const About: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-dark min-h-screen overflow-x-hidden selection:bg-primary selection:text-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* REPLACED motion.img with standard img for Performance */}
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Team Collaboration"
                        className="w-full h-full object-cover opacity-40"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center pt-20">
                    <ScrollReveal animation="fade-up">
                        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <span className="text-primary font-bold text-sm uppercase tracking-widest">Our Story</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                            Orchestrating <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Excellence</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                            We are the architects of modern corporate infrastructure, bridging the gap between sophisticated technology and human potential.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* The Timeline Journey (High Contrast Fix) */}
            <section className="py-24 relative overflow-hidden bg-slate-900/50">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                {/* Center Line (Desktop) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <ScrollReveal animation="fade-up">
                        <div className="text-center mb-24">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">A Decade of Evolution</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">From a small consultancy to a global infrastructure partner.</p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-12 md:space-y-24">
                        {TIMELINE.map((item, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Card */}
                                <div className="flex-1 text-center md:text-left w-full">
                                    <ScrollReveal animation={index % 2 === 0 ? "fade-left" : "fade-right"}>
                                        <div className={`relative p-8 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 group shadow-2xl ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>

                                            {/* Huge Watermark Year */}
                                            <span className={`text-8xl font-black text-white/5 absolute -bottom-4 -z-0 select-none ${index % 2 === 0 ? 'right-4' : 'left-4'}`}>
                                                {item.year}
                                            </span>

                                            <div className="relative z-10">
                                                <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
                                                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Milestone</span>
                                                    <div className="h-px w-12 bg-primary/50"></div>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                                <p className="text-slate-300 leading-relaxed font-light text-lg">{item.description}</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </div>

                                {/* Center Dot Pulse */}
                                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-dark border-4 border-slate-800 shadow-[0_0_30px_rgba(249,115,22,0.3)] shrink-0 group">
                                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                                    <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-20"></div>
                                </div>

                                {/* Empty Spacer */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <ScrollReveal animation="fade-up">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Driven by <span className="text-primary">Values</span></h2>
                            <p className="text-slate-400">The principles that guide every decision we make.</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {CORE_VALUES.map((value, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-primary/40 transition-all group h-full shadow-lg"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-transparent rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <value.icon className="w-7 h-7 text-primary group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-24 relative overflow-hidden bg-white/5">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                        <ScrollReveal animation="fade-right" className="lg:col-span-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Meet the <span className="text-primary">Leadership</span>
                            </h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                Our leadership team brings together decades of experience in technology, law, and human capital management. We are united by a shared passion for excellence.
                            </p>
                            <Button variant="outline" size="lg" onClick={() => navigate('/careers')}>
                                Join Our Team <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </ScrollReveal>

                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={`${i * 0.1}s`}>
                                    <div className="group text-center">
                                        <div className="relative mb-6 inline-block">
                                            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary transition-all duration-300">
                                                <img
                                                    src={`https://images.unsplash.com/photo-${i === 1 ? '1507003211169-0a1dd7228f2d' : i === 2 ? '1573497019940-1c28c88b4f3e' : '1519085360753-af0119f7cbe7'}?q=80&w=400&auto=format&fit=crop`}
                                                    alt="Team Member"
                                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                            <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                                <Award className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-1">Leader Name</h4>
                                        <p className="text-primary text-sm font-medium uppercase tracking-wider">Designation</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 opacity-90"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <ScrollReveal animation="zoom-in">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Write Your Success Story?</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Button
                                variant="white"
                                size="lg"
                                onClick={() => navigate('/contact')}
                                className="shadow-2xl hover:scale-105"
                            >
                                Get in Touch
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-black/20 border-white/40 text-white hover:bg-black/40 hover:border-white"
                                onClick={() => navigate('/services')}
                            >
                                View Services
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default About;