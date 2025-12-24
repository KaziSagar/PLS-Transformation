import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, ArrowRight, Loader2 } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { 
    label: 'WHAT WE DO', 
    path: '/solutions',
    children: [
      { label: 'Overview', path: '/solutions' },
      { label: 'Empowered Leadership', path: '/solutions/leadership' },
      { label: 'Aligned Culture', path: '/solutions/culture' },
      { label: 'Engaged People', path: '/solutions/people' },
      { label: 'Enterprise Transformation', path: '/solutions/enterprise' },
    ]
  },
  { label: 'WHO WE ARE', path: '/who-we-are' },
  { label: 'METHODOLOGY', path: '/methodology' },
  { 
    label: 'INSIGHTS & IMPACT', 
    path: '/insights',
    children: [
      { label: 'Case Studies', path: '/insights/case-studies' },
      { label: 'Articles', path: '/insights/articles' },
      { label: 'Podcast', path: '/insights/podcast' },
    ]
  },
  { label: 'CONTACT US', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = 'auto';
  }, [location]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle Escape key to close search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        document.body.style.overflow = 'auto';
      }
    };
    if (isSearchOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = 'auto';
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    setIsSearchOpen(false);
    document.body.style.overflow = newState ? 'hidden' : 'auto';
  };

  const toggleSearch = () => {
    const newState = !isSearchOpen;
    setIsSearchOpen(newState);
    setIsMobileMenuOpen(false);
    document.body.style.overflow = newState ? 'hidden' : 'auto';
    if (!newState) {
      setSearchQuery('');
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    // Simulate a search delay for premium feel
    setTimeout(() => {
      setIsSearching(false);
      setIsSearchOpen(false);
      document.body.style.overflow = 'auto';
      // In a real app, we'd navigate to a results page
      // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      alert(`Searching for: ${searchQuery}. Search results would be displayed on a dedicated page.`);
    }, 800);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 flex items-center border-b ${
        isScrolled || isMobileMenuOpen || isSearchOpen
          ? 'bg-[#030d1c] h-16 shadow-2xl border-[#030d1c]' 
          : 'bg-[#030d1c] h-20 border-white/5'
      }`}>
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" onClick={handleLinkClick} className="flex flex-col group relative z-[110]">
              <span className="text-2xl font-serif font-bold tracking-tight text-white group-hover:text-gold-500 transition-colors leading-none">
                PLS
              </span>
              <span className="text-[8px] tracking-[0.2em] font-medium text-gold-500 uppercase mt-1">
                Transformation
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    to={item.path}
                    onClick={handleLinkClick}
                    className="flex items-center text-[11px] font-bold tracking-widest text-white/90 hover:text-gold-500 transition-colors uppercase py-2"
                  >
                    {item.label}
                    {item.children && <ChevronDown className={`ml-1 w-3 h-3 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                  </Link>
                  
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full -left-6 pt-2 w-72 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="bg-white rounded-sm shadow-2xl py-6 border-t-[3px] border-gold-500 overflow-hidden ring-1 ring-black/5">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            onClick={handleLinkClick}
                            className="block px-8 py-3 text-[12px] font-bold uppercase tracking-wider text-[#030d1c] hover:bg-gold-500 hover:text-white transition-all"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <Link 
                to="/contact" 
                onClick={handleLinkClick}
                className="px-6 py-2 border border-gold-500 text-gold-500 text-[10px] font-bold tracking-widest hover:bg-gold-500 hover:text-navy-900 transition-all rounded-sm uppercase ml-4"
              >
                Book a call
              </Link>
              
              <button 
                onClick={toggleSearch}
                className={`transition-colors ml-4 p-2 rounded-full ${isSearchOpen ? 'text-gold-500 bg-white/5' : 'text-white hover:text-gold-500'}`}
                aria-label="Toggle Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center space-x-4">
              <button 
                onClick={toggleSearch}
                className="text-white p-2 relative z-[110]"
                aria-label="Toggle search"
              >
                <Search size={24} />
              </button>
              <button 
                onClick={toggleMobileMenu}
                className="text-white p-2 relative z-[110]"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 lg:hidden bg-[#030d1c] z-[105] overflow-y-auto pt-24 transition-all animate-in fade-in slide-in-from-right-full duration-300">
            <div className="px-6 py-8 space-y-8">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-4">
                  <Link 
                    to={item.path}
                    onClick={handleLinkClick}
                    className="block text-3xl font-serif font-bold text-white uppercase"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-4 border-l-2 border-gold-500/30">
                      {item.children.map((child) => (
                        <Link 
                          key={child.label}
                          to={child.path}
                          onClick={handleLinkClick}
                          className="block text-lg text-gray-400 hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-8">
                <Link 
                  to="/contact" 
                  onClick={handleLinkClick}
                  className="block w-full text-center px-6 py-5 bg-gold-500 text-navy-900 text-[12px] font-bold tracking-widest uppercase rounded-sm shadow-2xl active:scale-95 transition-transform"
                >
                  Book a call
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="fixed inset-0 z-[120] bg-navy-900/98 backdrop-blur-xl flex items-center justify-center animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={toggleSearch}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
              aria-label="Close search"
            >
              <X size={32} />
            </button>
            
            <div className="max-w-4xl w-full px-6">
              <form onSubmit={handleSearchSubmit} className="relative group">
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-gold-500 hidden md:block">
                  <Search size={32} />
                </div>
                <input 
                  ref={searchInputRef}
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What can we help you find?"
                  className="w-full bg-transparent border-b-2 border-white/20 py-6 md:py-10 text-3xl md:text-6xl font-serif font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-gold-500 transition-all"
                />
                <button 
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gold-500 hover:text-white transition-colors p-4 disabled:opacity-50"
                >
                  {isSearching ? <Loader2 className="w-8 h-8 md:w-12 md:h-12 animate-spin" /> : <ArrowRight className="w-8 h-8 md:w-12 md:h-12" />}
                </button>
              </form>
              
              <div className="mt-12 md:mt-16 animate-in slide-in-from-bottom-4 fade-in duration-500 delay-150">
                <h5 className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-8">Suggested Searches</h5>
                <div className="flex flex-wrap gap-4 md:gap-8">
                  {['PFT Model', 'Executive Coaching', 'Merger Integration', 'Success Stories', 'Transformation Report'].map((suggestion) => (
                    <button 
                      key={suggestion}
                      onClick={() => {
                        setSearchQuery(suggestion);
                        searchInputRef.current?.focus();
                      }}
                      className="text-white/50 hover:text-white text-sm md:text-lg font-light border-b border-white/10 hover:border-gold-500 pb-1 transition-all"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer to prevent content jump since navbar is fixed */}
      <div className="h-20 lg:h-20" />
    </>
  );
};

export default Navbar;