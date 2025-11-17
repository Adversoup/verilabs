import { Link } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Rocket, Sparkles, Target, Users2, Lightbulb, Cpu, Building2 } from "lucide-react";
import SEO from "@/components/SEO";
import heroVideo from "@assets/13442303_1920_1080_30fps_1763389101419.mp4";

export default function Home() {
  return (
    <>
      <SEO 
        title="Verilabs – AI Venture Studio"
        description="Verilabs, yapay zekâ ve ileri teknoloji alanında ölçeklenebilir projeler geliştirir, büyütür ve global çıkışlara hazır hale getirir."
        path="/"
      />
      {/* Hero Section with Video Background - Full Width */}
      <section className="relative w-screen -ml-[50vw] left-1/2 overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A]/40 via-[#0B0F1A]/60 to-[#0B0F1A]/90" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8 px-4 py-32 md:py-40">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-4 backdrop-blur-sm">
              <Sparkles className="text-primary" size={16} />
              <span className="text-sm text-white/90">Türkiye'nin İlk AI Venture Studio'su</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl" data-testid="text-hero-title">
              Yapay Zeka ile
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Geleceği İnşa Ediyoruz
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg" data-testid="text-hero-description">
              Verilabs, yapay zekâ ve ileri teknoloji alanında ölçeklenebilir projeler geliştirir, büyütür ve global çıkışlara hazır hale getirir. Sadece yazılım üreten bir ekip değiliz; geleceğin iş modellerini inşa eden bir venture studio'yuz.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link href="/projeler">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 gap-2 text-base px-8 py-6 shadow-xl"
                  data-testid="button-explore-projects"
                >
                  Projelerimizi Keşfet
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/model">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 hover:bg-white/10 text-white gap-2 text-base px-8 py-6 backdrop-blur-sm shadow-xl"
                  data-testid="button-learn-more"
                >
                  Venture Studio Yaklaşımımız
                </Button>
              </Link>
            </div>
          </div>
      </section>

      <div className="py-12 md:py-20 space-y-32">
          {/* What We Do Section */}
          <section className="space-y-12">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 hover-elevate">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Lightbulb className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Ne Yapıyoruz?</h3>
                <p className="text-white/70 leading-relaxed">
                  Verilabs, fikir aşamasındaki konseptleri veriye dayalı analizlerle değerlendirir, hızlı prototipleme teknikleriyle hayata geçirir ve ölçeklenebilir ürünlere dönüştürür. Her proje, baştan itibaren bir şirket adayı olarak tasarlanır; altyapısı, mimarisi ve iş modeli buna göre kurgulanır.
                </p>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 hover-elevate">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Cpu className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Neden AI Merkezde?</h3>
                <p className="text-white/70 leading-relaxed">
                  Yapay zekâ, bugün sadece bir ek özellik değil; iş modellerini yeniden tanımlayan temel bir katman. Verilabs'ta süreçlerimizi, kullanıcı deneyimini ve karar mekanizmalarını AI destekli tasarlıyoruz. Böylece her ürün, piyasaya çıktığı gün itibarıyla veriyle beslenebilen, öğrenen ve gelişen yaşayan bir organizma haline geliyor.
                </p>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 hover-elevate">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Building2 className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Hangi Alanlarda Çalışıyoruz?</h3>
                <p className="text-white/70 leading-relaxed">
                  Finansal içgörüden üretim optimizasyonuna kadar uzanan yelpazede çalışıyoruz. Galgo, yatırımcılar için AI destekli karar destek sistemi sunarken; ProtoNest, üreticilerin malzeme kullanımını ve süreç verimliliğini yapay zekâ ile yeniden tanımlıyor.
                </p>
              </Card>
            </div>
          </section>

          {/* Featured Projects - Detailed */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Öne Çıkan Projelerimiz</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                AI teknolojisiyle sektörleri dönüştüren yenilikçi çözümlerimiz
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/10 backdrop-blur-sm overflow-hidden hover-elevate group">
                <CardHeader className="space-y-4 pb-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors" data-testid="text-project-galgo-title">
                        Galgo
                      </h3>
                      <p className="text-sm text-white/60 font-medium">AI Destekli Finansal İçgörü Motoru</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="text-primary" size={24} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-white/80 leading-relaxed" data-testid="text-project-galgo-description">
                    Galgo, dağınık veri kaynakları, karmaşık tablolar ve takip edilmesi güç piyasa dinamikleri arasında sıkışmış yatırımcılara yapay zekâ ile desteklenmiş net bir görünürlük sunar. Farklı veri kaynaklarından topladığı bilgileri anlamlandırır, risk-getiri dengesini analiz eder ve kullanıcıya anlaşılır öneriler üretir. Yatırım kararlarını tesadüfe bırakmak yerine, veriyle konuşan bir yapıya dönüştürmeyi hedefler.
                  </p>
                  <Link href="/projeler#galgo">
                    <Button 
                      variant="ghost" 
                      className="gap-2 text-primary hover:text-primary/90 p-0 h-auto font-medium group/btn"
                      data-testid="button-view-galgo"
                    >
                      Detayları İncele
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/10 backdrop-blur-sm overflow-hidden hover-elevate group">
                <CardHeader className="space-y-4 pb-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors" data-testid="text-project-protonest-title">
                        ProtoNest
                      </h3>
                      <p className="text-sm text-white/60 font-medium">AI Destekli Üretim Zekâsı</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Rocket className="text-primary" size={24} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-white/80 leading-relaxed" data-testid="text-project-protonest-description">
                    ProtoNest, özellikle üretim yapan KOBİ'ler için tasarlanmış bir yapay zekâ platformudur. 2D ve 3D çizimlerden anlam çıkarır, malzeme kullanımını optimize eder ve nesting algoritmalarıyla israfı azaltır. Amaç, üretim süreçlerini sadece daha hızlı değil, daha akıllı hale getirmektir. ProtoNest ile üreticiler, tasarım anından itibaren maliyet ve verimlilik dengesini görebilir.
                  </p>
                  <Link href="/projeler#protonest">
                    <Button 
                      variant="ghost" 
                      className="gap-2 text-primary hover:text-primary/90 p-0 h-auto font-medium group/btn"
                      data-testid="button-view-protonest"
                    >
                      Detayları İncele
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Neden Verilabs */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Neden Verilabs?</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Venture studio modeliyle teknoloji projelerini en hızlı şekilde ölçeklendiriyoruz
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 hover-elevate">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Odaklanmış Yaklaşım</h3>
                <p className="text-white/70 leading-relaxed">
                  AI ve teknoloji odaklı projelerde uzmanlaşarak, her girişime maksimum değer katıyoruz.
                </p>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 hover-elevate">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Rocket className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Hızlı Ölçeklendirme</h3>
                <p className="text-white/70 leading-relaxed">
                  Kanıtlanmış süreçler ve deneyimli ekiple projeleri global pazara hızla taşıyoruz.
                </p>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 hover-elevate">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users2 className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Güçlü Ekosistem</h3>
                <p className="text-white/70 leading-relaxed">
                  Yatırımcılar, mentorlar ve sektör liderleriyle güçlü bir ekosistem oluşturuyoruz.
                </p>
              </Card>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl p-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              <div className="text-center space-y-3">
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent" data-testid="text-stat-projects">
                  3
                </div>
                <div className="text-white/70 text-base font-medium" data-testid="text-stat-projects-label">
                  Aktif Ürün Hattı
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent" data-testid="text-stat-exits">
                  2
                </div>
                <div className="text-white/70 text-base font-medium" data-testid="text-stat-exits-label">
                  AI Odaklı Çekirdek Proje
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent" data-testid="text-stat-launches">
                  1
                </div>
                <div className="text-white/70 text-base font-medium" data-testid="text-stat-launches-label">
                  Ortak Vizyon: Geleceği Kodlamak
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center max-w-4xl mx-auto space-y-8 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Bir Sonraki Projemiz
              <br />
              <span className="text-primary">Sizinki Olabilir</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Yenilikçi bir fikriniz mi var? Birlikte global bir başarı hikayesi yazalım.
            </p>
            <Link href="/iletisim">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 gap-2 text-base px-8 py-6"
                data-testid="button-contact-cta"
              >
                İletişime Geç
                <ArrowRight size={18} />
              </Button>
            </Link>
          </section>
      </div>
    </>
  );
}
