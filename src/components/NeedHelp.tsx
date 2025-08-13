import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  AlertCircle,
  ChevronRight,
  CheckCircle,
  Upload
} from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface NeedHelpProps {
  user: User | null;
}

const NeedHelp: React.FC<NeedHelpProps> = ({ user }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    urgency: 'medium',
    location: '',
    date: '',
    time: '',
    helpersNeeded: 1,
    contactMethod: 'app',
    phone: '',
    specialRequirements: ''
  });

  const categories = [
    { id: 'shopping', name: 'Shopping & Errands', icon: '🛒' },
    { id: 'moving', name: 'Moving & Transport', icon: '📦' },
    { id: 'cleaning', name: 'Cleaning & Maintenance', icon: '🧹' },
    { id: 'petcare', name: 'Pet Care', icon: '🐕' },
    { id: 'childcare', name: 'Child Care', icon: '👶' },
    { id: 'tech', name: 'Tech Support', icon: '💻' },
    { id: 'cooking', name: 'Cooking & Food', icon: '🍳' },
    { id: 'other', name: 'Other', icon: '❓' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low Priority', color: 'bg-green-100 text-green-800', description: 'Flexible timing' },
    { value: 'medium', label: 'Medium Priority', color: 'bg-yellow-100 text-yellow-800', description: 'Preferred timeline' },
    { value: 'high', label: 'High Priority', color: 'bg-red-100 text-red-800', description: 'Urgent assistance needed' }
  ];

  const steps = [
    { number: 1, title: 'Help Details', description: 'What do you need help with?' },
    { number: 2, title: 'When & Where', description: 'Schedule and location' },
    { number: 3, title: 'Contact Info', description: 'How should helpers reach you?' },
    { number: 4, title: 'Review', description: 'Confirm your request' }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Help request submitted successfully! You\'ll be notified when helpers respond.');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What help do you need? *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Help with grocery shopping"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFormData({ ...formData, category: category.id })}
                    className={`p-4 rounded-lg border-2 text-center transition-all ${
                      formData.category === category.id
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="text-sm font-medium">{category.name}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                placeholder="Please describe what you need help with in detail..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Urgency Level
              </label>
              <div className="space-y-3">
                {urgencyLevels.map((level) => (
                  <motion.button
                    key={level.value}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setFormData({ ...formData, urgency: level.value })}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      formData.urgency === level.value
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${level.color}`}>
                            {level.label}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{level.description}</p>
                      </div>
                      {formData.urgency === level.value && (
                        <CheckCircle className="w-5 h-5 text-orange-500" />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Enter your address or neighborhood"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How many helpers do you need?
              </label>
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, helpersNeeded: Math.max(1, formData.helpersNeeded - 1) })}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  -
                </button>
                <span className="text-xl font-semibold w-8 text-center">{formData.helpersNeeded}</span>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, helpersNeeded: formData.helpersNeeded + 1 })}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requirements (optional)
              </label>
              <textarea
                value={formData.specialRequirements}
                onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                rows={3}
                placeholder="Any specific requirements or preferences..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
              />
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-800">Privacy Notice</p>
                  <p className="text-sm text-blue-700 mt-1">
                    Your contact information will only be shared with helpers who accept your request.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                How should helpers contact you?
              </label>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="app"
                    checked={formData.contactMethod === 'app'}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                    className="text-orange-500 focus:ring-orange-500"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Through the app (recommended)</div>
                    <div className="text-sm text-gray-600">Secure messaging within OrangeHelp</div>
                  </div>
                </label>

                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={formData.contactMethod === 'phone'}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                    className="text-orange-500 focus:ring-orange-500"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Phone number</div>
                    <div className="text-sm text-gray-600">Helpers can call you directly</div>
                  </div>
                </label>
              </div>
            </div>

            {formData.contactMethod === 'phone' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                </div>
              </motion.div>
            )}

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-900">{user?.name}</p>
                  <p className="text-sm text-gray-600">{user?.email}</p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Your Request</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Help Needed</h4>
                  <p className="text-gray-900">{formData.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{formData.description}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700">Category</h4>
                  <p className="text-gray-900">
                    {categories.find(c => c.id === formData.category)?.name || 'Not selected'}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700">Location & Time</h4>
                  <p className="text-gray-900">{formData.location}</p>
                  {formData.date && (
                    <p className="text-sm text-gray-600">
                      {new Date(formData.date).toLocaleDateString()} 
                      {formData.time && ` at ${formData.time}`}
                    </p>
                  )}
                </div>

                <div>
                  <h4 className="font-medium text-gray-700">Helpers Needed</h4>
                  <p className="text-gray-900">{formData.helpersNeeded} helper{formData.helpersNeeded > 1 ? 's' : ''}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700">Priority</h4>
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                    urgencyLevels.find(u => u.value === formData.urgency)?.color
                  }`}>
                    {urgencyLevels.find(u => u.value === formData.urgency)?.label}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-800">Ready to Submit</p>
                  <p className="text-sm text-green-700 mt-1">
                    Your request will be visible to nearby helpers who can assist you.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Heart className="w-8 h-8 text-white" />
        </motion.div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Request Help</h1>
        <p className="text-gray-600">Let our community know how they can support you</p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <motion.div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                  currentStep >= step.number
                    ? 'bg-orange-500 border-orange-500 text-white'
                    : 'border-gray-300 text-gray-400'
                }`}
                animate={{
                  scale: currentStep === step.number ? 1.1 : 1,
                  backgroundColor: currentStep >= step.number ? '#f97316' : '#ffffff'
                }}
              >
                {currentStep > step.number ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-semibold">{step.number}</span>
                )}
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  className={`w-20 h-0.5 mx-4 transition-colors ${
                    currentStep > step.number ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                  animate={{
                    backgroundColor: currentStep > step.number ? '#f97316' : '#d1d5db'
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center flex-1">
              <div className={`text-sm font-medium ${
                currentStep >= step.number ? 'text-orange-600' : 'text-gray-400'
              }`}>
                {step.title}
              </div>
              <div className="text-xs text-gray-500 mt-1">{step.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            currentStep === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Back
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={currentStep === 4 ? handleSubmit : handleNext}
          className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center space-x-2"
        >
          <span>{currentStep === 4 ? 'Submit Request' : 'Next'}</span>
          {currentStep < 4 && <ChevronRight className="w-4 h-4" />}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default NeedHelp;