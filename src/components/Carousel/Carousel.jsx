import React from "react";
import "./Carousel.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { items } from "./CarouselItems";

export default function Carousel() {
  const responsiveItem = {
    0: {
      items: 2,
    },
    1024: {
      items: 4,
      itemsFit: "contain",
    },
  };

  return (
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      disableButtonsControls
      responsive={responsiveItem}
      autoPlay
      items={items}
    />
  );
}
