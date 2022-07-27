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




function Desktops() {
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
          onMouseLeave={handlePopoverClose}  label='Desktops/Displays'
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
  
          <table class="uk-tableD" >
      
      
      <tbody>
        <tr className='tr1'></tr>
          <tr>
              <td></td>
              <td></td>
              <td className='t1d'>Gaming Tower PCs</td>
              <td className='t2d'>BY LITER</td>
              <td className='t3d'>BY SERIES</td>
              <td></td>
              <td><ClearIcon></ClearIcon></td>
             
              
          </tr>
          <tr>
          <td></td>
              <td></td>
              <td className='t22' >
       All-in-One PCs
     </td>
              <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_fulltower.svg' alt='' id='td1rog'/><span >Full Tower</span>
               
           </td>
           <td className='t22'>All series</td>
  
              
          </tr>
          <tr>
          <td></td>
              <td></td>
              <td className='t22' >
       Monitores
     </td>
              <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_forbusiness.svg' alt='' id='td1rog'/><span >Mid Tower</span>
               
           </td>
           <td className='t22'>ROG</td>
  
              
          </tr>
        
          <tr>
          <td></td>
              <td></td>
              <td className='t22' >
       Mini PCs
     </td>
     <td></td>
     <td className='t22' >
       ROG strix
     </td>
     
  
              
          </tr>
          <tr>
          <td></td>
              <td></td>
              <td className='t22' >
       Workstation
     </td>
          
  
              
          </tr>
          
          <div class="vld"></div>
          <div class="v2d"></div>
          
      </tbody>
  </table> 
          
                  
              
             
  
  
          </Typography>
        </Popover>
  
  
  </Tabs>
          
          </React.Fragment>
      </div>
    )
  }
  
  export default Desktops
  