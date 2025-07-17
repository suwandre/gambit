import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

type NavTabProps = {
  icon: React.ReactElement;
  label: string;
  onClick?: () => void;
  selected?: boolean;
};

export const NavTab = ({ icon, label, onClick, selected }: NavTabProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton selected={selected} onClick={onClick}>
        <ListItemIcon sx={{ color: '#fff' }}>{icon}</ListItemIcon>
        <ListItemText
          primary={label}
          slotProps={{
            primary: {
              fontWeight: 'bold',
              fontSize: 18
            },
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};
