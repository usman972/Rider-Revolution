// src/components/AboutUs.jsx
import React from "react";
import Story from "./story"
import Form from "./Form";


const AboutUs = () => {
  return (
    <div>
    <section className="h-screen bg-cover bg-center mt-20 content-center" style={{ backgroundImage: "url('./about banner-01.jpg')" }}>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Round Image */}
        <div className="mask mask-circle size-[50%] ">
            <img
              src="./about .jpg" // Replace with your actual image path
              alt="About Riders Revolution"
              className="w-full h-full object-cover shadow-lg"
            />
          
        </div>
        

        {/* Text Box with Colored Background */}
        <div className="relative flex flex-col justify-center bg-white shadow-lg rounded-lg p-6 w-[350px] h-[400px] right-[157px]">
          <h2 className="text-6xl mb-4 font-myFont">About Riders Revolution</h2>
          <p className="text-2xl font-myFont2">
            Discover the story behind the ultimate ride experience marketplace.
          </p>
          {/* Background Color Box */}
          
        </div>
      </div>
    </section>
    <Story />
    <Form />
    </div>
  );
};

export default AboutUs;
