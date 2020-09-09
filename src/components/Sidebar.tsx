import React from 'react'
import { Box, Flex, Avatar, Text, IconButton } from 'theme-ui'
import NavLink from './NavLink'
import { icons } from '@tabetalt/kit'

const Sidebar = () => {
    return (
      <Flex
        sx={{
          backgroundColor: 'gray_1',
          minWidth: '310px',
          maxWidth: '310px',
          translate: 'all 0.3',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{ p: 4, display: 'flex', alignItems: 'center', mb: [0, 0, 4] }}
        >
          <Avatar size="54" alt="user avatar" src="https://via.placeholder.com/54x54" />
          <Text sx={{ ml: 3 }}>Butikknavn</Text>
        </Box>
        <Box sx={{ flexGrow: 3 }}>
          <NavLink to="/">
            <icons.DashboardIcon /> Dashbord
          </NavLink>
          <NavLink to="/catalog/products">
            <icons.ShirtIcon /> Produkter
          </NavLink>
          <NavLink to="/catalog/categories">
            <icons.FolderIcon /> Kategorier
          </NavLink>
          <NavLink to="/order">
            <icons.ShirtIcon /> Ordre/Kunder
          </NavLink>
          <NavLink to="/page">
            <icons.ListIcon /> Sider
          </NavLink>
          <NavLink to="/settings">
            <icons.SettingsIcon /> Innstillinger
          </NavLink>
          <NavLink to="/support">
            <icons.QuestionIcon /> Hjelpesenter
          </NavLink>
        </Box>
        <Flex
          sx={{ p: 4, alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Text>Emil Walter</Text>
          <IconButton aria-label="user dropdown">
            <icons.UploadIcon />
          </IconButton>
        </Flex>
      </Flex>
    );
}

export default Sidebar
