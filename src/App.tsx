import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import NeedHelp from './components/NeedHelp';
import WantToHelp from './components/WantToHelp';
import Profile from './components/Profile';
import Map from './components/Map';
import CommunityDonations from './components/CommunityDonations';
import About from './components/About';
import Contact from './components/Contact';
import Security from './components/Security';
import Monetization from './components/Monetization';
import News from './components/News';
import Footer from './components/Footer';

type Page = 'dashboard' | 'need-help' | 'want-to-help' | 'profile' | 'map' | 'community-donations' | 'about' | 'contact' | 'security' | 'monetization' | 'news';

interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  badges: string[];
  avatar: string;
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simulate user login
    const mockUser: User = {
      id: '1',
      name: 'Md. Radoan Bin Mahabubur',
      email: 'radoan@example.com',
      points: 1250,
      badges: ['Helper Hero', 'Community Champion', 'Quick Responder'],
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    };
    setUser(mockUser);

    // Hide splash screen after animation
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'need-help':
        return <NeedHelp user={user} />;
      case 'want-to-help':
        return <WantToHelp user={user} />;
      case 'profile':
        return <Profile user={user} setUser={setUser} />;
      case 'map':
        return <Map user={user} />;
      case 'community-donations':
        return <CommunityDonations user={user} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'security':
        return <Security />;
      case 'monetization':
        return <Monetization />;
      case 'news':
        return <News />;
      default:
        return <Dashboard user={user} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        user={user}
      />
      
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;