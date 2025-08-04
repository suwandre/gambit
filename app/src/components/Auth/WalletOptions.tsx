import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CircularProgress } from '@mui/material';
import { Connector, useConnect, useAccount } from 'wagmi';
import { GenericSideIconButton } from '../Button/GenericSideIconButton';

type WalletOptionsProps = {
  closeLoginModal?: () => void;
  onShowSnackbar?: (
    message: string,
    severity: 'success' | 'error' | 'info' | 'warning'
  ) => void;
};

export const WalletOptions = ({
  closeLoginModal,
  onShowSnackbar,
}: WalletOptionsProps) => {
  const { connectors, connect, error, isPending, isSuccess } = useConnect();
  const { isConnected, address } = useAccount();

  const [connectingConnector, setConnectingConnector] = useState<string | null>(
    null
  );

  // Handle connection success
  useEffect(() => {
    if ((isConnected && address) || (isSuccess && address)) {
      setConnectingConnector(null); // Clear loading state

      // Show success snackbar FIRST (before closing modal)
      if (onShowSnackbar) {
        console.log(`Showing snackbar for address: ${address}`);

        onShowSnackbar(
          `Successfully connected to wallet: ${address.slice(0, 6)}...${address.slice(-4)}`,
          'success'
        );
      }

      // Close modal AFTER showing snackbar (with small delay)
      if (closeLoginModal) {
        console.log(`Closing login modal for address: ${address}`);

        setTimeout(() => {
          closeLoginModal();
        }, 500); // Give snackbar time to appear
      }
    }
  }, [isConnected, address, closeLoginModal, isSuccess, onShowSnackbar]);

  // Handle connection errors
  useEffect(() => {
    if (error) {
      setConnectingConnector(null);
      let message = 'An error occurred while connecting to your wallet.';

      if (error.message.includes('User rejected')) {
        message = 'You cancelled the wallet connection request.';
      } else if (error.message.includes('Connector not found')) {
        message =
          'Please make sure your wallet extension is installed and enabled.';
      } else if (error.message.includes('Already processing')) {
        message =
          'Please complete the pending connection request in your wallet.';
      } else {
        message = error.message;
      }

      if (onShowSnackbar) {
        onShowSnackbar(message, 'error');
      }
    }
  }, [error, onShowSnackbar]);

  // Clear loading state when isPending becomes false
  useEffect(() => {
    if (!isPending && connectingConnector) {
      const timer = setTimeout(() => {
        setConnectingConnector(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isPending, connectingConnector]);

  const handleConnect = async (connector: Connector) => {
    setConnectingConnector(connector.uid);
    try {
      await connect({ connector });
    } catch (err) {
      console.error('Connection error:', err);
      setConnectingConnector(null);
    }
  };

  return (
    <>
      {connectors.map((connector) => {
        const isThisConnectorLoading = connectingConnector === connector.uid;

        return (
          <GenericSideIconButton
            title={`Login with ${connector.name}`}
            icon={
              isThisConnectorLoading ? (
                <CircularProgress
                  size={28}
                  sx={{
                    color: '#DCDCDC',
                    marginRight: '1.75rem',
                  }}
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
            disabled={isThisConnectorLoading || isPending}
            sx={{
              backgroundColor: '#1E1D1A',
              color: '#DCDCDC',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: isThisConnectorLoading
                  ? '#1E1D1A'
                  : 'rgba(0, 0, 0, 0.8)',
              },
              '&:disabled': {
                backgroundColor: '#1E1D1A',
                color: '#DCDCDC',
                opacity: isThisConnectorLoading ? 1 : 0.5,
              },
              cursor: isThisConnectorLoading ? 'default' : 'pointer',
            }}
            onClick={() => handleConnect(connector)}
          />
        );
      })}
    </>
  );
};
