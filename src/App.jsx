import { BrowserRouter } from "react-router-dom";
import ClientRoutes from "ClientRoutes";
import Headers from "./components/Headers";

export const App = () => {
  return (
    <BrowserRouter>
      <Headers />
      <ClientRoutes />
    </BrowserRouter >
  );
};
