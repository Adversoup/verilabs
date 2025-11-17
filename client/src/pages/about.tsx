import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Target, Eye, Zap } from "lucide-react";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <>
      <SEO 
        title="Hakkımızda"
        description="Verilabs, AI tabanlı projeleri sadece geliştirmekle kalmaz; onları ölçeklenebilir, yatırım çekebilen, bağımsız yapılara dönüştürür."
        path="/hakkimizda"
      />
      <div className="py-16 space-y-12">
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight" data-testid="text-page-title">
          Hakkımızda
        </h1>
        <p className="text-lg text-white/80 leading-relaxed" data-testid="text-about-intro">
          Verilabs, AI tabanlı projeleri sadece geliştirmekle kalmaz; onları ölçeklenebilir, yatırım çekebilen, bağımsız yapılara dönüştürür.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 pt-8">
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden hover-elevate">
          <CardHeader className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white" data-testid="text-mission-title">
              Misyon
            </h3>
          </CardHeader>
          <CardContent className="text-white/80 leading-relaxed">
            <p data-testid="text-mission-description">
              Akıllı sistemlerle, gerçek dünya problemlerine kalıcı teknoloji çözümleri üretmek.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden hover-elevate">
          <CardHeader className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Eye className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white" data-testid="text-vision-title">
              Vizyon
            </h3>
          </CardHeader>
          <CardContent className="text-white/80 leading-relaxed">
            <p data-testid="text-vision-description">
              AI ekosisteminde Türkiye çıkışlı global bir teknoloji üreticisi olmak.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden hover-elevate">
          <CardHeader className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white" data-testid="text-approach-title">
              Yaklaşım
            </h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span data-testid="text-approach-1">AI & Data temelli inovasyon</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span data-testid="text-approach-2">Hızlı prototipleme ve doğrulama</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span data-testid="text-approach-3">Stratejik exit ve ölçekleme</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      </div>
    </>
  );
}
