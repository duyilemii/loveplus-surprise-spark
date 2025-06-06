
import { Heart, Image, Link, Calendar } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Choose Your Occasion",
      description: "Select from birthdays, weddings, graduations, anniversaries, or create a custom celebration.",
      color: "text-pink-500"
    },
    {
      icon: Heart,
      title: "Share Your Love Story",
      description: "Tell us about your loved one, share memories, write a heartfelt letter, and upload photos.",
      color: "text-red-500"
    },
    {
      icon: Image,
      title: "Pick a Beautiful Template",
      description: "Choose from 24+ stunning templates designed for romance, friendship, and special moments.",
      color: "text-purple-500"
    },
    {
      icon: Link,
      title: "Share & Surprise",
      description: "Get a shareable link and QR code to surprise your loved one with your digital masterpiece.",
      color: "text-pink-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-romantic-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            How It <span className="bg-love-gradient bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create stunning surprise websites in just 4 simple steps. No design experience required!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full love-gradient flex items-center justify-center mb-4 group-hover:love-shadow transition-all duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-love-600 shadow-md">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-love-200 to-transparent transform translate-x-4 translate-y-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 rounded-full px-6 py-3">
            <Heart className="w-5 h-5 text-love-500" />
            <span className="text-gray-700 font-medium">
              Ready to create something magical?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
