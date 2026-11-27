import { useState } from "react";
import { PROCESS_STEPS, useLanguage } from "@/lib/i18n";

export default function ProcessSteps() {
  const { lang, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const steps = PROCESS_STEPS[lang];
  const current = steps[activeIndex];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-mono-tech uppercase tracking-widest text-[#525660]">
          {t.howWeWork.stepsHeading}
        </h3>
        <span className="font-mono-tech text-xs text-[#525660]">
          {t.howWeWork.stepsHint}
        </span>
      </div>

      <div className="grid sm:grid-cols-5 gap-3">
        {steps.map((step, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={step.num}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`text-left p-4 border transition-all ${
                isActive
                  ? "bg-[#0E1014] text-white border-[#0E1014]"
                  : "bg-[#F6F5F1] text-[#0E1014] hairline hover:border-[#0E1014]"
              }`}
              data-testid={`button-process-step-${idx + 1}`}
            >
              <div
                className={`font-mono-tech text-xs mb-2 ${
                  isActive ? "text-[#8EA8FF]" : "text-[#1A4BFF]"
                }`}
              >
                {step.num}
              </div>
              <div className="text-sm font-medium leading-snug">{step.title}</div>
            </button>
          );
        })}
      </div>

      <div className="bg-[#0E1014] text-white p-8 lg:p-10 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4">
          <div className="font-mono-tech text-xs text-[#8EA8FF] uppercase tracking-widest">
            {current.code}
          </div>
          <div className="text-2xl lg:text-3xl font-medium mt-2">{current.title}</div>
        </div>
        <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-8">
          <p className="text-white/80 text-lg leading-relaxed">{current.desc}</p>
        </div>
      </div>
    </div>
  );
}
