import './cpadmin.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api.url';


function CPAdmin() {

    const [output, setOutput] = useState();
    const [opass, setOldPassword] = useState();
    const [npass, setNewPassword] = useState();
    const [cnpass, setConfirmNewPassword] = useState();

    const handleSubmit = () => {
        axios.get(_userapiurl + "fetch?email=" + localStorage.getItem("email") + "&password=" + opass).then((response) => {
            if (npass == cnpass) {
                let updateDetails = { "condition_obj": { "email": localStorage.getItem("email") }, "content_obj": { "password": cnpass } };
                axios.patch(_userapiurl + "update", updateDetails).then((response) => {
                    setOutput("Password edited successfully....");
                    setOldPassword("");
                    setNewPassword("");
                    setConfirmNewPassword("");
                });
            }
            else {
                setOutput("New & confirm new password mismatch");
                setNewPassword("");
                setConfirmNewPassword("");
            }
        }).catch((err) => {
            setOutput("Invalid old password");
            setOldPassword("");
        });
    };


    return (
        <>
            {/* About Start */}
            <div class="container-fluid bg-secondary p-0">
                <div class="row g-0">
                    <div class="col-lg-12 py-6 px-5">
                        <h1 class="display-5 mb-4">Welcome To <span class="text-primary">BidMaster , Change Password Panel </span></h1>
                        <h4 class="text-primary mb-4">Change Password Here</h4>
                        <font color="blue">{output}</font>
                        <form>
                            <div class="form-group">
                                <label for="opass">Old password:</label>
                                <input type="password" class="form-control" value={opass} onChange={e => setOldPassword(e.target.value)} />
                            </div>
                            <br />
                            <div class="form-group">
                                <label for="npass">New password:</label>
                                <input type="password" class="form-control" value={npass} onChange={e => setNewPassword(e.target.value)} />
                            </div>
                            <br />
                            <div class="form-group">
                                <label for="cnpass">Confirm new password:</label>
                                <input type="password" class="form-control" value={cnpass} onChange={e => setConfirmNewPassword(e.target.value)} />
                            </div>
                            <br />
                            <button type="button" class="btn btn-success" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>

                </div>
            </div>
            {/* About End */}
        </>
    );
}

export default CPAdmin;