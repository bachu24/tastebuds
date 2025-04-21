import { useState } from 'react';
import { UserProfile } from '../../types/user';

const mockUsers: UserProfile[] = [
  {
    id: '1',
    name: 'Alice Smith',
    email: 'alice@example.com',
    foodPreferences: ['Vegetarian', 'Spicy'],
    favoriteCuisines: ['Italian', 'Mexican'],
    favoriteRestaurants: ['Pizza Place', 'Taco Joint'],
    wantToTryDishes: ['Sushi', 'Ramen'],
    wantToTryRestaurants: ['New Restaurant', 'Trendy Cafe'],
    diningStyle: 'Casual',
    location: 'New York',
    bio: 'Food enthusiast and amateur chef',
    dietaryRestrictions: ['Gluten-free'],
    availability: ['Weekends', 'Evenings'],
    socialMedia: {
      instagram: '@alicesmith',
      twitter: '@alicesmith'
    }
  },
  {
    id: '2',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    foodPreferences: ['Vegan', 'Healthy'],
    favoriteCuisines: ['Japanese', 'Mediterranean'],
    favoriteRestaurants: ['Sushi Bar', 'Greek Taverna'],
    wantToTryDishes: ['Ramen', 'Falafel'],
    wantToTryRestaurants: ['New Sushi Place', 'Vegetarian Cafe'],
    diningStyle: 'Fine Dining',
    location: 'New York',
    bio: 'Food blogger and restaurant critic',
    dietaryRestrictions: ['Vegan'],
    availability: ['Weekdays', 'Weekends'],
    socialMedia: {
      instagram: '@bobjohnson',
      twitter: '@bobjohnson'
    }
  }
];

const CompanionDiscovery = () => {
  const [filters, setFilters] = useState({
    location: '',
    cuisine: '',
    diningStyle: '',
    foodPreferences: '',
  });

  const users = mockUsers;

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual filtering logic
    console.log('Searching with filters:', filters);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Dining Companions</h2>
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                placeholder="Enter location"
              />
            </div>
            <div>
              <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700">Cuisine</label>
              <select
                name="cuisine"
                id="cuisine"
                value={filters.cuisine}
                onChange={handleFilterChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              >
                <option value="">Any</option>
                <option value="italian">Italian</option>
                <option value="mexican">Mexican</option>
                <option value="japanese">Japanese</option>
                <option value="mediterranean">Mediterranean</option>
              </select>
            </div>
            <div>
              <label htmlFor="diningStyle" className="block text-sm font-medium text-gray-700">Dining Style</label>
              <select
                name="diningStyle"
                id="diningStyle"
                value={filters.diningStyle}
                onChange={handleFilterChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              >
                <option value="">Any</option>
                <option value="casual">Casual</option>
                <option value="fine-dining">Fine Dining</option>
                <option value="street-food">Street Food</option>
              </select>
            </div>
            <div>
              <label htmlFor="foodPreferences" className="block text-sm font-medium text-gray-700">Food Preferences</label>
              <select
                name="foodPreferences"
                id="foodPreferences"
                value={filters.foodPreferences}
                onChange={handleFilterChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              >
                <option value="">Any</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="spicy">Spicy</option>
                <option value="healthy">Healthy</option>
              </select>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div key={user.id} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-lg font-medium">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.location}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">{user.bio}</p>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900">Food Preferences</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {user.foodPreferences.map((pref) => (
                    <span
                      key={pref}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                    >
                      {pref}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900">Favorite Cuisines</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {user.favoriteCuisines.map((cuisine) => (
                    <span
                      key={cuisine}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {cuisine}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanionDiscovery; 