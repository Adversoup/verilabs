import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import ProcessSteps from "@/components/ProcessSteps";
import { TEAM_MEMBERS, VALUES_LIST, useLanguage } from "@/lib/i18n";

export default function Home() {
  const { lang, t } = useLanguage();
  const values = VALUES_LIST[lang];

  return (
    <>
      <SEO title={t.siteTitle} description={t.siteDesc} path="/" />

      {/* HERO SECTION */}
      <section className="relative border-b hairline grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-8">
              <div className="inline-flex items-center gap-2.5 border hairline bg-white/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#1A4BFF]" />
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-[#0E1014]">
                  {t.hero.eyebrow}
                </span>
              </div>

              <h1
                className="text-5xl sm:text-6xl lg:text-[72px] font-medium tracking-[-0.035em] leading-[1.03] text-[#0E1014]"
                data-testid="text-hero-title"
              >
                {t.hero.headlineLine1}
                <br />
                <span className="font-editorial italic font-normal text-[#1A4BFF]">
                  {t.hero.headlineLine2}
                </span>
              </h1>

              <p
                className="text-lg sm:text-xl text-[#525660] max-w-2xl leading-relaxed"
                data-testid="text-hero-description"
              >
                {t.hero.subtext}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/projeler">
                  <span
                    className="inline-flex items-center gap-2.5 bg-[#0E1014] hover:bg-[#1A4BFF] text-white text-sm font-medium px-6 py-3.5 rounded-full transition-colors cursor-pointer"
                    data-testid="button-explore-projects"
                  >
                    {t.hero.ctaPrimary}
                    <ArrowRight size={16} />
                  </span>
                </Link>
                <Link href="/model">
                  <span
                    className="inline-flex items-center gap-2.5 bg-white hover:bg-[#ECEAE3] border hairline text-[#0E1014] text-sm font-medium px-6 py-3.5 rounded-full transition-colors cursor-pointer"
                    data-testid="button-learn-more"
                  >
                    {t.hero.ctaSecondary}
                  </span>
                </Link>
              </div>
            </div>

            {/* Studio Model Index Card */}
            <div className="lg:col-span-4">
              <div className="bg-white border hairline p-6 space-y-5">
                <div className="flex items-center justify-between border-b hairline pb-3">
                  <span className="font-mono-tech text-[11px] uppercase tracking-widest text-[#525660]">
                    {t.hero.cardLabel}
                  </span>
                  <span className="font-mono-tech text-[11px] text-[#1A4BFF]">
                    IST · GLOBAL
                  </span>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[#525660]">{t.hero.stat1K}</span>
                    <span className="font-medium text-right">{t.hero.stat1V}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-t hairline pt-3">
                    <span className="text-[#525660]">{t.hero.stat2K}</span>
                    <span className="font-medium text-right font-mono-tech">
                      Galgo · ProtoNest
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-t hairline pt-3">
                    <span className="text-[#525660]">{t.hero.stat3K}</span>
                    <span className="font-medium text-right">{t.hero.stat3V}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THESIS BAND: WHAT WE DO & WHY AI */}
      <section className="border-b hairline bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#DCD9CF]">
          <div className="p-8 lg:p-14 space-y-5">
            <div className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#1A4BFF]">
              01 / {t.thesis.whatEyebrow}
            </div>
            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight leading-snug">
              {t.thesis.whatTitle}
            </h2>
            <p className="text-[#525660] leading-relaxed">{t.thesis.whatP1}</p>
            <p className="text-[#0E1014] font-medium leading-relaxed">
              {t.thesis.whatP2}
            </p>
          </div>

          <div className="p-8 lg:p-14 space-y-5">
            <div className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#1A4BFF]">
              02 / {t.thesis.whyAiEyebrow}
            </div>
            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight leading-snug">
              {t.thesis.whyAiTitle}
            </h2>
            <p className="text-[#525660] leading-relaxed">{t.thesis.whyAiP1}</p>
            <div className="pt-3 grid grid-cols-3 gap-3 text-xs font-mono-tech">
              <div className="border hairline bg-[#F6F5F1] p-3">
                <div className="text-[#525660]">{t.thesis.layer1K}</div>
                <div className="font-semibold mt-1">{t.thesis.layer1V}</div>
              </div>
              <div className="border border-[#1A4BFF]/40 bg-[#1A4BFF]/[0.05] p-3">
                <div className="text-[#1A4BFF]">{t.thesis.layer2K}</div>
                <div className="font-semibold mt-1">{t.thesis.layer2V}</div>
              </div>
              <div className="border hairline bg-[#F6F5F1] p-3">
                <div className="text-[#525660]">{t.thesis.layer3K}</div>
                <div className="font-semibold mt-1">{t.thesis.layer3V}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VENTURE PORTFOLIO */}
      <section className="border-b hairline py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b hairline pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#525660]">
                {t.ventures.eyebrow}
              </div>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">
                {t.ventures.title}
              </h2>
            </div>
            <p className="text-[#525660] max-w-md text-base leading-relaxed">
              {t.ventures.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* GALGO */}
            <article className="bg-white border hairline flex flex-col justify-between group hover:border-[#0E1014] transition-colors">
              <div>
                <div className="h-52 bg-[#0E1014] relative overflow-hidden p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between relative z-10">
                    <span className="font-mono-tech text-[11px] uppercase tracking-widest text-white/60">
                      VENTURE 01 · CONSUMER AI
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono-tech text-[11px] px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {t.ventures.galgo.status}
                    </span>
                  </div>
                  <svg
                    className="absolute inset-0 w-full h-full opacity-35"
                    viewBox="0 0 500 220"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M40 160 C130 160, 150 70, 250 105 C350 140, 380 55, 465 65"
                      stroke="#1A4BFF"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M40 120 C140 120, 180 175, 270 115 C360 55, 400 145, 465 130"
                      stroke="#FFFFFF"
                      strokeOpacity="0.4"
                      strokeDasharray="4 4"
                    />
                    <circle cx="145" cy="112" r="4" fill="#FFFFFF" />
                    <circle cx="250" cy="105" r="6" fill="#1A4BFF" />
                    <circle
                      cx="250"
                      cy="105"
                      r="14"
                      stroke="#1A4BFF"
                      strokeOpacity="0.5"
                    />
                    <circle cx="375" cy="88" r="4" fill="#FFFFFF" />
                    <circle cx="465" cy="65" r="5" fill="#8EA8FF" />
                  </svg>
                  <div className="relative z-10 flex items-end justify-between">
                    <div>
                      <h3
                        className="text-3xl font-medium text-white tracking-tight"
                        data-testid="text-project-galgo-title"
                      >
                        Galgo
                      </h3>
                      <p className="text-xs text-white/70 mt-1">
                        {t.ventures.galgo.tagline}
                      </p>
                    </div>
                    <span className="font-mono-tech text-[11px] text-white/50">
                      B2C · B2B2C
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <p
                    className="text-[#525660] leading-relaxed"
                    data-testid="text-project-galgo-description"
                  >
                    {t.ventures.galgo.summary}
                  </p>
                  <div className="border-l-2 border-[#1A4BFF] pl-4 py-1.5 bg-[#F6F5F1] text-xs text-[#0E1014] leading-relaxed">
                    {t.ventures.galgo.engineNote}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1 font-mono-tech text-[11px]">
                    {t.ventures.galgo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 border hairline bg-[#F6F5F1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-8 py-5 border-t hairline flex items-center justify-between bg-[#FAF9F6]">
                <span className="font-mono-tech text-xs text-[#525660]">
                  {t.ventures.galgo.footer}
                </span>
                <Link
                  href="/projeler#galgo"
                  className="text-xs font-medium text-[#0E1014] hover:text-[#1A4BFF] inline-flex items-center gap-1.5 transition-colors"
                  data-testid="button-view-galgo"
                >
                  {t.ventures.detailsBtn}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            {/* PROTONEST */}
            <article className="bg-white border hairline flex flex-col justify-between group hover:border-[#0E1014] transition-colors">
              <div>
                <div className="h-52 bg-[#14171D] relative overflow-hidden p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between relative z-10">
                    <span className="font-mono-tech text-[11px] uppercase tracking-widest text-white/60">
                      VENTURE 02 · INDUSTRIAL AI
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono-tech text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {t.ventures.protonest.status}
                    </span>
                  </div>
                  <svg
                    className="absolute right-6 top-12 w-56 h-28 opacity-55"
                    viewBox="0 0 240 120"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="236"
                      height="116"
                      stroke="white"
                      strokeOpacity="0.25"
                      strokeDasharray="3 3"
                    />
                    <rect
                      x="8"
                      y="8"
                      width="72"
                      height="48"
                      fill="#1A4BFF"
                      fillOpacity="0.25"
                      stroke="#8EA8FF"
                    />
                    <rect
                      x="84"
                      y="8"
                      width="96"
                      height="32"
                      fill="#10B981"
                      fillOpacity="0.2"
                      stroke="#34D399"
                    />
                    <rect
                      x="184"
                      y="8"
                      width="48"
                      height="68"
                      fill="#1A4BFF"
                      fillOpacity="0.2"
                      stroke="#8EA8FF"
                    />
                    <rect
                      x="8"
                      y="60"
                      width="112"
                      height="52"
                      fill="#10B981"
                      fillOpacity="0.22"
                      stroke="#34D399"
                    />
                    <rect
                      x="124"
                      y="44"
                      width="56"
                      height="68"
                      fill="#FFFFFF"
                      fillOpacity="0.08"
                      stroke="white"
                      strokeOpacity="0.5"
                    />
                    <rect
                      x="184"
                      y="80"
                      width="48"
                      height="32"
                      fill="#10B981"
                      fillOpacity="0.25"
                      stroke="#34D399"
                    />
                  </svg>
                  <div className="relative z-10 flex items-end justify-between">
                    <div>
                      <h3
                        className="text-3xl font-medium text-white tracking-tight"
                        data-testid="text-project-protonest-title"
                      >
                        ProtoNest
                      </h3>
                      <p className="text-xs text-white/70 mt-1">
                        {t.ventures.protonest.tagline}
                      </p>
                    </div>
                    <span className="font-mono-tech text-[11px] text-emerald-300">
                      B2B SaaS
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <p
                    className="text-[#525660] leading-relaxed"
                    data-testid="text-project-protonest-description"
                  >
                    {t.ventures.protonest.summary}
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-1">
                    <div className="border hairline bg-[#F6F5F1] p-4">
                      <div className="font-mono-tech text-2xl font-semibold text-[#0F766E]">
                        {t.ventures.protonest.metric1V}
                      </div>
                      <div className="text-xs text-[#525660] mt-1">
                        {t.ventures.protonest.metric1L}
                      </div>
                    </div>
                    <div className="border hairline bg-[#F6F5F1] p-4">
                      <div className="font-mono-tech text-2xl font-semibold text-[#0E1014]">
                        {t.ventures.protonest.metric2V}
                      </div>
                      <div className="text-xs text-[#525660] mt-1">
                        {t.ventures.protonest.metric2L}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 py-5 border-t hairline flex items-center justify-between bg-[#FAF9F6]">
                <span className="font-mono-tech text-xs text-[#525660]">
                  {t.ventures.protonest.footer}
                </span>
                <Link
                  href="/projeler#protonest"
                  className="text-xs font-medium text-[#0E1014] hover:text-[#1A4BFF] inline-flex items-center gap-1.5 transition-colors"
                  data-testid="button-view-protonest"
                >
                  {t.ventures.detailsBtn}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* HOW WE WORK + WHY VERILABS */}
      <section className="border-b hairline bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-14">
          <div className="grid lg:grid-cols-12 gap-8 items-end border-b hairline pb-8">
            <div className="lg:col-span-6 space-y-3">
              <div className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#1A4BFF]">
                {t.howWeWork.eyebrow}
              </div>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">
                {t.howWeWork.title}
              </h2>
            </div>
            <p className="lg:col-span-6 text-[#525660] leading-relaxed">
              {t.howWeWork.intro}
            </p>
          </div>

          <ProcessSteps />

          <div className="pt-6 grid md:grid-cols-3 gap-6">
            {t.whyVeriLabs.items.map((item) => (
              <div
                key={item.num}
                className="border hairline bg-[#F6F5F1] p-7 space-y-3"
              >
                <div className="font-mono-tech text-xs text-[#1A4BFF]">
                  {item.num}
                </div>
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-[#525660] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT & VALUES */}
      <section className="border-b hairline py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#525660]">
                {t.about.eyebrow}
              </div>
              <h2 className="text-3xl lg:text-4xl font-medium tracking-tight leading-tight">
                {t.about.title}
              </h2>
              <p className="text-[#525660] leading-relaxed pt-2">
                {t.about.lead}
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {values.map((val) => (
                <div
                  key={val.code}
                  className="bg-white border hairline p-6 space-y-2.5"
                >
                  <div className="font-mono-tech text-[11px] uppercase tracking-widest text-[#1A4BFF]">
                    {val.code}
                  </div>
                  <h3 className="font-medium text-base">{val.title}</h3>
                  <p className="text-sm text-[#525660] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP & PARTNERS */}
      <section className="border-b hairline bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b hairline pb-8">
            <div className="space-y-3">
              <div className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#525660]">
                {t.team.eyebrow}
              </div>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">
                {t.team.title}
              </h2>
            </div>
            <p className="text-[#525660] max-w-lg text-sm leading-relaxed">
              {t.team.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="team-card border hairline bg-[#F6F5F1] overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#ECEAE3]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="portrait-img w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-2 flex-1">
                  <h3 className="font-medium text-lg">{member.name}</h3>
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

      {/* CLOSING: 3-TRACK CO-BUILD / INVEST / JOIN */}
      <section className="bg-[#0E1014] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-14">
          <div className="max-w-2xl space-y-4">
            <div className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#8EA8FF]">
              {t.closing.eyebrow}
            </div>
            <h2 className="text-4xl lg:text-6xl font-medium tracking-tight">
              {t.closing.titleStart}{" "}
              <span className="font-editorial italic font-normal text-[#8EA8FF]">
                {t.closing.titleAccent}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.closing.tracks.map((track) => (
              <Link
                key={track.id}
                href={`/iletisim?track=${track.id}`}
                className="text-left border border-white/15 hover:border-[#8EA8FF] bg-white/[0.03] hover:bg-white/[0.06] p-8 flex flex-col justify-between gap-8 transition-all group"
              >
                <div className="space-y-3">
                  <div className="font-mono-tech text-xs text-[#8EA8FF]">
                    {track.code}
                  </div>
                  <h3 className="text-xl font-medium">{track.title}</h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {track.desc}
                  </p>
                </div>
                <div className="text-xs font-mono-tech uppercase tracking-wider text-white group-hover:text-[#8EA8FF] flex items-center gap-2">
                  <span>{track.cta}</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
