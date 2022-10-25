import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './pages/Nav';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Footer from './pages/Footer';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))

export default function App(){
    return(
    <>
        {/* <h1>Hello World</h1> */}
        <Router>
        <Nav/>
            <Routes>
                <Route path='/home'>
                    <Route path="/home"element={<Home/>}/>
                    <Route path="feed" element={<Feed/>}/>
                </Route>
            </Routes>
        </Router>
        <Footer/>
    </>
    )
}

root.render(<App/>)