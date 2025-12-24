import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Play, BookOpen, Mic, FileText, LayoutGrid, Rocket, Calendar, UserPlus, Sparkles, Mail, Bell, Mic2, Quote, Award, ChevronRight, AlertCircle } from 'lucide-react';

const articles = [
  {
    title: "People-First Transformation in a Digital Age",
    excerpt: "Why Industrial-Age solutions fail to drive lasting change in the modern workplace.",
    date: "March 13, 2025",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    category: "Transformation",
    type: "article"
  },
  {
    title: "The Power of Empowerment in Leadership",
    excerpt: "Moving beyond micromanagement to build high-performance, autonomous teams.",
    date: "February 28, 2025",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    category: "Leadership",
    type: "article"
  }
];

const caseStudies = [
  {
    title: "Global Energy Leader",
    impact: "35%",
    metric: "Increase in Alignment",
    excerpt: "accelerating strategic decision-making cycles from months to weeks.",
    date: "Jan 2025",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    category: "Leadership",
    type: "case-study"
  }
];

const podcastEpisodes = [
  {
    title: "Ep 42: The ROI of Empathy with Alistair Vance",
    excerpt: "Discussing why emotional intelligence is the most critical metric in transformation success.",
    date: "March 01, 2025",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
    category: "Podcast",
    type: "podcast",
    duration: "45 min"
  }
];

