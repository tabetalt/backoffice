import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from 'theme-ui';

const styles = {
  wrapper: {
    mt: 3,
    mb: 5,
    '>a': {
      mr: 4,
      color: 'muted',
      fontWeight: 'normal',
      textDecoration: 'none',
      '&.active': { color: 'text' },
    },
  },
  link: { color: '#9AA0B5' },
  linkActive: { color: '#1D1D1D' },
};

export const SettingsNavigation: React.FC = () => {
  return (
    <Box sx={styles.wrapper}>
      <NavLink
        to="/settings/general"
        style={styles.link}
        activeStyle={styles.linkActive}
      >
        Generelt
      </NavLink>
      <NavLink
        to="/settings/shipping"
        style={styles.link}
        activeStyle={styles.linkActive}
      >
        Leveringsmetoder
      </NavLink>
      {/* <NavLink
        to="/settings/payment-method"
        style={styles.link}
        activeStyle={styles.linkActive}
      >
        Betalingsmetoder
      </NavLink> */}
    </Box>
  );
};
