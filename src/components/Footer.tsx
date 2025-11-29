import { Box, Container, Typography, Grid, Link, Stack, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '80px 0 40px',
  color: '#FFFFFF',
}));

const FooterColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const ColumnTitle = styled(Typography)({
  fontWeight: 600,
  marginBottom: '8px',
  fontSize: '1.1rem',
});

const FooterLink = styled(Link)({
  color: '#CCCCCC',
  textDecoration: 'none',
  fontSize: '0.95rem',
  '&:hover': {
    color: '#FFFFFF',
  },
});

const AppButton = styled(Box)({
  backgroundColor: '#000000',
  borderRadius: '8px',
  padding: '12px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  cursor: 'pointer',
  transition: 'opacity 0.3s ease',
  marginBottom: '12px',
  '&:hover': {
    opacity: 0.8,
  },
});

const AppLogo = styled(Box)({
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFFFFF',
  fontWeight: 'bold',
});

const SocialIcon = styled(IconButton)({
  backgroundColor: '#000000',
  color: '#FFFFFF',
  width: '40px',
  height: '40px',
  '&:hover': {
    backgroundColor: '#333333',
  },
});

const BottomBar = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '40px',
  paddingTop: '24px',
  flexWrap: 'wrap',
  gap: '16px',
});

const LanguageSelector = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
});

const Footer = () => {
  return (
    <FooterSection>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <FooterColumn>
              <ColumnTitle>Product</ColumnTitle>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Overview</FooterLink>
              <FooterLink href="#">Browse</FooterLink>
              <FooterLink href="#">Accessibility</FooterLink>
              <FooterLink href="#">Five</FooterLink>
            </FooterColumn>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterColumn>
              <ColumnTitle>Solutions</ColumnTitle>
              <FooterLink href="#">Brainstorming</FooterLink>
              <FooterLink href="#">Ideation</FooterLink>
              <FooterLink href="#">Wireframing</FooterLink>
              <FooterLink href="#">Research</FooterLink>
              <FooterLink href="#">Design</FooterLink>
            </FooterColumn>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterColumn>
              <ColumnTitle>Support</ColumnTitle>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Developers</FooterLink>
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Integrations</FooterLink>
              <FooterLink href="#">Reports</FooterLink>
            </FooterColumn>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterColumn>
              <ColumnTitle>Get the App</ColumnTitle>
              <AppButton>
                <AppLogo>🍎</AppLogo>
                <Box>
                  <Typography variant="caption" sx={{ display: 'block', fontSize: '0.7rem' }}>
                    Download on the
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>
                    App Store
                  </Typography>
                </Box>
              </AppButton>
              <AppButton>
                <AppLogo>▶</AppLogo>
                <Box>
                  <Typography variant="caption" sx={{ display: 'block', fontSize: '0.7rem' }}>
                    GET IT ON
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>
                    Google Play
                  </Typography>
                </Box>
              </AppButton>
              <Box sx={{ mt: 2 }}>
                <ColumnTitle sx={{ mb: 2 }}>Follow Us</ColumnTitle>
                <Stack direction="row" spacing={1}>
                  <SocialIcon size="small">
                    <YouTubeIcon fontSize="small" />
                  </SocialIcon>
                  <SocialIcon size="small">
                    <FacebookIcon fontSize="small" />
                  </SocialIcon>
                  <SocialIcon size="small">
                    <TwitterIcon fontSize="small" />
                  </SocialIcon>
                  <SocialIcon size="small">
                    <InstagramIcon fontSize="small" />
                  </SocialIcon>
                  <SocialIcon size="small">
                    <LinkedInIcon fontSize="small" />
                  </SocialIcon>
                </Stack>
              </Box>
            </FooterColumn>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: '#333333', my: 4 }} />
        <BottomBar>
          <Typography variant="body2" sx={{ color: '#CCCCCC' }}>
            Collers @ 2023. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            <FooterLink href="#">Terms</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
            <LanguageSelector>
              <LanguageIcon fontSize="small" />
              <Typography variant="body2">EN</Typography>
            </LanguageSelector>
          </Stack>
        </BottomBar>
      </Container>
    </FooterSection>
  );
};

export default Footer;

