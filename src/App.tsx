import React, { useState } from 'react';
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
  Wifi, 
  Car, 
  Shield, 
  Award,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Instagram,
  Facebook
} from 'lucide-react';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentRoomImageIndex, setCurrentRoomImageIndex] = useState(0);

  const images = [
    "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3822623/pexels-photo-3822623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3822624/pexels-photo-3822624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3822625/pexels-photo-3822625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const roomImages = [
    "https://i.ibb.co/r2LfC1HC/photo-2025-08-29-23-59-33.jpg",
    "https://i.ibb.co/DH0fZVVv/photo-2025-08-29-23-59-36.jpg",
    "https://i.ibb.co/8gZShPwd/photo-2025-08-29-23-59-41.jpg",
    "https://i.ibb.co/YTVPy1w0/photo-2025-08-29-23-59-47.jpg",
    "https://i.ibb.co/YF5D0X1q/image.png"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextRoomImage = () => {
    setCurrentRoomImageIndex((prev) => (prev + 1) % roomImages.length);
  };

  const prevRoomImage = () => {
    setCurrentRoomImageIndex((prev) => (prev - 1 + roomImages.length) % roomImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToRoomImage = (index: number) => {
    setCurrentRoomImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 hero-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Awaken the Powerful
              <span className="block text-gold-400">Woman Within</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto">
              A transformative 3-day retreat designed to help you reconnect with your inner strength, 
              embrace your authentic self, and step into your power
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center text-gold-300">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="text-lg">March 15-17, 2024</span>
              </div>
              <div className="flex items-center text-gold-300">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">Sedona, Arizona</span>
              </div>
            </div>
            <button className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Reserve Your Spot
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Experience the Magic
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Immerse yourself in the breathtaking beauty of our retreat location
            </p>
          </div>
          
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={images[currentImageIndex]} 
                alt={`Retreat experience ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="flex justify-center mt-6 space-x-3 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentImageIndex 
                      ? 'border-terracotta-500 scale-110' 
                      : 'border-gray-300 hover:border-terracotta-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What You'll Experience
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A carefully curated journey of self-discovery and empowerment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Heart-Centered Meditation",
                description: "Connect with your inner wisdom through guided meditation practices designed to open your heart and quiet your mind."
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Empowerment Workshops",
                description: "Participate in transformative workshops that help you identify and overcome limiting beliefs while embracing your authentic power."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Sacred Sisterhood",
                description: "Build meaningful connections with like-minded women in a supportive, non-judgmental environment."
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Nature Immersion",
                description: "Reconnect with the earth through guided nature walks and outdoor ceremonies in Sedona's stunning red rock landscape."
              },
              {
                icon: <Sun className="w-8 h-8" />,
                title: "Morning Rituals",
                description: "Start each day with intention through sunrise yoga, breathwork, and mindfulness practices."
              },
              {
                icon: <Moon className="w-8 h-8" />,
                title: "Evening Reflection",
                description: "End each day with journaling, sharing circles, and gentle movement to integrate your experiences."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-terracotta-500 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">
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

      {/* Retreat Atmosphere */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Retreat Atmosphere
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Immerse yourself in a nurturing environment designed for transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-sage-100 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-sage-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Sacred Space</h3>
                  <p className="text-gray-600">A carefully curated environment that honors the sacred feminine and creates space for deep inner work.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-terracotta-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-terracotta-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Intimate Group</h3>
                  <p className="text-gray-600">Limited to 12 women to ensure personalized attention and meaningful connections.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gold-100 p-3 rounded-full">
                  <Sparkles className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Transformative Energy</h3>
                  <p className="text-gray-600">Sedona's powerful vortex energy amplifies your personal transformation and spiritual growth.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2" 
                alt="Retreat atmosphere" 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Transformation Includes */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Your Transformation Includes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need for a complete retreat experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Expert Guidance",
                description: "Led by certified life coaches and spiritual mentors with years of experience in women's empowerment."
              },
              {
                icon: <Utensils className="w-8 h-8" />,
                title: "Nourishing Meals",
                description: "Organic, locally-sourced meals designed to nourish your body and support your transformation."
              },
              {
                icon: <Coffee className="w-8 h-8" />,
                title: "All Materials",
                description: "Journals, meditation cushions, and all workshop materials provided for your journey."
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Nature Activities",
                description: "Guided hikes, outdoor ceremonies, and connection with Sedona's healing energy."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Personal Support",
                description: "One-on-one check-ins and personalized guidance throughout your retreat experience."
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Take-Home Tools",
                description: "Practical tools and practices you can continue using long after the retreat ends."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-terracotta-500 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where You'll Stay */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Where You'll Stay
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A beautiful retreat center nestled in Sedona's red rock country
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Beautiful Location */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-semibold text-gray-800">Beautiful Location</h3>
              
              {/* Location Map */}
              <div className="mb-6">
                <img 
                  src="https://i.ibb.co/93CRqz1Y/Edit-the-uploaded-ma.png" 
                  alt="Retreat location map" 
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Our retreat center is perfectly positioned among Sedona's famous red rocks, 
                offering breathtaking views and direct access to hiking trails. The serene 
                environment provides the ideal backdrop for your transformational journey.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-terracotta-500" />
                  <span className="text-gray-700">Sedona, Arizona</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="w-5 h-5 text-terracotta-500" />
                  <span className="text-gray-700">Free Parking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wifi className="w-5 h-5 text-terracotta-500" />
                  <span className="text-gray-700">WiFi Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-terracotta-500" />
                  <span className="text-gray-700">Safe & Secure</span>
                </div>
              </div>
            </div>
            
            {/* Your Comfortable Rooms */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-semibold text-gray-800">Your Comfortable Rooms</h3>
              
              {/* Room Gallery Slider */}
              <div className="relative">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={roomImages[currentRoomImageIndex]} 
                    alt={`Room view ${currentRoomImageIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevRoomImage}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextRoomImage}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                    {currentRoomImageIndex + 1} / {roomImages.length}
                  </div>
                </div>
                
                {/* Thumbnails */}
                <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
                  {roomImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToRoomImage(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentRoomImageIndex 
                          ? 'border-terracotta-500 scale-110' 
                          : 'border-gray-300 hover:border-terracotta-300'
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
              
              <p className="text-gray-600 leading-relaxed">
                Each room is thoughtfully designed for comfort and tranquility, featuring 
                comfortable bedding, natural lighting, and peaceful views. Shared and private 
                room options available to suit your preferences.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-terracotta-500 rounded-full"></div>
                  <span className="text-gray-700">Comfortable twin or queen beds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-terracotta-500 rounded-full"></div>
                  <span className="text-gray-700">Private or shared bathroom options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-terracotta-500 rounded-full"></div>
                  <span className="text-gray-700">Natural lighting and peaceful views</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-terracotta-500 rounded-full"></div>
                  <span className="text-gray-700">All linens and towels provided</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Women Are Saying
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from women who have experienced their own transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                location: "California",
                text: "This retreat changed my life. I found my voice again and learned to trust my intuition. The sisterhood I formed here will last forever.",
                rating: 5
              },
              {
                name: "Jennifer L.",
                location: "Texas",
                text: "I came feeling lost and left feeling empowered. The combination of nature, meditation, and supportive women was exactly what I needed.",
                rating: 5
              },
              {
                name: "Maria R.",
                location: "New York",
                text: "The most transformative three days of my life. I learned tools I still use daily and connected with my authentic self in ways I never thought possible.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Registration */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Your Investment in Yourself
          </h2>
          
          <div className="bg-sage-50 p-8 md:p-12 rounded-2xl shadow-lg mb-12">
            <div className="mb-8">
              <span className="text-5xl md:text-6xl font-bold text-terracotta-500">$1,497</span>
              <p className="text-gray-600 mt-2">Complete 3-day retreat experience</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-terracotta-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">All workshops and activities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-terracotta-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Accommodation for 2 nights</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-terracotta-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">All meals and refreshments</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-terracotta-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Materials and resources</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-terracotta-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Personal guidance and support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-terracotta-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Lifetime access to community</span>
                </div>
              </div>
            </div>
            
            <div className="bg-terracotta-100 p-6 rounded-xl mb-8">
              <p className="text-terracotta-800 font-semibold mb-2">Early Bird Special</p>
              <p className="text-terracotta-700">Save $200 when you register before February 1st - Only $1,297!</p>
            </div>
            
            <button className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Secure Your Spot Now
            </button>
            
            <p className="text-gray-500 text-sm mt-4">
              Payment plans available • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">Ready to Transform?</h3>
              <p className="text-gray-300 mb-6">
                Take the first step towards awakening the powerful woman within you.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-terracotta-400 hover:text-terracotta-300 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-terracotta-400 hover:text-terracotta-300 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-terracotta-400" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-terracotta-400" />
                  <span className="text-gray-300">hello@womenretreat.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-terracotta-400" />
                  <span className="text-gray-300">Sedona, Arizona</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">About the Retreat</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">What's Included</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Testimonials</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">FAQ</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Awaken the Powerful Woman Within. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;