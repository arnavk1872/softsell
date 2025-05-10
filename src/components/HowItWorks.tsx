
import { DollarSign, Search, Upload } from "lucide-react";

const steps = [
  {
    title: "Upload License",
    description: "Securely upload your software license details through our encrypted portal.",
    icon: <Upload className="h-8 w-8" />,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Get Valuation",
    description: "Our AI-powered system analyzes market data to determine the best resale value.",
    icon: <Search className="h-8 w-8" />,
    gradient: "from-teal-500 to-teal-700",
  },
  {
    title: "Get Paid",
    description: "Receive payment via your preferred method within 48 hours of approval.",
    icon: <DollarSign className="h-8 w-8" />,
    gradient: "from-purple-500 to-purple-700",
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes selling your unused software licenses quick and hassle-free.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {steps.map((step, index) => (
            <div key={index} className="group relative flex-1 fade-in-section" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="relative bg-card rounded-lg p-8 border border-border shadow-sm transition-all duration-300 hover:shadow-md">
                <div className={`absolute inset-x-0 -bottom-px h-px bg-gradient-to-r ${step.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                <div className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-br ${step.gradient} p-3 text-white mb-4`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-muted-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
