import ReactDOM from "react-dom/client";
import { HashRouter as HRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))

export default function App(){
    return(
    <>
        {/* <h1>Hello World</h1> */}
        <HRouter>
        <Nav/>
            <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route index element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
            </Routes>
        </HRouter>
        <Footer/>
    </>
    )
}

root.render(<App/>)