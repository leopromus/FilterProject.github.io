import React, { useState, useEffect } from "react";
import "../App.css";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

const SimpleProject = () => {
  const [Num, setNum] = useState(1);
  const [Title, setTitle] = useState([]);
  const [Img, setImg] = useState([]);
  const [Desc, setDesc] = useState([]);

  useEffect(() => {
    const getMyProduct = () => {
      axios
        .get(`https://fakestoreapi.com/products/${Num}`)
        .then((response) => {
          setTitle(response.data.title);
          setImg(response.data.image);
          setDesc(response.data.description);
        })
        .catch((error) => {
          console.error("Error fetching data:", error.message);
        });
    };

    getMyProduct();
  }, [Num]);

  return (
    <div>
      <h1 className="text-center text-info">Pro Shop</h1>
      <div className="container bg-light">
        <select
          value={Num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>

        <p className="prod">
          the product {Num} selected : <FaArrowRight />
        </p>
        <div className="product text-right bg-dark">
          <h2 className="title text-light">{Title}</h2>
          <img src={Img} alt="pro" />
          <p className="desc text-light">{Desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleProject;
