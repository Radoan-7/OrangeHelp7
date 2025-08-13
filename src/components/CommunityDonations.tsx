import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  User,
  Heart,
  Star,
  ChevronRight,
  Calendar,
  Package,
  Shirt,
  Utensils,
  Droplets,
  Stethoscope,
  Plus,
  Camera
} from 'lucide-react';

interface User {
  id: string;
  name: string;
  points: number;
}

interface Donation {
  id: string;
  title: string;
  description: string;
  category: string;
  condition: 'new' | 'like-new' | 'good' | 'fair';
  location: string;
  timeAgo: string;
  donorName: string;
  donorAvatar: string;
  images: string[];
  quantity: number;
  pickupAvailable: boolean;
  deliveryAvailable: boolean;
}

interface CommunityDonationsProps {
  user: User | null;
}

const CommunityDonations: React.FC<CommunityDonationsProps> = ({ user }) => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showDonateForm, setShowDonateForm] = useState(false);
  const [newDonation, setNewDonation] = useState({
    title: '',
    description: '',
    category: '',
    condition: 'good' as const,
    quantity: 1,
    pickupAvailable: true,
    deliveryAvailable: false
  });

  const categories = [
    { id: 'all', name: 'All Items', icon: Package },
    { id: 'clothing', name: 'Clothing', icon: Shirt },
    { id: 'food', name: 'Food & Water', icon: Utensils },
    { id: 'medical', name: 'Medical Supplies', icon: Stethoscope },
    { id: 'household', name: 'Household Items', icon: Gift },
    { id: 'other', name: 'Other', icon: Package }
  ];

  useEffect(() => {
    // Mock donation data
    const mockDonations: Donation[] = [
      {
        id: '1',
        title: 'Winter Coats - Various Sizes',
        description: 'Gently used winter coats for adults and children. Clean and in good condition.',
        category: 'clothing',
        condition: 'good',
        location: 'Downtown Seattle',
        timeAgo: '2 hours ago',
        donorName: 'Sarah Chen',
        donorAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        images: ['https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400'],
        quantity: 8,
        pickupAvailable: true,
        deliveryAvailable: false
      },
      {
        id: '2',
        title: 'Canned Food & Non-Perishables',
        description: 'Assorted canned goods, pasta, rice, and other non-perishable food items.',
        category: 'food',
        condition: 'new',
        location: 'Capitol Hill',
        timeAgo: '4 hours ago',
        donorName: 'Mike Rodriguez',
        donorAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        images: ['https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=400'],
        quantity: 25,
        pickupAvailable: true,
        deliveryAvailable: true
      },
      {
        id: '3',
        title: 'First Aid Supplies',
        description: 'Bandages, antiseptic, pain relievers, and basic medical supplies.',
        category: 'medical',
        condition: 'new',
        location: 'Fremont',
        timeAgo: '1 day ago',
        donorName: 'Dr. Emily Johnson',
        donorAvatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        images: ['https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400'],
        quantity: 15,
        pickupAvailable: true,
        deliveryAvailable: false
      }
    ];
    setDonations(mockDonations);
  }, []);

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'new': return 'bg-green-100 text-green-800';
      case 'like-new': return 'bg-blue-100 text-blue-800';
      case 'good': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDonations = donations.filter(donation => {
    const matchesSearch = donation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || donation.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleDonate = () => {
    const donation: Donation = {
      id: Date.now().toString(),
      ...newDonation,
      location: 'Your Location',
      timeAgo: 'Just now',
      donorName: user?.name || 'Anonymous',
      donorAvatar: user?.avatar || 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      images: ['https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=400']
    };
    
    setDonations(prev => [donation, ...prev]);
    setShowDonateForm(false);
    setNewDonation({
      title: '',
      description: '',
      category: '',
      condition: 'good',
      quantity: 1,
      pickupAvailable: true,
      deliveryAvailable: false
    });
    alert('Donation posted successfully! Thank you for helping the community.');
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
          className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Gift className="w-8 h-8 text-white" />
        </motion.div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Donations 🎁</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Share resources with those in need. Donate unused items or find what you need from generous community members.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
      >
        {[
          { label: 'Items Donated', value: 1247, icon: Gift, color: 'from-green-500 to-green-600' },
          { label: 'Families Helped', value: 89, icon: Heart, color: 'from-pink-500 to-rose-500' },
          { label: 'Active Donors', value: 156, icon: User, color: 'from-blue-500 to-blue-600' },
          { label: 'Items Available', value: filteredDonations.length, icon: Package, color: 'from-purple-500 to-purple-600' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 text-white shadow-lg`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/90 text-sm font-medium">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <stat.icon className="w-8 h-8 text-white/80" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 mb-8"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowDonateForm(true)}
          className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Donate Items</span>
        </motion.button>

        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search donations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </motion.div>

      {/* Donations Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
      >
        <AnimatePresence>
          {filteredDonations.map((donation, index) => (
            <motion.div
              key={donation.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img
                  src={donation.images[0]}
                  alt={donation.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConditionColor(donation.condition)}`}>
                    {donation.condition}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Title and Description */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{donation.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{donation.description}</p>

                {/* Donor Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={donation.donorAvatar}
                    alt={donation.donorName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{donation.donorName}</p>
                    <p className="text-xs text-gray-500">{donation.timeAgo}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{donation.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Package className="w-4 h-4 mr-2" />
                    <span>Quantity: {donation.quantity}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-xs">
                    {donation.pickupAvailable && (
                      <span className="text-green-600">✓ Pickup Available</span>
                    )}
                    {donation.deliveryAvailable && (
                      <span className="text-blue-600">✓ Delivery Available</span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Heart className="w-4 h-4" />
                  <span>Request Item</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Donate Form Modal */}
      <AnimatePresence>
        {showDonateForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowDonateForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Donate Items</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Item Title</label>
                  <input
                    type="text"
                    value={newDonation.title}
                    onChange={(e) => setNewDonation({ ...newDonation, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="e.g., Winter Coats"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={newDonation.description}
                    onChange={(e) => setNewDonation({ ...newDonation, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Describe the items..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={newDonation.category}
                    onChange={(e) => setNewDonation({ ...newDonation, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select category</option>
                    {categories.slice(1).map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                    <select
                      value={newDonation.condition}
                      onChange={(e) => setNewDonation({ ...newDonation, condition: e.target.value as any })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="new">New</option>
                      <option value="like-new">Like New</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                    <input
                      type="number"
                      min="1"
                      value={newDonation.quantity}
                      onChange={(e) => setNewDonation({ ...newDonation, quantity: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={newDonation.pickupAvailable}
                      onChange={(e) => setNewDonation({ ...newDonation, pickupAvailable: e.target.checked })}
                      className="text-green-500 focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700">Pickup available</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={newDonation.deliveryAvailable}
                      onChange={(e) => setNewDonation({ ...newDonation, deliveryAvailable: e.target.checked })}
                      className="text-green-500 focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700">Delivery available</span>
                  </label>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowDonateForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDonate}
                  disabled={!newDonation.title || !newDonation.category}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Donate
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom padding for mobile navigation */}
      <div className="h-20 md:h-0" />
    </motion.div>
  );
};

export default CommunityDonations;