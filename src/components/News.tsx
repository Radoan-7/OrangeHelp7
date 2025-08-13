import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Newspaper, 
  Calendar, 
  User, 
  ArrowRight,
  Tag,
  Clock,
  TrendingUp,
  Heart,
  Users,
  Award,
  Zap
} from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured: boolean;
}

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper },
    { id: 'updates', name: 'Platform Updates', icon: Zap },
    { id: 'community', name: 'Community Stories', icon: Heart },
    { id: 'features', name: 'New Features', icon: TrendingUp },
    { id: 'events', name: 'Events', icon: Calendar }
  ];

  const newsArticles: NewsArticle[] = [
    {
      id: '1',
      title: 'OrangeHelp Reaches 10,000 Successful Connections',
      excerpt: 'A major milestone as our community grows stronger together, connecting neighbors and building lasting relationships.',
      content: 'We\'re thrilled to announce that OrangeHelp has facilitated over 10,000 successful connections between community members seeking and offering help. This incredible milestone represents thousands of acts of kindness, from grocery shopping for elderly neighbors to helping families move to new homes. Our platform has grown from a simple idea to a thriving ecosystem of mutual support, proving that technology can truly bring communities closer together.',
      author: 'Sarah Chen',
      date: '2024-01-15',
      category: 'community',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: '2',
      title: 'Introducing Community Donations Feature',
      excerpt: 'Share unused items with those in need. Our new donations feature makes it easy to give back to your community.',
      content: 'Today we\'re excited to launch our Community Donations feature, allowing members to share unused clothing, food, household items, and more with neighbors in need. This feature was requested by our community and developed with input from local charities and social services. Users can now post items they\'d like to donate, browse available donations, and coordinate pickup or delivery - all within the OrangeHelp platform.',
      author: 'Mike Rodriguez',
      date: '2024-01-10',
      category: 'features',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: '3',
      title: 'Enhanced Safety Features Now Live',
      excerpt: 'New identity verification and safety monitoring tools to ensure our community remains secure and trustworthy.',
      content: 'Safety is our top priority at OrangeHelp. We\'ve rolled out enhanced safety features including improved identity verification, real-time safety monitoring, and expanded reporting tools. These updates were developed in consultation with safety experts and community feedback. All users will now go through enhanced verification, and we\'ve added 24/7 safety monitoring to quickly address any concerns.',
      author: 'Dr. Emily Johnson',
      date: '2024-01-05',
      category: 'updates',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: '4',
      title: 'Community Hero Spotlight: Maria\'s 100 Acts of Kindness',
      excerpt: 'Meet Maria, who has helped over 100 community members and inspired countless others to join our mission.',
      content: 'This month we\'re highlighting Maria Santos, a remarkable community member who has completed over 100 help requests since joining OrangeHelp six months ago. From daily grocery runs for elderly neighbors to organizing community clean-up events, Maria embodies the spirit of our platform. "Helping others isn\'t just about the task," Maria says, "it\'s about building connections and showing people they\'re not alone." Her dedication has inspired dozens of others to become active volunteers.',
      author: 'Community Team',
      date: '2024-01-01',
      category: 'community',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: '5',
      title: 'Annual Community Impact Report 2023',
      excerpt: 'Looking back at an incredible year of community building, mutual support, and positive impact across all our communities.',
      content: 'As we close 2023, we\'re proud to share our Annual Community Impact Report. This year, OrangeHelp facilitated over 25,000 help requests, connected 15,000 new community members, and expanded to 50 cities worldwide. Our users contributed over 100,000 hours of volunteer time, with an estimated community value of $2.5 million. Most importantly, 98% of users reported feeling more connected to their community after using OrangeHelp.',
      author: 'Md. Radoan Bin Mahabubur',
      date: '2023-12-31',
      category: 'updates',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

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
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Newspaper className="w-10 h-10 text-white" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Updates</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest news, features, and community stories from OrangeHelp.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
              selectedCategory === category.id
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
            }`}
          >
            <category.icon className="w-4 h-4" />
            <span>{category.name}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'all' && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={() => setSelectedArticle(featuredArticle)}
            className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(featuredArticle.date).toLocaleDateString()}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{featuredArticle.title}</h2>
                <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{featuredArticle.author}</p>
                      <p className="text-xs text-gray-500">{featuredArticle.readTime}</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Articles Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredArticles.filter(article => !article.featured || selectedCategory !== 'all').map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Tag className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-500 capitalize">{article.category}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{article.author}</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {selectedArticle.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(selectedArticle.date).toLocaleDateString()}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedArticle.readTime}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedArticle.title}</h1>
                
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-medium text-gray-900">{selectedArticle.author}</p>
                    <p className="text-sm text-gray-500">Author</p>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">{selectedArticle.content}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center mt-16"
      >
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-orange-100 mb-6">
          Subscribe to our newsletter to get the latest news and updates delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom padding for mobile navigation */}
      <div className="h-20 md:h-0" />
    </motion.div>
  );
};

export default News;