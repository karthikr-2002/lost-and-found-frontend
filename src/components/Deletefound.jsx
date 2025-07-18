import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Deletefound = () => {
  


    const [input, setInput] = useState({ category: '' });
    const [results, setResults] = useState([]);
    const [noResults, setNoResults] = useState(false);

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const readValues = () => {
        const category = input.category.trim();
        if (!category) return alert('Please enter a category');

        axios.get(`http://localhost:4000/search/${category}`)
            .then((res) => {
                setResults(res.data);
                setNoResults(res.data.length === 0);
            })
            .catch((err) => {
                console.error(err);
                alert('Search failed');
            });
    };


        const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:4000/found/${id}`);
            alert("Item deleted successfully");

            // Update results after deletion
            setResults(results.filter(item => item._id !== id));
        } catch (error) {
            alert("Error deleting item");
            console.error(error);
        }
    };


  return (
    <div>

        <Navbar />
            <h1><center>Delete Item</center></h1><br />

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label className="form-label">Category</label>
                        <input
                            type="text"
                            className="form-control"
                            name="category"
                            value={input.category}
                            onChange={inputHandler}
                        />
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br /><button className="btn btn-primary" onClick={readValues}>Search</button><br />
                        </div>
                    </div>
                </div>

                <br /> <div className="row g-3">
                    {noResults && (
                        <div className="text-danger text-center">No items found</div>
                    )}
                    {results.map((item, index) => {

                        return (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-13">
                                <div className="card h-100 shadow-sm border-0">
                                    <img
                                        src={`http://localhost:4000/${item.image.replace(/\\/g, '/')}`}
                                        className="card-img-top"
                                        alt={item.category}
                                        style={{ height: "200px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.category}</h5>
                                        <p><strong>Description:</strong> {item.description}</p>
                                        <p><strong>Place:</strong> {item.place}</p>
                                        <p><strong>Phone:</strong> {item.phone}</p>
                                        <p><strong>Email:</strong> {item.email}</p>
                                        <button className="btn btn-outline-danger w-100" onClick={()=>handleDelete(item._id) }>DELETE</button>
                                </div>
                            </div>
                        </div>)

                    
})}
            </div>
        </div>
    </div>
  )
}

export default Deletefound