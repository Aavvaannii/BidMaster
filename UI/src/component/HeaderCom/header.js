import './header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Auth from '../AuthCom/auth';


function Header() {

    const [HeaderContent, setHeaderContent] = useState();
    useEffect(() => {
        if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "admin") {

            setHeaderContent(<>
                <div class="collapse navbar-collapse" id="navbarCollapse">
               <div class="navbar-nav ms-auto py-0 me-n3">
                   <Link class="nav-item nav-link active" to="/admin">Admin Home</Link>
                   <Link class="nav-item nav-link" to="/manageusers">Manageusers</Link>
                   <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Settings</a>
                <div class="dropdown-menu m-0">

                <Link style={{"color":"black"}} class="nav-item nav-link" to="/epadmin">Edit Profile</Link>
                <Link style={{"color":"black"}} class="nav-item nav-link" to="/cpadmin">Change Password</Link>
                </div>
            </div>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage Category</a>
                <div class="dropdown-menu m-0">

                <Link  class="nav-item nav-link" to="/addcategory">Add Category</Link>
                <Link class="nav-item nav-link" to="/addsubcategory">Add SubCategory</Link>
                </div>
            </div>
                
                   <a class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
               </div>
           </div>
               
               </>)
        }
        else if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "user") {
         setHeaderContent(<>
         <div class="collapse navbar-collapse" id="navbarCollapse">
               <div class="navbar-nav ms-auto py-0 me-n3">
                   <Link class="nav-item nav-link active" to="/">user Home</Link>
                   <Link class="nav-item nav-link" to="/manageusers">Manageusers</Link>
                   <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Settings</a>
                <div class="dropdown-menu m-0">

                <Link  class="nav-item nav-link" to="/epuser">Edit Profile</Link>
                <Link class="nav-item nav-link" to="/cpuser">Change Password</Link>
                </div>
            </div>
                
            
                   <a class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
               </div>
           </div>
         </>)
        }
        else {

        setHeaderContent(<>
         <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0 me-n3">
            <Link class="nav-item nav-link active" to="/">Home</Link>
            <Link class="nav-item nav-link active" to="/about">About</Link>
            <Link class="nav-item nav-link active" to="/contact">Contact</Link>
            <Link class="nav-item nav-link active" to="/service">Service</Link>
            <Link class="nav-item nav-link active" to="/register">Register</Link>

            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div class="dropdown-menu m-0">

                    <a href="" class="dropdown-item">The Team</a>
                    <a href="" class="dropdown-item">Testimonial</a>
                </div>
            </div>
            <a class="nav-item nav-link"><Link to="/login">Login</Link></a>
        </div>
    </div>
        
        </>)
        }

    });
    return (
        <>
        < Auth />
            {/* Navbar Start */}
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <a href="index.html" class="navbar-brand p-0">
                    <h1 class="m-0 text-primary"><i class="fas fa-gavel"></i>BidMaster</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                { HeaderContent }
            </nav>
            {/* Navbar End */}

        </>
    );
}

export default Header;