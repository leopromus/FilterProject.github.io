import React from "react";

const MyName = ({ idCategory, strCategory, strCategoryThumb, strCategoryDescription }) => {
  return (
    <div className="my-3">
      {/* Card */}
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card w-50 my-2">
          <img src={strCategoryThumb} className="card-img-top" alt="..." />
          <div className="card-body mb-0">
            <h5 className="card-title">{idCategory}</h5>
            <h6 className="card-title">{strCategory}</h6>
            <p className="card-text">{strCategoryDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyName;
