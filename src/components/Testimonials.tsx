
export default function Testimonials() {
  const testimonials = [
    {
      quote: "SoftSell helped us recover over $50,000 from unused enterprise licenses. The process was seamless and their valuation was significantly higher than competitors.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Solutions",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
    {
      quote: "After downsizing our team, we had dozens of premium software licenses sitting idle. SoftSell found buyers within days and handled all the transfer logistics perfectly.",
      author: "Michael Chen",
      role: "IT Director",
      company: "Innovate Corp",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
  ];

  return (
    <section id="testimonials" className="bg-background">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how SoftSell has helped businesses like yours maximize their software investments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-lg shadow-sm p-6 relative fade-in-section" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="absolute top-6 left-6 text-4xl text-softsell-teal/20">"</div>
              <blockquote className="relative z-10">
                <p className="text-lg italic mb-6">{testimonial.quote}</p>
                <footer className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4 border-2 border-softsell-teal/30"
                  />
                  <div>
                    <cite className="font-medium not-italic">{testimonial.author}</cite>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-medium">Trusted by hundreds of companies worldwide</p>
          <div className="mt-6 flex flex-wrap justify-center gap-8 opacity-70">
            <div className="h-8 flex items-center">
              <span className="text-xl font-bold text-gray-400">ACME Inc.</span>
            </div>
            <div className="h-8 flex items-center">
              <span className="text-xl font-bold text-gray-400">TechCorp</span>
            </div>
            <div className="h-8 flex items-center">
              <span className="text-xl font-bold text-gray-400">Global Systems</span>
            </div>
            <div className="h-8 flex items-center">
              <span className="text-xl font-bold text-gray-400">NextGen</span>
            </div>
            <div className="h-8 flex items-center">
              <span className="text-xl font-bold text-gray-400">FutureSoft</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
