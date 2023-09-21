
import React from 'react';
import Helmet from '../Component/Helmet/Helmet.js'
import { Container, Row, Col } from 'reactstrap'
import { Link } from "react-router-dom";

import "../Style/hero-section.css"

import Category from "../Component/Ui/category/Category.jsx";
import Feature from "../Component/Ui/feature/Feature.jsx";
import Product from  "../Component/Ui/product/Product.jsx";
import Testimonial from "../Component/Ui/testimonial/Testimonial.jsx";



const Home = () => {
    return ( <Helmet title="Home">
        <section>
            <Container>
                <Row>
                    <Col lg="12" md="12">  
                        
                        <div className="hero__content text-center">
                             
                            <h1 className="mb-4 hero__title">
                                <span>Cuisine for the <br/> Culture </span>
                            </h1>
                            <p>
                            We're a national Black-owned food company that curates
                             healthy <br/>ready-to-eat meals with a balanced macronutrient ratio.
                            </p>
                            
                            <div className="hero__btns d-flex align-items-center gap-5 mt-4 justify-content-center">
                                
                                <button className="order__btn d-flex align-items-center">
                                    Order Now <i class="ri-arrow-right-s-line"></i>
                                </button>

                                <button className="play__video">
                                    <Link to="https://youtu.be/Z4qsi_JvKSw">
                                        <i class="ri-play-circle-line">Play Video</i>
                                    </Link>
                                </button>
                            
                            </div>
                            <h1 className="mb-4 hero__title">
                                <p>Already have an account?<span> Log in </span></p>
                            </h1>    
                                <p>By continuing, you agree to our Terms of Use  and 
                                 Privacy Policy and you will receive emails from MacroBites.</p>    
                           </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="pt-0">
            <Category />
        </section>

        <section className="why-choose-us">
            <Feature />
        </section>

        <section>
            <Product/>
        </section>

        <section>
            <Testimonial />
        </section>


    </Helmet>
    );
};

export default Home;