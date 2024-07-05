import React from "react";
import HeroIonutPhoto from "../../images/hero-cover-ionut.png";

export function FirstSection() {
  return (
    <div className="py-10">
      <div className="px-20">
        <div className="flex flex-row justify-between">
          <div className="width-35percent flex flex-col gap-8">
            <div>Join Us</div>
            <div className=" uppercase bold text-4xl width-70percent">
              25K+ Students Trust Us
            </div>
            <div className=" width-70percent">
              Every day brings with it fresh of learning possibilities.
            </div>
            <div className="flex flex-row justify-start gap-8">
              <div className="w-24 h-12 bg-violet-800 flex justify-center items-center rounded-sm cursor-pointer">
                Join Us
              </div>
              <div className="w-32 h-12 flex justify-center items-center rounded-sm border-px-solid-violet cursor-pointer">
                Learn More
              </div>
            </div>
          </div>
          <div className="width-35percent">
            <div className="">
              <div className="">
                <img src={HeroIonutPhoto.src} alt="Photo of Ionut" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
