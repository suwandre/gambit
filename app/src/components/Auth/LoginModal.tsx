import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { WalletOptions } from './WalletOptions';

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

export function LoginModal({
  open,
  onClose,
}: LoginModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            borderRadius: { xs: 0, sm: 3 }, // No radius on mobile
            minWidth: { xs: '80%', sm: 300 },
            maxWidth: { xs: '80%', sm: 400 },
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
            <WalletOptions />
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
}
