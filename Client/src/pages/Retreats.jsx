import React from 'react';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Adjust path if necessary

// Mock data for the retreats based on your screenshot
const retreatsData = [
  {
    id: 1,
    title: "ARUNACHALA DEEP RETREAT ~ June 2026 (Batch 21)",
    price: "Premium", // You can update this if there's a specific price
    image: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=800&auto=format&fit=crop", // Placeholder image representing mountains/spiritual retreat
    isFree: false,
    link: "#"
  },
  {
    id: 2,
    title: "FREE REGULAR LiVE SESSIONS ✨ For Members of SiA",
    price: "Free",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop", 
    isFree: true,
    link: "/satsangs" // Links to the satsangs page
  }
];

// Mock data for the sidebar recent posts (kept consistent with the rest of the site)
const recentPosts = [
  {
    id: 1,
    title: "CALM Mind, Open Heart: The Journey Within",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Awareness in Daily Life: A Practical Guide",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "A walk through Nityananda Ashram in Kanhangad",
    image: "https://images.unsplash.com/photo-1605640840469-80d0d54029bc?q=80&w=150&auto=format&fit=crop"
  }
];

const Retreats = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F3] font-sans text-slate-800">
      <Navbar />

      {/* --- Premium Header --- */}
      <header className="bg-[#2D1A4A] py-20 text-center relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#4a2b7a] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-[#B89B5E] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Sacred Immersions
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            Retreats
          </h1>
          <div className="flex items-center justify-center gap-3 text-[#B89B5E] text-sm font-medium tracking-wide">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> migrate</span>
            <span className="opacity-50">•</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> April 20, 2024</span>
          </div>
        </div>
      </header>

      {/* --- Main Content Area --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1fr_350px] gap-16 items-start">
          
          {/* LEFT COLUMN: Retreat Cards */}
          <div className="grid sm:grid-cols-2 gap-8">
            {retreatsData.map((retreat) => (
              <div key={retreat.id} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden flex flex-col group relative">
                
                {/* Image Container - Using object-contain so flyers are not chopped off! */}
                <div className="h-80 w-full overflow-hidden bg-[#FAF8F3] relative flex items-center justify-center p-4 border-b border-slate-100">
                  <img 
                    src={retreat.image} 
                    alt={retreat.title} 
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-in-out drop-shadow-md"
                    loading="lazy"
                  />
                  {/* Floating Tag Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#2D1A4A] shadow-sm z-10">
                    {retreat.isFree ? "Free Access" : "Immersion"}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow text-center items-center">
                  <h2 className="text-xl font-serif font-bold text-[#2D1A4A] mb-8 leading-snug line-clamp-3">
                    {retreat.title}
                  </h2>

                  {/* Premium Register Button */}
                  <Link to={retreat.link} className="w-full mt-auto">
                    <button className="w-full bg-[#2D1A4A] hover:bg-[#1C0F2E] text-white px-8 py-3.5 rounded-full shadow-md hover:-translate-y-1 transition-all duration-300 text-xs font-bold tracking-widest uppercase">
                      Register Now
                    </button>
                  </Link>
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Sidebar */}
          <aside className="space-y-12">
            
            {/* Search Box */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-[#2D1A4A] uppercase tracking-widest mb-4">Search</h3>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  className="w-full bg-[#FAF8F3] border-none rounded-full py-3.5 pl-11 pr-4 text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-[#B89B5E] outline-none transition-all text-sm font-medium"
                  placeholder="Find a retreat..."
                />
              </div>
            </div>

            {/* Recent Posts List */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-[#2D1A4A] uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">
                Recent Posts
              </h3>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <Link key={post.id} to="#" className="flex gap-5 group items-center">
                    <div className="w-20 h-20 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-bold font-serif text-[#2D1A4A] group-hover:text-[#B89B5E] transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 font-medium flex items-center gap-1">
                        Read More <ArrowRight className="w-3 h-3" />
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

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

export default Retreats;