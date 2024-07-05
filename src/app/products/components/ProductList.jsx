"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = ({ result }) => {
  const resultCondition = result != null && result.length > 0;
  return (
    <section class="grid grid-cols-4  md:grid-cols-3 gap-4 sm:grid-cols-1">
      {resultCondition ? (
        result.map((item, index) => (
          <div
            className="w-full p-2 m-2 shadow-xl card card-compact bg-base-100"
            key={index}
          >
            <figure>
              <Image src={item.image} alt="Shoes" width="250" height="250" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="justify-end card-actions">
                <Link className="btn btn-primary" href={`products/${item.id}`}>
                  View Details{" "}
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <span>Loading...</span>
      )}
    </section>
  );
};

export default ProductList;
