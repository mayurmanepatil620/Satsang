import React from 'react';
import { UserPlus, MessageCircle, MapPin, AlertCircle, Share2, Send, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar'; // Adjust path if necessary

const countries = [
  "Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua And Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic Of The", "Cook Islands", "Costa Rica", "Cote D'Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "England", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard And Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic Of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic Of", "Korea, Republic Of", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States Of", "Moldova, Republic Of", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Macedonia", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of Kosovo", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Martin", "Saint Barthelemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts And Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent And The Grenadines", "Samoa", "San Marino", "Sao Tome And Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard And Jan Mayen Islands", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic Of", "Thailand", "Timor-Leste", "Timor-Leste (East Timor)", "Togo", "Tokelau", "Tonga", "Trinidad And Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks And Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis And Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"
];

const Join = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          
          {/* --- Header Section --- */}
          <header className="bg-indigo-950 px-8 py-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-indigo-950 opacity-50"></div>
            <div className="relative z-10 space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Join the SiA Family
              </h1>
              <div className="flex items-center justify-center gap-2 text-indigo-200 font-medium">
                <span>By: Jake Light</span>
                <span>•</span>
                <span>November 8, 2023</span>
              </div>
              <p className="max-w-2xl mx-auto mt-4 text-indigo-100 leading-relaxed">
                You may use this form to join the regular Zoom sessions. Please note that this platform is not a casual platform but a serious platform where spiritual evolution is at the utmost priority.
              </p>
            </div>
          </header>

          <div className="p-8 md:p-12 space-y-12">
            
            {/* --- Information Sections --- */}
            <div className="space-y-10">
              
              {/* Becoming a member */}
              <section className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <UserPlus className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-950 mb-3">Becoming a part of the SiA Family</h3>
                  <p className="text-slate-600 mb-3">
                    <strong className="text-indigo-900">YOU BECOME A MEMBER OF SiA</strong> as soon as you attend any webinar or course of SiA.
                  </p>
                  <p className="text-slate-600">
                    In case, you have not done any, then it is mandatory to do the basic course of SiA, in order to become a member. Courses are available on – <a href="https://shiftingintoawareness.com/courses" className="text-indigo-600 hover:underline break-all">shiftingintoawareness.com/courses</a>
                  </p>
                </div>
              </section>

              {/* Free Daily Satsangs */}
              <section className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-indigo-950 mb-4 border-b border-indigo-100 pb-2">Free Daily Satsangs and Sessions for Members</h3>
                <p className="text-slate-600 mb-4">
                  There is a monthly membership fee, which gives access to unlimited webinars and daily sessions for the entire month.
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span>Free satsangs include daily powerful sessions, clarity sessions, teachings from higher scriptures, deep contemplative sessions, meditative sessions, followup sessions for webinars and practice sessions.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span>There are regular LiVE CLARITY SESSIONS where you may directly ask questions on Zoom or via private message. When clarity given to private message questions, confidentiality of the sender is maintained.</span>
                  </li>
                </ul>
              </section>

              {/* Internal Communication & Retreats Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="w-6 h-6 text-indigo-600" />
                    <h3 className="text-xl font-bold text-indigo-950">Internal Communication</h3>
                  </div>
                  <p className="text-slate-600 mb-3 text-sm leading-relaxed">
                    We are using Arratai App for our messaging services. So it is mandatory that you install this App. We will not add your number to any open groups so as to protect your privacy. All messages and updates will reach you via direct message (using Broadcast messages).
                  </p>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    Arratai messaging is now safe and secure with end-to-end encryption.
                  </p>
                  <div className="space-y-2">
                    <a href="https://chat.arattai.in/app/download" target="_blank" rel="noreferrer" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors break-all bg-indigo-50 p-2 rounded border border-indigo-100 text-center">
                      Download Arratai App
                    </a>
                    <a href="https://whatsapp.com/channel/0029Va4zV169sBI8pxgZOQ3H" target="_blank" rel="noreferrer" className="block text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors break-all bg-emerald-50 p-2 rounded border border-emerald-100 text-center">
                      Join WhatsApp Channel
                    </a>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                    <h3 className="text-xl font-bold text-indigo-950">Retreats</h3>
                  </div>
                  <p className="text-slate-600 mb-3 text-sm leading-relaxed">
                    Only members are entitled for retreats but subject to approval.
                  </p>
                  <p className="text-slate-600 mb-3 text-sm leading-relaxed">
                    Retreats are deep ranging from 4 days to 9 days in different locations like Tiruvannamalai, Kanhagad, Ganeshpuri, Delhi, Uttarkashi, Gorakhpur, etc depending on various conditions. Main retreats of the final practice of SiA are conducted twice to thrice a year in Tiruvannamalai at the foothills of Arunachala.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Any new member wishing to attend must have attended any webinar in the past 6 months from the date of the retreat and must have their application approved.
                  </p>
                </section>
              </div>

              {/* Things Worth Mentioning */}
              <section className="bg-red-50 border border-red-100 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-red-950">Some Things Worth Mentioning</h3>
                </div>
                <ul className="space-y-3 text-red-900/80 text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-1">•</span> Here there is no path and hence nothing fanatical to any guru, path, philosophy, religion.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-1">•</span> Time disciplines are strict.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-1">•</span> Zero-tolerance to malpractices or actions based on impure intentions.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-1">•</span> No discriminations here other than discrimination between the serious seekers and casual seekers. Serious seekers are always on priority.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-1">•</span> This platform at all times keeps its highest goal of nothing less than self-realisation in all webinars, retreats and free sessions.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-1">•</span> Since the path is leading to nothingness, there can be crude demolition of your beliefs, concepts and conditionining, which may not be comfortable, but nevertheless it will continue. If it may not get comfortable, you are free to discontinue from attending.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-1">•</span> We respect all teachers and paths, but strongly encourage following only one path.</li>
                </ul>
              </section>

              {/* Other Platforms */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Share2 className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-indigo-950">Our Other Platforms</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="https://facebook.com/ShiftingIntoAwareness" className="text-sm bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors">Facebook SiA</a>
                  <a href="https://facebook.com/MeJakeLight" className="text-sm bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors">Facebook (Jake Light)</a>
                  <a href="https://YouTube.com/ShiftingIntoAwareness" className="text-sm bg-red-50 text-red-700 px-4 py-2 rounded-full font-medium hover:bg-red-100 transition-colors">YouTube</a>
                  <a href="https://Instagram.com/ShiftingIntoAwareness" className="text-sm bg-pink-50 text-pink-700 px-4 py-2 rounded-full font-medium hover:bg-pink-100 transition-colors">Instagram</a>
                </div>
              </section>
            </div>

            <hr className="border-slate-200" />

            {/* --- Application Form --- */}
            <div className="bg-white" id="join-form">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-indigo-950">WhatsApp Opt In - New</h2>
                <p className="text-slate-500 mt-2 text-sm italic">
                  Fields marked with an <span className="text-red-500 font-bold">*</span> are required
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" required placeholder="Your full name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50" />
                  </div>

                  {/* Age */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      Age <span className="text-red-500">*</span>
                    </label>
                    <input type="number" required placeholder="Your age" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50" />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input type="email" required placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50" />
                  </div>

                  {/* WhatsApp Number */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" required placeholder="+1 234 567 8900" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50" />
                    <p className="text-xs text-slate-500 mt-1">Your number is kept confidential and never added to any groups. Please type your number along with country code.</p>
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input type="text" required placeholder="City name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50" />
                  </div>

                  {/* State */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input type="text" required placeholder="State / Province" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50" />
                  </div>

                  {/* Country */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50 text-slate-700 appearance-none cursor-pointer">
                      <option value="" disabled selected>- Select Country -</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* How did you reach here */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      How did you reach here? <span className="text-red-500">*</span>
                    </label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50 text-slate-700 appearance-none cursor-pointer">
                      <option value="" disabled selected>- Select Option -</option>
                      <option value="Friend">A friend recommended</option>
                      <option value="Member">A member of SiA recommended</option>
                      <option value="YouTube">Through YouTube Channel</option>
                      <option value="Facebook">Through Facebook</option>
                      <option value="Instagram">Through Instagram</option>
                      <option value="SearchEngine">Through search engine</option>
                      <option value="Advertisement">Through an advertisement</option>
                      <option value="Event">Through an Event</option>
                    </select>
                  </div>
                </div>

                {/* Spiritual Practice */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    What is your current spiritual practice? <span className="text-red-500">*</span>
                  </label>
                  <textarea required rows="3" placeholder="Describe your current path or practices..." className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50 resize-y"></textarea>
                </div>

                {/* Agreement Block */}
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 space-y-4">
                  <label className="block text-sm font-bold text-indigo-950">
                    Agreement <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-indigo-900 leading-relaxed bg-white p-4 rounded-lg border border-indigo-100">
                    I understand that to become a member I would need to do the basic course, only after which I would become eligible to attend the daily satsangs, meditations, practices and clarity sessions. Also I understand that from May 2026 there would be a monthly membership fee, which would give me access to unlimited webinars, followup sessions, scriptural teachings, and practices for the entire month.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="agreement" value="agree" required className="w-5 h-5 text-indigo-600 focus:ring-indigo-500 border-slate-300" />
                      <span className="text-slate-800 font-medium group-hover:text-indigo-700 transition-colors">I agree</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="agreement" value="not ready" required className="w-5 h-5 text-indigo-600 focus:ring-indigo-500 border-slate-300" />
                      <span className="text-slate-800 font-medium group-hover:text-indigo-700 transition-colors">I am not ready yet</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea rows="4" placeholder="Any additional message? (Optional)" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50 resize-y"></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button type="submit" className="w-full md:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                    <Send className="w-5 h-5" />
                    Submit Application
                  </button>
                  <p className="text-xs text-red-500 mt-3 hidden">Please correct errors before submitting this form.</p>
                </div>

              </form>
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

export default Join;