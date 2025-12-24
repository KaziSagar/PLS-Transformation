import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Target, 
  ShieldCheck, 
  Rocket, 
  Zap, 
  ChevronRight, 
  ChevronLeft, 
  AlertCircle, 
  CheckCircle,
  Trophy,
  Users2,
  Workflow,
  Sparkles,
  TrendingUp,
  Fingerprint,
  Merge,
  ShieldAlert,
  Map,
  Lightbulb,
  Heart,
  Activity,
  LayoutGrid,
  BarChart,
  RefreshCcw,
  Quote,
  Factory,
  Zap as Energy,
  Stethoscope,
  Laptop,
  Briefcase,
  ShoppingBag,
  Building2,
  Compass,
  Layers,
  Search,
  Globe,
  GitPullRequest,
  Handshake,
  MessageSquare
} from 'lucide-react';

const solutions = [
  {
    title: "Empowered Leadership",
    desc: "Develop leaders who don't just manage change but architect it.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    link: "/solutions/leadership"
  },
  {
    title: "Aligned Culture",
    desc: "Aligning values, behaviors, and systems to outpace disruption.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    link: "/solutions/culture"
  },
  {
    title: "Engaged People",
    desc: "Align individual performance with organizational goals.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    link: "/solutions/people"
  }
];

const challenges = [
  {
    title: "Cultural Inertia",
    problem: "Deep-seated organizational habits that resist new strategic directions.",
    solution: "Our PFT Model identifies hidden resistance and replaces it with values-based momentum.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Leadership Disconnect",
    problem: "Executive vision that fails to resonate or translate at the operational level.",
    solution: "We synchronize leadership tiers through coaching and unified communication frameworks.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Transformation Fatigue",
    problem: "Teams feeling overwhelmed by constant change, leading to burnout and apathy.",
    solution: "Strategic pacing and 'Quick-Win' milestones that rebuild organizational confidence.",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    title: "Organizational Silos",
    problem: "Internal departments working in isolation, creating friction and inefficiency.",
    solution: "We implement cross-functional accountability systems that reward collaboration.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Passive Engagement",
    problem: "Employees who comply with change but lack the ownership to drive it.",
    solution: "Empowering teams with decision-making frameworks that foster real autonomy.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Vanity Metrics",
    problem: "Measuring activities instead of behaviors that truly drive transformation.",
    solution: "Custom KPIs that track cultural health and leadership impact alongside revenue.",
    icon: <CheckCircle className="w-6 h-6" />
  },
  {
    title: "Knowledge Gaps",
    problem: "High reliance on external consultants with no internal capability build-up.",
    solution: "Rigorous knowledge transfer ensures your people own the solution forever.",
    icon: <AlertCircle className="w-6 h-6" />
  }
];

