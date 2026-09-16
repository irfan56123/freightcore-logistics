import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero/Hero";
import NetworkSection from "@/components/Network/NetworkSection";
import FleetSection from "@/components/Fleet/FleetSection";
import ImpactSection from "@/components/Impact/ImpactSection";

import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div id="top">
      <Navbar />

      <main>
        <Hero />

        <NetworkSection />

        <FleetSection />
        

        <ImpactSection />
      
      </main>

      <Footer />
    </div>
  );
}