import React from 'react';
import Helmet from '../Component/Helmet/Helmet.js'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from "../Component/Ui/common-section/CommonSection";
import PlanCard from "../Component/Ui/planCard/PlanCard.jsx";
import "../Style/mealPlans.css"


const MealPlans = () => {
    return (
    <Helmet title="Meal Plans">
        <CommonSection title="All Foods" />
        <section>
            <Container>
                <Row>
                  <div className="bg-green">
                   <div className="meals__header">
                       <h2>PLANS</h2>
                       <p>We offer anywhere from 6–20 meals per week, starting at <span>$13.99 / meal.
                         The more meals, the more you’ll save!</span>
                         <br/>Meal subscription discounts are automatically applied as you add meals.</p>
                         <span>6-9 meals = $2.66 discount per meal.</span>
                         <br/>
                         <span>10-14 meals = $4.29 discount per meal.</span>
                         <br/>
                         <span>15-20 meals = $5.04 discount per meal.</span>
                    </div>
                    </div>
                </Row>
            </Container>
        </section>
        
        <PlanCard />

        <section>
            
        </section>
    </Helmet>

    );
};

export default MealPlans;