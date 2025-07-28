import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import { FaFacebook, FaApple, FaGoogle } from 'react-icons/fa';

// You can use the official MetaMask SVG logo or a PNG from /public/metamask.png
// For demo, let's use public/metamask.png, assuming you have it in /public

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
  onSignupClick?: () => void;
  onMetaMaskConnect?: () => void; // handler for connecting wallet
};

export function LoginModal({
  open,
  onClose,
  onSignupClick,
  onMetaMaskConnect,
}: LoginModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
            p: 2,
            minWidth: 400,
            maxWidth: 500,
            overflow: 'visible',
          },
        },
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: -60,
            top: -35,
            color: 'white',
            zIndex: 9999,
            '&:hover': {
              color: '#70A547',
            },
          }}
        >
          <CloseIcon sx={{ fontSize: 30 }} />
        </IconButton>

        <DialogTitle sx={{ m: 0, p: 2 }}>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <Image
              src='/gambit.png'
              alt='Gambit Logo'
              width={120}
              height={120}
              priority
            />
          </Box>
        </DialogTitle>

        <DialogContent>
          <Box display='flex' flexDirection='column' gap={2} mt={2}>
            {/* WEB3 LOGIN */}
            <Button
              variant='contained'
              fullWidth
              startIcon={
                <Image
                  src='/metamask.svg'
                  alt='Metamask Logo'
                  width={28}
                  height={28}
                  style={{ marginRight: '1.75rem' }}
                />
              }
              sx={{
                backgroundColor: '#1E1D1A',
                color: '#DCDCDC',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
              }}
              onClick={onMetaMaskConnect} // YOU connect here
            >
              Connect with MetaMask
            </Button>

            {/* Alternative: more Web3 options
            <Button ...>Connect with Coinbase Wallet</Button>
            <Button ...>Connect with WalletConnect</Button>
            */}
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
}
