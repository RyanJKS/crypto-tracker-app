import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../../config/config";
import { CryptoContext } from "../../context/CryptoContext";
import { FilterMarketData } from "./Filter";
import WatchListTable from "./WatchListTable";

function WatchList() {
  const { watchCrypto } = useContext(CryptoContext);
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    const getQuotes = async () => {
      try {
        let allResponses = await axios.all(
          watchCrypto.map((crypto) =>
            axiosInstance.get(`/quote/${crypto}`, {
              cancelToken: cancelToken.token,
            })
          )
        );

        let resFilter = allResponses.filter((x) => x.status === 200);
        if (resFilter.length !== allResponses.length) {
          alert("You do not have access to this crypto quote.");
          watchCrypto.splice(-1);
          localStorage.setItem("current-crypto", watchCrypto);
        }
        const dataStuff = FilterMarketData(resFilter);

        setCryptoData(dataStuff);
      } catch (err) {
        if (axios.isCancel(err)) console.log("cancelled!");
      }
    };
    getQuotes();
    return () => {
      cancelToken.cancel();
    };
  }, [watchCrypto]);

  return <WatchListTable cryptoData={cryptoData} />;
}

export default WatchList;
