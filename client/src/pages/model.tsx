import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import SEO from "@/components/SEO";
import ProcessSteps from "@/components/ProcessSteps";
import { useLanguage } from "@/lib/i18n";

export default function Model() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={t.howWeWork.title}
        description={t.howWeWork.intro}
        path="/model"
      />

      {/* Page Header */}
      <section className="border-b hairline grid-bg py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-5">
          <div className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#1A4BFF]">
            {t.howWeWork.eyebrow}
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0E1014]"
            data-testid="text-page-title"
          >
            {t.howWeWork.title}
          </h1>
          <p className="text-lg text-[#525660] max-w-3xl leading-relaxed">
            {t.howWeWork.intro}
          </p>
        </div>
      </section>

      {/* What is a Venture Studio & Why This Model */}
      <section className="border-b hairline bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#DCD9CF]">
          <div className="p-8 lg:p-14 space-y-4">
            <div className="font-mono-tech text-xs text-[#1A4BFF]">01</div>
            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight">
              {t.howWeWork.whatIsTitle}
            </h2>
            <p className="text-[#525660] leading-relaxed">
              {t.howWeWork.whatIsDesc}
            </p>
          </div>
          <div className="p-8 lg:p-14 space-y-4">
            <div className="font-mono-tech text-xs text-[#1A4BFF]">02</div>
            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight">
              {t.howWeWork.whyModelTitle}
            </h2>
            <p className="text-[#525660] leading-relaxed">
              {t.howWeWork.whyModelDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive 5-Step Process */}
      <section className="border-b hairline py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ProcessSteps />
        </div>
      </section>

      {/* Difference & Working with Founders */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-8">
          <div className="border hairline bg-[#F6F5F1] p-8 lg:p-10 space-y-6">
            <h2 className="text-2xl font-medium tracking-tight">
              {t.howWeWork.diffTitle}
            </h2>
            <ul className="space-y-4">
              {t.howWeWork.diffItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#525660]"
                >
                  <Check
                    size={16}
                    className="text-[#1A4BFF] mt-0.5 flex-shrink-0"
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border hairline bg-[#0E1014] text-white p-8 lg:p-10 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <div className="font-mono-tech text-xs text-[#8EA8FF] uppercase tracking-widest">
                CO-FOUNDERS
              </div>
              <h2 className="text-2xl font-medium tracking-tight">
                {t.howWeWork.foundersTitle}
              </h2>
              <p className="text-white/75 leading-relaxed text-sm">
                {t.howWeWork.foundersDesc}
              </p>
            </div>
            <div>
              <Link href="/iletisim?track=founder">
                <span className="inline-flex items-center gap-2 bg-white text-[#0E1014] hover:bg-[#1A4BFF] hover:text-white text-xs font-medium px-5 py-3 rounded-full transition-colors cursor-pointer">
                  {t.closing.tracks[0].cta}
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
