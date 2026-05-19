"use client";

import { useMemo, useState } from "react";

type Lang = "ar" | "en" | "fr";

const links = {
  website: "https://houseof-antiques.com",
  store: "https://houseofantiques.store",
};

const navLabels = {
  ar: {
    website: "الموقع الإلكتروني",
    store: "المتجر",
    menu: "القائمة",
    heroTitle: "قائمة مقهى بيت التحفيات",
    heroSub:
      "نكهات عراقية بسيطة، مكتوبة بروح قوائم العشاء القديمة داخل بيت يحفظ الذاكرة.",
    dinner: "CAFÉ MENU",
    scroll: "تصفح القائمة",
  },
  en: {
    website: "Website",
    store: "Store",
    menu: "Menu",
    heroTitle: "House of Antiques Café Menu",
    heroSub:
      "Simple Iraqi flavors presented in the spirit of old dinner menus inside a house of memory.",
    dinner: "CAFÉ MENU",
    scroll: "Browse Menu",
  },
  fr: {
    website: "Site Web",
    store: "Boutique",
    menu: "Menu",
    heroTitle: "Menu du Café House of Antiques",
    heroSub:
      "Des saveurs irakiennes simples, présentées dans l’esprit des anciens menus de dîner.",
    dinner: "MENU DU CAFÉ",
    scroll: "Voir le Menu",
  },
};

