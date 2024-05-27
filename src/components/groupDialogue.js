import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';

import { useStudentContext } from '../contexts/StudentContext';
import { Container, Stack, Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';


export default function FormDialog({  handleClose, open, id }) {
  const { AddToGroup } = useStudentContext()
  const [selectedGroup, setSelectedGroup] = useState('');

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    AddToGroup(id, selectedGroup)
  };



  return (
    <Container >
      <Dialog open={open} onClose={handleClose}>
        <Container sx={{ padding: '40px', textAlign: 'center' }}>
          <Stack spacing={3}>
            <Typography variant="h5">Select a Form</Typography>
            <FormControl fullWidth>
              <InputLabel id="studyGroupLabel">Choose a Study Group</InputLabel>
              <Select
                labelId="studyGroupLabel"
                id="studyGroup"
                label="Choose a Study Group"
                value={selectedGroup}
                onChange={handleGroupChange}
              >
                <MenuItem value="Maths">Maths</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="Web Development">Web Dev</MenuItem>
                <MenuItem value="Computer">Computer</MenuItem>
                <MenuItem value="English">English</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Add To Group
            </Button>
          </Stack>
        </Container>
      </Dialog>
    </Container>
  );
}
