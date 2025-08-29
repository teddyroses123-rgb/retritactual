import React from 'react';
import { Heart, Star, MapPin, Calendar, Users, Sparkles, Flower2, Sun } from 'lucide-react';

function App() {
  // Your room photos
  const roomImages = [
    'https://i.ibb.co/r2LfC1HC/photo-2025-08-29-23-59-33.jpg',
    'https://i.ibb.co/DH0fZVVv/photo-2025-08-29-23-59-36.jpg',
    'https://i.ibb.co/8gZShPwd/photo-2025-08-29-23-59-41.jpg',
    'https://i.ibb.co/YTVPy1w0/photo-2025-08-29-23-59-47.jpg',
    'https://i.ibb.co/8gZShPwd/photo-2025-08-29-23-59-41.jpg',
    'https://i.ibb.co/YF5D0X1q/image.png'
  ];

  const diningImages = [
    'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1395966/pexels-photo-1395966.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      text: "This retreat completely transformed my perspective on life. I found strength I never knew I had and connected with amazing women who became lifelong friends.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      text: "The perfect blend of self-discovery, relaxation, and empowerment. Every moment was thoughtfully crafted to help us grow and heal.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      text: "I came feeling lost and left feeling powerful and purposeful. The facilitators created such a safe, nurturing environment for transformation.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 hero-bg"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sage-900/40 via-sage-800/30 to-sage-900/50" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6 flex justify-center">
            <Flower2 className="w-16 h-16 text-gold-400 animate-float" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Awaken the <span className="text-gold-400">Powerful</span><br />
            Woman Within
          </h1>
          <p className="text-xl md:text-2xl text-warm-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join us for a transformative 3-day retreat designed to reconnect you with your inner strength, 
            wisdom, and authentic self in a nurturing sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gold-500 hover:bg-gold-600 text-sage-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Reserve Your Spot
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-sage-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
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

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-6">
              Your Journey of Transformation
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto leading-relaxed">
              Discover the profound experience that awaits you through carefully curated activities, 
              meaningful connections, and sacred moments of self-discovery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Heart-Centered Healing",
                description: "Release what no longer serves you and open your heart to new possibilities through guided meditation and energy work."
              },
              {
                icon: Sparkles,
                title: "Inner Wisdom Activation",
                description: "Reconnect with your intuition and inner knowing through sacred practices and mindful reflection."
              },
              {
                icon: Users,
                title: "Sisterhood Circle",
                description: "Build meaningful connections with like-minded women in a supportive, judgment-free environment."
              },
              {
                icon: Sun,
                title: "Morning Rituals",
                description: "Start each day with intention through yoga, breathwork, and gratitude practices."
              },
              {
                icon: Flower2,
                title: "Nature Immersion",
                description: "Ground yourself in the healing energy of nature through forest walks and outdoor ceremonies."
              },
              {
                icon: Star,
                title: "Personal Empowerment",
                description: "Discover your unique gifts and learn to step into your power with confidence and grace."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-sage-50 rounded-2xl hover:bg-sage-100 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 flex justify-center">
                  <feature.icon className="w-12 h-12 text-sage-600 group-hover:text-sage-700 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-sage-800 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-sage-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where You'll Stay Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-warm-50 to-sage-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-6">
              Where You'll Stay
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto leading-relaxed">
              Nestled in nature's embrace, our retreat center offers comfort, beauty, and 
              sacred space for your transformation
            </p>
          </div>

          {/* Sacred Dining Spaces */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif text-sage-800 text-center mb-8">Sacred Dining Spaces</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {diningImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Sacred dining space ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Your Comfortable Rooms Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-sage-50 to-warm-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif text-center text-sage-800 mb-6">
              Your Comfortable Rooms
            </h2>
            <p className="text-lg text-sage-600 text-center max-w-3xl mx-auto leading-relaxed">
              Rest and rejuvenate in our thoughtfully designed spaces, each crafted to provide 
              comfort and tranquility during your transformative journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Comfortable room ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-6">
              Voices of Transformation
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto leading-relaxed">
              Hear from women who have experienced the profound impact of our retreat
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-sage-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-sage-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="text-center">
                  <p className="font-semibold text-sage-800">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retreat Details Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-sage-50 to-warm-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-6">
              Retreat Details
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about your transformative journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                title: "Duration",
                detail: "3 Days, 2 Nights",
                description: "Friday evening through Sunday afternoon"
              },
              {
                icon: MapPin,
                title: "Location",
                detail: "Mountain Sanctuary",
                description: "Peaceful retreat center surrounded by nature"
              },
              {
                icon: Users,
                title: "Group Size",
                detail: "12-16 Women",
                description: "Intimate setting for deep connection"
              },
              {
                icon: Heart,
                title: "Investment",
                detail: "$497",
                description: "Includes accommodation, meals, and all activities"
              }
            ].map((detail, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <detail.icon className="w-10 h-10 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2">
                  {detail.title}
                </h3>
                <p className="text-2xl font-bold text-terracotta-600 mb-2">
                  {detail.detail}
                </p>
                <p className="text-sage-600 text-sm">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-sage-700 to-sage-800">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6 flex justify-center">
            <Sparkles className="w-12 h-12 text-gold-400 animate-float" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Your Transformation Awaits
          </h2>
          <p className="text-xl text-sage-100 mb-8 leading-relaxed">
            Don't wait another day to step into your power. Join us for this life-changing experience 
            and discover the extraordinary woman you were always meant to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gold-500 hover:bg-gold-400 text-sage-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Secure Your Place Now
            </button>
            <p className="text-sage-200 text-sm">
              Limited to 16 women • Next retreat: March 15-17, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-sage-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <Flower2 className="w-8 h-8 text-gold-400" />
          </div>
          <p className="text-sage-200 mb-4">
            © 2025 Awaken the Powerful Woman Within. All rights reserved.
          </p>
          <p className="text-sage-300 text-sm">
            Transform your life • Embrace your power • Connect with your tribe
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;