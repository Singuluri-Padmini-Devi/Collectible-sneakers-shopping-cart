import { Box, Container, Typography, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const MapSection = styled(Box)({
  backgroundColor: '#A0522D',
  padding: '60px 0',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
});

const TopSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '40px',
  alignItems: 'flex-start',
  marginBottom: '40px',
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '30px',
  },
}));

const MapWrapper = styled(Box)({
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '600px',
});

const LeftIconSection = styled(Box)(({ theme }) => ({
  flex: '0 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const LeftIcon = styled('img')({
  maxWidth: '200px',
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
});


const MapImage = styled('img')({
  width: '100%',
  maxWidth: '800px',
  height: 'auto',
  objectFit: 'contain',
  position: 'relative',
  zIndex: 1,
});

const EllipsesOverlay = styled('img')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '800px',
  height: 'auto',
  objectFit: 'contain',
  zIndex: 2,
  pointerEvents: 'none',
});

const StatsDisplay = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 3,
  textAlign: 'center',
});

const NotificationCard = styled(Card)(({ theme }) => ({
  position: 'absolute',
  top: '15%',
  left: '15%',
  backgroundColor: '#FFFFFF',
  padding: '16px',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  zIndex: 4,
  maxWidth: '250px',
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    marginTop: '20px',
  },
}));

const NotificationImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '12px',
});

const TextSection = styled(Box)({
  flex: '0 0 auto',
  maxWidth: '300px',
  textAlign: 'left',
});

const MapSectionComponent = () => {
  return (
    <MapSection>
      <Container maxWidth="lg">
        <TopSection>
          <LeftIconSection>
            <LeftIcon
              src="/images/left shoes text icon.png"
              alt="Shoes icon"
            />
          </LeftIconSection>
        </TopSection>
        <MapWrapper>
          <MapImage
            src="/images/map.png"
            alt="World map"
          />
          <EllipsesOverlay
            src="/images/Ellipses.png"
            alt="Ellipses overlay"
          />
          <StatsDisplay>
            <Typography variant="h2" sx={{ fontWeight: 700, color: '#FFFFFF', mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
              11,658,467
            </Typography>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 400 }}>
              Shoes Collected
            </Typography>
          </StatsDisplay>
        </MapWrapper>
      </Container>
    </MapSection>
  );
};

export default MapSectionComponent;

