import { useState, useEffect, useRef } from "react";
import { ArrowRight, CalendarDays, GraduationCap, PlayCircle, Sparkles, ChevronDown, ShoppingCart, UserRound, Menu, X, Search } from "lucide-react";
import { motion } from "framer-motion"; 
import { Link, useLocation } from "react-router-dom"; 

// Assets
import logo from "@/assets/satsung-logo.jpg";
import founder from "@/assets/founder-main.jpg";

// UI Components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Data Arrays
const navbarMenus = {
  sia: [
    { label: "All About SiA", href: "/about-sia" },
    { label: "Jake Light", href: "/jake-light" },
    { label: "All Activities", href: "/all-activities" },
    { label: "Join", href: "/join" },
  ],
  events: [
    { label: "Free Satsangs", href: "/satsangs" },
    { label: "Webinars", href: "/webinars" },
    { label: "Retreats", href: "/retreats" },
    { label: "All Events", href: "/all-events" },
  ],
  courses: [
    { label: "SiA Practices", href: "#courses" },
    { label: "Scriptures", href: "#courses" },
  ],
  social: [
    { label: "YouTube", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],
};

const events = [
  { 
    title: "Monthly Satsung Circle", 
    date: "May 12, 2026", 
    place: "Online Live", 
    tag: "Live",
    price: "Free",
    image: "https://www.shutterstock.com/image-photo/satsang-260nw-2629055437.jpg"
  },
  { 
    title: "Silent Awareness Day", 
    date: "May 20, 2026", 
    place: "Hybrid", 
    tag: "Featured",
    price: "₹1,500",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Inner Clarity Retreat", 
    date: "June 02, 2026", 
    place: "Bangalore", 
    tag: "In Person",
    price: "₹5,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57QSeL3QNu9u7htRBv48FFnumKJEs8FL97ZQE2QLk8w&s&ec=121643139"
  },
];

const courses = [
  { title: "Awareness Foundations", plan: "4 weeks", price: "₹4,900" },
  { title: "Satsung Deepening", plan: "8 weeks", price: "₹9,900" },
  { title: "Teacher Immersion", plan: "12 weeks", price: "₹18,500" },
];

const tickerItems = [
  { text: "not a state that can be attained", image: null },
  { text: "OUR BELOVED ASCENDED LIGHT MASTERS", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=200" }, 
  { text: "A walk through Nityananda Ashram in...", image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80&w=200" }, 
];

const logoStripItems = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  name: "Satsung",
}));

// Elegant Framer Motion Animations
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const slowSpin = {
  animate: { rotate: 360, transition: { duration: 60, repeat: Infinity, ease: "linear" } },
};

const float = {
  animate: { y: [0, -15, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } },
};


