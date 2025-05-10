
import { Check, MessageSquare, Shield, Users } from "lucide-react";

const features = [
  {
    title: "Best Market Value",
    description: "Our algorithm ensures you get the highest possible price for your licenses.",
    icon: <DollarSign className="h-6 w-6" />,
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Secure Transactions",
    description: "Bank-level security protocols protect your data and financial transactions.",
    icon: <Shield className="h-6 w-6" />,
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Vast Buyer Network",
    description: "Access to thousands of verified buyers looking for software licenses.",
    icon: <Users className="h-6 w-6" />,
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Expert Support",
    description: "Dedicated account managers to guide you through the entire process.",
    icon: <MessageSquare className="h-6 w-6" />,
    iconBg: "bg-amber-100 dark:bg-amber-900/30",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
];

import { DollarSign } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-muted/50">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            SoftSell offers unique advantages that make us the preferred choice for software license reselling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow fade-in-section" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex items-start">
                <div className={`mr-4 p-2 rounded-lg ${feature.iconBg}`}>
                  <div className={feature.iconColor}>{feature.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-softsell-blue to-softsell-teal p-8 rounded-lg text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Ready to maximize your software ROI?</h3>
              <p className="opacity-90">Join thousands of businesses that have already benefited from our service.</p>
            </div>
            <button className="bg-white text-softsell-blue hover:bg-softsell-gray/90 rounded-lg px-6 py-3 font-semibold transition-colors whitespace-nowrap">
              Start Selling Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
