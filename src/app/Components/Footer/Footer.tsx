import React from "react";
import Links from "../Links/Links";

export default function Footer() {
  return (
    <>
      <div className="bg-background font-playfair shadow-[0_-6px_6px_-6px] shadow-background">
        <div className="section-container px-0 max-w-[100rem]">
          <div className="flex flex-col items-center justify-center z-10">
            <div className="text-primary-accent text-7xl mb-15 font-semibold text-shadow-lg/30">
              Want To
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-y-15 md:gap-10 md:px-10 items-start">
              <div className="col-span-2 col-start-2 md:col-start-auto">
                <div className="text-center mb-5 text-primary text-3xl lg:text-[26px] xl:text-4xl font-semibold">
                  Offer job opportunity?
                </div>
                <div className="text-center p-3 font-jetbrains text-xl">
                  I am open to discussing potential job opportunities or
                  collaborations. with experience in in web development and
                  software engineering, I am interested in roles that allow me
                  to grow by working on exciting and challenging projects. If
                  you have a project or a role in mind, feel free to reach out
                  and let's discus!
                </div>
              </div>

              <div className="col-span-2 col-start-2 md:col-start-auto">
                <div className="text-center mb-5 text-primary text-3xl xl:text-4xl font-semibold">
                  Connect?
                </div>
                <div className="text-center p-3 font-jetbrains text-xl">
                  Networking is key in any industry and I'm always looking to
                  meet new people and expand my proffesional circle. Wheather
                  you are a fellow developer , designer or entrepreneur, I'd
                  love to chat and learn more about your work.Let's connect and
                  see where the conversation takes us!
                </div>
              </div>

              <div className="col-span-2 col-start-2 lg:col-start-auto">
                <div className="text-center mb-5 text-primary text-3xl xl:text-4xl font-semibold">
                  Build something?
                </div>
                <div className="text-center p-3 font-jetbrains text-xl">
                  I have a passion for developing innovative web applications.
                  Wheather it's a simple landing page or building a custom
                  e-commerce platform or a cutting edge web app, I'm always
                  ready for a new challenge. Let's create Something amazzing
                  together!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div>
            <Links/>
          </div>
        </div>

      </div>
    </>
  );
}
