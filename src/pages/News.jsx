import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const News = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          News
        </Typography>
        <Typography variant="subtitle1">
          Stay up to date with the latest food news and trends.
        </Typography>
      </Box>
    </Container>
  );
};

export default News; 