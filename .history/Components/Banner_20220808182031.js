import React from "react";
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src="https://links.papreact.com/gi1" alt="" />
        </div>
        <div>
          <img src="https://links.papreact.com/gi1" alt="" />
        </div>
        <div>
          <img src="https://links.papreact.com/gi1" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
