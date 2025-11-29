import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShowcaseSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(/images/Backlights.png)',
  backgroundSize: '100% auto',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#1A1F2E',
  padding: '60px 0',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: '60px 0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

const HeaderRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '60px',
  flexWrap: 'wrap',
  gap: '16px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '40px',
  },
}));

const ProductCard = styled(Card)({
  backgroundColor: '#2A2F3E',
  borderRadius: '16px',
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: '280px',
  objectFit: 'cover',
  backgroundColor: '#1A1F2E',
});

const CardTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 600,
  marginBottom: '12px',
});

const CardDescription = styled(Typography)({
  color: '#CCCCCC',
  fontSize: '0.9rem',
  lineHeight: 1.6,
  marginBottom: '20px',
  flexGrow: 1,
});

const BuyButton = styled(Button)({
  borderColor: '#FFFFFF',
  color: '#FFFFFF',
  alignSelf: 'flex-start',
  '&:hover': {
    borderColor: '#FFD700',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
  },
});

const SignUpHeaderButton = styled(Button)({
  borderColor: '#FFFFFF',
  color: '#FFFFFF',
  '&:hover': {
    borderColor: '#FFD700',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
  },
});


const ProductShowcase = () => {
  const productImages = [
    '/images/section 3 img 1.png',
    '/images/section 3 img 2.png',
    '/images/section 3 img 3.png',
  ];

  return (
    <ShowcaseSection>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <HeaderRow>
          <Typography
            variant="h2"
            sx={{ color: '#FFFFFF', fontWeight: 700 }}
          >
            The best of the best
          </Typography>
          <SignUpHeaderButton variant="outlined">
            Sign up now
          </SignUpHeaderButton>
        </HeaderRow>
        <Grid container spacing={4}>
          {productImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProductCard>
                <StyledCardMedia
                  image={image}
                  title={`Product ${index + 1}`}
                />
                <CardContent sx={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <CardTitle variant="h6">Title</CardTitle>
                  <CardDescription>
                    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                  </CardDescription>
                  <BuyButton
                    variant="outlined"
                    startIcon={<ShoppingCartIcon />}
                  >
                    Buy Now
                  </BuyButton>
                </CardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ShowcaseSection>
  );
};

export default ProductShowcase;

