import Box from '@mui/material/Box';
import { SidebarNav } from './SidebarNav';
import { SidebarLoginButton } from '../Button/LoginButton';
import Image from 'next/image';

export const Sidebar = () => {
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
      <SidebarLoginButton />
    </Box>
  );
};
