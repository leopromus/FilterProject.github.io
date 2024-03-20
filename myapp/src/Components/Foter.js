import React from 'react';
import { NavLink } from 'react-router-dom';

const Foter = () => {
  return (
    <div>
    <div class="card text-center bg-dark text-light">
    <div class="card-header">
     Our Footer
    </div>
    <div class="card-body">
      <h5 class="card-title">Visit Our Social Links Below</h5>
      <p className="card-text">
            My Love from Diaspora  💌 
          </p>
         <NavLink to={"/"}><button className="btn btn-primary">Home Page</button>
         </NavLink> 
     </div>
  </div>
    </div>
  );
}

export default Foter;
