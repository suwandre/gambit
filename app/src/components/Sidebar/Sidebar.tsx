// import Box from '@mui/material/Box';
// import { SidebarNav } from './SidebarNav';
// import { SidebarLoginButton } from '../Button/LoginButton';
// import Image from 'next/image';
// import { useState } from 'react';
// import { LoginModal } from '../Auth/LoginModal';
// import { useMediaQuery, useTheme } from '@mui/material';

// export const Sidebar = () => {
//   // Login modal when login button is clicked
//   const [loginOpen, setLoginOpen] = useState(false);

//   return (
//     <Box
//       sx={{
//         width: { xs: 0, sm: 150 }, // Hide on mobile, scale up on larger screens
//         display: { xs: 'none', sm: 'flex' }, // Hide completely on mobile
//         bgcolor: '#262522',
//         color: '#fff',
//         minHeight: '100vh',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         py: { xs: 2, sm: 6, md: 12 }, // Responsive padding
//       }}
//     >
//       {/** Upper component below image in sidebar */}
//       <Box
//         sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
//       >
//         <Image
//           src='/gambit.png'
//           alt='Gambit Logo'
//           width={500}
//           height={500}
//           priority
//         />
//         <SidebarNav />
//       </Box>
//       {/** Lower component at the bottom of the sidebar */}
//       <SidebarLoginButton onClick={() => setLoginOpen(true)} />
//       {/** Login modal; opened when login button is clicked */}
//       <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
//     </Box>
//   );
// };

import Box from '@mui/material/Box';
import { SidebarNav } from './SidebarNav';
import { SidebarLoginButton } from '../Button/LoginButton';
import Image from 'next/image';
import { useState } from 'react';
import { LoginModal } from '../Auth/LoginModal';
import { Alert, Snackbar, useMediaQuery, useTheme } from '@mui/material';

interface SidebarProps {
  variant?: 'permanent' | 'drawer';
}

export const Sidebar = ({ variant = 'permanent' }: SidebarProps) => {
  // Login modal when login button is clicked
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginOpen(true);
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState({
    message: '',
    severity: 'info' as 'success' | 'error' | 'info' | 'warning',
  });

  const handleShowSnackbar = (
    message: string,
    severity: 'success' | 'error' | 'info' | 'warning'
  ) => {
    setSnackbarContent({ message, severity });
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        width: variant === 'drawer' ? '100%' : { xs: 150 },
        display: 'flex',
        bgcolor: '#262522',
        color: '#fff',
        minHeight: variant === 'drawer' ? 'auto' : '100vh', // Auto height for drawer
        flexDirection: 'column',
        justifyContent: 'space-between',
        py: { xs: 2, sm: 6, md: 12 }, // Your responsive padding
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
      <SidebarLoginButton onClick={handleLoginClick} />
      {/** Login modal; opened when login button is clicked */}
      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onShowSnackbar={handleShowSnackbar}
      />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarContent.severity}
          variant='filled'
          sx={{
            width: '100%',
            fontSize: '0.95rem',
            '&.MuiAlert-filledSuccess': {
              backgroundColor: '#81B64C',
              '& .MuiAlert-icon': {
                color: 'white',
              },
              '& .MuiIconButton-root': {
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              },
            },
          }}
        >
          {snackbarContent.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
