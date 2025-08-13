import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Navigation, 
  Filter,
  Users,
  Clock,
  Star,
  Heart,
  Zap
} from 'lucide-react';

interface User {
  id: string;
  name: string;
}

interface MapLocation {
  id: string;
  title: string;
  description: string;
  category: string;
  urgency: 'low' | 'medium' | 'high';
  location: string;
  coordinates: { lat: number; lng: number };
  requesterName: string;
  timeAgo: string;
  helpersNeeded: number;
  helpersJoined: number;
  distance: string;
  reward: number;
}

interface MapProps {
  user: User | null;
}

const Map: React.FC<MapProps> = ({ user }) => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [locations, setLocations] = useState<MapLocation[]>([]);
  const [filter, setFilter] = useState('all');

  // Mock map center (Seattle)
  const mapCenter = { lat: 47.6062, lng: -122.3321 };

  useEffect(() => {
    // Mock data for map locations
    const mockLocations: MapLocation[] = [
      {
        id: '1',
        title: 'Help with grocery shopping',
        description: 'Need assistance with weekly grocery shopping for elderly neighbor',
        category: 'shopping',
        urgency: 'medium',
        location: 'Downtown Seattle',
        coordinates: { lat: 47.6062, lng: -122.3321 },
        requesterName: 'Sarah Chen',
        timeAgo: '2 hours ago',
        helpersNeeded: 1,
        helpersJoined: 0,
        distance: '1.2 miles',
        reward: 25
      },
      {
        id: '2',
        title: 'Moving furniture',
        description: 'Need 2-3 people to help move furniture to new apartment',
        category: 'moving',
        urgency: 'high',
        location: 'Capitol Hill',
        coordinates: { lat: 47.6205, lng: -122.3212 },
        requesterName: 'Mike Rodriguez',
        timeAgo: '30 minutes ago',
        helpersNeeded: 3,
        helpersJoined: 1,
        distance: '2.1 miles',
        reward: 50
      },
      {
        id: '3',
        title: 'Pet sitting weekend',
        description: 'Looking for someone to watch my dog while visiting family',
        category: 'petcare',
        urgency: 'low',
        location: 'Fremont',
        coordinates: { lat: 47.6517, lng: -122.3493 },
        requesterName: 'Emily Johnson',
        timeAgo: '1 day ago',
        helpersNeeded: 1,
        helpersJoined: 0,
        distance: '3.5 miles',
        reward: 100
      },
      {
        id: '4',
        title: 'Tech support needed',
        description: 'Help setting up smart home devices and WiFi',
        category: 'tech',
        urgency: 'low',
        location: 'Ballard',
        coordinates: { lat: 47.6684, lng: -122.3834 },
        requesterName: 'Robert Kim',
        timeAgo: '3 hours ago',
        helpersNeeded: 1,
        helpersJoined: 0,
        distance: '4.2 miles',
        reward: 75
      },
      {
        id: '5',
        title: 'House cleaning',
        description: 'Deep cleaning before party, supplies provided',
        category: 'cleaning',
        urgency: 'medium',
        location: 'Queen Anne',
        coordinates: { lat: 47.6238, lng: -122.3563 },
        requesterName: 'Lisa Park',
        timeAgo: '5 hours ago',
        helpersNeeded: 2,
        helpersJoined: 0,
        distance: '1.8 miles',
        reward: 80
      }
    ];
    setLocations(mockLocations);
  }, []);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'shopping': return '🛒';
      case 'moving': return '📦';
      case 'petcare': return '🐕';
      case 'tech': return '💻';
      case 'cleaning': return '🧹';
      default: return '❓';
    }
  };

  const filteredLocations = filter === 'all' ? locations : locations.filter(loc => loc.urgency === filter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <MapPin className="w-8 h-8 text-white" />
        </motion.div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Help Near You 🗺️</h1>
        <p className="text-gray-600">Discover help requests in your neighborhood</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Area */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Map Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Community Map</h2>
                <div className="flex items-center space-x-3">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                  >
                    <option value="all">All Requests</option>
                    <option value="high">High Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="low">Low Priority</option>
                  </select>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    <span className="text-sm">Center</span>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Simulated Map */}
            <div className="relative h-96 bg-gradient-to-br from-green-100 to-blue-100">
              {/* Map Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  {/* Streets */}
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#666" strokeWidth="2" />
                  <line x1="0" y1="200" x2="400" y2="200" stroke="#666" strokeWidth="2" />
                  <line x1="100" y1="0" x2="100" y2="300" stroke="#666" strokeWidth="2" />
                  <line x1="200" y1="0" x2="200" y2="300" stroke="#666" strokeWidth="2" />
                  <line x1="300" y1="0" x2="300" y2="300" stroke="#666" strokeWidth="2" />
                  
                  {/* Parks */}
                  <rect x="50" y="50" width="80" height="60" fill="#4ade80" opacity="0.3" rx="5" />
                  <rect x="250" y="150" width="100" height="80" fill="#4ade80" opacity="0.3" rx="5" />
                </svg>
              </div>

              {/* Location Pins */}
              {filteredLocations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${20 + (index * 15) % 60}%`,
                    top: `${25 + (index * 12) % 50}%`
                  }}
                  onClick={() => setSelectedLocation(location)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="relative">
                    {/* Pin */}
                    <div className={`w-8 h-8 ${getUrgencyColor(location.urgency)} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                      <span className="text-xs">
                        {getCategoryIcon(location.category)}
                      </span>
                    </div>
                    
                    {/* Pulse animation for selected */}
                    {selectedLocation?.id === location.id && (
                      <motion.div
                        className={`absolute inset-0 ${getUrgencyColor(location.urgency)} rounded-full opacity-50`}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </div>
                </motion.div>
              ))}

              {/* User Location */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg">
                  <motion.div
                    className="absolute inset-0 bg-blue-400 rounded-full opacity-50"
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-600 whitespace-nowrap">
                  You are here
                </div>
              </motion.div>
            </div>

            {/* Map Legend */}
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600">High Priority</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-600">Medium Priority</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Low Priority</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">Your Location</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {/* Selected Location Details */}
          {selectedLocation ? (
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Request Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{selectedLocation.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{selectedLocation.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    selectedLocation.urgency === 'high' ? 'bg-red-100 text-red-800' :
                    selectedLocation.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {selectedLocation.urgency} priority
                  </span>
                  <div className="flex items-center text-orange-600">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="font-semibold">{selectedLocation.reward} pts</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{selectedLocation.location} • {selectedLocation.distance}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{selectedLocation.timeAgo}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{selectedLocation.helpersJoined}/{selectedLocation.helpersNeeded} helpers</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>I'll Help!</span>
                </motion.button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Click on a pin to see request details</p>
              </div>
            </div>
          )}

          {/* Nearby Stats */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">In Your Area</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Active Requests</span>
                <span className="font-bold text-gray-900">{filteredLocations.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Helpers Online</span>
                <span className="font-bold text-green-600">23</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Avg Response</span>
                <span className="font-bold text-blue-600">18 min</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
            
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-white/20 backdrop-blur-sm rounded-lg font-medium hover:bg-white/30 transition-all flex items-center justify-center space-x-2"
              >
                <Heart className="w-4 h-4" />
                <span>Request Help</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-white/20 backdrop-blur-sm rounded-lg font-medium hover:bg-white/30 transition-all flex items-center justify-center space-x-2"
              >
                <Filter className="w-4 h-4" />
                <span>Filter Requests</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Map;