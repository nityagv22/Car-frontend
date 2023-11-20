import React from 'react';
import { FaCar, FaCheck } from 'react-icons/fa';

import { Card, CardBody } from 'react-bootstrap';

const AboutSection = () => {

  return (
    <Card style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', backgroundColor: 'black'}}>
      <CardBody>
        <Card.Text>
        <div className="about-section" style={{borderRadius: '20px'}}>
      <div className="about-header ps-4">
        <FaCar icon="car" className="fa-icon" size= "26px" />
        <h1 className='pt-2'>About CarConnect</h1>
      </div>

      <div className="about-content">
        <p>CarConnect is a leading car rental company in Hyderabad, India. We offer a wide range of cars to rent, from economy cars to luxury cars. We are also the only car rental company in Hyderabad that offers a 24/7 customer support service.</p>

        <p>Our mission is to provide our customers with the best possible car rental experience. We believe that renting a car should be easy, convenient, and affordable. That's why we offer a wide range of cars to rent, at competitive prices. We also offer a variety of rental options, including hourly, daily, weekly, and monthly rentals.</p>

        <p>We are committed to providing our customers with the highest level of customer service. We have a team of experienced and knowledgeable staff who are always available to help our customers with their car rental needs. We also offer a 24/7 customer support service, so you can always reach us if you have any questions or concerns.</p>
      </div>

      <div className="about-call-to-action pt-0">
        <h1>Why Choose CarConnect?</h1>

        <ul>
          <li><FaCheck icon="check" className="fa-icon" /> We offer a wide range of cars to rent, from economy cars to luxury cars.</li>
          <li><FaCheck icon="check" className="fa-icon" /> We are the only car rental company in Hyderabad that offers a 24/7 customer support service.</li>
          <li><FaCheck icon="check" className="fa-icon" /> We have a team of experienced and knowledgeable staff who are always available to help our customers.</li>
          <li><FaCheck icon="check" className="fa-icon" /> We offer a variety of rental options, including hourly, daily, weekly, and monthly rentals.</li>
          <li><FaCheck icon="check" className="fa-icon" /> We are committed to providing our customers with the best possible car rental experience.</li>
        </ul>
      </div>
    </div>
        </Card.Text>
      </CardBody>
    </Card>
  );
};

export default AboutSection;

