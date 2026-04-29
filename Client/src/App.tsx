import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./components/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
// 1. Import your new page (adjust the path if it's in a different folder)
import AllAboutSiA from "./pages/AllAboutSiA.jsx"; 
import JakeLight from "./pages/JakeLight.jsx"; 
import AllActivities from "./pages/AllActivities.jsx"; 
import Join from "./pages/Join.jsx"; 
import Satsangs from "./pages/Satsangs.jsx"; 
import Webinars from "./pages/Webinars.jsx"; 
import Retreats from "./pages/Retreats.jsx"; 
import Events from "./pages/Events.jsx";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path ="/login" element={<Index />} />
          
          {/* 2. ADD THIS ROUTE FOR YOUR NEW PAGE */}
          <Route path="/about-sia" element={<AllAboutSiA />} />
          <Route path="/jake-light" element={<JakeLight />} />
          <Route path="/all-activities" element={<AllActivities />} />
          <Route path="/join" element={<Join />} />
          <Route path="/satsangs" element={<Satsangs />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/retreats" element={<Retreats />} />
          <Route path="/all-events" element={<Events />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;