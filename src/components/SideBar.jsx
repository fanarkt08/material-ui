import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 80;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          pt: '64px',
        },
      }}
    >
      <List sx={{ mt: 0, pt: 0 }}>
        {[
          <HomeIcon />,
          <GridViewIcon />,
          <AddIcon />,
          <GroupIcon />,
          <BarChartIcon />,
          <SettingsIcon />,
        ].map((icon, i) => (
          <ListItemButton
            key={i}
            sx={{ justifyContent: 'center', py: 1.5 }}
          >
            <ListItemIcon sx={{ justifyContent: 'center', minWidth: 0, color: '#707070ff' }}>
              {icon}
            </ListItemIcon>
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
