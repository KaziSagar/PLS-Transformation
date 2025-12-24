
import React from 'react';
import { useParams, Link } from 'react-router-dom';
// Added Heart to the import list below
import { 
  Target, 
  Zap, 
  ArrowRight, 
  Check, 
  Layers, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Search, 
  Trophy, 
  Merge, 
  BarChart, 
  Compass,
  Lightbulb,
  Activity,
  Award,
  Laptop,
  Stethoscope,
  Factory,
  Building2,
  Briefcase,
  GitPullRequest,
  UserPlus,
  Settings2,
  ChevronRight,
  ExternalLink,
  Shield,
  Users,
  LineChart,
  Eye,
  Handshake,
  CheckCircle2,
  Globe,
  Heart
} from 'lucide-react';

const coreSolutions = [
  {
    icon: Search,
    title: "People Readiness Analysis™",
    desc: "A proprietary diagnostic that identifies cultural friction and performance gaps before transformation begins."
  },
  {
    icon: Trophy,
    title: "Executive Leadership Coaching",
    desc: "High-impact advisory for leaders navigating complex organizational shifts and strategic realignments."
  },
  {
    icon: Merge,
    title: "Cultural Integration",
    desc: "Seamlessly aligning organizational identities and values during mergers, acquisitions, or restructuring."
  },
  {
    icon: BarChart,
    title: "Performance Systems Design",
    desc: "Developing behavioral KPIs and accountability frameworks that align team output with strategic vision."
  },
  {
    icon: Compass,
    title: "Strategic Growth Advisory",
    desc: "Long-term partnership to scale excellence and future-proof your organization against market disruption."
  }
];

const industries = [
  { 
    name: "Technology Services", 
    icon: Laptop,
    heading: "Scaling Innovation",
    sub: "Accelerating high-growth cultures for rapid evolution."
  },
  { 
    name: "Healthcare", 
    icon: Stethoscope,
    heading: "Clinical Excellence",
    sub: "Retraining leadership to improve outcomes and efficiency."
  },
  { 
    name: "Manufacturing", 
    icon: Factory,
    heading: "Operational Performance",
    sub: "Driving shopfloor alignment for world-class output."
  },
  { 
    name: "Energy & Gas", 
    icon: Zap,
    heading: "Resilient Operations",
    sub: "Navigating market shifts with safety-first cultures."
  },
  { 
    name: "Financial Services", 
    icon: Building2,
    heading: "Strategic Resilience",
    sub: "Building elite leadership pipelines in complex markets."
  },
  { 
    name: "Professional Services", 
    icon: Briefcase,
    heading: "Partnership Alignment",
    sub: "Connecting brand promise with superior engagement."
  }
];

