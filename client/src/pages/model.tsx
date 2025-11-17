import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Lightbulb, Beaker, TrendingUp, Rocket } from "lucide-react";
import SEO from "@/components/SEO";

const phases = [
  {
    number: 1,
    title: "Ideation",
    description: "Gerçek bir problemi AI perspektifinden yeniden tanımlarız.",
    icon: Lightbulb
  },
  {
    number: 2,
    title: "MVP & Validation",
    description: "Prototip oluşturur, hızlı pazar doğrulaması yaparız.",
    icon: Beaker
  },
  {
    number: 3,
    title: "Scaling",
    description: "Teknik ekip ve pazar büyütme aşamasını birlikte yürütürüz.",
    icon: TrendingUp
  },
  {
    number: 4,
    title: "Spin-off / Exit",
    description: "Olgunlaşan projeleri bağımsız marka haline getirir ya da yatırım alacak seviyeye taşırız.",
    icon: Rocket
  }
];

export default function Model() {
  return (
    <>
      <SEO 
        title="Venture Studio Modeli"
        description="Verilabs klasik bir ajans ya da yazılım evi değildir. Biz, yapay zekâ ve veri tabanlı projeleri sıfırdan inşa eden bir venture studio'yuz."
        path="/model"
      />
      <div className="py-16 space-y-12">
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight" data-testid="text-page-title">
          Venture Studio Modelimiz
        </h1>
        <p className="text-lg text-white/80 leading-relaxed" data-testid="text-model-intro">
          Verilabs klasik bir ajans ya da yazılım evi değildir. Biz, yapay zekâ ve veri tabanlı projeleri sıfırdan inşa eden bir venture studio'yuz.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 pt-8">
        {phases.map((phase) => {
          const Icon = phase.icon;
          return (
            <Card 
              key={phase.number} 
              className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden hover-elevate"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white/60 mb-1" data-testid={`text-phase-${phase.number}-number`}>
                      Aşama {phase.number}
                    </div>
                    <h3 className="text-xl font-semibold text-white" data-testid={`text-phase-${phase.number}-title`}>
                      {phase.title}
                    </h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-white/80 leading-relaxed">
                <p data-testid={`text-phase-${phase.number}-description`}>
                  {phase.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      </div>
    </>
  );
}
