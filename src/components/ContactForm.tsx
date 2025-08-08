import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-10 sm:py-20 px-4 bg-background" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-text-soft text-lg max-w-2xl mx-auto">
            I'm here to listen and support you. Reach out to schedule your session.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div >
            <h3 className="font-heading text-2xl font-semibold text-text-calm mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-lavender-muted rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-lavender" />
                </div>
                <div>
                  <p className="font-medium text-text-calm">Email</p>
                  <p className="text-text-soft">contact.bloom.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-lavender-muted rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-lavender" />
                </div>
                <div>
                  <p className="font-medium text-text-calm">Phone</p>
                  <p className="text-text-soft">999-999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-lavender-muted rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-lavender" />
                </div>
                <div>
                  <p className="font-medium text-text-calm">Location</p>
                  <p className="text-text-soft">Austin, TX</p>
                  <p className="text-text-soft text-sm">In-person and online appointments available</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-text-calm font-medium">
                  Full name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 border-border focus:ring-lavender focus:border-lavender"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-text-calm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 border-border focus:ring-lavender focus:border-lavender"
                  placeholder="your.email@exemple.com"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-text-calm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2 border-border focus:ring-lavender focus:border-lavender"
                  placeholder="Tell me a bit about what you'd like to talk about..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-lavender hover:bg-lavender/90 text-primary-foreground py-3 text-lg font-medium shadow-soft transition-all duration-300 hover:shadow-card"
              >
                Submit Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;