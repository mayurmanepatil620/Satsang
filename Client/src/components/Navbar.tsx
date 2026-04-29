import { useState, useEffect, useRef } from "react";
import { ChevronDown, UserRound, ShoppingCart, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; 
import logo from "@/assets/satsung-logo.jpg";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
  
  // Cleaned up hover state: Track exactly one active menu at a time
  const [activeDesktopMenu, setActiveDesktopMenu] = useState(null);
  const timeoutRef = useRef(null);
  
  const location = useLocation();
  const cartItemCount = 0; 

  // Scroll Effect & Auto-Close
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 50) {
        setActiveDesktopMenu(null); // Close menus on scroll
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-Close Menus when changing pages
  useEffect(() => {
    setActiveDesktopMenu(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // FIXED: Flawless Hover Logic
  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDesktopMenu(menu);
  };

  const handleMouseLeave = () => {
    // Increased delay to 250ms to easily allow the mouse to cross the gap to the menu
    timeoutRef.current = setTimeout(() => {
      setActiveDesktopMenu(null);
    }, 250); 
  };

  const toggleMobileMenuState = (menu) => {
    setMobileExpandedMenu(mobileExpandedMenu === menu ? null : menu);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b flex flex-col ${
        scrolled || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-md border-slate-200/50 shadow-sm" 
          : "bg-[#FDFBF7] border-transparent"
      }`}
    >
      {/* TOP UTILITY NAVIGATION BAR (Hidden on Mobile) */}
      <div className="hidden lg:flex container justify-end items-center gap-3 pt-2 pb-1 text-[13px] text-[#2a75d3] tracking-wide font-medium">
        <Link to="/account" className="hover:text-blue-900 transition-colors">MY ACCOUNT</Link>
        <span className="text-gray-300 font-light">/</span>
        <Link to="/my-courses" className="hover:text-blue-900 transition-colors">MY COURSES</Link>
        <span className="text-gray-300 font-light">/</span>
        <Link to="/cart" className="hover:text-blue-900 transition-colors">CART</Link>
        <span className="text-gray-300 font-light">/</span>
        <Link to="/donate" className="hover:text-blue-900 transition-colors">DONATE</Link>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <div className={`container flex items-center justify-between transition-all duration-500 ${scrolled ? "py-2" : "py-3"}`}>
        
        {/* LOGO */}
        <a href="/" className="flex items-center gap-3 group outline-none z-50">
          <div className="overflow-hidden rounded-full border border-[#2D1A4A]/10 bg-white shadow-sm flex-shrink-0">
            <img src={logo} alt="Satsung awareness logo" className="h-10 w-10 md:h-12 md:w-12 object-cover group-hover:scale-110 transition-transform duration-500" loading="eager" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg md:text-xl font-serif font-bold text-[#2D1A4A] tracking-tight leading-none">Satsung</p>
            <p className="text-[8px] md:text-[10px] uppercase tracking-[0.15em] text-[#B89B5E] font-bold mt-1">Shifting Into Awareness</p>
          </div>
        </a>

        {/* =========================================================
            DESKTOP NAVIGATION 
            ========================================================= */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link className="rounded-full px-3 xl:px-4 py-2 text-xs font-bold tracking-widest uppercase text-[#2D1A4A] transition-colors hover:bg-[#2D1A4A]/5 hover:text-[#B89B5E] outline-none" to="/">
            HOME
          </Link>

          {/* Desktop Menu Generator */}
          {Object.entries(navbarMenus).map(([key, items]) => {
            const isOpen = activeDesktopMenu === key;
            
            return (
              <DropdownMenu key={key} open={isOpen} onOpenChange={(open) => !open && setActiveDesktopMenu(null)} modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className={`h-auto rounded-full px-3 xl:px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors outline-none border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 ${
                      isOpen ? "text-[#B89B5E] bg-[#2D1A4A]/5" : "text-[#2D1A4A] hover:bg-[#2D1A4A]/5 hover:text-[#B89B5E]"
                    }`}
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {key.toUpperCase()} <ChevronDown className={`h-3 w-3 ml-1 transition-transform duration-200 ${isOpen ? "rotate-180" : "opacity-70"}`} />
                  </Button>
                </DropdownMenuTrigger>
                
                <DropdownMenuContent 
                  align="start" 
                  sideOffset={4} // Reduced offset to prevent mouse falling into gap
                  className="w-56 rounded-xl p-2 border-[#2D1A4A]/10 shadow-xl bg-white/95 backdrop-blur-xl z-[150]" 
                  onMouseEnter={() => handleMouseEnter(key)} // Catch the mouse when it enters the menu
                  onMouseLeave={handleMouseLeave} // Start close timer when leaving the menu
                >
                  {items.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className="rounded-lg cursor-pointer hover:bg-[#FAF8F3] focus:bg-[#FAF8F3]">
                      {item.href.startsWith("/") ? (
                        <Link to={item.href} className="text-sm font-medium text-[#2D1A4A] py-2 w-full block hover:text-[#B89B5E] transition-colors">{item.label}</Link>
                      ) : (
                        <a href={item.href} className="text-sm font-medium text-[#2D1A4A] py-2 w-full block hover:text-[#B89B5E] transition-colors">{item.label}</a>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          })}

          <a className="rounded-full px-3 xl:px-4 py-2 text-xs font-bold tracking-widest uppercase text-[#2D1A4A] transition-colors hover:bg-[#2D1A4A]/5 hover:text-[#B89B5E] outline-none" href="#blogs">MY BLOGS</a>
          <Link className="rounded-full px-3 xl:px-4 py-2 text-xs font-bold tracking-widest uppercase text-[#2D1A4A] transition-colors hover:bg-[#2D1A4A]/5 hover:text-[#B89B5E] outline-none" to="/contact-us">CONTACT US</Link>
        </nav>

        {/* DESKTOP RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/my-courses" className="flex items-center justify-center h-10 px-4 bg-[#333333] hover:bg-[#222222] text-white text-sm font-medium rounded-md transition-colors">
            My Courses
          </Link>
          <Link to="/cart" className="flex items-center justify-center h-10 px-4 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-md transition-colors gap-2">
            <ShoppingCart className="h-4 w-4" fill="currentColor" />
            <span className="bg-white text-[#007BFF] rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shadow-sm">{cartItemCount}</span>
          </Link>
          <Button className="rounded-full bg-[#2D1A4A] hover:bg-[#1C0F2E] text-white px-6 shadow-md transition-transform hover:scale-105 focus-visible:ring-0 focus:outline-none" asChild>
            <Link to="/login">
              <UserRound className="h-4 w-4 mr-2" />
              Login
            </Link>
          </Button>
        </div>

        {/* =========================================================
            MOBILE/TABLET ICONS (Hamburger & Quick Cart)
            ========================================================= */}
        <div className="flex lg:hidden items-center gap-2 z-50">
          <Link to="/cart" className="flex items-center justify-center h-9 px-3 bg-[#007BFF] text-white rounded-md gap-2">
            <ShoppingCart className="h-4 w-4" fill="currentColor" />
            <span className="bg-white text-[#007BFF] rounded-full h-5 w-5 flex items-center justify-center text-[10px] font-bold">{cartItemCount}</span>
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-[#2D1A4A] hover:bg-black/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* =========================================================
          MOBILE MENU OVERLAY
          ========================================================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 w-full bg-white border-t shadow-xl max-h-[85vh] overflow-y-auto z-[90]">
          <div className="flex flex-col p-4 space-y-2">
            
            <Link to="/" className="py-3 px-4 text-sm font-bold tracking-widest uppercase text-[#2D1A4A] bg-gray-50 rounded-lg">
              Home
            </Link>

            {/* Mobile Accordion Menus */}
            {Object.entries(navbarMenus).map(([key, items]) => (
              <div key={key} className="flex flex-col bg-gray-50 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleMobileMenuState(key)}
                  className="flex justify-between items-center py-3 px-4 w-full text-left text-sm font-bold tracking-widest uppercase text-[#2D1A4A]"
                >
                  {key.toUpperCase()}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileExpandedMenu === key ? "rotate-180 text-[#B89B5E]" : ""}`} />
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${mobileExpandedMenu === key ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                  <div className="flex flex-col pb-2 px-4 gap-1">
                    {items.map((item) => (
                      <Link 
                        key={item.label} 
                        to={item.href} 
                        className="py-2 pl-4 text-sm font-medium text-gray-600 hover:text-[#B89B5E] border-l-2 border-gray-200 hover:border-[#B89B5E] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <a href="#blogs" className="py-3 px-4 text-sm font-bold tracking-widest uppercase text-[#2D1A4A] bg-gray-50 rounded-lg">My Blogs</a>
            <Link to="/contact-us" className="py-3 px-4 text-sm font-bold tracking-widest uppercase text-[#2D1A4A] bg-gray-50 rounded-lg">Contact Us</Link>

            {/* Mobile Action Buttons */}
            <div className="pt-4 mt-2 border-t flex flex-col gap-3">
              <Link to="/my-courses" className="flex items-center justify-center w-full h-11 bg-[#333333] text-white text-sm font-medium rounded-lg">
                My Courses
              </Link>
              <Link to="/login" className="flex items-center justify-center w-full h-11 bg-[#2D1A4A] text-white text-sm font-medium rounded-lg gap-2">
                <UserRound className="h-4 w-4" /> Login
              </Link>
              
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Link to="/account" className="text-center py-2 text-xs font-medium bg-blue-50 text-blue-700 rounded-md">My Account</Link>
                <Link to="/donate" className="text-center py-2 text-xs font-medium bg-blue-50 text-blue-700 rounded-md">Donate</Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}