import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, Link, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const EventsSection = styled(Box)({
  backgroundColor: '#FFF9C4',
  backgroundImage: 'url(/images/blue wave.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  padding: '60px 0',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
});

const SectionHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '60px',
});

const EventCard = styled(Card)({
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: '280px',
  objectFit: 'cover',
});

const EventTitle = styled(Typography)({
  fontWeight: 600,
  color: '#1A1F2E',
  marginBottom: '8px',
});

const EventSubtitle = styled(Typography)({
  color: '#666666',
  fontSize: '0.9rem',
  marginBottom: '16px',
});

const BuyTicketsLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: 500,
  fontSize: '1rem',
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}));

const CtaSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '60px 0',
  position: 'relative',
  overflow: 'hidden',
}));

const CtaContent = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '24px',
});

const DecorativeShape = styled(Box)({
  position: 'absolute',
  borderRadius: '30%',
  filter: 'blur(60px)',
  opacity: 0.3,
  zIndex: 0,
});

const ExploreLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: 500,
  fontSize: '1rem',
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}));

const AmazingEvents = () => {
  const events = [
    {
      title: 'Ipsum',
      subtitle: 'Varius est diam',
      image: '/images/amazing eve shoe 1.png',
    },
    {
      title: 'Purus',
      subtitle: 'Diam felis tempus',
      image: '/images/amazing eve shoe 2.png',
    },
    {
      title: 'Urna',
      subtitle: 'Vel nulla varius',
      image: '/images/amazing eve shoe 3.png',
    },
    {
      title: 'Vitae',
      subtitle: 'Amet tristique a',
      image: '/images/amazing eve shoe 4.png',
    },
  ];

  return (
    <>
      <EventsSection>
        <Container maxWidth="lg">
          <SectionHeader>
            <Typography variant="h2" sx={{ color: '#1A1F2E', fontWeight: 700 }}>
              Amazing events
            </Typography>
            <ExploreLink href="#">
              Explore Articles
              <ArrowForwardIcon fontSize="small" />
            </ExploreLink>
          </SectionHeader>
          <Grid container spacing={4}>
            {events.map((event, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <EventCard>
                  <StyledCardMedia image={event.image} title={event.title} />
                  <CardContent sx={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <EventTitle variant="h6">{event.title}</EventTitle>
                    <EventSubtitle>{event.subtitle}</EventSubtitle>
                    <Box sx={{ marginTop: 'auto' }}>
                      <BuyTicketsLink href="#">
                        Buy Tickets
                        <ArrowForwardIcon fontSize="small" />
                      </BuyTicketsLink>
                    </Box>
                  </CardContent>
                </EventCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </EventsSection>
      <CtaSection>
        <DecorativeShape
          sx={{
            width: '400px',
            height: '400px',
            backgroundColor: '#9B59B6',
            bottom: '-10%',
            right: '-5%',
          }}
        />
        <DecorativeShape
          sx={{
            width: '350px',
            height: '350px',
            backgroundColor: '#FF1493',
            bottom: '-5%',
            right: '10%',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <CtaContent>
            <Typography variant="h2" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
              Collect More Sneakers Today
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#FFFFFF',
                color: '#FFFFFF',
                padding: '12px 32px',
                '&:hover': {
                  borderColor: '#FFD700',
                  backgroundColor: 'rgba(255, 215, 0, 0.1)',
                },
              }}
            >
              Sign up now
            </Button>
          </CtaContent>
        </Container>
      </CtaSection>
    </>
  );
};

export default AmazingEvents;

