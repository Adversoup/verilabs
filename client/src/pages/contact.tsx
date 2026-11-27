import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, MapPin, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEO from "@/components/SEO";
import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const initialTrack =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("track") || "founder"
      : "founder";
  const [selectedTrack, setSelectedTrack] = useState<string>(initialTrack);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: InsertContact) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: t.contact.successTitle,
        description: t.contact.successDesc,
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: t.contact.errorTitle,
        description: t.contact.errorDesc,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    const activeTrackObj = t.closing.tracks.find((tr) => tr.id === selectedTrack);
    const prefix = activeTrackObj ? `[${activeTrackObj.title}] ` : "";
    contactMutation.mutate({
      ...data,
      message: `${prefix}${data.message}`,
    });
  };

  return (
    <>
      <SEO title={t.nav.contact} description={t.contact.intro} path="/iletisim" />

      <section className="border-b hairline grid-bg py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-5">
          <div className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#1A4BFF]">
            {t.contact.eyebrow}
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0E1014]"
            data-testid="text-page-title"
          >
            {t.contact.title}
          </h1>
          <p
            className="text-lg text-[#525660] max-w-2xl leading-relaxed"
            data-testid="text-contact-intro"
          >
            {t.contact.intro}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          {/* Form Column */}
          <div className="lg:col-span-8 bg-white border hairline p-8 lg:p-10 space-y-8">
            <div className="space-y-3">
              <div className="font-mono-tech text-xs uppercase tracking-widest text-[#525660]">
                {t.contact.selectTopic}
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {t.closing.tracks.map((track) => {
                  const active = selectedTrack === track.id;
                  return (
                    <button
                      key={track.id}
                      type="button"
                      onClick={() => setSelectedTrack(track.id)}
                      className={`text-left p-4 border transition-colors ${
                        active
                          ? "bg-[#0E1014] text-white border-[#0E1014]"
                          : "bg-[#F6F5F1] text-[#0E1014] hairline hover:border-[#0E1014]"
                      }`}
                    >
                      <div
                        className={`font-mono-tech text-[10px] mb-1 ${
                          active ? "text-[#8EA8FF]" : "text-[#1A4BFF]"
                        }`}
                      >
                        {track.code}
                      </div>
                      <div className="text-xs font-medium">{track.title}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t hairline pt-8 space-y-6">
              <h2
                className="text-xl font-medium text-[#0E1014]"
                data-testid="text-form-title"
              >
                {t.contact.formTitle}
              </h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono-tech text-xs uppercase text-[#525660]">
                          {t.contact.nameLabel}
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder={t.contact.namePlaceholder}
                            className="bg-[#F6F5F1] border-[#DCD9CF] text-[#0E1014] rounded-none h-11 focus-visible:ring-[#1A4BFF]"
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage data-testid="error-name" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono-tech text-xs uppercase text-[#525660]">
                          {t.contact.emailLabel}
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder={t.contact.emailPlaceholder}
                            className="bg-[#F6F5F1] border-[#DCD9CF] text-[#0E1014] rounded-none h-11 focus-visible:ring-[#1A4BFF]"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage data-testid="error-email" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono-tech text-xs uppercase text-[#525660]">
                          {t.contact.msgLabel}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder={t.contact.msgPlaceholder}
                            rows={5}
                            className="bg-[#F6F5F1] border-[#DCD9CF] text-[#0E1014] rounded-none resize-none focus-visible:ring-[#1A4BFF]"
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage data-testid="error-message" />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0E1014] hover:bg-[#1A4BFF] disabled:opacity-60 text-white text-sm font-medium py-3.5 transition-colors"
                    data-testid="button-submit"
                  >
                    {contactMutation.isPending
                      ? t.contact.submitting
                      : t.contact.submit}
                    <ArrowRight size={15} />
                  </button>
                </form>
              </Form>
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border hairline p-7 space-y-6">
              <div className="flex items-start gap-3.5">
                <Mail className="text-[#1A4BFF] mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <div className="font-mono-tech text-[11px] uppercase text-[#525660]">
                    {t.contact.directEmail}
                  </div>
                  <a
                    href="mailto:info@verilabs.ai"
                    className="text-sm font-medium text-[#0E1014] hover:text-[#1A4BFF] transition-colors"
                    data-testid="link-email"
                  >
                    info@verilabs.ai
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t hairline pt-5">
                <MapPin className="text-[#1A4BFF] mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <div className="font-mono-tech text-[11px] uppercase text-[#525660]">
                    {t.contact.location}
                  </div>
                  <p className="text-sm font-medium text-[#0E1014]" data-testid="text-location">
                    {t.contact.locationVal}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border hairline p-7 space-y-4">
              <div className="font-mono-tech text-[11px] uppercase tracking-widest text-[#525660]">
                {t.contact.social}
              </div>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/company/verilabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#0E1014] hover:text-[#1A4BFF] transition-colors"
                  data-testid="link-social-linkedin"
                >
                  <Linkedin size={16} className="text-[#1A4BFF]" />
                  LinkedIn
                </a>
                <a
                  href="https://x.com/verilabs_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#0E1014] hover:text-[#1A4BFF] transition-colors"
                  data-testid="link-social-twitter"
                >
                  <Twitter size={16} className="text-[#1A4BFF]" />
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
