import React from 'react';
import { Heart, Star, MapPin, Calendar, Clock, Users, Sparkles, CheckCircle, Crown, Gift, Zap } from 'lucide-react';

export default function App() {
  // Функция для плавной прокрутки к секции оплаты
  const scrollToPayment = () => {
    const paymentSection = document.getElementById('payment-section');
    if (paymentSection) {
      paymentSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-terracotta-500" />
              <span className="font-serif text-xl font-semibold text-sage-800">Awaken Within</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sage-700 hover:text-terracotta-500 transition-colors">About</a>
              <a href="#program" className="text-sage-700 hover:text-terracotta-500 transition-colors">Program</a>
              <a href="#location" className="text-sage-700 hover:text-terracotta-500 transition-colors">Location</a>
              <button 
                onClick={scrollToPayment}
                className="bg-terracotta-500 text-white px-6 py-2 rounded-full hover:bg-terracotta-600 transition-colors"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 hero-bg"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sage-900/70 via-sage-800/50 to-terracotta-900/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Awaken the
              <span className="block text-gold-400">Powerful Woman</span>
              <span className="block">Within</span>
            </h1>
            <p className="text-xl sm:text-2xl text-warm-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              A transformative 3-day retreat in the heart of nature, designed to reconnect you with your inner strength, wisdom, and authentic self.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToPayment}
                className="bg-terracotta-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-terracotta-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Begin Your Journey
              </button>
              <button 
                onClick={scrollToPayment}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-sage-800 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* What Awaits You Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-sage-800 mb-6">
              What Awaits You
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Three days of profound transformation, connection, and self-discovery in a supportive sisterhood environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-sage-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage-200 transition-colors">
                <Sparkles className="h-10 w-10 text-sage-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-sage-800 mb-4">Inner Wisdom</h3>
              <p className="text-sage-600 leading-relaxed">
                Reconnect with your intuition through guided meditation, journaling, and mindful practices that reveal your authentic self.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-terracotta-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-terracotta-200 transition-colors">
                <Users className="h-10 w-10 text-terracotta-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-sage-800 mb-4">Sacred Sisterhood</h3>
              <p className="text-sage-600 leading-relaxed">
                Build meaningful connections with like-minded women in a safe, supportive environment that celebrates your journey.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gold-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                <Crown className="h-10 w-10 text-gold-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-sage-800 mb-4">Personal Power</h3>
              <p className="text-sage-600 leading-relaxed">
                Discover and embrace your unique strengths, overcome limiting beliefs, and step into your full potential with confidence.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={scrollToPayment}
              className="bg-sage-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-sage-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Begin Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Retreat Atmosphere Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-sage-800 mb-6">
              Retreat Atmosphere
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Immerse yourself in a carefully curated environment designed for transformation, healing, and growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-sage-200 p-3 rounded-full flex-shrink-0">
                  <Heart className="h-6 w-6 text-sage-700" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-sage-800 mb-2">Sacred Space</h3>
                  <p className="text-sage-600">A beautifully appointed sanctuary where every detail supports your journey of self-discovery and healing.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-terracotta-200 p-3 rounded-full flex-shrink-0">
                  <Users className="h-6 w-6 text-terracotta-700" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-sage-800 mb-2">Intimate Gathering</h3>
                  <p className="text-sage-600">Limited to 12 women to ensure personalized attention and deep, meaningful connections within our circle.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold-200 p-3 rounded-full flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-gold-700" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-sage-800 mb-2">Mindful Practices</h3>
                  <p className="text-sage-600">Daily meditation, yoga, and reflection sessions designed to center your mind and open your heart.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-sage-200 p-3 rounded-full flex-shrink-0">
                  <Gift className="h-6 w-6 text-sage-700" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-sage-800 mb-2">Nourishing Rituals</h3>
                  <p className="text-sage-600">Thoughtfully crafted ceremonies and rituals that honor your journey and celebrate your growth.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Peaceful retreat atmosphere" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-gold-500 fill-current" />
                  <Star className="h-5 w-5 text-gold-500 fill-current" />
                  <Star className="h-5 w-5 text-gold-500 fill-current" />
                  <Star className="h-5 w-5 text-gold-500 fill-current" />
                  <Star className="h-5 w-5 text-gold-500 fill-current" />
                </div>
                <p className="text-sm text-sage-600 mt-1">"Life-changing experience"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Transformation Includes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-sage-800 mb-6">
              Your Transformation Includes
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Everything you need for a complete journey of self-discovery and empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-sage-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-sage-600 mb-6" />
              <h3 className="font-serif text-xl font-semibold text-sage-800 mb-4">Daily Workshops</h3>
              <p className="text-sage-600">Interactive sessions on self-discovery, confidence building, and personal empowerment led by expert facilitators.</p>
            </div>

            <div className="bg-terracotta-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-terracotta-600 mb-6" />
              <h3 className="font-serif text-xl font-semibold text-sage-800 mb-4">Meditation & Yoga</h3>
              <p className="text-sage-600">Morning and evening practices to center your mind, strengthen your body, and connect with your inner wisdom.</p>
            </div>

            <div className="bg-gold-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-gold-600 mb-6" />
              <h3 className="font-serif text-xl font-semibold text-sage-800 mb-4">Sacred Ceremonies</h3>
              <p className="text-sage-600">Meaningful rituals designed to honor your journey, release what no longer serves, and embrace your power.</p>
            </div>

            <div className="bg-sage-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-sage-600 mb-6" />
              <h3 className="font-serif text-xl font-semibold text-sage-800 mb-4">Nature Immersion</h3>
              <p className="text-sage-600">Guided walks, outdoor meditation, and connection with the natural world to ground and inspire you.</p>
            </div>

            <div className="bg-terracotta-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-terracotta-600 mb-6" />
              <h3 className="font-serif text-xl font-semibold text-sage-800 mb-4">Sister Circle</h3>
              <p className="text-sage-600">Intimate sharing circles where you'll connect deeply with other women on similar journeys of growth.</p>
            </div>

            <div className="bg-gold-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-gold-600 mb-6" />
              <h3 className="font-serif text-xl font-semibold text-sage-800 mb-4">Personal Toolkit</h3>
              <p className="text-sage-600">Take-home resources including journals, guided meditations, and practices to continue your journey.</p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={scrollToPayment}
              className="bg-terracotta-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-terracotta-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Claim Your Transformation
            </button>
          </div>
        </div>
      </section>

      {/* Where You'll Stay Section */}
      <section id="location" className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-sage-800 mb-6">
              Where You'll Stay
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              A serene sanctuary nestled in nature, designed to support your transformation journey.
            </p>
          </div>

          {/* Location Map and Accommodation */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Location Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="h-8 w-8 text-terracotta-500" />
                  <h3 className="font-serif text-2xl font-semibold text-sage-800">Retreat Location</h3>
                </div>
                <div className="mb-6">
                  <img 
                    src="https://i.ibb.co/93CRqz1Y/Edit-the-uploaded-ma.png" 
                    alt="Retreat location map" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <p className="text-sage-600 leading-relaxed">
                  Our retreat center is strategically located in a peaceful natural setting, away from the hustle and bustle of city life. The location provides the perfect backdrop for introspection, connection with nature, and meaningful conversations with fellow participants.
                </p>
              </div>
            </div>

            {/* Accommodation */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                alt="Comfortable accommodation" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-sage-800 mb-4">Comfortable Accommodation</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-sage-600 flex-shrink-0" />
                    <span className="text-sage-600">Private or shared rooms available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-sage-600 flex-shrink-0" />
                    <span className="text-sage-600">Peaceful garden views</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-sage-600 flex-shrink-0" />
                    <span className="text-sage-600">Modern amenities & comfort</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-sage-600 flex-shrink-0" />
                    <span className="text-sage-600">Meditation spaces nearby</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dining */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                alt="Nourishing meals" 
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <h3 className="font-serif text-2xl font-semibold text-sage-800 mb-4">Nourishing Cuisine</h3>
                <p className="text-sage-600 mb-6 leading-relaxed">
                  Enjoy thoughtfully prepared, wholesome meals that nourish both body and soul. Our menu features fresh, locally-sourced ingredients designed to support your wellness journey.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-terracotta-600 flex-shrink-0" />
                    <span className="text-sage-600">Organic, locally-sourced ingredients</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-terracotta-600 flex-shrink-0" />
                    <span className="text-sage-600">Vegetarian & dietary options available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-terracotta-600 flex-shrink-0" />
                    <span className="text-sage-600">Mindful eating practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="payment-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-sage-800 mb-6">
              Choose Your Journey
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Select the experience that resonates with your heart and supports your transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essential Package */}
            <div className="bg-sage-50 rounded-2xl p-8 relative hover:shadow-xl transition-shadow">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl font-semibold text-sage-800 mb-2">Essential</h3>
                <p className="text-sage-600 mb-6">Perfect for first-time retreat participants</p>
                <div className="text-4xl font-bold text-sage-800 mb-2">$497</div>
                <p className="text-sage-600">3-day transformation</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-sage-600 flex-shrink-0" />
                  <span className="text-sage-700">All workshop sessions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-sage-600 flex-shrink-0" />
                  <span className="text-sage-700">Shared accommodation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-sage-600 flex-shrink-0" />
                  <span className="text-sage-700">All meals included</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-sage-600 flex-shrink-0" />
                  <span className="text-sage-700">Welcome gift package</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-sage-600 flex-shrink-0" />
                  <span className="text-sage-700">Digital resource library</span>
                </li>
              </ul>
              
              <button 
                onClick={scrollToPayment}
                className="w-full bg-sage-600 text-white py-4 rounded-full font-semibold hover:bg-sage-700 transition-colors"
              >
                Choose Essential
              </button>
            </div>

            {/* Premium Package */}
            <div className="bg-terracotta-50 rounded-2xl p-8 relative hover:shadow-xl transition-shadow border-2 border-terracotta-200">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-terracotta-500 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl font-semibold text-sage-800 mb-2">Premium</h3>
                <p className="text-sage-600 mb-6">Enhanced experience with private accommodation</p>
                <div className="text-4xl font-bold text-sage-800 mb-2">$797</div>
                <p className="text-sage-600">3-day transformation</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-terracotta-600 flex-shrink-0" />
                  <span className="text-sage-700">All Essential features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-terracotta-600 flex-shrink-0" />
                  <span className="text-sage-700">Private room accommodation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-terracotta-600 flex-shrink-0" />
                  <span className="text-sage-700">One-on-one coaching session</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-terracotta-600 flex-shrink-0" />
                  <span className="text-sage-700">Premium welcome package</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-terracotta-600 flex-shrink-0" />
                  <span className="text-sage-700">30-day follow-up support</span>
                </li>
              </ul>
              
              <button 
                onClick={scrollToPayment}
                className="w-full bg-terracotta-500 text-white py-4 rounded-full font-semibold hover:bg-terracotta-600 transition-colors"
              >
                Choose Premium
              </button>
            </div>

            {/* VIP Package */}
            <div className="bg-gold-50 rounded-2xl p-8 relative hover:shadow-xl transition-shadow">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl font-semibold text-sage-800 mb-2">VIP Experience</h3>
                <p className="text-sage-600 mb-6">Ultimate luxury and personalized attention</p>
                <div className="text-4xl font-bold text-sage-800 mb-2">$1,297</div>
                <p className="text-sage-600">3-day transformation</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Crown className="h-5 w-5 text-gold-600 flex-shrink-0" />
                  <span className="text-sage-700">All Premium features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Crown className="h-5 w-5 text-gold-600 flex-shrink-0" />
                  <span className="text-sage-700">Luxury suite accommodation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Crown className="h-5 w-5 text-gold-600 flex-shrink-0" />
                  <span className="text-sage-700">Private spa treatment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Crown className="h-5 w-5 text-gold-600 flex-shrink-0" />
                  <span className="text-sage-700">Exclusive VIP welcome dinner</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Crown className="h-5 w-5 text-gold-600 flex-shrink-0" />
                  <span className="text-sage-700">90-day transformation program</span>
                </li>
              </ul>
              
              <button 
                onClick={scrollToPayment}
                className="w-full bg-gold-600 text-white py-4 rounded-full font-semibold hover:bg-gold-700 transition-colors"
              >
                Choose VIP
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sage-600 mb-4">
              <strong>Early Bird Special:</strong> Save $100 when you register before March 15th
            </p>
            <p className="text-sm text-sage-500">
              All packages include transportation from the nearest airport. Payment plans available.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-sage-800 mb-6">
              Voices of Transformation
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Hear from women who have experienced profound change through our retreats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-gold-500 fill-current" />
                <Star className="h-5 w-5 text-gold-500 fill-current" />
                <Star className="h-5 w-5 text-gold-500 fill-current" />
                <Star className="h-5 w-5 text-gold-500 fill-current" />
                <Star className="h-5 w-5 text-gold-500 fill-current" />
              </div>
              <p className="text-sage-600 mb-6 italic">
                "This retreat changed my life. I discovered parts of myself I didn't know existed and found the courage to pursue my dreams."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                  alt="Sarah M." 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-sage-800">Sarah M.</h4>
                  <p className="text-sage-500 text-sm">Marketing Executive</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-gold-500 fill-current" />
                <Star className="h-5 w-5 text-gold-500 fill-current" />
                <Star className="h-5 w-5 text-gold-500 fill-current" />
                <Star className="h-5 w-5 text-gold-500 fill-current" />
                <Star className="h-5 w-5 text-gold-500 fill-current" />
              </div>
              <p className="text-sage-600 mb-6 italic">
                "The sisterhood I found here continues to support me months later. It's more than a retreat - it's a life-changing community."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                  alt="Maria L." 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-sage-800">Maria L.</h4>
                  <p className="text-sage-500 text-sm">Teacher & Mother</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-gold-500 fill-current" />
                <Star className="h-5 w-5 text-gold-500 fill-current" />
                <Star className="h-5 w-5 text-gold-500 fill-current" />
                <Star className="h-5 w-5 text-gold-500 fill-current" />
                <Star className="h-5 w-5 text-gold-500 fill-current" />
              </div>
              <p className="text-sage-600 mb-6 italic">
                "I came feeling lost and left with clarity, purpose, and unshakeable confidence. This retreat is pure magic."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                  alt="Jennifer K." 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-sage-800">Jennifer K.</h4>
                  <p className="text-sage-500 text-sm">Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-sage-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-sage-600">
              Everything you need to know about your transformational journey.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-sage-50 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-semibold text-sage-800 mb-4">What should I bring to the retreat?</h3>
              <p className="text-sage-600">We'll send you a detailed packing list upon registration. Generally, bring comfortable clothing for yoga and meditation, a journal, and an open heart. All meals, linens, and retreat materials are provided.</p>
            </div>

            <div className="bg-sage-50 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-semibold text-sage-800 mb-4">Is this retreat suitable for beginners?</h3>
              <p className="text-sage-600">Absolutely! Our retreat is designed for women at all stages of their personal growth journey. Whether you're new to self-development work or have years of experience, you'll find value and support here.</p>
            </div>

            <div className="bg-sage-50 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-semibold text-sage-800 mb-4">What is your cancellation policy?</h3>
              <p className="text-sage-600">We offer full refunds up to 30 days before the retreat. Between 30-14 days, we offer a 50% refund or credit toward a future retreat. Within 14 days, we offer retreat credit only, except in cases of emergency.</p>
            </div>

            <div className="bg-sage-50 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-semibold text-sage-800 mb-4">How many women attend each retreat?</h3>
              <p className="text-sage-600">We intentionally keep our groups intimate with a maximum of 12 participants. This ensures personalized attention and creates the perfect environment for deep connection and meaningful sharing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-terracotta-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
            Your Transformation Awaits
          </h2>
          <p className="text-xl text-warm-100 mb-8 max-w-2xl mx-auto">
            Don't let another year pass wondering "what if." Your powerful, authentic self is ready to emerge. 
            Join us and step into the woman you're meant to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToPayment}
              className="bg-white text-sage-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-warm-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Reserve Your Spot Now
            </button>
            <div className="flex items-center space-x-2 text-warm-100">
              <Clock className="h-5 w-5" />
              <span>Limited to 12 women • Next retreat: April 15-17</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-terracotta-400" />
                <span className="font-serif text-xl font-semibold">Awaken Within</span>
              </div>
              <p className="text-sage-200">
                Empowering women to discover their authentic selves and step into their full potential.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sage-200">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#program" className="hover:text-white transition-colors">Program</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sage-200">
                <p>hello@awakenwithin.com</p>
                <p>+1 (555) 123-4567</p>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Retreat Center, Nature Valley</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-sage-700 mt-8 pt-8 text-center text-sage-300">
            <p>&copy; 2024 Awaken Within. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}