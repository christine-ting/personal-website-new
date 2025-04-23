import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form data to a backend
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-br from-yellow-50/50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(94,129,172,0.15),transparent)] -z-10" />
      <div className="absolute inset-0 bg-[length:50px_50px] bg-grid-yellow-900/[0.02] -z-10" />
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-4">Get In Touch</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>
          <p className="text-yellow-700">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-up">
            <h3 className="text-2xl font-bold text-yellow-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-primary/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-900">Email</h4>
                  <a href="mailto:contact@johnsmith.com" className="text-yellow-700 hover:text-primary transition-colors">
                    contact@johnsmith.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-primary/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-900">Location</h4>
                  <p className="text-yellow-700">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-primary/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-900">Phone</h4>
                  <a href="tel:+11234567890" className="text-yellow-700 hover:text-primary transition-colors">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {[
                  { name: "GitHub", icon: "M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7C4.73 17.91 4.14 16 4.14 16c-.45-1.14-1.1-1.45-1.1-1.45-.9-.61.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.9 1.53 2.34 1.09 2.91.83.1-.65.35-1.09.63-1.34-2.2-.25-4.51-1.1-4.51-4.9 0-1.08.39-1.97 1.02-2.66-.1-.25-.44-1.26.1-2.64 0 0 .83-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.54 1.38.2 2.39.1 2.64.63.7 1.02 1.58 1.02 2.66 0 3.81-2.32 4.64-4.53 4.89.36.31.68.91.68 1.83v2.71c0 .26.18.58.69.48A10 10 0 0 0 10 0" },
                  { name: "LinkedIn", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                  { name: "Twitter", icon: "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" },
                ].map((social) => (
                  <a 
                    key={social.name}
                    href="#" 
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-yellow-100"
                    aria-label={social.name}
                  >
                    <svg 
                      viewBox="0 0 20 20" 
                      fill="currentColor" 
                      className="w-5 h-5 text-yellow-800"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fade-up delay-200">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-900 mb-6">Send Me a Message</h3>
              
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-yellow-700 mb-1">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="border-yellow-200 focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-yellow-700 mb-1">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      className="border-yellow-200 focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-yellow-700 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Subject" 
                    className="border-yellow-200 focus:border-primary focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-yellow-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    className="border-yellow-200 focus:border-primary focus:ring-1 focus:ring-primary min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="btn-primary w-full">
                  Send Message
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
