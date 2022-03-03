import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddProduct from './components/admin/AddProduct'
import AddCategory from './components/admin/AddCategory'
import AdminDashboard from './components/auth/AdminDashboard'
import AdminRoute from './components/auth/AdminRoute'
import Confirm from './components/auth/Confirm'
import Forgetpassword from './components/auth/Forgetpassword'
import PrivateRoute from './components/auth/PrivateRoute'
import Resetpassword from './components/auth/Resetpassword'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import UserDashboard from './components/auth/UserDashboard'

import Homepage from './components/pages/Homepage'
import ProductDetails from './components/pages/ProductDetails'
import Products from './components/pages/Products'
import Cart from './components/pages/Cart'



const Routes=()=> {
    return (
        <>
                       <Router>
                           <Switch>
                               <Route exact path="/" component={Homepage}/>
                               <Route exact path="/productdetails/:productId" component={ProductDetails}/>
                               <Route exact path="/signup" component={Signup}/>
                               <Route exact path="/signin" component={Signin}/>
                               <Route exact path="/forget/password" component={Forgetpassword}/>
                               <Route exact path="/reset/password/:token"component={Resetpassword}/>
                               <Route exact path="/email/confirmation/:token"component={Confirm}/>
                               <PrivateRoute exact path="/user/dashboard" component={UserDashboard}/>
                               <AdminRoute exact path="/admin/dashboard" component={AdminDashboard}/>
                                <AdminRoute exact path="/create/category" component={AddCategory}/>
                                <AdminRoute exact path="/create/product" component={AddProduct}/>
                                <Route exact path="/products" component={Products}/>
                                <Route exact path="/cart" component={Cart}/>
                                
                            </Switch>
                       </Router>
        </>
    )
}

export default Routes
