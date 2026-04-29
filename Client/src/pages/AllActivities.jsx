import React from 'react';
import { PlayCircle, Video, MapPin, BookOpen, CalendarHeart, Headphones } from 'lucide-react';
import Navbar from '../components/Navbar'; // Adjust path if necessary

const AllActivities = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          
          {/* --- Header Section --- */}
          <header className="bg-indigo-950 px-8 py-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-indigo-950 opacity-50"></div>
            <div className="relative z-10 space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                All Activities
              </h1>
              <div className="flex items-center justify-center gap-2 text-indigo-200 font-medium">
                <span>By: Jake Light</span>
                <span>•</span>
                <span>April 21, 2024</span>
              </div>
              
              {/* Audio Player Placeholder matching original content */}
              <div className="max-w-md mx-auto pt-6 flex items-center justify-center gap-4 bg-indigo-900/50 p-3 rounded-full border border-indigo-800/50 backdrop-blur-sm">
                <button className="text-indigo-200 hover:text-white transition-colors">
                  <PlayCircle className="w-8 h-8" />
                </button>
                <div className="w-full h-2 bg-indigo-950 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-400 w-1/3 rounded-full"></div>
                </div>
                <span className="text-xs text-indigo-300 font-medium">00:00 / 00:00</span>
              </div>
            </div>
          </header>

          <div className="p-8 md:p-12 space-y-20">
            
            {/* --- Free Zoom Sessions --- */}
            <section className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-indigo-200 rounded-full"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                  <Video className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-indigo-950 tracking-tight">Free Zoom Sessions</h2>
              </div>
              
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed pl-2 md:pl-0">
                <p>
                  Almost every other day, there are free Zoom sessions conductive at <strong className="text-indigo-900">9 pm IST</strong>, which anyone in the group can join. The purpose of these satsangs are to keep you connected to your true purpose of life. By attending these sessions one can take the benefits of Satsang – of Shifting Into Awareness, aligning with the divinity, learning new things.
                </p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-6 shadow-sm">
                  <h3 className="font-bold text-indigo-900 mb-2">Weekly Clarity Sessions</h3>
                  <p className="text-base">
                    Weekly once there is a CLARITY SESSION conducted where anyone is free to ask directly or indirectly (through zoom chat) their doubts. This session is to bring total clarity to the path of the seeker.
                  </p>
                </div>
                <p>
                  These Zoom sessions require you to join the WhatsApp list, where all session links will come to you personally from where you can join. These are not public events and are kept private so as to protect the sanctity of the events and also to only filter the serious seekers.
                </p>
              </div>
            </section>

            {/* --- Webinars --- */}
            <section className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-indigo-200 rounded-full"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                  <Headphones className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-indigo-950 tracking-tight">Webinars</h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Life-transformative online webinars and courses that helps one to live in awareness, thus not being caught up by the lives and catches of the mind and the world, leading to peace, contentment, happiness and freedom.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Purification Webinars */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-indigo-900 mb-4 border-b border-indigo-100 pb-2">1. Purification Webinars</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex justify-between items-center">
                      <span>Shifting Into Awareness</span>
                      <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Course available</span>
                    </li>
                    <li>Releasing Karmic Debts</li>
                    <li className="flex justify-between items-center">
                      <span>Inner Child Healing</span>
                      <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Course available</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Inner Alchemy</span>
                      <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Course available</span>
                    </li>
                    <li>Purge & Reset Your Life</li>
                    <li>Release the Old, Embrace the New</li>
                    <li className="flex justify-between items-center">
                      <span>New Beginnings</span>
                      <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Course available</span>
                    </li>
                    <li>Unclutter – Concepts & Beliefs</li>
                  </ul>
                </div>

                {/* Ascension Webinars */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-indigo-900 mb-4 border-b border-indigo-100 pb-2">2. Ascension Webinars</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex justify-between items-center">
                      <span>Deepening Awareness</span>
                      <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Course available</span>
                    </li>
                    <li>Power of Grace & Surrender</li>
                    <li>From Noise to Silence</li>
                    <li>Living in Your Divine Presence</li>
                    <li>Appo Deepo Bhava (Be Your Own Light)</li>
                    <li>Returning to Source</li>
                    <li>Meditate on the Self</li>
                    <li>Moving Closer to the Self</li>
                    <li>I am Shiva</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                <p className="text-indigo-900 font-medium italic">Jake strongly experientially believes that both these must go hand-in-hand in the life of an evolving seeker.</p>
                <button className="mt-4 font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                  View all Upcoming Webinars &rarr;
                </button>
              </div>
            </section>

            {/* --- Retreats --- */}
            <section className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-indigo-200 rounded-full"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-indigo-950 tracking-tight">Retreats</h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Retreats are organized in highly energetic and divine places for alignment. One witnesses quantum leaps of consciousness. Retreats are power-packed and one returns cleaner, lighter, happier, free, refreshed and rejuvenated. The current two regular locations are Tiruvannamalai (Tamilnadu) and Kanhangad (Kerala).
              </p>

              <div className="space-y-12">
                {/* Tiruvannamalai Retreat */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
                  <div className="bg-indigo-900 text-white p-6">
                    <h3 className="text-2xl font-bold">Tiruvannamalai (Tamilnadu) Retreats</h3>
                  </div>
                  
                  <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                    {/* Level 1 */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-indigo-800 mb-3 border-b pb-2">Routines of Level 1 Retreat</h4>
                        <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600">
                          <li>Meditation at various holy ashrams and Jeeva Samadhis</li>
                          <li>Trekking up the holy Arunachala hill</li>
                          <li>Visiting the caves and Jeeva Samadhis on the hill</li>
                          <li>Giripradakshina, visiting each linga, and Jeeva Samadhis</li>
                          <li>Visit to the fire element Arunachaleshwara Agni Lingam temple</li>
                          <li>Daily informal in-house sessions with practices</li>
                          <li>Meditative Satsangs</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-indigo-900 mb-2">Objective of Level 1</h4>
                        <p className="text-xs font-semibold text-indigo-500 mb-3 uppercase tracking-wider">4 Days Duration</p>
                        <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-700">
                          <li>Learning to live a life of awareness</li>
                          <li>Learning to tap into the consciousness of the hill, Jeeva Samadhis and Avadhutas</li>
                          <li>Language of silence</li>
                          <li>To bring crystal-clear clarity in the seeker’s journey</li>
                          <li>Relaxation and rejuvenation</li>
                          <li>Move deeper into true inner nature of silence</li>
                          <li>Attune to purification of body, mind and koshas</li>
                          <li>Four days of family togetherness</li>
                        </ul>
                      </div>
                    </div>

                    {/* Level 2 */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-indigo-800 mb-3 border-b pb-2">Routines of Level 2 Retreat</h4>
                        <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600">
                          <li>Living in awareness</li>
                          <li>Meditation at Bhagwan Ramana’s Samadhi</li>
                          <li>Meditation in the caves on Arunachala hill</li>
                          <li>Deep Meditative Satsangs</li>
                          <li>Aligning with Dakshinamurthy tatva and language of silence</li>
                          <li>‘Who am I’ practices</li>
                          <li>Contemplation of Avadhutas and their messages</li>
                          <li>Study & reflection of Ramana Tatva</li>
                          <li>Secrets and practices of Shiva Sutras</li>
                          <li>Attune to the grace of Bhairava and Murugan (Skanda)</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-indigo-900 mb-2">Objective of Level 2</h4>
                        <p className="text-xs font-semibold text-indigo-500 mb-3 uppercase tracking-wider">4 Days Duration</p>
                        <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-700">
                          <li>Move deeper into one’s true inner nature of silence</li>
                          <li>Moving from DOING to BEING</li>
                          <li>Moving closer to the Self</li>
                          <li>Build up deep awareness</li>
                          <li>Activate the Inner Guru</li>
                          <li>Go with the flow of divine</li>
                          <li>Being in the world yet not of the world</li>
                          <li>Preparing for level 3 practices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kanhangad Retreat */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
                  <div className="bg-indigo-900 text-white p-6">
                    <h3 className="text-2xl font-bold">Kanhangad (Kerala) Retreats</h3>
                  </div>
                  <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-indigo-800 mb-3 border-b pb-2">Routines of Retreat</h4>
                      <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600">
                        <li>Living in awareness in the Nityananda Ashram</li>
                        <li>Meditation at the 43 caves built by Bhagwan Nityananda</li>
                        <li>Visit, meditation and sessions at Guruvan Hill and caves</li>
                        <li>Bathing in the Papanashini in Guruvan for purification</li>
                        <li>Visit to other ashrams & Samadhis</li>
                        <li>Release & Purging Sessions in this divine place</li>
                        <li>Visit to the beach and meditation on pancha tatva</li>
                        <li className="flex justify-between items-start pr-2">
                          <span>Study & Reflection of Chidakasha Gita</span>
                          <span className="text-[10px] font-semibold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full mt-1 shrink-0">Course</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 h-fit">
                      <h4 className="font-bold text-indigo-900 mb-2">Objective of Retreat</h4>
                      <p className="text-xs font-semibold text-indigo-500 mb-4 uppercase tracking-wider">4 Days Duration</p>
                      <ul className="list-disc list-outside ml-4 space-y-2 text-slate-700">
                        <li>Living in awareness in the Nityananda Ashram</li>
                        <li>Meditation at the 43 caves built by Bhagwan Nityananda</li>
                        <li>Visit, meditation and sessions at Guruvan Hill and caves</li>
                        <li>To release the clutter & purify</li>
                        <li>To attain clarity on the spiritual & worldly path</li>
                        <li>To tune to the grace and blessings of Bhagwan Nityananda</li>
                        <li>To prepare for the journey towards Self-Realisation</li>
                        <li>4 days of family togetherness</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors text-lg">
                    View all Upcoming Retreats &rarr;
                  </button>
                </div>
              </div>
            </section>

            {/* --- Courses --- */}
            <section className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-indigo-200 rounded-full"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-indigo-950 tracking-tight">Courses</h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Life-transformative online webinars and courses that helps one to live in awareness, thus not being caught up by the lives and catches of the mind and the world. These are all powerful webinars which are converted to courses, the LIVE impact of which can be experienced even in recorded courses.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-t-4 border-indigo-500 shadow-md rounded-xl p-6 md:p-8">
                  <h3 className="text-xl font-bold text-indigo-950 mb-2">Practices</h3>
                  <p className="text-sm text-slate-500 mb-6 italic">Learning the practices on this platform</p>
                  <ul className="space-y-3 text-slate-700 font-medium">
                    <li>✨ Shifting Into Awareness <span className="text-slate-400 text-sm font-normal">(Hindi & English)</span></li>
                    <li>✨ Deepening Awareness</li>
                    <li>✨ Purge & Reset Your Life</li>
                    <li>✨ Inner Child Healing</li>
                    <li>✨ Inner Alchemy</li>
                    <li>✨ New Beginnings</li>
                  </ul>
                </div>

                <div className="bg-white border-t-4 border-indigo-500 shadow-md rounded-xl p-6 md:p-8">
                  <h3 className="text-xl font-bold text-indigo-950 mb-2">Scriptures</h3>
                  <p className="text-sm text-slate-500 mb-6 italic">Study, reflection & experiencing higher truths</p>
                  <ul className="space-y-4 text-slate-700">
                    <li>
                      <span className="font-semibold text-indigo-900 block">Avadhuta Gita (Hindi & English)</span>
                      <span className="text-sm text-slate-500">Teachings of Lord Dattatreya – The Guru of all Gurus</span>
                    </li>
                    <li>
                      <span className="font-semibold text-indigo-900 block">Chidakasha Gita (Hindi & English)</span>
                      <span className="text-sm text-slate-500">Bhagwan Nityananda’s teachings</span>
                    </li>
                    <li>
                      <span className="font-semibold text-indigo-900 block">Upadesa Saram (Hindi & English)</span>
                      <span className="text-sm text-slate-500">Bhagwan Ramana’s splendid clarity on seeker’s journey</span>
                    </li>
                    <li>
                      <span className="font-semibold text-indigo-900 block">Yog Vashisht</span>
                      <span className="text-sm text-slate-500">Teachings of Guru Vashisht to Lord Rama</span>
                    </li>
                    <li>
                      <span className="font-semibold text-indigo-900 block">Devikallotara</span>
                      <span className="text-sm text-slate-500">Final teachings of Shiva to Parvati</span>
                    </li>
                    <li>
                      <span className="font-semibold text-indigo-900 block">Sarva Jnanottara</span>
                      <span className="text-sm text-slate-500">Teachings of Shiva to son Kartikeya</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <button className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300">
                  View all available courses
                </button>
              </div>
            </section>

          </div>

          {/* --- Upcoming Events Banner --- */}
          <div className="bg-indigo-900 text-white p-8 md:p-12 text-center border-t-8 border-indigo-500">
            <div className="flex justify-center mb-4">
              <CalendarHeart className="w-12 h-12 text-indigo-300" />
            </div>
            <h3 className="text-3xl font-bold mb-8">Ready to take the next step?</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {["Free Zoom Sessions", "Satsangs", "Webinars", "Retreats", "All Events", "All Activities"].map((btn) => (
                <button key={btn} className="bg-indigo-800 hover:bg-indigo-700 border border-indigo-700 py-2 px-4 rounded-full text-sm font-medium transition-colors">
                  {btn}
                </button>
              ))}
            </div>
          </div>

          {/* --- Standard Footer --- */}
          <footer className="bg-slate-900 text-slate-400 py-12 px-8 text-sm">
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

export default AllActivities;