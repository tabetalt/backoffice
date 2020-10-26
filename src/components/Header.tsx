/** @jsx jsx */
import React from 'react';
import { Box, Flex, jsx } from 'theme-ui';
import { Link, NavLink } from 'react-router-dom';

export interface HeaderProps {
  children?: React.ReactNode;
  links?: {
    name: string;
    to: string;
  }[];
}

const Header: React.FC<HeaderProps> = ({ children, links = [] }) => {
  debugger;
  return (
    <Flex
      sx={{
        backgroundColor: 'gray2',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          px: 5,
          py: 4,
          fontSize: 2,
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
              color: '#1D1D1D',
            }}
            style={{ color: '#9AA0B5' }}
            sx={{ marginLeft: i !== 0 ? '20%' : '0%' }}
          >
            {link.name}
          </NavLink>
        ))}
      </Box>
      <Box sx={{ px: 5, py: 4 }}>{children}</Box>
    </Flex>
  );
};

export default Header;
