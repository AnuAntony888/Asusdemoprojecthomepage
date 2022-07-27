import React from 'react'
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

import Typography from '@mui/material/Typography';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Header.css'

import Popover from "@mui/material/Popover";

function Laptops() {
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
        onMouseLeave={handlePopoverClose}  label='Laptops'
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
        <Typography label='Laptops' sx={{width:'1500px',height:'450px'}} >      
           
        <table class="uk-tableL1" >
    
    
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td className='t1l'>For Home</td>
            <td className='t2l'>BY CATEGORY</td>
            <td className='t3l'>BY SERIES</td>
          
           
            
        </tr>
        
        <tr>
       
            <td></td>
            <td ></td>
            <td className='t22l'>For Work</td>
            <td className='t23l'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_flylaptop.svg' alt='' id='td1rog'/><span >Thin and light</span></td>
            < td className='t24l'> All series</td>     

            
        </tr>
        <tr>
       
            <td></td>
            <td ></td>
            <td className='t22l'>For Creators</td>
            <td className='t23l'> <img src='https://www.asus.com/media/Odin/Websites/global/ProductLine/20201229033959.svg' alt='' id='td1rog'/><span >
         OLED category
         </span></td>
            <td>Zenbook</td>     

            
        </tr>
        <tr>
       
            <td></td>
            <td ></td>
            <td className='t22l'>For Students</td>
            <td className='t23l'> <img src='https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902094222.svg' alt='' id='td1rog'/><span >
                  Everyday use
                  </span></td>
            <td>vivobook</td>  

            
        </tr>
        <tr>
       
            <td></td>
            <td ></td>
            <td className='t22l'>For Gaming</td>
            <td></td>    
            <td>Chromebooks</td> 

            
        </tr>
        <tr>
       
            <td></td>
            <td ></td>
            <td className='t22l'>For Windows 11</td>
            <td></td>  
            <td>Everyday use</td>   

            
        </tr>
        <tr>
       
            <td></td>
            <td ></td>
            <td className='t22l'>Warranty</td>
            <td></td>     

            
        </tr>
        
       
        
        
    </tbody>
</table>
<table class="uk-tableL2">
    
    
    <tbody>
        <tr>
            <td className='hlimg1'>
                <img src='https://dlcdnwebimgs.asus.com/gain/844b5ecf-009c-42f6-981e-a53c65767061/w185/fwebp' alt='' className='hlimg2'/>
                <span class="HeaderLevelOneDropDownMenu__hotProductTitle__iUn0W">
           Zenbook Flip 13 OLED (UX363, 11th Gen Intel)
         </span>
            </td>
            <td></td>
            <td><ClearIcon className='clearhl'></ClearIcon></td>
        </tr>
        <tr style={{height:'10px'}}></tr>
        <tr>
        <td className='hlimg1'>
                <img src='https://dlcdnwebimgs.asus.com/gain/844b5ecf-009c-42f6-981e-a53c65767061/w185/fwebp' alt='' className='hlimg2'/>
                <span class="HeaderLevelOneDropDownMenu__hotProductTitle__iUn0W">
           Zenbook Flip 13 OLED (UX363, 11th Gen Intel)
         </span>
            </td>
            
        </tr>
    </tbody>
</table>
<div class="vl1"></div>
        <div class="vl2"></div>
        <div class="vl3"></div>
        
        </Typography>
        
        
      </Popover>


</Tabs>
        
        </React.Fragment>
    </div>
  )
}

export default Laptops