import React from 'react';
import {MyFavMovie} from "../index"
const C = () => {
  return (
    <div>
      <MyFavMovie>{(myMovie)=>{
      return `my favorite movie is ${myMovie}`  
      }}</MyFavMovie>
    </div>
  );
}

export default C;
