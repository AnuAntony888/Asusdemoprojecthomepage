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
function Support() {
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
        onMouseLeave={handlePopoverClose}  label='Support'
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
        <Typography  sx={{width:'200px',height:'320px'}} >  
        <Divider/>
        <div className='suphead'>
        < p className='suph1'>Support</p>
        < p className='suph1'>Service Centre</p>
        <p className='suph1'>Check Warrenty Status</p>
        <p className='suph1'>Check repair Status</p>
        <p className='suph1'>Zentalk</p>
        <p className='suph1'>WhatsApp</p>
        <p className='suph1'>My ASUS</p>
        

        </div> 
           

        
                
            
           


        </Typography>
      </Popover>


</Tabs>
        
        </React.Fragment>
    </div>
  )
}

export default Support
