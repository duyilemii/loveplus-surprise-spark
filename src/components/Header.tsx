
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full bg-love-gradient">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-love-gradient bg-clip-text text-transparent">
              LovePlus
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-love-500 transition-colors">
              How it Works
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-love-500 transition-colors">
              Pricing
            </a>
            <a href="#templates" className="text-gray-700 hover:text-love-500 transition-colors">
              Templates
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-love-500 transition-colors">
              Reviews
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-love-500">
              Sign In
            </Button>
            <Button className="love-gradient text-white hover:opacity-90 transition-opacity love-shadow">
              Start Creating
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#how-it-works" className="text-gray-700 hover:text-love-500 transition-colors">
                How it Works
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-love-500 transition-colors">
                Pricing
              </a>
              <a href="#templates" className="text-gray-700 hover:text-love-500 transition-colors">
                Templates
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-love-500 transition-colors">
                Reviews
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-700 hover:text-love-500">
                  Sign In
                </Button>
                <Button className="love-gradient text-white hover:opacity-90 transition-opacity">
                  Start Creating
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
