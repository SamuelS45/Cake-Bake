import { Outlet, Link } from "react-router-dom";
import './nav.css';
import {MdCake} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';

const noneUnderline = {textDecoration:'none'}

const Nav = ()=>{
    let navigate = useNavigate();
    return(
        <>
        <nav>
            <button onClick={()=>{
                navigate('/');
            }} className="home-btn">
                <div className="logo">
                    <MdCake size={'100'}/>
                    <div className="logo-pos">
                        <br></br>
                        <br></br>
                        <h1 className="logo-name">Cake&Bake</h1>
                    </div>
                </div>
            </button>
            <ul className="nav-ul">
                <li> 
                    <Link style={noneUnderline} to='/'><h1 className="home">Home</h1></Link>
                </li>
                <li> 
                    <Link style={noneUnderline} to='/products'><h1 className="feed">Products</h1></Link>
                </li>
            </ul> 
        </nav>

        <Outlet/>
        </>
    )
}

export default Nav