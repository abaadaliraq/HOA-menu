"use client";

import { useMemo, useState } from "react";

type Lang = "ar" | "en" | "fr";

type MenuItem = {
  ar: [string, string];
  en: [string, string];
  fr: [string, string];
  price: string;
};

type MenuSection = {
  id: string;
  ar: string;
  en: string;
  fr: string;
  items: MenuItem[];
};

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

const sections: MenuSection[] = [
  {
  id: "baghdadi-breakfast",
  ar: "الفطور البغدادي",
  en: "Baghdadi Breakfast",
  fr: "Petit Déjeuner Bagdadien",
  items: [
    {
      ar: ["فطور بيت التحفيات لشخصين", "صينية فطور بغدادية تضم قيمر ودبس، جبن عرب، بيض، باقلاء، خضار، خبز عراقي وشاي."],
      en: ["House of Antiques Breakfast for Two", "A Baghdadi breakfast tray with geymar and date molasses, Arab cheese, eggs, broad beans, vegetables, Iraqi bread, and tea."],
      fr: ["Petit Déjeuner House of Antiques pour Deux", "Plateau de petit déjeuner bagdadien avec geymar et mélasse de dattes, fromage arabe, œufs, fèves, légumes, pain irakien et thé."],
      price: "18000",
    },
    {
      ar: ["قيمر ودبس", "قيمر عراقي غني يقدم مع دبس التمر وخبز عراقي ساخن."],
      en: ["Geymar and Date Molasses", "Rich Iraqi clotted cream served with date molasses and warm Iraqi bread."],
      fr: ["Geymar et Mélasse de Dattes", "Crème irakienne riche servie avec mélasse de dattes et pain irakien chaud."],
      price: "7000",
    },
    {
      ar: ["تشريب باقلاء", "باقلاء عراقية دافئة مع خبز منقوع وبيض حسب الاختيار."],
      en: ["Iraqi Broad Bean Tashreeb", "Warm Iraqi broad beans with soaked bread and optional egg."],
      fr: ["Tashreeb de Fèves Irakien", "Fèves irakiennes chaudes avec pain imbibé et œuf au choix."],
      price: "7000",
    },
    {
      ar: ["مخلمة عراقية", "بيض مقلي مع لحم وبصل وطماطم وتوابل عراقية، يقدم مع خبز ساخن."],
      en: ["Iraqi Mekhlemma", "Fried eggs with meat, onion, tomato, and Iraqi spices, served with warm bread."],
      fr: ["Mekhlemma Irakienne", "Œufs frits avec viande, oignon, tomate et épices irakiennes, servis avec pain chaud."],
      price: "6500",
    },
    {
      ar: ["بيض وطماطة", "بيض مقلي مع الطماطم والبصل بتتبيلة عراقية بسيطة."],
      en: ["Eggs with Tomato", "Fried eggs with tomato and onion in a simple Iraqi seasoning."],
      fr: ["Œufs à la Tomate", "Œufs frits avec tomate et oignon, assaisonnement irakien simple."],
      price: "5000",
    },
    {
      ar: ["بيض مسلوق مع خضار", "بيض مسلوق يقدم مع خيار وطماطم وزيتون وخبز عراقي."],
      en: ["Boiled Eggs with Vegetables", "Boiled eggs served with cucumber, tomato, olives, and Iraqi bread."],
      fr: ["Œufs Durs avec Légumes", "Œufs durs servis avec concombre, tomate, olives et pain irakien."],
      price: "4500",
    },
    {
      ar: ["جبن عرب وخبز حار", "جبن عربي طري يقدم مع خبز ساخن وخضار طازجة."],
      en: ["Arab Cheese with Warm Bread", "Soft Arab cheese served with warm bread and fresh vegetables."],
      fr: ["Fromage Arabe avec Pain Chaud", "Fromage arabe tendre servi avec pain chaud et légumes frais."],
      price: "5000",
    },
    {
      ar: ["صحن فطور بغدادي صغير", "اختيار خفيف من الجبن، الزيتون، الخضار، البيض وخبز عراقي."],
      en: ["Small Baghdadi Breakfast Plate", "A light selection of cheese, olives, vegetables, eggs, and Iraqi bread."],
      fr: ["Petite Assiette de Petit Déjeuner Bagdadien", "Sélection légère de fromage, olives, légumes, œufs et pain irakien."],
      price: "9000",
    },
  ],
},
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
        price: "5000",
      },
      {
        ar: ["سندويش لسان", "شرائح لسان بقري مطبوخ بعناية، يقدم في خبز عراقي مع مخللات خاصة."],
        en: ["Beef Tongue Sandwich", "Tender beef tongue slices served in Iraqi bread with house pickles."],
        fr: ["Sandwich Langue de Bœuf", "Tranches de langue de bœuf tendre servies dans du pain irakien avec pickles maison."],
        price: "5000",
      },
      {
        ar: ["سندويش مخ الخروف", "مخ الخروف الطري المطبوخ على البخار، يقدم مع رشة ليمون وملح في خبز الصمون."],
        en: ["Lamb Brain Sandwich", "Steamed lamb brain served with lemon and salt in Iraqi samoon bread."],
        fr: ["Sandwich Cervelle d’Agneau", "Cervelle d’agneau vapeur servie avec citron et sel dans du pain samoon."],
        price: "5000",
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
      {
        ar: ["سندويش باسطرمة بيت التحفيات", "شرائح باسطرمة متبلة تقدم في خبز عراقي ساخن مع الطماطم والمخلل."],
        en: ["House Pastrami Sandwich", "Seasoned pastrami slices served in warm Iraqi bread with tomato and pickles."],
        fr: ["Sandwich Pastrami de la Maison", "Tranches de pastrami épicées servies dans du pain irakien chaud avec tomate et pickles."],
        price: "5000",
      },
      {
        ar: ["سندويش كبدة بغدادية", "كبدة مقلية بتوابل عراقية مع البصل والطماطم، تقدم في خبز الصمون أو التنور."],
        en: ["Baghdadi Liver Sandwich", "Fried liver with Iraqi spices, onion, and tomato, served in samoon or tanoor bread."],
        fr: ["Sandwich Foie Bagdadien", "Foie poêlé aux épices irakiennes avec oignon et tomate, servi dans du pain samoon ou tanoor."],
        price: "5000",
      },
      {
        ar: ["سندويش لحم بقري عراقي", "لحم بقري مطبوخ على الطريقة العراقية مع البصل والتوابل، يقدم في خبز ساخن."],
        en: ["Iraqi-Style Beef Sandwich", "Beef cooked Iraqi style with onion and spices, served in warm bread."],
        fr: ["Sandwich Bœuf à l’Irakienne", "Bœuf cuisiné à l’irakienne avec oignon et épices, servi dans du pain chaud."],
        price: "5500",
      },
      {
        ar: ["سندويش جبن عرب", "جبن عربي طري يقدم في خبز ساخن مع خيار وطماطم حسب الاختيار."],
        en: ["Arab Cheese Sandwich", "Soft Arab cheese served in warm bread with cucumber and tomato upon request."],
        fr: ["Sandwich Fromage Arabe", "Fromage arabe tendre servi dans du pain chaud avec concombre et tomate au choix."],
        price: "4500",
      },
      {
        ar: ["سندويش بيض وبطاطا", "بيض مسلوق أو مقلي مع بطاطا، يقدم في خبز عراقي مع رشة ملح وفلفل."],
        en: ["Egg and Potato Sandwich", "Boiled or fried egg with potato, served in Iraqi bread with salt and pepper."],
        fr: ["Sandwich Œuf et Pomme de Terre", "Œuf dur ou frit avec pomme de terre, servi dans du pain irakien avec sel et poivre."],
        price: "4500",
      },
      {
        ar: ["سندويش حبش", "شرائح حبش خفيفة تقدم في خبز ساخن مع الخس والطماطم وصلصة خاصة."],
        en: ["Turkey Sandwich", "Light turkey slices served in warm bread with lettuce, tomato, and house sauce."],
        fr: ["Sandwich Dinde", "Tranches de dinde servies dans du pain chaud avec laitue, tomate et sauce maison."],
        price: "5000",
      },
    ],
  },
  {
    id: "salads",
    ar: "السلطات",
    en: "Salads",
    fr: "Salades",
    items: [
      {
        ar: ["سلطة دجاج بيت التحفيات", "دجاج مشوي مع خضار طازجة وصلصة خفيفة بنكهة شرقية."],
        en: ["House Chicken Salad", "Grilled chicken with fresh vegetables and a light oriental dressing."],
        fr: ["Salade Poulet de la Maison", "Poulet grillé avec légumes frais et sauce orientale légère."],
        price: "7000",
      },
      {
        ar: ["سلطة لحم", "شرائح لحم بقري متبلة مع خضار موسمية ولمسة دبس رمان."],
        en: ["Beef Salad", "Seasoned beef slices with seasonal vegetables and a touch of pomegranate molasses."],
        fr: ["Salade de Bœuf", "Tranches de bœuf assaisonnées avec légumes de saison et mélasse de grenade."],
        price: "8000",
      },
      {
        ar: ["سلطة بقوليات", "حمص وفاصوليا وبقوليات مشكلة مع زيت الزيتون والليمون."],
        en: ["Legume Salad", "Chickpeas, beans, and mixed legumes with olive oil and lemon."],
        fr: ["Salade de Légumineuses", "Pois chiches, haricots et légumineuses avec huile d’olive et citron."],
        price: "5000",
      },
      {
        ar: ["سلطة بغدادية", "خيار وطماطم وبصل وأعشاب طازجة بخلطة بيتية بسيطة."],
        en: ["Baghdadi Salad", "Cucumber, tomato, onion, and fresh herbs with a simple house dressing."],
        fr: ["Salade Bagdadienne", "Concombre, tomate, oignon et herbes fraîches avec sauce maison."],
        price: "4000",
      },
    ],
  },
  {
    id: "appetizers",
    ar: "المقبلات",
    en: "Appetizers",
    fr: "Entrées",
    items: [
      {
        ar: ["حمص لبلبي", "حمص مسلوق يقدم دافئاً مع الليمون والكمون وزيت الزيتون."],
        en: ["Warm Chickpeas", "Boiled chickpeas served warm with lemon, cumin, and olive oil."],
        fr: ["Pois Chiches Chauds", "Pois chiches bouillis servis chauds avec citron, cumin et huile d’olive."],
        price: "4000",
      },
      {
        ar: ["باقلاء", "باقلاء عراقية تقدم دافئة مع الخبز والليمون."],
        en: ["Iraqi Broad Beans", "Warm Iraqi broad beans served with bread and lemon."],
        fr: ["Fèves Irakiennes", "Fèves irakiennes chaudes servies avec pain et citron."],
        price: "4000",
      },
      {
        ar: ["محروك أصبعه", "عدس وعجين مقلي مع بصل مكرمل ودبس رمان بنكهة شامية قديمة."],
        en: ["Muharraq Isba’o", "Lentils with fried dough, caramelized onion, and pomegranate molasses."],
        fr: ["Muharraq Isba’o", "Lentilles avec pâte frite, oignon caramélisé et mélasse de grenade."],
        price: "5000",
      },
      {
        ar: ["كبدة مقبلات", "قطع كبدة مقلية بتوابل عراقية تقدم مع الليمون والخبز."],
        en: ["Liver Appetizer", "Fried liver pieces with Iraqi spices, served with lemon and bread."],
        fr: ["Entrée de Foie", "Morceaux de foie poêlés aux épices irakiennes, servis avec citron et pain."],
        price: "6000",
      },
      {
        ar: ["جاجيك", "خيار ولبن مع نعناع وثوم خفيف، يقدم بارداً."],
        en: ["Jajik", "Cucumber and yogurt with mint and light garlic, served cold."],
        fr: ["Jajik", "Concombre et yaourt avec menthe et ail léger, servi froid."],
        price: "3500",
      },
      {
        ar: ["حمص باللحمة", "حمص كريمي تعلوه قطع لحم متبلة وزيت زيتون."],
        en: ["Hummus with Meat", "Creamy hummus topped with seasoned meat and olive oil."],
        fr: ["Houmous à la Viande", "Houmous crémeux garni de viande assaisonnée et d’huile d’olive."],
        price: "6500",
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
        ar: ["جاي وحليب", "مزيج من الشاي والحليب الساخن يقدم بطابع بيتي دافئ."],
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
      {
        ar: ["إسبريسو", "قهوة مركزة بطبقة كريما ناعمة لمحبي الطعم القوي."],
        en: ["Espresso", "Concentrated coffee with a smooth crema for strong coffee lovers."],
        fr: ["Espresso", "Café concentré avec une crème légère pour les amateurs de café fort."],
        price: "4000",
      },
      {
        ar: ["أمريكانو", "إسبريسو مع ماء ساخن بطعم متوازن وخفيف."],
        en: ["Americano", "Espresso with hot water for a balanced and lighter taste."],
        fr: ["Americano", "Espresso allongé à l’eau chaude pour un goût équilibré."],
        price: "4500",
      },
      {
        ar: ["كابتشينو", "إسبريسو مع حليب مبخر ورغوة ناعمة."],
        en: ["Cappuccino", "Espresso with steamed milk and soft foam."],
        fr: ["Cappuccino", "Espresso avec lait vapeur et mousse légère."],
        price: "5500",
      },
      {
        ar: ["لاتيه", "قهوة ناعمة بالحليب المبخر، مناسبة لطعم خفيف وكريمي."],
        en: ["Latte", "Smooth coffee with steamed milk, light and creamy."],
        fr: ["Latte", "Café doux au lait vapeur, léger et crémeux."],
        price: "5500",
      },
      {
        ar: ["فلات وايت", "قهوة غنية بالحليب بقوام مخملي وطعم أوضح من اللاتيه."],
        en: ["Flat White", "Rich coffee with velvety milk and a stronger taste than latte."],
        fr: ["Flat White", "Café riche avec lait velouté et goût plus marqué qu’un latte."],
        price: "6000",
      },
      {
        ar: ["موكا", "قهوة بالحليب والشوكولاتة بطعم دافئ وغني."],
        en: ["Mocha", "Coffee with milk and chocolate for a warm rich flavor."],
        fr: ["Mocha", "Café au lait et chocolat, chaud et riche."],
        price: "6000",
      },
      {
        ar: ["ماكياتو", "إسبريسو مع لمسة حليب ورغوة خفيفة."],
        en: ["Macchiato", "Espresso with a touch of milk and light foam."],
        fr: ["Macchiato", "Espresso avec une touche de lait et mousse légère."],
        price: "5000",
      },
      {
        ar: ["هوت شوكليت", "شوكولاتة ساخنة بالحليب، كثيفة وناعمة."],
        en: ["Hot Chocolate", "Warm milk chocolate, rich and smooth."],
        fr: ["Chocolat Chaud", "Chocolat au lait chaud, riche et doux."],
        price: "5500",
      },
      {
        ar: ["قهوة تركية", "قهوة تركية ثقيلة تقدم بأسلوب كلاسيكي."],
        en: ["Turkish Coffee", "Strong Turkish coffee served in a classic style."],
        fr: ["Café Turc", "Café turc fort servi dans un style classique."],
        price: "4500",
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
      {
        ar: ["آيس أمريكانو", "إسبريسو مع ماء بارد وثلج لطعم قوي ومنعش."],
        en: ["Iced Americano", "Espresso with cold water and ice for a strong refreshing taste."],
        fr: ["Americano Glacé", "Espresso avec eau froide et glace, fort et rafraîchissant."],
        price: "5000",
      },
      {
        ar: ["آيس لاتيه", "قهوة باردة مع الحليب والثلج بقوام ناعم."],
        en: ["Iced Latte", "Cold coffee with milk and ice, smooth and creamy."],
        fr: ["Latte Glacé", "Café froid au lait et glace, doux et crémeux."],
        price: "6000",
      },
      {
        ar: ["سبانش لاتيه بارد", "قهوة باردة بالحليب المحلى، ناعمة وغنية."],
        en: ["Iced Spanish Latte", "Cold coffee with sweetened milk, smooth and rich."],
        fr: ["Spanish Latte Glacé", "Café froid au lait sucré, doux et riche."],
        price: "6500",
      },
      {
        ar: ["كراميل آيس لاتيه", "لاتيه بارد مع صوص الكراميل ولمسة حلاوة متوازنة."],
        en: ["Caramel Iced Latte", "Iced latte with caramel sauce and balanced sweetness."],
        fr: ["Latte Glacé au Caramel", "Latte froid avec sauce caramel et douceur équilibrée."],
        price: "6500",
      },
      {
        ar: ["فرابتشينو", "قهوة مثلجة مخفوقة بالحليب والثلج بطعم كريمي."],
        en: ["Frappuccino", "Blended iced coffee with milk and ice, creamy and cold."],
        fr: ["Frappuccino", "Café glacé mixé avec lait et glace, froid et crémeux."],
        price: "7000",
      },
      {
        ar: ["موكا بارد", "قهوة باردة بالشوكولاتة والحليب والثلج."],
        en: ["Iced Mocha", "Cold coffee with chocolate, milk, and ice."],
        fr: ["Mocha Glacé", "Café froid au chocolat, lait et glace."],
        price: "6500",
      },
      {
        ar: ["عصير برتقال", "عصير برتقال طازج ومنعش."],
        en: ["Orange Juice", "Fresh and refreshing orange juice."],
        fr: ["Jus d’Orange", "Jus d’orange frais et rafraîchissant."],
        price: "6000",
      },
      {
        ar: ["عصير رمان", "عصير رمان بارد بطعم حامض وحلو متوازن."],
        en: ["Pomegranate Juice", "Cold pomegranate juice with a balanced sweet and tangy taste."],
        fr: ["Jus de Grenade", "Jus de grenade froid, doux et acidulé."],
        price: "7000",
      },
    ],
    
  },
  {
  id: "mojito",
  ar: "الموهيتو",
  en: "Mojito",
  fr: "Mojito",
  items: [
    {
      ar: ["موهيتو كلاسيك", "ليمون ونعناع طازج مع صودا وثلج، بطعم منعش وخفيف."],
      en: ["Classic Mojito", "Fresh lemon and mint with soda and ice, light and refreshing."],
      fr: ["Mojito Classique", "Citron frais et menthe avec soda et glace, léger et rafraîchissant."],
      price: "6000",
    },
    {
      ar: ["موهيتو فراولة", "فراولة مع نعناع وليمون وصودا، نكهة حلوة ومنعشة."],
      en: ["Strawberry Mojito", "Strawberry with mint, lemon, and soda, sweet and refreshing."],
      fr: ["Mojito Fraise", "Fraise avec menthe, citron et soda, doux et rafraîchissant."],
      price: "6500",
    },
    {
      ar: ["موهيتو باشن فروت", "باشن فروت مع نعناع وصودا، نكهة استوائية مميزة."],
      en: ["Passion Fruit Mojito", "Passion fruit with mint and soda, with a tropical flavor."],
      fr: ["Mojito Fruit de la Passion", "Fruit de la passion avec menthe et soda, saveur tropicale."],
      price: "7000",
    },
    {
      ar: ["موهيتو بلو بيري", "توت أزرق مع نعناع وليمون وصودا بطعم بارد وغني."],
      en: ["Blueberry Mojito", "Blueberry with mint, lemon, and soda, cool and rich."],
      fr: ["Mojito Myrtille", "Myrtille avec menthe, citron et soda, frais et riche."],
      price: "7000",
    },
    {
      ar: ["موهيتو رمان", "رمان مع نعناع وليمون وصودا، بطابع شرقي منعش."],
      en: ["Pomegranate Mojito", "Pomegranate with mint, lemon, and soda, refreshing with an oriental touch."],
      fr: ["Mojito Grenade", "Grenade avec menthe, citron et soda, rafraîchissant avec une touche orientale."],
      price: "7000",
    },
    {
      ar: ["موهيتو بيت التحفيات", "خلطة خاصة من الليمون والنعناع والفواكه الموسمية بطابع البيت."],
      en: ["House of Antiques Mojito", "A house blend of lemon, mint, and seasonal fruits."],
      fr: ["Mojito House of Antiques", "Mélange maison de citron, menthe et fruits de saison."],
      price: "7500",
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
  {
    id: "hookah",
    ar: "النراكيل",
    en: "Hookah",
    fr: "Narguilé",
    items: [
      {
        ar: ["نركيلة تفاحتين بيت التحفيات", "نكهة كلاسيكية ثابتة بطابع المقاهي العراقية القديمة."],
        en: ["House Double Apple Hookah", "A classic steady flavor inspired by old Iraqi cafés."],
        fr: ["Narguilé Double Pomme de la Maison", "Saveur classique inspirée des anciens cafés irakiens."],
        price: "12000",
      },
      {
        ar: ["نركيلة عنب ونعناع", "مزيج بارد ومنعش من العنب والنعناع."],
        en: ["Grape Mint Hookah", "A cool and refreshing blend of grape and mint."],
        fr: ["Narguilé Raisin Menthe", "Mélange frais de raisin et menthe."],
        price: "12000",
      },
      {
        ar: ["نركيلة ليمون ونعناع", "نكهة خفيفة ومنعشة بلمسة حمضية."],
        en: ["Lemon Mint Hookah", "A light and refreshing flavor with a citrus touch."],
        fr: ["Narguilé Citron Menthe", "Saveur légère et fraîche avec une touche citronnée."],
        price: "12000",
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

          <nav className="flex items-center gap-2 text-[11px]">
            <a
              href={links.website}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#1f1a14]/15 px-3 py-2 transition hover:bg-[#1f1a14] hover:text-[#f4efe4]"
            >
              {t.website}
            </a>

            <a
              href={links.store}
              target="_blank"
              rel="noreferrer"
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