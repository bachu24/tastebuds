import { useState } from 'react';
import { UserProfile as UserProfileType } from '../../types/user';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfileType>({
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
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
      instagram: '@johndoe',
      twitter: '@johndoe'
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // TODO: Implement profile update logic
    console.log('Profile updated:', profile);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">User Profile</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and preferences.</p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
        <div className="border-t border-gray-200">
          <form onSubmit={handleSubmit}>
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  ) : (
                    profile.name
                  )}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  ) : (
                    profile.email
                  )}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={profile.location}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  ) : (
                    profile.location
                  )}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Bio</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={profile.bio}
                      onChange={handleChange}
                      rows={3}
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  ) : (
                    profile.bio
                  )}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Food Preferences</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {isEditing ? (
                    <input
                      type="text"
                      name="foodPreferences"
                      value={profile.foodPreferences.join(', ')}
                      onChange={(e) => {
                        const values = e.target.value.split(',').map(v => v.trim());
                        setProfile(prev => ({ ...prev, foodPreferences: values }));
                      }}
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  ) : (
                    profile.foodPreferences.join(', ')
                  )}
                </dd>
              </div>
            </dl>
            {isEditing && (
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Save Changes
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 