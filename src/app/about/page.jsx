import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center content-center place-items-center p-20">
      <div className="text-white pl-10 md:order-first max-md:order-last space-y-10">
        <p className="text-[#2c73fd] font-bold max-md:text-center">
          About Agency
        </p>
        <h1 className="text-5xl text-pretty max-md:text-4xl">
          We Create Digital Ideas that are bigger,bolder,braver and better
        </h1>
        <p className="w-[80%] max-md:w-full">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          doloremque tempore error nostrum possimus ullam aspernatur. Omnis quas
          aliquam sequi repellendus quia, ipsa suscipit illo eum voluptates
          veritatis maxime veniam quasi doloremque.
        </p>
        <div className="flex gap-7">
          <div>
            <h1 className="text-blue-500 font-bold text-lg">10k+</h1>
            <p className="text-sm">Year of Experiance</p>
          </div>
          <div>
            <h1 className="text-blue-500 font-bold text-lg">234k+</h1>
            <p className="text-sm">Placed Reached</p>
          </div>
          <div>
            <h1 className="text-blue-500 font-bold text-lg">5k+</h1>
            <p className="text-sm">Services and Plugins</p>
          </div>
        </div>
      </div>
      <div className="order-1">
        <Image src="/about.png" width={400} height={400} alt="Hero" />
      </div>
    </div>
  );
};

export default AboutPage;
