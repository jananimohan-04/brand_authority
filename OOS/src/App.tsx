import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Leaders from "./pages/Leaders";
import StudentAmbassadors from "./pages/StudentAmbassadors";
import Interviews from "./pages/Interviews";
import Colleges from "./pages/Colleges";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import AmbassadorApplication from "./pages/AmbassadorApplication";
import NominateLeader from "./pages/NominateLeader";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/student-ambassadors" element={<StudentAmbassadors />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/join" element={<Join />} />
          <Route path="/apply-ambassador" element={<AmbassadorApplication />} />
          <Route path="/nominate-leader" element={<NominateLeader />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
