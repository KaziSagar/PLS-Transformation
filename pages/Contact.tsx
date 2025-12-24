import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Send, CheckCircle2, ArrowRight, Info, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate phone if entered
    if (formData.phone && formData.phone.trim().length > 0) {
      const digitsOnly = formData.phone.replace(/\D/g, '');
      if (digitsOnly.length < 7) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief description of your needs';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setErrors({});
    }, 1500);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Allow only numbers, plus, minus, parenthesis and spaces
    const cleaned = val.replace(/[^0-9+\-()\s]/g, '');
    setFormData({ ...formData, phone: cleaned });
  };

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="relative py-32 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://picsum.photos/seed/contact-hero/1920/1080" className="w-full h-full object-cover" alt="Contact Hero" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-8 backdrop-blur-md">
            <Phone className="w-4 h-4" />
            Global Concierge
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">Let's Transform Together</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Your journey to unlocking organizational potential starts here. Reach out to us today and let's create a roadmap for lasting success.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 bg-white relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
              <Info className="w-4 h-4 text-gold-500" />
              Information
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-navy-900 uppercase tracking-tight leading-none">Get in touch</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: Mail, label: "Email Us", value: "info@plstransformation.com" },
               { icon: Phone, label: "Phone Number", value: "+1 281-947-5747" },
               { icon: MapPin, label: "Address", value: "440 Louisiana St., Ste. 900, Houston, TX 77002" }
             ].map((item, i) => (
               <div key={i} className="bg-white shadow-2xl p-10 text-center border-t-4 border-gold-500 hover:translate-y-[-10px] transition-all rounded-sm">
                  <item.icon className="w-10 h-10 text-gold-500 mx-auto mb-6 shadow-xl rounded-sm" />
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{item.label}</h4>
                  <p className="text-lg font-bold text-navy-900">{item.value}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Form Side */}
              <div>
                 <div className="bg-navy-900 p-12 md:p-16 rounded-sm shadow-2xl relative min-h-[600px] flex flex-col justify-center border-b-8 border-gold-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rotate-45 translate-x-16 -translate-y-16" />
                    
                    {isSubmitted ? (
                      <div className="relative z-10 text-center space-y-8 animate-in zoom-in-95 duration-700">
                        <div className="w-24 h-24 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
                           <CheckCircle2 size={48} />
                        </div>
                        <div className="space-y-4">
                          <h2 className="text-4xl font-serif font-bold text-white leading-tight">Inquiry Received</h2>
                          <p className="text-gray-400 text-lg leading-relaxed max-w-sm mx-auto font-light">
                            Thank you for reaching out. Your request is being prioritized, and one of our transformation consultants will contact you within 24 business hours.
                          </p>
                        </div>
                        <button 
                          onClick={() => setIsSubmitted(false)}
                          className="px-8 py-4 bg-gold-500 text-navy-900 font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-xl"
                        >
                          Send another message
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
                          <MessageSquare className="w-4 h-4" />
                          Direct Inquiry
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-2 leading-none uppercase tracking-tight">Start Your Transformation</h2>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-10 mt-4 font-light">Let's discuss how we can ignite your organizational potential.</p>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className={`block text-[10px] font-bold ${errors.name ? 'text-red-400' : 'text-gray-500'} uppercase tracking-widest mb-2`}>Full Name</label>
                                <input 
                                    type="text" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} px-6 py-4 rounded-sm text-sm text-white focus:border-gold-500 transition-colors focus:outline-none placeholder:text-white/20`} 
                                    placeholder="John Doe" 
                                />
                                {errors.name && <p className="text-[10px] text-red-500 mt-2 font-bold uppercase tracking-widest">{errors.name}</p>}
                              </div>
                              <div>
                                <label className={`block text-[10px] font-bold ${errors.email ? 'text-red-400' : 'text-gray-500'} uppercase tracking-widest mb-2`}>Email</label>
                                <input 
                                    type="email" 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} px-6 py-4 rounded-sm text-sm text-white focus:border-gold-500 transition-colors focus:outline-none placeholder:text-white/20`} 
                                    placeholder="john@company.com" 
                                />
                                {errors.email && <p className="text-[10px] text-red-500 mt-2 font-bold uppercase tracking-widest">{errors.email}</p>}
                              </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className={`block text-[10px] font-bold ${errors.phone ? 'text-red-400' : 'text-gray-500'} uppercase tracking-widest mb-2`}>Phone Number</label>
                                <input 
                                    type="tel" 
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} px-6 py-4 rounded-sm text-sm text-white focus:border-gold-500 transition-colors focus:outline-none placeholder:text-white/20`} 
                                    placeholder="+1 (555) 000-0000" 
                                />
                                {errors.phone && <p className="text-[10px] text-red-500 mt-2 font-bold uppercase tracking-widest">{errors.phone}</p>}
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Company Name</label>
                                <input 
                                    type="text" 
                                    value={formData.company}
                                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-sm text-sm text-white focus:border-gold-500 transition-colors focus:outline-none placeholder:text-white/20" 
                                    placeholder="Organization Inc." 
                                />
                              </div>
                          </div>
                          <div>
                              <label className={`block text-[10px] font-bold ${errors.message ? 'text-red-400' : 'text-gray-500'} uppercase tracking-widest mb-2`}>Message</label>
                              <textarea 
                                rows={4} 
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} px-6 py-4 rounded-sm text-sm text-white focus:border-gold-500 transition-colors focus:outline-none resize-none placeholder:text-white/20`} 
                                placeholder="How can we help you reach your goals?" 
                              />
                              {errors.message && <p className="text-[10px] text-red-500 mt-2 font-bold uppercase tracking-widest">{errors.message}</p>}
                          </div>
                          <button 
                            disabled={isSubmitting}
                            className="w-full bg-gold-500 text-navy-900 font-bold uppercase tracking-widest text-xs py-5 hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-2xl"
                          >
                              {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                          </button>
                        </form>
                      </>
                    )}
                 </div>
              </div>

              {/* Text Side */}
              <div>
                 <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
                   <CheckCircle2 className="w-4 h-4 text-gold-500" />
                   The PLS Choice
                 </div>
                 <h2 className="text-4xl font-serif font-bold text-navy-900 mb-12 leading-tight uppercase tracking-tight">Why Partner With Us?</h2>
                 <div className="space-y-10">
                    {[
                      { 
                        title: "People-Centric Approach", 
                        desc: "We focus on unlocking the potential of your people to drive lasting success. Change starts within." 
                      },
                      { 
                        title: "Proven Methodology", 
                        desc: "Our People-First Transformation™ (PFT) model ensures leadership, culture, and engagement work in harmony." 
                      },
                      { 
                        title: "Measurable Results", 
                        desc: "From accelerated adoption to sustained performance improvements, we deliver clear and quantifiable ROI." 
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 group">
                         <div className="shrink-0 w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 shadow-sm">
                            <Check className="w-6 h-6" />
                         </div>
                         <div>
                            <h4 className="text-xl font-bold text-navy-900 mb-2 uppercase tracking-wider group-hover:text-gold-500 transition-colors">{item.title}</h4>
                            <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>

                 <div className="mt-16 p-10 bg-gray-50 border-t-4 border-navy-900 rounded-sm shadow-xl">
                    <h5 className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-4">Book a Direct Call</h5>
                    <p className="text-sm text-gray-600 mb-8 leading-relaxed font-light">
                       Ready to dive deeper? Schedule a discovery call with one of our transformation experts at your convenience.
                    </p>
                    <button className="px-8 py-4 bg-navy-900 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-gold-500 hover:text-navy-900 transition-all shadow-xl">
                       Open Calendar
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;