const solutionData = {
  leadership: {
    title: "Empowered Leadership",
    subtitle: "Igniting Leadership That Drives Transformation",
    philosophyTag: "Leadership Philosophy",
    philosophyIcon: Trophy,
    philosophyTitle: "Leadership isn’t about titles—it’s about ownership.",
    sidebarQuote: "True leadership isn't measured by authority, but by the radical ownership of every individual within the enterprise.",
    desc: "Leadership isn't about titles—it's about ownership. We ignite leaders who don't just manage change but architect it.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    caseStudies: [
      {
        title: "Global Energy Leader",
        impact: "35%",
        metric: "Increase in Leadership Alignment",
        result: "Transformed a fragmented executive team into a unified force, accelerating strategic decision-making cycles from months to weeks."
      },
      {
        title: "Tech Services Enterprise",
        impact: "90%",
        metric: "Retention of High-Potential Talent",
        result: "Designed a leadership pipeline that successfully transitioned mid-level managers into strategic roles during a period of 200% headcount growth."
      }
    ],
    features: [
      { 
        title: "People Readiness Analysis™ for Leadership", 
        subtitle: "Diagnose leadership alignment and readiness to drive change.", 
        paragraph: "Misaligned leadership teams stall transformation, creating confusion and conflicting priorities. With 85% of leadership teams struggling to align on goals, our analysis provides a clear roadmap to accelerate decision-making and alignment." 
      },
      { 
        title: "Executive Leadership Coaching", 
        subtitle: "Empower leaders to architect sustainable performance.", 
        paragraph: "High-impact advisory for leaders navigating complex organizational shifts and strategic realignments, ensuring they have the tools to lead with confidence and resilience." 
      },
      { 
        title: "Leadership Pipeline Development", 
        subtitle: "Build a resilient bench of future-ready leaders.", 
        paragraph: "Ensure long-term sustainability by identifying and developing the next generation of leaders equipped to handle modern market disruption and organizational complexity." 
      },
      { 
        title: "Strategic Alignment Workshops", 
        subtitle: "Synchronize vision with operational reality.", 
        paragraph: "Eliminate execution friction by bringing diverse leadership perspectives into a single, unified direction that resonates across every level of the company." 
      },
      { 
        title: "Resilience-Building Programs", 
        subtitle: "Thrive under the pressure of continuous change.", 
        paragraph: "Develop the cognitive agility and emotional capacity for leaders to remain focused, energized, and effective in highly volatile and demanding business environments." 
      },
      { 
        title: "Impact Optimization Training", 
        subtitle: "Elevate frontline management effectiveness.", 
        paragraph: "Equip frontline supervisors with the communication and coaching skills required to translate high-level strategy into daily shopfloor wins and improved team engagement." 
      },
      { 
        title: "Governance & Accountability Frameworks", 
        subtitle: "Institutionalize leadership excellence.", 
        paragraph: "Design the systems and structures that ensure leadership behaviors remain aligned with transformation goals, creating a culture of consistent high-performance and clear responsibility." 
      }
    ]
  },
  culture: {
    title: "Aligned Culture",
    subtitle: "Culture That Accelerates Transformation",
    philosophyTag: "Cultural Philosophy",
    philosophyIcon: Shield,
    philosophyTitle: "Transformation isn’t just about strategy—it’s about culture.",
    sidebarQuote: "At PLS, culture is the transformation engine—where values become behaviors and behaviors become permanent success.",
    desc: "At PLS, culture isn’t a buzzword—it’s your transformation accelerator. We help organizations dismantle ‘the way we’ve always done it’ by aligning values with behaviors, and behaviors with systems. Through targeted diagnostics and activation, we turn cultural resistance into momentum, ensuring your organization doesn’t just survive disruption—it thrives in it.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    caseStudies: [
      {
        title: "Industrial Manufacturing Group",
        impact: "70%",
        metric: "Drop in Resistance to Change",
        result: "Realigned a multi-decade legacy culture to support a digital transformation, resulting in record adoption rates for new ERP systems."
      },
      {
        title: "Healthcare Network",
        impact: "Unified",
        metric: "Identity Integration",
        result: "Following a series of rapid acquisitions, we created a single cultural identity that improved inter-departmental collaboration by 45%."
      }
    ],
    features: [
      { 
        title: "People Readiness Analysis™ for Culture", 
        subtitle: "Identify cultural friction before it derails strategy.", 
        paragraph: "70% of transformations fail due to cultural resistance. We pinpoint the exact behaviors slowing you down and provide the strategic levers to speed up adoption and momentum." 
      },
      { 
        title: "Post-Merger Cultural Integration", 
        subtitle: "Capture synergies through a unified organizational identity.", 
        paragraph: "Protect your talent and capture maximum value by aligning diverse cultures into a single, high-performing entity following major M&A events or restructuring." 
      },
      { 
        title: "Cultural Resilience Program", 
        subtitle: "Embed adaptability into your organizational DNA.", 
        paragraph: "Move your organization from merely reacting to change to anticipating it, ensuring your teams remain robust and productive regardless of external market shifts." 
      },
      { 
        title: "Change Activation Workshops", 
        subtitle: "Turn passive compliance into active ownership.", 
        paragraph: "Move beyond simple 'buy-in' to radical 'ownership.' We activate teams to champion change at every level, ensuring initiatives are lived, not just followed." 
      },
      { 
        title: "Cultural Transformation Roadmap", 
        subtitle: "A strategic blueprint for permanent behavioral evolution.", 
        paragraph: "Designing the specific systems, rewards, and daily habits that ensure your new culture becomes the permanent, self-sustaining way of working." 
      },
      { 
        title: "Values-Behavior Synchronization", 
        subtitle: "Close the gap between intent and action.", 
        paragraph: "We audit your organizational values against actual daily behaviors to identify contradictions and implement corrective measures that restore trust and integrity." 
      },
      { 
        title: "Psychological Safety Audits", 
        subtitle: "Unlock the power of candid innovation.", 
        paragraph: "Measure and enhance the level of interpersonal trust within teams to ensure that critical feedback and innovative ideas are shared without fear of repercussions." 
      }
    ]
  },
  people: {
    title: "Engaged People",
    subtitle: "Scaling Engagement and Individual Performance",
    philosophyTag: "People Philosophy",
    philosophyIcon: Heart,
    philosophyTitle: "Individual Momentum Powers Enterprise Progress.",
    sidebarQuote: "Engagement is not a target to hit; it is a relationship to nurture between the individual and the enterprise mission.",
    desc: "Align individual and team performance with organizational goals to drive measurable results and accountability.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    caseStudies: [
      {
        title: "Professional Services Firm",
        impact: "25%",
        metric: "Billable Efficiency",
        result: "By aligning individual goals with partnership strategy, we unlocked hidden capacity and reduced employee burnout by 30%."
      },
      {
        title: "Logistics Enterprise",
        impact: "40%",
        metric: "Turnover Reduction",
        result: "Implemented a radical ownership model that transformed frontline workers into proactive problem-solvers, drastically reducing operational errors."
      }
    ],
    features: [
      { 
        title: "Employee Engagement Diagnostics", 
        subtitle: "Measure the true drivers of commitment and effort.", 
        paragraph: "Understanding what truly motivates your workforce is key to unlocking the hidden 20% of productivity that lies dormant in disengaged or misaligned teams." 
      },
      { 
        title: "Talent-to-Strategy Alignment", 
        subtitle: "Tune individual roles to your specific strategic objectives.", 
        paragraph: "We ensure every person is in the right seat with the right skills and mindset to execute your specific transformation goals with precision and autonomy." 
      },
      { 
        title: "Cross-Functional Collaboration Framework", 
        subtitle: "Break down silos and build trust-based high-impact teams.", 
        paragraph: "Connecting departments through shared accountability and clear communication pathways to eliminate internal friction and waste in project delivery." 
      },
      { 
        title: "Performance Metrics Design", 
        subtitle: "Design behavioral KPIs that track the human drivers of success.", 
        paragraph: "Move beyond vanity metrics to measure the actual shifts in behavior and culture that lead directly to increased revenue, growth, and operational stability." 
      },
      { 
        title: "Change Fatigue Mitigation", 
        subtitle: "Protect workforce energy and focus during long transformation shifts.", 
        paragraph: "Transformation is a marathon, not a sprint. We provide the pacing and support systems required to keep your teams energized and committed for the long haul." 
      },
      { 
        title: "Autonomy & Decision-Making Frameworks", 
        subtitle: "Empower the edge of your organization.", 
        paragraph: "Redesign decision-making protocols to move authority closer to the information, acceleration response times and fostering a sense of radical ownership." 
      },
      { 
        title: "Continuous Learning Ecosystems", 
        subtitle: "Future-proof your workforce skills.", 
        paragraph: "Build a culture of continuous development that ensures your people stay ahead of the technology curve and remain relevant in an ever-evolving market." 
      }
    ]
  },
  enterprise: {
    title: "Enterprise Transformation",
    subtitle: "Scaling Transformation Across Your Organization",
    philosophyTag: "Enterprise Philosophy",
    philosophyIcon: Layers,
    philosophyTitle: "Transformation is the Orchestration of Human Potential.",
    sidebarQuote: "We don't just change how an enterprise works; we evolve how an enterprise thinks, learns, and leads.",
    desc: "Enterprise transformation isn't about a single lever—it's about orchestrating alignment across leadership, culture, and engagement.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    caseStudies: [
      {
        title: "Global Supply Chain Network",
        impact: "$150M",
        metric: "Friction Savings",
        result: "Orchestrated an enterprise-wide transformation that synchronized 12 international business units under a single performance system."
      },
      {
        title: "Public Infrastructure Authority",
        impact: "Early",
        metric: "4 Month Lead Time",
        result: "Activated 5,000+ employees to champion a new operational framework, eliminating massive historical project delays."
      }
    ],
    features: [
      { 
        title: "People Readiness Analysis™ for Enterprise", 
        subtitle: "A holistic assessment of organizational change capacity.", 
        paragraph: "Evaluating the enterprise-wide readiness to pivot, identifying cross-departmental risks and dependencies before they impact the bottom line or market reputation." 
      },
      { 
        title: "Performance System Overhaul", 
        subtitle: "Redesign accountability and rewards for strategic alignment.", 
        paragraph: "Modernizing how performance is managed and rewarded to ensure it encourages the specific behaviors needed for your new strategic direction and values." 
      },
      { 
        title: "Transformation Governance Design", 
        subtitle: "Establish the structures to manage complex organizational change.", 
        paragraph: "Providing the framework, roles, and oversight needed to keep massive organizational shifts on track, on budget, and aligned with your core mission." 
      },
      { 
        title: "Enterprise-Wide Change Activation", 
        subtitle: "Synchronize engagement across diverse global business units.", 
        paragraph: "Ensuring that transformation isn't just happening at headquarters, but is felt, understood, and owned in every branch and corner of the company." 
      },
      { 
        title: "Transformation ROI Tracking", 
        subtitle: "Quantify the bottom-line impact of people-driven initiatives.", 
        paragraph: "Proving the value of the 'human side' through data-driven analysis of productivity gains, retention improvements, and successful strategic delivery." 
      },
      { 
        title: "Digital Transformation Adoption Strategy", 
        subtitle: "Bridging the gap between technology and people.", 
        paragraph: "New software is only as good as the people using it. We design adoption strategies that address the psychological barriers to new technology implementation." 
      },
      { 
        title: "Organizational Agility Assessment", 
        subtitle: "Measure your capacity for rapid pivoting.", 
        paragraph: "We evaluate your organizational structures and communication loops to determine how quickly your enterprise can respond to sudden market opportunities or threats." 
      }
    ]
  }
};

