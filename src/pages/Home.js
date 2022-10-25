import React from "react";
import Images from './images/Images'
import './home.css'
import LoremIpsum from "react-lorem-ipsum";


const Home = ()=>{
    return(
        <>
        <div className="panel-home">
            <h1>Feels Like Home!!</h1>
            {/* <img src={Images.cakeChocolate} ></img> */}
        </div>
        <div className="panel-info">
            <div className="info">
                <img className="info-img" src={Images.cakeIcing}></img>
                <h1>Cakes</h1>
                <p><LoremIpsum p={1}/></p>
                <button>Products</button>
            </div>
            <div className="info">
                <img className="info-img" src={Images.cupcake}></img>
                <h1>Cupcake</h1>
                <p><LoremIpsum p={1}/></p>
                <button>Contact Us</button>
            </div>
        </div>
        </>
        )
}

export default Home