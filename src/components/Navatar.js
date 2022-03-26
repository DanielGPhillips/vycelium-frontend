// React Import
import React from 'react';

// MUI Import
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const NavatarImg = styled('img')({
    position: 'fixed',
    bottom: 20,
    left: 20,
    right: 0,
    borderRadius: 50,
})

function Navatar() {
  return (
    <NavatarImg src="https://via.placeholder.com/100" alt="Navatar" />    
  )
}

export default Navatar