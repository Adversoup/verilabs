import { Link } from "wouter";
import VeriLabsLogo from "@/components/VeriLabsLogo";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0E1014] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 space-y-12">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <Link href="/">
              <VeriLabsLogo variant="light" />
            </Link>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              {t.siteDesc}
            </p>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="font-mono-tech text-[11px] uppercase tracking-widest text-white/40">
              {t.footer.pages}
            </div>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/projeler" className="hover:text-white transition-colors">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link href="/model" className="hover:text-white transition-colors">
                  {t.nav.model}
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/ekibimiz" className="hover:text-white transition-colors">
                  {t.nav.team}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="font-mono-tech text-[11px] uppercase tracking-widest text-white/40">
              {t.footer.ventures}
            </div>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/projeler#galgo" className="hover:text-white transition-colors">
                  Galgo
                </Link>
              </li>
              <li>
                <Link href="/projeler#protonest" className="hover:text-white transition-colors">
                  ProtoNest
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="font-mono-tech text-[11px] uppercase tracking-widest text-white/40">
              {t.footer.connect}
            </div>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <a
                  href="mailto:info@verilabs.ai"
                  className="hover:text-white transition-colors"
                >
                  info@verilabs.ai
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/verilabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/verilabs_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/45">
          <span>VeriLabs · {t.footer.desc}</span>
          <span className="font-mono-tech">© {new Date().getFullYear()} VeriLabs · verilabs.ai</span>
        </div>
      </div>
    </footer>
  );
}
