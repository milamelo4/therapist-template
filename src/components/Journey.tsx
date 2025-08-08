import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Journey = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="journey" className="py-10 sm:py-20 px-6 bg-background "
      >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: TEXT */}
        <div ref={ref}
          className={`text-center mb-12 transition-opacity transition-transform duration-700 ease-out 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">My Journey</h2>

          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed text-left">
            <p>
              My professional journey began at the Federal University of Minas Gerais (UFMG), where I received a high-quality education with a strong balance of theory and practice. This foundation allowed me to freely explore and develop my own style as a psychoanalyst.
            </p>
            <p>
              What shaped me most was my natural curiosity about people's stories, my desire to understand them, and my sensitivity when listening. These personal qualities continue to guide my work today.
            </p>
            <p>
              After completing my Psychology degree, I pursued a Master's at Universidad Kennedy in Buenos Aires, Argentina — a city known as a hub for psychoanalytic studies in Latin America. This immersive experience deeply impacted my career and transformed my clinical practice. Since then, this theoretical and clinical lens has been the foundation of my work.
            </p>
            <p>
              Today, I dedicate myself to clinical care for children, adolescents, and adults, offering a space where each story is heard with care and respect.
            </p>
            <p className="italic font-medium text-primary">
              “Listening is an act of love and transformation.” — Evelyn Bloom
            </p>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}assets/school.jpg`}
            alt="Image by Alison Updyke from pixabay"
            className="w-full max-w-lg h-[450px] rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Journey;