const sections = [
  {
    id: "sandwiches",
    ar: "السندويشات",
    en: "Sandwiches",
    fr: "Sandwichs",
    items: [
      {
        ar: ["سندويش كباب عروگ", "كباب عراقي مقلي بتوابل تقليدية، يلف بخبز التنور مع الطماطم والبصل."],
        en: ["Iraqi Aroog Kebab Sandwich", "Traditional fried Iraqi kebab wrapped in tanoor bread with tomato and onion."],
        fr: ["Sandwich Kebab Aroog Irakien", "Kebab irakien traditionnel frit, servi dans du pain tanoor avec tomate et oignon."],
        price: "3500",
      },
      {
        ar: ["سندويش لسان", "شرائح لسان بقري مطبوخ بعناية، يقدم في خبز عراقي مع مخللات خاصة."],
        en: ["Beef Tongue Sandwich", "Tender beef tongue slices served in Iraqi bread with house pickles."],
        fr: ["Sandwich Langue de Bœuf", "Tranches de langue de bœuf tendre servies dans du pain irakien avec pickles maison."],
        price: "3500",
      },
      {
        ar: ["سندويش مخ الخروف", "مخ الخروف الطري المطبوخ على البخار، يقدم مع رشة ليمون وملح في خبز الصمون."],
        en: ["Lamb Brain Sandwich", "Steamed lamb brain served with lemon and salt in Iraqi samoon bread."],
        fr: ["Sandwich Cervelle d’Agneau", "Cervelle d’agneau vapeur servie avec citron et sel dans du pain samoon."],
        price: "3500",
      },
      {
        ar: ["سندويش كيمر عرب", "كيمر عراقي غني ودسم يقدم مع الدبس أو العسل حسب الاختيار."],
        en: ["Iraqi Geymar Sandwich", "Rich Iraqi clotted cream served with date molasses or honey."],
        fr: ["Sandwich Geymar Irakien", "Crème irakienne riche servie avec mélasse de dattes ou miel."],
        price: "4000",
      },
      {
        ar: ["سندويش مخلمة", "بيض مقلي مع لحم وبصل وطماطم وتوابل عراقية، ملفوف بخبز التنور."],
        en: ["Mekhlemma Sandwich", "Fried eggs with meat, onion, tomato, and Iraqi spices wrapped in tanoor bread."],
        fr: ["Sandwich Mekhlemma", "Œufs frits avec viande, oignon, tomate et épices irakiennes dans du pain tanoor."],
        price: "4500",
      },
      {
        ar: ["سندويش تبسي دجاج", "دجاج مطبوخ مع باذنجان وبطاطا وصلصة الطماطم، يقدم في خبز ساخن."],
        en: ["Chicken Tapsi Sandwich", "Chicken cooked with eggplant, potato, and tomato sauce, served in warm bread."],
        fr: ["Sandwich Tapsi au Poulet", "Poulet mijoté avec aubergine, pomme de terre et sauce tomate dans du pain chaud."],
        price: "5000",
      },
    ],
  },
  {
    id: "sweets",
    ar: "الحلويات",
    en: "Sweets",
    fr: "Desserts",
    items: [
      {
        ar: ["تمرية بغدادية", "تحفة من الطحين والتمر المحمّص، تقدم دافئة مع رشة سكر بودرة."],
        en: ["Baghdadi Tamriya", "Warm pastry of flour and roasted dates, finished with powdered sugar."],
        fr: ["Tamriya Bagdadienne", "Pâtisserie chaude à base de farine et dattes rôties, avec sucre glace."],
        price: "6000",
      },
      {
        ar: ["حلاوة شعرية", "شعرية محمصة بالزبدة وتغمر بالقطر، تقدم مزينة بالفستق."],
        en: ["Sweet Vermicelli", "Toasted vermicelli with butter and syrup, garnished with pistachio."],
        fr: ["Vermicelles Sucrés", "Vermicelles grillés au beurre et sirop, garnis de pistaches."],
        price: "7000",
      },
      {
        ar: ["براوني التمر", "براوني ناعم وغني بمزيج التمر والكاكاو، لمسة عصرية لحلوى تقليدية."],
        en: ["Date Brownie", "Soft brownie with dates and cocoa, a modern touch on a traditional flavor."],
        fr: ["Brownie aux Dattes", "Brownie moelleux aux dattes et cacao, touche moderne d’une saveur traditionnelle."],
        price: "8000",
      },
      {
        ar: ["كليجة تمر", "كليجة محشوة بعجينة التمر، مخبوزة حتى الاحمرار برائحة الهيل."],
        en: ["Date Kleicha", "Iraqi date-filled cookie baked until golden with cardamom aroma."],
        fr: ["Kleicha aux Dattes", "Biscuit irakien fourré aux dattes, doré au four avec parfum de cardamome."],
        price: "6000",
      },
      {
        ar: ["زردة", "رز مطبوخ مع الزعفران والسكر، تقدم دافئة مزينة بالقرفة."],
        en: ["Zarda", "Sweet rice cooked with saffron and sugar, served warm with cinnamon."],
        fr: ["Zarda", "Riz sucré au safran et sucre, servi chaud avec cannelle."],
        price: "6500",
      },
    ],
  },
  {
    id: "hot-drinks",
    ar: "المشروبات الساخنة",
    en: "Hot Drinks",
    fr: "Boissons Chaudes",
    items: [
      {
        ar: ["شاي على الفحم", "شاي عراقي تقليدي يطهى على الفحم ليعطي نكهة غنية ومميزة."],
        en: ["Charcoal Tea", "Traditional Iraqi tea brewed over charcoal for a rich flavor."],
        fr: ["Thé au Charbon", "Thé irakien traditionnel infusé au charbon pour une saveur riche."],
        price: "3000",
      },
      {
        ar: ["قهوة عراقية", "قهوة داكنة وثقيلة وغنية تقدم بمذاق عربي فاخر."],
        en: ["Iraqi Coffee", "Dark, strong, and rich coffee served with an elegant Arabic character."],
        fr: ["Café Irakien", "Café sombre, fort et riche, servi avec un caractère arabe raffiné."],
        price: "4000",
      },
      {
        ar: ["جاي و حليب", "مزيج من الشاي والحليب الساخن يقدم بطابع بيتي دافئ."],
        en: ["Tea with Milk", "Hot tea blended with milk, served with a warm homemade character."],
        fr: ["Thé au Lait", "Thé chaud mélangé au lait, servi dans un esprit chaleureux."],
        price: "4500",
      },
      {
        ar: ["جاي كرك", "شاي مطبوخ مع الحليب والتوابل، غني ودسم."],
        en: ["Karak Tea", "Tea cooked with milk and spices, rich and creamy."],
        fr: ["Thé Karak", "Thé cuit avec lait et épices, riche et crémeux."],
        price: "5000",
      },
    ],
  },
  {
    id: "cold-drinks",
    ar: "المشروبات الباردة",
    en: "Cold Drinks",
    fr: "Boissons Fraîches",
    items: [
      {
        ar: ["ليمونادة بالنعناع", "مشروب بارد ومنعش بنكهة الليمون والنعناع."],
        en: ["Mint Lemonade", "Cold and refreshing lemon and mint drink."],
        fr: ["Limonade à la Menthe", "Boisson fraîche au citron et à la menthe."],
        price: "6000",
      },
      {
        ar: ["زبيب مثلج", "مشروب زبيب بارد بطابع شعبي منعش."],
        en: ["Iced Raisin Drink", "A refreshing traditional cold raisin drink."],
        fr: ["Boisson Glacée aux Raisins Secs", "Boisson traditionnelle froide et rafraîchissante aux raisins secs."],
        price: "4500",
      },
      {
        ar: ["لبن عيران", "لبن بارد وخفيف يناسب المائدة العراقية."],
        en: ["Ayran Yogurt Drink", "Cold and light yogurt drink, perfect with Iraqi food."],
        fr: ["Ayran", "Boisson froide au yaourt, légère et parfaite avec la cuisine irakienne."],
        price: "3500",
      },
      {
        ar: ["كركديه مثلج", "كجرات بارد بلونه الأحمر ونكهته الحامضة."],
        en: ["Iced Hibiscus", "Cold hibiscus drink with a bright red color and tangy flavor."],
        fr: ["Hibiscus Glacé", "Boisson froide d’hibiscus, rouge vif et acidulée."],
        price: "3500",
      },
    ],
  },
  {
    id: "herbal-drinks",
    ar: "المشروبات العشبية",
    en: "Herbal Drinks",
    fr: "Infusions",
    items: [
      {
        ar: ["كجرات حار / بارد", "مغلي الكركديه يقدم حاراً أو بارداً بلونه الأحمر ونكهته الحامضة."],
        en: ["Hibiscus Hot / Cold", "Hibiscus infusion served hot or cold with a tangy red character."],
        fr: ["Hibiscus Chaud / Froid", "Infusion d’hibiscus servie chaude ou froide, rouge et acidulée."],
        price: "3000",
      },
      {
        ar: ["ينسون بالعسل", "مغلي ينسون طبيعي محلى بالعسل، مثالي للراحة والدفء."],
        en: ["Anise with Honey", "Natural anise infusion sweetened with honey, ideal for warmth and comfort."],
        fr: ["Anis au Miel", "Infusion naturelle d’anis sucrée au miel, idéale pour le confort."],
        price: "3500",
      },
      {
        ar: ["شاي نومي حامض عراقي", "مشروب دافئ من الليمون المجفف بطعم حامض منعش."],
        en: ["Iraqi Dried Lime Tea", "Warm dried lime tea with a refreshing sour flavor."],
        fr: ["Thé Irakien au Citron Séché", "Boisson chaude au citron séché, fraîche et acidulée."],
        price: "3500",
      },
      {
        ar: ["شاي بابونج", "زهور بابونج مهدئة تقدم دافئة."],
        en: ["Chamomile Tea", "Calming chamomile flowers served warm."],
        fr: ["Tisane de Camomille", "Fleurs de camomille apaisantes servies chaudes."],
        price: "3000",
      },
      {
        ar: ["شاي نعناع أخضر طازج", "أوراق نعناع طازجة تغلى وتقدم برائحة زكية."],
        en: ["Fresh Mint Tea", "Fresh mint leaves brewed and served with a fragrant aroma."],
        fr: ["Thé à la Menthe Fraîche", "Feuilles de menthe fraîche infusées avec un parfum délicat."],
        price: "3000",
      },
    ],
  },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("ar");

  const isRtl = lang === "ar";
  const t = navLabels[lang];

  const heroImage = "/menu-assets/vintage-dinner.jpg";

  const sectionLinks = useMemo(
    () =>
      sections.map((section) => ({
        id: section.id,
        title: section[lang],
      })),
    [lang]
  );

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
     className="min-h-screen bg-[#f4efe4] text-[#1f1a14] paper-grain"
    >
      <header className="topbar-motion fixed left-0 right-0 top-0 z-50 border-b border-[#1f1a14]/10 bg-[#f4efe4]/88 backdrop-blur-xl">
  <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
    {/* RIGHT LOGO */}
    <a
      href="#top"
      className="flex shrink-0 items-center gap-3"
      aria-label="House of Antiques Café"
    >
      <img
        src="/menu-assets/logo.png"
        alt="House of Antiques Logo"
        className="h-9 w-9 rounded-full object-contain"
      />

      <div className="hidden leading-none sm:block">
        <p className="font-vintage-en text-[11px] font-semibold tracking-[0.32em]">
          HOA CAFÉ
        </p>
        <p className="mt-1 text-[10px] tracking-[0.18em] text-[#8a2f2a]">
          House of Antiques
        </p>
      </div>
    </a>

    {/* LEFT LINKS */}
    <nav className="flex items-center gap-2 text-[11px]">
      <a
        href={links.website}
        target="_blank"
        className="rounded-full border border-[#1f1a14]/15 px-3 py-2 transition hover:bg-[#1f1a14] hover:text-[#f4efe4]"
      >
        {t.website}
      </a>

      <a
        href={links.store}
        target="_blank"
        className="rounded-full border border-[#1f1a14]/15 px-3 py-2 transition hover:bg-[#1f1a14] hover:text-[#f4efe4]"
      >
        {t.store}
      </a>
    </nav>
  </div>
</header>

      <section id="top" className="pt-[57px]">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden border-x border-[#1f1a14]/10 bg-[#e4dac8]">
            <img
              src={heroImage}
              alt="Vintage dinner artwork"
              className="hero-image h-[42vh] min-h-[310px] w-full object-cover object-center md:h-[52vh]"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-[#f4efe4]/25" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="rounded-full bg-[#1f1a14]/65 px-4 py-2 text-xs tracking-[0.25em] text-[#f4efe4] backdrop-blur">
                SINCE 1920
              </span>

              <div className="flex overflow-hidden rounded-full border border-[#f4efe4]/60 bg-[#f4efe4]/80 text-xs backdrop-blur">
                {(["ar", "en", "fr"] as Lang[]).map((item) => (
                  <button
                    key={item}
                    onClick={() => setLang(item)}
                    className={`language-pill px-3 py-2 uppercase transition ${
                      lang === item
                        ? "bg-[#1f1a14] text-[#f4efe4]"
                        : "text-[#1f1a14]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-panel border-x border-b border-[#1f1a14]/10 bg-[#f4efe4] px-5 py-10 text-center md:px-12">
            <p className="text-xs tracking-[0.55em] text-[#8a2f2a]">
              HOUSE OF ANTIQUES
            </p>

            <h1 className="hero-title font-vintage-ar mx-auto mt-5 max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
              {t.heroTitle}
            </h1>

            <div className="mx-auto my-7 h-px w-28 bg-[#1f1a14]/40" />

            <p className="hero-subtitle mx-auto max-w-2xl text-lg leading-9 text-[#6a5d4d]">
              {t.heroSub}
            </p>

            <a
              href="#menu"
              className="hero-button mt-8 inline-flex rounded-full border border-[#1f1a14] px-7 py-3 text-sm transition hover:-translate-y-1 hover:bg-[#1f1a14] hover:text-[#f4efe4]"
            >
              {t.scroll}
            </a>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-6xl px-4 py-10">
        <div className="sticky top-[57px] z-40 -mx-4 border-y border-[#1f1a14]/10 bg-[#f4efe4]/92 px-4 py-3 backdrop-blur-xl">
          <div className="no-scrollbar flex gap-2 overflow-x-auto">
            {sectionLinks.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="shrink-0 rounded-full border border-[#1f1a14]/15 px-4 py-2 text-xs transition hover:bg-[#1f1a14] hover:text-[#f4efe4]"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-10 text-center">
          <p className="text-xs tracking-[0.6em] text-[#8a2f2a]">
            {t.dinner}
          </p>
          <h2 className="mt-4 text-5xl font-semibold tracking-[0.18em] md:text-7xl">
            MENU
          </h2>
          <div className="decor-line mx-auto mt-6">
  <span className="decor-dot" />
</div>
        </div>

        <div className="mt-12 space-y-16">
          {sections.map((section, sectionIndex) => (
            <section
              key={section.id}
              id={section.id}
              className="menu-section scroll-mt-36 border-t border-[#1f1a14]/25 pt-10"
            >
              <div className="mb-8 text-center">
                <p className="text-xs tracking-[0.35em] text-[#8a2f2a]">
                  {String(sectionIndex + 1).padStart(2, "0")}
                </p>

                <h3 className="section-title-ar mt-3 text-4xl font-bold md:text-6xl">
                  {section[lang]}
                </h3>

                <div className="mx-auto mt-5 h-px w-20 bg-[#1f1a14]/35" />
              </div>

              <div className="menu-grid mx-auto max-w-5xl">
                {section.items.map((item, index) => (
                  <article key={`${section.id}-${index}`} className="menu-row">
                    <div className="menu-text">
                      <h4>{item[lang][0]}</h4>
                      <p>{item[lang][1]}</p>
                    </div>

                    <div className="menu-price">
                      <span>{item.price}</span>
                      <small>IQD</small>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <footer className="mt-10 border-t border-[#1f1a14]/15 px-5 py-10 text-center">
        <p className="text-xs tracking-[0.45em] text-[#8a2f2a]">
          HOUSE OF ANTIQUES CAFÉ
        </p>
        <p className="mt-4 text-sm text-[#6a5d4d]">
          Baghdad — Menu designed for mobile visitors
        </p>
      </footer>
    </main>
  );
}