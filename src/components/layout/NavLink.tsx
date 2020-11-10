import React from 'react';
import { NavLink as ThemeUINavLink, NavLinkProps } from 'theme-ui';
import { Link, LinkProps } from 'react-router-dom';

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps & LinkProps>(
  ({ replace, state, to, ...props }, ref) => (
    <Link
      replace={replace}
      state={state}
      to={to}
      style={{ textDecoration: 'none' }}
    >
      <ThemeUINavLink
        ref={ref}
        sx={{
          px: 4,
          py: 2,
          fontWeight: 'normal',
          display: 'flex',
          alignItems: 'center',
          color: 'text',
          textDecoration: 'none',
          '> svg': {
            mr: 3,
          },
          ':hover': {
            backgroundColor: 'gray1',
            color: 'text',
          },
        }}
        {...props}
      />
    </Link>
  )
);

NavLink.displayName = 'Skeleton';

export default NavLink;
