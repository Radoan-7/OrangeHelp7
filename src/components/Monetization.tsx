import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Star, 
  Check, 
  X,
  Crown,
  Zap,
  Heart,
  Users,
  TrendingUp,
  Gift,
  Shield,
  Headphones
} from 'lucide-react';

const Monetization: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'premium' | 'community'>('free');

  const plans = [
    {
      id: 'free' as const,
      name: 'Free Plan',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with community help',
      icon: Heart,
      color: 'from-green-500 to-green-600',
      features: [
        { name: '3 help requests per month', included: true },
        { name: 'Basic profile', included: true },
        { name: 'Community donations', included: true },
        { name: 'Standard support', included: true },
        { name: 'Unlimited volunteering', included: true },
        { name: 'Priority matching', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'Premium support', included: false },
        { name: 'Custom badges', included: false }
      ],
      popular: false
    },
    {
      id: 'premium' as const,
      name: 'Premium',
      price: '$9.99',
      period: 'per month',
      description: 'For active community members who need more',
      icon: Star,
      color: 'from-blue-500 to-blue-600',
      features: [
        { name: 'Unlimited help requests', included: true },
        { name: 'Enhanced profile with verification badge', included: true },
        { name: 'Priority matching algorithm', included: true },
        { name: 'Advanced search filters', included: true },
        { name: 'Request scheduling', included: true },
        { name: 'Detailed analytics dashboard', included: true },
        { name: 'Premium support (24/7)', included: true },
        { name: 'Custom profile themes', included: true },
        { name: 'Early access to new features', included: true }
      ],
      popular: true
    },
    {
      id: 'community' as const,
      name: 'Community Pro',
      price: '$29.99',
      period: 'per month',
      description: 'For organizations and community leaders',
      icon: Crown,
      color: 'from-purple-500 to-purple-600',
      features: [
        { name: 'Everything in Premium', included: true },
        { name: 'Organization dashboard', included: true },
        { name: 'Team management tools', included: true },
        { name: 'Bulk request posting', included: true },
        { name: 'Custom branding', included: true },
        { name: 'Advanced reporting', included: true },
        { name: 'API access', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'White-label options', included: true }
      ],
      popular: false
    }
  ];

  const monetizationModel = [
    {
      title: 'Freemium Model',
      description: 'Basic features free forever, premium features for subscribers',
      icon: Gift,
      details: [
        'First 3 help requests per month are completely free',
        'No fees between helpers and those requesting help',
        'Premium features unlock with subscription',
        'Community donations always remain free'
      ]
    },
    {
      title: 'No Transaction Fees',
      description: 'We never take a cut from payments between community members',
      icon: Shield,
      details: [
        'Direct payments between users',
        'No hidden fees or commissions',
        'Transparent pricing model',
        'Community-first approach'
      ]
    },
    {
      title: 'Value-Added Services',
      description: 'Revenue from premium features that enhance the experience',
      icon: TrendingUp,
      details: [
        'Advanced matching algorithms',
        'Priority support and response times',
        'Enhanced profile customization',
        'Detailed analytics and insights'
      ]
    }
  ];

  const freeTrialBenefits = [
    'Try all premium features for 14 days',
    'No credit card required',
    'Cancel anytime during trial',
    'Automatic downgrade to free plan'
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
          <DollarSign className="w-10 h-10 text-white" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing & Monetization</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transparent pricing that puts community first. Start free, upgrade when you need more.
        </p>
      </motion.div>

      {/* Monetization Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {monetizationModel.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <model.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{model.title}</h3>
              <p className="text-gray-600 mb-4">{model.description}</p>
              <ul className="text-left space-y-2">
                {model.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Pricing Plans */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Choose Your Plan</h2>
        
        {/* Plan Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  selectedPlan === plan.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {plan.id === 'free' ? 'Get Started Free' : 'Start Free Trial'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Free Trial Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-16"
      >
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">14-Day Free Trial</h2>
            <p className="text-green-100 mb-8">
              Try all premium features risk-free. No commitment, no hidden fees.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {freeTrialBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-white/20 rounded-lg"
                >
                  <Zap className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-green-100">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            {[
              {
                question: 'Why do you charge for some features?',
                answer: 'We believe in keeping basic community help free forever. Premium features help us maintain and improve the platform while keeping it sustainable.'
              },
              {
                question: 'Do you take a cut from payments between users?',
                answer: 'No, never! We believe in direct, transparent transactions between community members. Our revenue comes only from premium subscriptions.'
              },
              {
                question: 'Can I cancel my subscription anytime?',
                answer: 'Absolutely! You can cancel anytime and will retain premium features until the end of your billing period, then automatically downgrade to the free plan.'
              },
              {
                question: 'What happens to my data if I cancel?',
                answer: 'Your account and data remain intact. You simply lose access to premium features but can continue using all free features.'
              },
              {
                question: 'Are there any hidden fees?',
                answer: 'No hidden fees, ever. What you see is what you pay. We believe in complete transparency in our pricing.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="border-b border-gray-200 pb-6 last:border-b-0"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Sales */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gray-900 rounded-2xl p-8 text-white text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-gray-300 mb-6">
          Large organizations, municipalities, or enterprises with special requirements? Let's talk about a custom plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Headphones className="w-5 h-5" />
            <span>Contact Sales</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Schedule Demo
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom padding for mobile navigation */}
      <div className="h-20 md:h-0" />
    </motion.div>
  );
};

export default Monetization;