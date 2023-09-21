import React from "react";

import ava01 from "../../../assets/images/member1.jpeg";
import ava02 from "../../../assets/images/member2.jpeg";
import ava03 from "../../../assets/images/member3.jpeg";

import {Container, Row, Col} from "reactstrap"

import "../../../Style/testimonial.css";

const testimonial = () => {
   return(
    <Container>
      <Row>
      <div className="testimonial">
         <h4>WE ARE NOT JUST A TEAM. WE ARE FAMILY.</h4>
         <p>We thank each and everyone of you for taking the time to listen to
             <br/>our story and support us. You mean everything. We love you.</p>
         <div className="testimonial__content d-flex ">   
        <Col md="4" gap="2" d="flex">   
          <img src={ava01} alt="avatar" className=" rounded w-100 h-80" />
          <h5>David Lewis jr.</h5>
          <span>President</span>
        </Col>
       
        <Col md="4" gap="2" d="flex">
          <img src={ava02} alt="avatar" className=" rounded w-100 h-80" />
          <h5>fritz Georges</h5>
          <span>General Manager</span>
        </Col>
    
        <Col md="4" gap="2" d="flex">
          <img src={ava03} alt="avatar" className=" rounded w-100 h-80" />
         <h5>Jerrette Atkins</h5>
          <span>Executive Chef,CEO</span>
        </Col>
       </div>
      </div>
    </Row>
   </Container>
   )

}
export default testimonial;
