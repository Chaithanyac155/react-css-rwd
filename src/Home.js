import React from "react";
const Home = () => {
  return (
    <div className="home-section">
      <div className="left-section">
        <h1 className="heading-primary">
          A healthy meal delivered to your door, every single day.
        </h1>
        <p className="home-description">
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </p>
        <a href="#" className="btn btn-fill">
          Start eating well
        </a>
        <a href="#" className="btn btn-outline">
          Learn more
        </a>
      </div>
      <div className="right-section">
        <img
          alt="img"
          className="home-img"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        />
      </div>
    </div>
  );
};

export default Home;
