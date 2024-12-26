import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function NewBikes() {
  const [bike, setBike] = useState([]);
  useEffect(() => {
    const getBike = async () => {
      try {
        const res = await axios.get("http://localhost:4001/bike");

        const data = res.data.filter((data) => data.type === "New");
        console.log(data);
        setBike(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBike();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
        <h2 className="text-4xl font-bold text-grey-900 my-16 text-center">
      Trending{' '}
      <span className="relative inline-block">
        Today
        <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400 -z-10"></span>
      </span>
    </h2>
          {/* <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1> */}
        </div>

        <div>
          <Slider {...settings}>
            {bike.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default NewBikes;
