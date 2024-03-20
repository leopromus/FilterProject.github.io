import React from "react";

//import '../node_modules/bootstrap/dist/css/'
// comp1.js
import "bootstrap/dist/css/bootstrap.min.css";
// ... other imports and code

import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";





import "./index.css";

const sub = "Hello_I_am_Real ):";
const Squarenum = (n1, n2) => {
  return Math.pow(n1, n2);
};

const Comp = () => {
  return (
    <div>
    <div className="text-center">
    
  
   <div> <a href="#"> 
   <FaHome className="icons"/>
  Home</a></div>
 
   <div>
   <a href="#">
   <FaPeopleGroup />
  
   About</a></div>
  
   <div> 
   <a href="#"><BsPersonWorkspace />
   
   Services</a></div>
  
   <div> 
   <a href="#">
   
 <MdContactPhone />
   Contact Us</a></div>
   
   <div>
   <a href="#">
   
   <GrAchievement />
   Portfolio</a>
   </div>
    </div>
      <h1 className="text-center my-5">Top 10+ valentine flowers </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Rose Flower</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/827106/pexels-photo-827106.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Toy Flower</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/839442/pexels-photo-839442.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Flavor Flower</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/827107/pexels-photo-827107.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">wow Flower</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  );
};

//export default comp;
// comp1.js
export { Comp };
// ... other exports and code
