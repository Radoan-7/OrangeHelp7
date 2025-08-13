import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  Star, 
  Heart, 
  Clock,
  Settings,
  Edit3,
  Camera,
  Save
} from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  badges: string[];
  avatar: string;
}

interface ProfileProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const Profile: React.FC<ProfileProps> = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    location: 'Seattle, WA',
    bio: 'Passionate about helping others and building stronger communities.'
  });

  const stats = [
    { label: 'People Helped', value: 47, icon: Heart, color: 'text-pink-600' },
    { label: 'Hours Volunteered', value: 128, icon: Clock, color: 'text-blue-600' },
    { label: 'Points Earned', value: user?.points || 0, icon: Star, color: 'text-yellow-600' },
    { label: 'Success Rate', value: '98%', icon: Award, color: 'text-green-600' }
  ];

  const achievements = [
    { name: 'Helper Hero', description: 'Helped 25+ people', icon: '🦸', earned: true },
    { name: 'Quick Responder', description: 'Average response time under 1 hour', icon: '⚡', earned: true },
    { name: 'Community Champion', description: 'Active member for 6+ months', icon: '🏆', earned: true },
    { name: 'Super Helper', description: 'Help 100+ people', icon: '⭐', earned: false },
    { name: 'Local Legend', description: 'Top helper in your area', icon: '👑', earned: false },
    { name: 'Mentor', description: 'Guide new volunteers', icon: '🎓', earned: false }
  ];

  const recentActivity = [
    { type: 'help', title: 'Helped with grocery shopping', points: 25, time: '2 hours ago' },
    { type: 'help', title: 'Assisted with moving furniture', points: 50, time: '1 day ago' },
    { type: 'badge', title: 'Earned "Quick Responder" badge', points: 100, time: '3 days ago' },
    { type: 'help', title: 'Pet sitting for weekend', points: 75, time: '1 week ago' }
  ];

  const handleSave = () => {
    if (user) {
      setUser({
        ...user,
        name: editData.name,
        email: editData.email
      });
    }
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 mb-8"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Profile Image */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-orange-200"
            >
              <img
                src={user?.avatar}
                alt={user?.name}
                className="w-full h-full object-cover"
              />
              {isEditing && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              )}
            </motion.div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full flex items-center justify-center">
              <span className="text-xs">🟢</span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            {isEditing ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  className="text-2xl font-bold bg-transparent border-b-2 border-orange-300 focus:border-orange-500 outline-none"
                />
                <input
                  type="email"
                  value={editData.email}
                  onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                  className="block text-gray-600 bg-transparent border-b-2 border-gray-300 focus:border-orange-500 outline-none"
                />
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{user?.name}</h1>
                <p className="text-gray-600 mb-4">{user?.email}</p>
              </>
            )}
            
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
              {user?.badges.slice(0, 3).map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex justify-center md:justify-start space-x-4">
              {isEditing ? (
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSave}
                    className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </motion.button>
                </div>
              ) : (
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsEditing(true)}
                    className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </motion.button>
                </div>
              )}
            </div>
          </div>

          {/* Points Display */}
          <div className="text-center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-2"
            >
              <div className="text-center text-white">
                <div className="text-sm font-bold">{user?.points}</div>
                <div className="text-xs">Points</div>
              </div>
            </motion.div>
            <p className="text-sm text-gray-600">Total Earned</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Your Impact</h2>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="text-center p-4 bg-gray-50 rounded-xl"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Achievements</h2>
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`p-4 rounded-xl border-2 transition-all ${
                  achievement.earned
                    ? 'border-orange-200 bg-orange-50'
                    : 'border-gray-200 bg-gray-50 opacity-60'
                }`}
              >
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <div className={`font-semibold text-sm ${
                  achievement.earned ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {achievement.name}
                </div>
                <div className={`text-xs ${
                  achievement.earned ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {achievement.description}
                </div>
                {achievement.earned && (
                  <div className="mt-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl shadow-xl p-6 mt-8"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activity.type === 'help' ? 'bg-blue-100' : 'bg-orange-100'
              }`}>
                {activity.type === 'help' ? (
                  <Heart className="w-5 h-5 text-blue-600" />
                ) : (
                  <Award className="w-5 h-5 text-orange-600" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.time}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-orange-600">+{activity.points} pts</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Profile;