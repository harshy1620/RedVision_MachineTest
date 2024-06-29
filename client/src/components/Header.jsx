import React, { useState }  from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Menu as MenuIcon,  } from "@mui/icons-material";


const Header = () => {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: "#172D13" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="logo" sx={{ flexGrow: 1 }}>
            iTEMR 
          </Typography>

          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Tab label="All Items" component={Link} to="/All-Items" />
            <Tab label="Create Items" component={Link} to="/create-Item" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem
            button
            onClick={toggleDrawer}
            component={Link}
            to="/All-Items"
          >
            <ListItemText primary="All Items" />
          </ListItem>

          
          <ListItem
            button
            onClick={toggleDrawer}
            component={Link}
            to="/create-Item"
          >
            <ListItemText primary="Create Item" />
          </ListItem>
         
        </List>
      </Drawer>
    </>
  );
};

export default Header;
