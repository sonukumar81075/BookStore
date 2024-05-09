import React from "react";
import list from "../../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BooksCards from "./BooksCards";

export default function FreeBook() {
  const filterdata = list.filter((data) => data.category === "Free");
  //   console.log("filterdata", filterdata);

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
    <div className="md:px-20 px-4">
      <div className="py-12 md:w-4/5">
        <h1 className="text-indigo-500 text-3xl font-bold">
          Free Offreds Courses
        </h1>
        <p className="py-4 text-md  font-medium text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          reiciendis aut quisquam ea natus? Magni laborum doloremque fugit, est
          id aliquam quos eum eligendi quia? Quibusdam amet sed dolorum alias.
        </p>
      </div>
      <div className="">
        <Slider {...settings} >
          {filterdata.map((data) => (
            <BooksCards data={data} key={data.id}/>
          ))}
        </Slider>
      </div>
    </div>
  );
}
