'use client';

import React from 'react';
import { Box, Button } from '@mui/material';
import { GenericSideIconButton } from '../Button/GenericSideIconButton';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export const PlayButtons = () => {
  const handleStartGame = () => {
    // TODO: Implement game start logic
    console.log('Starting game...');
  };

  const handleCustomChallenge = () => {
    // TODO: Implement custom challenge logic
    console.log('Custom challenge...');
  };

  const handlePlayFriend = () => {
    // TODO: Implement play friend logic
    console.log('Play a friend...');
  };

  const handleTournaments = () => {
    // TODO: Implement tournaments logic
    console.log('Tournaments...');
  };

  return (
    <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Start Game Button */}
      <Button
        variant='contained'
        size='large'
        onClick={handleStartGame}
        sx={{
          bgcolor: '#759B00',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          py: 1.5,
          textTransform: 'none',
          '&:hover': {
            bgcolor: '#6B8A00',
          },
        }}
      >
        Start Game
      </Button>

      {/* Other Options */}
      <GenericSideIconButton
        icon={<PersonIcon />}
        title='Custom Challenge'
        subtitle='Challenge a specific player'
        onClick={handleCustomChallenge}
        sx={{
          minWidth: 0,
          height: 60,
          bgcolor: '#494846',
          color: 'text.primary',
          '&:hover': {
            bgcolor: 'rgba(238, 238, 238, 0.25)'
          },
        }}
        titleFontSize='0.9rem'
        subtitleFontSize='0.75rem'
      />

      <GenericSideIconButton
        icon={<GroupIcon />}
        title='Play a Friend'
        subtitle='Invite friends to play'
        onClick={handlePlayFriend}
        sx={{
          minWidth: 0,
          height: 60,
          bgcolor: '#494846',
          color: 'text.primary',
          '&:hover': {
            bgcolor: 'rgba(238, 238, 238, 0.25)'
          },
        }}
        titleFontSize='0.9rem'
        subtitleFontSize='0.75rem'
      />

      <GenericSideIconButton
        icon={<EmojiEventsIcon />}
        title='Tournaments'
        subtitle='Join competitive events'
        onClick={handleTournaments}
        sx={{
          minWidth: 0,
          height: 60,
          bgcolor: '#494846',
          color: 'text.primary',
          '&:hover': {
            bgcolor: 'rgba(238, 238, 238, 0.25)',
          },
        }}
        titleFontSize='0.9rem'
        subtitleFontSize='0.75rem'
      />
    </Box>
  );
};
