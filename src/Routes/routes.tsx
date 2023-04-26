import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main.tsx";
import ButtonPage from "@app/pages/Docs/ButtonPage/ButtonPage";
import CollapsePage from "@app/pages/Docs/CollapsePage/CollapsePage";
import Installation from "@app/pages/Docs/Installation/Installation.tsx";
import TabsPage from "@app/pages/Docs/TabsPage.tsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "", element: <ButtonPage />},
            { path: "/docs/buttons", element: <ButtonPage />},
            { path: "/docs/collapse", element: <CollapsePage />},
            { path: "/docs/tabs", element: <TabsPage />},
            { path: "/docs/installation", element: <Installation />}
        ]
    }
])

export default routes