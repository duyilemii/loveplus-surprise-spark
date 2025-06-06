
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Heart, Star, Crown } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Bronze",
      price: "₦2,000",
      icon: Heart,
      popular: false,
      description: "Perfect for sweet and simple surprises",
      features: [
        "Upload loved one's name",
        "Write a beautiful love letter",
        "Add one special photo",
        "Basic personal information",
        "Choose from 8 romantic templates",
        "Shareable link & QR code",
        "1 week access to create & edit"
      ],
      buttonText: "Start with Bronze",
      gradient: "from-gray-100 to-gray-200",
      textColor: "text-gray-800"
    },
    {
      name: "Silver",
      price: "₦3,500",
      icon: Star,
      popular: true,
      description: "Most popular - Perfect for memorable moments",
      features: [
        "Everything in Bronze",
        "Upload audio messages",
        "Add multiple photos (up to 10)",
        "Enhanced customization options",
        "Choose from 8 premium templates",
        "Background music options",
        "Priority support",
        "1 week access to create & edit"
      ],
      buttonText: "Choose Silver",
      gradient: "from-love-100 to-love-200",
      textColor: "text-love-800"
    },
    {
      name: "Gold",
      price: "₦5,000",
      icon: Crown,
      popular: false,
      description: "Ultimate experience for the most special occasions",
      features: [
        "Everything in Silver",
        "Upload video messages",
        "Unlimited photos",
        "Full template customization",
        "Choose from 8 luxury templates",
        "Advanced animations",
        "Video background options",
        "Premium fonts & layouts",
        "1 week access to create & edit"
      ],
      buttonText: "Go Premium",
      gradient: "from-yellow-100 to-yellow-200",
      textColor: "text-yellow-800"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Choose Your <span className="bg-love-gradient bg-clip-text text-transparent">Love Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One-time payment gives you 1 week to create unlimited surprise websites. 
            Perfect for planning multiple surprises or getting everything just right!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-love-300 shadow-lg love-shadow' 
                  : 'border-gray-200 hover:border-love-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="love-gradient text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular ✨
                  </div>
                </div>
              )}

              <CardHeader className={`text-center pb-6 bg-gradient-to-br ${plan.gradient} rounded-t-lg`}>
                <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center mb-4">
                  <plan.icon className={`w-8 h-8 ${plan.textColor}`} />
                </div>
                <CardTitle className={`text-2xl font-bold ${plan.textColor}`}>
                  {plan.name}
                </CardTitle>
                <div className={`text-4xl font-bold ${plan.textColor} mb-2`}>
                  {plan.price}
                </div>
                <CardDescription className={`${plan.textColor} opacity-80`}>
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="py-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-love-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'love-gradient text-white hover:opacity-90 love-shadow' 
                      : 'border-love-200 text-love-600 hover:bg-love-50'
                  } transition-all duration-300`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 bg-gray-50 rounded-full px-6 py-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-love-500" />
              <span className="text-gray-700">7-day access period</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-love-500" />
              <span className="text-gray-700">Unlimited creations</span>
            </div>
            <div className="flex items-center space-x-2">
              <Crown className="w-5 h-5 text-love-500" />
              <span className="text-gray-700">Edit anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
