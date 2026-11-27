import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "tr" | "en";

export interface TeamMember {
  id: string;
  name: string;
  image: string;
  role: { tr: string; en: string };
  bio: { tr: string; en: string };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "sakir",
    name: "Prof. Dr. Şakir Erdem",
    image: "/images/sakir.jpeg",
    role: {
      tr: "Yönetim Kurulu Başkanı",
      en: "Chairman of the Board",
    },
    bio: {
      tr: "Pazarlama ve marka yönetimi alanında akademik çalışmaları olan deneyimli bir akademisyen. Marka stratejisi ve tüketici davranışı konularında katkı sağlar.",
      en: "Experienced academic with research in marketing and brand management. Contributes on brand strategy and consumer behaviour.",
    },
  },
  {
    id: "goktug",
    name: "Göktuğ Yücekul",
    image: "/images/goktug.jpeg",
    role: {
      tr: "Yönetim Kurulu Başkan Yardımcısı",
      en: "Vice Chairman of the Board",
    },
    bio: {
      tr: "VeriLabs'te operasyonlardan, müşteri ilişkilerinden ve iş geliştirmeden sorumludur. ABD'de yüksek lisans yapmış, ulusal ve uluslararası ajanslarda çalışmış; uzun yıllardır kurumsal iletişim ve iş geliştirme alanında deneyim kazanmıştır.",
      en: "Leads operations, client relations and business development at VeriLabs. Holds a master's degree from the US, has worked at national and international agencies, and brings deep experience in corporate communications and business development.",
    },
  },
  {
    id: "levent",
    name: "Levent Gözener",
    image: "/images/levent.jpeg",
    role: {
      tr: "CTO",
      en: "CTO",
    },
    bio: {
      tr: "VeriLabs'in ürün vizyonunu belirler; teknik mimari ile iş modeli arasında köprü kurar. Farklı sektörlerde edindiği deneyimi yapay zekâ ve SaaS ürünlerine taşır.",
      en: "Sets VeriLabs' product vision and bridges technical architecture with the business model. Brings experience from several industries to AI and SaaS products.",
    },
  },
  {
    id: "gokhan",
    name: "Gökhan Yücel",
    image: "/images/gokhan.jpeg",
    role: {
      tr: "Partner",
      en: "Partner",
    },
    bio: {
      tr: "VeriLabs projelerinin, özellikle ProtoNest'in marka yönetimi, pazarlama stratejisi ve uluslararası açılımını yürütür. Kendi ajansını kurmuş, global ve yerel markalarla 20'den fazla ülkede proje yönetmiştir.",
      en: "Leads brand management, marketing strategy and international expansion for VeriLabs ventures, especially ProtoNest. Founded his own agency and has run projects with global and local brands in more than 20 countries.",
    },
  },
  {
    id: "gokcen",
    name: "Cahit Gökçen Yücel",
    image: "/images/gokcen.jpeg",
    role: {
      tr: "Partner",
      en: "Partner",
    },
    bio: {
      tr: "Reklam planlaması, iletişim stratejisi, marka görünürlüğü ve sektörel iş birliklerinden sorumludur.",
      en: "Responsible for advertising planning, communication strategy, brand visibility and industry partnerships.",
    },
  },
  {
    id: "burak",
    name: "Prof. Dr. Sabri Burak Arzova",
    image: "/images/burak.jpeg",
    role: {
      tr: "Partner",
      en: "Partner",
    },
    bio: {
      tr: "Finansal piyasalar ve kurumsal finans alanında uzman akademisyen. VeriLabs'e finansal modelleme ve yatırım stratejisi konularında katkı sağlar.",
      en: "Academic specialising in financial markets and corporate finance. Contributes to VeriLabs on financial modelling and investment strategy.",
    },
  },
];

