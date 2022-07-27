import React from 'react'
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

import Typography from '@mui/material/Typography';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Header.css'

import Popover from "@mui/material/Popover";

function Accessories() {
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
          onMouseLeave={handlePopoverClose}  label='Accessories'
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
             
          <table class="uk-tableAc1" >
      
      
      <tbody>
          <tr>
              <td></td>
              <td></td>
              <td className='tac1'>Keyboards</td>
              <td className='t2l'>BY CATEGORY</td>
              <td className='t3l'>BY SERIES</td>
            
             
              
          </tr>
          
          <tr>
         
              <td></td>
              <td ></td>
              <td className='t22l'>Mice and Mouse pad</td>
              <td className='t23l'> <img src='https://www.asus.com/media/Odin/Websites/global/ProductLine/20201229033959.svg' alt='' id='td1rog'/><span >
           
           Wired Keyboards
           
             </span></td>
              < td className='t24l'> All series</td>     
  
              
          </tr>
          <tr>
         
              <td></td>
              <td ></td>
              <td className='t22l'>Headsets and Audio</td>
              <td className='t23l'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_mechanicalkey.svg' alt='' id='td1rog'/><span >
                 
         Mechanical Keyboards
         
                    </span></td>
              <td>ROG-Republic of Gamers</td>     
  
              
          </tr>
          <tr>
         
              <td></td>
              <td ></td>
              <td className='t22l'>Streaming kit</td>
              <td className='t23l'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_membranekkey.svg' alt='' id='td1rog'/><span >
                 
   
              Membrane Keyboards
         
         
                    </span></td>
              <td>TUF Gaming</td>  
  
              
          </tr>
          <tr>
         
              <td></td>
              <td ></td>
              <td className='t22l'>Bags</td>
              <td></td>    
             
  
              
          </tr>
          <tr>
         
              <td></td>
              <td ></td>
              <td className='t22l'>Adapter and chargers</td>
              <td></td>  
              
  
              
          </tr>
          <tr>
         
              <td></td>
              <td ></td>
              <td className='t22l'>Docks,Dongles and cable</td>
              <td></td>     
  
              
          </tr>
          <tr>
         
              <td></td>
              <td ></td>
              <td className='t22l'>Controller</td>
              <td></td>     
  
              
          </tr>
          <tr>
         
         <td></td>
         <td ></td>
         <td className='t22l'>Disply Accessories</td>
         <td></td>     

         
     </tr>
          
         
          
          
      </tbody>
  </table>
  <table class="uk-tableAc2">
      
      
      <tbody>
          <tr>
              <td className='hlimg1'>
                  <img src='https://dlcdnwebimgs.asus.com/gain/17b38f2d-d2e5-4952-b0ea-c99181fbde04/w185/fwebp' alt='' className='hlimg2'/>
                  <p class="tufac1">
           TUF Gaming K3
         </p>
              </td>
              <td></td>
              <td><ClearIcon className='clearhl'></ClearIcon></td>
          </tr>
          <tr style={{height:'10px'}}></tr>
          <tr>
          <td className='hlimg1'>
                  <img src='https://dlcdnwebimgs.asus.com/gain/8f37ce63-3fa8-4c36-9e36-13961fcca762/w185/fwebp' alt='' className='hlimg2'/>
                  <p class="tufac1">
           TUF Gaming K3
         </p>
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
  
  export default Accessories