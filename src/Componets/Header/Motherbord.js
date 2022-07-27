import React from 'react'
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

import Typography from '@mui/material/Typography';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Header.css'

import Popover from "@mui/material/Popover";

function Motherbord() {
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
          onMouseLeave={handlePopoverClose}  label='Motherboards/Components'
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
             
          <table class="uk-tablemc" >
      
      
      <tbody>
          <tr>
              <td></td>
              <td></td>
              <td className='t1mc'>Motherboards</td>
              <td className='t2l'>BY CATEGORY</td>
              <td className='t3l'>BY SERIES</td>
            
             
              
          </tr>
          
          <tr>
         
              <td></td>
              <td ></td>
              <td className='t22mc'>Single Board Computer</td>
              <td className='t23l'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_intel.svg' alt='' id='td1rog'/><span >Intel</span></td>
              < td className='t24l'> All series</td>     
  
              
          </tr>
          <tr>
         
              <td></td>
              <td ></td>
              <td className='t22mc'>Gaming Case</td>
              <td className='t23l'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_amd.svg' alt='' id='td1rog'/><span >
           AMD
           </span></td>
              <td>Prime</td>     
  
              
          </tr>
<tr>
         
              <td></td>
              <td ></td>
              <td className='t22mc'>Cooling</td>
              <td></td>
              <td>ProArt</td>     
  
              
          </tr>
          
          <tr>
         
         <td></td>
         <td ></td>
         <td className='t22mc'>Graphics Cards</td>
         <td></td>
         <td>WorkStation</td>     

         
     </tr>
     <tr>
         
         <td></td>
         <td ></td>
         <td className='t22mc'>Power Supply units</td>
         <td></td>
         <td>ROG Republic of Gamers</td>     

         
     </tr>
     <tr>
         
         <td></td>
         <td ></td>
         <td className='t22mc'>Sound Cards</td>
         <td></td>
         <td>TUF Gaming</td>     

         
     </tr>
     <tr>
         
         <td></td>
         <td ></td>
         <td className='t22mc'>Optical Drives</td>
         <td></td>
         <td>CSM(coperate stable model)</td>     

         
     </tr>
     
     <tr>
         
         <td></td>
         <td ></td>
         <td className='t22mc'>Data storage</td>
         <td></td>
         <td>Bussiness</td>     

         
     </tr>
     <tr>
         
         <td></td>
         <td ></td>
         <td ></td>
         <td></td>
         <td>Expedition</td>     

         
     </tr>
     <tr>
         
         <td></td>
         <td ></td>
         <td ></td>
         <td></td>
         <td>Others</td>     

         
     </tr>
     <tr>
         
         <td></td>
         <td ></td>
         <td ></td>
         <td></td>
         <td>All series-intel</td>     

         
     </tr>
       
          
      </tbody>
  </table>
  <table class="uk-tablemc2">
      
      
      <tbody>
          <tr>
              <td className='hlimg1'>
                  <img src='https://dlcdnwebimgs.asus.com/gain/8166816a-fa44-4461-871f-4a6017434769/w185' alt='' className='mcimg2'/>
                  <p class="HeaderMobileSecondLayer__description__1vDV2">
          TUF Gaming Z590-PLUS WIFI
        </p>
              </td>
              <td></td>
              <td><ClearIcon className='clearhl'></ClearIcon></td>
          </tr>
          <tr style={{height:'10px'}}></tr>
          <tr>
          <td className='hlimg1'>
                  <img src='https://www.asus.com/media/global/gallery/bt7d7txjhkd4wfs0_setting_xxx_0_90_end_185.png' alt='' className='mcimg2'/>
                  <p class="HeaderMobileSecondLayer__description__1vDV2">
          TUF GAMING X570-PLUS (WI-FI)
        </p>
              </td>
              
          </tr>
      </tbody>
  </table>
  <div class="vmc1"></div>
          <div class="vmc2"></div>
          <div class="vmc3"></div>
          
          </Typography>
          
          
        </Popover>
  
  
  </Tabs>
          
          </React.Fragment>
      </div>
    )
  }
  
  export default Motherbord