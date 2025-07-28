import Button, { ButtonProps } from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type GenericSideIconButtonProps = ButtonProps & {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  customBg?: string;
  customHover?: string;
  titleFontWeight?: number;
  titleFontSize?: string;
  subtitleFontSize?: string;
  subtitleFontWeight?: number;
  // Margin from icon to title/subtitle
  marginFromIcon?: number;
};

export const GenericSideIconButton = ({
  icon,
  title,
  subtitle,
  customBg,
  customHover,
  titleFontWeight,
  titleFontSize,
  subtitleFontWeight,
  subtitleFontSize,
  marginFromIcon,
  sx,
  ...props
}: GenericSideIconButtonProps) => (
  <Button
    variant='contained'
    disableElevation
    sx={{
      backgroundColor: customBg ?? '#81B64C',
      color: '#fff',
      borderRadius: 3,
      height: 100,
      width: '100%',
      minWidth: 340,
      textTransform: 'none',
      justifyContent: 'center',
      alignItems: 'stretch',
      boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
      '&:hover': {
        backgroundColor: customHover ?? '#70a547',
      },
      ...sx,
    }}
    {...props}
  >
    {/* Icon: fixed width, centered vertically */}
    <Box
      sx={{
        width: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        mr: marginFromIcon ?? 5,
      }}
    >
      {icon}
    </Box>
    {/* Text block: centered in remainder of button */}
    <Box
      sx={{
        maxWidth: '50%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        height: '100%',
      }}
    >
      <Typography
        variant='h5'
        component='div'
        fontWeight={titleFontWeight ?? 700}
        fontSize={titleFontSize ?? '1.2rem'}
        sx={{ color: '#fff' }}
      >
        {title}
      </Typography>
      <Typography
        variant='subtitle2'
        component='div'
        fontWeight={subtitleFontWeight ?? 500}
        fontSize={subtitleFontSize ?? '0.8rem'}
        sx={{ color: '#fff', opacity: 0.85 }}
      >
        {subtitle}
      </Typography>
    </Box>
  </Button>
);
