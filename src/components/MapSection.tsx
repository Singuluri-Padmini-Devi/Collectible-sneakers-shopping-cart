import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const MapSection = styled(Box)({
  backgroundColor: '#78350F',
  padding: '60px 0',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
});

const MapWrapper = styled(Box)({
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '600px',
});

const LeftIconSection = styled(Box)({
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 5,
});

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



const MapSectionComponent = () => {
  return (
    <MapSection>
      <Container maxWidth="lg">
        <MapWrapper>
          <LeftIconSection>
            <LeftIcon
              src="/images/left shoes text icon.png"
              alt="Shoes icon"
            />
          </LeftIconSection>
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

