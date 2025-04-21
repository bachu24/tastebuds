export interface User {
  id: string;
  name: string;
  email: string;
  profilePhoto?: string;
  foodPreferences: string[];
  favoriteCuisines: string[];
  favoriteRestaurants: string[];
  wantToTryDishes: string[];
  wantToTryRestaurants: string[];
  diningStyle: string;
  location: string;
}

export interface UserProfile extends User {
  bio?: string;
  dietaryRestrictions?: string[];
  availability?: string[];
  socialMedia?: {
    instagram?: string;
    twitter?: string;
  };
} 