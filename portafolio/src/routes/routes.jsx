import { createBrowserRouter } from "react-router-dom";
import { useEffect } from "react"; // Importa useEffect para aplicar Bootstrap solo una vez
import IndexDashboard from "../Pages-Dash/indexDashboard";
import CondicionalAtmosferica from "../Pages-Dash/CondicionalAtmosferica";


export const routes = createBrowserRouter([
    {
        path: "/IndexDashboard",
        element: <IndexDashboard />,
      },
      {
          path: "/CondicionalAtmosferica",
          element: <CondicionalAtmosferica />,
        },
  ]);
  
  // Aplica el Bootstrap solo una vez, después de que se monte el componente
  export const BootstrapContainer = () => {
    useEffect(() => {
      return () => {
        document.body.classList.add("bootstrap-container");
      };
    }, []);
  
    return null;
  };
  