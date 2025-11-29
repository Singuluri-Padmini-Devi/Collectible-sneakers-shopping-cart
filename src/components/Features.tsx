import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const FeaturesSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '80px 0',
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: '32px',
  height: '100%',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const IconImage = styled('img')({
  width: '64px',
  height: '64px',
  objectFit: 'contain',
  marginBottom: '24px',
});

const Features = () => {
  return (
    <FeaturesSection>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FeatureCard>
              <IconImage
                src="/images/Rectangle 25.png"
                alt="Nibh viverra icon"
              />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Nibh viverra
              </Typography>
              <Typography variant="body2" sx={{ color: '#666666', lineHeight: 1.8 }}>
                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat
                turpis natoque leo, massa.
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard>
              <IconImage
                src="/images/Rectangle 26.png"
                alt="Cursus amet icon"
              />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Cursus amet
              </Typography>
              <Typography variant="body2" sx={{ color: '#666666', lineHeight: 1.8 }}>
                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat
                turpis natoque leo, massa.
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard>
              <IconImage
                src="/images/Rectangle 27.png"
                alt="Ipsum fermentum icon"
              />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Ipsum fermentum
              </Typography>
              <Typography variant="body2" sx={{ color: '#666666', lineHeight: 1.8 }}>
                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat
                turpis natoque leo, massa.
              </Typography>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;

