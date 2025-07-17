import List from '@mui/material/List';
import { NavTab } from './NavTab';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

export const SidebarNav = () => {
  return (
    <List>
      <NavTab icon={<SportsEsportsOutlinedIcon />} label="Play" />
    </List>
  );
}