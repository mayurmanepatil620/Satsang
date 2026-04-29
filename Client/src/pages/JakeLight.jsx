import React from 'react';
import Navbar from '../components/Navbar'; // Adjust this path if Navbar is in a different folder

const JakeLight = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Navbar at the top */}
      <Navbar />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          
          {/* --- Header Section --- */}
          <header className="bg-indigo-950 px-8 py-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-indigo-950 opacity-50"></div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Jake Light
              </h1>
              <div className="flex items-center justify-center gap-2 text-indigo-200 font-medium">
                <span>By: Jake Light</span>
                <span>•</span>
                <span>April 11, 2024</span>
              </div>
            </div>
          </header>

          <div className="p-8 md:p-12 space-y-12">
            
            {/* --- Tagline & Introduction --- */}
            <section className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 italic">
                "It all began with exploration of the inner self!"
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed text-left md:text-center">
                <strong className="text-indigo-950 font-semibold">Jake Light</strong> is an Inner Journey Coach, helping seekers in their inward journey, helping them navigate through life without forgetting their main goal of life. He has been a wanderer, having travelled extensively to multiple remote locations in India, including forests, mountains, caves, Siddha locations and spent decades meditating at Jeeva Samadhis, meeting innumerable saints, mystics and enlightened masters throughout his life.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed text-left md:text-center">
                Firmly surrendered to the natural flow of life, he follows the pathless path – the middle path – and teaches others through his own life experiences. He has a deep insight into all the deep scriptures of every religion and professes the same through practical examples. He believes in living a simple life of meaningful existence, deeply emphasizing always that spirituality is very simple but we complicate it.
              </p>
            </section>

            {/* --- Core Philosophy Callout --- */}
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
              <p className="text-lg text-slate-700 font-medium leading-relaxed">
                His presence is elevating – be it in online events, personal sessions or physical retreats. One can easily shift into deep awareness in his presence, practices and teachings. His prime focus is to help everyone turn within and realize that there is nothing really to do or run behind, for their true liberated nature itself is pure and free.
              </p>
            </div>

            {/* --- Know More Section --- */}
            <section className="space-y-8">
              <h3 className="text-3xl font-bold text-indigo-950 border-b pb-4">Know More about Jake</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Early Life */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-indigo-900">Early Life & Seekings</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Jake was born in a Roman Catholic family and since childhood loved Christ but could not relate with any Orthodox things. Always aloof and in his own world something always told him that there is a larger existence and meaning to life. This whole life was a search and exploration of the same.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <p className="text-sm font-semibold text-slate-700">Languages Spoken:</p>
                    <p className="text-slate-600">English, Hindi, Malayalam, Marathi & Kannada fluently.</p>
                  </div>
                </div>

                {/* Struggles & The Turning Point */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-indigo-900">The Turning Point</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Music and poetry naturally flowed out of him, and his passions were filled with life and creativity. Sufferings were immense in every stage of life, which once, in adulthood went to the extreme of devastating him to the point where alcohol and cigarettes badly gripped him.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Through those moments of despair, some grace shined upon him when accidentally a book fell into his hands that led him to set out for exploring and finding his own truth. He found himself being led to the Mahasamadhi of a great Mystic named Nityananda, in Ganeshpuri, after which his whole life and perspective changed 180 degrees.
                  </p>
                </div>

              </div>
            </section>

            {/* --- The Master & The Name Change --- */}
            <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-6">
              <h4 className="text-2xl font-bold text-indigo-950">The Master & The Path of Light</h4>
              <p className="text-slate-600 leading-relaxed">
                From there (2008) till now ‘That One’ led him to many places, mystics and Masters. One of his closest Masters was Shri. Avadhoot Shivanand, from whom he received initiation into the path of Kundalini and the nondualist practices of Sri Vidya. But above all these practices what he cherished the most always, and even now, is the love and grace of his Master. He had the blessing of living with and serving his master for close to 7 years.
              </p>
              
              <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm mt-4">
                <h5 className="font-bold text-indigo-900 mb-2">The Evolution of a Name</h5>
                <p className="text-slate-600 leading-relaxed">
                  At that time, he was quite popularly known as <strong>Jacob Shivanand</strong>, as he associated his second name to the identity-less name of his Guru. Later, in order to dissolve another identity created with the name, he dissolved these identities by preferring to use the name <strong>‘Jake Light’</strong> (Jake being the short-form of Jacob and Light symbolizing the child of Light).
                </p>
              </div>
            </section>

            {/* --- Awakenings & Present Purpose --- */}
            <section className="space-y-6">
              <p className="text-slate-600 leading-relaxed">
                He prefers walking the path alone without any identities and hence prefers not to use anything that identifies with anyone or anything. The love of grace of his Master has been profound, due to which he was able to spread the divine love and light to those who eagerly sought for it.
              </p>
              
              <div className="bg-indigo-900 text-white p-6 rounded-xl shadow-inner my-6">
                <p className="font-medium text-indigo-100 text-center">
                  Insight into his life can be found in a video podcast where <span className="text-white font-bold">Sukhdev Virdee</span> interviewed him.
                </p>
              </div>

              <h4 className="text-2xl font-bold text-indigo-950 mt-8 mb-4">Awakenings & Practical Truth</h4>
              <p className="text-slate-600 leading-relaxed">
                He was also blessed to have the physical presence and blessings of 11 Avadhuts in his lifetime. This whole life revolved only around the great mystics and their hardcore practical teachings. At a certain point of time, deep wisdom began flowing out of him which eventually he realized were all coming from the truths encoded in the scriptures across all religions.
              </p>
              <p className="text-slate-600 leading-relaxed">
                He had multiple enlightening awakenings in Arunachala, Tiruvannamalai after which he spontaneously began sharing the wisdom with those seekers who longed for nothing other than the truth.
              </p>
              
              <div className="border-t border-slate-200 pt-8 mt-8 text-center space-y-4">
                <p className="text-lg text-indigo-900 font-semibold">
                  He is grounded to his living experience as a human and likes to live life very practically without adorning any garb or titles in spirituality.
                </p>
                <p className="text-slate-600">
                  He uses this website as the platform to reach out to those who are seeking illumination, ultimate peace and freedom from the pangs of birth & death cycle.
                </p>
              </div>
            </section>

          </div>

          {/* --- Footer Area --- */}
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

export default JakeLight;