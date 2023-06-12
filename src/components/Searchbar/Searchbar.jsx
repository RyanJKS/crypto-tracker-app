import React, { useState, useEffect, useContext } from "react";
import "./Searchbar.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CryptoContext } from "../../context/CryptoContext";
import { axiosInstance } from "../../config/config";
import { useLocation } from "react-router-dom";

function Searchbar() {
  const { addCrypto } = useContext(CryptoContext);
  const location = useLocation();

  const [search, setSearch] = useState("");
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    const getCrypto = async () => {
      try {
        let responses = await axiosInstance.get(`/all-coins`);

        if (responses.status === 200) {
          setCryptoList(responses.data);
        }
      } catch (err) {
        console.log("Error getting crypto list");
      }
    };
    if (location.pathname === "/") {
      getCrypto();
    }
  }, []);

  const getSymbol = async (symbol) => {
    addCrypto(symbol);
    setSearch("");
  };

  const showDropdownList = () => {
    if (cryptoList !== undefined && search.length > 0) {
      const filteredCrypto = cryptoList.filter((crypto) => {
        return crypto.name.toLowerCase().includes(search.toLowerCase());
      });

      return (
        /* output list styling for drop down list*/
        <div className="dataResult">
          <ul>
            {filteredCrypto?.map((value, index) => {
              return (
                <li
                  className="dataItem"
                  onClick={() => getSymbol(value.id)}
                  key={index}
                >
                  {value.name.toUpperCase()} ({value.symbol.toUpperCase()})
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        paddingBottom: "2rem",
      }}
    >
      <TextField
        fullWidth
        label="Search for crypto..."
        id="fullWidth"
        margin="normal"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {showDropdownList()}
    </Box>
  );
}

export default Searchbar;
