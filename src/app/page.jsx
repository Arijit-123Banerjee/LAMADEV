import Image from "next/image";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center content-center place-items-center p-20">
      <div className="text-white pl-10 md:order-first max-md:order-last space-y-10">
        <h1 className="text-6xl font-light max-md:text-4xl max-md:mt-10">
          Creative Thoughts Agency
        </h1>
        <p className="w-[80%] max-md:w-full">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          doloremque tempore error nostrum possimus ullam aspernatur. Omnis quas
          aliquam sequi repellendus quia, ipsa suscipit illo eum voluptates
          veritatis maxime veniam quasi doloremque.
        </p>
        <button className="p-3 bg-blue-700 rounded-2xl text-white">
          Learn More
        </button>
        <Image src="/brands.png" width={400} height={400} alt="Brands" />
      </div>
      <div className="order-1">
        <Image src="/hero.gif" width={600} height={600} alt="Hero" />
      </div>
    </div>
  );
};

export default Home;
