import React from "react";

const loader = () => {
  return (
    <div id="overlay" className="loader-page">
      <div className="loader-container">
        <div className="loader-counter">
          <p>0</p>
        </div>
        <div className="loader-text">
          <b>Loading..</b>
        </div>
      </div>
    </div>
  );
};

export default loader;
