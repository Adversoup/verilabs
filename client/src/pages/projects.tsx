import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Factory, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import bgImage from "@assets/143788494_4d4d08ff-43f6-40ed-a04f-9a2f7091ebd4_1763392609882.jpg";

export default function Projects() {
  return (
    <>
      <SEO 
        title="Projeler"
        description="Verilabs'in AI destekli projeleri: Galgo finansal içgörü platformu ve ProtoNest üretim optimizasyonu. Fikirden ürüne, üründen şirkete."
        path="/projeler"
      />
      <div className="relative min-h-screen py-16 space-y-16">
        <div 
          className="fixed inset-0 w-full h-full opacity-20 pointer-events-none z-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="relative z-10 space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight" data-testid="text-page-title">
            Projelerimiz
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Verilabs çatısı altında şu anda iki çekirdek proje geliştiriyoruz: finansal içgörü motoru <strong>Galgo</strong> ve üretim zekâsı platformu <strong>ProtoNest</strong>. Her ikisi de yapay zekâyı iş akışlarının merkezine yerleştiriyor; biri yatırımcıların karar süreçlerini, diğeri üreticilerin verimlilik dengesini yeniden tanımlıyor.
          </p>
        </div>

        {/* Galgo */}
        <article id="galgo" className="relative z-10 scroll-mt-24 space-y-8">
          <Card className="bg-primary/10 border-primary/30 backdrop-blur-sm overflow-hidden hover-elevate">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="text-primary" size={28} />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-white" data-testid="text-galgo-title">
                        Galgo
                      </h2>
                      <p className="text-white/60 text-lg" data-testid="text-galgo-subtitle">
                        AI Destekli Finansal İçgörü Motoru
                      </p>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30" data-testid="badge-galgo-status">
                  Beta
                </Badge>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed" data-testid="text-galgo-description">
                  Galgo, finansal karar alma süreçlerinde kaybolan zamanı ve zihinsel yükü azaltmak için tasarlanmış bir yapay zekâ platformudur. Yatırımcılar genellikle çok sayıda kaynaktan veri toplar: borsa ekranları, raporlar, haber akışları, analiz yazıları ve sosyal medya yorumları. Bu dağınıklık arasında hem fırsatları kaçırmak hem de duygusal tepkilere dayalı kararlar almak oldukça kolaydır. Galgo, bu karmaşayı düzenli bir içgörü akışına dönüştürmeyi hedefler.
                </p>

                <p className="text-white/70 leading-relaxed">
                  Platform, farklı veri kaynaklarından çektiği bilgileri bir araya getirir, belirlenmiş strateji ve risk profiline göre kullanıcıya anlamlı bir çerçeve sunar. Risk toleransı düşük bir kullanıcı için daha korumacı portföy önerileri üretirken, daha agresif profiller için farklı senaryolar simüle edebilir. Bunu yaparken klasik "hazır tavsiye" yaklaşımından uzak durur; kullanıcının kararını destekleyen, nedenleriyle açıklanmış öneriler üretir.
                </p>

                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white">Galgo Nasıl Çalışır?</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Farklı veri kaynaklarından (piyasalar, haberler, raporlar) gelen verileri toplar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Bu verileri kullanıcı profilindeki risk ve hedef parametreleriyle eşleştirir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Makine öğrenimi ve kurallı modellerle olası senaryoları çıkarır</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Kullanıcıya sadeleştirilmiş, açıklanabilir içgörüler sunar</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">Kullanıcıya Sağladığı Faydalar</h3>
                  <p className="text-white/70 leading-relaxed">
                    Galgo, profesyonel yatırımcı ile bireysel yatırımcı arasındaki bilgi ve analiz uçurumunu kapatmaya çalışır. Herkesin Bloomberg terminali veya büyük bir araştırma ekibi olamaz; fakat herkes, karar verirken arkasında veriyle çalışan bir sistem isteyebilir.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2 text-white/70">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Zamandan tasarruf sağlar</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Bilgi kirliliğini filtreler</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Duygusal karar riskini azaltır</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Risk-getiri dengesini görünür kılar</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </article>

        {/* ProtoNest */}
        <article id="protonest" className="relative z-10 scroll-mt-24 space-y-8">
          <Card className="bg-primary/10 border-primary/30 backdrop-blur-sm overflow-hidden hover-elevate">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <Factory className="text-green-400" size={28} />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-white" data-testid="text-protonest-title">
                        ProtoNest
                      </h2>
                      <p className="text-white/60 text-lg" data-testid="text-protonest-subtitle">
                        AI Destekli Üretim Optimizasyonu
                      </p>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30" data-testid="badge-protonest-status">
                  MVP Tamamlandı
                </Badge>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed" data-testid="text-protonest-description">
                  ProtoNest, üretim yapan işletmelerin en kritik sorunlarından biri olan malzeme israfını ve düşük verimliliği hedef alır. Özellikle sac, ahşap, plastik gibi levha bazlı malzemelerle çalışan firmalarda kesim planlarının nasıl yapıldığı, doğrudan maliyet kalemlerini etkiler. Geleneksel yöntemlerde bu planlama çoğu zaman deneyime ve manuel hesaplara dayanır; bu da hem hataya hem de ciddi israfa açıktır.
                </p>

                <p className="text-white/70 leading-relaxed">
                  ProtoNest, üretim süreçlerini yapay zekâ destekli bir bakış açısıyla ele alır. 2D veya 3D çizimleri analiz ederek hangi parçanın hangi yerleşimle, hangi malzeme üzerinde, hangi sırayla kesilmesinin daha verimli olacağını hesaplar. Böylece tek tek insan tarafından hazırlanan nesting planları yerine, saniyeler içinde optimize edilmiş yerleşim önerileri sunar.
                </p>

                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white">ProtoNest'in Yetenekleri</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                      <span>CAD tabanlı çizimleri içe aktarma ve analiz etme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                      <span>Otomatik nesting algoritmalarıyla optimum yerleşim önerileri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                      <span>Malzeme kullanım oranlarını hesaplama ve raporlama</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                      <span>Farklı senaryolara göre maliyet simülasyonları</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">Üretici İçin Değer Önerisi</h3>
                  <p className="text-white/70 leading-relaxed">
                    ProtoNest, sadece malzeme tasarrufu sağlamakla kalmaz; planlama süreçlerini hızlandırır, üretim hatlarındaki öngörülebilirliği artırır ve operasyonel kararları veri temelli hale getirir. Tipik bir kullanım senaryosunda:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 pt-2">
                    <Card className="bg-primary/10 border-primary/20 p-4 space-y-2">
                      <div className="text-2xl font-bold text-green-400" data-testid="text-protonest-saving">%15-20</div>
                      <div className="text-sm text-white/70" data-testid="text-protonest-saving-label">
                        Malzeme israfında azalma
                      </div>
                    </Card>
                    <Card className="bg-primary/10 border-primary/20 p-4 space-y-2">
                      <div className="text-2xl font-bold text-green-400">⚡</div>
                      <div className="text-sm text-white/70">
                        Planlama süresinde ciddi kısalma
                      </div>
                    </Card>
                    <Card className="bg-primary/10 border-primary/20 p-4 space-y-2">
                      <div className="text-2xl font-bold text-green-400">📈</div>
                      <div className="text-sm text-white/70">
                        Operasyonel verimlilikte artış
                      </div>
                    </Card>
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed bg-primary/10 border border-primary/20 rounded-xl p-6">
                  Tüm bunlar, özellikle rekabet baskısı altında çalışan KOBİ'ler için kritik öneme sahiptir. Üretim maliyetlerinde sağlanan her küçük iyileşme, toplam kârlılıkta ciddi bir fark yaratır. ProtoNest, bu iyileşmeleri sistematik ve tekrarlanabilir hale getirmeyi amaçlar.
                </p>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </>
  );
}
