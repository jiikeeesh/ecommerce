import React,{useState} from 'react'
import Navbar from '../layouts/Navbar'
import {Link} from 'react-router-dom'
import {signup} from './index'
import Footer from '../layouts/Footer'

const Signup = () => {
	const [values,setValues]=useState({
		name:'',email:'',password:'',error:'',success:false
	})
	const {name,email,password,error,success}=values

	const handleChange=name=>event=>{
		setValues({...values,[name]:event.target.value})
	}

	const clickSubmit=event=>{
		event.preventDefault()
		setValues({...values,error:false})
		signup({name,email,password})
		.then(data=>{
			if(data.error){
				setValues({...values,error:data.error,success:false})
			}
			else{
				setValues({...values,name:'',email:'',password:'',error:'',success:true})
			}
			
		})
	}

	const showSuccessMsg=()=>(
		<div className="alert alert-success" style={{display:success?'':'none'}}>
				<h5>Account has been created, verify your account before login</h5>
		</div>
	)

	const showErrorMsg=()=>(
		<div className="alert alert-danger" style={{display:error?'':'none'}}>
				{error}
		</div>
	)

    return (
        <>
         <Navbar/>
         <br/>
         
<div className="banner-top">
	<div className="container">
		<h3 >Register</h3>
		<h4><Link to="/">Home</Link><label>/</label>Register</h4>
		<div className="clearfix"> </div>
	</div>
</div>



	<div className="login">
		<div className="main-agileits">
				<div className="form-w3agile form1">
					<h3>Register</h3>
					{showErrorMsg()}
					{showSuccessMsg()}
					<form >
						<div className="key">
							<i className="fa fa-user" aria-hidden="true"></i>
							<input  type="text"  name="Username"  required="" onChange={handleChange('name')} value={name}/>
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<input  type="text"  name="Email"  required="" onChange={handleChange('email')} value={email}/>
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-lock" aria-hidden="true"></i>
							<input  type="password"  name="Password"  required="" onChange={handleChange('password')} value={password}/>
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-lock" aria-hidden="true"></i>
							<input  type="password"  name="Confirm Password"  required=""/>
							<div className="clearfix"></div>
						</div>
						<button className="btn btn-primary" onClick={clickSubmit}>Sign Up</button>
					</form>
				</div>
                <br/>
                <div className="forg">
                <Link to="/signin" className="forg-right">Login</Link>
            <div className="clearfix"></div>
            </div>
				
			</div>
		</div> 
		<br/>
		<Footer/>  
        </>
    )
}

export default Signup
