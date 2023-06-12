import bitcoin from "../../assets/bitcoin.png";
import binance from "../../assets/binance-usd.png";
import dogecoin from "../../assets/dogecoin.png";
import ethereum from "../../assets/ethereum.png";
import internet from "../../assets/internet-computer.png";
import tether from "../../assets/tether.png";
import shiba from "../../assets/shiba-inu.png";
import tron from "../../assets/tron.png";

const carouselHeight = "80vh";

export const items = [
  <img src={bitcoin} alt="bitcoin-logo" height={carouselHeight} />,
  <img src={ethereum} alt="ethereum-logo" height={carouselHeight} />,
  <img src={shiba} alt="shiba-logo" height={carouselHeight} />,
  <img src={tether} alt="tether-logo" height={carouselHeight} />,
  <img src={tron} alt="tron-logo" height={carouselHeight} />,
  <img src={dogecoin} alt="dogecoin-logo" height={carouselHeight} />,
  <img src={binance} alt="binance-logo" height={carouselHeight} />,
  <img src={internet} alt="internet-logo" height={carouselHeight} />,
];
