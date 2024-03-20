import { Title } from '@mui/icons-material';
import React from 'react';

const Card = ({title,desc,img,btn}) => {
  return (
    <div className='col-md-4 my-4'>
    <div className="card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href="#" className="btn btn-primary w-100 p-2">{btn}</a>
      </div>
    </div>
    </div>
  );
}

export default Card;
