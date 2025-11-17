import { Link } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Building2, Users, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const partnershipTypes = [
  {
    icon: DollarSign,
    title: "Yatırımcılar İçin",
    description: "Yeni nesil AI projelerine erken aşamada dahil olun."
  },
  {
    icon: Building2,
    title: "Kurumsal İş Birlikleri İçin",
    description: "VeriLabs teknolojilerini kendi markanıza entegre edin."
  },
  {
    icon: Users,
    title: "Mentörler & Danışmanlar",
    description: "Deneyimimizi paylaşın, birlikte üretelim."
  }
];

export default function Partner() {
  return (
    <>
      <SEO 
        title="Partner Olun"
        description="VeriLabs'in büyüme hikayesinin bir parçası olun. Yatırımcılar, kurumsal partnerler ve deneyimli mentörler ile birlikte geleceği şekillendiriyoruz."
        path="/partner"
      />
      <div className="py-16 space-y-12">
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight" data-testid="text-page-title">
          Partner Olun
        </h1>
        <p className="text-lg text-white/80 leading-relaxed" data-testid="text-partner-intro">
          VeriLabs'in büyüme hikayesinin bir parçası olun. Yatırımcılar, kurumsal partnerler ve deneyimli mentörler ile birlikte geleceği şekillendiriyoruz.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 pt-8">
        {partnershipTypes.map((type, index) => {
          const Icon = type.icon;
          return (
            <Card 
              key={index}
              className="bg-primary/10 border-primary/30 backdrop-blur-sm overflow-hidden hover-elevate"
            >
              <CardHeader className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white" data-testid={`text-partnership-${index}-title`}>
                  {type.title}
                </h3>
              </CardHeader>
              <CardContent className="text-white/80 leading-relaxed">
                <p data-testid={`text-partnership-${index}-description`}>
                  {type.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="pt-8">
        <Link href="/iletisim">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 gap-2"
            data-testid="button-contact-us"
          >
            Bizimle İletişime Geçin
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
      </div>
    </>
  );
}