const Insights: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [filter, setFilter] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (category) {
      const categoryMap: Record<string, string> = {
        'case-studies': 'Case Studies',
        'articles': 'Articles',
        'podcast': 'Podcast'
      };
      setFilter(categoryMap[category] || 'All');
    } else {
      setFilter('All');
    }
  }, [category]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setError('Please enter a valid professional email');
      return;
    }
    setError('');
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setNewsletterEmail('');
    }, 3000);
  };

  const pageContent = useMemo(() => {
    switch (filter) {
      case 'Articles':
        return { title: "Articles & Thought Leadership", description: "In-depth perspectives on leadership and culture.", items: articles };
      case 'Case Studies':
        return { title: "Success Stories & Impact", description: "Real-world examples of organizational success.", items: caseStudies };
      case 'Podcast':
        return { title: "The PLS Podcast", description: "Listen to David L. Bartholomew discuss the people side of change.", items: podcastEpisodes };
      default:
        return { title: "Insights That Inspire Action", description: "Discover transformative cases and exclusive insights.", items: [...articles, ...caseStudies, ...podcastEpisodes] };
    }
  }, [filter]);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section with Image Banner */}
      <section className="relative py-32 md:py-48 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Insights & Impact" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/60 to-navy-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-8 backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            Knowledge Hub
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            {pageContent.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            {pageContent.description}
          </p>
        </div>
      </section>

      {/* Section Tab Navigation - Directly under the banner (Not sticky) */}
      <section className="bg-white border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 py-6">
            {['All', 'Case Studies', 'Articles', 'Podcast'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`text-[10px] font-bold tracking-[0.3em] uppercase pb-2 border-b-2 transition-all ${
                  filter === tab ? 'text-gold-500 border-gold-500' : 'text-gray-400 border-transparent hover:text-navy-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Speaker Section - RELOCATED ABOVE THE PODCAST CARDS */}
      {filter === 'Podcast' && (
        <section className="bg-navy-900 text-white overflow-hidden relative border-y border-white/5">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="w-full lg:w-5/12">
                 <div className="relative group">
                    <div className="absolute -inset-4 bg-gold-500/10 rounded-sm blur-2xl group-hover:bg-gold-500/20 transition-all duration-700" />
                    <div className="relative aspect-[4/5] rounded-sm overflow-hidden border-4 border-white/10 shadow-2xl">
                      <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                        alt="David L. Bartholomew - Keynote Speaker"
                      />
                      <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent">
                         <p className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-1">Speaker Series</p>
                         <h4 className="text-2xl font-serif font-bold text-white">David L. Bartholomew</h4>
                      </div>
                    </div>
                 </div>
              </div>
              <div className="w-full lg:w-7/12">
                 <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-md">
                    <Award className="w-4 h-4" />
                    Speaker Bookings
                 </div>
                 <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                   Inspire Your Audience with <span className="text-gold-500">David L. Bartholomew</span>
                 </h2>
                 <div className="w-20 h-1 bg-gold-500 mb-10" />
                 <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl italic border-l-2 border-gold-500/30 pl-8">
                   "Transformation is the orchestration of human potential. To ignite an organization, you must first inspire the individuals within it."
                 </p>
                 <p className="text-gray-400 text-lg font-light leading-relaxed mb-12 max-w-2xl">
                   A visionary architect of organizational success, David brings over two decades of front-line experience in leadership, culture, and engagement. Book David for your next keynote, executive retreat, or industry summit to empower your teams with actionable strategies for the future of work.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6">
                    <Link to="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-gold-500 text-navy-900 font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-all group shadow-2xl">
                       Book David to Speak
                       <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <Link to="/who-we-are" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-navy-900 transition-all">
                       View David's Bio
                    </Link>
                 </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid Content */}
      <section className="py-24 bg-white min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {pageContent.items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {pageContent.items.map((item: any, i) => (
                <div key={i} className="group cursor-pointer flex flex-col h-full bg-white border border-gray-100 hover:border-gold-500/30 transition-all duration-500 shadow-sm hover:shadow-2xl">
                  <div className="aspect-[16/10] overflow-hidden relative bg-navy-900">
                    <img src={item.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transition-transform" alt={item.title} />
                    <div className="absolute top-4 left-4 bg-navy-900/90 text-white text-[9px] font-bold tracking-widest px-3 py-1 uppercase rounded-sm border border-white/10">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-gold-500 text-[9px] font-bold uppercase tracking-widest mb-4">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4 group-hover:text-gold-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                      {item.excerpt}
                    </p>
                    <div className="pt-6 mt-auto border-t border-gray-50 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 text-navy-900 font-bold text-[10px] tracking-[0.2em] uppercase group-hover:text-gold-500 transition-colors">
                        {item.type === 'podcast' ? 'Listen Now' : 'Read Full Story'}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      {item.duration && (
                        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1">
                          <Mic className="w-3 h-3" /> {item.duration}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <LayoutGrid className="w-8 h-8 text-gray-200" />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">No items found</h3>
              <p className="text-gray-500 font-light">We are currently updating our {filter.toLowerCase()} library.</p>
            </div>
          )}
        </div>
      </section>

      {/* Podcast Newsletter Alert Section - Positioned above final CTA */}
      {filter === 'Podcast' && (
        <section className="bg-white border-b border-gray-100 animate-in slide-in-from-top-4 duration-500">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="bg-[#f9f7f2] border border-gold-500/20 p-8 md:p-16 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group rounded-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rotate-45 translate-x-32 -translate-y-32" />
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10 text-center md:text-left">
                <div className="w-20 h-20 bg-navy-900 text-gold-500 rounded-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                  <Mic2 className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-4xl font-serif font-bold text-navy-900 mb-2 leading-tight">
                    PLS Transformation <span className="text-gold-500">with</span> David L. Bartholomew
                  </h2>
                  {/* Updated to capsule style */}
                  <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-6 backdrop-blur-md">
                    <Rocket className="w-4 h-4" />
                    Coming this Summer
                  </div>
                  <p className="text-gray-600 font-light max-w-md leading-relaxed text-lg">
                    Sign up for our PLS Transformation Newsletter to get alerts for the first episode.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-auto relative z-10">
                <form className="flex flex-col sm:flex-row w-full gap-3" onSubmit={handleNewsletterSubmit}>
                  <div className="flex-grow flex flex-col">
                    <input 
                      type="text" 
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email" 
                      className={`bg-white border ${error ? 'border-red-500' : 'border-gray-200'} px-8 py-5 rounded-sm text-sm focus:outline-none focus:border-gold-500 w-full transition-all shadow-sm`}
                    />
                    {error && <p className="text-[10px] text-red-500 mt-2 font-bold uppercase tracking-widest flex items-center gap-1"><AlertCircle size={10} /> {error}</p>}
                    {success && <p className="text-[10px] text-green-600 mt-2 font-bold uppercase tracking-widest">Added to alerts!</p>}
                  </div>
                  <button type="submit" className="bg-navy-900 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-navy-900 transition-all whitespace-nowrap shadow-2xl h-[62px]">
                    Get Alerts
                  </button>
                </form>
                <p className="text-[9px] text-gray-400 mt-4 uppercase tracking-widest font-bold">
                  Exclusive leadership insights delivered to your inbox.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-24 bg-navy-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-12 uppercase tracking-tight">
            {filter === 'Case Studies' 
              ? 'Ready to transform your organization?' 
              : filter === 'Articles' 
                ? 'Ready to Connect with Experts?' 
                : 'Ready to ignite Your Leadership Potential?'}
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-gold-500 text-navy-900 font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-all group shadow-2xl">
            Start Your Transformation Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Insights;