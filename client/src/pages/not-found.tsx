import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO 
        title="Sayfa Bulunamadı"
        description="Aradığınız sayfa mevcut değil veya taşınmış olabilir."
        path="/404"
      />
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold text-white" data-testid="text-error-code">404</h1>
          <h2 className="text-2xl font-semibold text-white" data-testid="text-error-title">Sayfa Bulunamadı</h2>
          <p className="text-white/70 max-w-md" data-testid="text-error-message">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <Link href="/">
            <Button size="lg" className="mt-4 gap-2" data-testid="button-home">
              <Home size={20} />
              Ana Sayfaya Dön
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
