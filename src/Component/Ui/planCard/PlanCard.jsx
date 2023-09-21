import React from 'react'




const pricePlans =[
    {
        title: "PRO",
        display: "6-9 meals",
        currency: "$",
        price: "68",
        frequency: "/month",
        fetures: [
            'Monthly or Bi-Monthly',
            '$11.33 per meal,'
        ],
        cta: 'Get Started',
    },
    {
        title: "SUPER",
        display: "10-14 meals",
        currency: "$",
        price: "97",
        frequency: "/month",
        features: [
            'Monthly or Bi-Monthly',
            '$9.70 per meal',
        ],
        cta: 'Get Started',
    },
    {
        title:"WARRIOR",
        display: "15-20 meals",
        currency: "$",
        price: "179",
        frequency: "/month",
        features: [
            'Monthly or Bi-Monthly',
            '$8.95 per meals',
        ],
        cta: 'Get Started',
    },

];

const planCard= () => {
    return(
        <div className="grid grid-cols">
            {pricePlans.map((plan)=> {
                <div key={plan.title} className="border">{plan.title}</div>
            })}
        </div>
        
    );

}

export default planCard;