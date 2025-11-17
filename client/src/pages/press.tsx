import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Newspaper, Radio, FileText } from "lucide-react";
import SEO from "@/components/SEO";

const pressCategories = [
  {
    icon: Newspaper,
    title: "Lansman Duyuruları",
    status: "Yakında."
  },
  {
    icon: Radio,
    title: "Medya Haberleri",
    status: "Yakında."
  },
  {
    icon: FileText,
    title: "Blog / Lab Notları",
    status: "Yakında."
  }
];

export default function Press() {
  return (
    <>
      <SEO 
        title="Basın & Güncellemeler"
        description="Yeni projeler, lansmanlar ve exit haberleri. Verilabs'in büyüme hikayesi burada."
        path="/basin"
      />
      <div className="py-16 space-y-12">
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight" data-testid="text-page-title">
          Basın & Güncellemeler
        </h1>
        <p className="text-lg text-white/80 leading-relaxed" data-testid="text-press-intro">
          Yeni projeler, lansmanlar ve exit haberleri. Verilabs'in büyüme hikayesi burada.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 pt-8">
        {pressCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card 
              key={index}
              className="bg-primary/10 border-primary/30 backdrop-blur-sm overflow-hidden hover-elevate"
            >
              <CardHeader className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white" data-testid={`text-press-category-${index}-title`}>
                  {category.title}
                </h3>
              </CardHeader>
              <CardContent className="text-white/70">
                <p data-testid={`text-press-category-${index}-status`}>
                  {category.status}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      </div>
    </>
  );
}
