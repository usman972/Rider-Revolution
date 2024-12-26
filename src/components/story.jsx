import React from "react";

const Story = () => {
return (
  <div>
  <div className="text-right my-16">
    <div className="inline-block h-1/4 bg-blue-200 text-white w-3/5 text-center">
      <h2 className="relative -top-10 text-black font-myFont2 text-6xl">Our Story</h2>
      <p className="relative -top-6 text-black px-28 font-myFont2 text-3xl text-justify leading-snug">
        Founded by passionate bikers, Riders Revolution was born out of a
        desire to create a comprehensive platform that caters to all the
        needs of bike enthusiasts. From finding the perfect bike to getting
        the best customization, our platform offers it all.
      </p>
    </div>
  </div>

  <div className="text-left my-12">
    <div className="inline-block h-1/4 bg-blue-200 text-white w-3/5 text-center">
      <h2 className="relative -top-10 text-black font-myFont2 text-6xl">Our Mission</h2>
      <p className="relative -top-6 text-black px-28 font-myFont2 text-3xl text-justify leading-snug">
        To revolutionize the biking experience for enthusiasts by providing
        a seamless platform for buying, selling, and customizing bikes, and
        connecting with the vibrant biking community.
      </p>
    </div>
  </div>
</div>
);
};

export default Story;
