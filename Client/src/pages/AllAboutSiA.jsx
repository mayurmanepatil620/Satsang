import React from 'react';
import { Quote, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; 

// ✅ IMPORT YOUR ASSETS
import siaLogo from '../assets/satsung-logo.jpg';


const AllAboutSiA = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F3] font-sans text-slate-800 selection:bg-[#B89B5E]/30">
      
      {/* Navbar sits at the top */}
      <Navbar />

  
      <div className="pt-20 md:pt-24">
        
        {/* --- Premium Header Section --- */}
        <header className="bg-[#2D1A4A] py-20 md:py-24 text-center relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#4a2b7a] rounded-full blur-[130px] opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#B89B5E]/30 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <p className="text-[#B89B5E] text-xs font-bold tracking-[0.25em] uppercase mb-6 animate-pulse">
              The Journey Within
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 tracking-tight max-w-4xl mx-auto leading-[1.15]">
              What is Shifting Into Awareness (SiA) all about?
            </h1>
            <div className="flex items-center justify-center gap-4 text-[#B89B5E] text-sm font-medium tracking-widest uppercase">
              <span>Jake Light</span>
              <span className="opacity-40 text-xs">✦</span>
              <span>September 29, 2023</span>
            </div>
          </div>
        </header>

        {/* --- Main Content --- */}
        <div className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto space-y-24">

            {/* ✅ PERFECTLY SIZED LOGO BADGE */}
            <div className="flex justify-center relative z-30 -mt-16 mb-10">
              <div className="relative group">
                {/* Outer Glow Effect */}
                <div className="absolute inset-0 bg-[#B89B5E] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                <div className="relative w-24 h-24 md:w-28 md:h-28 
                              bg-white rounded-full 
                              p-1 shadow-[0_10px_40px_rgba(45,26,74,0.15)] 
                              flex items-center justify-center
                              border border-[#B89B5E]/20 overflow-hidden">
                  <img 
                    src={siaLogo} 
                    alt="Shifting Into Awareness Logo" 
                    className="w-[85%] h-[85%] object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
            
            {/* Introduction */}
            <section className="space-y-8 text-lg text-slate-600 font-light leading-loose text-center max-w-3xl mx-auto">
              <p>
                <strong className="text-[#2D1A4A] font-bold">Shifting Into Awareness</strong>, as the name reveals, is a platform that helps seekers of truth to make the shift from ignorance to wisdom, from darkness to light, from bondage to freedom, from falseness to truth.
              </p>
              <p>
                It helps fully shift our existence from the mind ego to the Self (soul consciousness). It’s only when one lives in awareness that one can remain unentangled with the dramas of life, leading to the state of <span className="italic font-medium text-[#2D1A4A]">Jeevanamukta</span>.
              </p>
              
              <div className="relative py-12 my-16">
                
                <blockquote className="text-2xl md:text-3xl font-serif italic text-[#2D1A4A] mx-auto text-center relative z-10 leading-snug">
                  “Shifting into awareness” refers to a spiritual transition from living in the “mind-ego” to living in a state of pure presence or the “Self”.
                </blockquote>
              </div>

              <p>
                This shift is associated with the teachings of <strong className="text-[#2D1A4A] font-bold">Jake Light</strong> and his platform, which provides a roadmap for seekers to move from ignorance to wisdom.
              </p>
            </section>

            {/* Key Aspects Grid */}
            <section>
              <div className="text-center mb-12">
                
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2D1A4A]">Key Aspects of Shifting Into Awareness</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Moving from Mind to Presence", desc: "The core practice is shifting the seat of existence from the constant 'doing' of the mind to the 'being' of the Self." },
                  { title: "Dissolving the “Doer”", desc: "A major objective is to dissolve the egoic sense of being the 'meditator' or 'practitioner'." },
                  { title: "Witnessing Consciousness", desc: "Activating the 'Inner Guru' and living as an observer of thoughts and emotions rather than being controlled by them." },
                  { title: "Practical Benefits", desc: "Leading to a neutral and enriching life, reducing stress, and ultimately leading to Self-Realisation." }
                ].map((aspect, idx) => (
                  <div key={idx} className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                    <h3 className="text-[13px] font-bold text-[#2D1A4A] mb-4 uppercase tracking-[0.15em] border-b border-[#B89B5E]/30 pb-3 inline-block group-hover:text-[#B89B5E]">
                      {aspect.title}
                    </h3>
                    <p className="text-slate-500 font-light leading-relaxed">{aspect.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Objectives Section */}
            <section className="bg-transparent text-gray-900 p-10 md:p-16 rounded-[3rem] shadow-sm border border-gray-200 relative overflow-hidden">
  
  <div className="relative z-10">
    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Objectives of Shifting Into Awareness</h2>
    <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
      {[
        "To begin living in awareness",
        "Power of Satsang to keep you persistent",
        "Purging, releasing & cleansing the inner-core",
        "Breakdown of all beliefs and conditioning",
        "Living as divine presence, not the body",
        "Process of knowing who you truly are",
        "Meditate on wisdom of higher scriptures",
        "Reflect on the highest wisdom",
        "Annihilating all doership",
        "Nothing to Do but Abide in the Self"
      ].map((obj, i) => (
        <li key={i} className="flex items-start gap-4 font-light text-gray-700">
          <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0 mt-1" />
          <span className="text-[15px] tracking-wide">{obj}</span>
        </li>
      ))}
    </ul>
    <div className="mt-16 pt-10 border-t border-gray-200 text-center max-w-2xl mx-auto">
      <p className="text-xl md:text-2xl font-serif italic text-gray-900">
        "I am moving around in this human suit, having a human experience for the time being."
      </p>
    </div>
  </div>
</section>

            {/* What We Do */}
            <section className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-slate-100">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2D1A4A] mb-12 text-center">What We Do</h2>
              <div className="space-y-8 text-slate-600 font-light leading-relaxed mb-12">
                <div className="grid md:grid-cols-2 gap-6">
                  <p className="flex gap-4"> Life Resets through Cleansing & Purification!</p>
                  <p className="flex gap-4"> Igniting the Light of Wisdom & Inner Joy!</p>
                  <p className="flex gap-4"> Activating Inner Awakening & Growth!</p>
                  <p className="flex gap-4"> Moving towards Contentment & Peace!</p>
                </div>
                
                <p className="pt-6 border-t border-slate-100">
                  We conduct regular free Zoom sessions, paid webinars, and deep residential retreats at powerful locations like <span className="font-medium text-[#2D1A4A]">Tiruvannamalai, Kanhangad, and Ganeshpuri</span>. These programs are taught by Jake Light, who aims at dissolving the doer itself.
                </p>
              </div>
              <div className="bg-[#FAF8F3] py-8 px-6 rounded-3xl border border-[#B89B5E]/10 text-center">
                 <p className="text-xl md:text-2xl text-[#2D1A4A] font-serif italic">
                   We welcome you to the exciting inner journey of life.
                 </p>
              </div>
            </section>

            {/* Role Models */}
            <section className="pt-8 pb-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2D1A4A]">Our Role Models</h2>
                <p className="text-[#B89B5E] text-xs font-bold tracking-[0.2em] uppercase mt-2">The Ascended Masters</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-[3rem] shadow-xl border border-slate-100">
                {/* This is where your uploaded image of the 4 masters would go */}
                <div className="aspect-[16/9] w-full rounded-[2.5rem] bg-[#2D1A4A] overflow-hidden relative flex items-center justify-center">
                  <p className="text-white/40 font-serif italic">Guiding Us on the Path of Divine Love & Light</p>
                  {/* <img src={mastersHero} alt="Ascended Masters" className="w-full h-full object-cover" /> */}
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* --- Premium Footer --- */}
        <footer className="bg-[#1C0F2E] text-slate-400 py-16 px-6 text-sm">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h4 className="text-white font-serif text-xl font-bold uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3 font-light">
                <li><Link to="#" className="hover:text-[#B89B5E] transition-colors">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-[#B89B5E] transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h4 className="text-white font-serif text-xl font-bold uppercase tracking-wider">Shifting Into Awareness</h4>
              <p className="font-light italic">"From ignorance to wisdom, from darkness to light."</p>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-serif text-xl font-bold uppercase tracking-wider">Search</h4>
              <div className="flex items-center gap-2 bg-[#2D1A4A] rounded-full p-1.5 border border-white/10">
                <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none px-4 w-full text-white" />
                <button className="bg-[#B89B5E] text-white px-5 py-2 rounded-full font-medium">Go</button>
              </div>
            </div>
          </div>
          <div className="text-center mt-16 pt-8 border-t border-white/5 opacity-40 text-[10px] tracking-[0.3em] uppercase">
            Copyright © 2026 Shifting into Awareness
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AllAboutSiA;