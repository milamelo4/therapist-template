import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Journey from "@/components/Journey";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <About />
      <Journey />
      <Services />
      <Testimonial />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;