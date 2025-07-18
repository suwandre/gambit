import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// For sidebar placement (full-width and margin):
export function SidebarLoginButton() {
  return (
    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1, px: 1.25 }}>
      <Button
        variant='contained'
        color='success'
        fullWidth
        sx={{ fontWeight: 700 }}
      >
        Login
      </Button>
    </Box>
  );
}
