import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Removed .tsx and .jsx extensions
import Index from "./components/Index";
import NotFound from "./pages/NotFound";

import Satsangs from "./pages/Satsangs"; 
import Webinars from "./pages/Webinars"; 
import Retreats from "./pages/Retreats"; 
import Events from "./pages/Events";

import AllAboutSiA from "./pages/AllAboutSiA"; 
import JakeLight from "./pages/JakeLight"; 
import AllActivities from "./pages/AllActivities"; 
import Join from "./pages/Join";

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
          
          {/* CUSTOM ROUTES */}
          <Route path="/about-sia" element={<AllAboutSiA />} />
          <Route path="/jake-light" element={<JakeLight />} />
          <Route path="/all-activities" element={<AllActivities />} />
          <Route path="/join" element={<Join />} />
          <Route path="/satsangs" element={<Satsangs />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/retreats" element={<Retreats />} />
          <Route path="/all-events" element={<Events />} />
          
          {/* CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;