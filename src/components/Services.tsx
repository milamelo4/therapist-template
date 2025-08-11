import { Heart, Globe, User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
    const services = [
  {
    icon: Heart,
    title: "Self-Knowledge",
    description:
      "A deep process of personal discovery through the analysis of unconscious content, promoting greater self-understanding and insight into relationships.",
  },
  {
    icon: Globe,
    title: "Guidance Abroad",
    description:
      "Support for those navigating life in a different country, offering guidance through cultural transitions, emotional adjustments, and the challenges of living overseas.",
  },
  {
    icon: User,
    title: "Personalized Care",
    description:
      "Each session is thoughtfully tailored to the unique needs of each individual, respecting their pace and life story. Our approach focuses on creating a safe space for self-discovery and transformation.",
  },
];

   return (
    <section id="services"     
    className={`py-10 sm:py-20 px-4 bg-background min-h-[100svh] md:min-h-screen`}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div 
          ref={ref}
          className={`text-center transform-gpu will-change-transform will-change-opacity
          transition-opacity transition-transform duration-700 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
            Services Offered
          </h2>
          <p className="text-text-soft text-lg max-w-2xl mx-auto mb-12">
            A humanized and personalized approach for each moment of your journey
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
               key={index}
              className={`border border-lavender-light bg-card p-8 rounded-lg shadow-soft hover:shadow-card 
              text-center transform-gpu will-change-transform will-change-opacity [backface-visibility:hidden]
              transition-opacity transition-transform duration-500 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              hover:-translate-y-1 hover:scale-105`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="w-16 h-16 bg-lavender-muted rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-lavender-light transition-colors duration-300">
                <service.icon className="w-8 h-8 text-lavender" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-calm mb-4">
                {service.title}
              </h3>
              <p className="text-text-soft leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;