import React from 'react'
import {useEffect,useState} from 'react'
import './Footer.css'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';

const Scroll=({
  showBelow
})=>{
  const [show,setShow]=useState(showBelow ? false:true)
  const handleScroll =()=>{
    if(window.pageYOffset >showBelow){
      if(!show) setShow(true)

    }
    else{
      if(show) setShow(false)
    }
  }
  const handleclick=()=>{
    window[`scrollTo`]({top:0,behavior:`smooth`})
  }

useEffect(()=>{
  if(showBelow){
    window.addEventListener(`scroll`,handleScroll)
    return () =>window.removeEventListener(`scroll`,handleScroll)
  }
})
  


  return (
    <div>
      <IconButton onClick={handleclick} id='scrollicon'>
        <ExpandLessIcon/>
      </IconButton>
    </div>
  )
}

export default Scroll
