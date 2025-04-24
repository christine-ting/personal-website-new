import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`${apiBaseUrl}/inquiry`, {
        ...formData,
        apiKey: apiKey,
        fromPersonal: true,
      });
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will reply to you soon!",
        variant: "default",
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-2 relative bg-gradient-to-br from-white to-[#D4DBDD]/60 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(94,129,172,0.15),transparent)] -z-10" />
      <div className="absolute inset-0 bg-[length:50px_50px] bg-grid-yellow-900/[0.02] -z-10" />
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h3 className="font-bold text-xl md:text-2xl text-blue-500 mb-2 md:mb-5 flex items-center justify-center gap-2">
          Get In Touch
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
            </svg>
          </h3>
          <p className="text-blue-300">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12">
          <div className="animate-fade-up max-w-2xl mx-auto w-full">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl">              
              <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-500 mb-1">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="border-gray-200 bg-white shadow-sm focus:border-blue-500 focus:ring-0 transition-colors"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-500 mb-1">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      className="border-gray-200 bg-white shadow-sm focus:border-blue-500 focus:ring-0 transition-colors"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-500 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    className="border-gray-200 bg-white shadow-sm focus:border-blue-500 focus:ring-0 transition-colors min-h-[150px]"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-white font-medium py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