export const PROCESS_STEPS = {
  tr: [
    {
      num: "01",
      code: "AŞAMA 01 / 05",
      title: "Problemi tanımla",
      desc: "Çözümden önce problemi netleştiririz: hangi sektörde, kimin için, hangi maliyet ya da verimsizlik?",
    },
    {
      num: "02",
      code: "AŞAMA 02 / 05",
      title: "Yapay zekânın farkını bul",
      desc: "Yapay zekânın bu problemde gerçekten fark yaratacağı noktayı, gereken veriyi ve çıktıyı belirleriz.",
    },
    {
      num: "03",
      code: "AŞAMA 03 / 05",
      title: "İlk sürümü çıkar",
      desc: "Gereksiz özelliklerle zaman kaybetmeden, problemin özünü test eden ilk çalışan sürümü (MVP) geliştiririz. Kullanıcı geri bildirimi en baştan tasarımın parçasıdır.",
    },
    {
      num: "04",
      code: "AŞAMA 04 / 05",
      title: "Pazarda doğrula",
      desc: "Ürünün gerçekten değer üretip üretmediğini, kullanıcının ödeme isteğini ve büyüme potansiyelini ölçeriz.",
    },
    {
      num: "05",
      code: "AŞAMA 05 / 05",
      title: "Şirkete dönüştür",
      desc: "Tutan ürünü kendi markası ve ekibiyle bağımsız bir şirket olarak ayırır, yatırıma ve büyümeye hazırlarız.",
    },
  ],
  en: [
    {
      num: "01",
      code: "STAGE 01 / 05",
      title: "Define the problem",
      desc: "We pin down the problem before the solution: which industry, for whom, what cost or inefficiency?",
    },
    {
      num: "02",
      code: "STAGE 02 / 05",
      title: "Find where AI makes the difference",
      desc: "We identify where AI genuinely changes the outcome, what data it needs, and what it should deliver.",
    },
    {
      num: "03",
      code: "STAGE 03 / 05",
      title: "Ship the first version",
      desc: "We build an MVP that tests the core of the problem, skipping nice-to-have features. User feedback is designed in from the start.",
    },
    {
      num: "04",
      code: "STAGE 04 / 05",
      title: "Validate in the market",
      desc: "We measure whether the product creates real value, whether users will pay, and how far it can grow.",
    },
    {
      num: "05",
      code: "STAGE 05 / 05",
      title: "Spin it out",
      desc: "Products that work become independent companies with their own brand and team, ready for investment and growth.",
    },
  ],
};

export const VALUES_LIST = {
  tr: [
    {
      code: "DEĞER 01",
      title: "Doğruluk ve şeffaflık",
      desc: "Metrikleri süslemeyiz, sorunları saklamayız. Bir proje beklendiği gibi ilerlemiyorsa bunu açıkça söyler, yön değiştirme kararını veriye bakarak veririz.",
    },
    {
      code: "DEĞER 02",
      title: "Bilimsel düşünce",
      desc: "Varsayımlarımızı test eder, hipotezlerimizi deneyle doğrularız. Sezgiye değil, veriye bakarız.",
    },
    {
      code: "DEĞER 03",
      title: "Öğrenme isteği",
      desc: "Her proje bir öncekinin üzerine inşa edilir. Teknolojilerimizi, süreçlerimizi ve iş ortaklıklarımızı sürekli iyileştiririz.",
    },
    {
      code: "DEĞER 04",
      title: "İnsan odaklılık",
      desc: "Yapay zekâyı insanların yerine değil, onların daha kolay, bilinçli ve verimli karar vermesi için kullanırız.",
    },
  ],
  en: [
    {
      code: "VALUE 01",
      title: "Honesty and transparency",
      desc: "We don't dress up metrics or hide problems. If a project isn't on track, we say so and make pivot decisions based on data.",
    },
    {
      code: "VALUE 02",
      title: "Scientific thinking",
      desc: "We test our assumptions and validate hypotheses through experiments. We follow the data, not gut feeling.",
    },
    {
      code: "VALUE 03",
      title: "Hunger to learn",
      desc: "Every project builds on the last. We keep refining our technologies, processes and partnerships.",
    },
    {
      code: "VALUE 04",
      title: "Human-centred",
      desc: "We use AI not to replace people, but to help them make easier, better-informed and more efficient decisions.",
    },
  ],
};

