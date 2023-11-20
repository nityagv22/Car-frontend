import React from 'react';

const Header = () => {
  const image = require('./black-car.jpg');

  return (
    <header className="header" id="home">
      <div className="header-content">
        <div className="left-column">
          <p className="name">CarConnect</p>
          <p className="desc">Your journey starts here.</p>
        </div>
        <div className="right-column">
          <img src={image} alt="black car" style={{ width: 900, height: 500 }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
