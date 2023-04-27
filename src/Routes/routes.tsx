import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main.tsx";
import ButtonPage from "@app/pages/docs/ButtonPage/ButtonPage";
import CollapsePage from "@app/pages/docs/CollapsePage/CollapsePage";
import Installation from "@app/pages/docs/Installation/Installation.tsx";
import TabsPage from "@app/pages/docs/TabsPage.tsx";
import HomePage from "@app/pages/docs/HomePage.tsx";
import NavbarPage from "@app/pages/docs/NavbarPage/NavbarPage.tsx";
import Login from "@app/pages/auth/Login.tsx";
import InputPage from "@app/pages/docs/Forms/InputPage/InputPage.tsx";
import FormPageOverview from "@app/pages/docs/Forms/FormPageOverview/FormPageOverview.tsx";
import InputGroupPage from "@app/pages/docs/Forms/InputGroupPage/InputGroupPage.tsx";
import AvatarPage from "@app/pages/docs/ComponentPage/AvatarPage.tsx";
import NotFoundRoute from "@app/components/NotFoundRoute/NotFoundRoute.tsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <NotFoundRoute />,
        children: [
            { path: "", element: <HomePage />},
            { path: "/docs", element: <HomePage />},
            { path: "/docs/components/buttons", element: <ButtonPage />},
            { path: "/docs/components/collapse", element: <CollapsePage />},
            { path: "/docs/components/tabs", element: <TabsPage />},
            { path: "/docs/installation", element: <Installation />},

            { path: "/docs/navigation/navbar", element: <NavbarPage />},
            { path: "/docs/forms/overview", element: <FormPageOverview />},
            { path: "/docs/forms/input-group", element: <InputGroupPage />},
            { path: "/docs/forms/input", element: <InputPage />},
            { path: "/docs/components/avatar", element: <AvatarPage />}
        ]
    },
    {
        path: "/login",
        element: <Login />,

    }
])

export default routes