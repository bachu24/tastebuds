import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  Container,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        borderBottom: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.06)'
      }}
    >
      <Container 
        maxWidth={false}
        sx={{
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <Toolbar 
          disableGutters 
          sx={{ 
            minHeight: 80,
            justifyContent: 'space-between',
            maxWidth: 1400,
            mx: 'auto',
            width: '100%'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Box 
                component="span" 
                sx={{ 
                  bgcolor: 'primary.main',
                  color: 'white',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem'
                }}
              >
                🍽️
              </Box>
              Taste Buds
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/"
              sx={{ 
                bgcolor: 'primary.light', 
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.light',
                  opacity: 0.9
                }
              }}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/browse"
              sx={{ 
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main'
                }
              }}
              startIcon={<Box component="span" sx={{ fontSize: '1.2rem' }}>🔍</Box>}
            >
              Browse
            </Button>
            <Button
              component={RouterLink}
              to="/profile"
              sx={{ 
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main'
                }
              }}
              startIcon={<Box component="span" sx={{ fontSize: '1.2rem' }}>👤</Box>}
            >
              Profile
            </Button>
            <Button
              component={RouterLink}
              to="/matches"
              sx={{ 
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main'
                }
              }}
              startIcon={<Box component="span" sx={{ fontSize: '1.2rem' }}>💬</Box>}
            >
              Matches
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation; 