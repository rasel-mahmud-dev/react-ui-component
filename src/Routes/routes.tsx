import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main.tsx";
import {lazy} from "react";

const ButtonPage  = lazy(()=>import( "@app/pages/docs/ButtonPage/ButtonPage"));
const CollapsePage  = lazy(()=>import( "@app/pages/docs/CollapsePage/CollapsePage"));
const Installation  = lazy(()=>import( "@app/pages/docs/Installation/Installation.tsx"));
const TabsPage  = lazy(()=>import( "@app/pages/docs/TabsPage.tsx"));
const HomePage  = lazy(()=>import( "@app/pages/docs/HomePage.tsx"));
const NavbarPage  = lazy(()=>import( "@app/pages/docs/NavbarPage/NavbarPage.tsx"));
const Login  = lazy(()=>import( "@app/pages/auth/Login.tsx"));
const InputPage  = lazy(()=>import( "@app/pages/docs/Forms/InputPage/InputPage.tsx"));
const FormPageOverview  = lazy(()=>import( "@app/pages/docs/Forms/FormPageOverview/FormPageOverview.tsx"));
const InputGroupPage  = lazy(()=>import( "@app/pages/docs/Forms/InputGroupPage/InputGroupPage.tsx"));
const AvatarPage  = lazy(()=>import( "@app/pages/docs/ComponentPage/AvatarPage.tsx"));
const NotFoundRoute  = lazy(()=>import( "@app/components/NotFoundRoute/NotFoundRoute.tsx"));
const SearchInputPages  = lazy(()=>import( "@app/pages/docs/Forms/SearchInputPages/SearchInputPages"));
const ModalPage  = lazy(()=>import( "@app/pages/docs/ModalPage/ModalPage.tsx"));
const MultiModalPage  = lazy(()=>import( "@app/pages/docs/MultiModalPage/MultiModalPage.tsx"));
const CalendarPage  = lazy(()=>import( "@app/pages/docs/CalendarPage/CalendarPage.tsx"));
const TablePage  = lazy(()=>import( "@app/pages/docs/Data/TablePage/TablePage.tsx"));
const SidebarPage  = lazy(()=>import( "@app/pages/docs/SidebarPage/SidebarPage.tsx"));

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
            { path: "/docs/components/sidebar", element: <SidebarPage />},
            { path: "/docs/forms/overview", element: <FormPageOverview />},
            { path: "/docs/forms/input-group", element: <InputGroupPage />},
            { path: "/docs/forms/input", element: <InputPage />},
            { path: "/docs/forms/search-input", element: <SearchInputPages />},
            { path: "/docs/components/avatar", element: <AvatarPage />},

            { path: "/docs/components/modal", element: <ModalPage />},
            { path: "/docs/components/multi-modal", element: <MultiModalPage />},
            { path: "/docs/components/calendar", element: <CalendarPage />},

            { path: "/docs/components/data/table", element: <TablePage />},

        ]
    },
    {
        path: "/login",
        element: <Login />,

    }
])

export default routes