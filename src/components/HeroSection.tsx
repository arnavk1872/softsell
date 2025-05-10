
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-softsell-gray">
      <div className="section-padding flex flex-col md:flex-row items-center">
        <div className="flex-1 space-y-6 pb-10 md:pb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Turn Unused Software Licenses Into Immediate Revenue
          </h1>
          <p className="text-xl text-muted-foreground">
            SoftSell helps businesses maximize ROI by selling unused software licenses quickly and at the best market value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-softsell-teal hover:bg-softsell-teal/90 text-white h-12 px-8 text-lg">
              Sell My Licenses
            </Button>
            <Button variant="outline" className="h-12 px-8 text-lg">
              Get a Valuation
            </Button>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-softsell-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No upfront fees</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-softsell-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Get paid within 48 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-softsell-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>100% secure transactions</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-softsell-teal/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-6 w-72 h-72 bg-softsell-blue/10 rounded-full filter blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
              alt="Software dashboard showing license management" 
              className="relative z-10 w-full h-auto rounded-xl shadow-2xl border border-white/10 object-cover"
            />
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-softsell-blue to-softsell-teal opacity-30 blur-2xl rounded-xl transform scale-105"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
