import { Sidebar } from '@/components/Sidebar/Sidebar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
      </Box>
    </Container>
  );
}
