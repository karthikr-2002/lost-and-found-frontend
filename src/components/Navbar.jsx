import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LOST AND FOUND</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/add">Add Founded</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">Search Losted</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/delete">Delete Founded</Link>
        </li>

         <li class="nav-item">
          <Link class="nav-link" to="/view">All Losted Items</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>



        </div>
    )
}

export default Navbar