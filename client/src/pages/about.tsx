import { Card } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Shield, Brain, Heart, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";
import bgImage from "@assets/143788494_4d4d08ff-43f6-40ed-a04f-9a2f7091ebd4_1763392609882.jpg";

export default function About() {
  return (
    <>
      <SEO 
        title="Hakkımızda"
        description="Verilabs, yapay zekâ temelli projeleri sadece geliştiren değil, onları iş modeline ve şirketleşme yolculuğuna dönüştüren bir teknoloji stüdyosudur."
        path="/hakkimizda"
      />
      <div className="relative min-h-screen py-16 space-y-16">
        <div 
          className="fixed inset-0 w-full h-full opacity-5 pointer-events-none z-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="relative z-10 max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight" data-testid="text-page-title">
            Hakkımızda
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Verilabs, yapay zekâ temelli projeleri sadece geliştiren değil, onları iş modeline ve şirketleşme yolculuğuna dönüştüren bir teknoloji stüdyosudur. Amacımız, kısa vadeli "uygulama teslimi" yaklaşımının ötesine geçerek, sürdürülebilir ürünler ve ölçeklenebilir şirketler inşa etmektir.
          </p>
        </div>

        {/* Mission, Vision, Approach */}
        <div className="relative z-10 grid md:grid-cols-3 gap-8">
          <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm p-8 hover-elevate">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="text-primary" size={28} />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4" data-testid="text-mission-title">Misyonumuz</h2>
            <p className="text-white/70 leading-relaxed" data-testid="text-mission-description">
              Misyonumuz, karmaşık problemleri sade, uygulanabilir ve ölçülebilir çözümlere dönüştürmektir. Bunu yaparken yapay zekâyı merkezde konumlandırır, veriyle beslenen, öğrenen ve kendi kendini geliştirebilen sistemler tasarlarız. Her projede gerçek bir problemi adreslemeye, net bir değer önermesi tanımlamaya ve kullanıcıların hayatında ölçülebilir bir fark yaratmaya odaklanırız.
            </p>
          </Card>

          <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm p-8 hover-elevate">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="text-primary" size={28} />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4" data-testid="text-vision-title">Vizyonumuz</h2>
            <p className="text-white/70 leading-relaxed" data-testid="text-vision-description">
              Vizyonumuz, Türkiye çıkışlı ama global ölçekte etkili bir AI venture studio olmaktır. Geliştirdiğimiz her ürün, ilk günden itibaren sadece yerel pazarı değil, uluslararası ölçekte genişleyebilecek bir yapıyı hedefler. Bu yüzden teknik mimariden marka kurgusuna, lisanslama modellerinden entegrasyon stratejilerine kadar her kararı küresel ölçeklenebilirlik perspektifiyle ele alıyoruz.
            </p>
          </Card>

          <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm p-8 hover-elevate">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Lightbulb className="text-primary" size={28} />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4" data-testid="text-approach-title">Yaklaşımımız</h2>
            <ul className="text-white/70 leading-relaxed space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span data-testid="text-approach-1">Fikirden ürüne, üründen şirkete giden yolu birlikte tasarlamak</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span data-testid="text-approach-2">Veri ve kullanıcı geri bildirimi ile karar almak</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span data-testid="text-approach-3">Hızlı prototipleme ve tekrar tekrar doğrulama</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Yatırım ve exit potansiyelini en başta kurgulamak</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Values */}
        <div className="relative z-10 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Değerlerimiz</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Verilabs'ı şekillendiren temel prensipler
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm p-8 hover-elevate">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mt-2">Dürüstlük ve Şeffaflık</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Verilabs'ta metrikler süslenmez, problemlerse saklanmaz. Bir proje beklenen hızda ilerlemiyorsa bunu açıkça masaya koyar, gerekli pivot kararlarını veriye bakarak alırız. Bu şeffaflık, hem zekice inşa edilmiş ürünler hem de güvenilir iş ilişkileri kurmamızı sağlar.
              </p>
            </Card>

            <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm p-8 hover-elevate">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Brain className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mt-2">Bilimsel Düşünce</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Varsayımlarımızı test eder, hipotezlerimizi deneyle doğrularız. Kullanıcı davranışlarını anlamak için sezgiye değil, verilere bakarız. "Bu böyle yapılır" klişesini kabul etmeyip, her alanda daha iyisini mümkün kılan senaryoları keşfetmeye çalışırız.
              </p>
            </Card>

            <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm p-8 hover-elevate">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mt-2">Öğrenme İştahı</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Her yeni proje, önceki deneyimlerimizin üzerine inşa edilen bir öğrenme katmanıdır. Kullandığımız teknolojiler, kurduğumuz mimariler, seçtiğimiz iş ortakları ve benimsediğimiz modeller zamanla rafine edilir. Verilabs için "yeterince iyi" diye bir seviye yoktur; daha iyisi için yer her zaman vardır.
              </p>
            </Card>

            <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm p-8 hover-elevate">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mt-2">İnsan Merkezlilik</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Yapay zekâdan bahsediyor olmamız, odağımızın insan olmadığı anlamına gelmez. Tersine, tüm sistemleri insan davranışını, ihtiyaçlarını ve sınırlılıklarını daha iyi anlamak için kullanırız. Ürünlerimizi, insanların günlük kararlarını daha kolay, daha bilinçli ve daha verimli hale getirmek için tasarlarız.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
