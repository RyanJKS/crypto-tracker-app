import { createContext, useState, useEffect } from "react";
export const CryptoContext = createContext();

export const CryptoContextProvider = (props) => {
  const [watchCrypto, setWatchCrypto] = useState(
    localStorage.getItem("current")?.split(",") || ["ETH", "BTC"]
  );

  useEffect(() => {
    localStorage.setItem("current", watchCrypto);
  }, [watchCrypto]);

  const addCrypto = (crypto) => {
    /* if cant find crypto in list, add it to list */
    if (watchCrypto.indexOf(crypto) === -1) {
      setWatchCrypto([...watchCrypto, crypto]);
    }
  };

  /* Go through all entry in Crypto. only keep entries that do not match crypto */
  const deleteCrypto = (crypto) => {
    setWatchCrypto(
      watchCrypto?.filter((element) => {
        return element !== crypto;
      })
    );
  };

  return (
    <CryptoContext.Provider
      value={{ watchCrypto, addCrypto, setWatchCrypto, deleteCrypto }}
    >
      {props.children}
    </CryptoContext.Provider>
  );
};
