import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Star,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Menu,
  X,
  Flower2,
  Leaf,
  Sun
} from 'lucide-react';

console.log('App.tsx loading...');

const App: React.FC = () => {
  console.log('App component rendering...');
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Flower2 className="h-8 w-8 text-sage-600" />
              <span className="font-serif text-xl font-semibold text-sage-800">Sacred Feminine</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sage-700 hover:text-sage-900 transition-colors">About</a>
              <a href="#program" className="text-sage-700 hover:text-sage-900 transition-colors">Program</a>
              <a href="#location" className="text-sage-700 hover:text-sage-900 transition-colors">Location</a>
              <a href="#contact" className="text-sage-700 hover:text-sage-900 transition-colors">Contact</a>
              <button className="bg-sage-600 text-white px-6 py-2 rounded-full hover:bg-sage-700 transition-colors">
                Reserve Your Spot
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-sage-700 hover:text-sage-900 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="#about" className="block px-3 py-2 text-sage-700 hover:text-sage-900">About</a>
                <a href="#program" className="block px-3 py-2 text-sage-700 hover:text-sage-900">Program</a>
                <a href="#location" className="block px-3 py-2 text-sage-700 hover:text-sage-900">Location</a>
                <a href="#contact" className="block px-3 py-2 text-sage-700 hover:text-sage-900">Contact</a>
                <button className="w-full mt-2 bg-sage-600 text-white px-6 py-2 rounded-full hover:bg-sage-700 transition-colors">
                  Reserve Your Spot
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 hero-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://i.ibb.co/r2CWXfvq/photo-8-2025-08-29-12-03-33.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Awaken the Powerful
              <span className="block text-gold-400">Woman Within</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              A transformative 3-day retreat designed to reconnect you with your inner strength, 
              sacred femininity, and authentic power
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Begin Your Journey
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-sage-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="h-8 w-8 text-gold-400 opacity-70" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="h-6 w-6 text-sage-300 opacity-60" />
        </div>
        <div className="absolute top-1/3 right-8 animate-float" style={{ animationDelay: '2s' }}>
          <Leaf className="h-10 w-10 text-sage-400 opacity-50" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Rediscover Your Sacred Self
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              In our fast-paced world, women often lose touch with their inner wisdom and power. 
              This retreat is your invitation to pause, breathe, and reconnect with the magnificent woman you truly are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-sage-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-sage-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Heal & Release</h3>
                  <p className="text-gray-600">Let go of limiting beliefs and past wounds that no longer serve you</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-sage-100 p-3 rounded-full">
                  <Sparkles className="h-6 w-6 text-sage-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Awaken Your Power</h3>
                  <p className="text-gray-600">Reconnect with your inner strength and authentic feminine essence</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-sage-100 p-3 rounded-full">
                  <Sun className="h-6 w-6 text-sage-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Transform & Thrive</h3>
                  <p className="text-gray-600">Step into your highest potential and create the life you desire</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://i.ibb.co/qMrMRzPS/photo-6-2025-08-29-12-03-33.jpg" 
                alt="Woman in peaceful meditation" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-sage-600 text-white p-6 rounded-xl shadow-lg">
                <p className="font-semibold text-lg">3 Days</p>
                <p className="text-sage-100">of Transformation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 px-4 bg-sage-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Your Transformation Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each day is carefully crafted to guide you deeper into your authentic self
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Day 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-sage-600">1</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-sage-800 mb-2">Awakening</h3>
                <p className="text-gray-600">Release & Reconnect</p>
              </div>
              <img 
                src="https://i.ibb.co/RpN7ZjTq/photo-4-2025-08-29-12-03-33.jpg" 
                alt="Day 1 activities" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Opening ceremony & intention setting
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Guided meditation & breathwork
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Sacred feminine wisdom circle
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Evening reflection & journaling
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-sage-600">2</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-sage-800 mb-2">Embodiment</h3>
                <p className="text-gray-600">Feel & Express</p>
              </div>
              <img 
                src="https://i.ibb.co/spbYZ1PF/photo-3-2025-08-29-12-03-33.jpg" 
                alt="Day 2 activities" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Movement & dance therapy
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Creative expression workshop
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Shadow work & healing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Sisterhood bonding activities
                </li>
              </ul>
            </div>

            {/* Day 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-sage-600">3</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-sage-800 mb-2">Integration</h3>
                <p className="text-gray-600">Embody & Emerge</p>
              </div>
              <img 
                src="https://i.ibb.co/gbQKNwSF/photo-2-2025-08-29-12-03-33.jpg" 
                alt="Day 3 activities" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Personal power activation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Vision board creation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Integration planning
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Closing ceremony & celebration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Atmosphere Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-sage-900 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Retreat Atmosphere</h2>
          <p className="text-xl mb-12 text-gray-300">Glimpse into the sacred spaces where transformation unfolds</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                alt="Sacred space" 
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
                src="https://i.ibb.co/gZK29y4D/photo-1-2025-08-29-12-03-33.jpg" 
                alt="Nature connection" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Details */}
      <section id="location" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-800 mb-6">
                Sacred Mountain Sanctuary
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Nestled in the heart of nature, our retreat sanctuary provides the perfect backdrop 
                for your transformation. Surrounded by ancient trees and flowing streams, 
                this sacred space holds the energy of countless women who have walked this path before you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-sage-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800">March 15-17, 2024</h3>
                    <p className="text-gray-600">3 days, 2 nights</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-sage-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800">Blue Ridge Mountains</h3>
                    <p className="text-gray-600">Private retreat center with organic meals</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-sage-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800">Limited to 12 Women</h3>
                    <p className="text-gray-600">Intimate group for deep connection</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-sage-100 p-3 rounded-full">
                    <Star className="h-6 w-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800">$1,497 Investment</h3>
                    <p className="text-gray-600">All meals, accommodation & materials included</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://i.ibb.co/spbYZ1PF/photo-3-2025-08-29-12-03-33.jpg" 
                alt="Mountain retreat location" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -top-6 -right-6 bg-gold-500 text-white p-6 rounded-xl shadow-lg">
                <p className="font-semibold text-lg">Early Bird</p>
                <p className="text-gold-100">Save $300</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-sage-600 to-sage-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Your Transformation Awaits
          </h2>
          <p className="text-xl mb-8 text-sage-100 max-w-3xl mx-auto">
            Don't let another year pass wondering "what if." Your soul is calling you to step into your power. 
            Will you answer?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Reserve Your Sacred Space
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-sage-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Schedule a Call
            </button>
          </div>
          <p className="mt-6 text-sage-200 text-sm">
            Only 3 spots remaining • Payment plans available
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-warm-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-800 mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions or ready to secure your spot? We're here to support you on this sacred journey.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-sage-600" />
              </div>
              <h3 className="font-semibold text-sage-800 mb-2">Call Us</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            
            <div className="text-center">
              <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-sage-600" />
              </div>
              <h3 className="font-semibold text-sage-800 mb-2">Email Us</h3>
              <p className="text-gray-600">hello@sacredfeminine.com</p>
            </div>
            
            <div className="text-center">
              <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="h-8 w-8 text-sage-600" />
              </div>
              <h3 className="font-semibold text-sage-800 mb-2">Follow Us</h3>
              <p className="text-gray-600">@sacredfeminineretreat</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-serif text-2xl font-bold text-sage-800 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                />
              </div>
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              ></textarea>
              <button className="w-full bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Flower2 className="h-8 w-8 text-sage-400" />
                <span className="font-serif text-xl font-semibold">Sacred Feminine Retreat</span>
              </div>
              <p className="text-sage-300 mb-6 max-w-md">
                Empowering women to reconnect with their inner wisdom, strength, and sacred feminine essence 
                through transformative retreat experiences.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-sage-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-sage-400 hover:text-white cursor-pointer transition-colors" />
                <Mail className="h-6 w-6 text-sage-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sage-300">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#program" className="hover:text-white transition-colors">Program</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sage-300">
                <li>(555) 123-4567</li>
                <li>hello@sacredfeminine.com</li>
                <li>Blue Ridge Mountains</li>
                <li>North Carolina, USA</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-sage-800 mt-8 pt-8 text-center text-sage-400">
            <p>&copy; 2024 Sacred Feminine Retreat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;