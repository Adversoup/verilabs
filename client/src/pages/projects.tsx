import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";

export default function Projects() {
  return (
    <>
      <SEO 
        title="Projeler"
        description="Verilabs'in AI destekli projeleri: Galgo finansal içgörü platformu ve ProtoNest üretim optimizasyonu. Fikirden ürüne, üründen şirkete."
        path="/projeler"
      />
      <div className="py-16 space-y-16">
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight" data-testid="text-page-title">
          Projelerimiz
        </h1>
      </div>

      {/* Galgo */}
      <div id="galgo" className="scroll-mt-24">
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
          <CardHeader className="space-y-4 pb-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <h2 className="text-3xl font-semibold text-white" data-testid="text-galgo-title">
                  Galgo
                </h2>
                <p className="text-white/60" data-testid="text-galgo-subtitle">
                  AI Destekli Finansal İçgörü Platformu
                </p>
              </div>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30" data-testid="badge-galgo-status">
                Beta
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed" data-testid="text-galgo-description">
              Yatırımcıların dağınık veri kaynaklarıyla boğuşmadan, yapay zekâ ile kişiselleştirilmiş finansal stratejiler geliştirmesini sağlar.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <div className="text-sm font-medium text-white/60">Durum</div>
                <div className="text-white" data-testid="text-galgo-stage">Beta test aşamasında</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-white/60">Hedef</div>
                <div className="text-white" data-testid="text-galgo-target">Bireysel yatırımcılar</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="ghost" 
              className="gap-2 text-white/80 hover:text-white"
              data-testid="button-galgo-early-access"
            >
              Erken Erişim Talebi Gönder
              <ArrowUpRight size={16} />
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* ProtoNest */}
      <div id="protonest" className="scroll-mt-24">
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
          <CardHeader className="space-y-4 pb-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <h2 className="text-3xl font-semibold text-white" data-testid="text-protonest-title">
                  ProtoNest
                </h2>
                <p className="text-white/60" data-testid="text-protonest-subtitle">
                  AI Destekli Üretim Optimizasyonu
                </p>
              </div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30" data-testid="badge-protonest-status">
                MVP Tamamlandı
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed" data-testid="text-protonest-description">
              KOBİ'lerin malzeme kullanımında israfı azaltarak üretim verimliliğini artırmalarını sağlar.
            </p>
            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <Card className="bg-white/5 border-white/10 p-4 space-y-2">
                <div className="text-sm font-medium text-white" data-testid="text-protonest-tech-title">
                  Teknoloji
                </div>
                <p className="text-sm text-white/70" data-testid="text-protonest-tech-description">
                  2D-3D çizim analizi, CAD tabanlı otomatik nesting, maliyet sim.
                </p>
              </Card>
              <Card className="bg-white/5 border-white/10 p-4 space-y-2">
                <div className="text-sm font-medium text-white" data-testid="text-protonest-value-title">
                  Değer Önerisi
                </div>
                <p className="text-sm text-white/70" data-testid="text-protonest-value-description">
                  %15–20 malzeme tasarrufu
                </p>
              </Card>
              <Card className="bg-white/5 border-white/10 p-4 space-y-2">
                <div className="text-sm font-medium text-white" data-testid="text-protonest-stage-title">
                  Durum
                </div>
                <p className="text-sm text-white/70" data-testid="text-protonest-stage-description">
                  MVP tamamlandı, yatırım öncesi faz
                </p>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </>
  );
}
