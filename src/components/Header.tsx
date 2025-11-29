import { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Container, IconButton, Drawer, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: 'none',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
}));

const Logo = styled('div')(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: theme.palette.primary.main,
  cursor: 'pointer',
}));

const NavLink = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  margin: '0 8px',
  fontSize: '0.95rem',
  fontWeight: 400,
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.dark,
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MobileNavLink = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  width: '100%',
  justifyContent: 'flex-start',
  padding: '16px 24px',
  fontSize: '1rem',
  fontWeight: 400,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'rgba(139, 69, 19, 0.1)',
  },
}));

const SignUpButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  marginLeft: '16px',
  '&:hover': {
    borderColor: theme.palette.primary.dark,
    backgroundColor: 'transparent',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MobileSignUpButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  margin: '16px 24px',
  width: 'calc(100% - 48px)',
  '&:hover': {
    borderColor: theme.palette.primary.dark,
    backgroundColor: 'rgba(139, 69, 19, 0.1)',
  },
}));

const HamburgerButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 24px',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const HeaderImage = styled('img')({
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  width: 'auto',
  maxWidth: '60%',
  objectFit: 'contain',
  objectPosition: 'top right',
  zIndex: 0,
  pointerEvents: 'none',
});

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: 'Products', href: '#' },
    { label: 'Solutions', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Resources', href: '#' },
    { label: 'Log In', href: '#' },
  ];

  return (
    <>
      <StyledAppBar>
        <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <HeaderImage
            src="/images/Rectangle 31.png"
            alt="Header decoration"
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          />
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Toolbar disableGutters sx={{ py: 2 }}>
              <Logo>Collers</Logo>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                <NavLink>Products</NavLink>
                <NavLink>Solutions</NavLink>
                <NavLink>Pricing</NavLink>
                <NavLink>Resources</NavLink>
                <NavLink>Log In</NavLink>
                <SignUpButton variant="outlined">Sign up now</SignUpButton>
              </Box>
              <HamburgerButton
                edge="end"
                onClick={handleDrawerToggle}
                aria-label="menu"
              >
                <MenuIcon />
              </HamburgerButton>
            </Toolbar>
          </Container>
        </Box>
      </StyledAppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '280px',
            boxSizing: 'border-box',
          },
        }}
      >
        <DrawerHeader>
          <Logo>Collers</Logo>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: (theme) => theme.palette.primary.main }}
          >
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <List sx={{ padding: 0 }}>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <MobileNavLink onClick={handleDrawerToggle}>
                {item.label}
              </MobileNavLink>
            </ListItem>
          ))}
        </List>
        <MobileSignUpButton variant="outlined" onClick={handleDrawerToggle}>
          Sign up now
        </MobileSignUpButton>
      </Drawer>
    </>
  );
};

export default Header;

