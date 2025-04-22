import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Chip, 
  Grid, 
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Autocomplete
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  borderRadius: theme.spacing(2),
}));

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    foodPreferences: [],
    favoriteCuisines: [],
    favoriteRestaurants: [],
    wantToTryDishes: [],
    wantToTryRestaurants: [],
    diningStyle: '',
    location: ''
  });

  const foodPreferenceOptions = [
    'Vegetarian', 'Vegan', 'Spicy', 'Sushi', 'Italian', 'Mexican', 
    'Indian', 'Chinese', 'Japanese', 'Thai', 'Mediterranean'
  ];

  const diningStyleOptions = [
    'Casual', 'Fine Dining', 'Street Food', 'Cafe', 'Fast Food', 
    'Family Style', 'Buffet', 'Food Truck'
  ];

  const handleInputChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Taste Profile
      </Typography>

      <StyledPaper>
        <Typography variant="h6" gutterBottom>
          Basic Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              value={profile.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Location"
              value={profile.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
            />
          </Grid>
        </Grid>
      </StyledPaper>

      <StyledPaper>
        <Typography variant="h6" gutterBottom>
          Food Preferences
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Autocomplete
              multiple
              options={foodPreferenceOptions}
              value={profile.foodPreferences}
              onChange={(_, newValue) => handleInputChange('foodPreferences', newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Food Preferences"
                  placeholder="Select your preferences"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              multiple
              options={foodPreferenceOptions}
              value={profile.favoriteCuisines}
              onChange={(_, newValue) => handleInputChange('favoriteCuisines', newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Favorite Cuisines"
                  placeholder="Select your favorite cuisines"
                />
              )}
            />
          </Grid>
        </Grid>
      </StyledPaper>

      <StyledPaper>
        <Typography variant="h6" gutterBottom>
          Dining Preferences
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Dining Style</InputLabel>
              <Select
                value={profile.diningStyle}
                onChange={(e) => handleInputChange('diningStyle', e.target.value)}
                label="Dining Style"
              >
                {diningStyleOptions.map((style) => (
                  <MenuItem key={style} value={style}>
                    {style}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Favorite Restaurants"
              value={profile.favoriteRestaurants.join(', ')}
              onChange={(e) => handleInputChange('favoriteRestaurants', e.target.value.split(',').map(r => r.trim()))}
              helperText="Enter restaurants separated by commas"
            />
          </Grid>
        </Grid>
      </StyledPaper>

      <StyledPaper>
        <Typography variant="h6" gutterBottom>
          Want to Try
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Dishes to Try"
              value={profile.wantToTryDishes.join(', ')}
              onChange={(e) => handleInputChange('wantToTryDishes', e.target.value.split(',').map(d => d.trim()))}
              helperText="Enter dishes separated by commas"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Restaurants to Try"
              value={profile.wantToTryRestaurants.join(', ')}
              onChange={(e) => handleInputChange('wantToTryRestaurants', e.target.value.split(',').map(r => r.trim()))}
              helperText="Enter restaurants separated by commas"
            />
          </Grid>
        </Grid>
      </StyledPaper>

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary" size="large">
          Save Profile
        </Button>
      </Box>
    </Container>
  );
};

export default Profile; 