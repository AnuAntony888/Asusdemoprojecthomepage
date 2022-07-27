
import  React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import './Content.css'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f5f5f5',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  padding:'10px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Card() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} id='card1' >
     
      
        <Grid item  xs={12} sm={6} md={6} >
          <Item >
<img src="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-0_1_tablet_2X.png" className='img3' alt="" /> 


<br/> 

<Button className="a">Learn more > </Button>
<CardMedia
       
        component="img"
        image="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-0_0_desktop_1X.jpg" id='blueimg3'
        alt="zenbook"  
      />
      <CardMedia
       
       component="img"
       image="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-0_0_tablet_2X.jpg" id='blueimg3768'
       alt="zenbook"  
     />
 
</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
          <img src="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-1_1_desktop_2X.png?webp" className='img4' alt="" />
          <br/>
          <Button className="a">Learn more ></Button>
          <CardMedia
       
        component="img"
        image="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-1_0_desktop_1X.jpg?webp" id='sliverimg3'
        alt="zenbook" 
      />
                <CardMedia
       
       component="img"
       image="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-1_0_tablet_1X.jpg"  id='sliverimg3768'
       alt="zenbook" 
     />
     <CardMedia
       
       component="img"
       image="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-1_0_mobile_2X.jpg"  id='sliverimg3475'
       alt="zenbook" 
     />
          
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
          <img src="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-2_1_tablet_1X.png?webp" className='img4' alt="" />
          <br/>
          <Button className="a">Learn more ></Button>
          <CardMedia
       
        component="img"
        image="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-2_0_desktop_1X.jpg?webp"  id='purbleimg4'
        alt="zenbook" 
      />
                <CardMedia
       
       component="img"
       image="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-2_0_tablet_2X.jpg?webp"  id='purbleimg4768'
       alt="zenbook" 
     />
<CardMedia
       
       component="img"
       image="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-2_0_mobile_1X.jpg"  id='purbleimg4475'
       alt="zenbook" 
     />




          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
          <img src="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-3_1_desktop_1X.png?webp" className='img4' alt="" />
          <br/>
          <Button className="a">Learn more ></Button>
          <CardMedia
       
        component="img"
        image="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-3_0_desktop_1X.jpg?webp" id='blackimg4'
        alt="zenbook" 
      />
            <CardMedia
       
       component="img"
       image="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-3_0_tablet_2X.jpg?webp" id='blackimg4768'
       alt="zenbook" 
     />

<CardMedia
       
       component="img"
       image="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-3_0_mobile_1X.jpg" id='blackimg4475'
       alt="zenbook" 
     />




          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
