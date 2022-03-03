import React,{useState} from 'react'
import Navbar from '../layouts/Navbar'
import {Link} from 'react-router-dom'
import { isAuthenticated } from '../auth'
import {createCategory} from './apiAdmin'
import Footer from '../layouts/Footer'



const AddCategory = () => {
    const[category_name,setName]=useState('')
    const [error,setError]=useState(false)
    const [success,setSuccess]=useState(false)

    //destructure user and token from localstorage
    const {user,token} =isAuthenticated()


    const handleChange=(e)=>{
        setError('')
        setName(e.target.value)

    }

    const clickSubmit=(e)=>{
        e.preventDefault()
        setError('')
        setSuccess(false)
        //make request to api to create category
        createCategory(user._id,token,{category_name})
        .then(data=>{
            if(data.error){
                setError(data.error);
            }
            else{
                setError("");
                setSuccess(true);
            }
        }) 

    }

    const showSuccess=()=>{
        if(success){
           return <h5 align="center" className="text-success" >Category is added</h5> 
        }
    }

    const showError=()=>{
        if(error){
            return <h5 align="center" className="text-danger" >{error}</h5>
        }
    }
    return (
        <>

           <Navbar/>
           <br/>

           <div className="banner-top">
	<div className="container">
		<h3 style={{fontFamily:'Optima'}} >Add Category</h3>
		<h4><Link to="/">Home</Link><label>/</label><Link to="/admin/dashboard">Admin Dashboard</Link><label>/</label>Add Category</h4>
		<div className="clearfix"> </div>
	</div>
</div>
<br/> 
<div className=" col-md-5">
<div className="card">
            <h4 className="card-header" style={{fontFamily:'Helvetica'}}><b>Admin Links</b></h4>
           <ul className="list-group" >
           <li className="list-group-item" style={{border:'none'}}>
              <Link className="nav-link" to="/admin/dashboard"><i class="fa fa-user"  aria-hidden="true"></i>Admin Dashboard</Link>
          </li><br/>
          <li className="list-group-item" style={{border:'none'}}>
              <Link className="nav-link" to="/create/category"><i class="fa fa-file"  aria-hidden="true"></i>Create Category</Link>
          </li><br/>
          <li className="list-group-item" style={{border:'none'}}>
              <Link className="nav-link" to="/create/product"><i class="fa fa-book"  aria-hidden="true"></i>Create Products</Link>
          </li>
           </ul>
        </div>
        </div>

<div className="login">
	
    <div className="main-agileits">
            <div className="form-w3agile">
                <h3>Add Category</h3>
                {showError()}
                {showSuccess()}
                <br/>
                <form>
                    <div className="key">
                        
                        <input  type="text"  name="Category"  required="" onChange={handleChange} value={category_name} />
                        <div className="clearfix"></div>
                    </div>
                    <button className="btn btn-success" onClick={clickSubmit}>Add</button>
                    </form>
                    
                    <br/>
            
            </div>
        </div>
    </div>
    <br/>
    <Footer/>
    

        </>
    )
}

export default AddCategory
