import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// For sidebar placement (full-width and margin):
export function SidebarLoginButton({ onClick }: { onClick?: () => void }) {
  return (
    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1, px: 1.25 }}>
      <Button
        variant='contained'
        fullWidth
        onClick={onClick}
        sx={{ backgroundColor: '#70A547', textTransform: 'none' }}
      >
        <Typography variant='body1' sx={{fontWeight: 700 }}>Login</Typography>
      </Button>
    </Box>
  );
}
