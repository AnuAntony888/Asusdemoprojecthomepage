import React from 'react'
import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css'

import DensityLargeIcon from '@mui/icons-material/DensityLarge';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';


    const Drawercomponet=() => {
        const[openDrawer,setopenDrawer]=useState(false)
 
  return (
    <div>
          <React.Fragment >
            
            <Drawer  open={openDrawer}
            Close={()=>setopenDrawer(false)}  >
                 <CloseIcon  onClick={()=>setopenDrawer(false)} className='closeicon'>
                                          </CloseIcon>
                                          <Divider />

 <List >
          <ListItem disablePadding >
            <ListItemButton>
              
              <ListItemText primary="Inbox" />
              <ListItemIcon>
                <AddIcon/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
              
              <ListItemText primary="Mobile" />
              <ListItemIcon>
                <AddIcon/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
              
              <ListItemText primary="Laptops" />
              <ListItemIcon>
                <AddIcon/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
              
              <ListItemText primary="Desktops/Displays" />
              <ListItemIcon>
                <AddIcon/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
              
              <ListItemText primary="Motherboards/components" />
              <ListItemIcon>
                <AddIcon/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
              
              <ListItemText primary="Networking/loT/servers" />
              <ListItemIcon>
                <AddIcon/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
              
              <ListItemText primary="Accessories" />
              <ListItemIcon>
                <AddIcon/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem disablePadding>
          <ListItemButton>
              
              <ListItemText primary="BusinessPCs/Peripherals" />
              <ListItemIcon>
                <AddIcon/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
              
              <ListItemText primary="support" />
              <ListItemIcon>
                <AddIcon/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
              
              <ListItemText primary="Shop" />
              <ListItemIcon>
                <AddIcon/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
          <PersonIcon/>
              <ListItemText primary="My Account"/>
                
              
              <ListItemIcon>
                <AddIcon/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem disablePadding>
          <ListItemButton>
              
              <ListItemText primary="Gaming" />
              <ListItemIcon>
                <AddIcon/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
              <img src='https://www.asus.com/media/Odin/images/header/rog-gray_h.svg' alt=''/>
              
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
              <img src='https://www.asus.com/media/Odin/images/header/proArt-gray_h.svg' alt=''/>
              
            </ListItemButton>
          </ListItem>
        </List>

            </Drawer>
            <IconButton onClick={()=>setopenDrawer(!openDrawer)}>
                
                <DensityLargeIcon/>
            </IconButton>
        </React.Fragment>
    </div>
  )
}

export default Drawercomponet