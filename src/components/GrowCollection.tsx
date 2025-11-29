import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const GrowSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  backgroundImage: 'url(/images/Waves.png)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  padding: '60px 0',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
}));

const HeaderSection = styled(Box)({
  width: '100%',
  marginBottom: '40px',
  position: 'relative',
  zIndex: 1,
});

const BottomRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '40px',
  alignItems: 'flex-start',
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '30px',
  },
}));

const LeftImageSection = styled(Box)(({ theme }) => ({
  flex: '0 0 auto',
  width: 'auto',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const MediaSection = styled(Box)(({ theme }) => ({
  flex: '1 1 auto',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const WindowStack = styled(Box)({
  position: 'relative',
  width: '100%',
  minHeight: '500px',
});

const BrowserWindow = styled(Box)({
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  backgroundColor: '#FFFFFF',
  position: 'absolute',
  width: '100%',
  maxWidth: '500px',
  '&:nth-of-type(1)': {
    width: '100%',
    maxWidth: '500px',
  },
  '&:nth-of-type(2)': {
    width: '95%',
    maxWidth: '475px',
  },
  '&:nth-of-type(3)': {
    width: '90%',
    maxWidth: '450px',
  },
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
  maxWidth: '250px',
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
});


const GrowCollection = () => {
  return (
    <GrowSection>
      <Container maxWidth="lg">
        <HeaderSection>
          <Typography variant="h2" sx={{ mb: 3, color: '#1A1F2E', fontWeight: 700 }}>
            Grow your collection
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, color: '#666666', lineHeight: 1.8, fontSize: '1.1rem' }}
          >
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum
            pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 0, color: '#666666', lineHeight: 1.8, fontSize: '1.1rem' }}
          >
            Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at
            bibendum quam tellus.
          </Typography>
        </HeaderSection>
        <BottomRow>
          <LeftImageSection>
            <LeftImage
              src="/images/section 5 left image.png"
              alt="Navigation sidebar"
            />
          </LeftImageSection>
          <MediaSection>
            <WindowStack>
              <BrowserWindow sx={{ zIndex: 1, top: 0, left: 0 }}>
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
              <BrowserWindow sx={{ zIndex: 2, top: { xs: '20px', md: '40px' }, left: { xs: '20px', md: '40px' } }}>
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
              <BrowserWindow sx={{ zIndex: 3, top: { xs: '40px', md: '80px' }, left: { xs: '40px', md: '80px' } }}>
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
        </BottomRow>
      </Container>
    </GrowSection>
  );
};

export default GrowCollection;

