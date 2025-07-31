import Button from '@mui/material/Button';
import Image from 'next/image';
import { Connector, useAccount, useConnect } from 'wagmi';
import { GenericSideIconButton } from '../Button/GenericSideIconButton';
import { useEffect, useState } from 'react';
import { Alert, Box, CircularProgress, Modal, Typography } from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#262522',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

export const WalletOptions = () => {
  const { connectors, connect, error, isPending, isSuccess, isError } =
    useConnect();
  const { isConnected, address } = useAccount();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    message: '',
    type: 'info' as 'success' | 'error' | 'info',
  });

  // Handle connection success
  useEffect(() => {
    if (isSuccess || (isConnected && address)) {
      setModalContent({
        title: 'Connection Successful!',
        message: `Successfully connected to wallet: ${address?.slice(0, 6)}...${address?.slice(-4)}`,
        type: 'success',
      });
      setModalOpen(true);
    }
  }, [isConnected, address]);

  // Handle connection errors
  useEffect(() => {
    if (isError || error !== null) {
      let title = 'Connection Failed';
      let message = `An error occurred while connecting to your wallet. Reason: ${error}`;

      // Handle specific error types
      if (error.message.includes('User rejected')) {
        title = 'Connection Cancelled';
        message = 'You cancelled the wallet connection request.';
      } else if (error.message.includes('Connector not found')) {
        title = 'Wallet Not Found';
        message =
          'Please make sure your wallet extension is installed and enabled.';
      } else if (error.message.includes('Already processing')) {
        title = 'Connection in Progress';
        message =
          'Please complete the pending connection request in your wallet.';
      } else {
        message = error.message;
      }

      setModalContent({
        title,
        message,
        type: 'error',
      });
      setModalOpen(true);
    }
  }, [error, isError]);

  const handleConnect = async (connector: Connector) => {
    try {
      await connect({ connector });
    } catch (err) {
      // Error will be handled by the useEffect above
      console.error('Connection error:', err);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {connectors.map((connector) => (
        <GenericSideIconButton
          title={`Login with ${connector.name}`}
          icon={
            isPending ? (
              <CircularProgress
                size={28}
                sx={{ color: '#fff', marginRight: '1.75rem' }}
              />
            ) : (
              <Image
                src='/metamask.svg'
                alt='Metamask Logo'
                width={28}
                height={28}
                style={{ marginRight: '1.75rem' }}
              />
            )
          }
          key={connector.uid}
          titleFontSize='1rem'
          marginFromIcon={1.5}
          height={60}
          minWidth={340}
          disabled={isPending}
          sx={{
            backgroundColor: '#1E1D1A',
            color: '#DCDCDC',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
            '&:disabled': {
              backgroundColor: 'rgba(30, 29, 26, 0.5)',
              color: 'rgba(220, 220, 220, 0.5)',
            },
          }}
          onClick={() => handleConnect(connector)}
        />
      ))}

      <Modal
        open={modalOpen}
        onClose={closeModal}
        aria-labelledby='connection-modal-title'
        aria-describedby='connection-modal-description'
      >
        <Box sx={modalStyle}>
          <Typography
            id='connection-modal-title'
            variant='h6'
            component='h2'
            gutterBottom
          >
            {modalContent.title}
          </Typography>
          <Alert severity={modalContent.type} sx={{ mb: 1, mt: 1.5 }}>
            {modalContent.message}
          </Alert>
        </Box>
      </Modal>
    </>
  );
};
