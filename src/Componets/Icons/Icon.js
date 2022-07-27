import React from 'react'
import './Icon.css'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



function Icon() {
  
    

  return (
    <div>
     
      <p className='Hot'>Hot Deals</p>

      <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth:800,
       
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2} id='hai'>
        
        <Grid item xs={6} sm container >
          <Grid item xs container direction="column" spacing={2} >
        <Typography  id=''>
        <img src='https://www.asus.com/media/Odin/Websites/global/DealsPage/20210521081514.svg'  alt='' className='i1'></img> 
              </Typography>
              <Typography id='im1'>
              
              Mobile
                </Typography>
        </Grid>
        </Grid>

          



        
      <Grid item xs={6} sm container>
        <Grid item xs container direction="column" spacing={2}>
        <Typography  id=''>
        <img src='https://www.asus.com/media/Odin/Websites/global/DealsPage/20210521081726.svg'  alt='' className='i1'></img> 
              </Typography>
            <Typography id='im2'>
            
          Laptop
    
            </Typography>
      </Grid>
      </Grid>




     
      <Grid item xs={6} sm container>
        <Grid item xs container direction="column" spacing={2}>
        <Typography  id=''>
        <img src='https://www.asus.com/media/Odin/Websites/global/DealsPage/20210521081749.svg'  alt='' className='i1'></img> 
              </Typography>
            <Typography id='im3'>
            
          Desktops
    
            </Typography>
      </Grid>
      </Grid>





      
      <Grid item xs={6} sm container>
        <Grid item xs container direction="column" spacing={1}>
        <Typography  id=''>
        <img src='https://www.asus.com/media/Odin/Images/DealsPage/all-deals.svg'  alt='' className='i1'></img> 
              </Typography>
            <Typography id='im4'>
            
          See All Deals
    
            </Typography>
      </Grid>
      </Grid>

















        </Grid>
      
      
      </Paper>




      
     
    
     
    
     </div>



          

       



        
        
  )
}

export default Icon