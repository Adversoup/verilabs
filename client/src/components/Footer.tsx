import { Link } from "wouter";
import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-base">Verilabs</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Yapay zekâ ile işleyen ürünler geliştirir, büyütür ve ölçeklenebilir teknoloji şirketlerine dönüştürür.
            </p>
          </div>

          {/* Pages Column */}
          <div className="space-y-3">
            <h4 className="text-white font-medium text-sm">Sayfalar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hakkimizda">
                  <span className="text-white/70 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-about">
                    Hakkımızda
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/model">
                  <span className="text-white/70 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-model">
                    Venture Studio Modeli
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/projeler">
                  <span className="text-white/70 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-projects">
                    Projeler
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/ekibimiz">
                  <span className="text-white/70 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-team">
                    Ekibimiz
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-3">
            <h4 className="text-white font-medium text-sm">Kaynaklar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/basin">
                  <span className="text-white/70 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-press">
                    Basın & Güncellemeler
                  </span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/verilabs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2"
                  data-testid="link-footer-linkedin"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/verilabs_ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2"
                  data-testid="link-footer-twitter"
                >
                  <Twitter size={16} />
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h4 className="text-white font-medium text-sm">İletişim</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li data-testid="text-footer-email">info@verilabs.ai</li>
              <li data-testid="text-footer-location">İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-xs text-white/60" data-testid="text-copyright">
            © {new Date().getFullYear()} Verilabs. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
