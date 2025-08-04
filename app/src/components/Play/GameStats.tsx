'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

export const GameStats = () => {
  // TODO: Replace with real data from your backend/API
  const stats = {
    gamesPlayedToday: 210824,
    playersOnline: 18738324,
  };

  return (
    <Box sx={{ p: 2, bgcolor: '#262522' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            {stats.gamesPlayedToday.toLocaleString()}
          </Typography>
          <Typography variant='caption'>PLAYING</Typography>
        </Box>

        <Box sx={{ textAlign: 'right' }}>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            {stats.playersOnline.toLocaleString()}
          </Typography>
          <Typography variant='caption'>GAMES TODAY</Typography>
        </Box>
      </Box>
    </Box>
  );
};
