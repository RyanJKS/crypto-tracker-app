import { createContext, useState, useEffect } from "react";
export const CryptoContext = createContext();

export const CryptoContextProvider = (props) => {
  const [watchCrypto, setWatchCrypto] = useState(
    localStorage.getItem("current-crypto")?.split(",") || ["bitcoin"]
  );

  const [isLoading, setIsLoading] = useState(false);
  const [allChartData, setAllChartData] = useState([]);

  useEffect(() => {
    localStorage.setItem("current-crypto", watchCrypto);
  }, [watchCrypto]);

  const addCrypto = (id) => {
    /* if cant find crypto in list, add it to list */
    if (watchCrypto.indexOf(id) === -1) {
      setWatchCrypto([...watchCrypto, id]);
    } else {
      alert("Crypto already in list");
    }
  };

  /* Go through all entry in Crypto. only keep entries that do not match crypto */
  const deleteCrypto = (crypto) => {
    setWatchCrypto(
      watchCrypto?.filter((element) => {
        return element !== crypto;
      })
    );

    if (watchCrypto.length === 0) {
      localStorage.removeItem("current-crypto");
    }
  };

  return (
    <CryptoContext.Provider
      value={{
        watchCrypto,
        addCrypto,
        setWatchCrypto,
        deleteCrypto,
        isLoading,
        setIsLoading,
        allChartData,
        setAllChartData,
      }}
    >
      {props.children}
    </CryptoContext.Provider>
  );
};
