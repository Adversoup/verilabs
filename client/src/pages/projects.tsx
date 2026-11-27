import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import SEO from "@/components/SEO";
import { useLanguage } from "@/lib/i18n";

export default function Projects() {
  const { lang, t } = useLanguage();

  const galgoFeatures =
    lang === "tr"
      ? [
          {
            title: '"Bugün Ne Var?"',
            desc: "Günlük olarak kişiselleştirilmiş fırsat ve ürün akışı.",
          },
          {
            title: "Moodboard & Wishlist",
            desc: "İlham alınan ve almayı düşünülen ürünleri tek yerde toplama.",
          },
          {
            title: "Pinterest Entegrasyonu",
            desc: "Kullanıcının panolarını yapay zekâ öneri motoruyla senkronize etme.",
          },
          {
            title: "AI Sohbet Asistanı & Karar Motoru",
            desc: "Tarzı ve bütçeyi öğrenen, commerce arayüzlerinden çağrılabilen karar katmanı.",
          },
        ]
      : [
          {
            title: "Daily Deal Feed",
            desc: "Personalized daily deals and discoveries matched to individual taste.",
          },
          {
            title: "Moodboard & Wishlist",
            desc: "Curated visual inspiration and saved items feeding user preference signals.",
          },
          {
            title: "Pinterest Integration",
            desc: "Syncs external inspiration boards directly into the recommendation engine.",
          },
          {
            title: "AI Chat & Decision Engine",
            desc: "Conversational assistant and embeddable user-centric decision layer for commerce platforms.",
          },
        ];

  const protonestCapabilities =
    lang === "tr"
      ? [
          "2D ve 3D CAD çizimlerini içe aktarma ve otomatik geometri analizi",
          "Otomatik nesting algoritmalarıyla levha üzerinde optimum parça yerleşimi",
          "Malzeme kullanım ve fire oranlarını anlık hesaplama ve raporlama",
          "Tasarım aşamasında farklı malzeme senaryolarına göre maliyet simülasyonu",
        ]
      : [
          "Import and automated geometry analysis of 2D and 3D CAD drawings",
          "Automated nesting algorithms for optimal sheet material layout",
          "Real-time calculation and reporting of material utilization and waste",
          "Instant cost simulation across material scenarios at the design stage",
        ];

  return (
    <>
      <SEO
        title={t.ventures.title}
        description={t.ventures.subtitle}
        path="/projeler"
      />

      {/* Page Header */}
      <section className="border-b hairline grid-bg py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-5">
          <div className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#1A4BFF]">
            {t.ventures.eyebrow}
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0E1014]"
            data-testid="text-page-title"
          >
            {t.ventures.title}
          </h1>
          <p className="text-lg text-[#525660] max-w-2xl leading-relaxed">
            {t.ventures.subtitle}
          </p>
        </div>
      </section>

      {/* Galgo */}
      <section id="galgo" className="border-b hairline bg-white py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b hairline pb-8">
            <div className="space-y-2">
              <div className="font-mono-tech text-xs uppercase tracking-widest text-[#1A4BFF]">
                VENTURE 01 · CONSUMER AI · COMMERCE ENGINE
              </div>
              <h2
                className="text-4xl lg:text-5xl font-medium tracking-tight"
                data-testid="text-galgo-title"
              >
                Galgo
              </h2>
              <p className="text-[#525660]" data-testid="text-galgo-subtitle">
                {t.ventures.galgo.tagline}
              </p>
            </div>
            <span
              className="inline-flex items-center gap-2 font-mono-tech text-xs px-3.5 py-1.5 rounded-full bg-[#0E1014] text-white"
              data-testid="badge-galgo-status"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              {t.ventures.galgo.status}
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 space-y-5">
              <p
                className="text-lg text-[#0E1014] leading-relaxed"
                data-testid="text-galgo-description"
              >
                {t.ventures.galgo.summary}
              </p>
              <div className="border-l-2 border-[#1A4BFF] pl-5 py-3 bg-[#F6F5F1] text-sm text-[#0E1014] leading-relaxed">
                {t.ventures.galgo.engineNote}
              </div>
            </div>

            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              {galgoFeatures.map((feat) => (
                <div
                  key={feat.title}
                  className="border hairline bg-[#F6F5F1] p-5 space-y-2"
                >
                  <h3 className="font-medium text-sm text-[#0E1014]">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#525660] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ProtoNest */}
      <section
        id="protonest"
        className="border-b hairline bg-[#F6F5F1] py-20 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b hairline pb-8">
            <div className="space-y-2">
              <div className="font-mono-tech text-xs uppercase tracking-widest text-[#0F766E]">
                VENTURE 02 · INDUSTRIAL AI · B2B SAAS
              </div>
              <h2
                className="text-4xl lg:text-5xl font-medium tracking-tight"
                data-testid="text-protonest-title"
              >
                ProtoNest
              </h2>
              <p className="text-[#525660]" data-testid="text-protonest-subtitle">
                {t.ventures.protonest.tagline}
              </p>
            </div>
            <span
              className="inline-flex items-center gap-2 font-mono-tech text-xs px-3.5 py-1.5 rounded-full bg-[#0F766E] text-white"
              data-testid="badge-protonest-status"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-300" />
              {t.ventures.protonest.status}
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 space-y-6">
              <p
                className="text-lg text-[#0E1014] leading-relaxed"
                data-testid="text-protonest-description"
              >
                {t.ventures.protonest.summary}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border hairline p-5">
                  <div
                    className="font-mono-tech text-3xl font-semibold text-[#0F766E]"
                    data-testid="text-protonest-saving"
                  >
                    {t.ventures.protonest.metric1V}
                  </div>
                  <div
                    className="text-xs text-[#525660] mt-1.5"
                    data-testid="text-protonest-saving-label"
                  >
                    {t.ventures.protonest.metric1L}
                  </div>
                </div>
                <div className="bg-white border hairline p-5">
                  <div className="font-mono-tech text-3xl font-semibold text-[#0E1014]">
                    {t.ventures.protonest.metric2V}
                  </div>
                  <div className="text-xs text-[#525660] mt-1.5">
                    {t.ventures.protonest.metric2L}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border hairline p-8 space-y-5">
              <div className="font-mono-tech text-xs uppercase tracking-widest text-[#0F766E]">
                {lang === "tr" ? "TEMEL YETENEKLER" : "CORE CAPABILITIES"}
              </div>
              <ul className="space-y-4">
                {protonestCapabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-sm text-[#525660]">
                    <Check
                      size={16}
                      className="text-[#0F766E] mt-0.5 flex-shrink-0"
                    />
                    <span className="leading-relaxed">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0E1014] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="font-mono-tech text-xs text-[#8EA8FF] uppercase tracking-widest">
              {t.closing.eyebrow}
            </div>
            <h2 className="text-2xl lg:text-3xl font-medium">
              {t.closing.titleStart}{" "}
              <span className="font-editorial italic font-normal text-[#8EA8FF]">
                {t.closing.titleAccent}
              </span>
            </h2>
          </div>
          <Link href="/iletisim?track=investor">
            <span className="inline-flex items-center gap-2 bg-white text-[#0E1014] hover:bg-[#1A4BFF] hover:text-white text-sm font-medium px-6 py-3.5 rounded-full transition-colors cursor-pointer">
              {t.nav.contact}
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
