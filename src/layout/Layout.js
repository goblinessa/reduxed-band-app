import { Outlet } from 'react-router-dom';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import BlockAd from '../components/ad/blockAd';

const Layout = () => {
    return (
        <div className="layout">

            <Header/>
            <BlockAd/>
            <Outlet/>
            <BlockAd/>
            <Footer/>
        </div>
    );
}

export default Layout;
