import { BrowserRouter, useRoutes } from "react-router-dom";

const AppRoutes = () => {
  let routes = useRoutes([]);

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
