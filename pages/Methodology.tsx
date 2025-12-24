
import React from 'react';
import { Link } from 'react-router-dom';
// Added Rocket to the import list below
import { CheckCircle2, Sliders, BarChart3, Target, RefreshCw, Zap, Users, Shield, Settings, TrendingUp, Sparkles, ArrowRight, Compass, ShieldCheck, Activity, Lightbulb, Layers, Rocket } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="relative py-32 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://picsum.photos/seed/methodology/1920/1080" className="w-full h-full object-cover" alt="Methodology" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-8 backdrop-blur-md">
            <Compass className="w-4 h-4" />
            The PFT Framework
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">People-First Transformation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Where Leadership, Culture, and Engagement Converge to Drive Impactful and Lasting Change.
          </p>
        </div>
      </section>

      {/* Philosophy Introduction Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-serif font-bold text-navy-900 leading-relaxed italic">
            "Transformation demands more than strategy and operations—it begins and thrives with people. While strategy sets the vision and operations ensure efficiency, it is the human element that determines the ultimate success of any transformation."
          </p>
          <div className="mt-12 w-24 h-1 bg-gold-500 mx-auto" />
        </div>
      </section>

      {/* Designing Solutions Section */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
             <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
                <Settings className="w-4 h-4" />
                Designing Solutions
             </div>
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-none">Delivering Impact</h2>
             <p className="text-gray-400 max-w-2xl mx-auto font-light mt-8">Every solution begins with thoughtful, strategic design guided by our five core standards of excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: Target, title: "Actionable", desc: "Defines clear next steps for every level." },
              { icon: BarChart3, title: "Measurable", desc: "Tracks results and quantifiable growth." },
              { icon: Sliders, title: "Reliable", desc: "Proven methods that minimize disruption." },
              { icon: ShieldCheck, title: "Achievable", desc: "Builds on existing strengths and resources." },
              { icon: RefreshCw, title: "Sustainable", desc: "Ensures results last beyond the engagement." }
            ].map((std, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 text-center border-t-4 border-gold-500 hover:bg-gold-500 hover:shadow-2xl transition-all duration-300 group border border-white/10 rounded-sm">
                <std.icon className="w-10 h-10 text-gold-500 mx-auto mb-6 group-hover:scale-110 group-hover:text-navy-900 transition-all shadow-xl" />
                <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider group-hover:text-navy-900 transition-colors">{std.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light group-hover:text-navy-900/70 transition-colors">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Data Behind People-First Transformation */}
      <section className="py-32 bg-white text-navy-900 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
            <Activity className="w-4 h-4 text-gold-500" />
            Data-Driven Evolution
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight text-navy-900 uppercase tracking-tight">
            The Data Behind People-First Transformation
          </h2>
          <div className="space-y-12">
             <p className="text-gray-600 leading-relaxed text-xl md:text-2xl font-light max-w-4xl mx-auto">
               Gallup research shows that organizations prioritizing employee engagement see 41% lower absenteeism and 17% higher productivity—foundations of transformation success.
             </p>
             <div className="bg-gray-50 p-12 md:p-16 border border-gray-100 rounded-sm shadow-sm max-w-3xl mx-auto relative group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gold-500" />
                <h4 className="text-gold-500 text-6xl md:text-8xl font-bold mb-6 group-hover:scale-110 transition-transform duration-500">2.5x</h4>
                <p className="text-navy-900 text-lg md:text-xl font-medium uppercase tracking-widest mb-4">Increased Likelihood of Success</p>
                <p className="text-gray-600 font-light leading-relaxed">
                  Organizations that prioritize the people side of transformation are 2.5x more likely to exceed performance targets and maintain long-term market leadership.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION: The PFT Model Architecture */}
      <section className="py-32 bg-navy-900 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
              <Layers className="w-4 h-4" />
              PFT Architecture
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-tight leading-none">Understanding the PFT Model</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mt-12" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Diagram Column */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg aspect-square">
                <div className="absolute inset-0 border-2 border-dashed border-gold-500/20 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative z-20 text-center bg-white/5 backdrop-blur-xl rounded-full p-8 shadow-2xl border border-white/10">
                    <div className="text-[10px] font-bold text-gold-500 uppercase tracking-[0.4em] mb-4">The Convergence</div>
                    <div className="text-3xl font-serif font-bold tracking-widest text-white">PFT MODEL</div>
                  </div>
                </div>

                <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="animate-[spin_40s_linear_infinite_reverse] flex flex-col items-center">
                       <div className="bg-navy-800 border border-gold-500 p-4 rounded-full shadow-2xl">
                          <Settings className="w-8 h-8 text-gold-500 animate-[spin_10s_linear_infinite]" />
                       </div>
                       <div className="mt-4 bg-navy-800 border border-gold-500 px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest shadow-2xl text-white whitespace-nowrap">
                          Aligned Culture
                       </div>
                    </div>
                  </div>
                  <div className="absolute top-[75%] left-[93.3%] -translate-x-1/2 -translate-y-1/2">
                    <div className="animate-[spin_40s_linear_infinite_reverse] flex flex-col items-center">
                       <div className="bg-navy-800 border border-gold-500 p-4 rounded-full shadow-2xl">
                          <Settings className="w-8 h-8 text-gold-500 animate-[spin_12s_linear_infinite_reverse]" />
                       </div>
                       <div className="mt-4 bg-navy-800 border border-gold-500 px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest shadow-2xl text-white whitespace-nowrap">
                          Engaged People
                       </div>
                    </div>
                  </div>
                  <div className="absolute top-[75%] left-[6.7%] -translate-x-1/2 -translate-y-1/2">
                    <div className="animate-[spin_40s_linear_infinite_reverse] flex flex-col items-center">
                       <div className="bg-navy-800 border border-gold-500 p-4 rounded-full shadow-2xl">
                          <Settings className="w-8 h-8 text-gold-500 animate-[spin_15s_linear_infinite]" />
                       </div>
                       <div className="mt-4 bg-navy-800 border border-gold-500 px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest shadow-2xl text-white whitespace-nowrap">
                          Empowered Leadership
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-8">
              {[
                { 
                  icon: Shield, 
                  title: "Aligned Culture", 
                  desc: "We synchronize values, behaviors, and organizational systems to create an environment where transformation isn't just supported—it's organic. We align your brand promise with the lived experience of your employees." 
                },
                { 
                  icon: Users, 
                  title: "Engaged People", 
                  desc: "Engagement is the bridge between strategy and execution. We foster deep ownership by connecting individual purpose to the enterprise mission, turning passive compliance into active championing." 
                },
                { 
                  icon: Zap, 
                  title: "Empowered Leadership", 
                  desc: "Leaders are the architects of change. We develop resilient, visionary leadership teams capable of navigating ambiguity and inspiring high-performance across every tier of the organization." 
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 border-l-4 border-gold-500 shadow-2xl flex gap-8 items-start hover:bg-gold-500 transition-all duration-500 group border border-white/10 rounded-sm">
                  <div className="shrink-0 w-12 h-12 bg-navy-800 text-gold-500 flex items-center justify-center rounded-sm group-hover:bg-navy-900 group-hover:text-white transition-colors shadow-xl">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white uppercase tracking-widest mb-3 group-hover:text-navy-900 transition-colors">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-navy-900/80 transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Science & Impact */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             {/* Left Column: Creating Lasting Impact */}
             <div>
                <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
                  <Shield className="w-4 h-4 text-gold-500" />
                  Sustainable Legacy
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 mb-8 leading-tight uppercase tracking-tight">Creating Lasting Impact</h2>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed font-light">
                   Our interventions are designed to outlast the engagement. We build internal capacity so your team owns the transformation, creating a self-sustaining cycle of growth, innovation, and organizational excellence.
                </p>
                <ul className="space-y-6">
                   {[
                     "Sustained performance improvements",
                     "Measurable and permanent return on investment"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-navy-900 font-medium group cursor-default">
                        <div className="w-10 h-10 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-navy-900 transition-all duration-300 shadow-sm">
                           <TrendingUp className="w-5 h-5 text-navy-900 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-lg font-light">{item}</span>
                     </li>
                   ))}
                </ul>
                <div className="mt-12 p-8 bg-gray-50 border border-gray-100 rounded-sm shadow-sm">
                   <div className="flex items-center gap-4 mb-4">
                      <Sparkles className="w-6 h-6 text-gold-500" />
                      <span className="text-xs font-bold uppercase tracking-widest text-navy-900">Transformation Readiness</span>
                   </div>
                   <p className="text-sm text-gray-500 font-light">We don't just fix problems; we evolve potential. Our methodology ensures your people are ready for whatever comes next.</p>
                </div>
             </div>

             {/* Right Column: The Science Behind Our Success */}
             <div className="lg:border-l lg:border-gray-100 lg:pl-20">
                <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
                  <Lightbulb className="w-4 h-4 text-gold-500" />
                  Foundational Logic
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 mb-8 leading-tight uppercase tracking-tight">The Science Behind Success</h2>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed font-light">
                   By reducing resistance and fostering ownership, we deliver measurable ROI by focusing on the people side of change. We turn cultural resistance into momentum, ensuring your organization doesn't just survive disruption—it thrives in it.
                </p>
                <ul className="space-y-6">
                   {[
                     "Accelerated adoption of strategic initiatives",
                     "Reduced transformation resistance & fatigue"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-navy-900 font-medium group cursor-default">
                        <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500 transition-all duration-300 shadow-sm">
                           <CheckCircle2 className="w-5 h-5 text-gold-500 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-lg font-light">{item}</span>
                     </li>
                   ))}
                </ul>
             </div>
           </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 bg-navy-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
            <Rocket className="w-4 h-4" />
            Future Ready
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 uppercase tracking-tight leading-none">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
            Let’s explore how our PFT approach can turn your people’s potential into measurable performance.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-gold-500 text-navy-900 font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-all group shadow-2xl">
              Start Your Transformation Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Methodology;
