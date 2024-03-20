import React from 'react';
import myData from './dataApi';
import Card from './Card';

const Contact = () => {
  return (
    <div>
    <h3 className="text-center text-info my-3">Our Services</h3>

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
}

export default Contact;