// 🟢 FULLY RESPONSIVE NAVBAR COMPONENT
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);
  const cartItemCount = 0; 
  
  const [openMenus, setOpenMenus] = useState({
    sia: false,
    events: false,
    courses: false,
    social: false,
  });

  // Handle Sticky Header styling
  useEffect(() => {
    // Check initial position on load/refresh
    setScrolled(window.scrollY > 20);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Automatically close menus if the user scrolls down the page
      if (window.scrollY > 50) {
        setOpenMenus({ sia: false, events: false, courses: false, social: false });
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Auto-Close Menus when changing pages
  useEffect(() => {
    setOpenMenus({ sia: false, events: false, courses: false, social: false });
    setMobileMenuOpen(false); // also close mobile drawer on route change
  }, [location.pathname]);

  // Flawless Hover Logic
  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenus({ sia: false, events: false, courses: false, social: false, [menu]: true });
  };

  const handleMouseLeave = (menu) => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenus((prev) => ({ ...prev, [menu]: false }));
    }, 200); 
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-500 border-b flex flex-col ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md border-slate-200/50 shadow-sm" 
            : "bg-[#FAF8F3] border-transparent"
        }`}
      >
        {/* TOP UTILITY NAVIGATION BAR (Scrollable and fixed for tiny mobile screens) */}
        <div className="w-full overflow-x-auto hide-scrollbar border-b border-slate-200/50 lg:border-none">
          <div className="container px-4 flex justify-start sm:justify-end items-center gap-3 pt-2 pb-1 text-[11px] sm:text-[13px] text-[#2a75d3] tracking-wide font-medium whitespace-nowrap">
            <Link to="/account" className="hover:text-blue-900 transition-colors">MY ACCOUNT</Link>
            <span className="text-gray-300 font-light">/</span>
            <Link to="/my-courses" className="hover:text-blue-900 transition-colors">MY COURSES</Link>
            <span className="text-gray-300 font-light">/</span>
            <Link to="/cart" className="hover:text-blue-900 transition-colors">CART</Link>
            <span className="text-gray-300 font-light">/</span>
            <Link to="/donate" className="hover:text-blue-900 transition-colors">DONATE</Link>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div className={`container flex items-center justify-between transition-all duration-500 ${scrolled ? "py-2" : "py-3"}`}>
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group outline-none z-50">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white shrink-0 shadow-sm border border-gray-100">
              <img src={logo} alt="Satsung awareness logo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="eager" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[18px] sm:text-[22px] font-serif font-bold text-[#1C0F2E] leading-none tracking-wide">Satsung</span>
              <span className="text-[8px] sm:text-[9px] font-bold text-[#B89B5E] tracking-[0.1em] sm:tracking-[0.15em] mt-1">SHIFTING INTO AWARENESS</span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden items-center gap-2 lg:flex">
            <Link className="rounded-full px-4 py-2 text-xs font-bold tracking-widest uppercase text-[#2D1A4A] transition-colors hover:bg-[#2D1A4A]/5 outline-none" to="/">
              Home
            </Link>

            {/* SIA MENU */}
            <DropdownMenu open={openMenus.sia} modal={false}>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="h-auto rounded-full px-4 py-2 text-xs font-bold tracking-widest uppercase text-[#2D1A4A] hover:bg-[#2D1A4A]/5 hover:text-[#B89B5E] focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-none shadow-none" 
                  onMouseEnter={() => handleMouseEnter('sia')}
                  onMouseLeave={() => handleMouseLeave('sia')}
                >
                  SIA <ChevronDown className="h-3 w-3 ml-1 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-56 rounded-2xl p-2 border-[#2D1A4A]/10 shadow-xl bg-white/95 backdrop-blur-xl" 
                onMouseEnter={() => handleMouseEnter('sia')}
                onMouseLeave={() => handleMouseLeave('sia')}
              >
                {navbarMenus.sia.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className="rounded-xl cursor-pointer hover:bg-[#FAF8F3] focus:bg-[#FAF8F3]">
                    {item.href.startsWith("/") ? (
                      <Link to={item.href} className="text-sm font-medium text-[#2D1A4A] py-2">{item.label}</Link>
                    ) : (
                      <a href={item.href} className="text-sm font-medium text-[#2D1A4A] py-2">{item.label}</a>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* EVENTS MENU */}
            <DropdownMenu open={openMenus.events} modal={false}>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="h-auto rounded-full px-4 py-2 text-xs font-bold tracking-widest uppercase text-[#2D1A4A] hover:bg-[#2D1A4A]/5 hover:text-[#B89B5E] focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-none shadow-none" 
                  onMouseEnter={() => handleMouseEnter('events')}
                  onMouseLeave={() => handleMouseLeave('events')}
                >
                  EVENTS <ChevronDown className="h-3 w-3 ml-1 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-56 rounded-2xl p-2 border-[#2D1A4A]/10 shadow-xl bg-white/95 backdrop-blur-xl" 
                onMouseEnter={() => handleMouseEnter('events')}
                onMouseLeave={() => handleMouseLeave('events')}
              >
                {navbarMenus.events.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className="rounded-xl cursor-pointer hover:bg-[#FAF8F3] focus:bg-[#FAF8F3]">
                    {item.href.startsWith("/") ? <Link to={item.href} className="text-sm font-medium text-[#2D1A4A] py-2">{item.label}</Link> : <a href={item.href} className="text-sm font-medium text-[#2D1A4A] py-2">{item.label}</a>}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* COURSES MENU */}
            <DropdownMenu open={openMenus.courses} modal={false}>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="h-auto rounded-full px-4 py-2 text-xs font-bold tracking-widest uppercase text-[#2D1A4A] hover:bg-[#2D1A4A]/5 hover:text-[#B89B5E] focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-none shadow-none" 
                  onMouseEnter={() => handleMouseEnter('courses')}
                  onMouseLeave={() => handleMouseLeave('courses')}
                >
                  COURSES <ChevronDown className="h-3 w-3 ml-1 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-56 rounded-2xl p-2 border-[#2D1A4A]/10 shadow-xl bg-white/95 backdrop-blur-xl" 
                onMouseEnter={() => handleMouseEnter('courses')}
                onMouseLeave={() => handleMouseLeave('courses')}
              >
                {navbarMenus.courses.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className="rounded-xl cursor-pointer hover:bg-[#FAF8F3] focus:bg-[#FAF8F3]">
                    {item.href.startsWith("/") ? <Link to={item.href} className="text-sm font-medium text-[#2D1A4A] py-2">{item.label}</Link> : <a href={item.href} className="text-sm font-medium text-[#2D1A4A] py-2">{item.label}</a>}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* SOCIAL MENU */}
            <DropdownMenu open={openMenus.social} modal={false}>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="h-auto rounded-full px-4 py-2 text-xs font-bold tracking-widest uppercase text-[#2D1A4A] hover:bg-[#2D1A4A]/5 hover:text-[#B89B5E] focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-none shadow-none" 
                  onMouseEnter={() => handleMouseEnter('social')}
                  onMouseLeave={() => handleMouseLeave('social')}
                >
                  SOCIAL <ChevronDown className="h-3 w-3 ml-1 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-48 rounded-2xl p-2 border-[#2D1A4A]/10 shadow-xl bg-white/95 backdrop-blur-xl" 
                onMouseEnter={() => handleMouseEnter('social')}
                onMouseLeave={() => handleMouseLeave('social')}
              >
                {navbarMenus.social.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className="rounded-xl cursor-pointer hover:bg-[#FAF8F3] focus:bg-[#FAF8F3]">
                    {item.href.startsWith("/") ? <Link to={item.href} className="text-sm font-medium text-[#2D1A4A] py-2">{item.label}</Link> : <a href={item.href} className="text-sm font-medium text-[#2D1A4A] py-2">{item.label}</a>}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a className="rounded-full px-4 py-2 text-xs font-bold tracking-widest uppercase text-[#2D1A4A] transition-colors hover:bg-[#2D1A4A]/5 outline-none" href="#blogs">MY BLOGS</a>
            
            <Link className="rounded-full px-4 py-2 text-xs font-bold tracking-widest uppercase text-[#2D1A4A] transition-colors hover:bg-[#2D1A4A]/5 outline-none" to="/contact-us">
              CONTACT US
            </Link>
          </nav>

          {/* DESKTOP ACTION BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/my-courses" className="flex items-center justify-center h-10 px-4 bg-[#333333] hover:bg-[#222222] text-white text-sm font-medium rounded-md transition-colors">
              My Courses
            </Link>
            <Link to="/cart" className="flex items-center justify-center h-10 px-4 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-md transition-colors gap-2">
              <ShoppingCart className="h-5 w-5" fill="currentColor" />
              <span className="bg-white text-[#007BFF] rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold shadow-sm">{cartItemCount}</span>
            </Link>
            <Button className="rounded-full bg-[#2D1A4A] hover:bg-[#1C0F2E] text-white px-6 shadow-md transition-transform hover:scale-105 focus-visible:ring-0 focus:outline-none" asChild>
              <Link to="/login"><UserRound className="h-4 w-4 mr-2" /> Login</Link>
            </Button>
          </div>

          {/* MOBILE RIGHT CORNER (Cart + Hamburger Icon) */}
          <div className="flex lg:hidden items-center gap-4">
            <Link to="/cart" className="relative flex items-center justify-center text-[#2D1A4A]">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-[#007BFF] text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px] font-bold shadow-sm">
                {cartItemCount}
              </span>
            </Link>
            
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="text-[#2D1A4A] p-1 focus:outline-none"
              aria-label="Open Mobile Menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>

        </div>
      </header>

      {/* 🟢 MOBILE DRAWER MENU (Overlays the screen cleanly on mobile) */}
      <div className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setMobileMenuOpen(false)} />
      
      <div className={`fixed top-0 right-0 h-full w-[85vw] max-w-[400px] bg-white z-[101] shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="text-xl font-serif font-bold text-[#2D1A4A]">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            <X className="h-5 w-5 text-[#2D1A4A]" />
          </button>
        </div>

        {/* Drawer Scrollable Links */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 hide-scrollbar">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-[#1C0F2E] uppercase tracking-wide border-b border-gray-100 pb-3">Home</Link>
          
          {/* Mobile Accordions */}
          {Object.entries(navbarMenus).map(([key, items]) => (
            <details key={key} className="group">
              <summary className="flex justify-between items-center text-lg font-bold text-[#1C0F2E] uppercase tracking-wide border-b border-gray-100 pb-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                {key} <ChevronDown className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="flex flex-col gap-3 pt-4 pl-4 border-l-2 border-[#B89B5E]/30 ml-2 mt-2">
                {items.map(item => (
                  <Link 
                    key={item.label} 
                    to={item.href} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="text-[15px] font-medium text-gray-600 hover:text-[#B89B5E]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          ))}

          <a href="#blogs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-[#1C0F2E] uppercase tracking-wide border-b border-gray-100 pb-3">My Blogs</a>
          <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-[#1C0F2E] uppercase tracking-wide border-b border-gray-100 pb-3">Contact Us</Link>

          {/* Mobile Action Buttons */}
          <div className="mt-4 flex flex-col gap-3 pb-8">
            <Button className="w-full bg-[#333333] hover:bg-[#222222] text-white h-12 text-sm font-medium" asChild onClick={() => setMobileMenuOpen(false)}>
              <Link to="/my-courses">My Courses</Link>
            </Button>
            <Button className="w-full bg-[#2D1A4A] hover:bg-[#1C0F2E] text-white h-12 text-sm font-medium" asChild onClick={() => setMobileMenuOpen(false)}>
              <Link to="/login"><UserRound className="h-4 w-4 mr-2" /> Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};


// 🟢 MAIN PAGE COMPONENT
const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState("Awareness Foundations");
  const [selectedEvent, setSelectedEvent] = useState("");

  // Theme Colors
  const theme = {
    bg: "bg-[#FAF8F3]", 
    textDark: "text-[#2D1A4A]", 
    accent: "text-[#B89B5E]", 
    borderAccent: "border-[#B89B5E]",
    btnSolid: "bg-[#2D1A4A] hover:bg-[#1C0F2E] text-white",
    btnOutline: "border-[#2D1A4A] text-[#2D1A4A] hover:bg-[#2D1A4A]/5",
  };

  return (
    <main className={`relative min-h-screen ${theme.bg} font-sans selection:bg-[#B89B5E]/30 overflow-x-hidden`}>
      
      {/* Utility Styles */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* 🟢 Fully Built Responsive Navbar */}
      <Navbar />

      {/* 🟢 HERO SECTION (Added pt-[120px] to prevent overlapping with fixed navbar) */}
      <section
  id="home"
  className="relative min-h-[85vh] flex items-center justify-center pt-[140px] pb-20 overflow-hidden"
>

  {/* Background Geometry */}
  <motion.div
    variants={slowSpin}
    animate="animate"
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none opacity-10"
  >
    <div className="absolute inset-0 border-[0.5px] border-[#2D1A4A] rounded-full" />
    <div className="absolute inset-10 border-[0.5px] border-[#2D1A4A] rounded-full" />
    <div className="absolute top-0 bottom-0 left-1/2 w-[0.5px] bg-[#2D1A4A]/30 -translate-x-1/2" />
    <div className="absolute left-0 right-0 top-1/2 h-[0.5px] bg-[#2D1A4A]/30 -translate-y-1/2" />
  </motion.div>

  {/* CONTENT */}
  <div className="container relative z-10 flex justify-center">
    
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center text-center space-y-8 max-w-4xl"
    >

      {/* Top Label */}
      <motion.p
        variants={fadeUp}
        className="text-[#B89B5E] text-xs tracking-[0.25em] uppercase font-semibold"
      >
        Welcome to the Pathless Path
      </motion.p>

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        className="font-serif font-bold text-[#2D1A4A] leading-[1.05] tracking-tight"
      >
        <span className="block italic font-medium text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem]">
          Awakening
        </span>
        <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          the Light Within
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl"
      >
        Jake Light • Spiritual Guide • The Pathless Path. A sanctuary for sincere seekers — satsangs, scriptures, and the inner science of awakening.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row gap-6 pt-4 justify-center"
      >
        <Button
          size="lg"
          className="rounded-full h-14 px-10 text-xs font-bold tracking-widest uppercase shadow-xl transition-all hover:scale-105 bg-[#2D1A4A] text-white"
          asChild
        >
          <a href="#courses">
            Explore the Journey
            <ArrowRight className="ml-3 h-4 w-4" />
          </a>
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="rounded-full h-14 px-10 text-xs font-bold tracking-widest uppercase border-[#2D1A4A] text-[#2D1A4A] hover:bg-[#2D1A4A]/5"
          asChild
        >
          <a href="#events">
            <PlayCircle className="mr-3 h-4 w-4" />
            Watch Free Satsang
          </a>
        </Button>
      </motion.div>

      {/* Scroll */}
      <motion.div
        variants={fadeUp}
        className="pt-10 flex flex-col items-center opacity-60"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold text-[#2D1A4A] mb-2">
        
        </span>
    
      </motion.div>

    </motion.div>
  </div>
</section>

      {/* 🟢 "ABOUT THE GUIDE" SECTION WITH STORY */}
      <section id="about" className="py-24 bg-white relative z-20">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative order-2 lg:order-1"
          >
            <div className={`aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-[2.5rem] border-[1px] p-3 shadow-xl ${theme.borderAccent}`}>
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-slate-100">
                <img 
                  src={founder} 
                  alt="Jake Light" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  loading="lazy" 
                />
              </div>
            </div>
            
            {/* Decorative block */}
            <div className={`absolute -bottom-6 -left-6 md:-left-10 w-48 h-48 rounded-full border border-dashed -z-10 animate-spin-slow ${theme.borderAccent}`}></div>
          </motion.div>

          {/* Text Side (The Story) */}
          <motion.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <p className={`${theme.accent} text-xs font-bold tracking-[0.2em] uppercase mb-3`}>Meet the Guide</p>
              <h2 className={`text-4xl md:text-5xl font-serif font-bold ${theme.textDark} leading-tight`}>
                Jake Light
              </h2>
            </div>
            
            <div className="space-y-5 text-lg text-slate-600 font-light leading-relaxed">
              <p className="font-medium text-indigo-900 italic text-xl border-l-4 border-[#B89B5E] pl-4">
                "It all began with exploration of the inner self."
              </p>
              <p>
                Jake Light is an Inner Journey Coach, helping seekers navigate through life without forgetting their ultimate goal. From early struggles and profound moments of despair to an awakening at the Mahasamadhi of Bhagwan Nityananda, Jake's life has been an intense exploration of truth.
              </p>
              <p>
                Having spent decades meditating at Jeeva Samadhis and serving enlightened masters like Shri Avadhoot Shivanand, he now follows the pathless path. He believes spirituality is simple, though we often complicate it. 
              </p>
              <p>
                His prime focus is to help everyone turn within and realize that there is nothing to do or run behind, for their true liberated nature is already pure and free.
              </p>
            </div>

            <div className="pt-4">
              <Button asChild className={`rounded-full h-14 px-8 text-xs font-bold tracking-widest uppercase shadow-lg transition-all hover:scale-105 ${theme.btnSolid}`}>
                <Link to="/jake-light">
                  Read Full Story <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🟢 HIGHLIGHTED TEACHINGS / YOUTUBE VIDEOS */}
      <section className={`py-20 ${theme.bg} relative z-20`}>
        <div className="container space-y-12">
          <div className="text-center">
            <p className={`${theme.accent} text-xs font-bold tracking-[0.2em] uppercase mb-2`}>Teachings</p>
            <h2 className={`text-4xl font-serif font-bold ${theme.textDark}`}>Recent Satsangs</h2>
          </div>
          
          <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Video 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-2 rounded-[2rem] border border-slate-200 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-[1.5rem] bg-slate-900 aspect-video w-full">
                <iframe
                  className="h-full w-full opacity-95 hover:opacity-100 transition-opacity duration-300"
                  src="https://www.youtube.com/embed/KYN9QSXCnbc"
                  title="Satsang Video 1"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
            
            {/* Video 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-2 rounded-[2rem] border border-slate-200 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-[1.5rem] bg-slate-900 aspect-video w-full">
                <iframe
                  className="h-full w-full opacity-95 hover:opacity-100 transition-opacity duration-300"
                  src="https://www.youtube.com/embed/a5KKcjgrY9M"
                  title="Satsang Video 2"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
          
          <div className="text-center pt-6">
            <Button variant="outline" className={`rounded-full h-12 px-8 text-xs font-bold tracking-widest uppercase bg-transparent ${theme.btnOutline}`} asChild>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <PlayCircle className="mr-3 h-4 w-4" /> View All on YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 🟢 BLOG TICKER MARQUEE */}
      <section className="bg-white border-y border-slate-200 flex items-center h-20 md:h-24 relative z-30">
        <div className="bg-[#E5E5E5] h-full flex items-center justify-center px-8 md:px-12 z-10 shrink-0 font-sans font-medium text-lg text-slate-700 shadow-[2px_0_10px_rgba(0,0,0,0.05)]">
          Blogs
        </div>
        
        <div className="flex-1 overflow-hidden h-full flex items-center relative">
          <div className="flex w-max animate-logo-marquee-ltr items-center gap-12 pl-12 hover:[animation-play-state:paused]">
            {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
              <Link to="#blogs" key={index} className="flex items-center gap-5 hover:text-[#B89B5E] transition-colors group">
                {item.image && (
                  <img 
                    src={item.image} 
                    alt="Blog thumbnail" 
                    className="h-12 md:h-14 w-20 md:w-24 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                )}
                <span className="text-sm md:text-base text-slate-800 whitespace-nowrap">{item.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* 🟢 UPCOMING EVENTS SECTION */}
      <section id="events" className={`py-24 relative z-20 ${theme.bg} border-t border-slate-200/50`}>
        <div className="container space-y-12">
          
          <div className="flex flex-col items-center justify-center text-center gap-4 mb-8">
            <div>
              <p className={`${theme.accent} text-xs font-bold tracking-[0.2em] uppercase mb-2`}>Gatherings</p>
              <h2 className={`text-4xl font-serif font-bold ${theme.textDark}`}>Upcoming Events</h2>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {events.map((event) => (
              <Card key={event.title} className="flex flex-col border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-3xl group overflow-hidden">
                
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-[#2D1A4A] hover:bg-white font-semibold px-3 py-1 rounded-full shadow-sm">
                      {event.tag}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pt-6 pb-2">
                  <div className="flex items-center text-slate-500 text-sm mb-3 font-medium gap-2">
                    <CalendarDays className={`h-4 w-4 ${theme.accent}`} />
                    <span>{event.date}</span>
                  </div>
                  <CardTitle className={`text-2xl font-serif ${theme.textDark}`}>{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-2 font-medium">
                    <span className={`w-1.5 h-1.5 rounded-full bg-[#B89B5E]`}></span> {event.place}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow pt-2">
                  <p className={`text-2xl font-bold ${theme.textDark}`}>{event.price}</p>
                </CardContent>

                <CardFooter className="border-t border-slate-100 pt-6 pb-8">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className={`w-full h-12 rounded-full text-sm font-bold tracking-widest uppercase transition-all shadow-md group-hover:scale-105 ${theme.btnSolid}`} onClick={() => setSelectedEvent(event.title)}>
                        Register Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] rounded-2xl w-[90vw] mx-auto">
                      <DialogHeader>
                        <DialogTitle className={`font-serif text-2xl ${theme.textDark}`}>Event Registration</DialogTitle>
                        <DialogDescription>{selectedEvent} • Secure Registration Placeholder</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="event-name">Full name</Label>
                          <Input id="event-name" placeholder="Enter your name" className="bg-slate-50 rounded-lg h-12" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="event-email">Email</Label>
                          <Input id="event-email" type="email" placeholder="name@email.com" className="bg-slate-50 rounded-lg h-12" />
                        </div>
                      </div>
                      <DialogFooter className="flex-col gap-3 sm:flex-row sm:justify-between">
                        <Button variant="outline" className={`w-full sm:w-auto rounded-full h-12 ${theme.btnOutline}`}>Cancel</Button>
                        <Button className={`w-full sm:w-auto rounded-full h-12 ${theme.btnSolid}`}>Confirm Registration</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 🟢 MARQUEE LOGO STRIP */}
      <section aria-label="Satsung logo slider" className={`border-y border-slate-200/50 py-10 bg-white`}>
        <div className="overflow-hidden">
          <div className="flex w-max animate-logo-marquee-ltr gap-12 pr-12 hover:[animation-play-state:paused] opacity-60">
            {[...logoStripItems, ...logoStripItems].map((item, index) => (
              <div key={`${item.id}-${index}`} className={`flex items-center justify-center gap-4 ${theme.textDark}`}>
                <img src={logo} alt="Satsung logo" className="h-8 w-8 rounded-full object-cover grayscale mix-blend-multiply" loading="lazy" />
                <span className="text-xl font-serif font-semibold tracking-wide uppercase">{item.name}</span>
                <span className={`text-xl ${theme.accent}`}>✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟢 COURSES SECTION */}
      <section id="courses" className={`container py-24 ${theme.bg}`}>
        <div className="mb-16 text-center max-w-2xl mx-auto space-y-4">
          <GraduationCap className={`h-10 w-10 mx-auto ${theme.accent} mb-4`} />
          <h2 className={`text-4xl md:text-5xl font-serif font-bold ${theme.textDark}`}>Premium Courses</h2>
          <p className="text-slate-600 font-light text-lg">Deepen your understanding and walk the pathless path with our structured immersions.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.title} className={`flex flex-col border-none shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-white rounded-3xl relative overflow-hidden group`}>
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#2D1A4A] to-[#B89B5E] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardHeader className="pt-8">
                <CardTitle className={`text-2xl font-serif ${theme.textDark}`}>{course.title}</CardTitle>
                <CardDescription className="font-medium mt-1 uppercase tracking-wider text-xs">{course.plan}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4 pt-4">
                <p className={`text-5xl font-bold ${theme.textDark}`}>{course.price}</p>
                <p className="text-sm text-slate-500 font-light leading-relaxed">Registration and payment are frontend placeholders in this phase.</p>
              </CardContent>
              <CardFooter className="pb-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className={`w-full h-12 rounded-full text-sm font-bold tracking-widest uppercase transition-all shadow-md group-hover:scale-105 ${theme.btnSolid}`} onClick={() => setSelectedCourse(course.title)}>
                      Enroll Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] rounded-2xl w-[90vw] mx-auto">
                    <DialogHeader>
                      <DialogTitle className={`font-serif text-2xl ${theme.textDark}`}>Course Registration</DialogTitle>
                      <DialogDescription>{selectedCourse} • Secure Checkout Placeholder</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="student-name">Full name</Label>
                        <Input id="student-name" placeholder="Enter your name" className="bg-slate-50 rounded-lg h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="student-email">Email</Label>
                        <Input id="student-email" type="email" placeholder="name@email.com" className="bg-slate-50 rounded-lg h-12" />
                      </div>
                    </div>
                    <DialogFooter className="flex-col gap-3 sm:flex-row sm:justify-between">
                      <Button variant="outline" className={`w-full sm:w-auto rounded-full h-12 ${theme.btnOutline}`}>Cancel</Button>
                      <Button className={`w-full sm:w-auto rounded-full h-12 ${theme.btnSolid}`}>Proceed to payment</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* 🟢 FOOTER */}
      <footer className="bg-[#1C0F2E] text-slate-400 py-16 px-6 lg:px-8 text-sm border-t-4 border-[#B89B5E]">
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
              <li><Link to="#events" className="hover:text-[#B89B5E] transition-colors font-medium text-[#B89B5E]">Free Satsangs for SiA members</Link></li>
              <li><Link to="#blogs" className="hover:text-[#B89B5E] transition-colors">Blogs (View All)</Link></li>
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
          Copyright © 2026 Shifting into Awareness
        </div>
      </footer>

    </main>
  );
};

export default Index;