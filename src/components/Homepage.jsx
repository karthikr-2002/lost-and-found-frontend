import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="container mt-5 text-center">
        <h1 className="display-4 fw-bold">Lost & Found Portal</h1>
        <p className="lead">
          Helping students recover their lost items and return found ones.
        </p>

        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
          <button
            className="btn btn-success btn-lg"
            onClick={() => navigate('/add')}
          >
            Add Found Item
          </button>

          <button
            className="btn btn-primary btn-lg"
            onClick={() => navigate('/search')}
          >
            Search Losted Item
          </button>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/565/565547.png"
          alt="Lost and Found"
          style={{ marginTop: '40px', maxWidth: '300px' }}
        />
      </div>
    </div>
  );
};

export default Homepage;
