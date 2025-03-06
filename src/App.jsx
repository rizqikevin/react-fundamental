import "./App.css";
import { GlobalContext } from "./context/Index";
import { router } from "./routers";
import { RouterProvider } from "react-router-dom";

function App() {
  const user = {
    username: "imam",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
      <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
