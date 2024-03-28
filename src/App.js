import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./routes";

const responseFacebook = (response) => {
  console.log(response);
};

function App() {
  return (
    
      <div className="App">
        <RouterProvider router={router} />
      </div>
    // </React.StrictMode>
  );
}

export default App;
