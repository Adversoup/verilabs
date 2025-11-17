import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Twitter, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import SEO from "@/components/SEO";
import bgImage from "@assets/143788494_4d4d08ff-43f6-40ed-a04f-9a2f7091ebd4_1763392609882.jpg";

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: InsertContact) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Mesaj gönderildi!",
        description: "En kısa sürede size dönüş yapacağız."
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Bir hata oluştu",
        description: "Lütfen tekrar deneyin veya doğrudan e-posta gönderin.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <>
      <SEO 
        title="İletişim"
        description="Bir fikriniz, yatırımınız veya iş birliği teklifiniz mi var? Bizimle konuşun."
        path="/iletisim"
      />
      <div className="relative min-h-screen py-16">
        <div 
          className="fixed inset-0 w-full h-full opacity-5 pointer-events-none z-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight" data-testid="text-page-title">
              İletişim
            </h1>
            <p className="text-lg text-white/80 leading-relaxed" data-testid="text-contact-intro">
              Bir fikriniz, yatırım düşünceniz, iş birliği teklifiniz ya da sadece merak ettiğiniz bir soru mu var? VeriLabs ile iletişime geçmek için resmi kanalların ötesinde, samimi bir diyalog alanı açmaya çalışıyoruz. Aşağıdaki form üzerinden bize ulaşabilir, doğrudan e-posta gönderebilir veya sosyal medya hesaplarımız üzerinden bağlantı kurabilirsiniz.
            </p>
          </div>

          {/* Why Contact Us */}
          <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm p-8">
            <h2 className="text-xl font-semibold text-white mb-4">Neden Bizimle İletişime Geçebilirsiniz?</h2>
            <ul className="text-white/70 leading-relaxed space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>VeriLabs projeleri hakkında daha detaylı bilgi almak için</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Galgo veya ProtoNest ile ilgili iş birliği imkanlarını konuşmak için</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Yeni bir AI projesi fikrini birlikte değerlendirmek için</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Yatırım veya ortaklık modelleri hakkında bilgi alışverişi için</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Ekibimizle tanışmak, kültürümüzü daha yakından görmek için</span>
              </li>
            </ul>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm overflow-hidden">
                <CardHeader>
                  <h2 className="text-xl font-semibold text-white" data-testid="text-form-title">
                    Mesaj Gönderin
                  </h2>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">Adınız</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Adınız Soyadınız"
                                className="bg-primary/5 border-primary/30 text-white placeholder:text-white/40"
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
                            <FormLabel className="text-white/80">E-posta</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="ornek@email.com"
                                className="bg-primary/5 border-primary/30 text-white placeholder:text-white/40"
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
                            <FormLabel className="text-white/80">Mesajınız</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Mesajınızı buraya yazın..."
                                rows={6}
                                className="bg-primary/5 border-primary/30 text-white placeholder:text-white/40 resize-none"
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage data-testid="error-message" />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={contactMutation.isPending}
                        className="w-full bg-primary hover:bg-primary/90"
                        data-testid="button-submit"
                      >
                        {contactMutation.isPending ? "Gönderiliyor..." : "Gönder"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm overflow-hidden">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="text-sm font-medium text-white/80 mb-1">E-posta</div>
                      <a 
                        href="mailto:info@verilabs.ai" 
                        className="text-white hover:text-primary transition-colors"
                        data-testid="link-email"
                      >
                        info@verilabs.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="text-sm font-medium text-white/80 mb-1">Konum</div>
                      <p className="text-white" data-testid="text-location">İstanbul, Türkiye</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm overflow-hidden">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-white">Sosyal Medya</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a 
                    href="https://www.linkedin.com/company/verilabs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                    data-testid="link-social-linkedin"
                  >
                    <Linkedin size={20} className="text-primary" />
                    LinkedIn
                  </a>
                  <a 
                    href="https://x.com/verilabs_ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                    data-testid="link-social-twitter"
                  >
                    <Twitter size={20} className="text-primary" />
                    X (Twitter)
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
