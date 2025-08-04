'use client';

import Box from '@mui/material/Box';
import { ChessboardComponent } from '../Chess/Chessboard';
import { PlayOnlinePanel } from './PlayOnlinePanel';
import { generateBaseChessboard } from '@/utils/baseChessboard';

export const PlayOnlinePage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 3,
        p: 2,
        overflow: 'hidden',
      }}
    >
      {/* Chessboard Container */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: { xs: '60vh', md: '100%' },
        }}
      >
        <ChessboardComponent
          board={generateBaseChessboard()}
          onSquareClick={() => {}}
          squareSize={95} // Larger squares
        />
      </Box>

      {/* Right Panel */}
      <Box
        sx={{
          flex: '0 0 350px',
          minWidth: { md: 350 },
          height: { xs: 'auto', md: '100%' },
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <PlayOnlinePanel />
      </Box>
    </Box>
  );
};
