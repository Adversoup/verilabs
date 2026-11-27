import { Check } from "lucide-react";
import SEO from "@/components/SEO";
import { VALUES_LIST, useLanguage } from "@/lib/i18n";

export default function About() {
  const { lang, t } = useLanguage();
  const values = VALUES_LIST[lang];

  return (
    <>
      <SEO title={t.nav.about} description={t.about.lead} path="/hakkimizda" />

      {/* Page Header */}
      <section className="border-b hairline grid-bg py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-5">
          <div className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#1A4BFF]">
            {t.about.eyebrow}
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0E1014] max-w-4xl leading-[1.08]"
            data-testid="text-page-title"
          >
            {t.about.title}
          </h1>
          <p className="text-lg text-[#525660] max-w-3xl leading-relaxed">
            {t.about.lead}
          </p>
        </div>
      </section>

      {/* Mission, Vision, Approach */}
      <section className="border-b hairline bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#DCD9CF]">
          <div className="p-8 lg:p-12 space-y-4">
            <div className="font-mono-tech text-xs text-[#1A4BFF]">01</div>
            <h2
              className="text-2xl font-medium tracking-tight"
              data-testid="text-mission-title"
            >
              {t.about.missionTitle}
            </h2>
            <p
              className="text-sm text-[#525660] leading-relaxed"
              data-testid="text-mission-description"
            >
              {t.about.missionDesc}
            </p>
          </div>

          <div className="p-8 lg:p-12 space-y-4">
            <div className="font-mono-tech text-xs text-[#1A4BFF]">02</div>
            <h2
              className="text-2xl font-medium tracking-tight"
              data-testid="text-vision-title"
            >
              {t.about.visionTitle}
            </h2>
            <p
              className="text-sm text-[#525660] leading-relaxed"
              data-testid="text-vision-description"
            >
              {t.about.visionDesc}
            </p>
          </div>

          <div className="p-8 lg:p-12 space-y-4">
            <div className="font-mono-tech text-xs text-[#1A4BFF]">03</div>
            <h2
              className="text-2xl font-medium tracking-tight"
              data-testid="text-approach-title"
            >
              {t.about.approachTitle}
            </h2>
            <ul className="space-y-3 text-sm text-[#525660]">
              {t.about.approachItems.map((item, idx) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check
                    size={15}
                    className="text-[#1A4BFF] mt-0.5 flex-shrink-0"
                  />
                  <span data-testid={`text-approach-${idx + 1}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-12">
          <div className="border-b hairline pb-6">
            <h2 className="text-3xl lg:text-4xl font-medium tracking-tight">
              {t.about.valuesTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((val) => (
              <div
                key={val.code}
                className="bg-white border hairline p-8 space-y-3"
              >
                <div className="font-mono-tech text-xs text-[#1A4BFF]">
                  {val.code}
                </div>
                <h3 className="text-xl font-medium">{val.title}</h3>
                <p className="text-sm text-[#525660] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
