import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import VeriLabsLogo from "@/components/VeriLabsLogo";
import { useLanguage } from "@/lib/i18n";

export default function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "/projeler", label: t.nav.projects },
    { href: "/model", label: t.nav.model },
    { href: "/hakkimizda", label: t.nav.about },
    { href: "/ekibimiz", label: t.nav.team },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F6F5F1]/90 backdrop-blur-md border-b hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
        <Link href="/" onClick={() => setMobileOpen(false)} aria-label="VeriLabs">
          <VeriLabsLogo variant="dark" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((item) => {
            const active = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  active
                    ? "text-[#0E1014] font-medium"
                    : "text-[#525660] hover:text-[#0E1014]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="inline-flex items-center border hairline rounded-full p-0.5 bg-white text-xs font-mono-tech"
            role="group"
            aria-label="Language switch"
          >
            <button
              type="button"
              onClick={() => setLang("tr")}
              className={`px-2.5 py-1 rounded-full transition-colors ${
                lang === "tr"
                  ? "bg-[#0E1014] text-white font-medium"
                  : "text-[#525660] hover:text-[#0E1014]"
              }`}
              data-testid="button-lang-tr"
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full transition-colors ${
                lang === "en"
                  ? "bg-[#0E1014] text-white font-medium"
                  : "text-[#525660] hover:text-[#0E1014]"
              }`}
              data-testid="button-lang-en"
            >
              EN
            </button>
          </div>

          <Link href="/iletisim" className="hidden sm:inline-block">
            <span className="inline-flex items-center gap-2 bg-[#0E1014] hover:bg-[#1A4BFF] text-white text-xs font-medium px-4 py-2.5 rounded-full transition-colors">
              {t.nav.contact}
              <ArrowRight size={14} />
            </span>
          </Link>

          <button
            type="button"
            className="md:hidden p-2 text-[#0E1014]"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t hairline bg-[#F6F5F1] px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm py-1 ${
                  location === item.href
                    ? "text-[#0E1014] font-medium"
                    : "text-[#525660]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/iletisim" onClick={() => setMobileOpen(false)} className="block pt-2">
            <span className="w-full inline-flex items-center justify-center gap-2 bg-[#0E1014] text-white text-xs font-medium px-4 py-3 rounded-full">
              {t.nav.contact}
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
