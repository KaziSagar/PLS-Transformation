import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Mail, 
  Quote, 
  Shield, 
  Zap, 
  Target, 
  Check, 
  Eye, 
  Lightbulb, 
  Activity, 
  Users, 
  Settings, 
  BookOpen, 
  Compass, 
  Award, 
  Rocket,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Fingerprint,
  TrendingUp,
  Handshake,
  User
} from 'lucide-react';

const team = [
  { name: "David L. Bartholomew, SHRM-SCP, SPHR", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
  { name: "Christopher T Malloy, MBA", role: "Senior Strategic Advisor, Mergers & Acquisitions", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
  { name: "Angel Pena", role: "Senior Strategic Advisor, Finance & Commercial Strategy", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" },
  { name: "Jason Kitayama, MBA", role: "Principal, Organizational Effectiveness", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
  { name: "Dr Darrin H Brown", role: "Principal, Leadership & Culture", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
  { name: "Shawna A Moser", role: "Principal, Assessment & Performance", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
];

const values = [
  { 
    icon: Shield, 
    title: "PIONEERING", 
    desc: "We forge paths, not follow them. Our values define how we partner with you to unlock potential and navigate the most complex transformation landscapes with confidence.",
    deliver: [
      "Identifying hidden readiness gaps using the PFT Model.",
      "Developing bespoke strategies tailored to your unique market position."
    ]
  },
  { 
    icon: Zap, 
    title: "IMPACTFUL", 
    desc: "Impactful strategies turn friction into forward motion. We align leadership vision with team execution, transforming resistance into buy-in and stagnation into momentum.",
    deliver: [
      "Accelerating post-merger cultural cohesion.",
      "Turning misaligned teams into collaborators who drive shared goals."
    ]
  },
  { 
    icon: Target, 
    title: "POWERFUL", 
    desc: "Powerful transformations create self-sustaining success. We build leadership pipelines that last and ensure your organization is future-proofed against disruption.",
    deliver: [
      "Building resilient, long-term leadership pipelines.",
      "Scaling performance excellence across the entire enterprise."
    ]
  }
];

const clients = [
  { name: 'PCI', color: '#ff4d4d', img: 'https://logo.clearbit.com/pci.com' },
  { name: 'K+S', color: '#ff9f43', img: 'https://logo.clearbit.com/k-plus-s.com' },
  { name: 'ASCEND', color: '#0abde3', img: 'https://logo.clearbit.com/ascendmaterials.com' },
  { name: 'MCCORMICK', color: '#ee5253', img: 'https://logo.clearbit.com/mccormickcorporation.com' },
  { name: 'ENTERPRISE', color: '#10ac84', img: 'https://logo.clearbit.com/enterprise.com' },
  { name: 'SHELL', color: '#feca57', img: 'https://logo.clearbit.com/shell.com' },
  { name: 'CHEVRON', color: '#54a0ff', img: 'https://logo.clearbit.com/chevron.com' },
  { name: 'BP', color: '#1dd1a1', img: 'https://logo.clearbit.com/bp.com' },
  { name: 'HALLIBURTON', color: '#ff3f34', img: 'https://logo.clearbit.com/halliburton.com' },
  { name: 'AURORA CORP', color: '#5f27cd', img: 'https://logo.clearbit.com/aurora.com' },
  { name: 'ZENITH GLOBAL', color: '#ff9ff3', img: 'https://logo.clearbit.com/zenithglobal.com' },
  { name: 'NEXUS SYSTEMS', color: '#48dbfb', img: 'https://logo.clearbit.com/nexussystems.com' },
];

const WhoWeAre: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* 1. Hero Section (Navy-900) */}
      <section className="relative py-48 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Hero background" />
           <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 to-navy-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-8 backdrop-blur-sm">
             <Rocket className="w-4 h-4" />
             The People-First Evolution
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            Empowering People.<br/>Transforming Organizations.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            At PLS, we believe that organizations don't change—people do. We unlock latent performance by aligning leadership, culture, and engagement for enduring impact.
          </p>
        </div>
      </section>

      {/* 2. Founder Quote Card (White) */}
      <section className="py-24 bg-white relative border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-navy-900 flex flex-col md:flex-row shadow-2xl relative overflow-hidden rounded-sm border-b-8 border-gold-500">
              <div className="md:w-5/12 aspect-[4/5] md:aspect-auto overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                   className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000" 
                   alt="David L. Bartholomew" 
                 />
              </div>
              <div className="md:w-7/12 p-10 md:p-16 lg:p-20 flex flex-col justify-center relative bg-navy-900">
                 <Quote className="absolute top-10 right-10 w-32 h-32 text-gold-500/10" />
                 <div className="relative z-10">
                    <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
                      <User className="w-4 h-4" />
                      Message From Our Founder
                    </div>
                    <p className="text-2xl lg:text-4xl font-serif text-white italic leading-relaxed mb-12">
                       "Many transformation programs talk about empowering people, but then focus on processes and compliance, not ownership or growth. At PLS, we believe real change starts and ends with people."
                    </p>
                    <div className="flex flex-col">
                       <span className="text-xl font-bold text-white uppercase tracking-wider mb-1">David L. Bartholomew</span>
                       <span className="text-gold-500 text-[11px] font-bold uppercase tracking-widest">Founder & CEO, PLS Transformation</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Mission & Vision Section (Navy-900) */}
      <section className="py-32 relative overflow-hidden bg-navy-900 border-b border-white/5">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="space-y-12">
              <div className="group">
                <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
                  <Target className="w-4 h-4" />
                  Our Mission
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8 uppercase tracking-tight">
                  We transform organizations by unlocking the power of their people.
                </h2>
                <p className="text-xl text-gray-300 font-light leading-relaxed max-w-xl">
                  Through aligned leadership, a resilient culture, and deep employee engagement, we turn organizational potential into permanent performance.
                </p>
              </div>

              <div className="pt-12 border-t border-white/10 group">
                <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
                  <Eye className="w-4 h-4" />
                  Our Vision
                </div>
                <p className="text-2xl font-serif font-bold text-white leading-snug uppercase tracking-wide">
                  To be the global benchmark for people-driven transformation, where every organization we touch becomes a model of sustainable growth and human-centric excellence.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-white/5 rounded-sm shadow-2xl p-4 overflow-hidden group border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                  alt="Transformation Team" 
                />
                <div className="absolute inset-4 border border-white/20 pointer-events-none" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gold-500 p-8 flex flex-col justify-end shadow-2xl hidden md:flex">
                <Zap className="w-8 h-8 text-navy-900 mb-4" />
                <p className="text-navy-900 text-[11px] font-bold uppercase tracking-widest leading-tight">
                  Driving Change<br/>Since 2005
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values Grid (White) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
             <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
               <Fingerprint className="w-4 h-4 text-gold-500" />
               Our DNA
             </div>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 uppercase tracking-tight">The Principles That Guide Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col bg-white shadow-xl hover:shadow-2xl transition-all border-t-4 border-gold-500 group overflow-hidden h-full">
                <div className="p-10 pb-6">
                  <div className="w-16 h-16 bg-navy-900/5 flex items-center justify-center rounded-sm mb-8 group-hover:bg-gold-500 transition-colors duration-500 shadow-sm">
                    <v.icon className="w-8 h-8 text-navy-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-navy-900 mb-6 tracking-widest uppercase">{v.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 font-light">{v.desc}</p>
                </div>
                
                <div className="px-10 pb-10 mt-auto">
                  <div className="pt-8 border-t border-gray-100">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-900 mb-6 flex items-center gap-3">
                      <div className="w-6 h-[1px] bg-gold-500" /> How We Deliver
                    </h5>
                    <ul className="space-y-4">
                      {v.deliver.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
                          <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                          <span className="text-xs text-gray-500 leading-relaxed font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Philosophy Section (Navy-900) */}
      <section className="py-32 bg-navy-900 relative overflow-hidden text-white border-b border-white/5">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column: Our Philosophy */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
                <Lightbulb className="w-4 h-4" />
                Our Philosophy
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight uppercase tracking-tight">
                Organizations Don't Transform—<span className="text-gold-500">People</span> Do.
              </h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-12 italic border-l-2 border-gold-500/50 pl-8">
                "Real transformation happens when every employee feels like an architect of the new future."
              </p>
              <div className="space-y-10">
                <div className="group">
                  <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-gold-500 group-hover:w-16 transition-all duration-500" />
                    Beyond Compliance
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-md font-light">
                    Compliance is mandated; commitment is earned. We move teams from 'having to' to 'wanting to', creating authentic ownership.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-gold-500 group-hover:w-16 transition-all duration-500" />
                    Culture as the Engine
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-md font-light">
                    Strategy is the map, but culture is the engine. We ensure your organizational engine is tuned for high performance and resilience.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Our Philosophy in Action */}
            <div className="bg-white/5 backdrop-blur-sm p-10 md:p-16 border border-white/10 relative rounded-sm shadow-2xl">
               <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl" />
               <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
                  <Zap className="w-4 h-4" />
                  In Action
               </div>
               <h3 className="text-3xl font-serif font-bold mb-12 uppercase tracking-wide">How We Breathe Life into Belief</h3>
               <div className="space-y-12">
                  <div className="flex gap-8 group">
                     <div className="shrink-0 w-14 h-14 bg-white/5 rounded-sm flex items-center justify-center text-gold-500 border border-white/10 group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-500 shadow-xl">
                        <Users className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-white uppercase tracking-widest mb-3 group-hover:text-gold-500 transition-colors">Listening Before Leading</h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                           We identify the unspoken fears and aspirations within your workforce, turning hidden resistance into active participation.
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-8 group">
                     <div className="shrink-0 w-14 h-14 bg-white/5 rounded-sm flex items-center justify-center text-gold-500 border border-white/10 group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-500 shadow-xl">
                        <Settings className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-white uppercase tracking-widest mb-3 group-hover:text-gold-500 transition-colors">Radical Ownership</h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                           We don't just hand over a strategy. We build the internal capability for your people to lead, sustain, and evolve the solution themselves.
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-8 group">
                     <div className="shrink-0 w-14 h-14 bg-white/5 rounded-sm flex items-center justify-center text-gold-500 border border-white/10 group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-500 shadow-xl">
                        <Activity className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-white uppercase tracking-widest mb-3 group-hover:text-gold-500 transition-colors">Measurable Humanity</h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                           We track cultural health and leadership impact with the same rigor you apply to your quarterly financial reports.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PLS Story Section (White) */}
      <section className="py-32 bg-white overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-24 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
                <TrendingUp className="w-4 h-4 text-gold-500" />
                Evolution of Impact
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-navy-900 leading-tight uppercase tracking-tight">
                 EMPOWERING PEOPLE, TRANSFORMING ORGANIZATIONS: THE PLS STORY
              </h2>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="p-10 bg-gray-50 border-t-4 border-navy-900 shadow-xl group hover:-translate-y-2 transition-all duration-500">
                    <BookOpen className="w-10 h-10 text-gold-500 mb-8" />
                    <h3 className="text-xl font-bold text-navy-900 uppercase tracking-wider mb-4 leading-tight group-hover:text-gold-500 transition-colors">Building a Foundation of Purpose</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                       Our journey began with a clear realization: the missing link in most transformation programs was the human element. We set out to build a consultancy that placed purpose and people at the core of every strategy.
                    </p>
                 </div>
                 <div className="p-10 bg-navy-900 border-t-4 border-gold-500 shadow-xl group hover:-translate-y-2 transition-all duration-500 text-white">
                    <Compass className="w-10 h-10 text-gold-500 mb-8" />
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4 leading-tight group-hover:text-gold-500 transition-colors">When Change Became Our Teacher</h3>
                    <p className="text-gray-300 text-sm leading-relaxed font-light">
                       Through decades of navigating high-stakes organizational shifts, we learned that resistance isn't an obstacle—it's feedback. These lessons forged our resilient People-First Transformation methodology.
                    </p>
                 </div>
                 <div className="p-10 bg-gray-50 border-t-4 border-gold-500 shadow-xl group hover:-translate-y-2 transition-all duration-500">
                    <Award className="w-10 h-10 text-navy-900 mb-8" />
                    <h3 className="text-xl font-bold text-navy-900 uppercase tracking-wider mb-4 leading-tight group-hover:text-gold-500 transition-colors">Evolving to Make a Greater Impact</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                       What started as local expertise grew into a global standard for organizational effectiveness. We've scaled our impact by helping thousands of leaders align vision with reality.
                    </p>
                 </div>
                 <div className="p-10 bg-gold-500 border-t-4 border-navy-900 shadow-xl group hover:-translate-y-2 transition-all duration-500">
                    <Rocket className="w-10 h-10 text-navy-900 mb-8" />
                    <h3 className="text-xl font-bold text-navy-900 uppercase tracking-wider mb-4 leading-tight hover:text-white transition-colors">Transforming Organizations, Empowering People</h3>
                    <p className="text-navy-900/80 text-sm leading-relaxed font-medium">
                       Today, PLS stands as a beacon for human-centric transformation. We prove every day that when you empower the individual, the organization transforms itself naturally and sustainably.
                    </p>
                 </div>
              </div>
              
              <div className="relative group lg:sticky lg:top-32">
                 <div className="absolute -inset-6 bg-navy-900/5 blur-3xl" />
                 <div className="relative overflow-hidden rounded-sm shadow-2xl border-4 border-white">
                   <img 
                     src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                     alt="Collaborative Team" 
                   />
                   <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent">
                      <p className="text-white font-serif italic text-2xl leading-relaxed">
                        "The legacy of a truly great organization isn't written in its reports, but in the lives of the people who build it."
                      </p>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. Our Clients Slideshow Section (Navy-900) */}
      <section className="py-32 bg-navy-900 overflow-hidden relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center mb-16 relative z-20 gap-8 text-center md:text-left">
           <div>
              <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
                <Handshake className="w-4 h-4" />
                Strategic Partnerships
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase tracking-tight">Trusted By World-Class Organizations</h2>
           </div>
        </div>
        
        <div className="max-w-[100vw] relative">
          {/* Marquee Container */}
          <div 
            ref={marqueeRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-12 px-12 gap-10"
            style={{ scrollBehavior: 'smooth' }}
          >
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 snap-center min-w-[300px] h-48 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-sm hover:border-gold-500/50 hover:bg-white/10 transition-all group/item p-8 relative overflow-hidden"
              >
                 <div 
                    className="absolute top-0 left-0 w-full h-1 opacity-40 group-hover:opacity-100 transition-opacity" 
                    style={{ backgroundColor: client.color }} 
                 />
                 <div className="mb-6 w-full h-16 flex items-center justify-center">
                    <img 
                      src={client.img} 
                      alt={client.name} 
                      className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-40 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
                    />
                 </div>
                 <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] group-hover:text-gold-500 transition-colors">
                    {client.name}
                 </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons moved to bottom */}
          <div className="flex justify-center gap-6 mt-12 relative z-20">
              <button 
                onClick={scrollLeft}
                className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-all shadow-xl backdrop-blur-sm group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
              <button 
                onClick={scrollRight}
                className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-all shadow-xl backdrop-blur-sm group"
              >
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
           </div>
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* 8. Team Grid (White) */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
             <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
               <Users className="w-4 h-4 text-gold-500" />
               Our Leadership
             </div>
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-navy-900 uppercase tracking-tight">The Architects of Change</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {team.map((m, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden mb-10 aspect-[4/5] rounded-sm shadow-2xl bg-gray-50">
                  <img src={m.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt={m.name} />
                  <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 hover:bg-white transition-all">
                          <Linkedin className="w-5 h-5" />
                       </a>
                       <a href={`mailto:info@plstransformation.com`} className="w-12 h-12 bg-navy-900 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-all">
                          <Mail className="w-5 h-5" />
                       </a>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 text-center md:text-left">
                   <h4 className="text-2xl font-bold text-navy-900 uppercase tracking-wider leading-tight group-hover:text-gold-500 transition-colors">{m.name}</h4>
                   <div className="w-16 h-[2px] bg-gold-500/5 mx-auto md:mx-0" />
                   <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.2em]">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA Section (Navy-900) */}
      <section className="py-32 bg-navy-900 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gold-500/5 skew-x-12 translate-x-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
             <Rocket className="w-4 h-4" />
             Future Ready
           </div>
           <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight uppercase tracking-tight">Ready to Architect Your Own Future?</h2>
           <p className="text-gray-400 mb-16 text-xl font-light leading-relaxed">
              Join the hundreds of organizations that have turned cultural resistance into transformation momentum. Let's build something lasting together.
           </p>
           <div className="flex justify-center">
             <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-gold-500 text-navy-900 font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-all group shadow-2xl">
                Book Your Strategic Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;