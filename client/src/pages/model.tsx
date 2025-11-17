import { Card } from "@/components/ui/card";
import { Lightbulb, Beaker, TrendingUp, Rocket, Building2, Sparkles, Target, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";

const phases = [
  {
    number: 1,
    title: "Keşif ve Problem Tanımı",
    description: "Önce problemi tarif ederiz, çözümü değil. Hangi sektörde, hangi aktörler arasında, hangi maliyet ya da verimsizlikten bahsettiğimizi net biçimde ortaya koyarız.",
    icon: Lightbulb
  },
  {
    number: 2,
    title: "Hipotez ve Fikir Geliştirme",
    description: "Yapay zekânın bu problemde gerçekten fark yaratacağı alanları belirleriz. Modelleme türünü, veri kaynaklarını ve olası çıktı biçimlerini tartışırız.",
    icon: Sparkles
  },
  {
    number: 3,
    title: "MVP ve Prototipleme",
    description: "Gereksiz özelliklerle vakit kaybetmek yerine, problemin kalbini test eden bir MVP geliştiririz. Kullanıcı geri bildirimi ve veri toplama en baştan tasarının parçasıdır.",
    icon: Beaker
  },
  {
    number: 4,
    title: "Pazar Testi ve Validasyon",
    description: "Ürünün gerçekten değer üretip üretmediğini, kullanıcıların ödeme isteğini, entegrasyon bariyerlerini ve büyüme potansiyelini test ederiz.",
    icon: TrendingUp
  },
  {
    number: 5,
    title: "Spin-off ve Ölçeklendirme",
    description: "Başarılı ürünleri ayrı bir marka ve şirket kimliği altında spin-off ederek yatırım ve büyüme için hazır hale getiririz.",
    icon: Rocket
  }
];

export default function Model() {
  return (
    <>
      <SEO 
        title="Venture Studio"
        description="Venture studio modeli, fikirleri yalnızca kuluçkaya alan değil, onları sistematik olarak büyüten ve şirketleştiren bir yapıyı ifade eder."
        path="/model"
      />
      <div className="py-16 space-y-16">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight" data-testid="text-page-title">
            Venture Studio
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Venture studio modeli, fikirleri yalnızca kuluçkaya alan değil, onları sistematik olarak büyüten ve şirketleştiren bir yapıyı ifade eder. Verilabs, klasik ajans mantığından farklı olarak, her projeyi kendi markasına, kendi yol haritasına ve kendi yatırım hikâyesine sahip bağımsız bir girişim adayı olarak ele alır.
          </p>
        </div>

        {/* What is Venture Studio */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 hover-elevate">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Building2 className="text-primary" size={28} />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4">Venture Studio Nedir?</h2>
            <p className="text-white/70 leading-relaxed">
              Bir venture studio, tek tek müşteri projeleri geliştirmek yerine, kendi portföyüne ait ürünler ve şirketler inşa eder. Fikir, içeriden veya dışarıdan gelebilir; önemli olan, bu fikrin doğrulanmış bir probleme çözüm üretip üretmediği ve yapay zekâ gibi kaldıraçlara dayanıp dayanmadığıdır. Studio, fikri analiz eder, MVP'yi geliştirir, pazar testlerini yapar, büyüme stratejisini kurar ve nihayetinde ortaya çıkan projeyi ayrı bir girişim olarak spin-off edebilir.
            </p>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 hover-elevate">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="text-primary" size={28} />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4">Verilabs Nasıl Konumlanıyor?</h2>
            <p className="text-white/70 leading-relaxed">
              Verilabs, venture studio modelini yapay zekâ ekseninde uygulayan bir yapı olarak konumlanır. Bizim için "ürün", bir kod deposundan ibaret değildir; kullanıcılarına net bir değer sunan, gelir modeli tanımlanmış, ölçeklenmesi planlanmış ve yatırım dosyası kurgulanmış yaşayan bir organizmadır. Bu nedenle ürün geliştirme, iş geliştirme ve teknik mimari aynı masada konuşulur.
            </p>
          </Card>
        </div>

        {/* Process */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Verilabs Venture Süreci</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Fikirden şirkete giden yolculukta izlediğimiz adımlar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <Card 
                  key={phase.number} 
                  className="bg-white/5 border-white/10 backdrop-blur-sm p-8 hover-elevate"
                >
                  <div className="flex items-start gap-4 mb-4">
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
                  <p className="text-white/70 leading-relaxed" data-testid={`text-phase-${phase.number}-description`}>
                    {phase.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Important & Difference */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 hover-elevate">
            <h3 className="text-2xl font-semibold text-white mb-4">Neden Önemli?</h3>
            <p className="text-white/70 leading-relaxed">
              Günümüz dünyasında sadece "iyi bir fikir" yeterli değil. Fikirlerin sistematik olarak test edilmesi, doğru ekiple geliştirilebilmesi ve sürdürülebilir bir iş modeline oturtulması gerekiyor. Venture studio modeli, bu süreci şans ve tesadüften çıkarıp, metot ve disiplin içine yerleştirir. Verilabs, bu disiplinin AI odaklı yorumudur.
            </p>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 hover-elevate">
            <h3 className="text-2xl font-semibold text-white mb-4">Verilabs'in Farkı</h3>
            <ul className="text-white/70 leading-relaxed space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>AI ve veri odaklı düşünce yapısını merkeze alması</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Sadece teknik değil, iş modeli perspektifiyle karar alması</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Çoklu proje portföyüyle risk dağıtabilmesi</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Ürünleri uzun vadeli exit potansiyeliyle kurgulaması</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}
