import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import list from "../../public/list.json";
import BooksCards from "./helper/BooksCards";

export default function Course() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24">
        <div className=" text-center items-center justify-center">
          <h1 className="text-2xl md:text-4xl  py-6 font-semibold">
            We're delighted to have{" "}
            <span className="text-indigo-500">you Here !!!</span>
          </h1>
          <p className="text-left text-gray-400 font-thin pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus deleniti, non, maxime quos similique soluta
            praesentium, quisquam veniam harum quam autem magnam doloremque
            eaque perspiciatis neque debitis fugiat delectus tempora! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quam, placeat
            nemo quas voluptate nulla facere eius provident unde quibusdam
            fugiat expedita, est labore neque libero corpori!!!!!!
          </p>
          <div className="py-6 ">
            {/* <IoMdArrowBack  className='text-4xl text-indigo-600'/> */}
            <Link
              to={"/"}
              className="bg-indigo-500 hover:bg-indigo-300 transition-all duration-300 ease-in-out py-2 px-6 text-white rounded-md"
            >
              Back
            </Link>
          </div>
        </div>
        <div className="container grid md:grid-cols-3  grid-cols-1">
          {list.map((data) => (
            <BooksCards data={data} key={data.id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
