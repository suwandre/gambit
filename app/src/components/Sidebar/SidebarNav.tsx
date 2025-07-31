import List from '@mui/material/List';
import { NavTab } from './NavTab';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

interface SidebarNavProps {
  onItemClick?: () => void;
}

export const SidebarNav = ({ onItemClick }: SidebarNavProps) => {
  return (
    <List>
      <NavTab 
        icon={<SportsEsportsOutlinedIcon />} 
        label='Play' 
        onClick={onItemClick}  // This closes the drawer on mobile
      />
    </List>
  );
};