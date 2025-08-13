import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  UserCheck, 
  AlertTriangle,
  CheckCircle,
  Key,
  Database,
  Globe,
  FileText
} from 'lucide-react';

const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: UserCheck,
      title: 'Identity Verification',
      description: 'All users undergo identity verification to ensure community safety.',
      details: ['Government ID verification', 'Phone number confirmation', 'Email verification', 'Background checks for sensitive requests']
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'Your personal information is protected with industry-standard encryption.',
      details: ['End-to-end encryption', 'SSL/TLS protocols', 'Encrypted data storage', 'Secure payment processing']
    },
    {
      icon: Eye,
      title: 'Privacy Controls',
      description: 'You control what information is shared and with whom.',
      details: ['Granular privacy settings', 'Anonymous help requests', 'Location privacy options', 'Communication preferences']
    },
    {
      icon: AlertTriangle,
      title: 'Safety Monitoring',
      description: '24/7 monitoring and reporting system for community safety.',
      details: ['Real-time safety alerts', 'Community reporting system', 'Automated risk detection', 'Emergency response protocols']
    }
  ];

  const privacyPolicies = [
    {
      title: 'Data Collection',
      description: 'We only collect information necessary to provide our services and ensure community safety.'
    },
    {
      title: 'Data Usage',
      description: 'Your data is used solely to connect you with help opportunities and improve our platform.'
    },
    {
      title: 'Data Sharing',
      description: 'We never sell your personal information. Data is only shared with your explicit consent.'
    },
    {
      title: 'Data Retention',
      description: 'We retain your data only as long as necessary and delete it upon account closure.'
    }
  ];

  const safetyTips = [
    'Meet in public places for initial interactions',
    'Trust your instincts - if something feels wrong, report it',
    'Verify identity before sharing personal information',
    'Use our in-app messaging system for initial communications',
    'Report any suspicious or inappropriate behavior immediately',
    'Keep emergency contacts informed of your activities'
  ];

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
          className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Shield className="w-10 h-10 text-white" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Security & Privacy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your safety and privacy are our top priorities. Learn how we protect you and your data.
        </p>
      </motion.div>

      {/* Security Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Security Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Privacy Policy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Privacy Policy</h2>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacyPolicies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{policy.title}</h3>
                  <p className="text-gray-600">{policy.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Safety Tips */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Safety Tips</h2>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Stay Safe While Helping</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {safetyTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-white/20 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-orange-100">{tip}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Security Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Database, title: 'SOC 2 Compliant', description: 'Audited security controls' },
            { icon: Globe, title: 'GDPR Compliant', description: 'European data protection' },
            { icon: Key, title: 'ISO 27001', description: 'Information security management' }
          ].map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <cert.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-gray-600 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Security Team */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gray-900 rounded-2xl p-8 text-white text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Security Concerns?</h2>
        <p className="text-gray-300 mb-6">
          If you discover a security vulnerability or have concerns about your safety, please contact our security team immediately.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Report Security Issue
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Contact Security Team
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom padding for mobile navigation */}
      <div className="h-20 md:h-0" />
    </motion.div>
  );
};

export default Security;