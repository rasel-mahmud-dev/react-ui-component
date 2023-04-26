
import './App.scss'
import {RouterProvider} from "react-router-dom";
import routes from "@app/Routes/routes.tsx";

function App() {

  return (
    <div>
        <RouterProvider router={routes} />
    </div>
  )
}

export default App
