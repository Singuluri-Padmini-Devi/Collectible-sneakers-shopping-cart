import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Link, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ArticlesSection = styled(Box)({
  backgroundColor: '#FFFFFF',
  padding: '60px 0',
});

const SectionHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '60px',
});

const ArticleCard = styled(Card)({
  height: '100%',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: '240px',
  objectFit: 'cover',
});

const ArticleTitle = styled(Typography)({
  fontWeight: 600,
  color: '#1A1F2E',
  marginBottom: '12px',
});

const ArticleDescription = styled(Typography)({
  color: '#666666',
  lineHeight: 1.6,
  marginBottom: '16px',
});

const ReadLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: 500,
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}));

const MoreLink = styled(Link)(({ theme }) => ({
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

const Articles = () => {
  const articles = [
    {
      image: '/images/shoe img 1.png',
      title: 'Congue velit risus',
      description: 'Nunc gravida semper tellus neque scelerisque eget tincidunt in.',
    },
    {
      image: '/images/shoe img 2.png',
      title: 'Ut mauris',
      description: 'Phasellus venenatis massa bibendum posuere dictum tristique.',
    },
    {
      image: '/images/shoe img 3.png',
      title: 'Aliquam tortor nunc',
      description: 'Leo mollis fermentum praesent in condimentum id velit purus in.',
    },
    {
      image: '/images/shoe img 4.png',
      title: 'Fusce non morbi',
      description: 'In sed bibendum metus pretium cursus tellus pharetra.',
    },
  ];

  return (
    <ArticlesSection>
      <Container maxWidth="lg">
        <SectionHeader>
          <Typography variant="h2" sx={{ color: '#1A1F2E', fontWeight: 700 }}>
            Articles by Collectors
          </Typography>
          <MoreLink href="#">
            More Articles
            <ArrowForwardIcon fontSize="small" />
          </MoreLink>
        </SectionHeader>
        <Grid container spacing={4}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ArticleCard>
                <StyledCardMedia image={article.image} title={article.title} />
                <CardContent sx={{ padding: '24px' }}>
                  <ArticleTitle variant="h6">{article.title}</ArticleTitle>
                  <ArticleDescription variant="body2">
                    {article.description}
                  </ArticleDescription>
                  <ReadLink href="#">
                    Read article
                    <ArrowForwardIcon fontSize="small" />
                  </ReadLink>
                </CardContent>
              </ArticleCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ArticlesSection>
  );
};

export default Articles;

