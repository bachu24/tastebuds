import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import SignUpForm from './components/auth/SignUpForm';
import LoginForm from './components/auth/LoginForm';
import UserProfile from './components/profile/UserProfile';
import CompanionDiscovery from './components/discovery/CompanionDiscovery';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Taste Buds
                  </h1>
                  <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                    Find your perfect dining companion based on shared food preferences and interests.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <div className="inline-flex rounded-md shadow">
                      <a
                        href="/signup"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                      >
                        Get started
                      </a>
                    </div>
                    <div className="ml-3 inline-flex">
                      <a
                        href="/discovery"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200"
                      >
                        Find companions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/discovery" element={<CompanionDiscovery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
