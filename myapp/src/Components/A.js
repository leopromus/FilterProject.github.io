import React,{useContext} from 'react';
import { MyFavColor } from '../index';

const A = () => {
    const myColor = useContext(MyFavColor);
  return (
    <div>
      
<h1>hello {myColor} is the most i like</h1>

    </div>
  );
}

export default A;
