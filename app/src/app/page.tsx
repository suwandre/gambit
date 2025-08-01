'use client';

import { ResponsiveLayout } from '@/components/Layout/ResponsiveLayout';
import { MainPage } from '@/components/Main/MainPage';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';

// export default function Home() {
//   return (
//     <Container maxWidth={false} disableGutters>
//       <Box sx={{ display: 'flex', height: '100vh' }}>
//         <Sidebar />
//         <MainPage />
//       </Box>
//     </Container>
//   );
// }

export default function Home() {
  return (
    <ResponsiveLayout>
      <Container maxWidth={false} disableGutters>
        <MainPage />
      </Container>
    </ResponsiveLayout>
  );
}