export const COPY = {
  tr: {
    siteTitle: "VeriLabs – Yapay Zekâ Girişim Stüdyosu",
    siteDesc:
      "VeriLabs, yapay zekâ tabanlı ürünleri kendi bünyesinde tasarlar, gerçek kullanıcılarla test eder ve başarılı olanları bağımsız şirketlere dönüştürür.",
    nav: {
      projects: "Projelerimiz",
      model: "Nasıl Çalışıyoruz",
      about: "Hakkımızda",
      team: "Ekibimiz",
      contact: "İletişime Geç",
    },
    hero: {
      eyebrow: "Yapay zekâ girişim stüdyosu",
      headlineLine1: "Fikirden ürüne,",
      headlineLine2: "üründen şirkete.",
      subtext:
        "VeriLabs, yapay zekâ tabanlı ürünleri kendi bünyesinde tasarlar, gerçek kullanıcılarla test eder ve başarılı olanları bağımsız şirketlere dönüştürür.",
      ctaPrimary: "Projelerimiz",
      ctaSecondary: "Nasıl çalışıyoruz?",
      cardLabel: "STUDIO MODELİ",
      stat1K: "Odak",
      stat1V: "AI-Native Ürünler & Şirketler",
      stat2K: "Aktif Girişimler",
      stat3K: "Yaklaşım",
      stat3V: "Ajans değil, kurucu ortak",
    },
    thesis: {
      whatEyebrow: "NE YAPIYORUZ?",
      whatTitle: "Her projeye ilk günden bir şirket adayı gibi bakarız.",
      whatP1:
        "Bir problemi seçer, yapay zekânın gerçekten fark yaratacağı noktayı buluruz. Hızlıca ilk çalışan sürümü çıkarır, gerçek kullanıcılarla deneriz. Tutan ürünü kendi ekibi, markası ve yatırım planı olan bir şirkete dönüştürürüz.",
      whatP2:
        "Bu yüzden her projeye ilk günden bir şirket adayı gibi bakarız: teknik altyapısı, gelir modeli ve büyüme planı birlikte kurgulanır.",
      whyAiEyebrow: "NEDEN YAPAY ZEKÂ?",
      whyAiTitle: "Eklenti değil, ürünün temel mimari katmanı.",
      whyAiP1:
        "Yapay zekâ artık bir ürüne sonradan eklenen bir özellik değil; ürünün nasıl çalışacağını baştan belirleyen bir katman. Biz ürünlerimizi bu katmanın üzerine kurarız. Böylece her ürün, kullanıldıkça veriyle beslenir ve daha isabetli hale gelir.",
      layer1K: "Girdi",
      layer1V: "Gerçek Veri",
      layer2K: "Çekirdek",
      layer2V: "AI Karar Motoru",
      layer3K: "Çıktı",
      layer3V: "Ölçekli Şirket",
    },
    ventures: {
      eyebrow: "PORTFÖY / VENTURES",
      title: "Projelerimiz",
      subtitle: "Tüketiciden üreticiye, günlük kararları kolaylaştıran ürünler.",
      detailsBtn: "Detaylar",
      galgo: {
        eyebrow: "VENTURE 01 · AI COMMERCE · PERSONAL SHOPPING INTELLIGENCE",
        status: "Beta",
        tagline: "Alışverişin gerçekleştiği her yerde çalışan kişisel yapay zekâ.",
        summary:
          "Galgo, kullanıcıların stilini, tercihlerini, ihtiyaçlarını ve alışveriş alışkanlıklarını öğrenerek daha akıllı satın alma kararları vermelerini sağlayan yapay zekâ destekli bir kişisel alışveriş zekâsı platformudur.",
        intro2:
          "Geleneksel alışveriş asistanlarından farklı olarak Galgo, kullanıcıların yeni bir platforma gelmesini beklemek yerine, alışveriş deneyiminin gerçekleştiği ortamlara entegre olmayı hedefler.",
        intro3:
          "Browser extension, embedded SDK ve API-first mimarisiyle Galgo; e-ticaret sitelerinin, dijital pazar yerlerinin ve AI destekli alışveriş platformlarının kullanabileceği bağımsız bir karar ve kişiselleştirme katmanı olarak geliştirilmektedir.",
        vision:
          "Galgo'nun vizyonu, ürünleri yalnızca arayan değil; kullanıcıyı tanıyan, ihtiyaçlarını anlayan ve doğru satın alma kararını doğru zamanda destekleyen bir alışveriş zekâsı oluşturmaktır.",
        pillars: [
          {
            title: "Personal Shopping Intelligence",
            subtitle: "Kullanıcıyı tanıyan, tercihlerini hatırlayan alışveriş zekâsı.",
            desc: "Galgo, kullanıcıların kişisel stilini, bütçesini, ürün tercihlerini ve alışveriş niyetini analiz ederek ürünleri kişiye özel olarak değerlendirir. Zaman içerisinde gelişen kullanıcı profili, daha anlamlı önerilerin ve isabetli alışveriş kararlarının temelini oluşturur.",
          },
          {
            title: "Contextual Shopping Assistant",
            subtitle: "Alışveriş deneyiminin tam içinde, doğru anda.",
            desc: "Galgo'nun browser extension yaklaşımı, kullanıcıların ziyaret ettikleri ürün sayfalarında kişiselleştirilmiş analiz ve önerilere erişmesini hedefler. Kullanıcı farklı mağazalarda alışveriş yaparken aynı kişisel tercih ve ihtiyaç profilinden yararlanabilir.",
          },
          {
            title: "Smart Wishlist & Opportunity Tracking",
            subtitle: "İhtiyaçları hatırlayan, fırsatları takip eden kişisel asistan.",
            desc: "Galgo, kullanıcıların beğendikleri ürünleri, moodboard'larını ve satın alma hedeflerini bir araya getirir. Fiyat ve stok verilerinin erişilebilir olduğu kaynaklarda, seçilen ürünlerin takip edilmesi ve uygun fırsatlar oluştuğunda kullanıcıların bilgilendirilmesi hedeflenir.",
          },
          {
            title: "Commerce Intelligence API & SDK",
            subtitle: "Mevcut commerce platformları için entegre edilebilir AI.",
            desc: "Galgo'nun API-first mimarisi, kişiselleştirme ve satın alma karar yeteneklerini üçüncü taraf platformların kullanımına açmayı hedefler. E-ticaret şirketleri, marketplace'ler ve AI commerce uygulamaları Galgo'nun karar motorunu kendi kullanıcı deneyimlerine entegre ederek mevcut ürün kataloglarını kişisel önerilere dönüştürebilir.",
          },
        ],
        evolutionTitle: "From Shopping Assistant to Shopping Intelligence",
        evolutionP1:
          "Galgo, bağımsız bir alışveriş asistanı olarak başlayan yolculuğunu, dijital ticaret ekosisteminin farklı noktalarında kullanılabilecek bir yapay zekâ altyapısına dönüştürüyor.",
        evolutionP2:
          "Kişisel stil analizi, AI sohbet asistanı, Pinterest destekli ilham ve keşif deneyimi, moodboard ve wishlist gibi mevcut yetenekler; platformdan bağımsız çalışabilen yeni bir kişiselleştirme mimarisinin temelini oluşturuyor.",
        motto: "One intelligence. Every shopping experience.",
        tags: [
          "Browser Extension",
          "Embedded SDK",
          "API-First",
          "Shopping Intelligence",
        ],
        footer: "AI Commerce · Personal Shopping Intelligence",
      },
      protonest: {
        status: "Pilot",
        tagline:
          "Üretim yapan KOBİ'ler için yapay zekâ destekli nesting & maliyet zekâsı",
        summary:
          "ProtoNest, 2D ve 3D çizimleri okuyarak malzemenin levha üzerine en verimli şekilde yerleştirilmesini (nesting) hesaplar ve fireyi azaltır. Üretici, daha tasarım aşamasında maliyetini ve malzeme kullanımını görür.",
        metric1V: "%15–20",
        metric1L: "Malzeme firesinde azalma",
        metric2V: "2D / 3D",
        metric2L: "CAD çizimden anlık maliyet",
        footer: "Üretim Optimizasyonu · Industrial AI",
      },
    },
    whyVeriLabs: {
      eyebrow: "NEDEN VERILABS?",
      title: "Tek çatı altında disiplinler arası şirket inşası.",
      items: [
        {
          num: "01",
          title: "Tek çatı, tüm disiplinler",
          desc: "Mühendislik, ürün, pazarlama ve finans aynı ekipte; kararlar tek bir bakış açısına sıkışmaz.",
        },
        {
          num: "02",
          title: "Erken doğrulama",
          desc: "Kod yazmadan önce problemi, yayına almadan önce kullanıcının ödeme isteğini test ederiz.",
        },
        {
          num: "03",
          title: "Portföy yaklaşımı",
          desc: "Riski tek bir fikre bağlamayız; işe yaramayanı hızla bırakır, işe yarayana odaklanırız.",
        },
      ],
    },
    howWeWork: {
      eyebrow: "GİRİŞİM STÜDYOSU MODELİ",
      title: "Nasıl çalışıyoruz",
      intro:
        "VeriLabs bir girişim stüdyosudur. Müşteri için proje teslim eden bir ajans değiliz; kendi ürünlerimizi geliştirir, her birini ileride bağımsız bir şirkete dönüşecek bir aday olarak büyütürüz.",
      stepsHeading: "Beş adımda fikirden şirkete",
      stepsHint: "Adımlara tıklayarak inceleyin",
      whatIsTitle: "Girişim stüdyosu ne demek?",
      whatIsDesc:
        "Girişim stüdyosu (uluslararası adıyla venture studio), tek tek fikirleri beklemek yerine yeni şirketleri sistemli bir şekilde kuran bir yapıdır. Fikir içeriden ya da dışarıdan gelebilir. Stüdyo fikri değerlendirir, ilk ürünü geliştirir, pazarda test eder ve tutan ürünü kendi ekibi ve yatırımı olan ayrı bir şirkete dönüştürür.",
      whyModelTitle: "Neden bu model?",
      whyModelDesc:
        "Bugün iyi bir fikir tek başına yetmiyor. Fikrin hızlıca test edilmesi, doğru ekiple geliştirilmesi ve sürdürülebilir bir gelir modeline oturtulması gerekiyor. Girişim stüdyosu modeli bu süreci şansa bırakmaz, bir yönteme bağlar.",
      diffTitle: "VeriLabs'ı farklı kılan ne?",
      diffItems: [
        "Her ürünü yapay zekâ ve veri üzerine kurarız.",
        "Kararları yalnızca teknik değil, iş modeli açısından da alırız.",
        "Birden fazla projeyle riski dağıtırız.",
        "Ürünleri ilk günden uzun vadeli değer ve yatırım potansiyeliyle kurgularız.",
      ],
      foundersTitle: "Fikri olanlarla nasıl çalışıyoruz?",
      foundersDesc:
        "Yapay zekâyla çözülebilecek bir problem gören girişimcilerle ortak kurucu olarak çalışırız. Ekip, teknoloji ve iş geliştirme desteğini biz sağlarız; kurulan şirkette ortaklık üzerinden birlikte büyürüz. Hizmet olarak yazılım geliştirme yapmıyoruz.",
    },
    about: {
      eyebrow: "HAKKIMIZDA",
      title:
        "Türkiye'den çıkıp dünyada etki yaratmayı hedefleyen bir yapay zekâ girişim stüdyosu.",
      lead:
        "VeriLabs, yapay zekâ ürünleri geliştirip bunları şirketleştiren bir girişim stüdyosudur. Amacımız tek seferlik uygulamalar teslim etmek değil; sürdürülebilir ürünler ve büyüyebilen şirketler kurmak.",
      missionTitle: "Misyonumuz",
      missionDesc:
        "Karmaşık problemleri sade, uygulanabilir ve ölçülebilir çözümlere dönüştürmek. Her projede gerçek bir problemi hedefler, net bir değer önerisi tanımlar ve kullanıcının hayatında ölçülebilir bir fark yaratmaya odaklanırız.",
      visionTitle: "Vizyonumuz",
      visionDesc:
        "Türkiye'den çıkıp dünyada etki yaratmayı hedefleyen bir yapay zekâ girişim stüdyosu olmak. Bu yüzden her ürünü ilk günden uluslararası pazara uygun kurgularız: teknik mimariden markaya, lisans modelinden entegrasyonlara kadar.",
      approachTitle: "Yaklaşımımız",
      approachItems: [
        "Fikirden ürüne, üründen şirkete giden yolu birlikte tasarlamak",
        "Kararları veriye ve kullanıcı geri bildirimine dayandırmak",
        "Hızlı prototip çıkarmak ve sürekli doğrulamak",
        "Yatırım ve büyüme potansiyelini en baştan planlamak",
      ],
      valuesTitle: "Değerlerimiz",
    },
    team: {
      eyebrow: "YÖNETİM & PARTNERLER",
      title: "Ekibimiz",
      subtitle:
        "Mühendislik, ürün, iş geliştirme, pazarlama ve finans alanlarından gelen insanlar aynı masada çalışıyor. Bu sayede her karar teknik uygulanabilirlik, kullanıcı deneyimi ve iş modeli açısından birlikte değerlendiriliyor.",
      howTitle: "Nasıl çalışıyoruz?",
      howItems: [
        "Hiyerarşi yerine net sorumluluk alanları",
        "Uzun toplantılar yerine gündemi belli kısa oturumlar",
        "Kod kalitesi kadar doğru problemi seçmeye de önem",
        "Sürekli öğrenme ve bilgi paylaşımı",
      ],
      joinTitle: "Bize katılın",
      joinDesc:
        "Güçlü bir CV'den çok güçlü katkıya önem veriyoruz. Meraklı, veriye ve geri bildirime açık, \"bu iş daha iyi nasıl yapılır?\" sorusunu her gün soran insanlarla çalışmak istiyoruz.",
      joinCta: "Bize yazın",
    },
    closing: {
      eyebrow: "İLETİŞİM & ORTAKLIK",
      titleStart: "Birlikte",
      titleAccent: "inşa edelim.",
      tracks: [
        {
          id: "founder",
          code: "01 / CO-FOUNDERS",
          title: "Fikriniz mi var?",
          desc: "Yapay zekâyla çözülebilecek bir problem görüyorsanız, ortak kurucu olarak birlikte çalışabiliriz.",
          cta: "Bize anlatın",
        },
        {
          id: "investor",
          code: "02 / INVESTORS",
          title: "Yatırımcı mısınız?",
          desc: "Portföyümüzü, aktif girişimlerimizi ve küresel yol haritamızı paylaşalım.",
          cta: "Görüşme planla",
        },
        {
          id: "talent",
          code: "03 / CAREERS",
          title: "Ekibe katılmak mı istiyorsunuz?",
          desc: "Güçlü CV'den çok güçlü katkıya önem veriyoruz. Meraklı, veriye açık insanlar arıyoruz.",
          cta: "Bize yazın",
        },
      ],
    },
    contact: {
      eyebrow: "İLETİŞİM",
      title: "Birlikte inşa edelim.",
      intro:
        "Bir fikriniz, yatırım düşünceniz, iş birliği teklifiniz ya da ekibimize katılma isteğiniz varsa bizimle doğrudan iletişime geçin.",
      selectTopic: "Konu seçin",
      formTitle: "Mesaj gönderin",
      nameLabel: "Ad Soyad",
      namePlaceholder: "Adınız Soyadınız",
      emailLabel: "E-posta",
      emailPlaceholder: "ornek@sirket.com",
      msgLabel: "Mesajınız",
      msgPlaceholder: "Projeniz, fikriniz veya iş birliği konunuz hakkında kısa bilgi...",
      submit: "Mesajı Gönder",
      submitting: "Gönderiliyor...",
      successTitle: "Mesajınız gönderildi",
      successDesc: "En kısa sürede size dönüş yapacağız.",
      errorTitle: "Bir hata oluştu",
      errorDesc: "Lütfen tekrar deneyin veya info@verilabs.ai adresine e-posta gönderin.",
      directEmail: "E-posta",
      location: "Konum",
      locationVal: "İstanbul, Türkiye",
      social: "Sosyal Medya",
    },
    footer: {
      desc: "Yapay zekâ girişim stüdyosu",
      pages: "Sayfalar",
      ventures: "Girişimler",
      connect: "Bağlantı",
    },
  },
  en: {
    siteTitle: "VeriLabs – AI Venture Studio",
    siteDesc:
      "VeriLabs designs AI-native products in-house, tests them with real users, and turns the ones that work into independent companies.",
    nav: {
      projects: "Ventures",
      model: "How We Work",
      about: "About Us",
      team: "Team",
      contact: "Get in Touch",
    },
    hero: {
      eyebrow: "AI venture studio",
      headlineLine1: "From idea to product,",
      headlineLine2: "from product to company.",
      subtext:
        "VeriLabs designs AI-native products in-house, tests them with real users, and turns the ones that work into independent companies.",
      ctaPrimary: "Our ventures",
      ctaSecondary: "How we work",
      cardLabel: "STUDIO MODEL",
      stat1K: "Focus",
      stat1V: "AI-Native Products & Companies",
      stat2K: "Active Ventures",
      stat3K: "Model",
      stat3V: "Co-founder, not an agency",
    },
    thesis: {
      whatEyebrow: "WHAT WE DO",
      whatTitle: "We treat every project as a company from day one.",
      whatP1:
        "We pick a real problem and find where AI makes a genuine difference. We ship a first working version fast and put it in front of real users. Products that gain traction become companies with their own team, brand and investment plan.",
      whatP2:
        "That is why we treat every project as a company from day one: its technology, revenue model and growth plan are designed together.",
      whyAiEyebrow: "WHY AI AT THE CORE",
      whyAiTitle: "Not an add-on feature, but the foundational layer.",
      whyAiP1:
        "AI is no longer a feature added on top of a product; it defines how the product works from the start. We build our products on that layer, so each one learns from usage and gets sharper over time.",
      layer1K: "Input",
      layer1V: "Real Usage Data",
      layer2K: "Core",
      layer2V: "AI Decision Layer",
      layer3K: "Outcome",
      layer3V: "Independent Company",
    },
    ventures: {
      eyebrow: "PORTFOLIO / VENTURES",
      title: "Our ventures",
      subtitle:
        "Products that make everyday decisions easier, from consumers to manufacturers.",
      detailsBtn: "Learn more",
      galgo: {
        eyebrow: "VENTURE 01 · AI COMMERCE · PERSONAL SHOPPING INTELLIGENCE",
        status: "Beta",
        tagline: "Personal AI that works everywhere shopping happens.",
        summary:
          "Galgo is an AI-powered personal shopping intelligence platform that learns each user's style, preferences, needs, and shopping habits to support smarter purchasing decisions.",
        intro2:
          "Unlike traditional shopping assistants, Galgo does not wait for users to visit a new destination—it integrates directly into the environments where shopping already happens.",
        intro3:
          "Built with a browser extension, embedded SDK, and API-first architecture, Galgo serves as an independent decision and personalization layer for e-commerce sites, digital marketplaces, and AI-powered commerce platforms.",
        vision:
          "Galgo's vision is to build a shopping intelligence that does not merely search for products—it knows the user, understands their needs, and supports the right purchasing decision at the right moment.",
        pillars: [
          {
            title: "Personal Shopping Intelligence",
            subtitle: "Shopping intelligence that knows the user and remembers their preferences.",
            desc: "Galgo evaluates products individually by analyzing personal style, budget, product preferences, and shopping intent. An evolving user profile forms the foundation for sharper recommendations and more confident decisions.",
          },
          {
            title: "Contextual Shopping Assistant",
            subtitle: "Right inside the shopping experience, at the right moment.",
            desc: "Galgo's browser extension brings personalized analysis and recommendations directly onto the product pages users visit—allowing them to carry the same personal preference profile across every store.",
          },
          {
            title: "Smart Wishlist & Opportunity Tracking",
            subtitle: "A personal assistant that remembers needs and tracks opportunities.",
            desc: "Galgo brings together saved products, moodboards, and purchasing goals. Where price and stock data are accessible, it tracks selected items and alerts users when the right opportunity arises.",
          },
          {
            title: "Commerce Intelligence API & SDK",
            subtitle: "Embeddable AI built for existing commerce platforms.",
            desc: "Galgo's API-first architecture opens personalization and decision-making capabilities to third-party platforms. E-commerce companies, marketplaces, and AI commerce apps can embed Galgo's decision engine to turn existing catalogs into personalized recommendations.",
          },
        ],
        evolutionTitle: "From Shopping Assistant to Shopping Intelligence",
        evolutionP1:
          "Galgo is evolving from a standalone shopping assistant into an AI infrastructure layer usable across the entire digital commerce ecosystem.",
        evolutionP2:
          "Existing capabilities—including personal style analysis, AI chat assistant, Pinterest-powered inspiration and discovery, moodboards, and wishlists—form the core of a new platform-independent personalization architecture.",
        motto: "One intelligence. Every shopping experience.",
        tags: [
          "Browser Extension",
          "Embedded SDK",
          "API-First",
          "Shopping Intelligence",
        ],
        footer: "AI Commerce · Personal Shopping Intelligence",
      },
      protonest: {
        status: "Pilot",
        tagline:
          "AI-powered nesting & material intelligence for manufacturing SMEs",
        summary:
          "ProtoNest reads 2D and 3D drawings, calculates the most efficient nesting of parts on sheet material, and cuts waste. Manufacturers see cost and material usage while the part is still on the drawing board.",
        metric1V: "15–20%",
        metric1L: "Reduction in material waste",
        metric2V: "2D / 3D",
        metric2L: "Instant cost from CAD files",
        footer: "Manufacturing Intelligence · Industrial AI",
      },
    },
    whyVeriLabs: {
      eyebrow: "WHY VERILABS",
      title: "Cross-disciplinary company building under one roof.",
      items: [
        {
          num: "01",
          title: "One team, every discipline",
          desc: "Engineering, product, marketing and finance sit at the same table, so no decision is made from a single angle.",
        },
        {
          num: "02",
          title: "Validate early",
          desc: "We test the problem before we write code, and willingness to pay before we launch.",
        },
        {
          num: "03",
          title: "Portfolio thinking",
          desc: "We never bet everything on one idea. We drop what doesn't work quickly and double down on what does.",
        },
      ],
    },
    howWeWork: {
      eyebrow: "VENTURE STUDIO MODEL",
      title: "How we work",
      intro:
        "VeriLabs is a venture studio. We are not an agency delivering client projects; we build our own products and grow each one as a future independent company.",
      stepsHeading: "From idea to company in five steps",
      stepsHint: "Click any step to explore",
      whatIsTitle: "What is a venture studio?",
      whatIsDesc:
        "A venture studio builds new companies systematically instead of waiting for individual ideas to come along. Ideas can come from inside or outside the studio. The studio evaluates the idea, builds the first product, tests it in the market, and spins the ones that work out into separate companies with their own team and funding.",
      whyModelTitle: "Why this model?",
      whyModelDesc:
        "A good idea alone is no longer enough. It has to be tested quickly, built by the right team, and anchored in a sustainable revenue model. The venture studio model replaces luck with method.",
      diffTitle: "What makes VeriLabs different",
      diffItems: [
        "Every product is built on AI and data.",
        "Decisions are made from a business-model perspective, not just a technical one.",
        "A portfolio of projects spreads the risk.",
        "Products are designed for long-term value and investment potential from day one.",
      ],
      foundersTitle: "Working with founders",
      foundersDesc:
        "We partner with founders who see a problem AI can solve, as co-founders. We bring the team, technology and business development; we grow together through shared ownership in the new company. We do not offer software development as a service.",
    },
    about: {
      eyebrow: "ABOUT US",
      title: "An AI venture studio born in Türkiye aiming for global impact.",
      lead:
        "VeriLabs is a venture studio that builds AI products and turns them into companies. Our goal is not to deliver one-off apps, but to build sustainable products and companies that can grow.",
      missionTitle: "Our mission",
      missionDesc:
        "To turn complex problems into simple, practical and measurable solutions. In every project we target a real problem, define a clear value proposition, and focus on making a measurable difference in users' lives.",
      visionTitle: "Our vision",
      visionDesc:
        "To be an AI venture studio born in Türkiye aiming for global impact. That is why every product is designed for international markets from day one: from technical architecture and branding to licensing models and integrations.",
      approachTitle: "Our approach",
      approachItems: [
        "Designing the path from idea to product to company together",
        "Basing decisions on data and user feedback",
        "Prototyping fast and validating continuously",
        "Planning for investment and growth from the start",
      ],
      valuesTitle: "Our values",
    },
    team: {
      eyebrow: "LEADERSHIP & PARTNERS",
      title: "Our team",
      subtitle:
        "People from engineering, product, business development, marketing and finance work at the same table. Every decision is weighed for technical feasibility, user experience and business model at once.",
      howTitle: "How we work",
      howItems: [
        "Clear ownership instead of hierarchy",
        "Short, focused sessions instead of long meetings",
        "Choosing the right problem matters as much as code quality",
        "Continuous learning and knowledge sharing",
      ],
      joinTitle: "Join us",
      joinDesc:
        'We value strong contributions over strong CVs. We want to work with curious people who are open to data and feedback, and who ask "how could this be done better?" every day.',
      joinCta: "Get in touch",
    },
    closing: {
      eyebrow: "CONTACT & PARTNERSHIPS",
      titleStart: "Let’s build",
      titleAccent: "together.",
      tracks: [
        {
          id: "founder",
          code: "01 / CO-FOUNDERS",
          title: "Have an idea?",
          desc: "If you see a problem AI can solve, let’s explore building it together as co-founders.",
          cta: "Tell us",
        },
        {
          id: "investor",
          code: "02 / INVESTORS",
          title: "Investor?",
          desc: "Let’s walk you through our portfolio, active ventures and global roadmap.",
          cta: "Book a call",
        },
        {
          id: "talent",
          code: "03 / CAREERS",
          title: "Want to join?",
          desc: "We value strong contributions over strong CVs. We’re looking for curious people who follow the data.",
          cta: "Get in touch",
        },
      ],
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Let’s build together.",
      intro:
        "Whether you have an idea, want to explore our portfolio as an investor, or would like to join the studio, reach out directly.",
      selectTopic: "Select a topic",
      formTitle: "Send a message",
      nameLabel: "Full Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      msgLabel: "Message",
      msgPlaceholder: "Tell us briefly about your idea, inquiry or background...",
      submit: "Send Message",
      submitting: "Sending...",
      successTitle: "Message sent",
      successDesc: "We will get back to you shortly.",
      errorTitle: "Something went wrong",
      errorDesc: "Please try again or email us directly at info@verilabs.ai.",
      directEmail: "Email",
      location: "Location",
      locationVal: "Istanbul, Türkiye",
      social: "Social",
    },
    footer: {
      desc: "AI venture studio",
      pages: "Pages",
      ventures: "Ventures",
      connect: "Connect",
    },
  },
} as const;

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof COPY)["tr"] | (typeof COPY)["en"];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const urlParam = new URLSearchParams(window.location.search).get("lang");
      if (urlParam === "en" || urlParam === "tr") return urlParam;
      const saved = window.localStorage.getItem("verilabs_lang");
      if (saved === "en" || saved === "tr") return saved;
    }
    return "tr";
  });

  const setLang = (next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("verilabs_lang", next);
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: COPY[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
