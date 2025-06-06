
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Heart } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah & Mike",
      occasion: "Anniversary",
      rating: 5,
      text: "LovePlus helped me create the most beautiful surprise for our 2-year anniversary. Mike cried happy tears when he saw the website! The templates are gorgeous and so easy to use.",
      avatar: "👩‍❤️‍👨"
    },
    {
      name: "Emma Johnson",
      occasion: "Best Friend's Birthday",
      rating: 5,
      text: "I'm not tech-savvy at all, but LovePlus made it so simple to create something magical for my best friend's 25th birthday. She absolutely loved it and shared it with everyone!",
      avatar: "👭"
    },
    {
      name: "David & Lisa",
      occasion: "Wedding",
      rating: 5,
      text: "We used LovePlus to create a surprise website for our wedding guests. It was such a hit! Everyone was asking how we made something so professional and beautiful.",
      avatar: "💑"
    },
    {
      name: "Michael Torres",
      occasion: "Mom's Birthday",
      rating: 5,
      text: "Created a surprise website for my mom's 60th birthday with all our family photos and memories. She was so touched and has shown it to all her friends. Worth every penny!",
      avatar: "👨‍👩‍👧‍👦"
    },
    {
      name: "Jessica & Alex",
      occasion: "Graduation",
      rating: 5,
      text: "Alex graduated medical school and I wanted to do something special. The Gold plan let me add videos from family and friends. He was absolutely blown away!",
      avatar: "🎓"
    },
    {
      name: "Rachel Kim",
      occasion: "Valentine's Day",
      rating: 5,
      text: "Last minute Valentine's gift that turned out to be the most thoughtful present ever! My boyfriend said it was better than any expensive gift. LovePlus saved the day!",
      avatar: "💝"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-romantic-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Love Stories from <span className="bg-love-gradient bg-clip-text text-transparent">Happy Hearts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of people who have created magical moments with LovePlus
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white/80 backdrop-blur-sm border-white/20 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-love-300 mb-4" />

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.occasion}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-love-600 mb-2">98%</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-love-600 mb-2">5000+</div>
              <div className="text-gray-600">Surprises Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-love-600 mb-2">24</div>
              <div className="text-gray-600">Beautiful Templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-love-600 mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
