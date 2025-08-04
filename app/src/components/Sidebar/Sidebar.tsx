import Box from '@mui/material/Box';
import { SidebarNav } from './SidebarNav';
import { AuthButton } from '../Button/AuthButton';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { LoginModal } from '../Auth/LoginModal';
import { Alert, Snackbar } from '@mui/material';
import { useAccount, useDisconnect } from 'wagmi';

interface SidebarProps {
  variant?: 'permanent' | 'drawer';
}

export const Sidebar = ({ variant = 'permanent' }: SidebarProps) => {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  // Login modal when login button is clicked
  const [loginOpen, setLoginOpen] = useState(false);

  // Call `disconnect` if connected, otherwise open login modal
  const handleAuthButtonClick = () => {
    if (isConnected) {
      disconnect();
    } else {
      setLoginOpen(true);
    }
  }

  // Snackbar to show success or error while logging in
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState({
    message: '',
    severity: 'info' as 'success' | 'error' | 'info' | 'warning',
  });

  const handleShowSnackbar = useCallback(
    (message: string, severity: 'success' | 'error' | 'info' | 'warning') => {
      setSnackbarContent({ message, severity });
      setSnackbarOpen(true);
    },
    []
  );

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleCloseLoginModal = useCallback(() => {
    setLoginOpen(false);
  }, []);

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
      <AuthButton onClick={handleAuthButtonClick} />
      {/** Login modal; opened when login button is clicked */}
      <LoginModal
        open={loginOpen}
        onClose={handleCloseLoginModal}
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
