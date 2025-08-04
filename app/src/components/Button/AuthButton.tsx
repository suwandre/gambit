// 'use client';

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// // For sidebar placement (full-width and margin):
// export function AuthButton({ onClick }: { onClick?: () => void }) {
//   return (
//     <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1, px: 1.25 }}>
//       <Button
//         variant='contained'
//         fullWidth
//         onClick={onClick}
//         sx={{ backgroundColor: '#70A547', textTransform: 'none' }}
//       >
//         <Typography variant='body1' sx={{fontWeight: 700 }}>Login</Typography>
//       </Button>
//     </Box>
//   );
// }

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
          backgroundColor: isConnected ? '#D32F2F' : '#70A547',
          ...(isConnected && {
            fontWeight: 700,
            '&:hover': {
              backgroundColor: 'rgba(255,68,68,0.2)',
            },
          }),
        }}
      >
        <Typography variant='body2' sx={{ fontWeight: 600 }}>
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
