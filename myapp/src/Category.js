import React, { useState } from "react";
import myData from "./Components/Categories";

const Category = () => {
  // Check if myData is an array before attempting to map over it
 /*  if (!Array.isArray(myData)) {
    console.error("myData is not an array");
    return null; // or handle the error in an appropriate way
  } */

  function getRandomPrice(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }

  const [dataInit, setDataInit] = useState(myData);

  const filterOut = (cartItem) => {
    const res = myData.filter((val) => {
      return val.category === cartItem;
    });
    setDataInit(res);
  };

  return (
    <div>
      <h1 className="text-center text-info my-3">Let's shop</h1>
      <div className="container-fluid my-4">
        <div className="row mx-4">
          <div className="col-md-3">
            <button
              className="btn btn-warning w-100 my-3"
              onClick={() => {
                filterOut("Mens");
              }}
            >
              Mens
            </button>
            <button
              className="btn btn-warning w-100 my-3"
              onClick={() => {
                filterOut("womens");
              }}
            >
              Womens
            </button>
            <button
              className="btn btn-warning w-100 my-3"
              onClick={() => {
                filterOut("Children");
              }}
            >
              Children
            </button>
            <button
              className="btn btn-warning w-100 my-3"
              onClick={() => {
                filterOut("Black");
              }}
            >
              Black
            </button>
            <button
              className="btn btn-warning w-100 my-3"
              onClick={() => {
                filterOut("White");
              }}
            >
              White
            </button>
            <button
              className="btn btn-warning w-100 my-3"
              onClick={() => {
                filterOut("Audio");
              }}
            >
              Electronic Audio
            </button>
            <button
              className="btn btn-warning w-100 my-3"
              onClick={() => {
                setDataInit(myData); // Reset to show all data
              }}
            >
              All
            </button>
          </div>
          <div className="col-md-9 mr-3">
            <div className="row">
              {dataInit.map((val) => {
                const { id, img, product, category, price } = val;
                return (
                  <div className="col-md-4 mt-4" key={id}>
                    <div className="card">
                      <img src={img} className="card-img-top" alt={category} />
                      <div className="card-body">
                        <h5 className="card-title fw-500">{product}</h5>
                        <p className="card-text">
                        ${getRandomPrice(price, 100000)}
                        </p>
                        <a href="#" className="btn btn-dark">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
