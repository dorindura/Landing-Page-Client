import React from "react";
import FirstCardS4 from "../../images/first-product-card-section4.png";
import SecondCard4 from "../../images/second-product-card-section4.png";

export const FourthSection = () => {
  return (
    <div className="py-10">
      <div className="px-20">
        <div>
          <div className="flex flex-col justify-center mx-auto gap-6">
            <div className="flex justify-center color-2nd-section">
              Practice Advice
            </div>
            <div className="flex justify-center text-5xl">
              Approdable Packages
            </div>
            <div className="flex justify-center width-second-section-paraph mx-auto text-center">
              Problems trying to resolve the conflict between <br /> the two
              major realms of Classical physics: Newtonian mechanics
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8 justify-center pt-14">
          <div>
            <img
              className="rounded-lg"
              src={FirstCardS4.src}
              alt="First Card Section 4"
            />
          </div>
          <div>
            <img
              className="rounded-lg"
              src={SecondCard4.src}
              alt="Second Card Section 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
