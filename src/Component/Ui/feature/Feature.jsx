import React from "react";

import { Container, Row, Col,  } from "reactstrap";

import featureImg01 from "../../../assets/images/meal.svg";
import featureImg02 from "../../../assets/images/delivery.svg";
import featureImg03 from "../../../assets/images/eat-enjoy.svg";


import "../../../Style/feature.css";


const feature = () => {
  return (
    <Container>
      <Row>
        <h4 className="mb-4 feature__title" >Why Choose MacroBites</h4>
        <Col lg="5" md="10" className="mb-4">
          <div className="feature">

        <Col md="12" gap="7" lg="12">
         <div className="feature__item1">
               <img src={featureImg01} alt='feature' />
              <h6>Pick and Chew</h6>
              <p>Choose your favorite meals and order<br/> online or by phone.,
              It's easy to customize your order.</p>
         </div>
        </Col> 
        <Col md="12" gap="8" lg="12">
         <div className="feature__item2">
              <img src={featureImg02} alt='feature2' />
              <h6>Meals Delivered</h6>
              <p>Get prepped meals delivered <br/>straight to your door.</p>
          </div> 
         </Col>

            <Col md="12" gap="6" lg="12">
             <div className="feature__item3">
             <img src={featureImg03} alt='feature3' />
             <h6>Eat and Enjoy</h6>
             <p>No shopping, no cooking, no counting and no cleaning.<br/>Enjoy your healthy meals with your family.</p>
            </div> 
          </Col>

      </div> 
     </Col>
    </Row>
    </Container>
  );
};

export default feature;