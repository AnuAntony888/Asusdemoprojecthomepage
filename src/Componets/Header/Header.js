import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Header.css';
import Drawercomponet from './Drawercomponet';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';




function Header() {

  const theme =useTheme();
  console.log(theme);
  const isMatch =useMediaQuery(theme.breakpoints.down('lg'));
  console.log(isMatch);
  return (
    <div>
      <React.Fragment>
        <AppBar sx={{backgroundColor:'white',color:'black'}}>
          <Toolbar>
            {isMatch ? (<>
            <Drawercomponet/>
            
           
          
              <img src='https://dlcdnimgs.asus.com/images/logo/logo-002.svg' alt='' className='asus1'/>
              <SearchIcon />
<AddShoppingCartIcon />
              
              
              </>):(<>          <img src='https://dlcdnimgs.asus.com/images/logo/logo-002.svg' alt='' className='asus'/>
<Tabs sx={{textDecorationColor:'inherit'}}>
<Tab label="mobile"  id='mobile' />
<Tab label="Laptops"  />
<Tab label="Desktop/Disply"  />
<Tab label="moterbords/components"  />
<Tab label="Laptops"  />
<Tab label="Networking / IoT / Servers"/>
<Tab label="Accessories"/>
<Tab label="Business PCs / Peripherals"/>
<Tab label="Support"/>
<Tab label='Shop'/>



</Tabs>
<SearchIcon />
<AddShoppingCartIcon sx={{marginLeft:'20px'}}/>
<PersonIcon sx={{marginLeft:'20px'}}/>

</>)}
          
           
           



          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  )
}

export default Header