import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Adjust path if necessary

// Mock data based on your screenshot
const eventsData = [
  {
    id: 1,
    title: "ARUNACHALA DEEP RETREAT ~ June 2026 (Batch 21)",
    price: null,
    image: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=800&auto=format&fit=crop", // Placeholder
    isFree: false,
    link: "/retreats"
  },
  {
    id: 2,
    title: "THE SHIFT (+1 week Upadesa Saram)",
    price: "₹ 1,111",
    image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800&auto=format&fit=crop", // Placeholder
    isFree: false,
    link: "/webinars"
  },
  {
    id: 3,
    title: "FREE REGULAR LiVE SESSIONS ✨ For Members of SiA",
    price: "Free",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop", // Placeholder
    isFree: true,
    link: "/satsangs"
  }
];

const Events = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F3] font-sans text-slate-800">
      <Navbar />

      {/* --- Premium Header --- */}
      <header className="bg-[#2D1A4A] py-20 text-center relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#4a2b7a] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-[#B89B5E] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Upcoming Gatherings
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            Events
          </h1>
          <div className="flex items-center justify-center gap-3 text-[#B89B5E] text-sm font-medium tracking-wide">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> Jake Light</span>
            <span className="opacity-50">•</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> October 20, 2023</span>
          </div>
        </div>
      </header>

      {/* --- Main Content Area --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* 3-Column Grid for Events */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {eventsData.map((event) => (
            <div key={event.id} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden flex flex-col group relative">
              
              {/* ✅ PERFECT IMAGE CONTAINER FIX */}
              {/* Fixed height (h-80), flex-center, and object-contain ensures flyers never get chopped! */}
              <div className="h-[340px] w-full bg-[#FAF8F3] relative flex items-center justify-center p-6 border-b border-slate-100">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
                {/* Floating Badge */}
                {event.isFree && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#2D1A4A] shadow-sm z-10">
                    Free Access
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow text-center items-center bg-white">
                <h2 className="text-lg md:text-xl font-serif font-bold text-[#2D1A4A] mb-6 leading-snug line-clamp-3 min-h-[4rem]">
                  {event.title}
                </h2>
                
                {/* Price Accent (Keeps alignment even if empty) */}
                <div className="mt-auto mb-8 min-h-[2rem] flex items-center justify-center">
                  {event.price ? (
                    <p className="text-2xl font-bold text-[#B89B5E]">{event.price}</p>
                  ) : null}
                </div>

                {/* Premium Register Button */}
                <Link to={event.link} className="w-full">
                  <button className="w-full bg-[#2D1A4A] hover:bg-[#1C0F2E] text-white px-8 py-3.5 rounded-full shadow-md hover:-translate-y-1 transition-all duration-300 text-xs font-bold tracking-widest uppercase">
                    Register
                  </button>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* --- Premium Footer --- */}
      <footer className="bg-[#1C0F2E] text-slate-400 py-16 px-6 lg:px-8 text-sm mt-12">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h4 className="text-white font-serif text-xl font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 font-light">
              <li><Link to="#" className="hover:text-[#B89B5E] transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-[#B89B5E] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-[#B89B5E] transition-colors">Cancellation & Refund Policy</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-serif text-xl font-bold uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 font-light">
              <li><Link to="/satsangs" className="hover:text-[#B89B5E] transition-colors font-medium text-[#B89B5E]">Free Satsangs for SiA members</Link></li>
              <li><Link to="#" className="hover:text-[#B89B5E] transition-colors">Blogs (View All)</Link></li>
              <li><Link to="#" className="hover:text-[#B89B5E] transition-colors">For YouTube Members</Link></li>
              <li><Link to="#" className="hover:text-[#B89B5E] transition-colors">Trending Playlist</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-serif text-xl font-bold uppercase tracking-wider">Search</h4>
            <div className="flex items-center gap-2 bg-[#2D1A4A] rounded-full p-1.5 w-full max-w-xs border border-white/10">
              <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none px-4 py-2 w-full text-white placeholder-slate-400 font-light" />
              <button className="bg-[#B89B5E] text-white px-5 py-2 rounded-full font-medium transition-transform hover:scale-105">Go</button>
            </div>
          </div>
        </div>
        <div className="text-center mt-16 pt-8 border-t border-white/10 font-light tracking-wide text-xs">
          Copyright © 2024 Shifting into Awareness
        </div>
      </footer>

    </div>
  );
};

export default Events;