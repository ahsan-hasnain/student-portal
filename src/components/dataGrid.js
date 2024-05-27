import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Stack, Container, Paper, Typography, Button, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useStudentContext } from '../contexts/StudentContext';
import Header from './Header';
import TextField from '@mui/material/TextField';
import FormDialog from './groupDialogue';

const Grids = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [id, setId] = useState(null)
  const { students } = useStudentContext();
  const [filters, setFilters] = useState({ name: "", age: "", gender: "" })
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [openDialog2, setOpenDialog2] = useState(false);
  const handleCheckboxChange = group => {
    const updatedGroups = selectedGroups.includes(group)
      ? selectedGroups.filter(selectedGroup => selectedGroup !== group)
      : [...selectedGroups, group];

    setSelectedGroups(updatedGroups);
  };

  const handleOpenDialog2 = () => {
    setOpenDialog2(true);
  };

  const handleCloseDialog2 = () => {
    setOpenDialog2(false);
  };


  const rows = students;
  const studyGroups = ['Math', 'Science', 'Computer', 'Web Development', 'English'];
  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'age', headerName: 'Age', flex: 1 },
    { field: 'gender', headerName: 'Gender', flex: 1 },
    {
      field: 'studyGroups', headerName: 'Study Groups', flex: 2,
      renderCell: (params) => (
        <div>
          {params.value.slice(0, 2).map((group, index) => (
            <span key={index}>{group} </span>
          ))}
          {params.value.length > 2 && (
            <span>
              +{params.value.length - 2} more
            </span>
          )}
        </div>
      ),
    }, {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div>
          <Button variant="contained" sx={{ background: 'teal', width: '120px' }} onClick={() => {
            handleOpenDialog2();
            setId(params.row.id)
          }}>
            Add to Group
          </Button>
        </div>
      ),
    },

  ];
  const filteredData = rows.filter(
    (item) => {
      const searchedStudents = item.name.toLowerCase().includes(filters.name.toLowerCase())
      const matchesStudyGroups = selectedGroups.every(group =>
        item.studyGroups.includes(group)
      );
      return matchesStudyGroups && searchedStudents;
    }
  );

  const handleNameFilterChange = (event) => {
    setFilters({ name: event.target.value });
  }
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container sx={{ backgroundColor: '#f0f0f0', minHeight: '100vh', p: 2, paddingTop: '70px' }}>
      <Header
        rows={rows}
        handleOpenDialog={handleOpenDialog}
        handleCloseDialog={handleCloseDialog}
        AddIcon={AddIcon}
        openDialog={openDialog}
      />
      <FormDialog handleClickOpen={handleOpenDialog2}
        handleClose={handleCloseDialog2}
        open={openDialog2}
        id={id} />
      <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
        <Paper elevation={3} sx={{ p: 2, minWidth: 200, backgroundColor: '#ffffff' }}>
          <Typography variant="h5">FILTERS</Typography>
          <Stack spacing={1} sx={{ mt: 1 }}>
            <TextField id="name" value={filters.name} onChange={handleNameFilterChange} label="search by name" variant="filled" />
            <FormGroup>
              {studyGroups.map(group => (
                <FormControlLabel
                  key={group}
                  control={
                    <Checkbox
                      checked={selectedGroups.includes(group)}
                      onChange={() => handleCheckboxChange(group)}
                    />
                  }
                  label={group}
                />
              ))}
            </FormGroup>

          </Stack>
        </Paper>
        <Paper elevation={3} sx={{ p: 2, flexGrow: 1, backgroundColor: '#ffffff' }}>
          <DataGrid
            editMode='row'
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5, page: 0 },
              },
            }}
            checkboxSelection
            rows={filteredData}
            columns={columns}
            pageSize={5}
            pageSizeOptions={[5, 10, 25]}
            autoHeight // Columns will expand to the full height of the grid
            disableSelectionOnClick // Optional: disable row selection
            sx={{
              '& .MuiDataGrid-columnHeader': {
                backgroundColor: '#009688', // Teal color for header
                color: '#ffffff', // White text color
              },
            }}
          />
        </Paper>
      </Stack>
    </Container>
  );
};

export default Grids;
