import React from 'react';
import { Box, Flex, Button } from 'theme-ui';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const links = [
    {
      name: 'Dashbord',
      to: '/',
    },
  ];

  return (
    <Flex
      sx={{
        backgroundColor: 'gray2',
        // justifyContent: 'center',
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
          <Link to={link.to} key={i}>
            {link.name}
          </Link>
        ))}
      </Box>
      <Box sx={{ px: 5, py: 4 }}>
        <Button variant="outline">Gå til butikken</Button>
        <Button sx={{ ml: 3 }}>Logg ut</Button>
      </Box>
    </Flex>
  );
};

export default Header;
