'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { FaCaretDown } from 'react-icons/fa';

const gameTypes = [
  { value: 'blitz', label: 'Blitz', icon: '⚡' },
  { value: 'rapid', label: 'Rapid', icon: '🏃' },
  { value: 'bullet', label: 'Bullet', icon: '🔥' },
];

const timeControls = {
  bullet: ['1 min', '2|1'],
  blitz: ['3 min', '3|2', '5 min', '5|3'],
  rapid: ['10 min', '15|10', '30 min'],
};

export const GameModeSelector = () => {
  const [gameType, setGameType] = useState('blitz');
  const [timeControl, setTimeControl] = useState('3 min');

  const handleGameTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newGameType: string | null
  ) => {
    if (newGameType !== null) {
      setGameType(newGameType);
      // Set default time control for the new game type
      setTimeControl(timeControls[newGameType as keyof typeof timeControls][0]);
    }
  };

  const handleTimeControlChange = (event: SelectChangeEvent) => {
    setTimeControl(event.target.value);
  };

  return (
    <Box>
      {/* Game Type Selection */}
      <Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
        <AccessTimeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
        Game Mode
      </Typography>

      <ToggleButtonGroup
        value={gameType}
        exclusive
        onChange={handleGameTypeChange}
        aria-label='game type'
        fullWidth
        sx={{ mb: 2 }}
      >
        {gameTypes.map((type) => (
          <ToggleButton
            key={type.value}
            value={type.value}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              '&.Mui-selected': {
                bgcolor: 'rgba(255, 255, 255, 0.07)',
                color: '#fff',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <span>{type.icon}</span>
              <Typography variant='body1' sx={{ color: '#fff' }}>
                {type.label}
              </Typography>
            </Box>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {/* Time Control Selection */}
      <FormControl fullWidth>
        <Typography variant='body2' sx={{ mb: 1, fontWeight: 500 }}>
          Time Control
        </Typography>
        <Select
          value={timeControl}
          onChange={handleTimeControlChange}
          size='small'
          IconComponent={FaCaretDown}
          sx={{
            color: '#fff',
            /* 1️⃣  border colour (normal, hover, focused) */
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '#666', // default
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#666', // on hover
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#666', // when focused
            },

            /* 2️⃣  dropdown arrow colour */
            '.MuiSelect-icon': {
              color: '#fff',
            },
            '& .MuiSelect-select': {
              fontWeight: 600,
            },
          }}
        >
          {timeControls[gameType as keyof typeof timeControls].map(
            (control) => (
              <MenuItem key={control} value={control}>
                {control}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </Box>
  );
};
