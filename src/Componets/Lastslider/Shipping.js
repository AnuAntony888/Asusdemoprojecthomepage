import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './MulCarousel.css'


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function Shipping() {
  return (
    <div>
     <Paper
      sx={{
        p: 2,
        margin: 'auto',
        
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
      className='papership'
    >
      <Grid container spacing={2} id='shope'>
        <Grid item>
          
            <Img alt="complex" src="https://www.asus.com/media/Odin/Websites/in/Menu/20220412113532.svg" />
          
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
        <Typography id='sh1'>
         Free Shipping
              </Typography>
              <Typography id='sh2'>
              
            Free shipping on all products available on eShop*
                </Typography>
        </Grid>
        </Grid>








        <Grid item>
          
            <Img alt="complex" src="https://www.asus.com/media/Odin/Websites/in/Menu/20220412113757.svg" />
          
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
        <Typography id='sh1'>
        
            Easy Returns
      
              </Typography>
              <Typography id='sh2'>
              
            7-days hassle free return
      
              </Typography>
        </Grid>
        </Grid>
          

        <Grid item>
          
          <Img alt="complex" src="https://www.asus.com/media/Odin/Websites/in/Menu/20220412113808.svg" />
        
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
      <Typography id='sh1'>
      
            Safe and Secure Payments

            </Typography>
            <Typography id='sh2'>
            
            Secure encryption for all transactions*
          
            </Typography>
      </Grid>
      </Grid>
        







        <Grid item>
          
          <Img alt="complex" src="https://www.asus.com/media/Odin/Websites/in/Menu/20220412113816.svg" />
        
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
      <Typography id='sh1' >
      
            Customer Support
      
            </Typography>
            <Typography id='sh2' >
           
            Need help? Contact us directly*
     
            </Typography>
      </Grid>
      </Grid>


        




       
        
      </Grid>
      
      
    </Paper>
    
      
    </div>
  )
}

export default Shipping