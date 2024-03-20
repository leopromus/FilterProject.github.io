import React from "react";

const Props = (props) => {
  return (
    <div>
      <div className="col-lg-3">
        <div className="card">
          <img src={props.img} className="card-img-top" alt="..." />
          <p>{props.id}</p>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn btn-primary">
              {props.btn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Props;
