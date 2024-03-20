import React from 'react';
import { useParams,useLocation } from 'react-router-dom';

const LoginPage = () => {
  const { username } = useParams();
  const loc = useLocation();

  

  return (
    <div>
      <h1 className='text-center my-4'>Hello my name is {username}</h1>

      <p className='mx-5'>{loc.pathname !== `/LoginPage/leopromus` ? 
      (<button className='btn btn-danger px-3'>Login First</button>) : 
      null
    }
    </p>
    </div>
  );
}

export default LoginPage;
