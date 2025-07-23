import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ChessboardComponent } from '../Chess/Chessboard';
import { generateBaseChessboard } from '@/utils/baseChessboard';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FaChess, FaChessKnight, FaLaptop } from 'react-icons/fa';
import { GenericSideIconButton } from '../Button/GenericSideIconButton';

export const MainPage = () => {
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        maxWidth: '100%',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          py: 10,
        }}
      >
        <ChessboardComponent
          board={generateBaseChessboard()}
          onSquareClick={() => {}}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            ml: 10,
          }}
        >
          <Typography variant='h2'>
            {' '}
            Play Chess Online <br /> on <b>Gambit!</b>
          </Typography>
          <GenericSideIconButton
            icon={<FaChessKnight size={45} />}
            title='Play Online'
            subtitle='Play with someone your level'
            sx={{ mt: 5 }}
          />
          <GenericSideIconButton
            icon={<FaLaptop size={45} />}
            title='Play Computer'
            subtitle='Play vs. customizable training bots'
            customBg='#454341'
            customHover='#222'
            sx={{ mt: 3 }}
          />
        </Box>
      </Box>
    </Container>
  );
};
