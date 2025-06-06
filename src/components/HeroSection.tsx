
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Users, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-love-300 opacity-20 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${Math.random() * 20 + 15}px`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-love-500" />
            <span className="text-sm font-medium text-gray-700">
              Spread Love Through Digital Surprises
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Create Beautiful{" "}
            <span className="bg-love-gradient bg-clip-text text-transparent">
              Surprise Websites
            </span>{" "}
            for Your Loved Ones
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Celebrate birthdays, weddings, graduations, and special moments with 
            personalized one-page websites that will make them smile, cry happy tears, 
            and remember this moment forever.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-8 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-love-600">24+</div>
              <div className="text-sm text-gray-600">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-love-600">1000+</div>
              <div className="text-sm text-gray-600">Happy Couples</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-love-600">5000+</div>
              <div className="text-sm text-gray-600">Love Stories</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="love-gradient text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 love-shadow text-lg px-8 py-4"
            >
              <Heart className="w-5 h-5 mr-2" />
              Start Creating Your Surprise
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-love-600 border-love-200 hover:bg-love-50 text-lg px-8 py-4"
            >
              <Users className="w-5 h-5 mr-2" />
              See Templates
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center space-x-1">
              <span>✨</span>
              <span>No design skills needed</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>⚡</span>
              <span>Ready in minutes</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>💝</span>
              <span>Perfect for any occasion</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-love-400" />
      </div>
    </section>
  );
};

export default HeroSection;
