import React from 'react'
import { useState } from 'react';

import Typography from '@mui/material/Typography';

import ClearIcon from '@mui/icons-material/Clear';

import './Header.css';
import Divider from '@mui/material/Divider';


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Header.css'



import Popover from "@mui/material/Popover";





const Mobile=()=> {
  const[openDrawer,setopenDrawer]=useState(false)
    
    const [anchorEl, setAnchorEl] =useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
 
    
  const open = Boolean(anchorEl);
  

 

  return (
    <div>
        <React.Fragment>
        <Tabs sx={{textDecorationColor:'inherit'}}>
<Tab
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}  label='Mobile'
      >
        
       
      </Tab>

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
          
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography label='Mobile' sx={{width:'1500px',height:'350px'}} >  
        <Divider/>    

        <table class="uk-tableM" >
    
    
    <tbody>
      <tr className='tr1'></tr>
        <tr>
            <td></td>
            <td></td>
            <td className='t1'>Phone</td>
            <td className='t2'>BY CATEGORY</td>
            <td className='t3'>BY SERIES</td>
            <td></td>
            <td><ClearIcon></ClearIcon></td>
           
            
        </tr>
        <tr>
        <td></td>
            <td></td>
            <td ></td>
            <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_rogphone_a.svg' alt='' id='td1rog'/><span >Rog Phone</span>
             
         </td>
         <td className='t22'>ASUS 8Z</td>

            
        </tr>
        <tr>
        <td></td>
            <td></td>
            <td ></td>
            <td className='t21'> <img src='https://www.asus.com/media/Odin/Websites/in/ProductLine/20210707050042.png' alt='' id='td1rog'/><span >
         Snapdragon Insiders
         </span>
             
         </td>
         <td className='t22'>ROG phone 5s pro</td>

            
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className='t22'>ROG Phone 5s</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className='t22'>ROG Phone 5 ultimate</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className='t22'>ROG Phone 5 </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className='t22'>ROG Phone IIII </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className='t22'>Smart phone for snapdragon Insiders </td>
        </tr>
        <div class="vl"></div>
        <div class="v2"></div>
        
    </tbody>
</table> 
        
                
            
           


        </Typography>
      </Popover>


</Tabs>
        
        </React.Fragment>
    </div>
  )
}

export default Mobile
