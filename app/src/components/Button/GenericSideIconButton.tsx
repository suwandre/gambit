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
  height?: number;
  width?: number | string;
  minWidth?: number | string;
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
  height,
  width,
  minWidth,
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
      height: height || { xs: 80, sm: 100 }, // Responsive default height
      width: width ?? '100%',
      minWidth: minWidth || { xs: 280, sm: 340 }, // Responsive minimum width
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
        width: { xs: 48, sm: 64 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        mr: marginFromIcon || { xs: 1, sm: 2.5, md: 5 },
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
        sx={{ 
          color: '#fff',
          fontSize: titleFontSize || { xs: '1.1rem', sm: '1.25rem' }
        }}
      >
        {title}
      </Typography>
      <Typography
        variant='subtitle2'
        component='div'
        fontWeight={subtitleFontWeight ?? 500}
        sx={{ 
            color: '#fff', 
            opacity: 0.85,
            fontSize: subtitleFontSize || { xs: '0.8rem', sm: '0.875rem' }
          }}
      >
        {subtitle}
      </Typography>
    </Box>
  </Button>
);
