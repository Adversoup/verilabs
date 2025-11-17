import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const navigation = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/model", label: "Venture Studio" },
  { href: "/projeler", label: "Projeler" },
  { href: "/ekibimiz", label: "Ekibimiz" },
  { href: "/iletisim", label: "İletişim" }
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F1A]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" data-testid="link-home">
            <span className="text-2xl font-semibold text-white tracking-tight cursor-pointer">
              Verilabs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`link-nav-${item.href.slice(1) || 'home'}`}>
                <span
                  className={`text-sm transition-colors cursor-pointer ${
                    location === item.href
                      ? "text-white font-medium"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/iletisim">
              <Button 
                variant="default" 
                size="sm"
                className="bg-primary hover:bg-primary/90 cursor-pointer"
                data-testid="button-contact-cta"
              >
                İletişime Geç
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover-elevate active-elevate-2 rounded-md"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-1 border-t border-white/10">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm transition-colors cursor-pointer ${
                    location === item.href
                      ? "text-white bg-white/10 font-medium"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                  data-testid={`link-mobile-${item.href.slice(1) || 'home'}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/iletisim">
              <Button 
                onClick={() => setMobileMenuOpen(false)}
                variant="default" 
                className="w-full bg-primary mt-3 cursor-pointer"
                data-testid="button-mobile-contact"
              >
                İletişime Geç
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
