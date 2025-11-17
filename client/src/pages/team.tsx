import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users } from "lucide-react";
import SEO from "@/components/SEO";

const teamMembers = [
  {
    name: "Levent Gözener",
    role: "Founder & Product Architect",
    initials: "LG"
  },
  {
    name: "[isim]",
    role: "AI Engineer",
    initials: "AI"
  },
  {
    name: "[isim]",
    role: "Frontend Developer",
    initials: "FD"
  },
  {
    name: "[isim]",
    role: "Data Scientist",
    initials: "DS"
  },
  {
    name: "[isim]",
    role: "Growth & Partnerships",
    initials: "GP"
  }
];

export default function Team() {
  return (
    <>
      <SEO 
        title="Ekibimiz"
        description="Biz mühendis, stratejist ve yaratıcıların aynı masada oturduğu bir ekibiz. Her biri farklı bir disiplinden gelse de ortak noktamız aynı: geleceği kodlamak."
        path="/ekibimiz"
      />
      <div className="py-16 space-y-12">
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight" data-testid="text-page-title">
          Ekibimiz
        </h1>
        <p className="text-lg text-white/80 leading-relaxed" data-testid="text-team-intro">
          Biz mühendis, stratejist ve yaratıcıların aynı masada oturduğu bir ekibiz. Her biri farklı bir disiplinden gelse de ortak noktamız aynı: geleceği kodlamak.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        {teamMembers.map((member, index) => (
          <Card 
            key={index}
            className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden hover-elevate"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <Avatar className="w-16 h-16 bg-primary/10 border-2 border-primary/20">
                <AvatarFallback className="bg-primary/10 text-primary text-lg font-medium">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <h3 className="text-lg font-semibold text-white" data-testid={`text-team-member-${index}-name`}>
                  {member.name}
                </h3>
                <p className="text-sm text-white/60" data-testid={`text-team-member-${index}-role`}>
                  {member.role}
                </p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Advisors Section */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden mt-12">
        <CardHeader className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white" data-testid="text-advisors-title">
              Danışmanlar
            </h3>
          </div>
        </CardHeader>
        <CardContent className="text-white/80 leading-relaxed">
          <p data-testid="text-advisors-description">
            Akademi ve endüstri iş birliklerinden gelen teknik ve finansal mentörler.
          </p>
        </CardContent>
      </Card>
      </div>
    </>
  );
}
