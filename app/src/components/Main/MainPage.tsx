import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ChessboardComponent } from '../Chess/Chessboard';
import { generateBaseChessboard } from '@/utils/baseChessboard';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FaChess, FaChessKnight } from 'react-icons/fa';
import { GenericGreenButton } from '../Button/GenericGreenButton';

export const MainPage = () => {
  return (
    <Container disableGutters sx={{
      display: 'flex',
      maxWidth: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        py: 10,
      }}>
        <ChessboardComponent board={generateBaseChessboard()} onSquareClick={() => {}} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          ml: 10,
        }}>
          <Typography variant='h2'> Play Chess Online <br /> on <b>Gambit!</b></Typography>
          <GenericGreenButton sx={{ width: '85%'}}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <FaChessKnight size={35} style={{marginRight: 30}} />
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography variant='h5'><b>Play Online</b></Typography>
                <Typography variant='subtitle2'>Play with someone your level</Typography>
              </Box>
            </Box>
          </GenericGreenButton>
          <Button variant='contained' sx={{ textTransform: 'none' }}>Play with a computer</Button>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}>
        <p>Hi</p>
        <p>Hi 2</p>
      </Box>
    </Container>
  );
};
