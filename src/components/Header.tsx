/** @jsx jsx */
import React from 'react';
import { Box, Flex, jsx } from 'theme-ui';
import { NavLink } from 'react-router-dom';

export interface HeaderProps {
  children?: React.ReactNode;
  links?: {
    name: string;
    to: string;
  }[];
  underLinks?: {
    name: string;
    to: string;
  }[];
}

const Header: React.FC<HeaderProps> = ({
  children,
  links = [],
  underLinks = [],
}) => {
  return (
    <Flex
      sx={{
        backgroundColor: '#F6F6F9',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          px: 4,
          py: 4,
          '> a': {
            color: 'text',
            textDecoration: 'none',
          },
        }}
      >
        {(links || []).map((link, i) => (
          <NavLink
            to={link.to}
            key={i}
            activeStyle={{
              color: 'text',
            }}
            style={{ color: '#9AA0B5' }}
            sx={{ fontSize: 2, marginLeft: i !== 0 ? '20%' : '0%' }}
          >
            {link.name}
          </NavLink>
        ))}
        {(underLinks || []).map((underLink, i) => (
          <NavLink
            to={underLink.to}
            key={i}
            activeStyle={{
              color: 'text',
            }}
            style={{ color: '#9AA0B5' }}
            sx={{ marginLeft: '8%' }}
          >
            {underLink.name}
          </NavLink>
        ))}
      </Box>
      <Box sx={{ px: 5, py: 4 }}>{children}</Box>
    </Flex>
  );
};

export default Header;