const industries = [
  { title: "Technology Services", icon: <Laptop />, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", desc: "Scaling high-performance cultures for rapid growth and continuous innovation." },
  { title: "Healthcare Independent Practices", icon: <Stethoscope />, img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800", desc: "Aligning leadership teams to improve patient outcomes and operational efficiency." },
  { title: "Manufacturing & Industrial", icon: <Factory />, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", desc: "Driving operational excellence and shop-floor cultural alignment for world-class output." },
  { title: "Energy, Oil & Gas", icon: <Energy />, img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800", desc: "Navigating complex market shifts and workforce safety-to-performance transformations." },
  { title: "Financial Services", icon: <Building2 />, img: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800", desc: "Developing elite leadership pipelines and robust organizational resilience models." },
  { title: "Professional Services", icon: <Briefcase />, img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800", desc: "Aligning partnership models and brand promise with superior employee engagement." }
];

const testimonials = [
  { quote: "PLS Transformation didn't just give us a strategy; they changed the way our leaders think. The cultural shift has been permanent and measurable.", author: "Director of Operations", company: "Global Manufacturing Firm" },
  { quote: "The People Readiness Analysis revealed exactly why our previous transformation efforts failed. Now, our teams aren't just complying; they're leading.", author: "VP of Human Resources", company: "Energy Sector Leader" },
  { quote: "In 20 years of consulting, I've never seen a team so committed to knowledge transfer. We now have the internal capability to lead our own change.", author: "CEO", company: "Retail Infrastructure Group" },
  { quote: "The executive coaching provided by David and his team transformed our leadership pipeline in under 12 months. Truly exceptional results.", author: "CHRO", company: "Financial Services Enterprise" },
  { quote: "Our post-merger integration was a potential cultural disaster. PLS helped us find common ground and build a unified identity that outperformed targets.", author: "Managing Director", company: "International Logistics" },
  { quote: "The ROI of our engagement was clear within the first quarter. Absenteeism dropped, and team productivity hit an all-time high.", author: "Plant Manager", company: "Automotive Parts Manufacturer" },
  { quote: "Finally, a framework that accounts for the human side of data. Their metrics for cultural health are as robust as our financial reports.", author: "Chief Strategy Officer", company: "Tech Innovation Hub" },
  { quote: "David L. Bartholomew is a visionary in leadership alignment. His team's ability to navigate organizational silos is unmatched.", author: "SVP Strategy", company: "Public Infrastructure Authority" }
];

const journeyPillars = [
  {
    title: "People Readiness Assessment",
    icon: <Search className="w-8 h-8" />,
    desc: "Evaluate your organization's human capacity for change and identify critical readiness gaps."
  },
  {
    title: "Targeted Interventions",
    icon: <Target className="w-8 h-8" />,
    desc: "Address specific organizational friction points with focused, high-impact strategic solutions."
  },
  {
    title: "Customized Consulting",
    icon: <Compass className="w-8 h-8" />,
    desc: "Bespoke advisory services tailored to your unique market position and organizational culture."
  },
  {
    title: "Transformational Programs",
    icon: <Layers className="w-8 h-8" />,
    desc: "End-to-end organizational shifts that redefine how your company operates and competes."
  }
];

const Home: React.FC = () => {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [industrySlide, setIndustrySlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);

  const nextChallenge = () => setActiveChallenge((prev) => (prev + 1) % challenges.length);
  const prevChallenge = () => setActiveChallenge((prev) => (prev - 1 + challenges.length) % challenges.length);

  const nextIndustry = () => setIndustrySlide((prev) => (prev + 1) % (industries.length - (window.innerWidth >= 1024 ? 2 : window.innerWidth >= 768 ? 1 : 0)));
  const prevIndustry = () => setIndustrySlide((prev) => (prev - 1 + industries.length) % industries.length);

  const nextTestimonial = () => setTestimonialSlide((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] min-h-[700px] flex items-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Corporate Environment"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] mb-8 uppercase backdrop-blur-md">
              <Zap className="w-4 h-4" />
              Transformation Accelerator
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-8">
              Transforming Businesses Through <span className="text-gold-500">People</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
              We unlock performance potential by aligning leadership, culture, and engagement to drive change and deliver lasting transformation success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-10 py-5 bg-gold-500 text-navy-900 font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-all shadow-lg text-center">
                Book a Consultation
              </Link>
              <Link to="/insights/report" className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-navy-900 transition-all text-center">
                Download Free Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-8 leading-tight uppercase tracking-tight">
            PLS TRANSFORMATION is a leadership and change management firm that powers change through people.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            We develop strategic leaders, align culture with business goals, and boost engagement—delivering tangible results from startup to enterprise for over 20 years. At PLS, culture isn't a buzzword—it's your transformation accelerator.
          </p>
        </div>
      </section>

      {/* The Challenge & Our Approach Section */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy-900 p-10 md:p-16 rounded-sm shadow-2xl relative overflow-hidden group border-b-8 border-navy-900">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 -translate-y-24 translate-x-24 rounded-full" />
              <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
                <AlertCircle className="w-4 h-4" />
                The Challenge
              </div>
              <p className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
                Organizations often struggle to achieve transformation goals because they tend to prioritize operational strategies while underestimating the complexities and nuances of the human side of change.
              </p>
            </div>

            <div className="bg-[#f9f7f2] p-10 md:p-16 rounded-sm border-l-8 border-gold-500 border border-gold-500/10 shadow-2xl shadow-navy-900/10 relative overflow-hidden">
              <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
                <Compass className="w-4 h-4 text-gold-500" />
                Our Approach
              </div>
              <p className="text-xl md:text-2xl font-serif font-bold text-navy-900 leading-relaxed mb-10">
                At PLS, we empower leaders, align cultures, and engage teams to create transformation momentum. Using our people-first approach, we turn potential into measurable outcomes, ensuring sustainable growth and long-term success.
              </p>
              <Link to="/methodology" className="inline-flex items-center text-gold-500 font-bold text-[10px] tracking-widest uppercase hover:gap-3 transition-all">
                Our Methodology <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Critical Transformation Challenges Slideshow */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
              <Lightbulb className="w-4 h-4" />
              Critical Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl mx-auto leading-tight uppercase tracking-tight">
              7 Critical Transformation Challenges And How We Solve Them
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[450px]">
              <div className="md:w-1/3 bg-gold-500 p-12 flex flex-col justify-center items-center text-navy-900 text-center">
                <div className="w-20 h-20 bg-navy-900/10 rounded-full flex items-center justify-center mb-6">
                  {challenges[activeChallenge].icon}
                </div>
                <div className="text-[12px] font-black uppercase tracking-[0.3em] mb-2 opacity-60">Challenge 0{activeChallenge + 1}</div>
                <h3 className="text-3xl font-serif font-bold leading-tight uppercase tracking-widest">{challenges[activeChallenge].title}</h3>
              </div>
              <div className="md:w-2/3 p-12 md:p-20 flex flex-col justify-center bg-white">
                <div className="space-y-10">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 flex items-center gap-2">
                      <div className="w-8 h-[1px] bg-gold-500" /> The Problem
                    </h4>
                    <p className="text-2xl font-serif font-bold text-navy-900 leading-snug">{challenges[activeChallenge].problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-4 flex items-center gap-2">
                      <div className="w-8 h-[1px] bg-navy-900" /> PLS Solution
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-gold-500 pl-6 py-2 font-light">
                      "{challenges[activeChallenge].solution}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-12 mb-16">
              <div className="flex gap-4">
                <button onClick={prevChallenge} className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-all shadow-xl backdrop-blur-sm"><ChevronLeft /></button>
                <button onClick={nextChallenge} className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-all shadow-xl backdrop-blur-sm"><ChevronRight /></button>
              </div>
              <div className="flex gap-2">
                {challenges.map((_, i) => (
                  <button key={i} onClick={() => setActiveChallenge(i)} className={`h-1.5 transition-all rounded-full ${activeChallenge === i ? 'w-10 bg-gold-500' : 'w-2 bg-white/20'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored and Scalable People Solutions Section */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
              <Layers className="w-4 h-4 text-gold-500" />
              Customized Impact
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 leading-tight uppercase tracking-tight">
              Tailored and Scalable People Solutions to Solve Your Transformation Challenges
            </h2>
          </div>

          {/* Solution 1: EMPOWERED LEADERSHIP */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-40">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gold-500/10 rounded-sm blur-xl" />
                <div className="relative bg-navy-900 p-10 md:p-14 text-white rounded-sm shadow-2xl border-b-8 border-gold-500">
                  <Zap className="w-12 h-12 text-gold-500 mb-8" />
                  <h3 className="text-4xl font-serif font-bold mb-6 tracking-wide uppercase">EMPOWERED LEADERSHIP</h3>
                  <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
                    Empower your leaders to drive transformation with clarity, resilience, and alignment.
                  </p>
                  <Link to="/solutions/leadership" className="inline-flex items-center text-gold-500 font-bold text-[10px] tracking-widest uppercase hover:gap-3 transition-all">
                    View Solution Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              {[
                { title: "Executive Leadership Coaching", icon: <Trophy />, desc: "Build resilient leaders who navigate ambiguity, inspire teams, and sustain momentum through change." },
                { title: "Leadership Pipeline Development", icon: <Workflow />, desc: "Design succession plans that align with strategic goals, ensuring leadership continuity and growth." },
                { title: "Strategic Alignment Workshops", icon: <Users2 />, desc: "Foster unified decision-making and execution by aligning leadership teams on transformation goals." },
                { title: "Resilience-Building Leadership Programs", icon: <Sparkles />, desc: "Develop leaders who remain energized, focused, and adaptable during times of constant change." },
                { title: "Impact Optimization Training", icon: <TrendingUp />, desc: "Equip frontline and middle managers with the skills to execute strategy and inspire their teams." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 md:p-10 rounded-sm border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-navy-900 text-gold-500 rounded-sm flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-500 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-bold text-navy-900 mb-2 group-hover:text-gold-500 transition-colors uppercase tracking-widest">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution 2: ALIGNED CULTURE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-40">
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              {[
                { title: "People Readiness Analysis™", icon: <Fingerprint />, desc: "Identify hidden barriers and leverage cultural strengths to ensure transformation adoption and sustainability." },
                { title: "Post-Merger Cultural Integration", icon: <Merge />, desc: "Retain key talent and align values across merging entities to capture synergy and prevent cultural drift." },
                { title: "Cultural Resilience Program", icon: <ShieldAlert />, desc: "Equip your workforce with the collective mindset to navigate ambiguity and maintain high performance." },
                { title: "Change Activation Workshops", icon: <Lightbulb />, desc: "Move teams beyond 'following orders' to actively championing and improving transformation initiatives." },
                { title: "Cultural Transformation Roadmap", icon: <Map />, desc: "A strategic blueprint that aligns values, behaviors, and systems to achieve your long-term organizational vision." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 md:p-10 rounded-sm border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-navy-900 text-gold-500 rounded-sm flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-500 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-bold text-navy-900 mb-2 group-hover:text-gold-500 transition-colors uppercase tracking-widest">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:sticky lg:top-32 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gold-500/10 rounded-sm blur-xl" />
                <div className="relative bg-navy-900 p-10 md:p-14 text-white rounded-sm shadow-2xl border-b-8 border-gold-500">
                  <Users className="w-12 h-12 text-gold-500 mb-8" />
                  <h3 className="text-4xl font-serif font-bold mb-6 tracking-wide uppercase">ALIGNED CULTURE</h3>
                  <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
                    Align your culture with strategy to accelerate and sustain transformation success.
                  </p>
                  <Link to="/solutions/culture" className="inline-flex items-center text-gold-500 font-bold text-[10px] tracking-widest uppercase hover:gap-3 transition-all">
                    View Solution Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Solution 3: ENGAGED PEOPLE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gold-500/10 rounded-sm blur-xl" />
                <div className="relative bg-navy-900 p-10 md:p-14 text-white rounded-sm shadow-2xl border-b-8 border-gold-500">
                  <Heart className="w-12 h-12 text-gold-500 mb-8" />
                  <h3 className="text-4xl font-serif font-bold mb-6 tracking-wide uppercase">ENGAGED PEOPLE</h3>
                  <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
                    Align individual and team performance with organizational goals to drive measurable results.
                  </p>
                  <Link to="/solutions/people" className="inline-flex items-center text-gold-500 font-bold text-[10px] tracking-widest uppercase hover:gap-3 transition-all">
                    View Solution Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              {[
                { title: "Employee Engagement Diagnostics", icon: <Activity />, desc: "Identify key drivers of motivation and areas of friction that impact your transformation adoption." },
                { title: "Talent-to-Strategy Alignment", icon: <LayoutGrid />, desc: "Ensure individual skills and roles are perfectly aligned with your business's transformation objectives." },
                { title: "Cross-Functional Collaboration Framework", icon: <Merge />, desc: "Implement systems that incentivize teamwork across departments, reducing organizational friction." },
                { title: "Performance Metrics Design", icon: <BarChart />, desc: "Design behavioral KPIs that track human impact and cultural health alongside revenue goals." },
                { title: "Change Fatigue Mitigation", icon: <RefreshCcw />, desc: "Strategic pacing and wellness-integrated change management to protect your workforce from burnout." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 md:p-10 rounded-sm border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-navy-900 text-gold-500 rounded-sm flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-500 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-bold text-navy-900 mb-2 group-hover:text-gold-500 transition-colors uppercase tracking-widest">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discovery & Risk-Free Consultation Transition */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 mb-12 uppercase tracking-tight leading-none">
            Discover the Right Solution to Transform Your Organization
          </h2>
          <Link to="/contact" className="inline-block px-12 py-5 bg-gold-500 text-navy-900 font-bold uppercase tracking-widest text-[11px] hover:bg-navy-900 hover:text-white transition-all shadow-2xl">
            Schedule Your Risk-Free Consultation
          </Link>
        </div>
      </section>

      {/* Industry Experience Slideshow Section */}
      <section className="py-24 bg-navy-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
                <Globe className="w-4 h-4" />
                Market Presence
              </div>
              <h2 className="text-4xl font-serif font-bold text-white uppercase tracking-tight">Industry Experience</h2>
            </div>
          </div>
          <div className="relative">
            <div className="h-[480px] overflow-hidden">
              <div className="flex transition-transform duration-700 ease-in-out h-full gap-8" style={{ transform: `translateX(-${industrySlide * (100 / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1))}%)` }}>
                {industries.map((industry, i) => (
                  <div key={i} className="min-w-full md:min-w-[45%] lg:min-w-[30%] h-full">
                    <div className="bg-white/5 border border-white/10 rounded-sm h-full overflow-hidden group hover:border-gold-500/50 transition-all flex flex-col shadow-sm">
                      <div className="h-1/2 relative overflow-hidden">
                        <img src={industry.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60" alt={industry.title} />
                        <div className="absolute top-6 right-6 w-12 h-12 bg-gold-500 text-navy-900 rounded-sm flex items-center justify-center shadow-2xl">{industry.icon}</div>
                      </div>
                      <div className="p-8 flex-grow flex flex-col justify-center">
                        <h3 className="text-xl font-serif font-bold text-white mb-4 uppercase tracking-wider">{industry.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">{industry.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Slider Navigation Buttons moved to bottom */}
            <div className="flex justify-center gap-6 mt-12">
              <button onClick={prevIndustry} className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-all backdrop-blur-md shadow-xl group">
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
              <button onClick={nextIndustry} className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-all backdrop-blur-md shadow-xl group">
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials: What Our Clients Say About Us */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center"><Quote className="w-[600px] h-[600px] text-navy-900" /></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
              <Quote className="w-4 h-4 text-gold-500" />
              Voice of the Customer
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 uppercase tracking-tight leading-none">What Our Clients Say About Us</h2>
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="min-h-[300px] flex items-center justify-center">
              <div key={testimonialSlide} className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <p className="text-2xl md:text-3xl font-serif font-bold text-navy-900 leading-relaxed mb-10 italic">"{testimonials[testimonialSlide].quote}"</p>
                <h4 className="text-lg font-bold text-navy-900 uppercase tracking-widest mb-1">{testimonials[testimonialSlide].author}</h4>
                <p className="text-gold-500 text-sm font-bold uppercase tracking-[0.2em]">{testimonials[testimonialSlide].company}</p>
              </div>
            </div>
            <div className="flex flex-col items-center mt-16 gap-10">
              <div className="flex gap-4">
                <button onClick={prevTestimonial} className="w-14 h-14 border border-navy-900/10 rounded-full flex items-center justify-center text-navy-900 hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all shadow-sm">
                  <ChevronLeft />
                </button>
                <button onClick={nextTestimonial} className="w-14 h-14 border border-navy-900/10 rounded-full flex items-center justify-center text-navy-900 hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all shadow-sm">
                  <ChevronRight />
                </button>
              </div>
              <div className="flex justify-center gap-3">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setTestimonialSlide(i)} className={`h-2 transition-all rounded-full ${testimonialSlide === i ? 'w-12 bg-gold-500' : 'w-2 bg-gray-200'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* START YOUR PLS TRANSFORMATION JOURNEY TODAY Section */}
      <section className="py-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
              <GitPullRequest className="w-4 h-4" />
              Step-by-Step Path
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white uppercase tracking-tight">START YOUR PLS TRANSFORMATION JOURNEY TODAY</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {journeyPillars.map((pillar, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 border-t-4 border-gold-500 group border border-white/10">
                <div className="w-16 h-16 bg-gold-500 text-navy-900 flex items-center justify-center mb-8 rounded-sm group-hover:bg-white transition-colors shadow-2xl">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-gold-500 transition-colors uppercase tracking-widest">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center border-t border-white/10 pt-20">
            <p className="text-2xl md:text-3xl font-serif font-bold text-white leading-relaxed mb-12 italic font-light">
              "Let’s forge a new path together—one that turns your people’s potential into measurable performance."
            </p>
            <Link to="/contact" className="inline-block px-12 py-5 bg-gold-500 text-navy-900 font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-all shadow-2xl">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Snapshot */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
                <Trophy className="w-4 h-4 text-gold-500" />
                Success Stories
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 uppercase tracking-tight">Transformation In Action: Results That Matter</h2>
            </div>
            <Link to="/insights" className="px-8 py-4 bg-navy-900 text-white text-[10px] font-bold tracking-widest uppercase hover:bg-gold-500 hover:text-navy-900 transition-all shadow-xl">View All Case Studies</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Enabling Manufacturing Excellence Through Leadership Transformation", category: "Manufacturing", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" },
              { title: "Unlocking Shopfloor Engagement through Empowering Leadership", category: "Operations", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200" }
            ].map((study, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden mb-6 relative shadow-lg rounded-sm">
                  <img src={study.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={study.title} />
                  <div className="absolute top-4 left-4 bg-navy-900/80 text-white text-[10px] px-3 py-1 font-bold tracking-widest uppercase border border-white/10 backdrop-blur-sm">
                    {study.category}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 group-hover:text-gold-500 transition-colors leading-tight uppercase tracking-widest">{study.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform CTA */}
      <section className="py-32 bg-navy-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="CTA BG" /></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
            <Rocket className="w-4 h-4" />
            Future Ready
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 uppercase tracking-tight leading-none">Ready To Accelerate Your Transformation?</h2>
          <p className="text-xl text-gray-400 mb-16 font-light leading-relaxed">Join the hundreds of organizations that have turned cultural resistance into transformation momentum. Let's build something lasting together.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-gold-500 text-navy-900 font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-all group shadow-2xl">
              Start Your Journey Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/methodology" className="inline-flex items-center gap-4 px-12 py-6 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-navy-900 transition-all">
              Our Methodology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;