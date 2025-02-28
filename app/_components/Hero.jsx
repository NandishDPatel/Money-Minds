import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 text-white flex items-center flex-col p-5">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-emerald-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Manage Your Expenses with Ease.
            <span className="sm:block text-blue-500"> Save some money </span>
          </h1>

          <h3 className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-200">
            Take control of your finances and maximize your savings!
          </h3>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded-sm border border-b-2 bg-green-600 hover:bg-green-900 px-12 py-3 text-sm font-medium text-white hover:text-white focus:ring-3 focus:outline-hidden sm:w-auto border-white"
              href={"/sign-in"}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
       <Image
        src="/hero-banner.png"
        alt="Banner Image"
        height={550}
        width={1100}
        className="-mt-10 rounded-xl border-2 mx-auto"
      />
    </section>
  );
};

export default Hero;
