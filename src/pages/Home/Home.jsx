import React from "react";
import "./Home.css";
import OverviewDialog from "../../components/OverviewDialog";
import Carousel from "../../components/Carousel/Carousel";
import Searchbar from "../../components/Searchbar/Searchbar";
import WatchListTable from "../../components/WatchListTable/WatchListTable";

function Home() {
  return (
    <div className="container">
      <h1>Crypto Tracker</h1>
      <OverviewDialog />
      <Carousel />
      <Searchbar />
      <WatchListTable />
    </div>
  );
}

export default Home;
