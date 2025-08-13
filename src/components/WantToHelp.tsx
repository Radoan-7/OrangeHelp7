import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  Users, 
  Heart,
  Star,
  ChevronRight,
  Calendar,
  Award,
  Zap
} from 'lucide-react';

interface User {
  id: string;
  name: string;
  points: number;
  badges: string[];
}

interface HelpRequest {
  id: string;
  title: string;
  description: string;
  category: string;
  urgency: 'low' | 'medium' | 'high';
  location: string;
  timeAgo: string;
  helpersNeeded: number;
  helpersJoined: number;
  requesterName: string;
  requesterAvatar: string;
  distance: string;
  estimatedTime: string;
  reward: number;
}

interface WantToHelpProps {
  user: User | null;
}

const WantToHelp: React.FC<WantToHelpProps> = ({ user }) => {
  const [helpRequests, setHelpRequests] = useState<HelpRequest[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedUrgency, setSelectedUrgency] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories', icon: '🔍' },
    { id: 'shopping', name: 'Shopping & Errands', icon: '🛒' },
    { id: 'moving', name: 'Moving & Transport', icon: '📦' },
    { id: 'cleaning', name: 'Cleaning & Maintenance', icon: '🧹' },
    { id: 'petcare', name: 'Pet Care', icon: '🐕' },
    { id: 'childcare', name: 'Child Care', icon: '👶' },
    { id: 'tech', name: 'Tech Support', icon: '💻' },
    { id: 'cooking', name: 'Cooking & Food', icon: '🍳' }
  ];

  useEffect(() => {
    // Mock data for help requests
    const mockRequests: HelpRequest[] = [
      {
        id: '1',
        title: 'Help with grocery shopping',
        description: 'Need assistance with weekly grocery shopping for elderly neighbor. Should take about 2 hours including travel time.',
        category: 'shopping',
        urgency: 'medium',
        location: 'Downtown Seattle',
        timeAgo: '2 hours ago',
        helpersNeeded: 1,
        helpersJoined: 0,
        requesterName: 'Sarah Chen',
        requesterAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        distance: '1.2 miles away',
        estimatedTime: '2-3 hours',
        reward: 25
      },
      {
        id: '2',
        title: 'Moving furniture to new apartment',
        description: 'Need 2-3 strong people to help move furniture from 2nd floor apartment. Truck is already arranged.',
        category: 'moving',
        urgency: 'high',
        location: 'Capitol Hill',
        timeAgo: '30 minutes ago',
        helpersNeeded: 3,
        helpersJoined: 1,
        requesterName: 'Mike Rodriguez',
        requesterAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        distance: '2.1 miles away',
        estimatedTime: '3-4 hours',
        reward: 50
      },
      {
        id: '3',
        title: 'Pet sitting this weekend',
        description: 'Looking for someone reliable to watch my golden retriever while I visit family out of town.',
        category: 'petcare',
        urgency: 'low',
        location: 'Fremont',
        timeAgo: '1 day ago',
        helpersNeeded: 1,
        helpersJoined: 0,
        requesterName: 'Emily Johnson',
        requesterAvatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        distance: '3.5 miles away',
        estimatedTime: '2 days',
        reward: 100
      },
      {
        id: '4',
        title: 'Help setting up smart home devices',
        description: 'Need tech-savvy person to help install and configure smart lights, thermostat, and security system.',
        category: 'tech',
        urgency: 'low',
        location: 'Ballard',
        timeAgo: '3 hours ago',
        helpersNeeded: 1,
        helpersJoined: 0,
        requesterName: 'Robert Kim',
        requesterAvatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        distance: '4.2 miles away',
        estimatedTime: '2-3 hours',
        reward: 75
      },
      {
        id: '5',
        title: 'Deep cleaning before party',
        description: 'Need help with thorough cleaning of house before hosting birthday party. All supplies provided.',
        category: 'cleaning',
        urgency: 'medium',
        location: 'Queen Anne',
        timeAgo: '5 hours ago',
        helpersNeeded: 2,
        helpersJoined: 0,
        requesterName: 'Lisa Park',
        requesterAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        distance: '1.8 miles away',
        estimatedTime: '3-4 hours',
        reward: 80
      }
    ];
    setHelpRequests(mockRequests);
  }, []);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'high': return '🔥';
      case 'medium': return '⚡';
      default: return '✨';
    }
  };

  const filteredRequests = helpRequests.filter(request => {
    const matchesSearch = request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || request.category === selectedCategory;
    const matchesUrgency = selectedUrgency === 'all' || request.urgency === selectedUrgency;
    
    return matchesSearch && matchesCategory && matchesUrgency;
  });

  const handleVolunteer = (requestId: string) => {
    // Simulate volunteering for a request
    setHelpRequests(prev => 
      prev.map(request => 
        request.id === requestId 
          ? { ...request, helpersJoined: request.helpersJoined + 1 }
          : request
      )
    );
    alert('Successfully volunteered! The requester will be notified.');
  };

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
          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Heart className="w-8 h-8 text-white" />
        </motion.div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Want to Help? 💝</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover meaningful ways to support your community. Every act of kindness makes a difference.
        </p>
      </motion.div>

      {/* User Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Your Impact This Month</h3>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-blue-100 text-sm">People Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">36h</div>
                <div className="text-blue-100 text-sm">Hours Given</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{user?.points}</div>
                <div className="text-blue-100 text-sm">Points Earned</div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <div className="text-blue-100 text-sm">Next Badge</div>
              <div className="text-lg font-semibold">Community Hero</div>
              <div className="w-32 bg-blue-400 rounded-full h-2 mt-1">
                <div className="bg-white rounded-full h-2 w-3/4"></div>
              </div>
            </div>
            <Award className="w-12 h-12 text-blue-200" />
          </div>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl shadow-lg p-6 mb-8"
      >
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help requests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-200 pt-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
                  <select
                    value={selectedUrgency}
                    onChange={(e) => setSelectedUrgency(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All Urgencies</option>
                    <option value="high">High Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="low">Low Priority</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-6"
      >
        <p className="text-gray-600">
          Found <span className="font-semibold text-gray-900">{filteredRequests.length}</span> help request{filteredRequests.length !== 1 ? 's' : ''} near you
        </p>
      </motion.div>

      {/* Help Requests Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredRequests.map((request, index) => (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="p-6">
                {/* Header with urgency and reward */}
                <div className="flex items-start justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(request.urgency)}`}>
                    <span className="mr-1">{getUrgencyIcon(request.urgency)}</span>
                    {request.urgency} priority
                  </span>
                  <div className="text-right">
                    <div className="flex items-center text-orange-600">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="font-semibold">{request.reward} pts</span>
                    </div>
                  </div>
                </div>

                {/* Title and description */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{request.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{request.description}</p>

                {/* Requester info */}
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={request.requesterAvatar}
                    alt={request.requesterName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{request.requesterName}</p>
                    <p className="text-xs text-gray-500">{request.timeAgo}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{request.location} • {request.distance}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Estimated time: {request.estimatedTime}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{request.helpersJoined}/{request.helpersNeeded} helpers</span>
                  </div>
                </div>

                {/* Action button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleVolunteer(request.id)}
                  disabled={request.helpersJoined >= request.helpersNeeded}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 ${
                    request.helpersJoined >= request.helpersNeeded
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg'
                  }`}
                >
                  {request.helpersJoined >= request.helpersNeeded ? (
                    <>
                      <span>✅ Fully Staffed</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      <span>I'll Help!</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredRequests.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No requests found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search terms or filters</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedUrgency('all');
            }}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Clear Filters
          </motion.button>
        </motion.div>
      )}

      {/* Bottom padding for mobile navigation */}
      <div className="h-20 md:h-0" />
    </motion.div>
  );
};

export default WantToHelp;