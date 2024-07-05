import { FifthSection } from "@/components/fifth-section/fifthSection";
import { FirstSection } from "@/components/first-section/firstSection";
import { FooterSection } from "@/components/footer/footerSection";
import { FourthSection } from "@/components/fourth-section/fourthSection";
import Navbar from "@/components/navbar/navbar";
import { SecondSection } from "@/components/second-section/secondSection";
import { SixthSection } from "@/components/sixth-section/sixthSection";
import { ThirdSection } from "@/components/third-section/thirdSection";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <FooterSection />
    </div>
  );
}
