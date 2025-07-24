import Box from '@mui/material/Box';
import { SidebarNav } from './SidebarNav';
import { SidebarLoginButton } from '../Button/LoginButton';
import Image from 'next/image';
import { useState } from 'react';
import { LoginModal } from '../Auth/LoginModal';

export const Sidebar = () => {
  // Login modal when login button is clicked
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <Box
      sx={{
        width: 150,
        bgcolor: '#262522',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        py: 12,
      }}
    >
      {/** Upper component below image in sidebar */}
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Image
          src='/gambit.png'
          alt='Gambit Logo'
          width={500}
          height={500}
          priority
        />
        <SidebarNav />
      </Box>
      {/** Lower component at the bottom of the sidebar */}
      <SidebarLoginButton onClick={() => setLoginOpen(true)} />
      {/** Login modal; opened when login button is clicked */}
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </Box>
  );
};
