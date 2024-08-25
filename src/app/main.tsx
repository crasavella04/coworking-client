import ReactDOM from "react-dom/client";
import "./index.css";
import Provider from "./provider/Provider";
import RoutingProvider from "./provider/RoutingProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider>
    <RoutingProvider />
  </Provider>
);
