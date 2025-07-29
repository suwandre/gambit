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
        px: { xs: 2, sm: 4, md: 6 }, // Responsive padding
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile, side-by-side on desktop
          maxWidth: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          gap: { xs: 4, md: 8 }, // Use gap instead of margins
          py: { xs: 4, sm: 6, md: 10 },
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
            width: { xs: '100%', md: 'auto' },
          }}
        >
          <Typography
            variant='h2'
            sx={{
              fontSize: { xs: '3rem', sm: '3.25rem', md: '3.75rem' }, // Responsive font sizes
              textAlign: 'center',
            }}
          >
            {' '}
            Play Chess Online <br /> on <b>Gambit!</b>
          </Typography>
          <GenericSideIconButton
            icon={<FaChessKnight size={45} />}
            title='Play Online'
            subtitle='Play with someone your level'
            sx={{
              width: '100%',
              height: { xs: 80, sm: 100 }, // Smaller buttons on mobile
              borderRadius: 3,
              mt: { xs: 2, md: 5 },
            }}
          />
          <GenericSideIconButton
            icon={<FaLaptop size={45} />}
            title='Play Computer'
            subtitle='Play vs. customizable training bots'
            customBg='#454341'
            customHover='#222'
            sx={{ 
              width: '100%',
              height: { xs: 80, sm: 100 },
              borderRadius: 3, 
              mt: { xs: 2, md: 3 }
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};
