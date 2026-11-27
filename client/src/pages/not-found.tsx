import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function NotFound() {
  const { lang } = useLanguage();

  return (
    <section className="py-32 grid-bg border-b hairline">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
        <div className="font-mono-tech text-xs uppercase tracking-widest text-[#1A4BFF]">
          404
        </div>
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#0E1014]">
          {lang === "tr" ? "Sayfa bulunamadı." : "Page not found."}
        </h1>
        <p className="text-[#525660]">
          {lang === "tr"
            ? "Aradığınız sayfa taşınmış veya mevcut olmayabilir."
            : "The page you are looking for may have moved or does not exist."}
        </p>
        <div className="pt-2">
          <Link href="/">
            <span className="inline-flex items-center gap-2 bg-[#0E1014] hover:bg-[#1A4BFF] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors cursor-pointer">
              <ArrowLeft size={16} />
              {lang === "tr" ? "Ana sayfaya dön" : "Back to home"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
