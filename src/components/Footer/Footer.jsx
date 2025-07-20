import React from "react";
import footerImage from "../../assets/bg-shadow.png";
import footerLogo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#06091A]">
      <div className="w-full h-[950px] md:h-[700px] bg-[#06091A] relative">
        <div className="w-11/12 mx-auto absolute left-0 right-0 bottom-[100px]  ">
          <div className="w-full">
            <div className="w-full bg-[#ffffff1f] border-1 border-white p-5 z-10 rounded-2xl">
              <div
                className="full h-[300px] mx-auto rounded-2xl z-20 bg-cover bg-center flex items-center bg-white"
                style={{ backgroundImage: `url(${footerImage})` }}
              >
                <div className="max-w-[561px] mx-auto">
                  <div className="w-full flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-black mb-4">
                      Subscribe to our Newsletter
                    </h2>
                    <p className="text-xl` font-medium text-gray-500 mb-6">
                      Get the latest updates and news right in your inbox!
                    </p>
                    <div className="flex gap-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="input input-md rounded-lg border-1"
                      />
                      <button
                        type="button"
                        class="text-gray-900 bg-gradient-to-r from-[#de95b9] via-[#F7C475] to-[#FACD53] hover:bg-gradient-to-bl font-bold rounded-lg text-sm px-5 py-2.5 text-center mb-2 cursor-pointer"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-9">
              <div className="flex justify-center mb-[64px]">
                <img className="w-36" src={footerLogo} alt="" />
              </div>
              <div className="flex flex-col gap-10 md:flex-row justify-between ">
                <div className="max-w-[290px] text-gray-500">
                  <h3 className="text-white font-medium mb-4">About Us</h3>
                  <p>
                    We are a passionate team dedicated to providing the best
                    services to our customers.
                  </p>
                </div>
                <div className="text-gray-500">
                  <h3 className="text-white font-medium mb-4">Quick Links</h3>
                  <ol>
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">Services</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                  </ol>
                </div>
                <div className="max-w-[380px] flex flex-col gap-4">
                  <h3 className="text-white font-bold">Subscribe</h3>
                  <p className="text-gray-500">
                    Subscribe to our newsletter for the latest updates.
                  </p>
                  <div className="flex">
                    <input
                      className="input focus:outline-none border-none rounded-none rounded-l-lg outline-none"
                      type="email"
                      placeholder="Enter you email"
                    />
                    <button
                      type="button"
                      class="text-gray-900 bg-gradient-to-r from-[#de95b9] via-[#F7C475] to-[#FACD53] hover:bg-gradient-to-bl font-bold rounded-r-lg text-sm px-5 py-2.5 text-center mb-2 cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider bg-gray-800 h-0.5"></div>
      <p className="text-center text-gray-500 py-6">
        @2024 Your Company All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
