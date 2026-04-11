
  import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19205d2aa-1763296356182.png",
    imageAlt: "Professional Indian woman with warm smile wearing traditional saree in elegant indoor setting",
    rating: 5,
    date: "December 2025",
    text: "HotelKashiIn exceeded all expectations. The blend of traditional Kashi aesthetics with modern luxury is simply breathtaking. The staff's attention to detail and warm hospitality made our spiritual journey truly memorable. The sunrise view from our room was divine.",
    experience: "Heritage Suite Stay"
  },
  {
    id: 2,
    name: "James Anderson",
    location: "London, UK",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe0cedc8-1763300703468.png",
    imageAlt: "Professional British man with friendly expression wearing business casual attire in modern office setting",
    rating: 5,
    date: "November 2025",
    text: "As someone who travels extensively for business, I can confidently say this is one of the finest hotels I've experienced. The cultural immersion combined with world-class amenities created an unforgettable stay. The rooftop yoga sessions at sunrise were transformative.",
    experience: "Royal Kashi Suite"
  },
  {
    id: 3,
    name: "Ananya Patel",
    location: "Ahmedabad, India",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17f8f5ea4-1763299033127.png",
    imageAlt: "Young Indian woman with bright smile wearing contemporary Indian fusion outfit in vibrant outdoor setting",
    rating: 5,
    date: "January 2026",
    text: "We chose HotelKashiIn for our anniversary celebration, and it was the perfect decision. The attention to cultural details, the exquisite dining experience, and the serene ambiance created magical moments. The staff arranged a private Ganga Aarti viewing that we'll cherish forever.",
    experience: "Anniversary Package"
  }];


  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/75 px-4 py-2 rounded-full mb-4">
            <Icon name="MessageCircle" size={20} className="text-[rgba(194,110,20,1)]" />
            <span className="font-cta text-sm font-medium text-[rgba(194,110,20,1)]">Guest Experiences</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Stories from Our Guests
          </h2>
          <p className="font-poppins text-base md:text-sm text-muted-foreground">
            Discover why travelers from around the world choose HotelKashiIn for their Varanasi experience
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-orange-800 rounded-3xl shadow-golden-glow p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-golden">
                    <Image
                      src={testimonials?.[activeTestimonial]?.image}
                      alt={testimonials?.[activeTestimonial]?.imageAlt}
                      className="w-full h-full object-cover" />

                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Icon name="Quote" size={28} className="text-orange-700" />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                  {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, index) =>
                  <Icon
                    key={index}
                    name="Star"
                    size={20}
                    className="text-yellow-500 fill-yellow-500" />

                  )}
                </div>

                <p className="font-body text-base md:text-lg text-white leading-relaxed mb-6 italic">
                  "{testimonials?.[activeTestimonial]?.text}"
                </p>

                <div className="space-y-2">
                  <h4 className="font-poppins text-xl md:text-2xl font-semibold text-white">
                    {testimonials?.[activeTestimonial]?.name}
                  </h4>
                  <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-white">
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={16} />
                      <span className="font-poppins">{testimonials?.[activeTestimonial]?.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={16} />
                      <span className="font-body">{testimonials?.[activeTestimonial]?.date}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full mt-2">
                    <Icon name="Sparkles" size={14} className="text-amber-700" />
                    <span className="font-poppins text-xs font-medium text-amber-700">
                      {testimonials?.[activeTestimonial]?.experience}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrevTestimonial}
              className="w-12 h-12 bg-card hover:bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 shadow-golden group"
              aria-label="Previous testimonial">

              <Icon name="ChevronLeft" size={24} className="text-amber-800 group-hover:text-primary cursor-pointer" />
            </button>

            <div className="flex space-x-2">
              {testimonials?.map((_, index) =>
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial ? 'bg-amber-700 w-8' : 'bg-muted hover:bg-primary/50'}`
                }
                aria-label={`Go to testimonial ${index + 1}`} />

              )}
            </div>

            <button
              onClick={handleNextTestimonial}
              className="w-12 h-12 bg-card hover:bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 shadow-golden group"
              aria-label="Next testimonial">

              <Icon name="ChevronRight" size={24} className="text-amber-800 group-hover:text-primary cursor-pointer" />
            </button>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-6 bg-orange-800 rounded-2xl shadow-golden">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={32} className="text-amber-700" />
            </div>
            <h3 className="font-poppins text-3xl md:text-2xl font-medium text-white mb-2">
              2,000+
            </h3>
            <p className="font-poppins text-sm text-white">Happy Guests</p>
          </div>

          <div className="text-center p-6 bg-orange-800 rounded-2xl shadow-golden">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Star" size={32} className="text-amber-700" />
            </div>
            <h3 className="font-poppins text-3xl md:text-2xl font-medium text-white mb-2">
              4.9/5
            </h3>
            <p className="font-poppins text-sm text-white">Average Rating</p>
          </div>

          <div className="text-center p-6 bg-orange-800 rounded-2xl shadow-golden">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={32} className="text-amber-700" />
            </div>
            <h3 className="font-poppins text-3xl md:text-2xl font-semibold text-white mb-2">
              15+
            </h3>
            <p className="font-poppins text-sm text-white">Industry Awards</p>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialSection;