import React from "react";

export const FooterSection = () => {
  return (
    <div className="bg-white">
      <div className="px-20 text-black">
        <div className="flex flex-row gap-8 justify-between my-12">
          <div>
            <div className=" font-bold text-lg pb-3">Company Info</div>
            <div className="flex flex-col gap-2">
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
          </div>
          <div>
            <div className=" font-bold text-lg pb-3">Legal</div>
            <div className="flex flex-col gap-2">
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
          </div>
          <div>
            <div className=" font-bold text-lg pb-3">Features</div>
            <div className="flex flex-col gap-2">
              <p>Business Marketing</p>
              <p>User Analytic</p>
              <p>Live Chat</p>
              <p>Unlimited Support</p>
            </div>
          </div>
          <div>
            <div className=" font-bold text-lg pb-3">Resources</div>
            <div className="flex flex-col gap-2">
              <p>IOS & Android</p>
              <p>Watch a Demo</p>
              <p>Customers</p>
              <p>API</p>
            </div>
          </div>
          <div>
            <div className="font-bold text-lg pb-3">Get In Touch</div>
            <div className="flex flex-col gap-2">
              <p>+40 752 819 170</p>
              <p>Comuna Bistra, nr 13, Sat Garde</p>
              <p>ionut.apicultorul@yahoo.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
