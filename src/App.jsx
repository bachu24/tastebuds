import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Profile from './pages/Profile';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9747FF',
      light: '#F5F0FF',
    },
    secondary: {
      main: '#18181B',
    },
    background: {
      default: '#F5F0FF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#18181B',
      secondary: '#71717A',
    }
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1.25rem',
      color: '#71717A',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          WebkitTextSizeAdjust: '100%'
        },
        body: {
          width: '100%',
          height: '100%',
          backgroundColor: '#F5F0FF',
        },
        '#root': {
          width: '100%',
          height: '100%',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          padding: '12px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#18181B',
          boxShadow: 'none',
          borderBottom: '1px solid #F4F4F5',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100%',
            overflow: 'hidden'
          }}
        >
          <Navigation />
          <Box 
            component="main" 
            sx={{ 
              flex: 1,
              width: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              {/* Add more routes as needed */}
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
