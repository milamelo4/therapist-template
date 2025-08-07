// import marianaImage from "@/assets/image.png"
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" className="py-10 sm:py-20 px-4 bg-gradient-section min-h-screen" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div className={`order-2 md:order-1 transition-all duration-700 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
              Evelyn Bloom, LPC
            </h2>
            <div className="space-y-4 text-text-soft leading-relaxed">
              <p>
                I'm a psychologist and psychoanalyst with over 15 years of experience. I earned my degree from the Federal University of Minas Gerais (UFMG) and hold a master's degree from Universidad Kennedy in Argentina.
              </p>
              <p>
                My approach combines sensitive listening with technical rigor, creating a warm and safe space for self-discovery and transformation. I work with children, adolescents, and adults — focusing on each person's unique story.
             </p>
             <p>I believe that therapy is not one-size-fits-all. Each individual brings a unique set of experiences, strengths, and challenges. My goal is to walk alongside you with empathy and honesty, creating a space where you feel truly seen and supported.</p>
              
              <p>Whether you're seeking to understand yourself better, navigate life's challenges, or simply need someone to listen, I'm here to help. Let's embark on this journey of self-discovery together.</p>

            </div>
          </div>
          <div className={`order-1 md:order-2 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
          <div className="relative inline-block">
            <img 
              src={`${import.meta.env.BASE_URL}/assets/profile.png`}
              alt="Smiling young woman looking at the camera"
              className="w-full h-auto md:w-80 md:h-80 rounded-full object-cover mx-auto shadow-card transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-10 pointer-events-none"></div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-soft mt-6 border border-lavender-light">
            <p className="text-text-calm font-medium">
              “Healing begins the moment someone feels truly heard.”<br></br>— Dr Elena Reyes
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;