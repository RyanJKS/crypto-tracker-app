import React, { useContext } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";
import { AiFillCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { CryptoContext } from "../../context/CryptoContext";
import { useNavigate } from "react-router-dom";
import { ConvertNumber } from "./Filter";

const colorStyle = (change) => {
  return change > 0 ? " #60B45A" : "#ff0000";
};

const directionIcon = (direction) => {
  return direction > 0 ? <AiFillCaretUp /> : <AiOutlineCaretDown />;
};

function WatchListTable({ cryptoData }) {
  const { deleteCrypto } = useContext(CryptoContext);
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Coin</TableCell>
            <TableCell>Current Price</TableCell>
            <TableCell>24h (%)</TableCell>
            <TableCell>7d (%)</TableCell>
            <TableCell>Volume</TableCell>
            <TableCell>Market Cap</TableCell>
            <TableCell>Circulating Supply</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{ "& tr:nth-of-type(2n+1)": { backgroundColor: "grey.100" } }}
        >
          {cryptoData?.map((item, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <img src={item.image} alt="logo" width="25px" height="25px" />{" "}
                <span>{item.name}</span>
              </TableCell>
              <TableCell>£ {item.currentPrice}</TableCell>
              <TableCell
                sx={{ color: colorStyle(item.pricePercentageChange24h) }}
              >
                {item.pricePercentageChange24h.toFixed(2)}{" "}
                {directionIcon(item.pricePercentageChange24h)}
              </TableCell>
              <TableCell
                sx={{ color: colorStyle(item.pricePercentageChange7d) }}
              >
                {item.pricePercentageChange7d.toFixed(2)}{" "}
                {directionIcon(item.pricePercentageChange7d)}
              </TableCell>

              <TableCell>{ConvertNumber(item.volume)}</TableCell>
              <TableCell>£ {ConvertNumber(item.marketCap)}</TableCell>
              <TableCell>{ConvertNumber(item.circulatingSupply)}</TableCell>

              <TableCell>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    navigate(`/chart/${cryptoData[index].id}`);
                  }}
                  size="small"
                >
                  Chart
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteCrypto(cryptoData[index].id);
                  }}
                  size="small"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WatchListTable;
