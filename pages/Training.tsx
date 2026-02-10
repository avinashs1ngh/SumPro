import React from 'react';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import { BookOpen, Code, Cloud, Shield, BarChart, Users } from 'lucide-react';

const MODULES = [
    { title: 'Python & Data Science', icon: BarChart, desc: 'Master Python programming and data analysis techniques.' },
    { title: 'Full Stack Development', icon: Code, desc: 'Build modern web applications with React, Node.js, and MongoDB.' },
    { title: 'AWS & Azure Cloud', icon: Cloud, desc: 'Deploy and manage scalable infrastructure on leading cloud platforms.' },
    { title: 'Cyber Security Basics', icon: Shield, desc: 'Understand network security, encryption, and threat mitigation.' },
    { title: 'HR Analytics', icon: Users, desc: 'Data-driven approaches to human resource management.' },
    { title: 'Business Communication', icon: BookOpen, desc: 'Enhance your professional communication and soft skills.' },
];

const Training: React.FC = () => {
    return (
        <div className="min-h-screen bg-dark">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                        alt="Corporate Training"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/90 to-dark"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <ScrollReveal animation="fade-down">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Corporate <span className="text-primary">Training Curriculum</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                            Empower your workforce with our industry-leading training programs.
                            Designed to bridge the gap between theory and real-world application.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Curriculum Grid */}
            <section className="py-16 bg-secondary/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MODULES.map((module, idx) => (
                            <ScrollReveal key={idx} animation="fade-up" delay={`${idx * 0.1}s`} className="h-full">
                                <div className="glass-panel p-8 rounded-xl h-full border border-white/5 hover:border-primary/50 transition-colors group">
                                    <div className="mb-6 p-4 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                                        <module.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{module.title}</h3>
                                    <p className="text-gray-400">{module.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal animation="zoom-in">
                        <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                            <h2 className="text-3xl font-bold text-white mb-6">Ready to Upskill Your Team?</h2>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                Customized training programs tailored to your business needs.
                                Get in touch with us to schedule a consultation.
                            </p>
                            <Button variant="primary" onClick={() => window.location.href = '/contact'}>
                                Enquire Now
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Training;
