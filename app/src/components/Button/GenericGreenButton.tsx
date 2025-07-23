import Button, { ButtonProps } from '@mui/material/Button';

type GenericGreenButtonProps = ButtonProps & {
  children: React.ReactNode;
}

export const GenericGreenButton = ({children, sx, variant, ...props}: GenericGreenButtonProps) => {
  return (
    <Button
    variant={variant || 'contained'}
      sx={{
        backgroundColor: '#81B64C',
        textTransform: 'none', // remove caps
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
