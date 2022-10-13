//import Header from '../components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import CartContainer from '../pages/CartContainer';
import ItemDetailContainer from '../pages/ItemDetailContainer';
import Home from '../pages/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function AppRouter() {
    return (
        <>
        <Header />
        {/* <NavBar /> */}
        <Routes>
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/products/:id' element={<ItemDetailContainer />} />
            <Route path='/' element={<Home />} />
        </Routes>
        <Footer className="flex flex-wrap"/>
        </>
    );
}