import './addcategory.css';
import { useEffect , useState } from 'react'
import axios from 'axios';
import { _categoryapiurl } from '../../api.url';


function Addcategory() {

    const[file,setFile]= useState();
    const[catName, setCatName]=useState();
    const[output, setOutput]= useState();

    const handleChange=(event)=>{
    setFile(event.target.files[0]);
    }

    const handleSubmit=(event)=>{

        event.preventDefault();
        var formData = new FormData();
        formData.append('catnm',catName);
        formData.append('caticon',file);
        const config = {
            'content-type': 'multipart/form-data'
        };
        axios.post(_categoryapiurl+"save",formData, config).then((response)=>{
            setCatName("");
            setOutput("Category added successfully");
        }); 
            

        
        
    }
    return (
        <>
            {/* About Start */}
            <div class="container-fluid bg-secondary p-0">
                <div class="row g-0">
                    <div class="col-lg-12 py-6 px-5">
                        <h1 class="display-5 mb-4">Add Category here<span class="text-primary"> </span></h1>
                        <font style={{ "color": "blue" }} >{output}</font>
                        <form>
                            <div class="form-group">
                                <label for="catnm">Category Name:</label>
                                <input type="text" class="form-control" value={catName} onChange={e => setCatName(e.target.value)} />
                            </div>
                            <br />
                            <div class="form-group">
                                <label for="file">Category Icon:</label>
                                <input type="file" class="form-control" onChange={handleChange} />
                            </div>
                            <br />
                            <button onClick={handleSubmit} type="button" class="btn btn-danger">Add Category</button>
                            <br /><br />
                        </form>

                    </div>

                </div>
            </div>
            {/* About End */}
        </>
    );
}

export default Addcategory;