import React from "react";

export default function BooksCards({ data }) {
  return (
    <div className="py-12 " >
      <div className="card md:w-96 w-full shadow-md rounded-lg dark:bg-slate-800 dark:text-white dark:border-t dark:border-b" >
        <figure>
          <img src={data.image} alt="Shoes" />
        </figure>
        <div className="card-body   rounded-b-2xl">
          <h2 className="card-title">
            {data.name}
            <div className="badge badge-secondary">{data.category}</div>
          </h2>
          <p>{data.tittle}</p>
          <div className=" flex justify-between">
            <div className="badge badge-outline">${data.price}</div>
            <div className="badge badge-outline">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}
