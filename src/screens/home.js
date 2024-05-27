import React from 'react'
import {  Box } from '@mui/material'
import Grids from '../components/dataGrid'
import ClippedDrawer from '../components/drawer'
function Home(){
    return(
        <Box>

           <ClippedDrawer>
                <Grids />
           </ClippedDrawer>
          
            
        </Box>
    )
}

export default Home