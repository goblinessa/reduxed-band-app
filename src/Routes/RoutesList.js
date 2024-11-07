import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import AddBand from '../pages/AddBand';
import BandTablePage from '../pages/BandTablePage';
import NotFound from '../pages/notFound/notFound';

const routesList = [
    {
        id:0,
        path: "/add-band/",
        element: <AddBand/>
    },
    {
        id:1,
        path: "/band-table/",
        element: <BandTablePage/>
    },
    {
        id:3,
        path: "/*",
        element: <NotFound/>
    }

]


const RouteWithSubRoutes = (route) => {
    return (
        <Route key={route.id} path={route.path} element={route.element} />
    );
};

export const RoutesList = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<Layout/>}>
                    {routesList.map((route) => RouteWithSubRoutes(route))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default RoutesList;