
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-softsell-blue to-softsell-teal p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white">
                  <path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9z"></path>
                  <path d="M2 13h20"></path>
                  <path d="m9 13 1.5-5"></path>
                  <path d="M13.9 13h.2"></path>
                  <path d="M18.4 13h.2"></path>
                </svg>
              </div>
              <span className="text-xl font-bold">SoftSell</span>
            </a>
            <p className="mt-4 text-muted-foreground">
              SoftSell revolutionizes the way businesses monetize their unused software licenses, providing the fastest path from idle assets to immediate revenue.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Enterprise Licenses</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">SaaS Subscriptions</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Volume Licensing</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">License Compliance</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">About</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Careers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} SoftSell. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
