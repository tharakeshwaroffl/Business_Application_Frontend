import React from "react";
import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-apps-line",
    title: "Comprehensive Audit Solutions",
    desc: "Comprehensive Audit Solutions offers thorough financial audits, ensuring compliance, accuracy, and transparency to enhance trust and performance in your business.",
  },

  {
    icon: "ri-code-s-slash-line",
    title: "Risk Management Services",
    desc: "Risk Management Services identify, assess, and mitigate potential risks to protect assets, ensure compliance, and safeguard business continuity.",
  },

  {
    icon: "ri-landscape-line",
    title: "Graphics Design",
    desc: "Lorem ipsum dolor, sit amet  elit. quis quae numquam quas ullam harum natus explicabo velit atque!",
  },

  {
    icon: "ri-rocket-line",
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor, sit amet  elit. quis quae numquam quas ullam harum natus explicabo velit atque!",
  },
];

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h2 className="highlight"> our best services</h2>
        </div>

        <div className="service__item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services__item" key={index}>
              <span className="service__icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service__title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
