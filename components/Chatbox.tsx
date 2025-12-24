import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  X, 
  Send, 
  Home, 
  MessageCircle, 
  User, 
  Mail, 
  ChevronRight, 
  ChevronLeft,
  Calendar,
  Zap,
  BookOpen,
  Sparkles,
  CheckCircle2,
  RefreshCcw
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'amelia';
  text: string;
  timestamp: string;
}

const Chatbox: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'messages'>('home');
  const [isMessageOpened, setIsMessageOpened] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  // Chat History State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'amelia',
      text: "👋 Hi! Welcome to PLS! I'm Amelia, your transformation concierge. Are you looking for leadership coaching, cultural integration, or general consulting today?",
      timestamp: 'Just Now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isMessageOpened) {
      scrollToBottom();
    }
  }, [chatMessages, isMessageOpened, isTyping]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 1500);
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: 'Just Now'
    };

    setChatMessages(prev => [...prev, newMessage]);
    setInputValue('');
    
    // Simulate Amelia typing and responding
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const ameliaResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'amelia',
        text: getAmeliaResponse(text),
        timestamp: 'Just Now'
      };
      setChatMessages(prev => [...prev, ameliaResponse]);
    }, 1500);
  };

  const getAmeliaResponse = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('consultation')) return "I'd be happy to help you book a discovery call! Would you prefer a morning or afternoon slot later this week?";
    if (lower.includes('services')) return "We specialize in Empowered Leadership, Aligned Culture, and Engaged People. Our methodology focuses on unlocking human potential for measurable ROI.";
    if (lower.includes('question')) return "Of course! Please go ahead and ask. I'm here to provide any information you need about our People-First Transformation™ model.";
    return "That's helpful. One of our transformation experts will review our conversation and reach out to you with more specific details.";
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setActiveTab('home');
  };

  const toggleChat = () => setIsOpen(!isOpen);

  const ameliaAvatar = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop";

  const predefinedMessages = [
    "Book a consultation",
    "Tell me about your services",
    "I have a question"
  ];

  const handleQuickNav = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200] font-sans selection:bg-gold-500/30">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="w-16 h-16 bg-navy-900 text-gold-500 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.4)] flex items-center justify-center hover:scale-110 hover:bg-gold-500 hover:text-navy-900 transition-all duration-500 group border border-gold-500/20"
          aria-label="Open Chat"
        >
          <div className="relative">
            <MessageSquare className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
            {!isMessageOpened && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-gold-500 border-2 border-navy-900"></span>
              </span>
            )}
          </div>
        </button>
      )}

      {/* Main Chat Window */}
      {isOpen && (
        <div className="w-[380px] h-[600px] bg-white rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-12 fade-in duration-500 ease-out">
          
          {/* Header - Navy/Gold Gradient */}
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-6 flex justify-between items-center text-white relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            
            {activeTab === 'home' ? (
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gold-500 border border-white/10 backdrop-blur-sm">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-wider uppercase text-white">Concierge</h3>
                  <p className="text-[10px] text-gold-500 font-bold uppercase tracking-widest opacity-80">How can we help today?</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                  <img src={ameliaAvatar} className="w-12 h-12 rounded-2xl object-cover border-2 border-gold-500/30" alt="Amelia" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-navy-900 rounded-full" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-wider uppercase">Amelia</h3>
                  <div className="flex items-center">
                    {isMessageOpened ? (
                      <button 
                        onClick={() => setIsMessageOpened(false)}
                        className="text-[10px] text-gold-500 font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-0.5"
                      >
                        <ChevronLeft size={14} className="-ml-1" /> Back to Messages
                      </button>
                    ) : (
                      <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">Always Online</span>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-all hover:rotate-90 p-2 relative z-10"
            >
              <X size={24} />
            </button>
          </div>

          {/* Dynamic Content Body */}
          <div className="flex-grow overflow-y-auto p-6 bg-[#fcfbf9]">
            {activeTab === 'home' ? (
              <div className="animate-in fade-in slide-in-from-left-4 duration-500 space-y-8 h-full">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-in zoom-in-95 duration-500">
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center shadow-inner">
                      <CheckCircle2 size={48} className="animate-in zoom-in-50 duration-500" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-serif font-bold text-navy-900">Message Sent</h2>
                      <p className="text-sm text-gray-500 leading-relaxed px-4">
                        Thank you for reaching out. A transformation expert has been notified and will review your inquiry shortly.
                      </p>
                    </div>
                    <button 
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 text-gold-500 font-bold text-[10px] uppercase tracking-widest hover:text-navy-900 transition-colors"
                    >
                      <RefreshCcw size={14} /> Send another inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4">
                      <h2 className="text-2xl font-serif font-bold text-navy-900">Welcome to PLS</h2>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Our team is here to help you architect your organizational transformation. How would you like to proceed?
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => handleQuickNav('/contact')}
                        className="flex flex-col items-center justify-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-gold-500 hover:shadow-md transition-all group"
                      >
                        <Calendar className="w-6 h-6 text-gold-500 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-bold text-navy-900 uppercase tracking-tighter">Book Call</span>
                      </button>
                      <button 
                        onClick={() => handleQuickNav('/insights')}
                        className="flex flex-col items-center justify-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-gold-500 hover:shadow-md transition-all group"
                      >
                        <BookOpen className="w-6 h-6 text-gold-500 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-bold text-navy-900 uppercase tracking-tighter">View Success</span>
                      </button>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                      <div className="flex items-center gap-2 text-navy-900 font-bold text-[10px] uppercase tracking-widest">
                        <div className="w-6 h-[1px] bg-gold-500" /> Direct Inquiry
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1">
                          <div className="relative">
                            <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${errors.name ? 'text-red-400' : 'text-gray-300'}`} />
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className={`w-full bg-gray-50 border ${errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-100 focus:border-gold-500'} rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:bg-white transition-all placeholder:text-gray-300`}
                              placeholder="Full Name"
                            />
                          </div>
                          {errors.name && <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest px-1">{errors.name}</p>}
                        </div>
                        <div className="space-y-1">
                          <div className="relative">
                            <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${errors.email ? 'text-red-400' : 'text-gray-300'}`} />
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className={`w-full bg-gray-50 border ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-100 focus:border-gold-500'} rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:bg-white transition-all placeholder:text-gray-300`}
                              placeholder="Email Address"
                            />
                          </div>
                          {errors.email && <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest px-1">{errors.email}</p>}
                        </div>
                        <div className="space-y-1">
                          <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className={`w-full bg-gray-50 border ${errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-100 focus:border-gold-500'} rounded-xl py-4 px-5 text-sm focus:outline-none focus:bg-white transition-all resize-none min-h-[100px] placeholder:text-gray-300`}
                            placeholder="Tell us about your challenge..."
                          />
                          {errors.message && <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest px-1">{errors.message}</p>}
                        </div>
                        <button 
                          type="submit"
                          disabled={isTyping}
                          className="w-full bg-navy-900 text-white font-bold uppercase tracking-[0.2em] text-[10px] py-4 rounded-xl hover:bg-gold-500 hover:text-navy-900 transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(3,13,28,0.15)] active:scale-95 disabled:opacity-50"
                        >
                          {isTyping ? "Processing..." : "Submit Inquiry"} <Send size={14} />
                        </button>
                      </form>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="animate-in fade-in duration-500 h-full flex flex-col">
                {!isMessageOpened ? (
                  <div className="animate-in slide-in-from-left-4 duration-500 space-y-4">
                    <button 
                      onClick={() => setIsMessageOpened(true)}
                      className="w-full bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex items-center gap-4 text-left group relative border-l-4 border-l-gold-500"
                    >
                      <div className="relative shrink-0">
                        <img src={ameliaAvatar} className="w-12 h-12 rounded-xl object-cover" alt="Amelia" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="text-sm font-bold text-navy-900">Amelia</span>
                          <span className="text-[9px] font-bold text-gold-500 uppercase tracking-tighter">NOW</span>
                        </div>
                        <p className="text-xs text-gray-500 truncate font-medium">
                          👋 Hi! Welcome to PLS! How can I help?
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gold-500 transition-colors" />
                    </button>
                    
                    <div className="text-center pt-8">
                       <p className="text-[9px] text-gray-300 uppercase tracking-[0.4em] font-bold">End of Conversation History</p>
                    </div>
                  </div>
                ) : (
                  /* Live Chat View */
                  <div className="flex flex-col h-full animate-in slide-in-from-right-4 duration-500">
                    <div className="flex-grow space-y-6 overflow-y-auto pb-4 pr-1 scrollbar-hide">
                      {chatMessages.map((msg) => (
                        <div key={msg.id} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            {msg.sender === 'amelia' && (
                              <img src={ameliaAvatar} className="w-8 h-8 rounded-lg object-cover shrink-0 shadow-sm self-end" alt="Amelia" />
                            )}
                            <div className={`p-4 rounded-2xl shadow-sm ${
                              msg.sender === 'user' 
                                ? 'bg-navy-900 text-white rounded-tr-none text-right' 
                                : 'bg-white border border-gray-100 text-navy-900 rounded-bl-none border-b-2 border-b-gold-500/10 text-left'
                            }`}>
                              <p className="text-sm leading-relaxed">{msg.text}</p>
                              <div className={`mt-2 text-[9px] font-bold uppercase tracking-widest ${
                                msg.sender === 'user' ? 'text-white/40' : 'text-gray-400'
                              }`}>
                                {msg.sender === 'amelia' ? 'Amelia' : 'You'} • <span className={msg.sender === 'amelia' ? 'text-gold-500' : ''}>{msg.timestamp}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {isTyping && (
                        <div className="flex justify-start animate-pulse">
                          <div className="flex gap-3 max-w-[85%]">
                            <img src={ameliaAvatar} className="w-8 h-8 rounded-lg object-cover shrink-0 shadow-sm self-end" alt="Amelia" />
                            <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                              <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Predefined Quick Message Buttons - Listed on the Left Side */}
                    <div className="py-4 space-y-3 border-t border-gray-50 bg-[#fcfbf9] z-10 px-1">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1 px-1">Quick Actions</p>
                      <div className="flex flex-col items-start gap-2">
                        {predefinedMessages.map((msg) => (
                          <button 
                            key={msg}
                            onClick={() => handleSendMessage(msg)}
                            className="text-[10px] font-bold uppercase tracking-widest bg-white border border-gray-200 hover:border-gold-500 hover:text-navy-900 text-gray-500 px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 flex items-center gap-2 group w-fit text-left"
                          >
                            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full group-hover:animate-ping" />
                            {msg}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Chat Input Area */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="relative">
                        <input 
                          type="text" 
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                          placeholder="Type your reply..." 
                          className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-5 pr-12 text-sm focus:outline-none focus:border-gold-500 shadow-sm transition-all"
                        />
                        <button 
                          onClick={() => handleSendMessage(inputValue)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-navy-900 text-white rounded-lg flex items-center justify-center hover:bg-gold-500 transition-colors active:scale-90"
                        >
                          <Send size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Premium Bottom Tab Navigation */}
          <div className="bg-white border-t border-gray-50 flex h-24 items-center px-6 gap-4">
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex-1 flex flex-col items-center justify-center gap-1.5 h-14 rounded-2xl transition-all ${
                activeTab === 'home' 
                  ? 'text-navy-900 bg-gray-50 shadow-inner border border-gray-100' 
                  : 'text-gray-400 hover:text-navy-900'
              }`}
            >
              <Home size={22} className={activeTab === 'home' ? 'text-gold-500' : ''} />
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">Concierge</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('messages')}
              className={`flex-1 flex flex-col items-center justify-center gap-1.5 h-14 rounded-2xl transition-all ${
                activeTab === 'messages' 
                  ? 'text-navy-900 bg-gray-50 shadow-inner border border-gray-100' 
                  : 'text-gray-400 hover:text-navy-900'
              }`}
            >
              <div className="relative">
                <MessageCircle size={22} className={activeTab === 'messages' ? 'text-gold-500' : ''} />
                {!isMessageOpened && (
                   <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white shadow-sm" />
                )}
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">Inbox</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;