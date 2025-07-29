import Button from '@mui/material/Button';
import Image from 'next/image';
import { Connector, useConnect } from 'wagmi';
import { GenericSideIconButton } from '../Button/GenericSideIconButton';

export const WalletOptions = () => {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <GenericSideIconButton
      title={`Login with ${connector.name}`}
      icon={
        <Image
          src='/metamask.svg'
          alt='Metamask Logo'
          width={28}
          height={28}
          style={{ marginRight: '1.75rem' }}
        />
      }
      key={connector.uid}
      titleFontSize='1rem'
      marginFromIcon={1.5}
      height={60}
      minWidth={340}
      sx={{
        backgroundColor: '#1E1D1A',
        color: '#DCDCDC',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      }}
      onClick={() => connect({ connector })}
    />
  ));
};
