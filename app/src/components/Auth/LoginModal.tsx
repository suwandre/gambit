import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import Image from 'next/image';
import Divider from '@mui/material/Divider';

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
  onSignupClick?: () => void;
};

export function LoginModal({ open, onClose, onSignupClick }: LoginModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
            p: 2,
            minWidth: 350,
            maxWidth: 400,
            overflow: 'visible', // Allow content to extend outside
          },
        },
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Make backdrop darker
          },
        },
      }}
    >
      {/* Wrapper Box to contain both modal and close button */}
      <Box sx={{ position: 'relative' }}>
        {/* Close button positioned absolutely outside */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: -80,
            top: -20,
            // backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#70A547',
            },
            zIndex: 9999,
          }}
        >
          <CloseIcon sx={{ fontSize: 30 }} />
        </IconButton>

        <DialogTitle sx={{ m: 0, p: 2 }}>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <Image
              src='/gambit.png'
              alt='Gambit Logo'
              width={200}
              height={200}
              priority
            />
          </Box>
        </DialogTitle>

        <DialogContent>
          <Box display='flex' flexDirection='column' gap={2} mt={2}>
            {/* Traditional Username/Password */}
            <Button
              variant='contained'
              fullWidth
              sx={{
                backgroundColor: '#70A547',
                textTransform: 'none',
                mb: 1.5,
                fontWeight: 700,
              }}
            >
              Login with Account
            </Button>

            <Divider
              sx={{
                my: 1.5 /* vertical spacing */,
                '&::before, &::after': {
                  borderColor: '#ccc' /* line colour */,
                },
              }}
            >
              <Typography align='center' sx={{ color: '#939393' }}>
                or
              </Typography>
            </Divider>

            {/* Social Media Buttons */}
            <Button
              variant='outlined'
              fullWidth
              startIcon={<FaGoogle />}
              sx={{
                textTransform: 'none',
                borderColor: '#ccc',
                mb: 1,
                fontWeight: 600,
              }}
            >
              Continue with Google
            </Button>

            <Button
              variant='outlined'
              fullWidth
              startIcon={<FaFacebook color='#0866ff' />}
              sx={{
                textTransform: 'none',
                borderColor: '#ccc',
                mb: 1,
                fontWeight: 600,
              }}
            >
              Continue with Facebook
            </Button>

            <Button
              variant='outlined'
              fullWidth
              startIcon={<FaApple />}
              sx={{
                textTransform: 'none',
                borderColor: '#ccc',
                fontWeight: 600,
              }}
            >
              Continue with Apple
            </Button>
          </Box>
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'center', pt: 2 }}>
          <Typography variant='body2' color='text.secondary' align='center'>
            New?&nbsp;
            <Button
              sx={{
                textTransform: 'none',
                fontWeight: 700,
                color: '#70A547',
                p: 0,
                minWidth: 0,
              }}
              onClick={onSignupClick}
            >
              Sign Up - and start playing chess!
            </Button>
          </Typography>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
