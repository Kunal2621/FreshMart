import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <header className="mb-4">
        <h1>Welcome To Fresh Mart</h1>
        <p>Your one-stop shop for fresh and quality products</p>
      </header>

      <div className="row justify-content-center">
        {/* Veg Section */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <img
              src="/HomeImage/Vegatibales.jpg"
              alt="Veg"
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Vegetables</h5>
              <p className="card-text">Fresh and organic vegetables.</p>
              <button className="btn btn-success" onClick={() => navigate("/veg")}>Visit</button>
            </div>
          </div>
        </div>

        {/* Non-Veg Section */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <img
              src="/HomeImage/NonVeg.jpg"
              alt="NonVeg"
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Non-Vegetarian</h5>
              <p className="card-text">Fresh meat and poultry.</p>
              <button className="btn btn-danger" onClick={() => navigate("/nonVeg")}>Visit</button>
            </div>
          </div>
        </div>

        {/* Milk Section */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <img
              src="/HomeImage/Dairy.jpg"
              alt="Milk"
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Dairy Products</h5>
              <p className="card-text">Fresh milk and dairy items.</p>
              <button className="btn btn-primary" onClick={() => navigate("/milk")}>Visit</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-5">
        <p>© 2025 Fresh Mart. All rights reserved.</p>
        <p>Contact us: <a href="KunalPrajapati2621@gmail.com">KunalPrajapati2621@gmail.com</a></p>
        <p>Call us : 6263389977</p>
        <h1>For support Call Ratan sir </h1>
      </footer>
    </div>
  );
}

export default Home;