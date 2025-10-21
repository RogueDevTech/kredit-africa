import React from "react";
import HeroSection from "./components/hero";
import Solutions from "./components/solutions";
import PlatformFeatures from "./components/platform-features";
import Compliance from "./components/compliance";
import WhoWeServe from "./components/who-we-serve";
import BuildDevelopers from "./components/build-developers";
import Faq from "./components/faq";
import Ready from "./components/ready";
import Footer from "@/components/footer";

export default function Homepage() {
  return (
    <div>
      <HeroSection />
      <Solutions imageSrc="/assets/Images/Image (1).webp" />
      <PlatformFeatures imageSrc="/assets/Images/Frame 1686562894.webp" />
      <Compliance />
      <WhoWeServe />
      <BuildDevelopers />
      <Faq />
      <Ready />
      <Footer />
    </div>
  );
}
