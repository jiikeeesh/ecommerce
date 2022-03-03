import React, { useState, useEffect, Fragment } from 'react'
import { Link,Redirect } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import Card from './Card'
import { read, listRelated } from './uiApi'
import {addItem} from './cartApi'

const ProductDetails = (props) => {
    const [product, setProduct] = useState({})
    const [error, setError] = useState(false)
    const [relatedProduct, setRelatedProduct] = useState([])
	const [redirect, setRedirect] = useState(false);

	const addToCart = () => {
		// console.log('added');
		addItem(product, setRedirect(true));
	};

	const shouldRedirect = redirect => {
		if (redirect) {
			return <Redirect to="/cart" />;
		}
	};

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error)
            }
            else {
                setProduct(data)

                //after fetching single product fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error)
                    }
                    else {
                        setRelatedProduct(data)
                    }
                })
            }
        })
    }

    useEffect(() => {
        const productId = props.match.params.productId
        loadSingleProduct(productId)
    }, [props])
    return (
        <>
            <Navbar />
            <br />

            <div className="banner-top">
                <div className="container">
                    <h3 >{product.product_name}</h3>
                    <h4><Link href="index.html">Home</Link><label>/</label>{product.product_name}</h4>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="single">
                <div className="container">
                    <div className="single-top-main">
                        <div className="col-md-5 single-top">
                            <div className="single-w3agile">

                                <div id="picture-frame">
                                    <img src={`http://localhost:5000/${product.product_image}`} alt="" className="img-responsive" />
                                </div>





                            </div>
                        </div>
                        <div className="col-md-7 single-top-left ">
                            <div className="single-right">
                                <h3>{product.product_name}</h3>


                                <div className="pr-single">
                                    <p className="reduced ">Rs.{product.product_price}</p>
                                </div>
                                <div className="block block-w3">
                                    <div className="starbox small ghosting"> </div>
                                </div>
                                <p className="in-pa">{product.product_description} </p>

                                <ul className="social-top">
                                    <li><Link href="#" className="icon facebook"><i className="fa fa-facebook" aria-hidden="true"></i><span></span></Link></li>
                                    <li><Link href="#" className="icon twitter"><i className="fa fa-twitter" aria-hidden="true"></i><span></span></Link></li>
                                    <li><Link href="#" className="icon pinterest"><i className="fa fa-pinterest-p" aria-hidden="true"></i><span></span></Link></li>
                                    <li><Link href="#" className="icon dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i><span></span></Link></li>
                                </ul>



                                <div className="clearfix"> </div>
                            </div>

<div class="add add-2">
										   <button class="btn btn-danger my-cart-btn my-cart-b" onClick={addToCart}>Add to Cart</button>
										</div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>


                </div>
            </div>
            {relatedProduct.length > 0 && (
                <Fragment>
                    <div class="content-top offer-w3agile">
                        <div className="container ">
                            <div class="spec ">
                                <h3>Related Products</h3>
                                <div className="ser-t">
                                    <b></b>
                                    <span><i></i></span>
                                    <b className="line"></b>
                                </div>
                            </div>
                            <div className="col-w31 wthree-of">


                                {relatedProduct.map((product, i) => (
                                    <Card key={i} product={product} />
                                ))}
                            </div>


                        </div>
                    </div>

                </Fragment>
				
            )}
			<Footer/>
        </>
    )
}

export default ProductDetails