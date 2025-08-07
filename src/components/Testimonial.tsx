import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonial = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-10 sm:py-20 px-4 bg-gradient-section" ref={ref}>
      <div className="container mx-auto max-w-4xl text-center">
        <div className={`bg-card p-8 md:p-12 rounded-lg shadow-card hover:shadow-lg transition-all duration-500 hover:scale-105 ${
          isVisible ? 'animate-scale-in' : 'opacity-0'
        }`}>
          <Quote className="w-12 h-12 text-lavender mx-auto mb-6 animate-pulse" />
          <blockquote className="text-xl md:text-2xl text-text-calm font-light leading-relaxed mb-6">
            "Psychologist Evelyn Bloom is incredibly warm and professional.  
              Her work helped me understand important aspects of my life  
              that I couldn't see on my own. I wholeheartedly recommend her."
          </blockquote>
          <footer className="text-text-soft font-medium">
            — Ana Silva
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;