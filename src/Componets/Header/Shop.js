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

function Shop() {
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
        onMouseLeave={handlePopoverClose}  label='Shop'
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
        <Typography  sx={{width:'120px',height:'140px'}} >  
        <Divider/>
        <div className='suphead'>
        < p className='suph1'>ASUS eSHOP</p>
        < p className='suph1'>Store Locator</p>
        <p className='suph1'>Offers</p>
        

        </div> 
           

        
                
            
           


        </Typography>
      </Popover>


</Tabs>
        
        </React.Fragment>
    </div>
  )
}

export default Shop
