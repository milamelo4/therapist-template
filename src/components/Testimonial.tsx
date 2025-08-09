import { Quote, User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonial = () => {
  const { ref, isVisible } = useScrollAnimation();
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials"
    ref={ref}
     className={`py-16 sm:py-24 px-4 bg-gradient-section-dark transition-opacity transition-transform duration-700 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto max-w-4xl text-center">
        {/* Section label + heading */}
        <p className="text-sm tracking-wide text-primary mb-2">What clients say</p>
        <h2 className="text-3xl md:text-4xl font-heading text-primary font-bold mb-3">Real experiences</h2>
        <p className="text-text-soft mb-10">Warm, professional support that makes a difference.</p>

        {/* Card */}
        <div
          
          className={`bg-card p-8 md:p-12 rounded-2xl shadow-card border border-lavender-light
         `}
        >
          <Quote className="w-10 h-10 text-lavender mx-auto mb-6 opacity-80" />
          <blockquote className="text-xl md:text-2xl text-text-calm font-light leading-relaxed mb-6">
            “Psychologist Evelyn Bloom is incredibly warm and professional. Her work helped me understand
            important aspects of my life that I couldn't see on my own. I wholeheartedly recommend her.”
          </blockquote>

          {/* Avatar / name / meta */}
          <figcaption className="flex flex-col sm:flex-row items-center justify-center gap-3 text-text-soft">
            <User className="w-10 h-10 text-lavender rounded-full bg-lavender-muted p-1" />
            <span className="font-medium">Ana Silva</span>
            <span aria-hidden="true">•</span>
            <span className="text-sm">Remote client</span>
          </figcaption>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button 
          onClick={scrollToContact} className="inline-block rounded-xl px-6 py-3 border border-primary text-primary
            hover:bg-primary hover:text-white transition-colors">
            Book a session
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
