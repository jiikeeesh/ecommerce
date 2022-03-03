import React,{Fragment} from 'react'
import {Link,withRouter } from 'react-router-dom'
import {signout,isAuthenticated} from '../auth'

const Footer = ({history}) => {
    return (
        <>
            <div className="footer">
	<div className="container">
		<div className="col-md-3 footer-grid">
			<h3>About Us</h3>
			<p>Nam libero tempore, cum soluta nobis est eligendi 
				optio cumque nihil impedit quo minus id quod maxime 
				placeat facere possimus.</p>
		</div>
		<div className="col-md-3 footer-grid ">
			<h3>Menu</h3>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="kitchen.html">Kitchen</Link></li>
				<li><Link to="care.html">Personal Care</Link></li>
				<li><Link to="hold.html">Household</Link></li>						 
				<li><Link to="codes.html">Short Codes</Link></li> 
				<li><Link to="contact.html">Contact</Link></li>
			</ul>
		</div>
		<div className="col-md-3 footer-grid ">
			<h3>Customer Services</h3>
			<ul>
				<li><Link to="shipping.html">Shipping</Link></li>
				<li><Link to="terms.html">Terms & Conditions</Link></li>
				<li><Link to="faqs.html">Faqs</Link></li>
				<li><Link to="contact.html">Contact</Link></li>
				<li><Link to="offer.html">Online Shopping</Link></li>						 
				 
			</ul>
		</div>
		<div className="col-md-3 footer-grid">
			<h3>My Account</h3>
			<ul>
			{!isAuthenticated() &&(
                <Fragment>

            <li><Link to="/signin" >Login</Link></li>
            <li><Link to="/signup" >Register</Link></li>
                
                </Fragment>
           
           )}
           {isAuthenticated() && isAuthenticated().user.role===0 &&(
               <li>
                   <Link to="/user/dashboard">Profile</Link>
                                  </li>
           )}
           {isAuthenticated() && isAuthenticated().user.role===1 &&(
               <li>
                   <Link to="/admin/dashboard">Admin Dashboard</Link>
               </li>
           )}
           {isAuthenticated() &&(
               <Fragment>
                  <li> <Link   
                   onClick={()=>signout(()=>{
                       history.push('/');
                   })}>
                       
                       Sign Out
                       

                   </Link></li>
               </Fragment>
           )}

				<li><Link to="wishlist.html">Wishlist</Link></li>
				
			</ul>
		</div>
		<div className="clearfix"></div>
			<div className="footer-bottom">
				<h2 ><Link to="/"><b>T<br/>H<br/>E</b>What a Store<span>The Best Gunsmith</span></Link></h2>
				<p className="fo-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
				<ul className="social-fo">
					<li><Link to="#" className=" face"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
					<li><Link to="#" className=" twi"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
					<li><Link to="#" className=" pin"><i className="fa fa-pinterest-p" aria-hidden="true"></i></Link></li>
					<li><Link to="#" className=" dri"><i className="fa fa-dribbble" aria-hidden="true"></i></Link></li>
				</ul>
				<div className=" address">
					<div className="col-md-4 fo-grid1">
							<p><i className="fa fa-home" aria-hidden="true"></i>12K Street , 45 Building Road Canada.</p>
					</div>
					<div className="col-md-4 fo-grid1">
							<p><i className="fa fa-phone" aria-hidden="true"></i>+1234 758 839 , +1273 748 730</p>	
					</div>
					<div className="col-md-4 fo-grid1">
						<p><Link to="mailto:info@example.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>info@example1.com</Link></p>
					</div>
					<div className="clearfix"></div>
					
					</div>
			</div>
		<div className="copy-right">
			<p> &copy; 2016 Big store. All Rights Reserved | Design by  <Link to="http://w3layouts.com/"> W3layouts</Link></p>
		</div>
	</div>
</div>
        </>
    )
}

export default withRouter(Footer)
