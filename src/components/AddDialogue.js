// DialogComponent.jsx

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { useStudentContext } from '../contexts/StudentContext';


const DialogComponent = ({ open, onClose, rows }) => {
    const [data, setData] = useState({
        name: "",
        gender: "",
        age: null,
        studyGroups:[],
        id:rows.length + 1
    })
    const {addStudent} = useStudentContext()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleAddStudent = (e) => {
        e.preventDefault()
        addStudent(data)
      };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogContent>
                <form onSubmit={handleAddStudent} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: 'auto' }}>
                    <TextField
                        label="Name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        required
                    />
                    <TextField
                        label="Gender"
                        name="gender"
                        value={data.gender}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        required
                    />
                    <TextField
                        type='number'
                        label="Age"
                        name="age"
                        value={data.age}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                        Add Student
                    </Button>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogComponent;
