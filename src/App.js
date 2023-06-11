import "./App.css";
import RoutingPaths from "./pages/RoutingPaths";
import { CryptoContextProvider } from "./context/CryptoContext";

function App() {
  return (
    <CryptoContextProvider>
      <RoutingPaths />
    </CryptoContextProvider>
  );
}

export default App;
