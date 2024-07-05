import React from "react";

export const SixthSection = () => {
  return (
    <div className="py-10">
      <div className="px-20">
        <div className="flex flex-col justify-center mx-auto gap-6">
          <div className="flex justify-center color-2nd-section">
            Newsletter
          </div>
          <div className="flex justify-center text-5xl">
            Get Quality Education
          </div>
          <div className="flex justify-center width-second-section-paraph mx-auto text-center">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </div>
        </div>
        <div className="flex flex-row pt-16 justify-center rounded-sm pb-24">
          <div className="">
            <input
              className="h-12 width-sixth-section-input rounded-s-lg px-5"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div className="h-12 justify-center flex">
            <button className="flex justify-center mx-auto items-center px-4 color-6th-section rounded-e-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
