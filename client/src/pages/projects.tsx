import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Factory, CheckCircle2, Sparkles, MessageCircle, LayoutGrid, Share2 } from "lucide-react";
import SEO from "@/components/SEO";
import bgImage from "@assets/143788494_4d4d08ff-43f6-40ed-a04f-9a2f7091ebd4_1763392609882.jpg";

export default function Projects() {
  return (
    <>
      <SEO 
        title="Projeler"
        description="VeriLabs'in AI destekli projeleri: Galgo kişisel alışveriş asistanı ve ProtoNest üretim optimizasyonu. Fikirden ürüne, üründen şirkete."
        path="/projeler"
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
        <div className="relative z-10 space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight" data-testid="text-page-title">
            Projelerimiz
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            VeriLabs çatısı altında şu anda iki çekirdek proje geliştiriyoruz: kişisel alışveriş asistanı <strong>Galgo</strong> ve üretim zekâsı platformu <strong>ProtoNest</strong>. Her ikisi de yapay zekâyı iş akışlarının merkezine yerleştiriyor; biri tüketicilerin alışveriş deneyimini, diğeri üreticilerin verimlilik dengesini yeniden tanımlıyor.
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
                      <ShoppingBag className="text-primary" size={28} />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-white" data-testid="text-galgo-title">
                        Galgo
                      </h2>
                      <p className="text-white/60 text-lg" data-testid="text-galgo-subtitle">
                        AI Destekli Kişisel Alışveriş Asistanı
                      </p>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30" data-testid="badge-galgo-status">
                  MVP Geliştirme
                </Badge>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed" data-testid="text-galgo-description">
                  Galgo ("Tazı"), tüketici alışkanlıklarını ve ihtiyaçlarını yapay zeka yardımıyla öngörebilen, mobil öncelikli bir web uygulamasıdır. Modern hayatın hızında, insanlar hem zaman kaybetmek istemiyor hem de en iyi fırsatları kaçırmak istemiyor. Galgo, bu iki ihtiyacı bir araya getirerek kullanıcıların günlük alışveriş deneyimini kişiselleştirmeyi ve optimize etmeyi hedefliyor.
                </p>

                <p className="text-white/70 leading-relaxed">
                  Galgo'nun temel amacı, kullanıcılara "Bugün ne var?" sorusuna akıllı bir yanıt vermek. Platform, kullanıcının ilgi alanlarını, alışveriş geçmişini ve tercihlerini öğrenerek, günlük olarak kişiselleştirilmiş bir fırsat akışı sunar. Böylece kullanıcı, onlarca e-ticaret sitesini tek tek gezme zahmetinden kurtulur; kendisi için anlamlı olan ürünler ve kampanyalar doğrudan önüne gelir.
                </p>

                <p className="text-white/70 leading-relaxed">
                  Uygulamanın kalbi, yapay zeka destekli bir sohbet asistanıdır. Bu asistan, kullanıcıyla samimi ve doğal bir dille etkileşim kurarak onun tarzını, bütçesini, önceliklerini ve özel durumlarını (örneğin, yaklaşan bir doğum günü hediyesi arayışı) anlar. Her etkileşim, sistemin kullanıcı profilini daha da zenginleştirmesine olanak tanır. Bu sayede zamanla öneriler giderek daha isabetli hale gelir.
                </p>

                <p className="text-white/70 leading-relaxed">
                  Galgo aynı zamanda kullanıcının ilham aldığı, beğendiği ve ileride almayı düşündüğü ürünleri topladığı bir moodboard/wishlist alanı sunar. Bu alan, sadece bir "favoriler listesi" değil; kullanıcının tarzını ve eğilimlerini gösteren zengin bir veri kaynağıdır. Öte yandan, Pinterest gibi platformlarla entegrasyon sayesinde, kullanıcının dışarıda oluşturduğu panolar da Galgo'ya aktarılabilir. Böylece kullanıcı, zaten keşfettiği ve beğendiği görselleri Galgo'nun akıllı öneri motoru ile buluşturmuş olur.
                </p>

                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white">MVP Aşamasındaki Temel Özellikler</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-2">
                      <Sparkles className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong>"Bugün Ne Var?"</strong> – Günlük olarak kişiselleştirilmiş fırsat akışı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <LayoutGrid className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong>Moodboard & Wishlist</strong> – İlham aldığınız ve almayı düşündüğünüz ürünleri kaydedin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Share2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong>Pinterest Entegrasyonu</strong> – Panolarınızı uygulama ile senkronize edin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MessageCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong>AI Sohbet Asistanı</strong> – Tarzınızı ve ihtiyaçlarınızı anlayan akıllı asistan</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white">Kullanıcı Akışı (UX Flow)</h3>
                  <ol className="space-y-3 text-white/70 list-decimal list-inside">
                    <li className="leading-relaxed">
                      <strong>Kayıt / Giriş:</strong> Kullanıcı hesap oluşturur veya mevcut hesabıyla giriş yapar
                    </li>
                    <li className="leading-relaxed">
                      <strong>İlgi Alanlarını Belirleme:</strong> İlk kurulumda kategoriler, markalar ve stil tercihleri seçilir
                    </li>
                    <li className="leading-relaxed">
                      <strong>AI Sohbet Başlar:</strong> Yapay zeka asistanı kullanıcı hakkında veri toplamak için sorular sorar
                    </li>
                    <li className="leading-relaxed">
                      <strong>"Bugün Ne Var?" Keşfi:</strong> Kullanıcı, kendisi için özelleştirilmiş günlük fırsatları inceler
                    </li>
                    <li className="leading-relaxed">
                      <strong>Wishlist / Moodboard Kullanımı:</strong> Beğenilen ürünler kaydedilir, listeler oluşturulur
                    </li>
                    <li className="leading-relaxed">
                      <strong>Pinterest Bağlantısı:</strong> Kullanıcı Pinterest hesabını bağlayarak panolarını uygulama ile paylaşır
                    </li>
                    <li className="leading-relaxed">
                      <strong>Akıllı Öneriler:</strong> AI, scraping verileri ve kullanıcı davranışlarını harmanlayarak sürekli gelişen öneriler sunar
                    </li>
                  </ol>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">Kullanıcıya Sağladığı Faydalar</h3>
                  <p className="text-white/70 leading-relaxed">
                    Galgo, alışveriş deneyimini hem daha verimli hem de daha keyifli hale getirmeyi vaat ediyor. Geleneksel e-ticaret platformlarında kaybolmak yerine, size özel seçilmiş bir vitrinle karşılaşıyorsunuz. Yapay zeka destekli asistan, sadece ürün önermekle kalmıyor; tarzınızı anlamaya, bütçenize saygı göstermeye ve özel ihtiyaçlarınıza yanıt vermeye çalışıyor.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2 text-white/70">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Zaman tasarrufu sağlar</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Kişiselleştirilmiş fırsat akışı</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Tarzınıza uygun öneriler</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Pinterest ile entegre ilham kaynağı</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>AI asistan ile doğal etkileşim</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Mobil öncelikli kullanım deneyimi</span>
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
