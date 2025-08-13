import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Award, 
  Clock, 
  MapPin, 
  Star,
  TrendingUp,
  Zap,
  Calendar,
  Target,
  Filter,
  Plus,
  Gift
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
}

interface DashboardProps {
  user: User | null;
  setCurrentPage: (page: 'need-help' | 'want-to-help') => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, setCurrentPage }) => {
  const [helpRequests, setHelpRequests] = useState<HelpRequest[]>([]);
  const [filter, setFilter] = useState<'all' | 'urgent' | 'nearby'>('all');
  const [stats, setStats] = useState({
    totalHelped: 89,
    activeRequests: 24,
    communityPoints: 15420,
    weeklyGrowth: 12
  });

  useEffect(() => {
    // Mock data for help requests
    const mockRequests: HelpRequest[] = [
      {
        id: '1',
        title: 'Help with grocery shopping',
        description: 'Need assistance with weekly grocery shopping for elderly neighbor',
        category: 'Shopping',
        urgency: 'medium',
        location: 'Downtown Seattle',
        timeAgo: '2 hours ago',
        helpersNeeded: 1,
        helpersJoined: 0,
        requesterName: 'Sarah Chen',
        requesterAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      {
        id: '2',
        title: 'Moving furniture',
        description: 'Need 2-3 people to help move furniture to new apartment',
        category: 'Moving',
        urgency: 'high',
        location: 'Capitol Hill',
        timeAgo: '30 minutes ago',
        helpersNeeded: 3,
        helpersJoined: 1,
        requesterName: 'Mike Rodriguez',
        requesterAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      {
        id: '3',
        title: 'Pet sitting this weekend',
        description: 'Looking for someone to watch my dog while I visit family',
        category: 'Pet Care',
        urgency: 'low',
        location: 'Fremont',
        timeAgo: '1 day ago',
        helpersNeeded: 1,
        helpersJoined: 0,
        requesterName: 'Emily Johnson',
        requesterAvatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
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

  const statCards = [
    { 
      label: 'People Helped', 
      value: stats.totalHelped, 
      icon: Heart, 
      color: 'linear-gradient(135deg, #ec4899, #f43f5e)',
      trend: '+15%'
    },
    { 
      label: 'Active Requests', 
      value: stats.activeRequests, 
      icon: Clock, 
      color: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      trend: '+8%'
    },
    { 
      label: 'Community Points', 
      value: stats.communityPoints, 
      icon: Award, 
      color: 'linear-gradient(135deg, #f97316, #ea580c)',
      trend: `+${stats.weeklyGrowth}%`
    },
    { 
      label: 'Active Helpers', 
      value: 156, 
      icon: Users, 
      color: 'linear-gradient(135deg, #10b981, #059669)',
      trend: '+23%'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.name}! 👋
            </h1>
            <p className="text-gray-600">Ready to make a difference in your community today?</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl shadow-lg cursor-pointer"
            onClick={() => setCurrentPage('need-help')}
          >
            <Plus className="w-5 h-5" />
            <span className="font-semibold">Request Help</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="relative overflow-hidden rounded-2xl p-6 shadow-xl text-white"
            style={{ 
              background: stat.color.includes('gradient') ? stat.color : `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/90 text-sm font-medium">{stat.label}</p>
                <p className="text-3xl font-bold mt-2 text-white drop-shadow-md">
                  {stat.value.toLocaleString()}
                </p>
                <div className="flex items-center mt-2 text-white/90">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">{stat.trend} this week</span>
                </div>
              </div>
              <div className="opacity-30">
                <stat.icon className="w-12 h-12 text-white" />
              </div>
            </div>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setCurrentPage('need-help')}
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Heart className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold">Need Help?</h3>
              <p className="text-orange-100">Request assistance from the community</p>
            </div>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setCurrentPage('community-donations')}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Gift className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold">Community Donations</h3>
              <p className="text-green-100">Share resources with those in need</p>
            </div>
          </div>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setCurrentPage('want-to-help')}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold">Want to Help?</h3>
              <p className="text-blue-100">Find ways to support your neighbors</p>
            </div>
          </div>
        </motion.button>
      </motion.div>

      {/* Help Requests Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl shadow-xl p-6 mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Help Requests</h2>
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter</span>
            </motion.button>
          </div>
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {helpRequests.map((request, index) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01, y: -2 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all cursor-pointer border border-gray-200 hover:border-orange-200 hover:shadow-md"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={request.requesterAvatar}
                    alt={request.requesterName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{request.title}</h3>
                        <p className="text-sm text-gray-600">by {request.requesterName}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(request.urgency)}`}>
                        {request.urgency} priority
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{request.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {request.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {request.timeAgo}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {request.helpersJoined}/{request.helpersNeeded} helpers
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Community Impact */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Target className="w-8 h-8" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-2">Community Impact This Month</h3>
          <p className="text-green-100 mb-4">Together, we've made 247 connections and helped 189 community members</p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold">24h</div>
              <div className="text-green-200 text-sm">Avg Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">97%</div>
              <div className="text-green-200 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.8</div>
              <div className="text-green-200 text-sm flex items-center">
                <Star className="w-4 h-4 mr-1" />
                Rating
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
