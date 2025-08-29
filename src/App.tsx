import React from 'react';
import { Flame, Leaf, Droplets, Heart, ChevronDown, ChevronRight, Check, Instagram, MessageCircle, Phone, Mail, Sunrise, HeartHandshake, Flower2, Palette, Sparkles } from 'lucide-react';

function App() {
  // Функция для прокрутки к секции оплаты
  const scrollToPayment = () => {

  const atmosphereImages = [
    'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&h=800',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=800',
    'https://images.pexels.com/photos/3184288/pexels-photo-3184288.jpeg?auto=compress&cs=tinysrgb&h=800',
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&h=800',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=800',
    'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&h=800',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&h=800'
  ];
    const paymentSection = document.getElementById('payment-section');
  const atmosphereImages = [
    'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&h=800',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=800',
    'https://images.pexels.com/photos/3184288/pexels-photo-3184288.jpeg?auto=compress&cs=tinysrgb&h=800',
  ];


  // Define atmosphere images for the carousel
  const atmosphereImages = [
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

    if (paymentSection) {
      paymentSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const [expandedDay, setExpandedDay] = React.useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const retreatPhotos = [
    {
      url: "https://i.ibb.co/r2CWXfvq/photo-8-2025-08-29-12-03-33.jpg",
      alt: "Sacred retreat space"
    },
    {
      url: "https://i.ibb.co/qMrMRzPS/photo-6-2025-08-29-12-03-33.jpg",
      alt: "Meditation space"
    },
    {
      url: "https://i.ibb.co/RpN7ZjTq/photo-4-2025-08-29-12-03-33.jpg",
      alt: "Ceremony preparation"
    },
    {
      url: "https://i.ibb.co/spbYZ1PF/photo-3-2025-08-29-12-03-33.jpg",
      alt: "Sacred gathering"
    },
    {
      url: "https://i.ibb.co/gbQKNwSF/photo-2-2025-08-29-12-03-33.jpg",
      alt: "Transformation space"
    },
    {
      url: "https://i.ibb.co/gZK29y4D/photo-1-2025-08-29-12-03-33.jpg",
      alt: "Sacred ceremony"
    }
  ];

  const PhotoCarousel = () => {
    return (
      <div className="max-w-4xl mx-auto px-4">
        {/* Retreat Atmosphere */}
        <section className="py-20 bg-gradient-to-br from-warm-50 to-sage-50">
          {/* Main Carousel Image */}
          <div className="relative mb-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-terracotta-700 mb-6">
                Retreat Atmosphere
              </h2>
              <img 
                src={retreatPhotos[currentImageIndex].url}
                alt={retreatPhotos[currentImageIndex].alt}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <p className="text-lg text-gray-600 mt-4">
                Immerse yourself in a sanctuary of growth and connection
              </p>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? retreatPhotos.length - 1 : currentImageIndex - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            
            <button 
              onClick={() => setCurrentImageIndex(currentImageIndex === retreatPhotos.length - 1 ? 0 : currentImageIndex + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {retreatPhotos.length}
            </div>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-6 gap-2 md:gap-3">
            {retreatPhotos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative rounded-lg overflow-hidden h-12 md:h-16 transition-all duration-300 ${
                  currentImageIndex === index 
                    ? 'ring-2 ring-gold-400 scale-105 shadow-lg' 
                    : 'hover:scale-105 hover:shadow-md opacity-70 hover:opacity-100'
                }`}
              >
                <img 
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
                {currentImageIndex === index && (
                  <div className="absolute inset-0 bg-gold-400/20"></div>
                )}
              </button>
            ))}
          </div>
        </section>
      </div>
    );
  };

  const features = [
    {
      icon: <Flame className="w-8 h-8 text-terracotta-500" />,
      text: "Let go of the past"
    },
    {
      icon: <Leaf className="w-8 h-8 text-sage-500" />,
      text: "Find balance and softness"
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-400" />,
      text: "Dive deep into yourself"
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-400" />,
      text: "Connect with your feminine power"
    }
  ];

  const instructors = [
    {
      name: "Yana",
      image: "https://i.ibb.co/T3HM4t4/image.png",
      specialty: "Holistic Practitioner • Yoga • Meditation • Shadow Work",
      quote: "I returned to myself — now I guide others.",
      description: "With over a decade of experience in holistic healing, Yana specializes in shadow work integration and feminine embodiment practices."
    },
    {
      name: "Irina",
      image: "https://i.ibb.co/qY3YgzNh/photo-2025-08-29-15-55-18.jpg",
      specialty: "Felt Artist • Nature-Inspired Clothing • Creative Expression",
      quote: "I am crazy about FELT!",
      description: "Irina brings the magic of creative expression through natural materials, teaching women to honor their creativity and craft their own sacred objects."
    }
  ];

  const schedule = [
    {
      day: 1,
      icon: <Sunrise className="w-5 h-5" />,
      title: "Sacred Arrival",
      activities: ["Cacao ceremony welcome", "Intention setting ritual", "Community dinner", "Evening meditation"]
    },
    {
      day: 2,
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Opening the Heart",
      activities: ["Hip-opening yoga flow", "Inner child healing workshop", "Mirror work session", "Nature walk meditation"]
    },
    {
      day: 3,
      icon: <Flower2 className="w-5 h-5" />,
      title: "Embodied Feminine",
      activities: ["Cacao dance celebration", "Yoni steam ceremony", "Breast massage workshop", "Yoga nidra healing", "Fiber art & color therapy (3 hours)"]
    },
    {
      day: 4,
      icon: <Palette className="w-5 h-5" />,
      title: "Creative Expression",
      activities: ["Felt crafting with Irina", "Voice liberation circle", "Fire ceremony preparation", "Sisterhood sharing", "Fiber art & color therapy (3 hours)", "BONUS: Professional photoshoot (2 hours)"]
    },
    {
      day: 5,
      icon: <Sparkles className="w-5 h-5" />,
      title: "Integration & Release",
      activities: ["Morning sun salutations", "Final fire ceremony", "Gratitude circle", "Closing feast", "Fiber art & color therapy (3 hours)", "BONUS: Professional photoshoot (2 hours)"]
    }
  ];

  const inclusions = [
    "5 nights accommodation in nature setting",
    "All daily meals (breakfast, lunch, dinner)",
    "Sacred ceremonies and healing workshops",
    "Yoga and meditation sessions",
    "Fire ceremony and Blue Lotus ritual",
    "Creative workshops with felt and crafts",
    "Fiber art & color therapy sessions (9 hours total)",
    "Professional photoshoot sessions (4 hours total)",
    "Evening activities and sisterhood circles",
    "Personal transformation guidance"
  ];

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, href: "#", label: "Instagram" },
    { icon: <MessageCircle className="w-6 h-6" />, href: "#", label: "Telegram" },
    { icon: <Phone className="w-6 h-6" />, href: "#", label: "WhatsApp" },
    { icon: <Mail className="w-6 h-6" />, href: "#", label: "Email" }
  ];

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-50">
        {/* Fire Ceremony Background */}
        <div className="absolute inset-0">
          {/* Main background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://i.ibb.co/Ldz215YJ/image.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
            }}
          />
          
          {/* Responsive background adjustments */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
          
          {/* Fire glow overlay to enhance the atmosphere */}
          <div className="absolute inset-0 bg-gradient-radial from-amber-600/20 via-transparent to-transparent"></div>
          
          {/* Subtle particles effect */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-300 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-amber-300 rounded-full opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 tracking-wide text-white drop-shadow-2xl">
            AWAKEN
            <br />
            THE POWERFUL
            <br />
            WOMAN WITHIN
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-12 leading-relaxed text-amber-100/90 drop-shadow-lg max-w-3xl mx-auto">
            5-Day Retreat in Nature • Feminine Energy • Deep Transformation
          </p>
          
          <button className="bg-amber-600/90 hover:bg-amber-700 backdrop-blur-sm text-white font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-amber-400/30 shadow-lg">
            BOOK YOUR SPOT
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-amber-200 animate-float">
          <div className="w-6 h-10 border-2 border-amber-200 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-200 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 bg-warm-50 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                This retreat is for the woman ready to awaken
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Step into a sacred space where transformation meets nature's embrace. This retreat is designed for women who feel the call to reconnect with their authentic power, release what no longer serves them, and awaken the feminine wisdom that lies within.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-gray-800 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                <img 
                  src="https://i.ibb.co/F4zxgsRw/photo-5-2025-08-29-12-03-33.jpg"
                  alt="Women in circle meditation in nature"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold-500 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-sage-500 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Fire Ceremony Section */}
      <section className="py-12 px-4 bg-sage-900 text-white relative overflow-hidden animate-fade-in">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-gold-500 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-16 h-16 border border-sage-300 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://i.ibb.co/RGm7xsNz/photo-7-2025-08-29-12-03-33.jpg"
                  alt="Fire ceremony with women in white"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-gold-500 to-terracotta-500 rounded-full opacity-80 blur-xl animate-float"></div>
            </div>

            {/* Content */}
            <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Fire Ceremony & Blue Lotus Ritual
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-gray-200">
                  In the sacred dance of the four elements—Earth, Air, Fire, and Water—we create a container for profound transformation and healing.
                </p>
                
                <div className="bg-sage-800/50 p-4 rounded-2xl border border-sage-700">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-gold-400">Sacred Elements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <span className="text-gold-400 font-bold">•</span>
                      <span>Sacred objects placed near the fire to honor ancestral wisdom</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-gold-400 font-bold">•</span>
                      <span>Ancestral connection and inner alchemy practices</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-gold-400 font-bold">•</span>
                      <span>Blue Lotus flower ceremony for enhanced intuition</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-gold-400 font-bold">•</span>
                      <span>Awakening feminine wisdom through sacred rituals</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-300 italic">
                  "Through fire, we release. Through ritual, we remember. Through community, we rise."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-warm-100 to-white animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10 animate-slide-up">
            Your Guides
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full flex items-center justify-center mr-4">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-sage-800">Sacred Space</h3>
                </div>
                <p className="text-sage-600 leading-relaxed">
                  Our retreat center is nestled in nature's embrace, providing the perfect sanctuary for deep inner work and transformation.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-terracotta-400 to-terracotta-600 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-sage-800">Nurturing Environment</h3>
                </div>
                <p className="text-sage-600 leading-relaxed">
                  Experience unconditional support in a judgment-free zone where vulnerability is celebrated and growth is nurtured.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-sage-800">Transformative Energy</h3>
                </div>
                <p className="text-sage-600 leading-relaxed">
                  Feel the powerful collective energy of women supporting women, creating magic and miracles together.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Women in circle meditation" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 px-4 bg-warm-50 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-slide-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              5 Days of Feminine Alchemy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Each day unfolds with intention, guiding you deeper into your authentic self
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {schedule.map((item, index) => (
              <div 
                key={item.day}
                className={`group relative bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slide-up ${
                  item.activities.some(activity => activity.includes('Fiber art') || activity.includes('BONUS')) 
                    ? 'ring-2 ring-gold-400 bg-gradient-to-br from-gold-50 to-terracotta-50' 
                    : ''
                } ${
                  index === schedule.length - 1 && schedule.length % 2 === 1 
                    ? 'lg:col-span-1 md:col-span-2 lg:col-start-2' 
                    : ''
                }`}
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-terracotta-50 via-warm-50 to-sage-50 opacity-60"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-3 right-3 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-gold-400 to-terracotta-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-sage-400 to-terracotta-300 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                {/* Card Content */}
                <div className="relative z-10 p-4 md:p-6">
                  {/* Day Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-terracotta-500 to-gold-500 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.day}
                    </div>
                    <div className="text-terracotta-500 group-hover:text-terracotta-600 transition-colors duration-300 group-hover:scale-110 transform text-sm md:text-base">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-terracotta-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-sage-600 font-medium mb-3 md:mb-4 uppercase tracking-wide">
                    Day {item.day}
                  </p>
                  
                  {/* Mobile: Compact view with collapsible details */}
                  <div className="md:hidden">
                    <button 
                      onClick={() => setExpandedDay(expandedDay === item.day ? null : item.day)}
                      className="w-full flex items-center justify-between bg-gradient-to-r from-terracotta-100 to-gold-100 hover:from-terracotta-200 hover:to-gold-200 text-terracotta-700 font-medium py-2 px-3 rounded-lg text-sm transition-all duration-300"
                    >
                      <span>View Activities</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedDay === item.day ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {expandedDay === item.day && (
                      <div className="mt-3 space-y-2 animate-fade-in">
                        {item.activities.map((activity, actIndex) => (
                          <div key={actIndex} className={`flex items-start space-x-2 ${
                            activity.includes('Fiber art') || activity.includes('BONUS') 
                              ? 'font-semibold text-gold-700' 
                              : ''
                          }`}>
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-terracotta-400 to-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm leading-relaxed">{activity}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Desktop: Show activities directly */}
                  <div className="hidden md:block space-y-2">
                    {item.activities.slice(0, 3).map((activity, actIndex) => (
                      <div key={actIndex} className={`flex items-start space-x-2 ${
                        activity.includes('Fiber art') || activity.includes('BONUS') 
                          ? 'font-semibold text-gold-700' 
                          : ''
                      }`}>
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-terracotta-400 to-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{activity}</span>
                      </div>
                    ))}
                    {item.activities.length > 3 && (
                      <div className="flex items-center space-x-2 mt-3">
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                        <span className="text-gray-500 text-xs italic">
                          +{item.activities.length - 3} more activities
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Desktop: Hover Effect Button */}
                  <div className="hidden md:block">
                    <button 
                      onClick={() => setExpandedDay(expandedDay === item.day ? null : item.day)}
                      className="mt-4 w-full bg-gradient-to-r from-terracotta-100 to-gold-100 hover:from-terracotta-200 hover:to-gold-200 text-terracotta-700 font-medium py-2 px-4 rounded-xl text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                    >
                      {expandedDay === item.day ? 'Show Less' : 'View Full Day'}
                    </button>
                  </div>
                </div>
                
                {/* Desktop: Expanded Content */}
                {expandedDay === item.day && (
                  <div className="relative z-20 bg-white/95 backdrop-blur-sm border-t border-gray-100 p-6 animate-fade-in">
                    <h4 className="font-serif text-lg font-semibold text-gray-900 mb-3">Complete Day Schedule</h4>
                    <div className="grid gap-3">
                      {item.activities.map((activity, actIndex) => (
                        <div key={actIndex} className={`flex items-start space-x-3 p-2 rounded-lg hover:bg-terracotta-50 transition-colors duration-200 ${
                          activity.includes('Fiber art') || activity.includes('BONUS') 
                            ? 'bg-gold-100 font-semibold text-gold-800' 
                            : ''
                        }`}>
                          <div className="w-2 h-2 bg-gradient-to-r from-terracotta-400 to-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-terracotta-500 to-gold-500 hover:from-terracotta-600 hover:to-gold-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-fade-in" style={{animationDelay: '1s'}}>
              VIEW FULL PROGRAMME
            </button>
            <p className="text-sm text-gray-500 mt-3 hidden md:block">
              Click on any day card to explore the complete schedule
            </p>
            <p className="text-sm text-gray-500 mt-3 md:hidden">
              Tap "View Activities" to see each day's schedule
            </p>
          </div>
        </div>
      </section>

      {/* Culinary Section */}
      <section className="py-12 px-4 bg-white animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] bg-warm-100">
                {/* Food gallery grid - fits without scrolling */}
                <div className="h-full p-4 grid grid-rows-4 gap-3">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://i.ibb.co/0RQ8dxks/Create-a-visual-scen.png"
                      alt="Beautiful dining setup"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://i.ibb.co/TDSgYw87/image.png"
                      alt="Healthy meal detail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://i.ibb.co/r2W4gDMP/image.png"
                      alt="Fresh ingredients"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://i.ibb.co/2wmRf9P/image.png"
                      alt="Cooking together"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-gold-400 to-terracotta-400 rounded-full opacity-20 animate-float"></div>
            </div>

            {/* Content */}
            <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Nourishment for Body & Soul
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every meal is crafted with love and intention, using fresh, local ingredients to nourish your transformation from the inside out.
              </p>

              <div className="space-y-4">
                <div className="bg-warm-100 p-4 rounded-2xl">
                  <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                    Farm-Fresh Breakfasts
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Start each day with fresh eggs from happy hens, seasonal fruits, and nourishing grains that energize your body for the day's journey.
                  </p>
                </div>

                <div className="bg-sage-100 p-4 rounded-2xl">
                  <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                    Mediterranean & Ukrainian Fusion
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Experience the warmth of Mediterranean flavors blended with traditional Ukrainian dishes, prepared with ancestral wisdom and modern nutrition.
                  </p>
                </div>

                <div className="bg-terracotta-100 p-4 rounded-2xl">
                  <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                    Sacred Cooking Circles
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Join your sisters in preparing grape leaves and traditional dishes, creating bonds through the ancient ritual of cooking together.
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-600 mt-4 italic">
                All dietary restrictions and allergies are lovingly accommodated with personalized meal planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where You'll Stay Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-sage-50 to-warm-50 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-slide-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where You'll Stay
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Nestled in nature's embrace, our retreat center offers comfort, beauty, and sacred space for your transformation
            </p>
          </div>

          {/* Dining Room Photos */}
          <div className="mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6 text-center">
              Sacred Dining Spaces
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://i.ibb.co/Sw0cwrCC/photo-2025-08-29-00-05-34.jpg"
                  alt="Beautiful dining room setup"
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://i.ibb.co/V00mmVPB/photo-2025-08-29-00-05-25.jpg"
                  alt="Cozy dining atmosphere"
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://i.ibb.co/BVWtVJg3/photo-2025-08-29-00-05-31.jpg"
                  alt="Intimate dining setting"
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Hotel Accommodation Photos */}
          <div className="mb-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6 text-center">
              Your Comfortable Rooms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://i.ibb.co/bgmkCf05/photo-2025-08-29-17-23-05.jpg"
                  alt="Comfortable hotel room with natural light"
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://i.ibb.co/sdj0RC7z/photo-2025-08-29-17-23-03.jpg"
                  alt="Cozy accommodation space"
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://i.ibb.co/qM8wR2YD/photo-2025-08-29-17-23-00.jpg"
                  alt="Peaceful room setting"
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Accommodation Info */}
            <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
                Comfortable Accommodation
              </h3>
              
              <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-terracotta-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Peaceful Rooms</h4>
                      <p className="text-gray-700 text-sm">Comfortable twin or double occupancy rooms with natural light and serene views</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Modern Amenities</h4>
                      <p className="text-gray-700 text-sm">Private bathrooms, fresh linens, and all essential comforts for your stay</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Nature Connection</h4>
                      <p className="text-gray-700 text-sm">Surrounded by gardens and natural beauty to enhance your healing journey</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="animate-fade-in" style={{animationDelay: '0.8s'}}>
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
                Beautiful Location
              </h3>
              
              <div className="bg-sage-100 rounded-3xl p-6">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Our retreat center is nestled in a peaceful natural setting, providing the perfect backdrop for your transformation journey.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-terracotta-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">Surrounded by lush gardens and natural beauty</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">Quiet spaces for reflection and meditation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">Sacred fire ceremony spaces</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Atmosphere */}
      <section className="py-20 bg-gradient-to-br from-sage-50 to-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-800 mb-6">
              Retreat Atmosphere
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Immerse yourself in a sanctuary designed for transformation, where every detail nurtures your journey to self-discovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Leaf className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-sage-800 mb-4 text-center">Sacred Space</h3>
              <p className="text-sage-600 text-center leading-relaxed">
                A carefully curated environment that honors the feminine divine, with natural elements and sacred geometry that support your inner work
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-terracotta-600" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-sage-800 mb-4 text-center">Heart-Centered Community</h3>
              <p className="text-sage-600 text-center leading-relaxed">
                Connect with like-minded women in a circle of trust, where vulnerability is honored and authentic connections flourish
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Sparkles className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-sage-800 mb-4 text-center">Transformative Energy</h3>
              <p className="text-sage-600 text-center leading-relaxed">
                Experience the powerful alchemy that occurs when women gather with intention, creating a field of possibility for profound change
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-terracotta-50 to-gold-50 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-slide-up">
            Your Transformation Includes
          </h2>

          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-terracotta-500 to-gold-500 text-transparent bg-clip-text">
                <span className="font-serif text-5xl md:text-6xl font-bold">$1,500</span>
              </div>
              <p className="text-lg text-gray-600 mt-2">for 5 transformative days</p>
              <p className="text-sm text-gray-500">accommodation & meals included</p>
            </div>

            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {inclusions.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-2 text-left animate-fade-in"
                  style={{animationDelay: `${0.4 + index * 0.05}s`}}
                >
                  <Check className="w-4 h-4 text-sage-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-terracotta-500 to-gold-500 hover:from-terracotta-600 hover:to-gold-600 text-white font-semibold px-8 py-3 rounded-full text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                RESERVE YOUR SPOT
              </button>
              
              <p className="text-sm text-gray-500">
                Limited to 12 women for intimate transformation experience
              </p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="w-12 h-12 bg-sage-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">Secure Booking</h3>
              <p className="text-gray-600 text-sm">Safe and encrypted payment processing</p>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '1s'}}>
              <div className="w-12 h-12 bg-gold-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-xl">↺</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">Flexible Terms</h3>
              <p className="text-gray-600 text-sm">Compassionate cancellation policy</p>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '1.2s'}}>
              <div className="w-12 h-12 bg-terracotta-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-xl">♡</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">Lifetime Support</h3>
              <p className="text-gray-600 text-sm">Continued guidance after retreat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Transformation Includes */}
      <section className="py-20 bg-gradient-to-br from-sage-50 to-warm-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-800 mb-6">
              Your Transformation Includes
            </h2>
            <p className="text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in a sanctuary of growth and connection
            </p>
          </div>

          {/* Image Carousel */}
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {atmosphereImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={image}
                      alt={`Retreat atmosphere ${index + 1}`}
                      className="w-full h-96 md:h-[500px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? atmosphereImages.length - 1 : currentImageIndex - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-sage-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 rotate-180" />
            </button>
            <button
              onClick={() => setCurrentImageIndex(currentImageIndex === atmosphereImages.length - 1 ? 0 : currentImageIndex + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-sage-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {atmosphereImages.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-2 mb-12">
            {atmosphereImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  currentImageIndex === index 
                    ? 'border-terracotta-500 scale-110' 
                    : 'border-transparent hover:border-sage-300'
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

          {/* Testimonial */}
          <div className="bg-sage-100/50 rounded-2xl p-8 max-w-4xl mx-auto mb-12">
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl font-serif italic text-sage-800 mb-6">
                "This retreat gave me back to myself. I found my voice and my sacred feminine essence."
              </p>
              <footer className="text-sage-600 font-medium">
                — Sarah M., Previous Participant
              </footer>
            </blockquote>
          </div>

          {/* Photo Carousel */}
          <PhotoCarousel />

          {/* Testimonial */}
          <div className="text-center mt-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="bg-sage-800/50 rounded-xl p-6 max-w-3xl mx-auto">
              <p className="font-serif text-base italic text-gold-200 mb-3">
                "This retreat gave me back to myself. I found my voice and my sacred feminine essence."
              </p>
              <p className="text-gold-300 text-sm">— Sarah M., Previous Participant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-warm-100 to-sage-100 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-slide-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ready to begin your transformation? We're here to guide you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your beautiful name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Share what calls you to this retreat..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-terracotta-500 to-gold-500 hover:from-terracotta-600 hover:to-gold-600 text-white font-semibold px-6 py-3 rounded-full text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information & Social */}
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="bg-sage-900 text-white rounded-3xl p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold mb-4 text-gold-400">
                    Connect With Us
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-300 leading-relaxed">
                      Have questions about the retreat? Want to know if this transformative journey is right for you? We're here to support you.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gold-400" />
                        <span className="text-gray-300">hello@retreat.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gold-400" />
                        <span className="text-gray-300">+1 (555) 123-4567</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-gold-400">Follow Our Journey</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="w-10 h-10 bg-sage-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110 transform"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;