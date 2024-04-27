import { affiliateLogo } from "./assets";
import ChooseUs from "./components/ChooseUs";
import Hero from "./components/Hero";

const page = () => {
  return (
    <div>
      <nav className="py-7  justify-between absolute top-0 left-0 w-full px-[250px] flex">
        <img src={affiliateLogo.src} alt="logo" />
        <a href="/register">
          <button className="bg-main px-4 py-2 rounded-2xl  text-lg font-semibold">
            Join the project
          </button>
        </a>
      </nav>
      <Hero />
      <div className="h-[20vh] px-[250px] flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <h1 className="text-7xl font-bold text-center text-main">1M+</h1>
          <p className="text-gray-500 text-lg w-36 ">
            Users assigned to our program
          </p>
        </div>
        <div className="flex gap-4 items-center ">
          <h1 className="text-7xl font-bold text-center text-main">10K+</h1>
          <p className="text-gray-500 text-lg w-36 ">Products to choose from</p>
        </div>
        <div className="flex gap-4 items-center">
          <h1 className="text-7xl font-bold text-center text-main">5</h1>
          <p className="text-gray-500 text-lg w-36">
            Star rating from our affiliates
          </p>
        </div>
      </div>
      <ChooseUs />
    </div>
  );
};

export default page;
