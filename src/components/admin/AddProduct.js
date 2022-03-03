import React,{useState,useEffect} from 'react'
import {getCategories,createProduct} from './apiAdmin'
import Navbar from '../layouts/Navbar'
import {Link} from 'react-router-dom'
import {isAuthenticated} from '../auth'
import Footer from '../layouts/Footer'

const AddProduct = () => {
    const{user,token}=isAuthenticated();
    const [values,setValues]=useState({
        product_name:'',
        product_description:'',
        product_price:'',
        categories:[],
        category:'',
        product_quantity:'',
        product_image:'',
        loading:false,
        error:'',
        success:false,
        redirectToProfile:false,
        formData:''
    })
    const {
        product_name,
        product_description,
        product_price,
        categories,
        category,
        product_quantity,
        loading,
        error,
        success,
        redirectToProfile,
        formData

    } =values;

     //load categories and set form data
     const init=()=>{
        getCategories().then(data=>{
            if(data.error){
                setValues({...values,error:data.error})
            } else{
                setValues({...values,categories:data,formData:new FormData});
            }
        })
    }

    //to send form data
     useEffect(()=>{
       init();
     },[])

    const handleChange=name=>event=>{
        const value= name==='product_image' ? event.target.files[0] : event.target.value
        formData.set(name,value)
        setValues({...values,[name]:value})
    }

    const clickSubmit=(event)=>{
        event.preventDefault()
        setValues({...values,error:'',loading:true});
        createProduct(user._id,token,formData)
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error})
            }else{
                setValues({
                   ...values,name:'',description:'',product_image:'',price:'',quantity:'',
                   loading:false,success:true
                });
            }

        });
    };

    const showError=()=>(
        <div className="alert alert-danger" style={{display: error ? '':'none'}}>
         {error}
        </div>
        
        );
        const showSuccess=()=>(
            <div className="alert alert-info" style={{display:success ? '':'none'}}>
             <h4>product is created!</h4>
            </div>
            
            );
        
            const showLoading=()=>(
                loading && (
                <div className="alert alert-success" >
                 <h4>Loading....</h4>
                </div>
                )
            )
   
    return (
        <>
          <Navbar/>
           <br/>
           
           <div className="banner-top">
	<div className="container">
		<h3 style={{fontFamily:'Optima'}} >Add Product</h3>
		<h4><Link to="/">Home</Link><label>/</label><Link to="/admin/dashboard">Admin Dashboard</Link><label>/</label>Add Product</h4>
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
                <h3>Add Product</h3>
                {showError()}
                {showLoading()}
                {showSuccess()}
                <br/>
                <form>
                    <div className="key">
                        
                        <input   type="text"  name="Product"  required="" placeholder="Product Name" onChange={handleChange('product_name')} value={product_name} />
            
                        <div className="clearfix"></div>
                    </div>
                    <div className="key">
                        
                        <input   type="text"  name="price"  required="" placeholder="Product Price" onChange={handleChange('product_price')} value={product_price}/>
            
                        <div className="clearfix"></div>
                    </div>
                    <div className="key">
                        
                        <input className="form-control"  type="number"  name="price"  required="" placeholder="Product Quantity" style={{border:"none"}} onChange={handleChange('product_quantity')} value={product_quantity} />
            
                        <div className="clearfix"></div>
                    </div>
                    <div className="key">
                        
                        <textarea className="form-control"  type="text"  name="Description"  required="" placeholder="Description" style={{border:"none",resize:'none'}} onChange={handleChange('product_description')} value={product_description}></textarea>
            
                        <div className="clearfix"></div>
                    </div>
                    <div className="key">
                    <select onChange={handleChange('category')} className="form-control" >
                   <option>Please select</option>
                   {categories && categories.map((c,i)=>(
                    <option key={i} value={c._id}>{c.category_name}</option>

                   ))}
                    </select>
                    <div className="clearfix"></div>
                    </div>
                    <div className="key">
                        <input type="file" name="product_image" className="form-control" accept="image/*" style={{border:'none'}}  onChange={handleChange('product_image')}  />
                        <div className="clearfix">

                        </div>

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

export default AddProduct
