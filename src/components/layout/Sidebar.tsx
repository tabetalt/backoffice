import React from 'react';
import { Box, Flex, Avatar, Text, IconButton } from 'theme-ui';
import NavLink from './NavLink';
import { icons } from '@tabetalt/kit';
import { useAuth } from '../../context/AuthContext';
import { useTenant } from '../../context/TenantContext';

const Sidebar: React.FC = () => {
  const { auth, currentUser } = useAuth();
  const { currentTenant } = useTenant();
  return (
    <Flex
      sx={{
        backgroundColor: 'gray2',
        minWidth: '310px',
        maxWidth: '310px',
        translate: 'all 0.3',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ p: 4, display: 'flex', alignItems: 'center', mb: [0, 0, 4] }}>
        <Avatar
          size="54"
          alt="user avatar"
          src="https://via.placeholder.com/54x54"
        />
        <Text sx={{ ml: 3 }}>{currentTenant?.displayName}</Text>
      </Box>
      <Box sx={{ flexGrow: 3 }}>
        {/* <NavLink to="/">
          <icons.DashboardIcon /> Dashbord
        </NavLink> TODO: Enable after first release*/}
        <NavLink to="/catalog/products">
          <icons.ShirtIcon /> Produkter
        </NavLink>
        <NavLink to="/catalog/categories">
          <icons.FolderIcon /> Kategorier
        </NavLink>
        <NavLink to="/order">
          <icons.ShirtIcon /> Ordre/Kunder
        </NavLink>
        {/* <NavLink to="/page">
          <icons.ListIcon /> Sider
        </NavLink> TODO: Enable after first release*/}
        <NavLink to="/settings">
          <icons.SettingsIcon /> Innstillinger
        </NavLink>
        {/* <NavLink to="/support">
          <icons.QuestionIcon /> Hjelpesenter
        </NavLink> TODO: Enable after first release */}
      </Box>
      <Flex
        sx={{ p: 4, alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Text>{currentUser?.displayName}</Text>
        <IconButton
          aria-label="user logout"
          onClick={() => {
            auth?.signOut();
            window.location.reload();
          }}
        >
          <icons.LogoutIcon />
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
