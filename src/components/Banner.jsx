import React from "react";
import FeaturesSection from "./FeaturesSection";
import banner from "../../public/Banner.jpg";

function Banner() {
  return (
    <>
    <div className="mt-20">
    <div className="relative flex items-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 text-white text-right max-w-screen-2xl px-4 md:px-20 ml-auto">
    <h1 className="text-xl md:text-5xl text-sky-500 font-myFont2">
      Welcome to
    </h1>
    <p className="text-5xl md:text-9xl mt-4 font-myFont">
      Riders<br></br>Revolution
    </p>
    <a href="/bike">
    <button className="btn btn-lg relative bg-sky-500 text-white font-large py-2 px-10 mt-6 hover:bg-sky-600">
  <span className="relative z-10">Explore</span>
  <div className="absolute inset-0 flex items-center justify-center">
  </div>
</button></a>

    {/* <button className="btn btn-info mt-6 px-6">Explore</button> */}
  </div>
</div>

    </div>
    <div>
    <h2 className="text-4xl font-bold text-grey-900 my-16 text-center">
      Why Choose{' '}
      <span className="relative inline-block">
        Riders Revolution?
        <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400 -z-10"></span>
      </span>
    </h2>
    <FeaturesSection />

    </div>
      <span className="my-6"> <br /></span>
    <div className="relative w-full h-[500px] md:h-[900px] bg-cover bg-center" style={{ backgroundImage: "url('./Bike Community.png')" }}>
      <div className="absolute bottom-8 right-8 text-right">
        <h2 className="text-5xl md:text-8xl tracking-wider font-bold text-white mb-4 font-myFont">Join The Community</h2>
        <p className="text-3xl md:text-4xl text-white mb-6 font-myFont2">Dive Into A Vibrant Community Of Riders.</p>
        <button className="px-6 py-3 bg-white md:text-xl font-myFont2 text-sky-500 rounded hover:bg-sky-500 hover:text-white transition duration-300">
          JOIN NOW
        </button>
      </div>
    </div>


      {/* <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Get Started</button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div> */}
    </>
  );
}

export default Banner;
