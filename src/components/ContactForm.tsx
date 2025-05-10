
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone } from "lucide-react";
import { useToast } from "./ui/use-toast";

type FormData = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

export default function ContactForm() {
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = "Please select a license type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, licenseType: value });
    if (errors.licenseType) {
      setErrors({ ...errors, licenseType: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would normally send the form data to your backend
      console.log("Form submitted:", formData);
      toast({
        title: "Success!",
        description: "Your inquiry has been submitted. We'll get back to you shortly.",
      });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
    }
  };

  return (
    <section id="contact" className="bg-muted/50">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="fade-in-section">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Want to learn more about our services or get a free valuation? Fill out the form and our team will contact you shortly.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-softsell-teal/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-softsell-teal" />
                </div>
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-muted-foreground">contact@softsell.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-softsell-teal/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-softsell-teal" />
                </div>
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="font-medium mb-2">Business Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM ET</p>
                <p className="text-muted-foreground">Saturday & Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card shadow-sm rounded-lg p-6 border border-border fade-in-section" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  Company <span className="text-red-500">*</span>
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={errors.company ? "border-red-500" : ""}
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
              </div>
              
              <div>
                <label htmlFor="licenseType" className="block text-sm font-medium mb-1">
                  License Type <span className="text-red-500">*</span>
                </label>
                <Select value={formData.licenseType} onValueChange={handleSelectChange}>
                  <SelectTrigger className={errors.licenseType ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select license type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enterprise">Enterprise Software</SelectItem>
                    <SelectItem value="saas">SaaS Subscription</SelectItem>
                    <SelectItem value="desktop">Desktop Application</SelectItem>
                    <SelectItem value="server">Server License</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about the licenses you want to sell..."
                />
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-softsell-teal hover:bg-softsell-teal/90"
                >
                  Submit Inquiry
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting this form, you agree to our <a href="#" className="text-softsell-teal hover:underline">Privacy Policy</a> and <a href="#" className="text-softsell-teal hover:underline">Terms of Service</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
