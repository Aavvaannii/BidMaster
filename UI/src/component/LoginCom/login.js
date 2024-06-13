import './login.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api.url';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate(); //instance of useNavigate
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [output, setOutput] = useState();
  
    const handleSubmit = () => {
      const userDetails = {"email": email,"password": password};
      //console.log(userDetails);
      
      axios.post(_userapiurl+"login", userDetails).then((response) => {
        var users = response.data.userDetails;
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("_id",users._id);
        localStorage.setItem("name",users.name);
        localStorage.setItem("email",users.email);
        localStorage.setItem("password",users.password);
        localStorage.setItem("mobile",users.mobile);
        localStorage.setItem("address",users.address);
        localStorage.setItem("city",users.city);
        localStorage.setItem("gender",users.gender);
        localStorage.setItem("info",users.info);
        localStorage.setItem("role",users.role);
        users.role=="admin"?navigate("/admin"):navigate("/user")
      }).catch((error) => {
        setOutput("Invalid user or Verify it");
        setEmail("");
        setPassword("");
      });
      
  
  
    }
  
    return (
        <>

        {/* About Start */}
    <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
            <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">Welcome To <span class="text-primary">BidMaster , Login Page</span></h1>

<form>
  <div class="row g-3">

    <div class="col-12">
      <div class="form-floating">
        <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
        <label for="form-floating-2">Email address</label>
      </div>
    </div>

    <div class="col-12">
      <div class="form-floating">
        <input type="text" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
        <label for="">Password</label>
      </div>
    </div>

    <div class="col-12">
      <button class="btn btn-success" type="button" value="submit" onClick={handleSubmit}>Submit</button>
    </div>

    <p>{output}</p>

  </div>
</form>

            </div>
            
        </div>
    </div>
    {/* About End */}
        </>
    );
}

export default Login;