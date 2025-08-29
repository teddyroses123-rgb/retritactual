import React from 'react';
import { Heart, Leaf, Sun, Moon, Users, MapPin, Calendar, Clock, Star, Phone, Mail, Instagram, Facebook } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-warm-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-sage-600" />
              <span className="font-serif text-xl font-semibold text-sage-800">Sacred Feminine</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-sage-700 hover:text-sage-900 transition-colors">About</a>
              <a href="#program" className="text-sage-700 hover:text-sage-900 transition-colors">Program</a>
              <a href="#location" className="text-sage-700 hover:text-sage-900 transition-colors">Location</a>
              <a href="#contact" className="text-sage-700 hover:text-sage-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://i.ibb.co/r2CWXfvq/photo-8-2025-08-29-12-03-33.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Awaken the Powerful Woman Within
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up opacity-90">
            A transformative 3-day retreat to reconnect with your sacred feminine essence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Reserve Your Sacred Space
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-sage-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-800 leading-tight">
                Rediscover Your Sacred Feminine Power
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                In our fast-paced world, many women have lost touch with their innate wisdom, intuition, and sacred feminine energy. This retreat offers a sanctuary to reconnect with your authentic self through ancient practices, modern healing techniques, and the profound support of sisterhood.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Join us for three transformative days of self-discovery, healing, and empowerment in a beautiful natural setting designed to nurture your soul and awaken your inner goddess.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-terracotta-500" />
                  <span className="text-sage-700">Heart-centered healing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sun className="h-5 w-5 text-gold-500" />
                  <span className="text-sage-700">Sacred ceremonies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-sage-600" />
                  <span className="text-sage-700">Sisterhood circle</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://i.ibb.co/qMrMRzPS/photo-6-2025-08-29-12-03-33.jpg" 
                alt="Sacred feminine retreat space" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-terracotta-100 rounded-full flex items-center justify-center animate-float">
                <Leaf className="h-12 w-12 text-terracotta-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Your Sacred Journey
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Three carefully crafted days designed to guide you through a profound transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Day 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://i.ibb.co/RpN7ZjTq/photo-4-2025-08-29-12-03-33.jpg" 
                alt="Day 1 - Awakening" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Sun className="h-6 w-6 text-gold-500" />
                  <h3 className="font-serif text-2xl font-semibold text-sage-800">Day 1: Awakening</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-terracotta-500 mt-1 flex-shrink-0" />
                    <span>Opening ceremony & intention setting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-terracotta-500 mt-1 flex-shrink-0" />
                    <span>Sacred feminine meditation practices</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-terracotta-500 mt-1 flex-shrink-0" />
                    <span>Goddess archetype exploration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-terracotta-500 mt-1 flex-shrink-0" />
                    <span>Evening fire ceremony</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://i.ibb.co/spbYZ1PF/photo-3-2025-08-29-12-03-33.jpg" 
                alt="Day 2 - Healing" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Heart className="h-6 w-6 text-terracotta-500" />
                  <h3 className="font-serif text-2xl font-semibold text-sage-800">Day 2: Healing</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-terracotta-500 mt-1 flex-shrink-0" />
                    <span>Womb wisdom & healing circle</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-terracotta-500 mt-1 flex-shrink-0" />
                    <span>Emotional release workshop</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-terracotta-500 mt-1 flex-shrink-0" />
                    <span>Sacred dance & movement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-terracotta-500 mt-1 flex-shrink-0" />
                    <span>Sisterhood sharing circle</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://i.ibb.co/gbQKNwSF/photo-2-2025-08-29-12-03-33.jpg" 
                alt="Day 3 - Integration" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Moon className="h-6 w-6 text-sage-600" />
                  <h3 className="font-serif text-2xl font-semibold text-sage-800">Day 3: Integration</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-terracotta-500 mt-1 flex-shrink-0" />
                    <span>Personal power activation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-terracotta-500 mt-1 flex-shrink-0" />
                    <span>Vision board creation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-terracotta-500 mt-1 flex-shrink-0" />
                    <span>Sacred commitment ceremony</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-terracotta-500 mt-1 flex-shrink-0" />
                    <span>Closing blessing circle</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Atmosphere */}
      <section className="py-20 bg-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Retreat Atmosphere
            </h2>
            <p className="text-xl text-sage-100 max-w-3xl mx-auto">
              Glimpse into the sacred spaces where transformation unfolds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src="https://i.ibb.co/r2CWXfvq/photo-8-2025-08-29-12-03-33.jpg" 
                alt="Sacred ceremony space" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src="https://i.ibb.co/qMrMRzPS/photo-6-2025-08-29-12-03-33.jpg" 
                alt="Meditation garden" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src="https://i.ibb.co/RpN7ZjTq/photo-4-2025-08-29-12-03-33.jpg" 
                alt="Healing sanctuary" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src="https://i.ibb.co/spbYZ1PF/photo-3-2025-08-29-12-03-33.jpg" 
                alt="Sacred gathering space" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-800">
                Sacred Mountain Sanctuary
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nestled in the heart of pristine wilderness, our retreat center offers the perfect environment for deep transformation. Surrounded by ancient trees and flowing streams, this sacred space has been carefully chosen to support your journey of self-discovery.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-terracotta-500" />
                  <span className="text-gray-700">Blue Ridge Mountains, North Carolina</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-terracotta-500" />
                  <span className="text-gray-700">September 15-17, 2024</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-terracotta-500" />
                  <span className="text-gray-700">Friday 4 PM - Sunday 6 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-terracotta-500" />
                  <span className="text-gray-700">Limited to 12 sacred sisters</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://i.ibb.co/gbQKNwSF/photo-2-2025-08-29-12-03-33.jpg" 
                alt="Mountain sanctuary location" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-100 rounded-full flex items-center justify-center animate-float">
                <Sun className="h-12 w-12 text-gold-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-sage-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-800 mb-8">
            Sacred Investment
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <div className="text-5xl md:text-6xl font-bold text-terracotta-500 mb-2">$888</div>
              <p className="text-xl text-gray-600">Complete 3-day transformation</p>
            </div>
            <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-gold-500" />
                <span>All meals & accommodation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-gold-500" />
                <span>Guided workshops & ceremonies</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-gold-500" />
                <span>Sacred sisterhood circle</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-gold-500" />
                <span>Personal transformation toolkit</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-gold-500" />
                <span>Ongoing community support</span>
              </div>
            </div>
            <button className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Claim Your Sacred Space
            </button>
            <p className="text-sm text-gray-500 mt-4">Early bird pricing available until August 1st</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-sage-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">
            Begin Your Sacred Journey
          </h2>
          <p className="text-xl text-sage-100 mb-12 max-w-2xl mx-auto">
            Ready to step into your power? Connect with us to reserve your space in this transformative experience.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="h-8 w-8 text-terracotta-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-sage-200">(555) 123-SACRED</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-terracotta-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-sage-200">hello@sacredfeminine.com</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-terracotta-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Follow</h3>
              <div className="flex justify-center space-x-4">
                <Instagram className="h-6 w-6 text-sage-200 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="h-6 w-6 text-sage-200 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <button className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Reserve Your Sacred Space Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="h-8 w-8 text-sage-400" />
              <span className="font-serif text-xl font-semibold text-white">Sacred Feminine Retreat</span>
            </div>
            <div className="text-sage-300 text-sm">
              © 2024 Sacred Feminine Retreat. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;