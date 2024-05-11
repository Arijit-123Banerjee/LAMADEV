import React from "react";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <>
      <nav class=" border-gray-200 bg-[#0b0b21]">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="text-xl text-white font-bold">LAMADEV</h1>

          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <Links />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
