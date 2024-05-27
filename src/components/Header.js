import { Box, Stack, Input, Button, Container } from '@mui/material'
import React from 'react'
import DialogComponent from './AddDialogue'
import Typography from '@mui/material/Typography';
import CountUp from 'react-countup';




export default function Header({rows, handleOpenDialog, handleCloseDialog, AddIcon, openDialog}){
    return(
        <Box>
                <Stack direction="row" margin={5} justifyContent='space-between'>
                    <Typography  variant='h3'>STUDENTS</Typography>
                    <Stack>
                    <Typography variant='h6'><CountUp delay={1} end={rows.length}></CountUp> STUENTS</Typography>
                    <Button variant="contained" flex={2} sx={{background:'teal'}} size='large' startIcon={<AddIcon />} onClick={handleOpenDialog}>
                        Add New
                    </Button>
                    </Stack>
                    <DialogComponent open={openDialog} onClose={handleCloseDialog} rows={rows}/>

                </Stack>
        </Box>
    )
}