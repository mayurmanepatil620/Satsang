import React from 'react';
import { Video, CalendarDays, Sparkles, Send, ShieldCheck, Users } from 'lucide-react';
import Navbar from '../components/Navbar'; // Adjust path if necessary

const Satsangs = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          
          {/* --- Header Section --- */}
          <header className="bg-indigo-950 px-8 py-14 text-center text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-indigo-950 opacity-50"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex justify-center items-center opacity-10 pointer-events-none">
              <div className="w-[600px] h-[600px] border-[2px] border-white rounded-full"></div>
              <div className="w-[400px] h-[400px] border-[1px] border-white rounded-full absolute"></div>
            </div>
            
            <div className="relative z-10 space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-serif">
                Satsangs
              </h1>
              <div className="flex items-center justify-center gap-2 text-indigo-200 font-medium">
                <span>By: Jake Light</span>
                <span>•</span>
                <span>April 20, 2024</span>
              </div>
            </div>
          </header>

          <div className="p-8 md:p-12">
            
            {/* --- Highlight Banner --- */}
            <div className="bg-gradient-to-r from-indigo-50 via-white to-[#FAF8F3] border border-indigo-100 rounded-2xl p-8 text-center mb-12 shadow-sm relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-[#B89B5E] opacity-20">
                <Sparkles className="w-24 h-24" />
              </div>
              <Sparkles className="w-8 h-8 text-[#B89B5E] mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-950 tracking-tight mb-2">
                FREE REGULAR LiVE SESSIONS
              </h2>
              <p className="text-lg text-indigo-700 font-medium tracking-wide uppercase">
                Exclusive For Members of SiA
              </p>
            </div>

            {/* --- Info & Form Grid --- */}
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
              
              {/* Left Column: Context Info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-indigo-950">About Live Sessions</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Join our sacred digital space where seekers gather for deep contemplative sessions, clarity discussions, and teachings from higher scriptures. 
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    These sessions are conducted via Zoom. Links are shared privately to maintain the sanctity and safety of our spiritual environment.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-indigo-950 text-sm">Zoom Meetings</h4>
                      <p className="text-slate-500 text-xs mt-1">Conducted almost every other day at 9 PM IST.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-indigo-950 text-sm">Member Exclusive</h4>
                      <p className="text-slate-500 text-xs mt-1">You must be a member of SiA (having completed the basic course) to join.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-indigo-950 text-sm">Private & Secure</h4>
                      <p className="text-slate-500 text-xs mt-1">Links are shared directly via Arratai App broadcast to protect privacy.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Registration Form */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg shadow-indigo-100/50 relative">
                
                {/* Accent top border */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-600 rounded-t-2xl"></div>

                <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                  <CalendarDays className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h3 className="text-xl font-bold text-indigo-950">Register for Satsang</h3>
                    <p className="text-xs text-slate-500 mt-1">Please fill in your details to receive access.</p>
                  </div>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50"
                    />
                  </div>

                  {/* Email & WhatsApp Row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-slate-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        required 
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-slate-700">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50"
                      />
                    </div>
                  </div>

                  {/* Membership Status */}
                  <div className="space-y-1.5 pt-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      Are you already an SiA Member? <span className="text-red-500">*</span>
                    </label>
                    <select required className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50 text-slate-700 appearance-none cursor-pointer">
                      <option value="" disabled selected>- Select Option -</option>
                      <option value="yes">Yes, I am a member</option>
                      <option value="no">No, I need to do the basic course first</option>
                    </select>
                  </div>

                  {/* Intent / Message */}
                  <div className="space-y-1.5 pt-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      Why do you wish to join these sessions? (Optional)
                    </label>
                    <textarea 
                      rows="3" 
                      placeholder="Share a brief intent or message..."
                      className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50 resize-y"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold tracking-wide uppercase text-sm rounded-full shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Register Now
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>

          {/* --- Standard Footer --- */}
          <footer className="bg-slate-900 text-slate-400 py-12 px-8 text-sm mt-10">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cancellation Policy & Refund Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors font-medium text-indigo-300">Free Satsangs for SiA members</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blogs (View All)</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">For YouTube Members</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Trending Playlist</a></li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 bg-slate-800 rounded-lg p-1 w-full max-w-xs mb-4">
                  <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none px-3 py-2 w-full text-white placeholder-slate-500" />
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium">Search</button>
                </div>
              </div>
            </div>
            <div className="text-center mt-12 pt-8 border-t border-slate-800">
              Copyright © 2024 Shifting into Awareness
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
};

export default Satsangs;