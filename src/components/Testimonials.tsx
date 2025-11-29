import { useRef } from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Stack, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TestimonialsSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '60px 0',
}));

const SectionHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '60px',
});

const CarouselContainer = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  padding: '20px 0',
  width: '100%',
});

const CarouselTrack = styled(Box)({
  display: 'flex',
  gap: '24px',
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  paddingLeft: '24px',
  paddingRight: '24px',
  paddingBottom: '20px',
  scrollbarWidth: 'none', // Firefox
  msOverflowStyle: 'none', // IE and Edge
  '&::-webkit-scrollbar': {
    display: 'none', // Chrome, Safari, Opera
  },
});

const TestimonialCard = styled(Card)(({ theme }) => ({
  minWidth: '380px',
  padding: '32px',
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

const CompanyHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '20px',
});

const CompanyIcon = styled('img')({
  height: 'auto',
  objectFit: 'contain',
});

const TestimonialText = styled(Typography)({
  color: '#333333',
  lineHeight: 1.8,
  marginBottom: '24px',
  flexGrow: 1,
});

const AuthorInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

const NavButton = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: 'rgba(139, 69, 19, 0.1)',
  },
}));

const YellowBackground = styled(Box)({
  backgroundColor: '#FFF9C4',
  padding: '40px 0',
  width: '100%',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
});

const Testimonials = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = 380 + 24; // card width + gap
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = 380 + 24; // card width + gap
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      company: 'Zoomerr',
      icon: '/images/Icon 1.png',
      text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Vel id scelerisque sit.',
      author: 'Hellen Jummy',
      role: 'Team Lead',
    },
    {
      company: 'SHELLS',
      icon: '/images/Icon 2.png',
      text: 'Aliquet ridiculus mi porta. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Vel id scelerisque sit.',
      author: 'Hellena John',
      role: 'Co-founder',
    },
    {
      company: 'ArtVenue',
      icon: '/images/Icon 3.png',
      text: 'A eget sed posuere dui. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Vel id scelerisque sit.',
      author: 'David Oshodi',
      role: 'Manager',
    },
    {
      company: 'Zoomerr',
      icon: '/images/Icon 1.png',
      text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Vel id scelerisque sit.',
      author: 'Hellen Jummy',
      role: 'Team Lead',
    },
    {
      company: 'SHELLS',
      icon: '/images/Icon 2.png',
      text: 'Aliquet ridiculus mi porta. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Vel id scelerisque sit.',
      author: 'Hellena John',
      role: 'Co-founder',
    },
    {
      company: 'ArtVenue',
      icon: '/images/Icon 3.png',
      text: 'A eget sed posuere dui. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Vel id scelerisque sit.',
      author: 'David Oshodi',
      role: 'Manager',
    },
  ];

  return (
    <TestimonialsSection>
      <Container maxWidth="lg">
        <SectionHeader>
          <Typography variant="h2" sx={{ color: '#1A1F2E', fontWeight: 700 }}>
            Because they love us
          </Typography>
          <Stack direction="row" spacing={1}>
            <NavButton size="small" onClick={scrollLeft}>
              <ArrowBackIosIcon fontSize="small" />
            </NavButton>
            <NavButton size="small" onClick={scrollRight}>
              <ArrowForwardIosIcon fontSize="small" />
            </NavButton>
          </Stack>
        </SectionHeader>
      </Container>
      <YellowBackground>
        <CarouselContainer>
          <CarouselTrack ref={carouselRef}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index}>
                <CompanyHeader>
                  <CompanyIcon src={testimonial.icon} alt={testimonial.company} />
                </CompanyHeader>
                <TestimonialText variant="body2">
                  {testimonial.text}
                </TestimonialText>
                <AuthorInfo>
                  <Avatar src="/images/User Thumb.png" alt={testimonial.author} />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#1A1F2E' }}>
                      {testimonial.author}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#999999' }}>
                      {testimonial.role}
                    </Typography>
                  </Box>
                </AuthorInfo>
              </TestimonialCard>
            ))}
          </CarouselTrack>
        </CarouselContainer>
      </YellowBackground>
    </TestimonialsSection>
  );
};

export default Testimonials;

