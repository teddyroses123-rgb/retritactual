import React, { useState, useEffect } from 'react';
import { Heart, Star, MapPin, Calendar, Users, Wifi, Coffee, Car, Utensils, Space as Spa, Mountain, Flower2, ChevronLeft, ChevronRight } from 'lucide-react';

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentRoomImageIndex, setCurrentRoomImageIndex] = useState(0);

  // Existing gallery images
  const galleryImages = [
    "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  // Room gallery images
  const roomImages = [
    "https://i.ibb.co/r2LfC1HC/photo-2025-08-29-23-59-33.jpg",
    "https://i.ibb.co/DH0fZVVv/photo-2025-08-29-23-59-36.jpg",
    "https://i.ibb.co/8gZShPwd/photo-2025-08-29-23-59-41.jpg",
    "https://i.ibb.co/YTVPy1w0/photo-2025-08-29-23-59-47.jpg",
    "https://i.ibb.co/YF5D0X1q/image.png"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextRoomImage = () => {
    setCurrentRoomImageIndex((prev) => (prev + 1) % roomImages.length);
  };

  const prevRoomImage = () => {
    setCurrentRoomImageIndex((prev) => (prev - 1 + roomImages.length) % roomImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Flower2 className="h-8 w-8 text-sage-600" />
              <span className="font-serif text-xl font-semibold text-gray-900">Awaken Retreat</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-sage-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-sage-600 transition-colors">About</a>
              <a href="#accommodation" className="text-gray-700 hover:text-sage-600 transition-colors">Stay</a>
              <a href="#program" className="text-gray-700 hover:text-sage-600 transition-colors">Program</a>
              <a href="#contact" className="text-gray-700 hover:text-sage-600 transition-colors">Contact</a>
            </div>
            <button className="bg-sage-600 text-white px-6 py-2 rounded-full hover:bg-sage-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')`
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Awaken the Powerful
            <span className="block text-gold-400">Woman Within</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up opacity-90">
            A transformative 3-day retreat in the heart of nature
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button className="bg-sage-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-sage-700 transition-all transform hover:scale-105">
              Reserve Your Spot
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Journey of Self-Discovery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Step away from the noise of daily life and reconnect with your inner strength, 
              wisdom, and authentic self in a supportive community of like-minded women.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-sage-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage-200 transition-colors">
                <Heart className="h-10 w-10 text-sage-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-gray-900">Self-Love</h3>
              <p className="text-gray-600 leading-relaxed">
                Cultivate a deeper relationship with yourself through mindfulness practices and self-compassion exercises.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-terracotta-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-terracotta-200 transition-colors">
                <Users className="h-10 w-10 text-terracotta-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-gray-900">Sisterhood</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with inspiring women who share your journey of growth and transformation.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gold-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                <Star className="h-10 w-10 text-gold-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-gray-900">Empowerment</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover your unique gifts and learn tools to create the life you truly desire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="py-20 bg-sage-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Where You'll Stay
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nestled in serene natural surroundings, our retreat center offers the perfect sanctuary for your transformation journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-semibold text-gray-900">Beautiful Location</h3>
              
              {/* Location Map */}
              <div className="mb-6">
                <img 
                  src="https://i.ibb.co/93CRqz1Y/Edit-the-uploaded-ma.png" 
                  alt="Retreat Location Map"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Our retreat center is situated on 50 acres of pristine wilderness, featuring walking trails, 
                meditation gardens, and breathtaking mountain views. The peaceful environment provides the 
                perfect backdrop for inner reflection and connection with nature.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mountain className="h-5 w-5 text-sage-600" />
                  <span className="text-gray-700">Mountain Views</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Flower2 className="h-5 w-5 text-sage-600" />
                  <span className="text-gray-700">Garden Paths</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-sage-600" />
                  <span className="text-gray-700">Private Setting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Spa className="h-5 w-5 text-sage-600" />
                  <span className="text-gray-700">Wellness Spaces</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={galleryImages[currentImageIndex]}
                  alt="Retreat Center"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all hover:scale-110"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all hover:scale-110"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Your Comfortable Rooms Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-8 text-center">
              Your Comfortable Rooms
            </h3>
            
            {/* Room Gallery */}
            <div className="mb-8">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg mb-4">
                <img 
                  src={roomImages[currentRoomImageIndex]}
                  alt={`Room view ${currentRoomImageIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                <button 
                  onClick={prevRoomImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all hover:scale-110 shadow-md"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <button 
                  onClick={nextRoomImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all hover:scale-110 shadow-md"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentRoomImageIndex + 1} / {roomImages.length}
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="flex space-x-2 justify-center overflow-x-auto pb-2">
                {roomImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentRoomImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentRoomImageIndex 
                        ? 'border-sage-600 shadow-md' 
                        : 'border-gray-200 hover:border-sage-400'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`Room thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-xl font-semibold mb-4 text-gray-900">Peaceful Accommodations</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Each thoughtfully designed room offers a tranquil space for rest and reflection. 
                  Wake up to stunning natural views and fall asleep to the gentle sounds of nature.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                    <span className="text-gray-700">Private or shared room options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                    <span className="text-gray-700">Comfortable bedding and linens</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                    <span className="text-gray-700">Natural light and garden views</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                    <span className="text-gray-700">Quiet spaces for journaling</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-xl font-semibold mb-4 text-gray-900">Amenities Included</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Wifi className="h-5 w-5 text-sage-600" />
                    <span className="text-gray-700">WiFi Access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Coffee className="h-5 w-5 text-sage-600" />
                    <span className="text-gray-700">Tea Station</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Car className="h-5 w-5 text-sage-600" />
                    <span className="text-gray-700">Parking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Utensils className="h-5 w-5 text-sage-600" />
                    <span className="text-gray-700">Meals Included</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-sage-50 rounded-lg">
                  <p className="text-sm text-sage-800 font-medium">
                    All linens, towels, and basic toiletries are provided for your convenience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Transformation Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three days of carefully curated experiences designed to help you reconnect with your power and purpose.
            </p>
          </div>

          <div className="space-y-8">
            {/* Day 1 */}
            <div className="bg-sage-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-sage-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  1
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900">Day One: Awakening</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Morning Circle</h4>
                  <p className="text-gray-600 text-sm">Welcome ceremony and intention setting</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Nature Walk</h4>
                  <p className="text-gray-600 text-sm">Guided meditation in the forest</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Evening Reflection</h4>
                  <p className="text-gray-600 text-sm">Journaling and sharing circle</p>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-terracotta-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-terracotta-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  2
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900">Day Two: Exploration</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Creative Expression</h4>
                  <p className="text-gray-600 text-sm">Art therapy and creative workshops</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Body Movement</h4>
                  <p className="text-gray-600 text-sm">Yoga and embodiment practices</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Sacred Ceremony</h4>
                  <p className="text-gray-600 text-sm">Release ritual by the fire</p>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-gold-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gold-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  3
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900">Day Three: Integration</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Vision Mapping</h4>
                  <p className="text-gray-600 text-sm">Create your path forward</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Sisterhood Bonds</h4>
                  <p className="text-gray-600 text-sm">Building lasting connections</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Closing Circle</h4>
                  <p className="text-gray-600 text-sm">Celebration and commitment ceremony</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stories of Transformation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "This retreat changed my life. I found my voice again and remembered who I truly am. 
                The sisterhood I found here continues to support me every day."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sage-800 font-semibold">S</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah M.</p>
                  <p className="text-gray-500 text-sm">Marketing Executive</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "The perfect blend of introspection and connection. I left feeling empowered and 
                with practical tools I use daily. Highly recommend to any woman ready for change."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-terracotta-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-terracotta-800 font-semibold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maria L.</p>
                  <p className="text-gray-500 text-sm">Teacher & Mother</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "Beautiful location, amazing facilitators, and life-changing experiences. 
                I discovered strengths I didn't know I had and made friendships that will last forever."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gold-800 font-semibold">J</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Jennifer K.</p>
                  <p className="text-gray-500 text-sm">Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-20 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Limited to 12 women for an intimate, transformative experience
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="font-serif text-2xl font-semibold mb-4">What's Included</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span>3 days, 2 nights accommodation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span>All meals and refreshments</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span>Guided workshops and activities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span>Welcome gift and journal</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span>Ongoing community access</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-4xl font-bold">$497</span>
                  <span className="text-lg opacity-75 ml-2">per person</span>
                </div>
                <p className="text-sm opacity-75 mb-6">Early bird pricing until March 15th</p>
                <button className="bg-gold-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-400 transition-all transform hover:scale-105 w-full">
                  Secure Your Spot
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>April 15-17, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Mountain Retreat Center</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Limited to 12 participants</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Questions? We're Here to Help
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to take the next step? Reach out and let's talk about your journey.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-left">
              <h3 className="font-serif text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <p>Email: hello@awakenretreat.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Follow us @awakenretreat</p>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="font-serif text-xl font-semibold mb-4">Quick Questions?</h3>
              <button className="bg-sage-600 text-white px-6 py-3 rounded-full hover:bg-sage-700 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Flower2 className="h-6 w-6 text-sage-400" />
              <span className="font-serif text-lg">Awaken Retreat</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Awaken Retreat. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;