const Solutions: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const activeSolution = category ? solutionData[category as keyof typeof solutionData] : null;

  if (!activeSolution) {
    return (
      <div className="animate-in fade-in duration-700">
        {/* Solutions Overview Hero */}
        <section className="relative py-32 md:py-48 bg-navy-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="Strategic Connectivity" 
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 z-10 text-center">
            <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-8 backdrop-blur-md">
              <Layers className="w-4 h-4" />
              Strategic Solutions
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Achieving Sustainable Transformation Through <span className="text-gold-500">Leadership, Culture, and Engagement</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              We design scalable solutions that empower leaders, align cultures, and engage people to drive measurable results and lasting impact.
            </p>
          </div>
        </section>

        {/* Dedicated Philosophy Narrative Section (Our Philosophy) */}
        <section className="py-24 bg-gray-50 border-t border-gray-100">
           <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
                 <Sparkles className="w-4 h-4 text-gold-500" />
                 The PLS Difference
              </div>
              <p className="text-2xl md:text-4xl font-serif font-bold text-navy-900 leading-tight mb-10">
                 Transformation isn’t just about change—it’s about scaling potential.
              </p>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-12">
                 At PLS, we empower leaders to inspire action, align cultures to foster collaboration, and engage people to unlock performance. Whether you need rapid interventions or enterprise-wide transformation, we design solutions that adapt to your needs and accelerate measurable success.
              </p>
              <div className="w-20 h-1 bg-gold-500 mx-auto" />
           </div>
        </section>

        {/* Our Core Solutions Section - MATCHED COLOR OF WHO WE ARE PHILOSOPHY (bg-navy-900) */}
        <section className="py-32 bg-navy-900 relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
                <Briefcase className="w-4 h-4" />
                Strategic Suite
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white uppercase tracking-tight leading-none">OUR CORE SOLUTIONS</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreSolutions.map((sol, i) => (
                <div key={i} className="p-10 border border-white/10 shadow-sm hover:shadow-2xl transition-all duration-500 bg-white/5 backdrop-blur-sm group hover:-translate-y-2 hover:border-gold-500/50 rounded-sm">
                  <div className="w-16 h-16 bg-gold-500/10 text-gold-500 flex items-center justify-center mb-8 rounded-sm group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors border border-gold-500/20 shadow-xl">
                    <sol.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-6 leading-tight group-hover:text-gold-500 transition-colors">{sol.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">{sol.desc}</p>
                  <div className="w-12 h-1 bg-gold-500 group-hover:w-full transition-all duration-500" />
                </div>
              ))}
              
              {/* Explore Our Pillars Link Card */}
              <div className="p-10 bg-gold-500 text-navy-900 flex flex-col justify-between items-start rounded-sm shadow-xl group hover:bg-white transition-all duration-500">
                <div>
                  <Sparkles className="w-12 h-12 text-navy-900 mb-8" />
                  <h3 className="text-2xl font-serif font-bold mb-6">Explore Our Pillars</h3>
                  <p className="text-navy-900/70 text-sm font-bold">Dive deep into our specialized suites for Leadership, Culture, and People.</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-8">
                   <Link to="/solutions/leadership" className="text-[9px] font-black uppercase tracking-widest border border-navy-900/20 px-3 py-1 hover:bg-navy-900 hover:text-white transition-all">Leadership</Link>
                   <Link to="/solutions/culture" className="text-[9px] font-black uppercase tracking-widest border border-navy-900/20 px-3 py-1 hover:bg-navy-900 hover:text-white transition-all">Culture</Link>
                   <Link to="/solutions/people" className="text-[9px] font-black uppercase tracking-widest border border-navy-900/20 px-3 py-1 hover:bg-navy-900 hover:text-white transition-all">People</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Measure Success Section */}
        <section className="py-24 bg-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-900/5 -skew-x-12 translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
                  <BarChart className="w-4 h-4 text-gold-500" />
                  Quantifiable Impact
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-8 leading-tight">HOW WE MEASURE SUCCESS</h2>
                <div className="w-20 h-1.5 bg-gold-500 mb-10" />
                <p className="text-gray-600 text-lg leading-relaxed font-light mb-12">
                  Transformation isn't real if it can't be measured. We track organizational health with the same rigor as financial performance.
                </p>
                <div className="space-y-12">
                   <div className="group border-l-4 border-gold-500 pl-8 transition-all">
                      <h4 className="text-xl font-serif font-bold text-navy-900 mb-3 group-hover:text-gold-500 transition-colors">Maturity That Accelerates Readiness</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">
                        We evaluate organizational capacity across leadership, culture, and processes to ensure your transformation foundation is robust enough to support rapid scaling and long-term evolution.
                      </p>
                   </div>
                   <div className="group border-l-4 border-gold-500 pl-8 transition-all">
                      <h4 className="text-xl font-serif font-bold text-navy-900 mb-3 group-hover:text-gold-500 transition-colors">Metrics That Matter</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">
                        We move beyond vanity metrics to track behavioral KPIs and cultural shifts that provide the most accurate signal of strategic health and correlate directly with bottom-line growth.
                      </p>
                   </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-navy-900 rounded-sm shadow-2xl overflow-hidden group border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                    className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000" 
                    alt="Data Analytics" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                     <div className="text-center">
                        <LineChart className="w-20 h-20 text-gold-500 mx-auto mb-8 animate-pulse" />
                        <h4 className="text-3xl font-serif font-bold text-white mb-4">Actionable Data</h4>
                        <p className="text-gray-400 text-sm font-light">We move from vanity metrics to behavioral KPIs that drive revenue and growth.</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
                <Globe className="w-4 h-4 text-gold-500" />
                Global Reach
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 uppercase tracking-tight leading-none">WHO WE SERVE</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((ind, i) => (
                <div key={i} className="group relative overflow-hidden bg-navy-900 aspect-[4/3] rounded-sm shadow-xl">
                   <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity">
                      <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover" alt={ind.name} />
                   </div>
                   <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent">
                      <ind.icon className="w-10 h-10 text-gold-500 mb-6 group-hover:-translate-y-2 transition-transform" />
                      <h3 className="text-2xl font-serif font-bold text-white mb-2 uppercase tracking-wide">{ind.name}</h3>
                      <h4 className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{ind.heading}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-20 overflow-hidden font-light">
                        {ind.sub}
                      </p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaborative By Design Section */}
        <section className="py-32 bg-navy-900 relative overflow-hidden text-white">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-12 uppercase tracking-tight leading-none">COLLABORATIVE BY DESIGN</h2>
              <div className="w-32 h-1 bg-gold-500 mx-auto mb-10" />
              <p className="text-gray-400 text-xl font-light max-w-3xl mx-auto leading-relaxed">
                We don't just hand over a strategy; we partner with you to embed lasting capability within your own workforce.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { 
                   title: "Align", 
                   icon: Target, 
                   desc: "We synchronize leadership vision with operational reality to eliminate execution friction." 
                 },
                 { 
                   title: "Embed", 
                   icon: Layers, 
                   desc: "We institutionalize new behaviors and values, ensuring culture becomes a permanent competitive advantage." 
                 },
                 { 
                   title: "Customize", 
                   icon: Settings2, 
                   desc: "No off-the-shelf solutions. Every strategy is built from the ground up for your specific organizational DNA." 
                 }
               ].map((p, i) => (
                 <div key={i} className="text-center group">
                    <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:bg-gold-500 transition-all duration-500 shadow-2xl">
                       <p.icon className="w-10 h-10 text-gold-500 group-hover:text-navy-900 transition-colors" />
                    </div>
                    <div className="flex items-center justify-center gap-4 mb-6">
                       <div className="w-8 h-[1px] bg-gold-500/50" />
                       <h3 className="text-3xl font-serif font-bold uppercase tracking-widest group-hover:text-gold-500 transition-colors">{p.title}</h3>
                       <div className="w-8 h-[1px] bg-gold-500/50" />
                    </div>
                    <p className="text-gray-400 font-light leading-relaxed max-w-xs mx-auto">{p.desc}</p>
                 </div>
               ))}
            </div>

            <div className="mt-24 text-center">
               <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-gold-500 text-navy-900 font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-all group shadow-2xl">
                  Start Your Collaboration
                  <Handshake className="w-5 h-5 group-hover:scale-110 transition-transform" />
               </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500">
       {/* Hero Section */}
       <section className="relative py-48 bg-navy-900 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
             <img src={activeSolution.img} className="w-full h-full object-cover" alt={activeSolution.title} />
             <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 to-navy-900" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 z-10 text-center">
             <Link to="/solutions" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-bold tracking-widest uppercase mb-12 hover:text-white transition-colors border border-gold-500/20 px-6 py-2 rounded-full backdrop-blur-sm bg-white/5">
                <ArrowRight className="w-4 h-4 rotate-180" /> Back to Solutions Overview
             </Link>
             <h5 className="text-gold-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Strategic Pillar</h5>
             <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">{activeSolution.title}</h1>
             <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">{activeSolution.subtitle}</p>
          </div>
       </section>

       {/* Features Grid Section (White Background) */}
       <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                <div>
                   <div className="mb-20">
                      <div className="inline-flex items-center gap-3 bg-navy-900/5 border border-navy-900/10 text-navy-900 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
                         <activeSolution.philosophyIcon className="w-4 h-4 text-gold-500" />
                         {activeSolution.philosophyTag}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6 leading-tight">{activeSolution.philosophyTitle}</h2>
                      <div className="w-20 h-1 bg-gold-500 mb-10" />
                      <p className="text-xl text-gray-600 leading-relaxed font-light mb-16">{activeSolution.desc}</p>
                   </div>

                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-12 leading-tight uppercase tracking-tight">Deliver Measurable Results at Scale</h2>
                   
                   <div className="grid grid-cols-1 gap-12">
                      {activeSolution.features.map((feature, i) => (
                         <div key={i} className="flex flex-col p-10 bg-gray-50 border-l-4 border-gold-500 group hover:bg-navy-900 transition-all duration-500 cursor-default shadow-sm hover:shadow-2xl rounded-sm">
                            <div className="flex flex-col gap-2 mb-6">
                               <div className="flex items-center gap-4">
                                  <div className="shrink-0 w-8 h-8 bg-gold-500 text-navy-900 rounded-sm flex items-center justify-center font-bold text-sm shadow-xl">
                                    {i + 1}
                                  </div>
                               </div>
                               <h4 className="text-2xl font-bold uppercase tracking-widest text-navy-900 group-hover:text-white transition-colors pl-12">
                                 {feature.title}
                               </h4>
                            </div>

                            <div className="pl-12 space-y-6">
                               <div className="border-l-2 border-gold-500/30 pl-6">
                                  <p className="text-lg font-serif font-bold italic text-navy-900 group-hover:text-white transition-colors leading-relaxed">
                                    {feature.subtitle}
                                  </p>
                               </div>

                               <div className="pl-6">
                                  <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {feature.paragraph}
                                  </p>
                               </div>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
                
                {/* Sticky Sidebar */}
                <div className="relative pt-12">
                   <div className="sticky top-40">
                     <div className="relative">
                        <img src={activeSolution.img} className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt={activeSolution.title} />
                        <div className="absolute -inset-4 border border-navy-900/10 pointer-events-none" />
                     </div>
                     <div className="mt-12 p-10 bg-navy-900 shadow-2xl relative overflow-hidden rounded-sm border-b-8 border-gold-500">
                        <Zap className="w-12 h-12 text-gold-500 mb-6" />
                        <p className="text-white font-serif italic text-2xl leading-relaxed">
                           "{activeSolution.sidebarQuote}"
                        </p>
                        <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Specialized Suite</span>
                           <Link to="/contact" className="text-gold-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                              Inquire <ChevronRight className="w-4 h-4" />
                           </Link>
                        </div>
                     </div>
                   </div>
                </div>
             </div>
          </div>
       </section>

       {/* TRANSFORMATION IN ACTION Case Studies */}
       <section className="py-32 bg-navy-900 relative overflow-hidden text-white border-y border-white/5">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="text-center mb-24">
                <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md">
                   <Activity className="w-4 h-4" />
                   Our Impact in Action
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 uppercase tracking-tight leading-none">TRANSFORMATION IN ACTION: CASE STUDIES THAT DELIVER RESULTS</h2>
                <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
                <p className="text-gray-400 text-xl font-light max-w-4xl mx-auto leading-relaxed">
                   We don't just talk about change; we architect it. Explore the tangible impact our {activeSolution.title.toLowerCase()} suite has delivered for global industry leaders.
                </p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {activeSolution.caseStudies?.map((cs, i) => (
                   <div key={i} className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-12 md:p-16 shadow-2xl group overflow-hidden hover:border-gold-500/50 transition-all duration-500 rounded-sm">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl group-hover:bg-gold-500/10 transition-colors" />
                      
                      <div className="relative z-10 flex flex-col h-full">
                         <div className="mb-10">
                            <div className="text-6xl md:text-8xl font-serif font-black text-gold-500 mb-2 leading-none">
                               {cs.impact}
                            </div>
                            <div className="text-[11px] font-black text-white uppercase tracking-[0.3em] leading-tight">
                               {cs.metric}
                            </div>
                         </div>
                         
                         <div className="border-t border-white/10 pt-10 mt-auto">
                            <div className="flex items-center gap-2 text-gold-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                               <div className="w-8 h-[1px] bg-gold-500" />
                               {cs.title}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-8 leading-tight group-hover:text-gold-500 transition-colors">
                               "{cs.result}"
                            </h3>
                            <div className="inline-flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest border-b-2 border-white/20 pb-1 hover:border-gold-500 hover:text-gold-500 cursor-pointer transition-all">
                               Read Full Case Study <ExternalLink className="w-3 h-3" />
                            </div>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </section>
       
       {/* CTA Section */}
       <section className="py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-10 uppercase tracking-tight leading-none">Ready to Architect Your {activeSolution.title}?</h2>
             <p className="text-gray-500 mb-16 text-lg font-light leading-relaxed">
                Let's discuss how our specialized {activeSolution.title.toLowerCase()} suite can address your unique organizational challenges and drive permanent change.
             </p>
             <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-navy-900 text-white font-bold uppercase tracking-widest text-[11px] hover:bg-gold-500 hover:text-navy-900 transition-all group shadow-2xl">
                Book Your Strategic Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
             </Link>
          </div>
       </section>
    </div>
  );
};

export default Solutions;
