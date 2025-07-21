'use client';

import { Sidebar } from '@/components/Sidebar/Sidebar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        {/* <ChessboardComponent squareSize={60} board={generateBaseChessboard()} onSquareClick={({rank, file}) => console.log(`clicked square at ${rank}, ${file}`)} /> */}
      </Box>
    </Container>
  );
}
