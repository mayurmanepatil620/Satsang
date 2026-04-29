import { ChevronLeft, ChevronRight, CalendarDays, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom"; // Import Link for routing

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const events = [
  { 
    title: "THE SHIFT (+1 week Upadesa Saram)", 
    date: "Apr 26 @ 12 to 4 pm IST", 
    place: "Online Live", 
    tag: "LIVE", 
    price: "₹ 1,111",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "ARUNACHALA DEEP RETREAT ~ June 2026", 
    date: "June 2026 | Batch 21", 
    place: "Tiruvannamalai", 
    tag: "RETREAT", 
    price: "Apply Now",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "FREE REGULAR LIVE SESSIONS ✨", 
    date: "For Members of SiA", 
    place: "Community Live", 
    tag: "FREE", 
    price: "FREE",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80&w=800"
  },
];

const UpcomingEvents = () => {
  const theme = {
    bg: "bg-[#FAF8F3]",
    textDark: "text-[#2D1A4A]",
    accent: "text-[#B89B5E]",
    btnSolid: "bg-[#2D1A4A] hover:bg-[#1C0F2E] text-white",
  };

  return (
    <section id="events" className={`py-24 relative z-20 ${theme.bg}`}>
      <style>{`
        .events-swiper .swiper-pagination-bullet-active { background: #2D1A4A !important; }
        .events-swiper { padding-bottom: 60px !important; overflow: visible !important; }
        .nav-btn { 
            position: absolute; top: 50%; transform: translateY(-50%); z-index: 50;
            background: white; border-radius: 50%; width: 50px; height: 50px;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1); cursor: pointer; 
            transition: all 0.3s ease; color: #2D1A4A; border: 1px solid #f0f0f0;
        }
        .nav-btn:hover { background: #2D1A4A; color: white; transform: translateY(-50%) scale(1.1); }
        .prev-el { left: -25px; }
        .next-el { right: -25px; }
        @media (max-width: 1100px) { .nav-btn { display: none; } }
      `}</style>

      <div className="container relative">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold ${theme.textDark} uppercase tracking-tight`}>
            Upcoming Events
          </h2>
          {/* Fixed "View All" redirection */}
          <Button variant="ghost" asChild className={`${theme.textDark} font-bold text-sm uppercase tracking-widest`}>
            <Link to="/all-events"> 
                View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="relative">
          <div className="nav-btn prev-el shadow-xl"><ChevronLeft size={28} /></div>
          <div className="nav-btn next-el shadow-xl"><ChevronRight size={28} /></div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{ prevEl: '.prev-el', nextEl: '.next-el' }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="events-swiper"
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <Card className="border-none shadow-md hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl overflow-hidden h-full flex flex-col group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${theme.btnSolid} font-bold px-3 py-1`}>{event.tag}</Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className={`text-2xl font-serif ${theme.textDark} leading-snug min-h-[4rem]`}>
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-md font-bold text-[#B89B5E] mt-1">
                      {event.date}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className={`text-3xl font-bold ${theme.textDark} mb-4`}>{event.price}</p>
                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                       <CalendarDays className="h-4 w-4 text-[#B89B5E]" />
                       <span>{event.place}</span>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-slate-50">
                    <Button asChild className={`w-full h-12 rounded-lg text-sm font-bold tracking-[0.2em] uppercase transition-all group-hover:bg-[#B89B5E] ${theme.btnSolid}`}>
                      <Link to={`/register/${index}`}>REGISTER</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;