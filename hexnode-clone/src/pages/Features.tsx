import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="col-md-4 d-flex align-items-stretch">
      <div className="card border-0 shadow p-3">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const cardData: CardProps[] = [
    {
      image: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fzero-touch.jpg&w=384&q=100",
      title: "Zero-touch Enrollment",
      description:
        "Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.",
    },
    {
      image: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fautomation.jpg&w=384&q=100",
      title: "Automation",
      description:
        "Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.",
    },
    {
      image: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fremote-access.jpg&w=384&q=100",
      title: "Remote Access Management",
      description:
        "Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.",
    },
    {
      image: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fendpoint-security.jpg&w=384&q=100",
      title: "Endpoint Security and Compliance",
      description:
      "Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.",
    },
    {
      image: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fintegrations.jpg&w=384&q=100",
      title: "Integrations",
      description:
      "Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business Manager, and many more enterprise and technology integrations.",
    },
    {
      image: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fapp-management.jpg&w=384&q=100",
      title: "App Management",
      description:
      "Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.",
    },
  ];

  return (
    <section className="container my-5" id="Features">
      <h2 className="text-center fw-bold" >
        Powerful endpoint management, built for the devices you choose
      </h2>
      <div className="row g-4">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Features;
