import React from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Grid,
  Card,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box 
      component="main"
      sx={{ 
        backgroundColor: 'background.default',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Hero Section */}
      <Container 
        maxWidth={false}
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          width: '100%'
        }}
      >
        <Box
          sx={{
            width: '100%',
            py: { xs: 4, md: 8 },
            px: { xs: 2, sm: 4, md: 8 },
          }}
        >
          <Grid 
            container 
            spacing={{ xs: 4, md: 8 }} 
            alignItems="center"
            sx={{ 
              maxWidth: 1400,
              mx: 'auto',
              width: '100%'
            }}
          >
            <Grid item xs={12} md={7}>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'primary.main',
                  fontWeight: 500,
                  mb: 2 
                }}
              >
                Find your perfect dining companion
              </Typography>
              
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{
                  mb: 3,
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  background: 'linear-gradient(90deg, #18181B 0%, #9747FF 50%, #FF8E9E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                }}
              >
                Connect through{' '}
                <Box component="span" sx={{ display: 'block' }}>
                  shared tastes
                </Box>
              </Typography>

              <Typography 
                variant="subtitle1" 
                sx={{ 
                  mb: 4,
                  maxWidth: 600,
                  color: 'text.secondary'
                }}
              >
                Meet people who love the same foods you do. Discover new restaurants and dishes together.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={RouterLink}
                  to="/profile"
                  startIcon={<Box component="span" sx={{ fontSize: '1.2rem' }}>👤</Box>}
                >
                  Create Your Profile
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  component={RouterLink}
                  to="/browse"
                  startIcon={<Box component="span" sx={{ fontSize: '1.2rem' }}>🔍</Box>}
                >
                  Browse Profiles
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card 
                sx={{ 
                  p: 3,
                  bgcolor: '#FFFFFF',
                  maxWidth: { xs: '100%', md: 400 },
                  mx: 'auto',
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box 
                    sx={{ 
                      bgcolor: 'primary.main',
                      color: 'white',
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}
                  >
                    🍽️
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Taste Buds
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Dining companions
                    </Typography>
                  </Box>
                </Box>

                <Box 
                  sx={{ 
                    bgcolor: 'primary.light',
                    borderRadius: 3,
                    p: 2,
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <Box component="span" role="img" aria-label="heart">
                    ❤️
                  </Box>
                  <Typography>
                    87% match with your taste preferences
                  </Typography>
                </Box>

                <Box 
                  sx={{ 
                    bgcolor: 'primary.light',
                    borderRadius: 3,
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <Box component="span" role="img" aria-label="location">
                    📍
                  </Box>
                  <Typography>
                    5 potential matches nearby
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>

          {/* How It Works Section */}
          <Box 
            sx={{ 
              mt: { xs: 8, md: 12 }, 
              textAlign: 'center',
              maxWidth: 1400,
              mx: 'auto',
              width: '100%'
            }}
          >
            <Typography variant="h2" gutterBottom>
              How It Works
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                mb: 6,
                color: 'text.secondary'
              }}
            >
              Find your perfect dining companion in three simple steps
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 