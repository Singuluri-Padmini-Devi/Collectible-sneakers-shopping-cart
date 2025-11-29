import { Box, Container, Typography, Grid, Button, Stack, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const WhyJoinSection = styled(Box)({
  backgroundColor: '#F9F9F5',
  padding: '60px 0',
  position: 'relative',
  overflow: 'hidden',
});

const ContentCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: '24px',
  padding: '60px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  display: 'flex',
  gap: '60px',
  flexWrap: 'wrap',
  position: 'relative',
  zIndex: 2,
}));

const TextSection = styled(Box)({
  flex: '1 1 400px',
});

const MediaSection = styled(Box)({
  flex: '1 1 400px',
  position: 'relative',
  backgroundImage: 'url(/images/video-bg-decoration.png)',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const VideoFrame = styled(Box)({
  borderRadius: '16px',
  overflow: 'hidden',
  position: 'relative',
  aspectRatio: '16/9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const PlayButton = styled(Box)({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const BrowserWindow = styled(Box)({
  backgroundColor: '#FFFFFF',
  borderRadius: '8px 8px 0 0',
  padding: '12px',
  display: 'flex',
  gap: '8px',
  borderBottom: '1px solid #E0E0E0',
});

const Dot = styled(Box)({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
});


const WhyJoinUs = () => {
  return (
    <WhyJoinSection>
      <Container maxWidth="lg">
        <ContentCard>
          <TextSection>
            <Typography variant="h2" sx={{ mb: 4, color: '#1A1F2E', fontWeight: 700 }}>
              Why join us
            </Typography>
            <List sx={{ mb: 4 }}>
              <ListItem disableGutters sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <CheckCircleIcon sx={{ color: '#50C878', fontSize: '28px' }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ color: '#333333', fontSize: '1.1rem' }}>
                      Est et in pharetra magna adipiscing ornare aliquam.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem disableGutters sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <CheckCircleIcon sx={{ color: '#50C878', fontSize: '28px' }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ color: '#333333', fontSize: '1.1rem' }}>
                      Tellus arcu sed consequat ac velit ut eu blandit.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <CheckCircleIcon sx={{ color: '#50C878', fontSize: '28px' }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ color: '#333333', fontSize: '1.1rem' }}>
                      Ullamcorper ornare in et egestas dolor orci.
                    </Typography>
                  }
                />
              </ListItem>
            </List>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#8B4513',
                color: '#8B4513',
                padding: '12px 32px',
                '&:hover': {
                  borderColor: '#654321',
                  backgroundColor: 'rgba(139, 69, 19, 0.05)',
                },
              }}
            >
              Sign up now
            </Button>
          </TextSection>
          <MediaSection>
            <Box sx={{ position: 'relative', width: '100%', maxWidth: '600px', zIndex: 1 }}>
              <BrowserWindow>
                <Dot sx={{ backgroundColor: '#FF5F57' }} />
                <Dot sx={{ backgroundColor: '#FFBD2E' }} />
                <Dot sx={{ backgroundColor: '#28CA42' }} />
              </BrowserWindow>
              <VideoFrame>
                <Box
                  component="img"
                  src="/images/Desktop.png"
                  alt="Video"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <PlayButton sx={{ position: 'absolute' }}>
                  <PlayArrowIcon sx={{ fontSize: '50px', color: '#1A1F2E', marginLeft: '4px' }} />
                </PlayButton>
              </VideoFrame>
            </Box>
          </MediaSection>
        </ContentCard>
      </Container>
    </WhyJoinSection>
  );
};

export default WhyJoinUs;

