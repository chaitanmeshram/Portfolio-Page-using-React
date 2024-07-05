import React from "react";
import Card from "./Container/Cards";



export default function Data() {
    const data = [
        {
            img_url: "https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png",
            discription: "GitHub profile Page",
            title: "GitHub",
            source_code: "https://github.com/chaitanmeshram?tab=repositories"
        },
        {
            img_url: "https://raw.githubusercontent.com/chaitanmeshram/Portfolio-Page-using-React/main/WebD/dog_v.jpg",
            discription: "Machine Learning Model for Dog Breed Prediction",
            title: "Dog Breed Classification",
            source_code: "https://github.com/chaitanmeshram/Dog-Breed-Classification-Model"
        },
        {
            img_url: "https://raw.githubusercontent.com/chaitanmeshram/Portfolio-Page-using-React/main/WebD/WhatsApp%20Image%202024-06-30%20at%2005.39.43_c86fd385.jpg",
            discription: "Django based weather app using openWeather API",
            title: "Weather App",
            source_code: "https://github.com/chaitanmeshram/Weather-App"
        },
        {
            img_url: "https://raw.githubusercontent.com/chaitanmeshram/Portfolio-Page-using-React/main/WebD/WhatsApp%20Image%202024-06-30%20at%2005.39.43_7a28a46c.jpg",
            discription: "Tableau dashboards for insights into company's performance",
            title: "Sales & Customers Dashboard using Tableau",
            source_code: "https://public.tableau.com/app/profile/chaitan.meshram/viz/SalesCustomerDashboards_17182205091000/SalesDashboard"
        },
        {
            img_url: "https://raw.githubusercontent.com/chaitanmeshram/Portfolio-Page-using-React/main/WebD/WhatsApp%20Image%202024-06-30%20at%2005.39.44_2d635770.jpg",
            discription: "Python model for strain measurement in elongated/compressed samples",
            title: "Optical Sensor",
            source_code: "https://github.com/chaitanmeshram/Optical-Sensor-For-Strain-Measurement-"
        },
        {
            img_url: "https://raw.githubusercontent.com/chaitanmeshram/Portfolio-Page-using-React/main/WebD/WhatsApp%20Image%202024-07-04%20at%2015.32.32_c77cba9d.jpg",
            discription: "Keeps track for Income, Expenditure and Available Amount within local storage",
            title: "Expenses Calculator",
            source_code: "https://github.com/chaitanmeshram/Finance-Tracker"
        }
        
    ];

    return (
        <div className="card__li">
            {data.map((item) => (
                <Card
                    key={item.title}
                    img_url={item.img_url}
                    discription={item.discription}
                    title={item.title}
                    source_code={item.source_code}
                />
            ))}
        </div>
    );
}
