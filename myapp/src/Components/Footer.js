import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
   <div className="card text-center bg-dark text-light">
        <div className="card-body">
          <h5 className="card-title">Visit Our Social Links Below</h5>
          <p className="card-text">
            My Love from Diaspora  💌 
          </p>
          <p className="text-center fs-2">
            Copyright <FaRegCopyright className="fs-4" />
            Promis,29 february 2024
          </p>
        </div>
    </div>
  );
};

export default Footer;
