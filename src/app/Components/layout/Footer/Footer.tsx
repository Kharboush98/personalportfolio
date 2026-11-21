import React from "react";
import Links from "../../ui/Links/Links";

export default function Footer() {
  return (
    <section id="footer" className="bg-background font-playfair mt-auto">

        <div className="flex flex-col justify-center items-center my-5">
          <div className="text-primary text-shadow-lg/15 text-xl font-semibold my-3">Email : AbdelrhmanKharboush@gmail.com</div>
          <div className="">
            <Links/>
          </div>
        </div>
    </section>
  );
}
