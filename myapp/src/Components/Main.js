import React from "react";

const Main = () => {
  return (
    <div>
      <div class="card">
        <div class="card-body p-5 text-center">
          <h5 class="card-title fs-1">Welcome To This Shop</h5>
          <p class="card-text">We're here for purpose Let's achieve It.</p>
        </div>
      </div>

      <div className="container">
        <div className="row py-5">
          <div className="col-lg-3">
            <div class="card">
              <img
                src="https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=600"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Blueetoth AirBuds</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div class="card">
              <img
                src="../img/pexels-pixabay-459653.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">PC</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div class="card">
              <img
                src="../img/pexels-xxss-is-back-777001.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">HD-Computer</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
