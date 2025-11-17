import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Model from "@/pages/model";
import Projects from "@/pages/projects";
import Team from "@/pages/team";
import Press from "@/pages/press";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/hakkimizda" component={About} />
      <Route path="/model" component={Model} />
      <Route path="/projeler" component={Projects} />
      <Route path="/ekibimiz" component={Team} />
      <Route path="/basin" component={Press} />
      <Route path="/iletisim" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 mx-auto w-full max-w-7xl px-4">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
