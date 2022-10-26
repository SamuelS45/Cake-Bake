import React from "react";
import Images from '../pages/images/Images'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { flexbox } from "@mui/system";
import { Hidden } from "@mui/material";
import LoremIpsum from "react-lorem-ipsum";
import './grid.css'



let style = {
    margin: 20,
    width: 200 ,
    height: 200 ,
    objectFit: 'cover',
    borderRadius: 50,
}

let center = {
    display: 'flex',
    justifyContent: 'center',
    margin: 20,
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
    // let addToList = ()=>{

    // }
return (
<div style={center}>
    <Box sx={{ width: '80%' }}>
    {/* <div className="order">
        <h1>List of Items</h1>
        <h1 className="shopping-cart"></h1>
        <button>Check Out</button>
    </div> */}
<h1 className="title">Products</h1>
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
            <Item className="item">
                <img style={style} src={Images.cakeIcing}></img>
                <h1>Wedding Cake</h1>
                <p><LoremIpsum p={1}/></p>
            </Item>
        </Grid>
        <Grid xs={6}>
            <Item className="item">
                <img style={style} src={Images.cakeChocolate}></img>
                <h1>Cake</h1>
                <p><LoremIpsum p={1}/></p>
            </Item>
        </Grid>
        <Grid xs={6}>
            <Item className="item">
                <img style={style} src={Images.cupcake}></img>
                <h1>Cupcake</h1>
                <p><LoremIpsum p={1}/></p>
            </Item>
        </Grid>
        <Grid xs={6}>
            <Item className="item">
                <img style={style} src={Images.pie}></img>
                <h1>Pie</h1>
                <p><LoremIpsum p={1}/></p>
            </Item>
        </Grid>
    </Grid>
    </Box>
</div>
);
}
