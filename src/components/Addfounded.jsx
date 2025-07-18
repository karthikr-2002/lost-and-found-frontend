import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import Navbar from './Navbar';


const Addfounded = () => {

    const [input, setInput] = useState({
        category: "",
        description: "",
        place: "",
        email: "",
        phone: "",
        image: null
    });

    const inputHandler = (e) => {
        if (e.target.name === "image") {
            setInput({ ...input, image: e.target.files[0] });
        } else {
            setInput({ ...input, [e.target.name]: e.target.value });
        }
    };

    const readValues = () => {
        if (!input.email.trim()) {
        alert("Email is required");
        return;
    }
    if (!input.category.trim()) {
        alert("Category is required");
        return;
    }

        const formData = new FormData();
        for (let key in input) {
            formData.append(key, input[key]);
        }

        axios.post("http://localhost:4000/found", formData)
            .then(() => {
                alert("Item successfully added to Lost & Found list");
            })
            .catch((err) => {
                console.error(err);
                alert("Failed to add item");
            });
    };
    return (
        <div>
            <Navbar />


            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1><center>FOUND SOMETHING?</center> </h1>
                        <h4 align="center">Fill the details to help others reclaim their belongings</h4><br />
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">Category</label>
                        <input type="text" className="form-control" name='category' value={input.category} onChange={inputHandler} />
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" name='description' value={input.description} onChange={inputHandler} />
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">Place Found</label>
                        <input type="text" className="form-control" name='place' value={input.place} onChange={inputHandler} />
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">Your Email</label>
                        <input type="email" className="form-control" name='email' value={input.email} onChange={inputHandler} placeholder="Enter email like abc@gmail.com"
                        />
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">Your Phone Number</label>
                        <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler} placeholder="Enter 10-digit phone number"
                        />
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">Upload Image</label>
                        <input type="file" className="form-control" name='image' onChange={inputHandler} />
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={readValues}>Submit</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Addfounded