import React from "react";
import { MdEmail } from "react-icons/md";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex-1 flex flex-col md:flex-row mt-16 gap-12">
      <div className="md:w-1/2 w-full md:mt-32 mt-24 space-y-12  md:order-1 order-2">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">
            Lorem ipsum dolor sit amet consectetur elit{" "}
            <span className="text-indigo-500"> new everyday!</span>
          </h1>
          <p className="text-gray-400 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            dolor ullam corrupti, nesciunt hic blanditiis quae quis amet aliquam
            doloribus cum repellat quia nostrum ex, dolorem corporis delectus
            commodi facere.
          </p>
        </div>

        <label className=" flex items-center gap-2 dark:text-white dark:border-white ">
           <MdEmail className="text-2xl text-indigo-500 mb-2 dark:bg-slate-900 dark:text-white " />
          <input type="text" className="focus:outline-none border-b w-full px-4 border-indigo-500 pb-2 dark:border-slate-500  dark:bg-slate-950" placeholder="Enter Your Email to Login " />
        </label>



        <button className=" bg-indigo-500 py-2 px-8  text-white rounded-md">Primary</button>
      </div>
      <div className="md:w-1/2 w-full md:order-2 order-1 md:mt-10">
        <img src="./images/bookimage-removebg-preview.png" alt="banner" className="w-92 h-92"/>
      </div>
    </div>
  );
};
  
export default Banner;
