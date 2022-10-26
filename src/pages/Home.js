import React from "react";
import Images from './images/Images'
import './home.css'
import LoremIpsum from "react-lorem-ipsum";
import {useNavigate} from 'react-router-dom'
// import Colors from "../global/Colors";
const Home = ()=>{
    let navigate = useNavigate();
    return(
        <>
        <div className="panel-home">
            <h1>Feels Like Home</h1>
            {/* <img src={Images.cakeChocolate} ></img> */}
        </div>
        <div className="panel-info">
            <div className="title">
                <h1>We Specialise in your Happiness</h1>
            </div>
            <div className="info">
                <img className="info-img" src={Images.cakeIcing} alt='cake icing'></img>
                <h1>Cakes</h1>
                <p className="text"><LoremIpsum p={1}/></p>
                <button className="btn" onClick={()=>{
                    navigate('/products')
                }}>Products</button>
            </div>
            <div className="info">
                <img className="info-img" src={Images.cupcake} alt='Cupcake'></img>
                <h1>Cupcake</h1>
                <p className="text"><LoremIpsum p={1}/></p>
                <button className="btn">Contact Us</button>
            </div>
        </div>
        </>
        )
}

export default Home