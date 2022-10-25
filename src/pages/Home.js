import React from "react";
import Images from './images/Images'
import './home.css'
import LoremIpsum from "react-lorem-ipsum";
import {useNavigate} from 'react-router-dom'

const Home = ()=>{
    let navigate = useNavigate();
    return(
        <>
        <div className="panel-home">
            <h1>Feels Like Home</h1>
            {/* <img src={Images.cakeChocolate} ></img> */}
        </div>
        <div className="panel-info">
            <div className="info">
                <img className="info-img" src={Images.cakeIcing}></img>
                <h1>Cakes</h1>
                <p className="text"><LoremIpsum p={1}/></p>
                <button className="btn" onClick={()=>{
                    navigate('/products')
                }}>Products</button>
            </div>
            <div className="info">
                <img className="info-img" src={Images.cupcake}></img>
                <h1>Cupcake</h1>
                <p className="text"><LoremIpsum p={1}/></p>
                <button className="btn">Contact Us</button>
            </div>
        </div>
        </>
        )
}

export default Home