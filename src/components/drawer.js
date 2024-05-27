import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import Groups3Icon from '@mui/icons-material/Groups3';

const iconMapping = {
  Students: <PersonIcon />,
  Groups: <Groups3Icon />,
  Dashboard: <DashboardIcon />,
  Settings: <SettingsIcon />,
};

const drawerWidth = 240;

export default function ClippedDrawer({children}) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background:"teal" }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            STUDENT ADMIN PANEL
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
        <List>
      {['Students', 'Groups', 'Dashboard', 'Settings'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {iconMapping[text]}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
          <Divider />
        </Box>
      </Drawer>
      {children}
      
    </Box>
  );
}
