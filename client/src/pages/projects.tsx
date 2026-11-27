import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import SEO from "@/components/SEO";
import { useLanguage } from "@/lib/i18n";

export default function Projects() {
  const { lang, t } = useLanguage();
  const galgo = t.ventures.galgo;
  const protonest = t.ventures.protonest;

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

      {/* GALGO — PIVOTED PERSONAL SHOPPING INTELLIGENCE */}
      <section id="galgo" className="border-b hairline bg-white py-20 lg:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-12">
          {/* Header Row */}
          <div className="flex flex-wrap items-end justify-between gap-6 border-b hairline pb-8">
            <div className="space-y-4">
              <div className="font-mono-tech text-xs uppercase tracking-widest text-[#1A4BFF]">
                {galgo.eyebrow}
              </div>
              <img
                src="/images/galgo-logo.png"
                alt="Galgo"
                className="h-14 sm:h-16 w-auto object-contain mix-blend-multiply"
                data-testid="text-galgo-title"
              />
              <p
                className="text-xl sm:text-2xl font-medium tracking-tight text-[#0E1014]"
                data-testid="text-galgo-subtitle"
              >
                {galgo.tagline}
              </p>
            </div>
            <span
              className="inline-flex items-center gap-2 font-mono-tech text-xs px-3.5 py-1.5 rounded-full bg-[#0E1014] text-white"
              data-testid="badge-galgo-status"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              {galgo.status}
            </span>
          </div>

          {/* Narrative + Vision Callout */}
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-5 text-[#525660] leading-relaxed">
              <p
                className="text-lg text-[#0E1014] leading-relaxed"
                data-testid="text-galgo-description"
              >
                {galgo.summary}
              </p>
              <p>{galgo.intro2}</p>
              <p>{galgo.intro3}</p>
            </div>

            <div className="lg:col-span-5">
              <div className="border-l-2 border-[#1A4BFF] bg-[#F6F5F1] p-7 h-full flex flex-col justify-between gap-6">
                <div className="font-mono-tech text-[11px] uppercase tracking-widest text-[#1A4BFF]">
                  VISION
                </div>
                <p className="text-base sm:text-lg font-medium text-[#0E1014] leading-relaxed">
                  {galgo.vision}
                </p>
                <div className="flex flex-wrap gap-2 font-mono-tech text-[11px]">
                  {galgo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 border hairline bg-white text-[#0E1014]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4 Capability Pillars */}
          <div className="grid md:grid-cols-2 gap-6 pt-2">
            {galgo.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="border hairline bg-[#F6F5F1] p-7 space-y-3"
              >
                <div className="font-mono-tech text-xs text-[#1A4BFF]">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-medium tracking-tight text-[#0E1014]">
                  {pillar.title}
                </h3>
                <p className="text-sm font-medium text-[#0E1014]">
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-[#525660] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Evolution Banner: From Shopping Assistant to Shopping Intelligence */}
          <div className="bg-[#0E1014] text-white p-8 lg:p-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="font-mono-tech text-xs uppercase tracking-widest text-[#8EA8FF]">
                ARCHITECTURE EVOLUTION
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight leading-snug">
                {galgo.evolutionTitle}
              </h3>
              <p className="font-editorial italic text-xl sm:text-2xl text-[#8EA8FF] pt-2">
                {galgo.motto}
              </p>
            </div>
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-white/15 pt-6 lg:pt-0 lg:pl-8 space-y-4 text-sm sm:text-base text-white/75 leading-relaxed">
              <p>{galgo.evolutionP1}</p>
              <p>{galgo.evolutionP2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROTONEST */}
      <section
        id="protonest"
        className="border-b hairline bg-[#F6F5F1] py-20 lg:py-24 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b hairline pb-8">
            <div className="space-y-4">
              <div className="font-mono-tech text-xs uppercase tracking-widest text-[#0F766E]">
                VENTURE 02 · INDUSTRIAL AI · B2B SAAS
              </div>
              <img
                src="/images/protonest-logo.png"
                alt="ProtoNest"
                className="h-14 sm:h-16 w-auto object-contain mix-blend-multiply"
                data-testid="text-protonest-title"
              />
              <p
                className="text-lg font-medium text-[#0E1014]"
                data-testid="text-protonest-subtitle"
              >
                {protonest.tagline}
              </p>
            </div>
            <span
              className="inline-flex items-center gap-2 font-mono-tech text-xs px-3.5 py-1.5 rounded-full bg-[#0F766E] text-white"
              data-testid="badge-protonest-status"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-300" />
              {protonest.status}
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 space-y-6">
              <p
                className="text-lg text-[#0E1014] leading-relaxed"
                data-testid="text-protonest-description"
              >
                {protonest.summary}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border hairline p-5">
                  <div
                    className="font-mono-tech text-3xl font-semibold text-[#0F766E]"
                    data-testid="text-protonest-saving"
                  >
                    {protonest.metric1V}
                  </div>
                  <div
                    className="text-xs text-[#525660] mt-1.5"
                    data-testid="text-protonest-saving-label"
                  >
                    {protonest.metric1L}
                  </div>
                </div>
                <div className="bg-white border hairline p-5">
                  <div className="font-mono-tech text-3xl font-semibold text-[#0E1014]">
                    {protonest.metric2V}
                  </div>
                  <div className="text-xs text-[#525660] mt-1.5">
                    {protonest.metric2L}
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
                  <li
                    key={cap}
                    className="flex items-start gap-3 text-sm text-[#525660]"
                  >
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
