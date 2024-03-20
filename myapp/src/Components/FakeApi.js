import React, { useEffect, useState } from 'react';

//import './App.css';import React, { useEffect, useState } from 'react';
//import './App.css';


const FakeApi = ()=>{

    const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const myData = await fetch("https://fakestoreapi.com/products");
    const convData = await myData.json();
    setFakeData(convData);
  };

    return (
        <div>
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Fake Store</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
    
          {/* Main Content */}
          <div className="container mt-4 d-flex flex-wrap justify-content-center bg-dark p-4">
            {fakeData.map((val) => (
              <div key={val.id} className="card m-2" style={{ width: '15rem' }}>
                <img src={val.image} className="card-img-top img-fluid my-5" alt={`Product: ${val.title}`} style={{ maxHeight: '90px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  <p className="card-text"><b>Category: </b>{val.category}</p>
                  <p className="card-text"><b>Description:</b> {val.description}</p>
                  <p className="card-text"><b>Price: $</b>{val.price}</p>
                  <p className="card-text"><b>Rating: </b>{val.rating.rate}</p>
                </div>
              </div>
            ))}
          </div>
    
          {/* Footer */}
          <footer className="bg-dark text-light text-center py-3 mt-4">
            &copy; 2024 Fake Store. All rights reserved.
          </footer>
        </div>
      );


}
export default FakeApi; 

