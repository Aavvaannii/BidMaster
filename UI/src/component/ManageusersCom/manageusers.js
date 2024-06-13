import './manageusers.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api.url';
import { useNavigate } from 'react-router-dom';
//import { update } from '../../../../API/controller/user.controller';

function Manageusers() {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        axios.get(_userapiurl + "fetch?role=user").then((response) => {
            setUserDetails(response.data);
        }).catch((error) => {
            console.log(error);
        });
    });

    const changeStatus = (s, _id) => {


        if (s == 'block') {
            let updateDetails = { "condition_obj": { "_id": _id }, "content_obj": { "status": 0 } };
            axios.patch(_userapiurl + "update", updateDetails).then((response) => {
                alert("User blocked!")
                navigate("/manageusers")
            });
        }

        else if (s == 'verify') {
            let updateDetails = { "condition_obj": { "_id": _id }, "content_obj": { "status": 1 } };
            axios.patch(_userapiurl + "update", updateDetails).then((response) => {
                alert("User Verified")
                navigate("/manageusers")
            });
        }
        else {
            let deleteDetails = { "data":{ "_id": _id }};
            axios.delete(_userapiurl + "delete", deleteDetails).then((response) => {
                alert("user deleted")
                navigate("/manageusers")
            });
        }

    };
    return (
        <>
            {/* About Start */}
            <div class="container-fluid bg-secondary p-0">
                <div class="row g-0">
                    <div class="col-lg-12 py-6 px-5">
                        <h1 class="display-5 mb-4">Welcome To <span class="text-primary">BidMaster ,Manageusers </span></h1>
                        <h4 class="text-primary mb-4">View and Manage user Details</h4>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>UserID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Gender</th>
                                    <th>Info</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {
                                userDetails.map((row) => (
                                    <thead>
                                        <tr>
                                            <td>{row._id}</td>
                                            <td>{row.name}</td>
                                            <td>{row.email}</td>
                                            <td>{row.mobile}</td>
                                            <td>{row.address}</td>
                                            <td>{row.city}</td>
                                            <td>{row.gender}</td>
                                            <td>{row.info}</td>
                                            <td>
                                                {row.status == 1 && <a href="" style={{ "color": "green" }}>Verified</a>}
                                                {row.status == 0 && <a href="" style={{ "color": "red" }}>Block</a>}
                                            </td>
                                            <td>
                                                {row.status == 1 && <a href="" onClick={() => changeStatus('block', row._id)} style={{ "color": "blue" }}>Change Status</a>}
                                                {row.status == 0 && <a href="" onClick={() => changeStatus('verify', row._id)} style={{ "color": "blue" }}>Change Status</a>}
                                                <br />
                                                <a href="" onClick={() => changeStatus('delete', row._id)} style={{ "color": "orange" }}>Delete</a>
                                            </td>
                                        </tr>
                                    </thead>

                                ))
                            }


                        </table>

                    </div>

                </div>
            </div>
            {/* About End */}
        </>
    );
}

export default Manageusers;