// import { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import Image from 'next/image';
// import {
//   Modal,
//   Box,
//   Typography,
//   Alert,
//   CircularProgress,
//   Snackbar,
// } from '@mui/material';
// import { Connector, useConnect, useAccount } from 'wagmi';
// import { GenericSideIconButton } from '../Button/GenericSideIconButton';

// type WalletOptionsProps = {
//   closeLoginModal?: () => void;
// };

// export const WalletOptions = ({ closeLoginModal }: WalletOptionsProps) => {
//   const { connectors, connect, error, isPending, isSuccess } = useConnect();
//   const { isConnected, address } = useAccount();

//   const [connectingConnector, setConnectingConnector] = useState<string | null>(
//     null
//   );
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarContent, setSnackbarContent] = useState({
//     message: '',
//     severity: 'info' as 'success' | 'error' | 'info' | 'warning',
//   });

//   // Handle connection success
//   useEffect(() => {
//     if ((isConnected && address) || (isSuccess && address)) {
//       setConnectingConnector(null); // Clear loading state
//       setSnackbarContent({
//         message: `Successfully connected to wallet: ${address.slice(0, 6)}...${address.slice(-4)}`,
//         severity: 'success',
//       });
//       setSnackbarOpen(true);
//     }

//     // Close the modal after successful login
//     if (isSuccess) {
//       closeLoginModal!();
//     }
//   }, [isConnected, address, closeLoginModal, isSuccess]);

//   // Handle connection errors
//   useEffect(() => {
//     if (error) {
//       setConnectingConnector(null); // Clear loading state on error
//       let message = 'An error occurred while connecting to your wallet.';

//       // Handle specific error types
//       if (error.message.includes('User rejected')) {
//         message = 'You cancelled the wallet connection request.';
//       } else if (error.message.includes('Connector not found')) {
//         message =
//           'Please make sure your wallet extension is installed and enabled.';
//       } else if (error.message.includes('Already processing')) {
//         message =
//           'Please complete the pending connection request in your wallet.';
//       } else {
//         message = error.message;
//       }

//       setSnackbarContent({
//         message,
//         severity: 'error',
//       });
//       setSnackbarOpen(true);
//     }
//   }, [error]);

//   // Clear loading state when isPending becomes false (connection completed/failed)
//   useEffect(() => {
//     if (!isPending && connectingConnector) {
//       // Small delay to prevent flash if success/error snackbars are about to show
//       const timer = setTimeout(() => {
//         setConnectingConnector(null);
//       }, 100);
//       return () => clearTimeout(timer);
//     }
//   }, [isPending, connectingConnector]);

//   const handleConnect = async (connector: Connector) => {
//     setConnectingConnector(connector.uid); // Set this specific connector as loading
//     try {
//       await connect({ connector });
//     } catch (err) {
//       console.error('Connection error:', err);
//       setConnectingConnector(null); // Clear loading state on error
//     }
//   };

//   const handleSnackbarClose = (
//     event?: React.SyntheticEvent | Event,
//     reason?: string
//   ) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setSnackbarOpen(false);
//   };

//   return (
//     <>
//       {connectors.map((connector) => {
//         const isThisConnectorLoading = connectingConnector === connector.uid;

//         return (
//           <GenericSideIconButton
//             title={`Login with ${connector.name}`}
//             icon={
//               isThisConnectorLoading ? (
//                 <CircularProgress
//                   size={28}
//                   sx={{
//                     color: '#DCDCDC',
//                     marginRight: '1.75rem',
//                   }}
//                 />
//               ) : (
//                 <Image
//                   src='/metamask.svg'
//                   alt='Metamask Logo'
//                   width={28}
//                   height={28}
//                   style={{ marginRight: '1.75rem' }}
//                 />
//               )
//             }
//             key={connector.uid}
//             titleFontSize='1rem'
//             marginFromIcon={1.5}
//             height={60}
//             minWidth={340}
//             disabled={isThisConnectorLoading || isPending}
//             sx={{
//               backgroundColor: '#1E1D1A',
//               color: '#DCDCDC',
//               textTransform: 'none',
//               '&:hover': {
//                 backgroundColor: isThisConnectorLoading
//                   ? '#1E1D1A'
//                   : 'rgba(0, 0, 0, 0.8)',
//               },
//               '&:disabled': {
//                 backgroundColor: '#1E1D1A',
//                 color: '#DCDCDC',
//                 opacity: isThisConnectorLoading ? 1 : 0.5,
//               },
//               cursor: isThisConnectorLoading ? 'default' : 'pointer',
//             }}
//             onClick={() => handleConnect(connector)}
//           />
//         );
//       })}

//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={4000}
//         onClose={handleSnackbarClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'center',
//         }}
//         sx={{
//           '& .MuiSnackbarContent-root': {
//             minWidth: '300px',
//           },
//         }}
//       >
//         <Alert
//           onClose={handleSnackbarClose}
//           severity={snackbarContent.severity}
//           variant='filled'
//           sx={{
//             width: '100%',
//             fontSize: '0.95rem',
//             '&.MuiAlert-filledSuccess': {
//               backgroundColor: '#81B64C',
//               color: 'white',
//               '& .MuiAlert-icon': {
//                 color: 'white',
//               },
//               '& .MuiIconButton-root': {
//                 color: 'white',
//                 '&:hover': {
//                   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                 },
//               },
//             },
//           }}
//         >
//           {snackbarContent.message}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// };

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
            minWidth={340}
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
