import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, ArrowRight, ArrowUp, AlertCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email');
      return;
    }
    
    setError('');
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <span className="text-3xl font-serif font-bold text-white group-hover:text-gold-500 transition-colors">
                PLS
              </span>
              <div className="text-[10px] tracking-[0.25em] font-medium text-gold-500 uppercase mt-1">
                Transformation
              </div>
              <div className="text-[8px] tracking-[0.1em] text-gray-400 uppercase mt-2">
                Powering Change Through People™
              </div>
            </Link>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                <p>440 Louisiana St., Ste. 900 I Houston, TX 77002</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <p>+1 281-947-5747</p>
              </div>
            </div>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gold-500 uppercase mb-8">What We Do</h4>
            <ul className="space-y-4">
              {[
                { label: 'Overview of PLS Solutions', path: '/solutions' },
                { label: 'Empowered Leadership', path: '/solutions/leadership' },
                { label: 'Aligned Culture', path: '/solutions/culture' },
                { label: 'Engaged People', path: '/solutions/people' },
                { label: 'Enterprise Transformation', path: '/solutions/enterprise' }
              ].map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gold-500 uppercase mb-8">Insights & Impact</h4>
            <ul className="space-y-4">
              {['Articles', 'Case Studies', 'Podcast'].map(link => (
                <li key={link}>
                  <Link to="/insights" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
            <h4 className="text-xs font-bold tracking-widest text-gold-500 uppercase mt-10 mb-8">Other</h4>
            <ul className="space-y-4">
              {[
                { label: 'Methodology', path: '/methodology' },
                { label: 'Who We Are', path: '/who-we-are' },
                { label: 'Book A Call', path: '/contact' },
                { label: 'Contact Us', path: '/contact' }
              ].map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gold-500 uppercase mb-8">Subscribe to Our Newsletter</h4>
            <form onSubmit={handleSubscribe} className="relative mb-2">
              <input 
                type="text" 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Your Email" 
                className={`w-full bg-navy-900 border-b ${error ? 'border-red-500' : 'border-gray-700'} py-3 focus:outline-none focus:border-gold-500 transition-colors text-sm`}
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-gold-500 hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            {error && (
              <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest flex items-center gap-1 mb-4">
                <AlertCircle size={10} /> {error}
              </p>
            )}
            {success && (
              <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest mb-4">
                Thank you for subscribing!
              </p>
            )}
            <div className="space-y-4 mt-8">
               <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Live Reception Hours - Central Time</h5>
               <p className="text-xs text-gray-400">Monday - Friday: 7:00 am to 8:00 pm<br/>Saturday: 8:00 am to 3:00 pm</p>
               <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Live Chat Hours - Central Time</h5>
               <p className="text-xs text-gray-400">Monday - Friday: 9:00 am to 5:00 pm</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 text-center md:text-left">
            PLS Transformation is a registered company of Performance Leadership Solutions, LLC. All Rights Reserved, Copyright 2025.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 bg-navy-900 border border-gray-700 text-gray-500 hover:text-white hover:border-white transition-all rounded-full"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;