import React from "react";
import FirstCardPhoto from "../../images/first-card-section2.png";
import SecondCardPhoto from "../../images/second-card-section2.png";

export const SecondSection = () => {
  return (
    <div className="py-10">
      <div className="px-20">
        <div className="flex flex-col justify-center mx-auto gap-6">
          <div className="flex justify-center color-2nd-section">
            Practice Advice
          </div>
          <div className="flex justify-center text-5xl">
            Most Popular Courses
          </div>
          <div className="flex justify-center width-second-section-paraph mx-auto text-center">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center pt-16">
          <div>
            <img src={FirstCardPhoto.src} alt="First Card Photo" />
          </div>
          <div>
            <img src={SecondCardPhoto.src} alt="Second Card Photo" />
          </div>
        </div>
      </div>
    </div>
  );
};
