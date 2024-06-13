import './register.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api.url';

function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [output, setOutput] = useState();

  const handleSubmit = () => {
    const userDetails = {
      "name": name, "email": email,
      "password": password, "mobile": mobile, "address": address, "city": city, "gender": gender
    }
    //console.log(userDetails);
    
    axios.post(_userapiurl+"save", userDetails).then((response) => {

      setOutput("User has been registered.......");
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setAddress("");
      setCity("");
      setGender("");

    }).catch((error) => {
      console.log(error);
    });
    


  }

  return (
    <>
      {/* About Start */}
      <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
          <div class="col-lg-12 py-6 px-5">
            <h1 class="display-5 mb-4">Welcome To <span class="text-primary">BidMaster , Register Here </span></h1>


            <form>
              <div class="row g-3">

                <div class="col-12">
                  <div class="form-floating">
                    <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} />
                    <label for="form-floating-1">Full Name</label>
                  </div>
                </div>

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
                  <div class="form-floating">
                    <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
                    <label for="form-floating-3">Mobile</label>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-floating">
                    <textarea class="form-control" style={{ "height": "150px" }} value={address} onChange={e => setAddress(e.target.value)} ></textarea>
                    <label for="form-floating-4">Address</label>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-floating">
                    <label for="form-floating-4">City</label>
                    <br />
                    <select class="form-control" value={city} onChange={e => setCity(e.target.value)}>
                      <option>Select city</option>
                      <optgroup label="MP">
                        <option>Bhopal</option>
                        <option>Indore</option>
                        <option>Ujjain</option>
                        <option>Jabalpur</option>
                      </optgroup>
                      <optgroup label="MH">
                        <option>Bombay</option>
                        <option>Pune</option>
                        <option>Nasik</option>
                        <option>Mahabaleshwar</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-floating">
                    <label for="form-floating-3">Gender</label>

                    &nbsp;&nbsp;
                    Male <input type="radio" value="male" name="gender" onChange={e => setGender(e.target.value)} />
                    &nbsp;&nbsp;
                    Female <input type="radio" value="female" name="gender" onChange={e => setGender(e.target.value)} />

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

export default Register;