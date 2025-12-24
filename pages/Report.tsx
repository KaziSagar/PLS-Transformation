import React, { useState } from 'react';
import { Download, CheckCircle2, FileText, ArrowRight, ShieldCheck, Zap, Users, RefreshCcw, Sparkles, BookOpen } from 'lucide-react';

const Report: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    industry: 'Technology',
    consent: false
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
    if (!formData.consent) newErrors.consent = 'Consent is required to proceed';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', organization: '', industry: 'Technology', consent: false });
      setErrors({});
    }, 1500);
  };

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative py-32 bg-navy-900 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Digital Transformation" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              Exclusive Whitepaper
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Empathy: The Leadership Superpower for Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
              Discover why emotional intelligence is no longer a "soft skill," but the critical operational requirement for navigating technological change.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
                <BookOpen className="w-4 h-4 text-gold-500" />
                Knowledge Extraction
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-12 leading-tight uppercase tracking-tight">Key Benefits of People-First Leadership</h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Reduced Resistance",
                    desc: "Learn how empathetic communication dismantles organizational inertia and builds early buy-in for new tools.",
                    icon: Zap
                  },
                  {
                    title: "Increased Adoption Rates",
                    desc: "Understand the psychological drivers that lead to faster technology proficiency across diverse teams.",
                    icon: Users
                  },
                  {
                    title: "Sustained Resilience",
                    desc: "Build a workforce that views digital disruption as an opportunity for growth rather than a threat to security.",
                    icon: ShieldCheck
                  }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="shrink-0 w-14 h-14 bg-navy-900/5 flex items-center justify-center text-gold-500 rounded-sm group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-300 shadow-sm">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy-900 mb-2 uppercase tracking-wider">{benefit.title}</h4>
                      <p className="text-gray-500 leading-relaxed text-sm font-light">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-navy-900 rounded-sm shadow-2xl relative overflow-hidden group border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" 
                  alt="Leadership Report Cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/40 to-navy-900/80" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                   <div className="w-24 h-24 bg-gold-500/10 border border-gold-500/20 rounded-full flex items-center justify-center mb-8 backdrop-blur-md">
                      <FileText className="w-10 h-10 text-gold-500" />
                   </div>
                   <h3 className="text-3xl font-serif font-bold text-white mb-4">March 2025 Impact Report</h3>
                   <div className="w-12 h-1 bg-gold-500 mb-6" />
                   <div className="inline-block px-4 py-1.5 bg-gold-500/90 text-navy-900 text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-xl">
                     Available Now
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Our March Section */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 uppercase tracking-tight">Download Our March Report</h2>
            <p className="text-gray-400 text-lg mb-12 font-light">
              Enter your professional details below to receive the full whitepaper and our monthly newsletter of transformation insights.
            </p>
            
            <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 border border-white/10 rounded-sm shadow-2xl min-h-[500px] flex flex-col justify-center border-b-8 border-gold-500">
              {isSubmitted ? (
                <div className="space-y-8 animate-in zoom-in-95 duration-700">
                  <div className="w-24 h-24 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
                     <CheckCircle2 size={48} />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-4xl font-serif font-bold text-white">Download link sent</h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto font-light">
                      Thank you for your interest. A unique link to access the <strong>March 2025 Impact Report</strong> has been sent to your email.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 text-gold-500 font-bold text-[10px] uppercase tracking-widest hover:text-white transition-colors"
                  >
                    <RefreshCcw size={14} /> Download another report
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="text-left">
                      <label className={`block text-[10px] font-bold ${errors.name ? 'text-red-400' : 'text-gray-500'} uppercase tracking-widest mb-2`}>Full Name</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/10'} px-6 py-4 rounded-sm text-sm text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-white/20`} 
                        placeholder="Jane Cooper" 
                      />
                      {errors.name && <p className="text-[10px] text-red-500 mt-2 font-bold uppercase tracking-widest">{errors.name}</p>}
                    </div>
                    <div className="text-left">
                      <label className={`block text-[10px] font-bold ${errors.email ? 'text-red-400' : 'text-gray-500'} uppercase tracking-widest mb-2`}>Work Email</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/10'} px-6 py-4 rounded-sm text-sm text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-white/20`} 
                        placeholder="jane@enterprise.com" 
                      />
                      {errors.email && <p className="text-[10px] text-red-500 mt-2 font-bold uppercase tracking-widest">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="text-left">
                      <label className={`block text-[10px] font-bold ${errors.organization ? 'text-red-400' : 'text-gray-500'} uppercase tracking-widest mb-2`}>Organization</label>
                      <input 
                        type="text" 
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        className={`w-full bg-white/10 border ${errors.organization ? 'border-red-500' : 'border-white/10'} px-6 py-4 rounded-sm text-sm text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-white/20`} 
                        placeholder="Global Tech Solutions" 
                      />
                      {errors.organization && <p className="text-[10px] text-red-500 mt-2 font-bold uppercase tracking-widest">{errors.organization}</p>}
                    </div>
                    <div className="text-left">
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Industry</label>
                      <select 
                        value={formData.industry}
                        onChange={(e) => setFormData({...formData, industry: e.target.value})}
                        className="w-full bg-white/10 border border-white/10 px-6 py-4 rounded-sm text-sm text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                      >
                        <option className="bg-navy-900">Technology</option>
                        <option className="bg-navy-900">Healthcare</option>
                        <option className="bg-navy-900">Manufacturing</option>
                        <option className="bg-navy-900">Financial Services</option>
                        <option className="bg-navy-900">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-3 mb-10 text-left">
                    <div className="flex items-center gap-3">
                      <div className="relative flex items-center">
                        <input 
                          type="checkbox" 
                          id="consent"
                          checked={formData.consent}
                          onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                          className={`peer w-5 h-5 bg-white/10 border ${errors.consent ? 'border-red-500' : 'border-white/20'} rounded-sm checked:bg-gold-500 checked:border-gold-500 transition-all cursor-pointer appearance-none`}
                        />
                        <CheckCircle2 className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 w-3 h-3 text-navy-900 left-1 top-1 transition-opacity" />
                      </div>
                      <label htmlFor="consent" className={`text-xs ${errors.consent ? 'text-red-400' : 'text-gray-400'} cursor-pointer select-none font-medium leading-relaxed`}>
                        I agree to receive insights, resources, and updates from PLS. I can unsubscribe anytime.
                      </label>
                    </div>
                    {errors.consent && <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest pl-8">{errors.consent}</p>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-16 py-6 bg-gold-500 text-navy-900 font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-all shadow-2xl inline-flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Preparing Download...' : 'Download Report Now'}
                    <Download className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
            
            <p className="text-[10px] text-gray-600 mt-12 uppercase tracking-widest">
              By downloading, you agree to our privacy policy and data protection terms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Report;