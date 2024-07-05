import React from "react";
import PhotoOfIonutSec3 from "../../images/third-section-photo.png";
import RedBarImg from "../../images/red-bar-section3.png";

export const ThirdSection = () => {
  return (
    <div className="py-10">
      <div className="px-20">
        <div className="flex flex-row justify-center gap-16">
          <div>
            <img src={PhotoOfIonutSec3.src} alt="Photo of Ionut in Section 3" />
          </div>
          <div className="flex flex-col justify-center gap-8 width-35percent">
            <div>
              <img src={RedBarImg.src} alt="Red Bar" />
            </div>
            <div className="bold text-4xl width-55percent">
              Our Popular Courses
            </div>
            <div className="text-sm width-85percent">
              {" "}
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </div>
            <div className="color-2nd-section">{`Learn More >`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
