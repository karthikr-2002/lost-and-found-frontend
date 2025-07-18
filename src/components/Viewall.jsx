import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Viewall = () => {
    const [items, setItems] = useState([]);
    const [isLoading, changeLoading] = useState(true);
    const navigate = useNavigate();

    const fetchData = () => {
        axios.get("http://localhost:4000/viewall")
            .then((response) => {
                changeLoading(false);
                setItems(response.data);
            })
            .catch(() => {
                alert("Something Went Wrong");
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            <h1 className="header text-center my-4">View Lost Items</h1>

            <div className="container mb-5">
                {isLoading ? (
                    <div className="d-flex justify-content-center py-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        {items.map((item, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card h-100 shadow-sm border-0">
                                    <img
                                        src={`http://localhost:4000/${item.image}`}
                                        className="card-img-top"
                                        alt={item.category}
                                        style={{ height: "250px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.category}</h5>
                                        <p className="card-text"><strong>Description:</strong> {item.description}</p>
                                        <p className="card-text"><strong>Place:</strong> {item.place}</p>
                                        <p className="card-text"><strong>Email:</strong> {item.email}</p>
                                        <p className="card-text"><strong>Phone:</strong> {item.phone}</p>
                                        <button
                                            className="btn btn-outline-success w-100"
                                            onClick={() => navigate("/contact", { state: { email: item.email } })}>
                                            Find
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Viewall;
