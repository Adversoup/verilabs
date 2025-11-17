import { Link } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Rocket, Sparkles, Target, Users2 } from "lucide-react";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO 
        title="Verilabs – AI Venture Studio"
        description="Verilabs, yapay zekâ ve ileri teknoloji alanında ölçeklenebilir projeler geliştirir, büyütür ve global çıkışlara hazır hale getirir."
        path="/"
      />
      <div className="py-12 md:py-20 space-y-32">
        {/* Hero Section */}
        <section className="text-center max-w-5xl mx-auto space-y-8 px-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="text-primary" size={16} />
            <span className="text-sm text-white/90">Türkiye'nin İlk AI Venture Studio'su</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight" data-testid="text-hero-title">
            Yapay Zeka ile
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Geleceği İnşa Ediyoruz
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-description">
            Verilabs, yapay zekâ ve ileri teknoloji alanında ölçeklenebilir projeler geliştirir, büyütür ve global çıkışlara hazır hale getirir.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link href="/projeler">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 gap-2 text-base px-8 py-6"
                data-testid="button-explore-projects"
              >
                Projelerimizi Keşfet
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/hakkimizda">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/20 hover:bg-white/5 text-white gap-2 text-base px-8 py-6"
                data-testid="button-learn-more"
              >
                Hakkımızda
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Grid */}
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

        {/* Featured Projects */}
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
                    <p className="text-sm text-white/60 font-medium">AI Destekli Finansal İçgörü Platformu</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-primary" size={24} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-white/80 leading-relaxed" data-testid="text-project-galgo-description">
                  AI destekli finansal içgörü ve yatırım optimizasyon platformu. Yatırımcıların dağınık veri kaynaklarıyla boğuşmadan, yapay zekâ ile kişiselleştirilmiş finansal stratejiler geliştirmesini sağlar.
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
                    <p className="text-sm text-white/60 font-medium">AI Destekli Üretim Optimizasyonu</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Rocket className="text-primary" size={24} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-white/80 leading-relaxed" data-testid="text-project-protonest-description">
                  AI destekli üretim optimizasyonu: 2D-3D çizim analizi, CAD tabanlı otomatik nesting ve maliyet simülasyonlarıyla KOBİ'lerde verimlilik artışı.
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

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl p-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div className="text-center space-y-3">
              <div className="text-6xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent" data-testid="text-stat-projects">
                3
              </div>
              <div className="text-white/70 text-base font-medium" data-testid="text-stat-projects-label">
                Aktif Proje
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-6xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent" data-testid="text-stat-exits">
                2
              </div>
              <div className="text-white/70 text-base font-medium" data-testid="text-stat-exits-label">
                Başarılı Exit
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-6xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent" data-testid="text-stat-launches">
                1
              </div>
              <div className="text-white/70 text-base font-medium" data-testid="text-stat-launches-label">
                Global Lansman
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
