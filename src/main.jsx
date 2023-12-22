import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { GlobalContextProvider } from "./context/GlobalContext";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
    <ToastContainer position="top-center" limit={2}/>
  </GlobalContextProvider>
);
