import React, { useState } from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { NavTab } from '../Sidebar/NavTab';
import { SidebarLoginButton } from '../Button/LoginButton';
import { LoginModal } from '../Auth/LoginModal';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import { Sidebar } from '../Sidebar/Sidebar';

export const AppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250, pt: 2, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
      {/* Logo in drawer */}
      <Box sx={{ px: 2, pb: 2, display: 'flex', justifyContent: 'center' }}>
        <Image
          src='/gambit.png' // Adjust path as needed
          alt='Gambit'
          width={120}
          height={40}
          priority
        />
      </Box>

      {/* Navigation items */}
      <List sx={{ px: 1, pt: 2 }}>
        <NavTab
          icon={<SportsEsportsOutlinedIcon />}
          label='Play'
          onClick={() => {
            setDrawerOpen(false);
            // Add navigation logic here
          }}
        />
        {/* Add more navigation items here as needed */}
      </List>

      {/* Login button at bottom of drawer */}
      <Box>
        <SidebarLoginButton 
          onClick={() => {
            setDrawerOpen(false);
            setLoginOpen(true);
          }} 
        />
      </Box>
    </Box>
  );

  return (
    <>
      <MuiAppBar
        position='fixed'
        sx={{
          bgcolor: '#302E2B',
          color: '#fff',
          boxShadow: 1,
        }}
      >
        <Toolbar>
          {/* Burger menu button */}
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <Image
              src='/gambit.png'
              alt='Gambit'
              width={100}
              height={32}
              priority
            />
          </Box>

          {/* Login button on the right */}
          <SidebarLoginButton onClick={() => setLoginOpen(true)} />
        </Toolbar>
      </MuiAppBar>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: '#211F1C',
            color: '#fff'
          },
        }}
      >
        <Sidebar />
      </Drawer>

      {/* Login modal */}
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
};
