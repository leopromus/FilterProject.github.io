import React from 'react';

const Address = () => {
  return (
    <div>
     <h1 className='text-center text-info'>Contact Us</h1>
     <div className='container d-flex flex-column'>

     <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Names</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your names"/>
</div>

<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Email address</label>
<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Address"/>
</div>

<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Phone</label>
<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="enter your mobile phone"/>
</div>

<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Password</label>
<input type="password" className="form-control" id="exampleFormControlInput1" placeholder="enter your password"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className="btn btn-primary" type="submit">Send</button>

     
     </div>
    </div>
  );
}

export default Address;
