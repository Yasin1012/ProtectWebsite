import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import DGUVV2 from "@/pages/services/DGUVV2";
import Betriebsmittelpruefung from "@/pages/services/Betriebsmittelpruefung";
import Fortbildung from "@/pages/services/Fortbildung";
import Brandschutz from "@/pages/services/Brandschutz";
import ElektrischePruefung from "@/pages/services/ElektrischePruefung";
import Team from "@/pages/Team";
import Network from "@/pages/Network";
import Contact from "@/pages/Contact";
import Landing from "@/pages/Landing";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/leistungen" component={Services} />
      <Route path="/leistungen/dguv-v2" component={DGUVV2} />
      <Route path="/leistungen/betriebsmittelpruefung" component={Betriebsmittelpruefung} />
      <Route path="/leistungen/fortbildung" component={Fortbildung} />
      <Route path="/leistungen/brandschutz" component={Brandschutz} />
      <Route path="/leistungen/elektrische-pruefung" component={ElektrischePruefung} />
      <Route path="/team" component={Team} />
      <Route path="/netzwerk" component={Network} />
      <Route path="/kontakt" component={Contact} />
      <Route path="/landing" component={Landing} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
