import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  Sparkles, 
  Leaf, 
  Sun, 
  Moon, 
  Coffee, 
  Utensils,
  Bed,
  Wifi,
  Car,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToPayment = () => {
    const paymentSection = document.getElementById('payment');
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 hero-bg"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>
        
        <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="mb-6">
            <Sparkles className="w-16 h-16 text-gold-400 mx-auto mb-4 animate-float" />
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Awaken the
            <span className="block text-gold-400">Powerful Woman</span>
            <span className="block">Within</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            A transformative 3-day retreat in the heart of nature, designed to reconnect you with your inner strength, wisdom, and authentic self.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-white/80">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="font-medium">March 15-17, 2024</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/60 rounded-full"></div>
            <div className="flex items-center text-white/80">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-medium">Mountain Sanctuary, Colorado</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/60 rounded-full"></div>
            <div className="flex items-center text-white/80">
              <Users className="w-5 h-5 mr-2" />
              <span className="font-medium">Limited to 12 Women</span>
            </div>
          </div>
          
          <button 
            onClick={scrollToPayment}
            className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Reserve Your Spot
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Your Journey to
              <span className="text-terracotta-500"> Self-Discovery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              In our fast-paced world, we often lose touch with our inner wisdom and authentic selves. 
              This retreat is your invitation to pause, breathe, and reconnect with the powerful woman within you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-sage-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Reconnect with Your Essence</h3>
                  <p className="text-gray-600">Through guided meditation, journaling, and nature immersion, rediscover who you truly are beneath the roles and expectations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-terracotta-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Embrace Your Power</h3>
                  <p className="text-gray-600">Learn to trust your intuition, set healthy boundaries, and step into your full potential with confidence and grace.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Build Sacred Sisterhood</h3>
                  <p className="text-gray-600">Connect with like-minded women in a safe, supportive environment where vulnerability is honored and growth is celebrated.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Women in nature meditation" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-terracotta-400 to-terracotta-600 rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Atmosphere */}
      <section className="py-20 bg-gradient-to-br from-sage-50 to-warm-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Retreat <span className="text-sage-600">Atmosphere</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in a carefully curated environment designed to nurture your soul and inspire transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4 text-center">Nature Immersion</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Surrounded by pristine wilderness, fresh mountain air, and the healing energy of ancient trees. 
                Nature becomes your co-facilitator in this transformative journey.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-terracotta-400 to-terracotta-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4 text-center">Sacred Circle</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Intimate group size ensures deep connections and personalized attention. 
                Every woman's voice is heard, honored, and celebrated in our sacred circle.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4 text-center">Mindful Luxury</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Experience comfort without distraction. Thoughtfully designed spaces, 
                nourishing meals, and beautiful surroundings support your inner work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Transformation Includes */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Your Transformation <span className="text-terracotta-500">Includes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive journey designed to awaken every aspect of your powerful feminine essence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sun,
                title: "Morning Meditation & Movement",
                description: "Start each day with guided meditation, gentle yoga, and intention setting in nature's embrace."
              },
              {
                icon: Heart,
                title: "Sacred Circle Sharing",
                description: "Deep, authentic conversations in a safe space where your truth is honored and celebrated."
              },
              {
                icon: Sparkles,
                title: "Inner Wisdom Workshops",
                description: "Practical tools for accessing your intuition, setting boundaries, and trusting your inner voice."
              },
              {
                icon: Leaf,
                title: "Nature Therapy Sessions",
                description: "Healing walks, forest bathing, and earth connection practices to ground your energy."
              },
              {
                icon: Moon,
                title: "Evening Reflection Rituals",
                description: "Journaling, gratitude practices, and moon ceremonies to integrate your daily insights."
              },
              {
                icon: Users,
                title: "Sisterhood Connections",
                description: "Build lasting friendships with women who understand and support your journey to authenticity."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-warm-50 to-sage-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-terracotta-400 to-terracotta-600 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-gradient-to-br from-terracotta-50 to-warm-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Your 3-Day <span className="text-terracotta-500">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each day is thoughtfully designed to deepen your connection with yourself and your sisters.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                day: "Day 1",
                title: "Arrival & Awakening",
                morning: "Welcome ceremony, intention setting, and sacred space creation",
                afternoon: "Inner child healing workshop and nature walk meditation",
                evening: "Sharing circle and moon ceremony"
              },
              {
                day: "Day 2", 
                title: "Empowerment & Expression",
                morning: "Power meditation and boundary-setting workshop",
                afternoon: "Creative expression session and sisterhood activities",
                evening: "Fire ceremony and ancestral wisdom sharing"
              },
              {
                day: "Day 3",
                title: "Integration & Commitment", 
                morning: "Future self visualization and action planning",
                afternoon: "Sacred commitment ceremony and gift exchange",
                evening: "Closing circle and celebration feast"
              }
            ].map((day, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-terracotta-600 mb-2">{day.day}</h3>
                    <h4 className="text-xl font-semibold text-gray-800">{day.title}</h4>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Sun className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-2">Morning</h5>
                    <p className="text-gray-600 text-sm">{day.morning}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-2">Afternoon</h5>
                    <p className="text-gray-600 text-sm">{day.afternoon}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-terracotta-400 to-terracotta-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Moon className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-2">Evening</h5>
                    <p className="text-gray-600 text-sm">{day.evening}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where You'll Stay */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Where You'll <span className="text-sage-600">Stay</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A sanctuary designed for comfort, connection, and transformation in the heart of nature.
            </p>
          </div>
          
          {/* Location Map and Accommodation */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Retreat Location Map */}
            <div className="bg-gradient-to-br from-sage-50 to-warm-100 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-6 text-center">
                <MapPin className="w-6 h-6 inline mr-2 text-sage-600" />
                Retreat Location
              </h3>
              <div className="mb-6">
                <img 
                  src="https://i.ibb.co/93CRqz1Y/Edit-the-uploaded-ma.png" 
                  alt="Retreat Location Map" 
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                Nestled in the pristine Colorado mountains, our retreat center offers complete privacy and 
                immersion in nature, away from the distractions of daily life. The location provides the 
                perfect backdrop for deep inner work and connection.
              </p>
            </div>

            {/* Accommodation */}
            <div className="bg-gradient-to-br from-terracotta-50 to-warm-100 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-6 text-center">
                <Bed className="w-6 h-6 inline mr-2 text-terracotta-600" />
                Your Accommodation
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0" />
                  <span className="text-gray-700">Private or shared rooms in rustic luxury cabins</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0" />
                  <span className="text-gray-700">Comfortable beds with organic cotton linens</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0" />
                  <span className="text-gray-700">Private bathrooms with eco-friendly amenities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0" />
                  <span className="text-gray-700">Mountain views from every window</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0" />
                  <span className="text-gray-700">Cozy common areas for connection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wifi className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-500">Limited WiFi (digital detox encouraged)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dining */}
          <div className="bg-gradient-to-br from-gold-50 to-warm-100 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-6 text-center">
              <Utensils className="w-6 h-6 inline mr-2 text-gold-600" />
              Nourishing Cuisine
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <span className="text-gray-700">Farm-to-table organic meals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <span className="text-gray-700">Vegetarian and vegan options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <span className="text-gray-700">Herbal teas and fresh spring water</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <span className="text-gray-700">Dietary restrictions accommodated</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Coffee className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <span className="text-gray-700">Morning coffee and evening cacao ceremonies</span>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Healthy organic meal" 
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-sage-50 to-terracotta-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Voices of <span className="text-terracotta-500">Transformation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the powerful women who have walked this path before you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Executive & Mother",
                text: "This retreat gave me permission to put myself first for the first time in years. I left feeling like I had found myself again - the woman I was before I became everything to everyone else.",
                rating: 5
              },
              {
                name: "Maria L.",
                role: "Entrepreneur",
                text: "The sisterhood I found here changed my life. These women held space for my tears, celebrated my breakthroughs, and reminded me of my own strength when I couldn't see it.",
                rating: 5
              },
              {
                name: "Jennifer K.",
                role: "Teacher & Artist",
                text: "I came feeling lost and overwhelmed. I left with clarity, purpose, and tools I use every day. The mountain setting was magical, but the real magic was in the connections we made.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Payment */}
      <section id="payment" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Your <span className="text-terracotta-500">Investment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An investment in yourself, your growth, and your future. Payment plans available.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-terracotta-50 to-gold-50 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-terracotta-500 to-terracotta-600 rounded-full mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-gray-800 mb-4">Complete Retreat Experience</h3>
              <div className="text-5xl font-bold text-terracotta-600 mb-2">$2,497</div>
              <p className="text-gray-600 mb-8">3 days, 2 nights of transformation</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-4">What's Included:</h4>
                <div className="space-y-2">
                  {[
                    "All workshops and ceremonies",
                    "2 nights luxury accommodation", 
                    "All organic meals and beverages",
                    "Welcome and closing gifts",
                    "Digital resource library",
                    "90-day integration support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-4">Payment Options:</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border-2 border-sage-200">
                    <div className="font-semibold text-gray-800">Pay in Full</div>
                    <div className="text-terracotta-600 font-bold">$2,497</div>
                    <div className="text-sm text-gray-600">Save $200 with full payment</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="font-semibold text-gray-800">3-Month Plan</div>
                    <div className="text-gray-700">3 payments of $899</div>
                    <div className="text-sm text-gray-600">Total: $2,697</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4">
                Secure Your Spot Now
              </button>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span>Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-sage-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked <span className="text-sage-600">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What if I've never done anything like this before?",
                answer: "Perfect! This retreat is designed for women at all stages of their journey. Our facilitators create a safe, welcoming environment where beginners feel completely supported and experienced participants find new depths to explore."
              },
              {
                question: "What should I bring?",
                answer: "We'll send you a detailed packing list upon registration. Generally, bring comfortable clothes for movement, layers for mountain weather, a journal, and an open heart. All retreat materials and amenities are provided."
              },
              {
                question: "Is this retreat suitable for all ages?",
                answer: "Yes! We welcome women 18 and older. Our participants typically range from their 20s to 70s, and the diversity of ages and life experiences enriches everyone's journey."
              },
              {
                question: "What's your cancellation policy?",
                answer: "We understand life happens. Full refund if cancelled 60 days before the retreat, 50% refund if cancelled 30 days before. We also offer the option to transfer to a future retreat."
              },
              {
                question: "How do I get to the retreat center?",
                answer: "The retreat center is 2 hours from Denver International Airport. We provide detailed directions and can help coordinate carpools with other participants. Airport shuttle service is available for an additional fee."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 text-terracotta-100">
            Have questions? We're here to support you every step of the way.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-terracotta-100">(555) 123-4567</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-terracotta-100">hello@powerfulwomanretreat.com</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Text Us</h3>
              <p className="text-terracotta-100">(555) 987-6543</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-400 mr-3" />
              <h3 className="font-serif text-2xl font-bold">Powerful Woman Retreat</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Empowering women to reconnect with their inner wisdom, embrace their authentic power, 
              and create lives of purpose and joy.
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 Powerful Woman Retreat. All rights reserved. | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;