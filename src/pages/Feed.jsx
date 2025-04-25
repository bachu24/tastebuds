import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Feed = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Feed
        </Typography>
        <Typography variant="subtitle1">
          Discover what your friends are eating and sharing.
        </Typography>
      </Box>
    </Container>
  );
};

export default Feed; 