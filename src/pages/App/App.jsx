import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../Home";

const AppRoutes = () => {
  let routes = useRoutes([{ path: "/", element: <Home /> }]);

  return routes;
};

const App = () => {
  return (
      <BrowserRouter>
        <div className="flex flex-col min-h-screen justify-between">
          <AppRoutes />
        </div>
      </BrowserRouter>
  );
};

export default App;
