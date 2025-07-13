
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminProvider } from "@/contexts/AdminContext";
import Welcome from "./pages/Welcome";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DetailPage from "./pages/DetailPage";
import AdminPanel from "./pages/AdminPanel";
import ThemeToggle from "@/components/ThemeToggle";
import AdminLoginButton from "@/components/admin/AdminLoginButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AdminProvider>
        <Toaster />
        <Sonner />

        <div className="bg-background text-foreground min-h-screen font-sans transition-colors duration-300">
          <ThemeToggle />
          <AdminLoginButton />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<Index />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/:type/:id" element={<DetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AdminProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
