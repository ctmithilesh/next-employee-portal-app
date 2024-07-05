"use client";
import Image from "next/image";
import React from "react";

const ViewProductDetails = ({ data }) => {
  console.log("data", data);
  return (
    <>
      {data != null ? (
        <div className="min-h-screen hero bg-base-200">
          <div className="flex-col hero-content lg:flex-row">
            <Image
              alt="img"
              src={data.image}
              className="max-w-sm rounded-lg shadow-2xl"
              width="250"
              height="250"
            />
            <div>
              <h1 className="text-5xl font-bold">{data.title}</h1>
              <p className="py-6">{data.description}</p>
              <button className="btn btn-primary">Add to Cart </button>
            </div>
          </div>
        </div>
      ) : (
        <span>Loading.... </span>
      )}
    </>
  );
};

export default ViewProductDetails;
