'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAccount } from 'wagmi';

type AuthButtonProps = {
  onClick: () => void;
};

export function AuthButton({ onClick }: AuthButtonProps) {
  const { isConnected, address } = useAccount();
  const label = isConnected ? 'Disconnect' : 'Login';

  return (
    <Box sx={{ width: '100%', px: 2, py: 1 }}>
      <Button
        fullWidth
        variant='contained'
        onClick={onClick}
        sx={{
          py: 1.5,
          borderRadius: 2,
          textTransform: 'none',
          backgroundColor: isConnected ? '#454341' : '#70A547',
          ...(isConnected && {
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
          }),
        }}
      >
        <Typography variant='body2' sx={{ fontWeight: 700 }}>
          {label}
          {isConnected && (
            <Box
              component='span'
              sx={{ display: 'block', fontSize: '0.75rem', opacity: 0.7 }}
            >
              {`${address?.slice(0, 6)}...${address?.slice(-4)}`}
            </Box>
          )}
        </Typography>
      </Button>
    </Box>
  );
}
