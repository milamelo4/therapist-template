import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Journey = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="journey" className="py-10 sm:py-20 px-4 bg-background min-h-[100svh] md:min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: TEXT */}
        <div ref={ref}
          className={`container mx-auto max-w-6xl text-left mb-8sm:mb-12 sm:mb-0 transform-gpu will-change-transform will-change-opacity
          transition-opacity transition-transform duration-700 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">My Journey</h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed text-left">
            <p>
              My professional path began at the University of Washington, where I gained a strong academic foundation paired with hands-on clinical experience. This combination helped me develop a thoughtful, client-centered approach that blends structure with flexibility.
            </p>

            <p>
              What shaped me most was my natural curiosity about people's stories, my desire to understand them, and my sensitivity when listening. These personal qualities continue to guide my work today.
            </p>

            <p>
            After earning my degree in Psychology, I continued my education with a master’s program at New York University, where I focused on advanced psychotherapy methods. This immersive training shaped my perspective and became the cornerstone of my clinical approach, influencing how I work with clients today.
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
        <div className="flex justify-center container mx-auto max-w-6xl">
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
