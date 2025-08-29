import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Star, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Flower2,
  Sun
} from 'lucide-react';

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentAtmosphereIndex, setCurrentAtmosphereIndex] = useState(0);

  // Hero carousel images
  const heroImages = [
    'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3822623/pexels-photo-3822623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  // Atmosphere images
  const atmosphereImages = [
    'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3822623/pexels-photo-3822623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3822624/pexels-photo-3822624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3822625/pexels-photo-3822625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3822626/pexels-photo-3822626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  // Auto-advance hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const nextAtmosphereImage = () => {
    setCurrentAtmosphereIndex((prev) => (prev + 1) % atmosphereImages.length);
  };

  const prevAtmosphereImage = () => {
    setCurrentAtmosphereIndex((prev) => (prev - 1 + atmosphereImages.length) % atmosphereImages.length);
  };

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Retreat atmosphere ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Image indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <Sparkles className="w-16 h-16 text-gold-400 mx-auto mb-6 animate-float" />
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Awaken the Powerful
                <span className="block text-gold-400">Woman Within</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                A transformative 3-day retreat designed to reconnect you with your inner strength, 
                wisdom, and authentic self in the heart of nature.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Reserve Your Spot
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-terracotta-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Awaits You Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <Flower2 className="w-12 h-12 text-sage-500 mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              What Awaits You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in a carefully curated experience designed to nurture your mind, 
              body, and spirit while building lasting connections with like-minded women.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Sacred Circle Sessions",
                description: "Connect deeply with yourself and others through guided sharing circles, meditation, and mindfulness practices in a safe, supportive environment."
              },
              {
                icon: <Sun className="w-8 h-8" />,
                title: "Nature Immersion",
                description: "Reconnect with the earth through forest bathing, sunrise yoga, and outdoor ceremonies that ground you in natural wisdom."
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Personal Transformation",
                description: "Discover your authentic voice through creative workshops, journaling, and one-on-one guidance from experienced facilitators."
              }
            ].map((item, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-sage-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage-200 transition-colors duration-300">
                  <div className="text-sage-600">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-sage-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Guides Section */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Your Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced facilitators who will support your journey of self-discovery and transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "Elena Rodriguez",
                title: "Spiritual Guide & Life Coach",
                image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
                bio: "With over 15 years of experience in women's empowerment and spiritual guidance, Elena creates sacred spaces for profound transformation and healing."
              },
              {
                name: "Maya Chen",
                title: "Mindfulness Teacher & Healer",
                image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
                bio: "Maya brings ancient wisdom and modern psychology together, specializing in mindfulness practices and somatic healing for women's wellness."
              }
            ].map((guide, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-sage-200"
                  />
                  <h3 className="font-serif text-2xl font-semibold text-sage-800 mb-2">
                    {guide.name}
                  </h3>
                  <p className="text-terracotta-500 font-medium mb-4">
                    {guide.title}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {guide.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retreat Atmosphere Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-terracotta-600 mb-6">
              Retreat Atmosphere
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in a sanctuary of growth and connection
            </p>
          </div>

          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={atmosphereImages[currentAtmosphereIndex]}
                alt="Retreat atmosphere"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Navigation arrows */}
              <button
                onClick={prevAtmosphereImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextAtmosphereImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                {currentAtmosphereIndex + 1} / {atmosphereImages.length}
              </div>
            </div>

            {/* Thumbnail navigation */}
            <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
              {atmosphereImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAtmosphereIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentAtmosphereIndex 
                      ? 'border-terracotta-500 scale-110' 
                      : 'border-transparent hover:border-sage-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Atmosphere ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-sage-100 rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-lg italic text-sage-800 mb-4">
                "This retreat gave me back to myself. I found my voice and my sacred feminine essence."
              </p>
              <p className="text-sage-600 font-medium">
                — Sarah M., Previous Participant
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Retreat Details
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know for your transformative journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Calendar className="w-6 h-6 text-terracotta-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sage-800 mb-2">Dates & Duration</h3>
                  <p className="text-gray-600">March 15-17, 2024<br />3 days, 2 nights</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-terracotta-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sage-800 mb-2">Location</h3>
                  <p className="text-gray-600">Sacred Valley Retreat Center<br />Nestled in the mountains of Northern California</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-terracotta-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sage-800 mb-2">Group Size</h3>
                  <p className="text-gray-600">Limited to 12 women for intimate connection and personalized attention</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-sage-50 rounded-xl p-6">
                <h3 className="font-serif text-2xl font-semibold text-sage-800 mb-4">Investment</h3>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-terracotta-600">$1,497</p>
                  <p className="text-gray-600">Includes accommodation, all meals, and materials</p>
                  <p className="text-sm text-sage-600 mt-4">
                    Early bird discount: $200 off if registered by February 1st
                  </p>
                </div>
              </div>

              <div className="bg-terracotta-50 rounded-xl p-6">
                <h3 className="font-semibold text-terracotta-800 mb-3">What's Included</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Private accommodation</li>
                  <li>• All organic meals</li>
                  <li>• Workshop materials</li>
                  <li>• Guided activities</li>
                  <li>• Welcome & closing ceremonies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sage-600 to-sage-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-16 h-16 text-gold-400 mx-auto mb-6 animate-float" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Your Transformation Awaits
          </h2>
          <p className="text-xl mb-8 text-sage-100 max-w-2xl mx-auto">
            Join us for this life-changing experience. Limited spaces available for March 2024.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Reserve Your Spot Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-sage-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Download Brochure
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sage-200">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>hello@awakenretreat.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-sage-200 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <Flower2 className="w-8 h-8 text-gold-400 mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-semibold text-white mb-4">
              Awaken the Powerful Woman Within
            </h3>
            <p className="mb-6">
              A transformative retreat experience for the modern woman
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-gold-400 fill-current" />
              ))}
            </div>
            <p className="text-sm text-sage-400">
              © 2024 Awaken Retreat. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;