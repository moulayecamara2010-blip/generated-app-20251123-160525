import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';
const Logo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 150 25"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Inclusion & Impact Logo"
  >
    <style>
      {`
        .logo-text-1 { fill: #F4EFE8; font-family: Montserrat, sans-serif; font-size: 15px; font-weight: 700; }
        .logo-text-2 { fill: #E07856; font-family: Montserrat, sans-serif; font-size: 15px; font-weight: 700; }
        .logo-text-3 { fill: #F4EFE8; font-family: Montserrat, sans-serif; font-size: 15px; font-weight: 700; }
      `}
    </style>
    <text x="0" y="18" className="logo-text-1">Inclusion</text>
    <text x="80" y="18" className="logo-text-2">&</text>
    <text x="95" y="18" className="logo-text-3">Impact</text>
  </svg>
);
export function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const emailInput = form.elements.namedItem('email-address') as HTMLInputElement;
    if (emailInput.value) {
      toast.success("Thank you for subscribing!");
      form.reset();
    } else {
      toast.error("Please enter a valid email address.");
    }
  };
  return (
    <footer className="bg-deep-blue text-soft-sand">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center">
              <Logo className="w-auto h-10" />
            </Link>
            <p className="text-gray-300 text-base">
              Turning mobile phones into lifelines for 200 million uninsured Africans.
            </p>
            <div className="flex space-x-6">
              <a href={SOCIAL_LINKS.linkedin} className="text-gray-300 hover:text-warm-coral transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={SOCIAL_LINKS.twitter} className="text-gray-300 hover:text-warm-coral transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href={SOCIAL_LINKS.facebook} className="text-gray-300 hover:text-warm-coral transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">About</h3>
                <ul className="mt-4 space-y-4">
                  {NAV_LINKS.slice(1, 5).map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Engage</h3>
                <ul className="mt-4 space-y-4">
                  {NAV_LINKS.slice(5).map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-4 text-base text-gray-300">
                  The latest news, articles, and resources, sent to your inbox weekly.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md" onSubmit={handleSubscribe}>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <Input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="w-full text-charcoal"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <Button type="submit" className="w-full bg-warm-coral hover:bg-opacity-80 text-white">
                      Subscribe
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Inclusion & Impact. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}