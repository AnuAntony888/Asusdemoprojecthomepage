import React from 'react'
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PersonIcon from '@mui/icons-material/Person';
import Drawercomponet from './Drawercomponet';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Popover from "@mui/material/Popover";
import Mobile from './Mobile';
import Laptops from './Laptops';
import Desktops from './Desktops';
import Motherbord from './Motherbord';
import Networking from './Networking';
import Accessories from './Accessories';
import Support from './Support';
import Shop from './Shop';





function Head() {
    const [anchorEl, setAnchorEl] =useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);



  const theme =useTheme();
  console.log(theme);
  const isMatch =useMediaQuery(theme.breakpoints.down('lg'));
  console.log(isMatch);
  return (
    <div>
      <React.Fragment>
        <AppBar sx={{backgroundColor:'white',color:'black'}}>
          <Toolbar >
            {isMatch ? (<>
           
               <Drawercomponet></Drawercomponet>
              <img src='https://dlcdnimgs.asus.com/images/logo/logo-002.svg' alt='' className='asus1'/>
              <SearchIcon sx={{marginLeft:'auto'}}/>
              <ShoppingCartCheckoutIcon />
              
              </>):(<>          <img src='https://dlcdnimgs.asus.com/images/logo/logo-002.svg' alt='' className='asus'/>
<Tabs sx={{textDecorationColor:'inherit'}}>


<Mobile/>
<Laptops/>
<Desktops/>
<Motherbord/>
<Networking/>
<Accessories/>
<Tab label='Business PCs/Peripherals'></Tab>
<Support/>
<Shop/>


     
       
      
     





</Tabs>
<SearchIcon  />
<ShoppingCartCheckoutIcon sx={{marginLeft:'20px'}}/>
<PersonIcon sx={{marginLeft:'20px'}}/>

</>)}
          
           
           



          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  )
}

export default Head