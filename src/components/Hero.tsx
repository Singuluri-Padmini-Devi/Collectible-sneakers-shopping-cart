import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '80px 0',
  position: 'relative',
  overflow: 'hidden',
}));

const ContentWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '60px',
  flexWrap: 'wrap',
});

const TextSection = styled(Box)({
  flex: '1 1 500px',
  maxWidth: '600px',
});

const ImageSection = styled(Box)({
  flex: '1 1 400px',
  position: 'relative',
  minHeight: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const SneakerImage = styled('img')({
  width: '100%',
  maxWidth: '500px',
  height: 'auto',
  objectFit: 'contain',
});

const WatchDemoLink = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: theme.palette.primary.main,
  cursor: 'pointer',
  marginLeft: '16px',
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}));

const Hero = () => {
  return (
    <HeroSection>
      <Container maxWidth="lg">
        <ContentWrapper>
          <TextSection>
            <Typography variant="h1" sx={{ mb: 3, color: '#000000' }}>
              Collectible Sneakers
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: '#666666', fontSize: '1.1rem', lineHeight: 1.8 }}
            >
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
              amet.
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="outlined" sx={{ borderColor: '#8B4513', color: '#8B4513' }}>
                Sign up now
              </Button>
              <WatchDemoLink>
                <PlayArrowIcon sx={{ fontSize: 40 }} />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Watch Demo
                </Typography>
              </WatchDemoLink>
            </Stack>
          </TextSection>
          <ImageSection>
            <SneakerImage
              src="/images/Col.png"
              alt="Collectible Sneaker"
            />
          </ImageSection>
        </ContentWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;

