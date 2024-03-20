import React from "react";
import Card from "./Card";
import myData from "./dataApi";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-xs-12 col-md-6">
            <h3 className="text-center">About Me</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              earum beatae quaerat soluta voluptatum dicta aliquam ut est
              reprehenderit! Maiores.
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              blanditiis.
            </p>
          </div>

          <div className="col-xs-12 col-md-6">
            <img src="/img/06.jpg" />
          </div>
        </div>
       
       
      </div>
      <h3 className="text-center text-info my-3">Meet Our Team</h3>

      <div className="container">
      <div className="row">
        {myData.map((data) => (
          <Card
            title={data.title}
            desc={data.description}
            img={data.img}
            btn={data.btn}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default About;
