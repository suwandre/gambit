import React from 'react';
import { useTheme, useMediaQuery, Box } from '@mui/material';
import { Sidebar } from '../Sidebar/Sidebar';
import { AppBar } from '../AppBar/AppBar';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

export const ResponsiveLayout = ({ children }: ResponsiveLayoutProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Shows mobile version below 'md' breakpoint

  // Returns an app bar if on mobile, otherwise returns sidebar
  if (isMobile) {
    return (
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <AppBar />
        <Box component='main' sx={{ flexGrow: 1, pt: 8 }}>
          {children}
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box component='main' sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
  );
};
