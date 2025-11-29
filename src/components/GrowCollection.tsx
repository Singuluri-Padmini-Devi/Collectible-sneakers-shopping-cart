import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const GrowSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '60px 0',
  position: 'relative',
  overflow: 'hidden',
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '60px',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '40px',
  },
}));

const TextSection = styled(Box)(({ theme }) => ({
  flex: '1 1 500px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const MediaSection = styled(Box)(({ theme }) => ({
  flex: '1 1 500px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const WindowStack = styled(Box)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  minHeight: '400px',
});

const BrowserWindow = styled(Box)({
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  backgroundColor: '#FFFFFF',
});

const WindowHeader = styled(Box)({
  backgroundColor: '#F5F5F5',
  padding: '12px 16px',
  display: 'flex',
  gap: '8px',
  borderBottom: '1px solid #E0E0E0',
});

const Dot = styled(Box)({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
});

const WindowImage = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  display: 'block',
});

const LeftImage = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  marginTop: '24px',
});

const WavesImage = styled('img')({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: 'auto',
  height: 'auto',
  maxWidth: '50%',
  zIndex: 0,
  pointerEvents: 'none',
});

const GrowCollection = () => {
  return (
    <GrowSection>
      <Container maxWidth="lg">
        <ContentWrapper>
          <TextSection>
            <Typography variant="h2" sx={{ mb: 4, color: '#1A1F2E', fontWeight: 700 }}>
              Grow your collection
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 3, color: '#666666', lineHeight: 1.8, fontSize: '1.1rem' }}
            >
              Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum
              pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: '#666666', lineHeight: 1.8, fontSize: '1.1rem' }}
            >
              Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at
              bibendum quam tellus.
            </Typography>
            <LeftImage
              src="/images/section 5 left image.png"
              alt="Navigation sidebar"
            />
          </TextSection>
          <MediaSection>
            <WindowStack>
              <BrowserWindow sx={{ zIndex: 3, position: 'relative' }}>
                <WindowHeader>
                  <Dot sx={{ backgroundColor: '#FF5F57' }} />
                  <Dot sx={{ backgroundColor: '#FFBD2E' }} />
                  <Dot sx={{ backgroundColor: '#28CA42' }} />
                </WindowHeader>
                <WindowImage
                  src="/images/right images 1.png"
                  alt="Sneaker collection 1"
                />
              </BrowserWindow>
              <BrowserWindow sx={{ zIndex: 2, marginLeft: { xs: '20px', md: '40px' }, marginTop: { xs: '-20px', md: '-40px' }, position: 'relative' }}>
                <WindowHeader>
                  <Dot sx={{ backgroundColor: '#FF5F57' }} />
                  <Dot sx={{ backgroundColor: '#FFBD2E' }} />
                  <Dot sx={{ backgroundColor: '#28CA42' }} />
                </WindowHeader>
                <WindowImage
                  src="/images/right images 2.png"
                  alt="Sneaker collection 2"
                />
              </BrowserWindow>
              <BrowserWindow sx={{ zIndex: 1, marginLeft: { xs: '40px', md: '80px' }, marginTop: { xs: '-20px', md: '-40px' }, position: 'relative' }}>
                <WindowHeader>
                  <Dot sx={{ backgroundColor: '#FF5F57' }} />
                  <Dot sx={{ backgroundColor: '#FFBD2E' }} />
                  <Dot sx={{ backgroundColor: '#28CA42' }} />
                </WindowHeader>
                <WindowImage
                  src="/images/right images 3.png"
                  alt="Sneaker collection 3"
                />
              </BrowserWindow>
            </WindowStack>
          </MediaSection>
        </ContentWrapper>
        <WavesImage
          src="/images/Waves.png"
          alt="Waves decoration"
        />
      </Container>
    </GrowSection>
  );
};

export default GrowCollection;

