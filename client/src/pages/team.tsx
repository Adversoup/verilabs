import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import SEO from "@/components/SEO";
import { TEAM_MEMBERS, useLanguage } from "@/lib/i18n";

export default function Team() {
  const { lang, t } = useLanguage();

  return (
    <>
      <SEO title={t.team.title} description={t.team.subtitle} path="/ekibimiz" />

      {/* Header */}
      <section className="border-b hairline grid-bg py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-5">
          <div className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#1A4BFF]">
            {t.team.eyebrow}
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0E1014]"
            data-testid="text-page-title"
          >
            {t.team.title}
          </h1>
          <p className="text-lg text-[#525660] max-w-3xl leading-relaxed">
            {t.team.subtitle}
          </p>
        </div>
      </section>

      {/* Leadership & Partners Grid */}
      <section className="border-b hairline bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={member.id}
                className="team-card border hairline bg-[#F6F5F1] overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#ECEAE3]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="portrait-img w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6 space-y-2 flex-1">
                  <h2
                    className="font-medium text-lg text-[#0E1014]"
                    data-testid={`text-team-member-${index}-name`}
                  >
                    {member.name}
                  </h2>
                  <div className="font-mono-tech text-[11px] uppercase tracking-wider text-[#1A4BFF]">
                    {member.role[lang]}
                  </div>
                  <p className="text-sm text-[#525660] leading-relaxed pt-1">
                    {member.bio[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work + Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-8">
          <div className="bg-white border hairline p-8 lg:p-10 space-y-5">
            <h2 className="text-2xl font-medium tracking-tight">
              {t.team.howTitle}
            </h2>
            <ul className="space-y-3.5 text-sm text-[#525660]">
              {t.team.howItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={16}
                    className="text-[#1A4BFF] mt-0.5 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0E1014] text-white p-8 lg:p-10 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <div className="font-mono-tech text-xs text-[#8EA8FF] uppercase tracking-widest">
                CAREERS
              </div>
              <h2 className="text-2xl font-medium tracking-tight">
                {t.team.joinTitle}
              </h2>
              <p className="text-sm text-white/75 leading-relaxed">
                {t.team.joinDesc}
              </p>
            </div>
            <div>
              <Link href="/iletisim?track=talent">
                <span className="inline-flex items-center gap-2 bg-white text-[#0E1014] hover:bg-[#1A4BFF] hover:text-white text-xs font-medium px-5 py-3 rounded-full transition-colors cursor-pointer">
                  {t.team.joinCta}
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
