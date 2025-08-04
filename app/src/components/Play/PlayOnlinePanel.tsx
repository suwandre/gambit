'use client';

import React, { useState } from 'react';
import {
  Box,
  Paper,
  Tabs,
  Tab,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  Divider,
} from '@mui/material';
import { GameModeSelector } from './GameModeSelector';
import { PlayButtons } from './PlayButtons';
import { GameStats } from './GameStats';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`play-tabpanel-${index}`}
      aria-labelledby={`play-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

export const PlayOnlinePanel = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        width: '100%',
        maxWidth: 350,
        bgcolor: '#262522',
        color: '#fff',
        borderRadius: 2,
        minHeight: {xs: '60vh', md: '80%'}
      }}
    >
      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant='fullWidth'
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 600,
              color: '#aaa', // ← unselected tab color
            },
            '& .MuiTab-root.Mui-selected': {
              color: '#fff', // ← selected tab text color
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#759B00', // ← underline color (matches the start game button
              height: 3, // ← underline height
            },
          }}
        >
          <Tab label='New Game' />
          <Tab label='Friends' />
          <Tab label='Players' />
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box sx={{ p: 2 }}>
        <TabPanel value={selectedTab} index={0}>
          <GameModeSelector />
          <PlayButtons />
        </TabPanel>

        <TabPanel value={selectedTab} index={1}>
          <Typography variant='body2'>
            Custom Challenge and Play a Friend features coming soon!
          </Typography>
        </TabPanel>

        <TabPanel value={selectedTab} index={2}>
          <Typography variant='body2'>
            Tournaments feature coming soon!
          </Typography>
        </TabPanel>
      </Box>

      {/* Bottom Stats */}
      <Divider />
      <GameStats />
    </Paper>
  );
};
