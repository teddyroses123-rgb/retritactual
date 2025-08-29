import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Users, 
  Star,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Menu,
  X,
  Flower2,
  Sun,
  Moon,
  Leaf
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Flower2 className="w-8 h-8 text-sage-600" />
              <span className="font-serif text-xl font-semibold text-sage-800">Sacred Feminine</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-sage-700 hover:text-sage-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('program')} className="text-sage-700 hover:text-sage-900 transition-colors">Program</button>
              <button onClick={() => scrollToSection('location')} className="text-sage-700 hover:text-sage-900 transition-colors">Location</button>
              <button onClick={() => scrollToSection('atmosphere')} className="text-sage-700 hover:text-sage-900 transition-colors">Atmosphere</button>
              <button onClick={() => scrollToSection('contact')} className="bg-sage-600 text-white px-6 py-2 rounded-full hover:bg-sage-700 transition-colors">Join Us</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-sage-700 hover:text-sage-900"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-sage-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-sage-700 hover:text-sage-900 w-full text-left">About</button>
              <button onClick={() => scrollToSection('program')} className="block px-3 py-2 text-sage-700 hover:text-sage-900 w-full text-left">Program</button>
              <button onClick={() => scrollToSection('location')} className="block px-3 py-2 text-sage-700 hover:text-sage-900 w-full text-left">Location</button>
              <button onClick={() => scrollToSection('atmosphere')} className="block px-3 py-2 text-sage-700 hover:text-sage-900 w-full text-left">Atmosphere</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 bg-sage-600 text-white rounded-lg mx-3 text-center">Join Us</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 hero-bg"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Awaken the Powerful
              <span className="block text-gold-400">Woman Within</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              A transformative 3-day retreat to reconnect with your sacred feminine essence and unleash your inner goddess
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Reserve Your Sacred Space
              </button>
              <button 
                onClick={() => scrollToSection('program')}
                className="border-2 border-white text-white hover:bg-white hover:text-sage-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Discover the Journey
              </button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="w-8 h-8 text-gold-400/60" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="w-6 h-6 text-terracotta-400/60" />
        </div>
        <div className="absolute top-1/3 right-8 animate-float" style={{ animationDelay: '2s' }}>
          <Leaf className="w-10 h-10 text-sage-400/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible.about ? 'animate-slide-up' : 'opacity-0'}`}>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-sage-800 mb-6">
                Your Sacred Journey Awaits
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In our fast-paced world, we often lose touch with our authentic selves. This retreat is a sacred invitation to pause, breathe, and reconnect with the powerful feminine energy that resides within you.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Through ancient wisdom practices, mindful movement, and deep sisterhood connections, you'll rediscover your inner strength, creativity, and intuitive power.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-1">Heart-Centered Healing</h3>
                    <p className="text-gray-600 text-sm">Release what no longer serves you</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-terracotta-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-1">Creative Awakening</h3>
                    <p className="text-gray-600 text-sm">Unlock your artistic expression</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-1">Sacred Sisterhood</h3>
                    <p className="text-gray-600 text-sm">Connect with like-minded souls</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-1">Nature Connection</h3>
                    <p className="text-gray-600 text-sm">Ground yourself in natural beauty</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${isVisible.about ? 'animate-fade-in' : 'opacity-0'} relative`}>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" 
                  alt="Woman in meditation" 
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-400 rounded-full flex items-center justify-center shadow-lg">
                  <Sun className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-sage-800 mb-6">
              Your 3-Day Transformation
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Each day is carefully crafted to guide you deeper into your feminine essence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Day 1 */}
            <div className={`${isVisible.program ? 'animate-slide-up' : 'opacity-0'} bg-white rounded-2xl shadow-lg overflow-hidden`}>
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Day 1 activities" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-sage-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Day 1
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-sage-800 mb-3">
                  Awakening & Arrival
                </h3>
                <p className="text-gray-600 mb-4">
                  Begin your journey with grounding ceremonies and sacred circle introductions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Sun className="w-4 h-4 text-gold-500" />
                    <span>Morning meditation & breathwork</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-terracotta-500" />
                    <span>Heart opening ceremony</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-sage-500" />
                    <span>Sacred sisterhood circle</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Moon className="w-4 h-4 text-sage-500" />
                    <span>Evening intention setting</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Day 2 */}
            <div className={`${isVisible.program ? 'animate-slide-up' : 'opacity-0'} bg-white rounded-2xl shadow-lg overflow-hidden`} style={{ animationDelay: '0.2s' }}>
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Day 2 activities" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-terracotta-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Day 2
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-sage-800 mb-3">
                  Embodiment & Expression
                </h3>
                <p className="text-gray-600 mb-4">
                  Dive deep into creative expression and embodied movement practices.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-gold-500" />
                    <span>Creative art therapy session</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-terracotta-500" />
                    <span>Sacred dance & movement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Leaf className="w-4 h-4 text-sage-500" />
                    <span>Nature walk & grounding</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Moon className="w-4 h-4 text-sage-500" />
                    <span>Fire ceremony & release</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Day 3 */}
            <div className={`${isVisible.program ? 'animate-slide-up' : 'opacity-0'} bg-white rounded-2xl shadow-lg overflow-hidden`} style={{ animationDelay: '0.4s' }}>
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Day 3 activities" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Day 3
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-sage-800 mb-3">
                  Integration & Empowerment
                </h3>
                <p className="text-gray-600 mb-4">
                  Integrate your experiences and step into your empowered feminine self.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Sun className="w-4 h-4 text-gold-500" />
                    <span>Empowerment ritual</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-gold-500" />
                    <span>Vision board creation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-sage-500" />
                    <span>Closing circle & commitments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-terracotta-500" />
                    <span>Celebration feast</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible.location ? 'animate-fade-in' : 'opacity-0'}`}>
              <img 
                src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Retreat location" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            
            <div className={`${isVisible.location ? 'animate-slide-up' : 'opacity-0'}`}>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-sage-800 mb-6">
                Sacred Mountain Sanctuary
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nestled in the heart of pristine wilderness, our retreat sanctuary offers the perfect backdrop for transformation. Surrounded by ancient trees and flowing streams, this sacred space has been carefully chosen to support your journey of self-discovery.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-sage-600" />
                  <span className="text-gray-700">Blue Ridge Mountains, North Carolina</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-sage-600" />
                  <span className="text-gray-700">September 15-17, 2024</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-sage-600" />
                  <span className="text-gray-700">Limited to 12 sacred sisters</span>
                </div>
              </div>

              <div className="bg-sage-50 p-6 rounded-xl">
                <h3 className="font-semibold text-sage-800 mb-3">What's Included:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-gold-500" />
                    <span>3 days of transformational workshops</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-gold-500" />
                    <span>All organic, locally-sourced meals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-gold-500" />
                    <span>Comfortable shared accommodation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-gold-500" />
                    <span>All materials and sacred tools</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-gold-500" />
                    <span>Lifetime sisterhood connection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Atmosphere */}
      <section id="atmosphere" className="py-20 bg-sage-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Retreat Atmosphere
            </h2>
            <p className="text-xl text-sage-200 max-w-3xl mx-auto">
              Glimpse into the sacred spaces where transformation unfolds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://i.ibb.co/r2CWXfvq/photo-8-2025-08-29-12-03-33.jpg" 
                alt="Retreat atmosphere" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://i.ibb.co/qMrMRzPS/photo-6-2025-08-29-12-03-33.jpg" 
                alt="Sacred ceremony" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://i.ibb.co/RpN7ZjTq/photo-4-2025-08-29-12-03-33.jpg" 
                alt="Meditation space" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://i.ibb.co/spbYZ1PF/photo-3-2025-08-29-12-03-33.jpg" 
                alt="Nature connection" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-sage-50 to-terracotta-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`${isVisible.contact ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-sage-800 mb-6">
              Ready to Begin Your Sacred Journey?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Your transformation awaits. Join us for this life-changing experience and step into your most empowered self.
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sage-800 mb-2">$897</div>
                  <div className="text-gray-600">Early Bird Special</div>
                  <div className="text-sm text-gray-500 mt-1">Save $200 - Limited Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-400 line-through mb-2">$1,097</div>
                  <div className="text-gray-600">Regular Price</div>
                  <div className="text-sm text-gray-500 mt-1">After August 15th</div>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-sage-600 to-terracotta-600 hover:from-sage-700 hover:to-terracotta-700 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg mb-6">
                Secure Your Sacred Space
              </button>
              
              <p className="text-sm text-gray-600 mb-6">
                Payment plans available • 100% satisfaction guarantee
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-sage-600" />
                </div>
                <h3 className="font-semibold text-sage-800 mb-1">Call Us</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-terracotta-600" />
                </div>
                <h3 className="font-semibold text-sage-800 mb-1">Email Us</h3>
                <p className="text-gray-600">hello@sacredfeminine.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-3">
                  <Instagram className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-semibold text-sage-800 mb-1">Follow Us</h3>
                <p className="text-gray-600">@sacredfeminine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Flower2 className="w-8 h-8 text-gold-400" />
                <span className="font-serif text-xl font-semibold">Sacred Feminine Retreat</span>
              </div>
              <p className="text-sage-200 mb-4 max-w-md">
                Empowering women to reconnect with their sacred feminine essence through transformational retreat experiences.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-sage-300 hover:text-gold-400 cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-sage-300 hover:text-gold-400 cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sage-200">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-gold-400 transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('program')} className="hover:text-gold-400 transition-colors">Program</button></li>
                <li><button onClick={() => scrollToSection('location')} className="hover:text-gold-400 transition-colors">Location</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-gold-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sage-200">
                <li>(555) 123-4567</li>
                <li>hello@sacredfeminine.com</li>
                <li>Blue Ridge Mountains, NC</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-sage-800 mt-8 pt-8 text-center text-sage-300">
            <p>&copy; 2024 Sacred Feminine Retreat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;