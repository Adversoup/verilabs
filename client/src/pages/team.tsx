import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Workflow, Award } from "lucide-react";
import SEO from "@/components/SEO";
import bgImage from "@assets/16367380_rm380-09_1763392046993.jpg";

const teamMembers = [
  {
    name: "Levent Gözener",
    role: "Founder & Product Architect",
    initials: "LG",
    description: "Verilabs'in ürün vizyonunu, teknik mimariyle iş modeli arasında köprü kurarak şekillendirir. Farklı sektörlerden edindiği deneyimi, yapay zekâ ve SaaS dünyasına taşır."
  },
  {
    name: "[İsim]",
    role: "AI Engineer",
    initials: "AI",
    description: "Modellerin seçimi, eğitimi, ince ayarı ve üretim ortamına alınmasından sorumludur."
  },
  {
    name: "[İsim]",
    role: "Frontend Developer",
    initials: "FD",
    description: "Kullanıcı arayüzlerini modern, hızlı ve sezgisel deneyimlere dönüştürür."
  },
  {
    name: "[İsim]",
    role: "Data Scientist",
    initials: "DS",
    description: "Veri modelleme, metrik üretimi ve içgörü çıkarma süreçlerini yönetir."
  },
  {
    name: "[İsim]",
    role: "Growth & Partnerships",
    initials: "GP",
    description: "Ürünlerin pazar konumlandırmasını, iş ortaklıklarını ve büyüme stratejilerini şekillendirir."
  }
];

export default function Team() {
  return (
    <>
      <SEO 
        title="Ekibimiz"
        description="Verilabs ekibi, mühendislik, ürün yönetimi, iş geliştirme ve tasarım disiplinlerinden gelen insanların aynı masada oturduğu bir ekipten oluşur."
        path="/ekibimiz"
      />
      <div className="relative py-16 space-y-16">
        <div 
          className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="relative z-10 space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight" data-testid="text-page-title">
            Ekibimiz
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Verilabs ekibi, mühendislik, ürün yönetimi, iş geliştirme ve tasarım disiplinlerinden gelen insanların aynı masada oturduğu bir ekipten oluşur. Ünvanlardan çok, üretilen değere ve ortak vizyona önem veririz.
          </p>
        </div>

        {/* Core Team */}
        <div className="relative z-10 space-y-8">
          <h2 className="text-2xl font-semibold text-white">Çekirdek Ekip</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="bg-primary/10 border-primary/20 backdrop-blur-sm overflow-hidden hover-elevate p-6 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 bg-primary/10 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary text-lg font-medium">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-semibold text-white" data-testid={`text-team-member-${index}-name`}>
                      {member.name}
                    </h3>
                    <p className="text-sm text-white/60" data-testid={`text-team-member-${index}-role`}>
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* How We Work & Culture */}
        <div className="relative z-10 grid md:grid-cols-2 gap-8">
          <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm p-8 hover-elevate">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Workflow className="text-primary" size={28} />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4">Nasıl Çalışıyoruz?</h2>
            <p className="text-white/70 leading-relaxed">
              Verilabs ekibi, sabit silolar yerine akışkan takımlar halinde çalışır. Bir projede ürün tasarımı konuşulurken masada hem geliştirici hem veri bilimci hem de iş geliştirme tarafı bulunur. Bu sayede kararlar, tek bir perspektife sıkışmadan alınır. Teknik uygulanabilirlik, kullanıcı deneyimi ve iş modeli aynı anda tartılır.
            </p>
          </Card>

          <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm p-8 hover-elevate">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Users className="text-primary" size={28} />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4">Kültürümüz</h2>
            <ul className="text-white/70 leading-relaxed space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Hiyerarşi yerine sorumluluk alanları</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Uzun toplantılar yerine net gündemli oturumlar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Kod kalitesi kadar problem kalitesine de önem verme</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Sürekli öğrenme ve paylaşım kültürü</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* What We Value */}
        <Card className="relative z-10 bg-primary/10 border-primary/30 backdrop-blur-sm p-8 md:p-12 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Award className="text-primary" size={28} />
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold text-white">Neyi Önemsiyoruz?</h2>
              <p className="text-white/70 leading-relaxed">
                Verilabs'ta güçlü CV'lerden çok, güçlü katkılar önemlidir. Bir ekip üyesinden beklediğimiz şey; merak duygusunu kaybetmemesi, veriye ve geribildirime açık olması ve "bu iş daha iyi nasıl yapılır" sorusunu her gün yeniden sormasıdır. Hatalarımızı saklamayız; onları öğrenme araçlarına dönüştürmeye çalışırız.
              </p>
              <p className="text-white/70 leading-relaxed">
                Ekibimiz büyürken dikkat ettiğimiz en kritik nokta, kültürel uyumdur. Her yeni yetenek, sadece teknik beceri getirmez; aynı zamanda o kültürü şekillendiren bir aktör haline gelir. Bu nedenle ekip genişlerken değerlerimizden taviz vermemeye özen gösteririz.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
