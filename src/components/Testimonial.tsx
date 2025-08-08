import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonial = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-10 sm:py-20 px-4 bg-gradient-section min-h-[100svh] md:min-h-screen">
      <div className="container mx-auto max-w-4xl text-center">
        <div className={`bg-card p-8 md:p-12 rounded-lg shadow-card hover:shadow-lg transition-opacity transition-transform duration-700 ease-out 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          ref={ref}
        >
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