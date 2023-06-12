import React from "react";
import "./Home.css";
import OverviewDialog from "../../components/OverviewDialog";
import Carousel from "../../components/Carousel/Carousel";
import Searchbar from "../../components/Searchbar/Searchbar";
import WatchList from "../../components/WatchListTable/WatchList";

function Home() {
  return (
    <div className="container">
      <h1 className="title">Crypto Tracker</h1>
      <OverviewDialog />
      <Carousel />
      <Searchbar />
      <WatchList />
    </div>
  );
}

export default Home;
