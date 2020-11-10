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

export interface ProductNavigation {
  creation?: boolean;
}

const ProductNavigation: React.FC<ProductNavigation> = ({ creation }) => {
  const checkDisabling = (e: React.MouseEvent) => {
    if (creation) e.preventDefault();
  };

  return (
    <Box sx={styles.wrapper}>
      <NavLink to="basic" style={styles.link} activeStyle={styles.linkActive}>
        Grunnleggende
      </NavLink>
      <NavLink
        to="description"
        style={styles.link}
        activeStyle={styles.linkActive}
        onClick={checkDisabling}
      >
        Beskrivelse
      </NavLink>
      <NavLink
        to="inventory"
        style={styles.link}
        activeStyle={styles.linkActive}
        onClick={checkDisabling}
      >
        Lagerbeholdning
      </NavLink>
      <NavLink
        to="variants"
        style={styles.link}
        activeStyle={styles.linkActive}
        onClick={checkDisabling}
      >
        Varianter
      </NavLink>
      <NavLink
        to="label-campaign"
        style={styles.link}
        activeStyle={styles.linkActive}
        onClick={checkDisabling}
      >
        Etikett og salg
      </NavLink>
    </Box>
  );
};

ProductNavigation.defaultProps = {
  creation: false,
};

export default ProductNavigation;
