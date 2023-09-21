import React from 'react';
import { Container, Row, Col } from "reactstrap";

import productImg01 from "../../../assets/images/product-1.png"
import productImg02 from "../../../assets/images/product-2.png";
import productImg03 from "../../../assets/images/product-3.png";
import productImg04 from "../../../assets/images/product-4.png";

import "../../../Style/product.css"


const productData = [
    {
        imgUrl: productImg01,
        title:"Chicken Parm",
        price: "$13.99"
    },
    {
        imgUrl: productImg02,
        title: "New Orleans Strip",
        price: "$!3.99"
    },
    {
        imgUrl: productImg03,
        title: "The Sampler (6 Meals)",
        price: "$80.99"
    },
    {
        imgUrl: productImg04,
        title: "The Weekday Warrior(10 Meals)",
        price: "$129.9"
    }
]


const product = () => {
    return (
      <Container>
        <Row>
          <h4 className="title">Trending products</h4>
          <a href="/shopAll" className= "shopAll hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
            Shop All<span aria-hidden="true"> →</span></a>
          {productData.map((item, index) => (
              <Col lg="3" md="6"  key={index} className="mt-6">
                <div className="product__item text-center px-4 py-4">
                  <a href="MealPlans">
                  <img
                    src={item.imgUrl}
                    alt="product-img"
                    className="w-100"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <h6 className="mb-2">{item.price}</h6>
                  </a>
                </div>
              </Col>
             ))}
        </Row>
      </Container>
    );
  };

  export default product;
  