import React from 'react'
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

import Typography from '@mui/material/Typography';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Header.css'

import Popover from "@mui/material/Popover";

function Networking() {
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
          onMouseLeave={handlePopoverClose}  label='Networking / IoT / Servers'
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
             
          <table class="uk-tablenet" >
      
      
      <tbody>
          <tr>
              <td></td>
              <td></td>
              <td className='t1net'>WiFi 6</td>
              <td className='t2l'>BY CATEGORY</td>

            
             
              
          </tr>
          
          <tr>
         
              <td></td>
              <td ></td>
              <td className='t22mc'>WiFi Routers</td>
              <td className='t23l'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_wifirouters.svg' alt='' id='td1rog'/><span >WiFi Routers</span></td>
              
  
              
          </tr>
          <tr>
         
              <td></td>
              <td ></td>
              <td className='t22mc'>
         Whole Home Mesh WiFi System
       
         </td>
              <td className='t23l'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_meshwifi.svg' alt='' id='td1rog'/><span >
              Whole Home Mesh WiFi <span style={{paddingLeft:'25px'}}>System</span>
           </span></td>
              
  
              
          </tr>
          <tr>
         
              <td></td>
              <td ></td>
              <td className='t22mc'>
      
              Wireless & Wired Adapters
     
       
         </td>
              <td className='t23l'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_wirelessadapterswifi6.svg' alt='' id='td1rog'/><span >
              Wireless & Wired Adapters
           </span></td>
              
  
              
          </tr>
<tr>
         
              <td></td>
              <td ></td>
              <td className='t22mc'>
       AIoT &amp; Industrial Solution
     </td>
              <td></td>
                
  
              
          </tr>
          
          <tr>
         
         <td></td>
         <td ></td>
         <td className='t22mc'>Servers</td>
         <td></td>
        

         
     </tr>

     
       
          
      </tbody>
  </table>
  <table class="uk-tablenet2">
      
      
      <tbody>
          <tr>
              <td className='hlimg1'>
                  <img src='https://dlcdnwebimgs.asus.com/gain/94f54914-6cf7-4446-baf5-9bc5520767cb/w185/fwebp' alt='' className='mcimg2'/>
                  <span class="HeaderLevelOneDropDownMenu__hotProductTitle__iUn0W">
           ASUS ZenWiFi AX (XT8)
         </span>
              </td>
              <td></td>
              <td><ClearIcon className='clearhl'></ClearIcon></td>
          </tr>
          <tr style={{height:'10px'}}></tr>
          <tr>
          <td className='hlimg1'>
                  <img src='https://dlcdnwebimgs.asus.com/gain/a3631a89-05a9-48ea-8e71-ef4082a73058/w185/fwebp' alt='' className='mcimg2'/>
                  <p className='rtax82u'>
           RT-AX82U
         </p>
              </td>
              
          </tr>
      </tbody>
  </table>
  <div class="vnet1"></div>
          <div class="vnet2"></div>
          
          
          </Typography>
          
          
        </Popover>
  
  
  </Tabs>
          
          </React.Fragment>
      </div>
    )
  }
  
  export default Networking