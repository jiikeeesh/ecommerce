import React from 'react'
import Navbar from '../layouts/Navbar'
import {isAuthenticated} from './index'
import {Link} from 'react-router-dom'
import Footer from '../layouts/Footer'


const AdminDashboard = () => {
    const {user:{name,email,role}}=isAuthenticated()
    
    return (
        <>
        <Navbar/>
        <br/>
        <div className="banner-top">
	<div className="container">
		<h3 style={{fontFamily:'Optima'}} >Admin Dashboard</h3>
		<h4><Link to="/">Home</Link><label>/</label>Admin Dashboard</h4>
		<div className="clearfix"> </div>
	</div>
</div>
        <br/>
        <div className="container">
        <div className="row">
            <div className="col-md-12">
            
            <div className="card">
            <h4 className="card-header" style={{fontFamily:'Helvetica'}}><b>Admin Links</b></h4>
           <ul className="list-group" >
          <li className="list-group-item" style={{border:'none'}}>
              <Link className="nav-link" to="/create/category"><i class="fa fa-file"  aria-hidden="true"></i>Create Category</Link>
          </li><br/>
          <li className="list-group-item" style={{border:'none'}}>
              <Link className="nav-link" to="/create/product"><i class="fa fa-book"  aria-hidden="true"></i>Create Products</Link>
          </li>
           </ul>
        </div>

            </div>
            <div className="col-md-12" >
            <div className="card mb-5" style={{float:'right',border:'solid black 1px'}}>
    <div className="banner-top">
    <h3 className="card-header"><b>User Information</b></h3>
    </div>
    <ul className="list-group">
        <li className="list-group-item" style={{border:'none',fontFamily:'Calibri'}}>User Name : {name}</li>
        <br/>
        
        <li className="list-group-item"  style={{border:'none',fontFamily:'Calibri'}}>Email : {email}</li><br/>
        <li className="list-group-item "  style={{border:'none',fontFamily:'Calibri'}}>Role : {role===1 ? 'Admin':'Registered User'}</li>

    </ul>
</div>

 

            </div>
        </div>
        
 </div>
 <br/>
 <Footer/>
            
        </>
    )
}

export default AdminDashboard
