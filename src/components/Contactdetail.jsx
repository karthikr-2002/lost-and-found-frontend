import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Contactdetail = () => {


  const location = useLocation();
  const receiverEmail = location.state?.email || ""; // Email of person who found the item


     const [input, changeInput] = useState(
            {
    
                "phno": "",
                "emailid": "",
            }
        )
        const inputHandler = (e) => {
        changeInput({ ...input, [e.target.name]: e.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:4000/sendemail", {
        phno: input.phno,
        emailid: input.emailid,
        to: receiverEmail   // person who found the item
})
        .then(() => alert("They will contact you later"))
        .catch((err) => console.error(err));

    }


    return (
        <div>

            <Navbar />
            <h1><center>Enter Details</center></h1><br />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" name='phno' value={input.phno} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email ID</label>
                                <input type="text" className="form-control" name='emailid' value={input.emailid} onChange={inputHandler} />
                            </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br/><button className="btn btn-primary" onClick={readValues}>Submit</button><br/>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
    )
}

export default Contactdetail