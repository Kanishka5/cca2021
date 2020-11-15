import React from "react";
import "../components/css/gifLoader.css";
import GifLoader from "react-gif-loader";

const gifLoader = () => {
  return (
    <div className="row">
      <div className="column">
        <GifLoader
          id="loader2"
          loading={true}
          imageSrc="loader.gif"
          imageStyle={{ textAlign: "center", height: "auto", width: "40%" }}
          overlayBackground="rgba(241,250,254,1)"
        />
      </div>
    </div>
  );
};

export default gifLoader;
