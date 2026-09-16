export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number | null;
  badge?: "NEW" | "POPULAR" | "BEST SELLING";
  metaTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  images: string[];
  specs: { label: string; value: string }[];
  options: string[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  relatedServiceSlug?: string;
};

export const WHATSAPP_NUMBER = "254719855331";

export const products: Product[] = [
  {
    slug: "custom-dtf-tshirt",
    metaTitle: "Custom DTF T-Shirt Printing in Nairobi | Brandmark Print Media",
    name: "Custom DTF T-Shirt",
    category: "Apparel Printing",
    price: 1200,
    badge: "BEST SELLING",
    description: "Full-colour DTF transfer on a premium cotton tee. Your design, any size, no minimum order.",
    longDescription:
      "Direct-to-film transfer printing gives you full-colour, photo-quality artwork on a soft, breathable cotton tee. Unlike screen printing, there's no minimum order and no setup fee per colour — so a single custom shirt costs the same to produce as one from a batch of 500. The transfer is heat-pressed for a durable finish that holds up through repeated washing without cracking or fading.",
    icon: "shirt",
    images: [
      "/images/products/dtf-tshirt-black-tropical.jpg",
      "/images/products/dtf-tshirt-pink-summertime.jpg",
      "/images/products/dtf-tshirt-purple.jpg",
    ],
    specs: [
      { label: "Material", value: "100% combed cotton, 180gsm" },
      { label: "Print method", value: "DTF (Direct-to-Film) transfer" },
      { label: "Sizes", value: "XS – 3XL" },
      { label: "Turnaround", value: "2–4 working days" },
      { label: "Minimum order", value: "1 piece" },
    ],
    options: ["Any size", "Front, back or sleeve print", "Your own artwork or logo"],
    useCases: [
      "One-off personalised gifts",
      "Small event or team merchandise runs",
      "Testing a design before a bulk order",
      "Same-week custom apparel requests",
    ],
    faqs: [
      { q: "Can you print a photo, not just a logo?", a: "Yes — DTF handles full-colour photos and gradients cleanly, on both light and dark garments." },
      { q: "What if I don't have a t-shirt to print on?", a: "We stock plain tees in common sizes and colours, or you can supply your own garment." },
      { q: "How many washes will the print survive?", a: "40+ washes with normal care (cold wash, inside-out, avoid the tumble dryer)." },
    ],
    relatedServiceSlug: "dtf-printing",
  },
  {
    slug: "branded-tote-bag",
    metaTitle: "Branded Tote Bags Nairobi | Corporate Gifts — Brandmark",
    name: "Branded Reusable Tote Bag",
    category: "Promotional Materials",
    price: 800,
    description: "Heavy-duty canvas tote screen-printed with your logo. A favourite corporate giveaway.",
    longDescription:
      "A sturdy canvas tote that carries your brand well beyond the till point. Screen-printed for a crisp, long-lasting logo application, reinforced stitching at the handles, and a wide base built for daily use — groceries, laptops, conference swag. Consistently one of our most requested corporate gifting items because recipients actually keep using it.",
    icon: "bag",
    images: ["/images/products/tote-bag.jpg"],
    specs: [
      { label: "Material", value: "12oz natural canvas" },
      { label: "Print method", value: "Screen print, 1–3 colours" },
      { label: "Size", value: "38cm x 42cm, 8cm gusset" },
      { label: "Turnaround", value: "3–5 working days" },
      { label: "Minimum order", value: "1 piece, bulk pricing from 50+" },
    ],
    options: ["Single or multi-colour print", "Long or short handles", "Natural, black or navy canvas"],
    useCases: [
      "Corporate gifting and onboarding kits",
      "Conference and trade show giveaways",
      "Retail packaging alternative for boutiques",
      "Eco-conscious brand merchandise",
    ],
    faqs: [
      { q: "Can I get a two-tone or full-colour print?", a: "Screen print handles up to 3 spot colours cleanly; for full-colour photographic designs ask about UV or DTF transfer options instead." },
      { q: "Is there a bulk discount?", a: "Yes — pricing steps down at 50, 100 and 250+ units. Send your quantity for a quote." },
      { q: "Can the bag be a different colour?", a: "Yes, natural, black and navy canvas are in stock; other colours available on request for larger orders." },
    ],
  },
  {
    slug: "uv-printed-phone-case",
    metaTitle: "UV-Printed Phone Cases Nairobi | Brandmark Print Media",
    name: "UV-Printed Phone Case",
    category: "UV Printing",
    price: 1500,
    description: "Direct UV print on a durable case shell. Vivid colour, scratch-resistant finish.",
    longDescription:
      "Your artwork, cured directly onto a shock-absorbent case shell with UV-curable ink for vivid, scratch-resistant colour that won't peel or fade like a printed sticker overlay would. Works for personal photos, brand logos for corporate merchandise, or event giveaways — compatible with most popular phone models.",
    icon: "sun",
    images: ["/images/products/phone-case.jpg"],
    specs: [
      { label: "Print method", value: "Direct UV printing" },
      { label: "Finish", value: "Scratch & fade resistant" },
      { label: "Compatibility", value: "Most iPhone & Samsung models" },
      { label: "Turnaround", value: "1–2 working days" },
      { label: "Minimum order", value: "1 piece" },
    ],
    options: ["Photo, logo or custom design", "Matte or glossy finish"],
    useCases: [
      "Personal phone case with a favourite photo",
      "Branded merchandise for a small business",
      "Event or conference giveaway",
      "Matching cases for a team or family",
    ],
    faqs: [
      { q: "Will you need my exact phone model?", a: "Yes — send the model (e.g. iPhone 15, Samsung S23) so the case fits the camera cutout precisely." },
      { q: "Does the print wear off with use?", a: "No — UV ink is cured directly into the case surface, so it resists scratching and daily handling far better than a sticker overlay." },
      { q: "Can I order a few different designs at once?", a: "Yes, add each design as a separate cart item with the quantity you need." },
    ],
    relatedServiceSlug: "uv-printing",
  },
  {
    slug: "laser-cut-wall-art",
    metaTitle: "Laser-Cut Wall Art Nairobi | Custom Wood Signage — Brandmark",
    name: "Laser-Cut Wooden Wall Art",
    category: "Laser Cutting",
    price: 3500,
    badge: "POPULAR",
    description: "Precision laser-cut wood or acrylic piece — your logo or artwork, framed and ready to hang.",
    longDescription:
      "We convert your logo, a favourite piece of artwork, or a custom design into a precision laser-cut wood or acrylic wall piece. Every cut is done on our in-house laser for clean, consistent edges with intricate detail that would be impossible by hand — a striking addition to a reception area, office wall, or home.",
    icon: "laser",
    images: ["/images/products/laser-wall-art-elephant.jpg"],
    specs: [
      { label: "Material", value: "MDF wood or acrylic" },
      { label: "Sizes", value: "30cm – 100cm (custom on request)" },
      { label: "Method", value: "CNC laser cutting & engraving" },
      { label: "Turnaround", value: "5–7 working days" },
      { label: "Minimum order", value: "1 piece" },
    ],
    options: ["Your artwork or logo", "Wood, acrylic or mixed material", "Wall-mount hardware included"],
    useCases: [
      "Office reception or meeting room feature wall",
      "Statement piece for a home living room",
      "Retail store branding display",
      "Personalised housewarming or wedding gift",
    ],
    faqs: [
      { q: "Can you cut my own logo or artwork?", a: "Yes — send your logo and we'll convert it into a cut-ready file. Low-resolution logos can be traced and cleaned up for a small design fee." },
      { q: "How is it mounted on the wall?", a: "Each piece ships with wall-mount hardware fitted, ready to hang." },
      { q: "Can I get a custom size?", a: "Yes, sizes from 30cm up to 100cm are standard, and larger custom sizes are available on request." },
    ],
    relatedServiceSlug: "laser-cutting-engraving",
  },
  {
    slug: "branded-umbrella",
    metaTitle: "Branded Umbrellas Nairobi | Corporate Gifts — Brandmark",
    name: "Branded Umbrella",
    category: "Promotional Materials",
    price: 2200,
    description: "Windproof frame with full-panel branding. Built for Nairobi's rainy season.",
    longDescription:
      "A full-size, windproof umbrella with fibreglass ribs that flex rather than snap in gusty weather. Branding is printed across one or more panels for maximum visibility — a practical giveaway that keeps your logo in daily rotation for years, not just one event.",
    icon: "umbrella",
    images: ["/images/products/umbrella.jpg"],
    specs: [
      { label: "Frame", value: "Windproof fibreglass ribs" },
      { label: "Canopy", value: "190T pongee fabric" },
      { label: "Print method", value: "Panel screen print" },
      { label: "Turnaround", value: "5–7 working days" },
      { label: "Minimum order", value: "1 piece, bulk pricing from 20+" },
    ],
    options: ["1–4 branded panels", "Auto-open mechanism"],
    useCases: [
      "Executive and staff corporate gifting",
      "Retail merchandise for rainy-season sales",
      "Event giveaways with lasting daily use",
      "Client appreciation gifts",
    ],
    faqs: [
      { q: "How many panels can carry branding?", a: "Up to all 8 panels can be printed; most orders brand 1–4 panels for cost efficiency." },
      { q: "Is it genuinely windproof?", a: "Yes, the fibreglass rib frame flexes and reverses rather than snapping in strong gusts, then pops back into shape." },
      { q: "What's the minimum for a bulk order?", a: "No strict minimum, but pricing improves noticeably from 20+ units — send your quantity for a quote." },
    ],
  },
  {
    slug: "pull-up-banner",
    metaTitle: "Custom Pull-Up Banner Nairobi | Brandmark Print Media",
    name: "Custom Pull-Up Banner",
    category: "Large Format Printing",
    price: 7000,
    badge: "BEST SELLING",
    description: "Retractable roll-up banner stand, 85x200cm, printed on premium matte vinyl.",
    longDescription:
      "Our most-ordered event and storefront piece. A retractable aluminium stand with a premium matte vinyl print that sets up in under a minute and packs down into a carry bag for easy transport between venues. Sharp colour reproduction from edge to edge, no visible banding.",
    icon: "banner",
    images: ["/images/products/pullup-banners.jpg"],
    specs: [
      { label: "Size", value: "85cm x 200cm" },
      { label: "Material", value: "Matte vinyl, aluminium retractable stand" },
      { label: "Includes", value: "Carry bag" },
      { label: "Turnaround", value: "2–3 working days" },
      { label: "Minimum order", value: "1 piece" },
    ],
    options: ["Double-sided printing available", "Table-top mini stand option"],
    useCases: [
      "Trade shows and exhibition booths",
      "In-store promotions and product launches",
      "Conference speaker and sponsor displays",
      "Reception area branding",
    ],
    faqs: [
      { q: "How long does setup take?", a: "Under a minute — the banner retracts into the base and extends on a telescopic pole, no tools needed." },
      { q: "Can I reuse it for a different campaign?", a: "Yes, the stand hardware is reusable — only the printed panel needs replacing if your message changes." },
      { q: "Does it come with a carry case?", a: "Yes, every banner ships with a padded carry bag for transport between venues." },
    ],
    relatedServiceSlug: "advertising-materials",
  },
  {
    slug: "branded-water-bottle",
    metaTitle: "Branded Water Bottles Nairobi | Corporate Gifts — Brandmark",
    name: "Branded Water Bottle",
    category: "UV Printing",
    price: 900,
    description: "Stainless steel bottle with UV-printed branding. Keeps drinks cold for 24 hours.",
    longDescription:
      "A double-wall stainless steel bottle, UV-printed with your logo directly onto the metal for a finish that won't peel with condensation or daily handling. Keeps drinks cold for up to 24 hours or hot for 12 — a durable everyday item for staff kits, client gifts, or retail merchandise.",
    icon: "bottle",
    images: ["/images/products/water-bottle.jpg"],
    specs: [
      { label: "Material", value: "Double-wall stainless steel, 500ml" },
      { label: "Print method", value: "Direct UV printing" },
      { label: "Insulation", value: "Cold 24h / Hot 12h" },
      { label: "Turnaround", value: "2–3 working days" },
      { label: "Minimum order", value: "1 piece, bulk pricing from 30+" },
    ],
    options: ["Multiple colour bodies available", "Logo or full-wrap design"],
    useCases: [
      "Staff and field-team hydration kits",
      "Corporate gifting and onboarding packs",
      "Gym, sports club or event merchandise",
      "Retail add-on product line",
    ],
    faqs: [
      { q: "Does the print survive daily washing?", a: "Yes, UV-cured print is bonded to the metal surface and holds up to regular hand washing without peeling." },
      { q: "What colours are available?", a: "Matte black, white and silver are standard; other colours available for bulk orders." },
      { q: "Can I do a full-wrap design instead of just a logo?", a: "Yes, both a small logo placement and a full 360° wrap design are available." },
    ],
    relatedServiceSlug: "uv-printing",
  },
  {
    slug: "custom-mug",
    metaTitle: "Custom Printed Mugs Nairobi | Brandmark Print Media",
    name: "Custom Printed Mug",
    category: "UV Printing",
    price: 600,
    description: "Ceramic mug, full-wrap sublimation print. Dishwasher-safe.",
    longDescription:
      "A classic ceramic mug with a full-wrap sublimation print baked into the glaze — not a sticker, so it's dishwasher and microwave safe without the design lifting. Popular for office gifting, cafés building their own merchandise line, and personal keepsakes.",
    icon: "mug",
    images: ["/images/products/mug.jpg"],
    specs: [
      { label: "Material", value: "Ceramic, 11oz" },
      { label: "Print method", value: "Full-wrap sublimation" },
      { label: "Care", value: "Dishwasher & microwave safe" },
      { label: "Turnaround", value: "1–2 working days" },
      { label: "Minimum order", value: "1 piece" },
    ],
    options: ["Full colour, any design", "Colour-changing option available"],
    useCases: [
      "Office and staff gifting",
      "Café or small brand merchandise line",
      "Personal keepsakes and photo gifts",
      "Event or milestone commemoratives",
    ],
    faqs: [
      { q: "Is the print safe for daily dishwasher use?", a: "Yes — full-wrap sublimation is baked into the ceramic glaze, so it's dishwasher and microwave safe." },
      { q: "What is the colour-changing option?", a: "A heat-reactive coating that reveals your design when hot liquid is poured in — a popular novelty upgrade." },
      { q: "Can I order just one as a gift?", a: "Yes, no minimum order — one mug costs the same per-unit as a bulk batch." },
    ],
    relatedServiceSlug: "uv-printing",
  },
  {
    slug: "teardrop-flag",
    metaTitle: "Teardrop Flag Banners Nairobi | Brandmark Print Media",
    name: "Teardrop Flag Banner",
    category: "Outdoor Advertising",
    price: 6500,
    description: "Double-sided teardrop flag with cross base — built to stand out at any storefront or event.",
    longDescription:
      "A double-sided teardrop flag on a weighted cross base, built to stay upright and visible in outdoor conditions. The go-to piece for storefront promotions, product launches and activations where you need branding visible from a distance in every direction.",
    icon: "megaphone",
    images: ["/images/products/teardrop-flags.jpg"],
    specs: [
      { label: "Height", value: "3.5m (also available in 4.5m for KSh 7,500)" },
      { label: "Material", value: "Knitted polyester, double-sided print" },
      { label: "Base", value: "Weighted cross base, ground spike option" },
      { label: "Turnaround", value: "3–5 working days" },
      { label: "Minimum order", value: "1 piece" },
    ],
    options: ["Cross base or ground spike", "Single or double-sided print"],
    useCases: [
      "Storefront promotions and sales events",
      "Product launches and activations",
      "Market stalls and pop-up shops",
      "Outdoor festival or expo branding",
    ],
    faqs: [
      { q: "Will it fall over in wind?", a: "The weighted cross base is designed for outdoor stability; for softer ground or grass a spike base option is also available." },
      { q: "Can I print different messages on each side?", a: "Yes, double-sided flags can carry the same design mirrored or two different designs, front and back." },
      { q: "How is it transported?", a: "The pole breaks down into sections and packs into a slim carry bag with the flag and base." },
    ],
    relatedServiceSlug: "advertising-materials",
  },
  {
    slug: "branded-cap",
    metaTitle: "Branded Caps Nairobi | Corporate Gifts — Brandmark",
    name: "Branded Cap",
    category: "Promotional Materials",
    price: 400,
    description: "Structured cotton cap, embroidered or DTF-printed logo, adjustable strap.",
    longDescription:
      "A structured six-panel cotton cap with an adjustable strap for one-size-fits-most comfort. Your logo applied by embroidery for a premium, textured finish or DTF print for full-colour detail — either way, a wardrobe staple that keeps your brand visible all day.",
    icon: "cap",
    images: ["/images/products/cap.jpg"],
    specs: [
      { label: "Material", value: "Cotton twill, six-panel structured" },
      { label: "Branding method", value: "Embroidery or DTF print" },
      { label: "Fit", value: "Adjustable strap, one size" },
      { label: "Turnaround", value: "3–5 working days" },
      { label: "Minimum order", value: "1 piece, bulk pricing from 20+" },
    ],
    options: ["Embroidered or printed logo", "Multiple cap colours"],
    useCases: [
      "Field and outdoor staff uniforms",
      "Retail and event merchandise",
      "Sports team and club branding",
      "Corporate gifting sets",
    ],
    faqs: [
      { q: "Embroidery or print — which should I choose?", a: "Embroidery gives a premium textured finish and works best for simple 1–3 colour logos; DTF print suits full-colour or detailed designs." },
      { q: "Is the strap adjustable for different head sizes?", a: "Yes, a standard adjustable strap fits most adult sizes." },
      { q: "What colours are available?", a: "Common colours are in stock; custom colours are available for bulk orders of 50+." },
    ],
  },
  {
    slug: "custom-notebook",
    metaTitle: "Custom Notebooks Nairobi | Corporate Gifts — Brandmark",
    name: "Custom Notebook",
    category: "Promotional Materials",
    price: 850,
    description: "Hardcover A5 notebook with branded cover — a client favourite for corporate gifting.",
    longDescription:
      "A hardcover A5 notebook with a branded cover, elastic closure and ribbon bookmark — the kind of corporate gift that gets used at every meeting rather than left in a drawer. Cover printed or debossed with your logo, ruled or dotted pages inside.",
    icon: "notebook",
    images: ["/images/products/notebook.jpg"],
    specs: [
      { label: "Size", value: "A5, 160 pages" },
      { label: "Cover", value: "Hardcover, printed or debossed logo" },
      { label: "Extras", value: "Elastic closure, ribbon bookmark" },
      { label: "Turnaround", value: "4–6 working days" },
      { label: "Minimum order", value: "1 piece, bulk pricing from 50+" },
    ],
    options: ["Ruled or dotted pages", "Printed or debossed cover branding"],
    useCases: [
      "Corporate gifting and client appreciation",
      "Conference and workshop welcome kits",
      "Staff onboarding packs",
      "Retail stationery line",
    ],
    faqs: [
      { q: "Printed or debossed cover — what's the difference?", a: "Printed gives full colour on the cover; debossed presses your logo into the material for a subtle, premium texture with no ink." },
      { q: "Can I mix ruled and dotted pages in one order?", a: "Yes, specify the split when ordering and we'll produce both versions in your batch." },
      { q: "Is there a minimum order for custom notebooks?", a: "No strict minimum, though bulk pricing improves from 50+ units." },
    ],
  },
  {
    slug: "acrylic-signage-plaque",
    metaTitle: "Laser-Cut Signage Plaques Nairobi | Brandmark Print Media",
    name: "Acrylic Signage Plaque",
    category: "Laser Cutting",
    price: 6000,
    description: "Laser-cut acrylic plaque with engraved or printed branding for offices and storefronts.",
    longDescription:
      "A precision laser-cut acrylic or wood-composite plaque for office reception areas, storefronts and meeting rooms. Your logo either engraved into the material or printed with UV ink, mounted on standoffs for a clean, floating finish against the wall.",
    icon: "laser",
    images: ["/images/products/acrylic-wood-sign-plaque.jpg"],
    specs: [
      { label: "Material", value: "Acrylic or wood-composite" },
      { label: "Branding method", value: "Laser engraving or UV print" },
      { label: "Mounting", value: "Wall standoffs included" },
      { label: "Turnaround", value: "5–7 working days" },
      { label: "Minimum order", value: "1 piece" },
    ],
    options: ["Custom size on request", "Engraved or printed finish"],
    useCases: [
      "Office reception and meeting room signage",
      "Storefront and shop entrance branding",
      "Award, recognition or milestone plaques",
      "Directional or wayfinding markers",
    ],
    faqs: [
      { q: "Engraved or printed — which lasts longer outdoors?", a: "Engraving is more durable outdoors since there's no ink to fade; printed finishes are better suited to indoor use." },
      { q: "Does it come ready to mount?", a: "Yes, every plaque ships with wall standoffs fitted for a clean, floating installation." },
      { q: "Can you match our exact brand colours?", a: "Yes for printed finishes — send your Pantone, CMYK or HEX codes and we'll colour-match." },
    ],
    relatedServiceSlug: "laser-cutting-engraving",
  },
  {
    slug: "telescopic-banner",
    metaTitle: "Telescopic Banner Nairobi | Brandmark Print Media",
    name: "Telescopic Banner",
    category: "Large Format Printing",
    price: 7000,
    description: "Freestanding telescopic pole banner, 3.5m — sturdier than a pull-up stand for outdoor use.",
    longDescription:
      "A telescopic banner uses an adjustable freestanding pole rather than a retractable cassette, giving it better stability outdoors and in wind where a standard pull-up banner can tip. Popular for petrol stations, market activations and storefronts that need a taller, more durable stand than an indoor pull-up banner.",
    icon: "banner",
    images: ["/images/products/pullup-banners.jpg"],
    specs: [
      { label: "Height", value: "3.5m (also available in 4.5m for KSh 7,500)" },
      { label: "Material", value: "Matte vinyl print, telescopic steel pole" },
      { label: "Base", value: "Weighted freestanding base" },
      { label: "Turnaround", value: "3–5 working days" },
      { label: "Minimum order", value: "1 piece" },
    ],
    options: ["3.5m or 4.5m height", "Single or double-sided print"],
    useCases: [
      "Outdoor storefront advertising",
      "Petrol station and forecourt branding",
      "Market and street activations",
      "Taller visibility than a standard pull-up banner",
    ],
    faqs: [
      { q: "How is this different from a pull-up banner?", a: "A telescopic banner stands on an adjustable freestanding pole and weighted base, giving it more stability outdoors than a retractable pull-up cassette, which is better suited to indoor use." },
      { q: "Can it handle windy conditions?", a: "Yes, the weighted base is built for outdoor stability, though very strong winds call for the double-strut option — ask when you order." },
      { q: "What height should I choose?", a: "3.5m suits most storefronts; 4.5m is popular for roadside visibility from a distance." },
    ],
    relatedServiceSlug: "advertising-materials",
  },
  {
    slug: "feather-flag-banner",
    metaTitle: "Feather Flag Banner Nairobi | Brandmark Print Media",
    name: "Feather Flag Banner",
    category: "Outdoor Advertising",
    price: 1800,
    description: "Curved feather-shaped flag banner, 1.5m x 1m — compact outdoor advertising flag.",
    longDescription:
      "A feather flag's distinctive curved silhouette catches attention from a distance and works well in tighter spaces than a full teardrop flag. A compact, affordable option for storefront promotions, market stalls and pop-up activations.",
    icon: "megaphone",
    images: ["/images/products/teardrop-flags.jpg"],
    specs: [
      { label: "Size", value: "1.5m x 1m" },
      { label: "Material", value: "Knitted polyester, single or double-sided print" },
      { label: "Base", value: "Cross base, ground spike option" },
      { label: "Turnaround", value: "3–5 working days" },
      { label: "Minimum order", value: "1 piece" },
    ],
    options: ["Cross base or ground spike", "Single or double-sided print"],
    useCases: [
      "Market stalls and small storefronts",
      "Retail promotions and sales events",
      "Pop-up activations with limited space",
      "Directional signage at events",
    ],
    faqs: [
      { q: "How is a feather flag different from a teardrop flag?", a: "Feather flags have a slimmer, curved shape and are more compact — a good fit for tighter spaces where a full teardrop flag would be too wide." },
      { q: "Can I print on both sides?", a: "Yes, single or double-sided printing is available." },
      { q: "What base options are there?", a: "A weighted cross base for paved areas, or a ground spike for grass and soft ground." },
    ],
    relatedServiceSlug: "advertising-materials",
  },
  {
    slug: "pop-up-display-banner",
    metaTitle: "Pop-Up Display Banner Nairobi | Brandmark Print Media",
    name: "Pop-Up Display Banner",
    category: "Large Format Printing",
    price: 11000,
    description: "Large pop-up backdrop display, 2m x 1m — ideal for exhibitions and stage backdrops.",
    longDescription:
      "A large-format pop-up display frame with a tensioned fabric or vinyl graphic, built for exhibition booths, press backdrops and stage branding where a small pull-up banner isn't enough presence. The frame pops open and locks in place in minutes and folds flat for transport.",
    icon: "banner",
    images: ["/images/products/pullup-banners.jpg"],
    specs: [
      { label: "Size", value: "2m x 1m" },
      { label: "Material", value: "Pop-up frame with tensioned print panel" },
      { label: "Includes", value: "Carry case" },
      { label: "Turnaround", value: "5–7 working days" },
      { label: "Minimum order", value: "1 piece" },
    ],
    options: ["Custom size on request", "Curved or straight frame"],
    useCases: [
      "Exhibition and trade show booths",
      "Press conference and interview backdrops",
      "Stage and event branding",
      "Retail launch displays",
    ],
    faqs: [
      { q: "How long does it take to set up?", a: "The frame pops open and locks in place in a few minutes, no tools required." },
      { q: "Can I get a custom size?", a: "Yes, larger or smaller backdrop sizes are available on request — send your dimensions for a quote." },
      { q: "Does it fold down for transport?", a: "Yes, it folds flat into a padded carry case." },
    ],
    relatedServiceSlug: "advertising-materials",
  },
  {
    slug: "fabric-backdrop-banner",
    metaTitle: "Fabric Backdrop Banner Nairobi | Brandmark Print Media",
    name: "Fabric Backdrop Banner",
    category: "Large Format Printing",
    price: 35000,
    description: "Large fabric backdrop, 3m x 2.25m — seamless print for stage and event branding.",
    longDescription:
      "A wide-format fabric backdrop printed edge-to-edge with no visible seams, built for stages, step-and-repeat photo walls and large event branding where a standard banner is too small. Fabric prints fold for transport without creasing the way vinyl does.",
    icon: "banner",
    images: ["/images/services/posters-standees.jpg"],
    specs: [
      { label: "Size", value: "3m x 2.25m" },
      { label: "Material", value: "Seamless printed fabric" },
      { label: "Mounting", value: "Frame or wall-mount, quoted separately" },
      { label: "Turnaround", value: "5–7 working days" },
      { label: "Minimum order", value: "1 piece" },
    ],
    options: ["Custom size on request", "Frame purchase or rental"],
    useCases: [
      "Stage and conference backdrops",
      "Step-and-repeat photo walls",
      "Large event and activation branding",
      "Exhibition hall feature walls",
    ],
    faqs: [
      { q: "Does fabric crease like vinyl when folded?", a: "No, fabric prints fold and travel far better than vinyl, which is prone to creasing." },
      { q: "Do you supply the frame too?", a: "Yes, a supporting frame can be quoted alongside the print — ask when you order." },
      { q: "Can you match an exact size?", a: "Yes, custom sizes are available — send your dimensions for a quote." },
    ],
    relatedServiceSlug: "advertising-materials",
  },
  {
    slug: "printed-tent",
    metaTitle: "Printed Tent Nairobi | Branded Gazebo — Brandmark Print Media",
    name: "Printed Tent",
    category: "Outdoor Advertising",
    price: 80000,
    description: "Branded event tent, 3m x 3m — full-colour print on fabric canopy for outdoor activations.",
    longDescription:
      "A 3m x 3m gazebo tent with your branding printed directly onto the fabric canopy — a strong, weatherproof presence for market activations, outdoor sampling and event sponsorships where you need shelter and branding in one piece.",
    icon: "banner",
    images: ["/images/services/advertising-pullup.jpg"],
    specs: [
      { label: "Size", value: "3m x 3m" },
      { label: "Material", value: "Printed fabric canopy, steel frame" },
      { label: "Includes", value: "Frame, canopy and carry bag" },
      { label: "Turnaround", value: "7–10 working days" },
      { label: "Minimum order", value: "1 piece" },
    ],
    options: ["Custom size on request", "Branded side walls available"],
    useCases: [
      "Outdoor market activations and sampling",
      "Event sponsorship branding",
      "Trade fairs and expos",
      "Pop-up retail at outdoor events",
    ],
    faqs: [
      { q: "Is the canopy printed or just the frame?", a: "The canopy itself is printed with your branding, not a sticker overlay — durable through repeated setup and takedown." },
      { q: "Can I get branded side walls too?", a: "Yes, printed side walls can be added — let us know when you order." },
      { q: "How long does it take to set up on-site?", a: "Typically 15–20 minutes with two people once you're familiar with the frame." },
    ],
    relatedServiceSlug: "advertising-materials",
  },
  {
    slug: "branded-table-cloth",
    metaTitle: "Branded Table Cloth Nairobi | Brandmark Print Media",
    name: "Branded Table Cloth",
    category: "Promotional Materials",
    price: null,
    description: "Custom-printed table cloth for exhibitions, market stalls and reception desks.",
    longDescription:
      "A fitted or throw-style table cloth printed with your branding, sized to your table for exhibitions, market stalls or reception desks. Pricing depends on table size and fabric choice, so send us your dimensions for an exact quote.",
    icon: "banner",
    images: ["/images/services/print-collection.jpg"],
    specs: [
      { label: "Sizing", value: "Made to your table dimensions" },
      { label: "Material", value: "Polyester twill, fitted or throw style" },
      { label: "Turnaround", value: "5–7 working days" },
      { label: "Minimum order", value: "1 piece" },
    ],
    options: ["Fitted or throw style", "Full-colour branding, any design"],
    useCases: [
      "Exhibition and trade show tables",
      "Market stall branding",
      "Reception desk covers",
      "Registration desks at events",
    ],
    faqs: [
      { q: "Why is there no fixed price?", a: "Table cloths are made to your exact table dimensions, so pricing depends on size and fabric — send us your measurements for a quote." },
      { q: "Fitted or throw style — what's the difference?", a: "Fitted cloths hug the table shape for a tailored look; throw-style drapes loosely and fits a wider range of table sizes." },
      { q: "How fast can I get one before an event?", a: "Standard turnaround is 5–7 working days — tell us your event date and we'll confirm feasibility." },
    ],
  },
  {
    slug: "custom-printed-tshirt",
    metaTitle: "Custom Printed T-Shirt Nairobi | Brandmark Print Media",
    name: "Custom Printed T-Shirt",
    category: "Apparel Printing",
    price: 800,
    description: "Vinyl heat-transfer printed t-shirt — a budget-friendly option for single-colour designs.",
    longDescription:
      "A straightforward vinyl heat-transfer print on a cotton tee — the most budget-friendly way to get a clean, single or two-colour logo onto a shirt. For full-colour, photo-quality designs, see our DTF-printed t-shirt instead; vinyl suits simple logo or text designs best.",
    icon: "shirt",
    images: ["/images/products/dtf-tshirt-black-tropical.jpg"],
    specs: [
      { label: "Material", value: "100% cotton tee" },
      { label: "Print method", value: "Vinyl heat transfer" },
      { label: "Sizes", value: "XS – 3XL" },
      { label: "Turnaround", value: "2–4 working days" },
      { label: "Minimum order", value: "1 piece" },
    ],
    options: ["Any size", "Front, back or sleeve print"],
    useCases: [
      "Team or event t-shirts on a budget",
      "Simple one or two-colour logo designs",
      "Bulk staff uniform orders",
      "Quick-turnaround small batches",
    ],
    faqs: [
      { q: "Vinyl or DTF — which should I choose?", a: "Vinyl suits simple, single or two-colour logos at a lower price; DTF is better for full-colour or photographic designs. See our Custom DTF T-Shirt for that option." },
      { q: "Is there a minimum order?", a: "No, we print single pieces and bulk orders on the same line." },
      { q: "Can I mix sizes in one order?", a: "Yes, specify sizes and quantities when you order." },
    ],
    relatedServiceSlug: "dtf-printing",
  },
  {
    slug: "custom-printed-hoodie",
    metaTitle: "Custom Printed Hoodie Nairobi | Brandmark Print Media",
    name: "Custom Printed Hoodie",
    category: "Apparel Printing",
    price: 2300,
    description: "Custom-branded pullover hoodie — full-colour print or embroidered logo.",
    longDescription:
      "A heavyweight pullover hoodie with your logo printed or embroidered on the chest or back — a popular choice for staff uniforms, team merchandise and corporate gifting through Nairobi's cooler months.",
    icon: "shirt",
    images: ["/images/products/dtf-tshirt-purple.jpg"],
    specs: [
      { label: "Material", value: "Heavyweight cotton-blend fleece" },
      { label: "Print method", value: "DTF print or embroidery" },
      { label: "Sizes", value: "S – 3XL" },
      { label: "Turnaround", value: "3–5 working days" },
      { label: "Minimum order", value: "1 piece" },
    ],
    options: ["Any size", "Printed or embroidered logo", "Front, back or sleeve placement"],
    useCases: [
      "Staff uniforms and field-team branding",
      "Corporate gifting sets",
      "Team and event merchandise",
      "Retail merchandise line",
    ],
    faqs: [
      { q: "Printed or embroidered — which is better?", a: "Embroidery gives a premium textured finish for simple logos; DTF print suits full-colour or detailed designs." },
      { q: "What sizes are available?", a: "S through 3XL are standard; larger sizes on request for bulk orders." },
      { q: "Is there a bulk discount?", a: "Yes, pricing improves at 20+ units — send your quantity for a quote." },
    ],
    relatedServiceSlug: "dtf-printing",
  },
];

export type Service = {
  slug: string;
  name: string;
  metaTitle: string;
  description: string;
  longDescription: string;
  extendedDescription: string;
  points: string[];
  whoFor: string[];
  included: string[];
  pricingNote: string;
  icon: string;
  image: string;
  gallery: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  relatedProductSlugs?: string[];
};

export const services: Service[] = [
  {
    slug: "branding-signage",
    metaTitle: "Branding & Signage in Nairobi | Shopfront Signs — Brandmark",
    name: "Branding & Signage",
    description: "Shop fascias, illuminated signs, cut-out lettering and directional signage that make your storefront impossible to miss.",
    longDescription:
      "Your storefront is your first impression. We design, fabricate and install everything from backlit 3D lettering and shop fascias to directional and wayfinding signage — built to survive Nairobi's weather and installed by our own crew, not a subcontractor.",
    extendedDescription:
      "Most businesses lose walk-in customers before they ever step through the door, simply because their signage doesn't hold up — faded acrylic, flickering lights, lettering that peeled off after one rainy season. We build signage the way we'd want it built for our own shop: rust-resistant frames, weatherproof LED modules for backlit letters, and UV-stable vinyl and paint so colours don't wash out under equatorial sun. Every job starts with a physical site visit, not a guess from photos, because a fascia that looks right on screen can look wrong once it's up against your actual wall, parking layout and street sightlines. We also handle the boring-but-critical parts most sign shops skip: county approvals for oversized or illuminated signage, safe scaffolding and rigging for elevated installs, and electrical wiring for backlit units done by a qualified technician, not a printer with a drill.",
    points: [
      "3D & backlit lettering",
      "2D signage, lit or unlit",
      "Reverse-lit & stand-alone signage",
      "Shop fascia branding",
      "Reception, road & directory signage",
      "Wayfinding & directional signs",
    ],
    whoFor: [
      "New storefronts needing fascia signage before opening day",
      "Rebrands replacing outdated or damaged signage",
      "Offices, clinics and schools needing wayfinding systems",
      "Malls and business parks requiring approved, code-compliant signage",
    ],
    included: [
      "Free on-site measurement and consultation",
      "To-scale design mockup before fabrication",
      "Weatherproof materials rated for outdoor use",
      "Professional installation and old-sign removal",
      "12-month workmanship warranty on installed signage",
    ],
    pricingNote:
      "Simple cut-out lettering typically starts from KSh 15,000, while backlit 3D fascia signage for a standard shopfront runs KSh 60,000–250,000 depending on size, lighting and materials. Share your storefront dimensions and design for an exact quote.",
    icon: "signage",
    image: "/images/services/signage-1.jpg",
    gallery: [
      "/images/services/signage-1.jpg",
      "/images/services/signage-2.jpg",
      "/images/services/signage-3.jpg",
      "/images/services/signage-4.jpg",
    ],
    process: [
      { title: "Site visit & measure", body: "We assess your storefront or premises and take exact measurements." },
      { title: "Design & mockup", body: "You review a to-scale visual before anything is fabricated." },
      { title: "Fabrication", body: "Cut, printed and assembled in our workshop." },
      { title: "Installation", body: "Our own crew installs on-site across Nairobi." },
    ],
    faqs: [
      {
        q: "Do you handle county approvals for large or illuminated signage?",
        a: "Yes — for signage above the standard size threshold or with lighting, we can prepare the drawings needed for county sign-off as part of the project.",
      },
      {
        q: "Can you remove and dispose of our old signage?",
        a: "Yes, removal and safe disposal of existing signage is included in most fascia and shopfront jobs.",
      },
      {
        q: "How long does signage last before it needs replacing?",
        a: "Backlit acrylic and vinyl-wrapped signage typically holds its colour and finish for 4–6 years outdoors before a refresh is worth considering.",
      },
    ],
  },
  {
    slug: "digital-offset-printing",
    metaTitle: "Digital & Offset Printing in Nairobi | Brandmark Print Media",
    name: "Digital & Offset Printing",
    description: "Business cards, brochures, magazines and books — sharp, high-volume printing with fast turnaround.",
    longDescription:
      "From a single box of business cards to a print run of thousands of brochures, our digital and offset presses cover both ends of the volume spectrum without compromising on colour accuracy or paper quality.",
    extendedDescription:
      "Digital and offset printing solve different problems, and we run both so you're never paying for the wrong one. Digital press work is our go-to for short runs and jobs that need to move fast — business cards, letterheads, small brochure batches — with no plates to set up, so a 50-card order costs proportionally the same as a 500-card one. Offset comes in once volume climbs: brochures, magazines, catalogues and books in the thousands, where offset's per-unit cost drops sharply and colour consistency across a long run is tighter than digital can match. We stock a range of paper weights and finishes — matte, gloss, uncoated, textured cover stock — and can advise on what a given piece actually needs rather than defaulting to whatever's cheapest.",
    points: ["Business cards & letterheads", "Brochures & magazines", "Books & catalogues"],
    whoFor: [
      "Startups needing a first batch of business cards and letterheads",
      "Marketing teams running brochure or flyer campaigns",
      "Authors and publishers printing books or catalogues",
      "Corporates needing branded stationery restocked regularly",
    ],
    included: [
      "Free digital proof before your job goes to print",
      "Guidance on paper stock and finish for your use case",
      "Trimming, folding, binding or laminating as needed",
      "Pickup from our Nairobi office or delivery",
    ],
    pricingNote:
      "Business cards start from KSh 2,500 per box of 100 (double-sided, matte or gloss). Brochures and larger runs are priced per piece based on paper stock, page count and quantity — send your specs for a quote.",
    icon: "print",
    image: "/images/services/digital-press.jpg",
    gallery: ["/images/services/digital-press.jpg", "/images/services/print-collection.jpg"],
    process: [
      { title: "Send your artwork", body: "Vector files print best; we can also clean up low-res logos." },
      { title: "Proof approval", body: "We share a digital proof before running the full job." },
      { title: "Print & finish", body: "Trimmed, bound or laminated as required." },
      { title: "Pickup or delivery", body: "Collect from our Nairobi office or have it delivered." },
    ],
    faqs: [
      {
        q: "What's the difference between digital and offset for my job?",
        a: "Digital suits small quantities and fast turnaround; offset becomes more cost-effective once you're printing in the thousands with consistent colour needs. We'll recommend whichever fits your quantity and budget.",
      },
      {
        q: "Can you design the layout, or do I need to supply print-ready artwork?",
        a: "Either works — send print-ready files, or describe what you need and our design team can lay it out for a small design fee.",
      },
      {
        q: "Do you print single books or only bulk runs?",
        a: "We handle both — single proof copies through digital printing, and larger print runs via offset once you're ready to scale.",
      },
    ],
  },
  {
    slug: "large-format-screen-printing",
    metaTitle: "Large Format & Screen Printing in Nairobi | Brandmark",
    name: "Large Format & Screen Printing",
    description: "Posters, banners and screen-printed apparel produced on our in-house large-format and screen printing lines.",
    longDescription:
      "Our large-format line handles posters, banners and point-of-sale displays at any size, while our screen printing press covers bulk apparel runs where DTF isn't the right fit — sharp registration across multiple colours at volume.",
    extendedDescription:
      "Large format and screen printing serve the jobs that are either too big or too bulky for a standard press. Our large-format printer outputs posters, banners and point-of-sale displays at widths most shops can't touch, with consistent colour from edge to edge even at billboard scale. Our screen press handles apparel and merchandise once you're past DTF's sweet spot — usually 50+ identical pieces — where burning screens per colour brings the per-unit cost down sharply and gives a slightly heavier, more traditional ink feel that some brands prefer for uniforms and event merchandise. We manage colour separation ourselves, so a five-colour logo doesn't turn into a five-week wait.",
    points: ["Posters & banners", "Screen-printed apparel", "Point-of-sale displays"],
    whoFor: [
      "Events needing large posters or venue banners",
      "Retailers wanting in-store point-of-sale displays",
      "Teams or companies ordering 50+ identical branded shirts",
      "Agencies producing campaign materials at scale",
    ],
    included: [
      "Colour separation and print-file preparation",
      "Screen setup for your specific colour count",
      "Quality check on every production batch",
      "Packing for pickup or bulk delivery",
    ],
    pricingNote:
      "Large-format posters and banners are priced per square metre depending on material. Screen-printed apparel typically becomes more cost-effective than DTF from around 50 pieces upward — share your quantity and colour count for exact pricing.",
    icon: "banner",
    image: "/images/services/large-format-printer.jpg",
    gallery: [
      "/images/services/large-format-printer.jpg",
      "/images/services/posters-standees.jpg",
      "/images/services/screen-printing-press.jpg",
    ],
    process: [
      { title: "Artwork & colour separation", body: "We prep your design for the number of print colours needed." },
      { title: "Screen setup", body: "Screens are burned per colour for your run." },
      { title: "Production run", body: "Printed and cured for durability." },
      { title: "Quality check & pack", body: "Every batch is checked before dispatch." },
    ],
    faqs: [
      {
        q: "Should I choose screen printing or DTF for my apparel order?",
        a: "For under 50 pieces or full-colour photographic designs, DTF wins on cost and speed. For 50+ identical pieces with a simple colour count, screen printing is usually cheaper per unit.",
      },
      {
        q: "What's the largest size you can print?",
        a: "Our large-format line handles banners and posters up to billboard width — tell us your dimensions and we'll confirm feasibility.",
      },
      {
        q: "How many colours can you screen print in one design?",
        a: "We regularly run up to 6 colours per design; more is possible but adds setup time and cost.",
      },
    ],
    relatedProductSlugs: ["pull-up-banner"],
  },
  {
    slug: "car-fleet-branding",
    metaTitle: "Car & Fleet Branding in Nairobi | Vehicle Wraps — Brandmark",
    name: "Car & Fleet Branding",
    description: "Full and partial vehicle wraps for cars, vans and trucks — durable branding that travels with your business.",
    longDescription:
      "Whether it's one delivery van or a full fleet, we design and install vinyl wraps that turn every trip into a branding opportunity — full wraps, partial decals, or window graphics, all fitted by our own installation team with minimal downtime to your vehicles.",
    extendedDescription:
      "A branded vehicle earns thousands of passive impressions a month just sitting in traffic — but only if the wrap is installed properly and holds up. We use cast vinyl with a protective laminate layer rather than cheaper calendared vinyl, because cast vinyl conforms to body curves without lifting at the edges and resists UV fading far longer under direct sun. Before any material touches your vehicle, we build a full-scale design mockup against your exact vehicle model so panel lines, door handles and mirrors are accounted for — not guessed at. For fleets, we can stagger installation across multiple vehicles so your operation never has more than one or two units off the road at a time.",
    points: ["Full & partial wraps", "Fleet decals", "Window & window-tint graphics"],
    whoFor: [
      "Delivery and logistics companies branding their fleet",
      "SMEs wanting a branded car or van for daily operations",
      "Franchises needing consistent branding across multiple vehicles",
      "Businesses adding window or window-tint graphics to an office or vehicle",
    ],
    included: [
      "Full-scale design mockup on your exact vehicle",
      "Cast vinyl with protective laminate for durability",
      "On-site or workshop installation",
      "Staggered scheduling for fleets to minimise downtime",
    ],
    pricingNote:
      "Partial decals start from KSh 15,000 per vehicle; full wraps typically range KSh 45,000–120,000 depending on vehicle size and vinyl coverage. Fleet orders receive volume pricing — send your vehicle count and type for a quote.",
    icon: "car",
    image: "/images/services/vehicle-branding-1.jpg",
    gallery: ["/images/services/vehicle-branding-1.jpg", "/images/services/vehicle-branding-2.jpg"],
    process: [
      { title: "Vehicle assessment", body: "We measure your vehicle(s) and plan the wrap layout." },
      { title: "Design approval", body: "Full-scale mockup on your exact vehicle shape." },
      { title: "Print & laminate", body: "Printed on premium vinyl with protective laminate." },
      { title: "Installation", body: "Fitted on-site or at our workshop with minimal downtime." },
    ],
    faqs: [
      {
        q: "How long does a full wrap take to install?",
        a: "A standard car or van full wrap takes 1–2 days; partial decals can often be done in a few hours.",
      },
      {
        q: "Will the wrap damage my vehicle's paint?",
        a: "No — properly installed and removed vinyl wrap protects the paint underneath and leaves no residue on removal when done by a trained installer.",
      },
      {
        q: "Can you brand vehicles at our depot instead of your workshop?",
        a: "Yes, on-site installation is available for fleets — we'll schedule around your operating hours to minimise downtime.",
      },
    ],
  },
  {
    slug: "dtf-printing",
    metaTitle: "DTF Printing in Nairobi | No-Minimum Custom Shirts — Brandmark",
    name: "DTF / No-Cut Printing",
    description: "Direct-to-film transfers for apparel — full colour, no minimum quantity, durable through repeated washes.",
    longDescription:
      "DTF printing lets us produce full-colour, photo-quality apparel prints with zero minimum order and no per-colour setup cost. Ideal for one-off gifts, small batch merchandise runs, or testing a design before committing to bulk screen printing.",
    extendedDescription:
      "DTF (direct-to-film) has become our default recommendation for anyone unsure how many shirts they'll actually need. Because there's no screen to burn and no per-colour setup fee, a single custom shirt costs the same to produce as one pulled from an order of five hundred — so you're never forced to over-order just to make the economics work. The transfer film is printed in full CMYK plus white underbase, meaning gradients, photos and fine detail come through cleanly on both light and dark garments, which screen printing struggles with. Once heat-pressed, the finish sits slightly raised off the fabric with a soft-hand feel, and holds up through 40+ home washes without cracking when cared for normally (cold wash, inside-out, avoid the tumble dryer).",
    points: ["No minimum order", "Full-colour, any garment", "Fast same-week turnaround"],
    whoFor: [
      "Individuals ordering one or a handful of custom shirts",
      "Small businesses testing a new merchandise design",
      "Event organisers needing quick-turnaround branded apparel",
      "Anyone with a full-colour or photographic design unsuited to screen printing",
    ],
    included: [
      "Full-colour print with white underbase for dark garments",
      "Placement on front, back or sleeve",
      "Heat-press application for a durable bond",
      "No minimum order quantity",
    ],
    pricingNote:
      "DTF transfers are priced per piece starting from KSh 1,200 for a standard tee, including the garment. Supply your own garment and we can quote transfer-only pricing.",
    icon: "shirt",
    image: "/images/services/dtf-machine.jpg",
    gallery: [
      "/images/services/dtf-machine.jpg",
      "/images/services/dtf-shirt-1.jpg",
      "/images/services/dtf-shirt-2.jpg",
    ],
    process: [
      { title: "Send your design", body: "Any file format — we'll prep it for print." },
      { title: "Film print", body: "Printed onto transfer film in full colour." },
      { title: "Heat press", body: "Pressed onto your garment for a durable bond." },
      { title: "Ready in days", body: "Most orders ready within 2–4 working days." },
    ],
    faqs: [
      {
        q: "How many washes will the print survive?",
        a: "With normal care (cold wash, inside-out, no tumble dryer), DTF prints typically hold up through 40+ washes without cracking or fading.",
      },
      {
        q: "Can I supply my own t-shirts or hoodies to print on?",
        a: "Yes — bring or ship us your own garments and we'll quote transfer-and-press pricing only.",
      },
      {
        q: "Is there really no minimum order?",
        a: "Correct — we print a single piece at the same per-unit setup cost as a bulk order, since there's no screen or plate to prepare.",
      },
    ],
    relatedProductSlugs: ["custom-dtf-tshirt"],
  },
  {
    slug: "uv-printing",
    metaTitle: "UV Printing in Nairobi | Custom Merchandise — Brandmark",
    name: "UV Printing",
    description: "Direct UV printing onto phone cases, bottles, plaques and promotional items for a premium, scratch-resistant finish.",
    longDescription:
      "Our UV flatbed printer cures ink directly onto rigid and curved surfaces — phone cases, bottles, mugs, plaques and more — for a scratch and fade-resistant finish with none of the peeling risk of printed stickers or wraps.",
    extendedDescription:
      "UV printing cures ink with ultraviolet light the instant it hits the surface, rather than letting it air-dry or soak in — which is why the result is so much more durable than a printed sticker or vinyl overlay. The ink bonds directly to the material, so there's no edge to catch a fingernail on and no laminate layer to eventually yellow or peel. This makes it the right process for items that get handled daily: phone cases, water bottles, laptop lids, desk plaques, and awards. Our flatbed can also print on slightly uneven or curved surfaces using a jig, which is how we get clean wraparound prints on cylindrical items like tumblers and mugs without the print looking stretched at the seam.",
    points: ["Promotional merchandise", "Rigid & curved surfaces", "Scratch & fade resistant"],
    whoFor: [
      "Businesses wanting durable branded merchandise for gifting",
      "Individuals personalising a phone case, bottle or mug",
      "Award and recognition plaques for offices and events",
      "Retailers producing small-batch branded product lines",
    ],
    included: [
      "Direct UV-cured print, no laminate or sticker overlay",
      "Placement guidance for curved or uneven surfaces",
      "Colour-matching to your brand palette where possible",
      "Quality check before dispatch",
    ],
    pricingNote:
      "UV printing on customer-supplied items starts from KSh 500 per piece depending on size and surface. Our own catalogue items (mugs, bottles, phone cases) are priced individually in the shop.",
    icon: "sun",
    image: "/images/services/uv-printer.jpg",
    gallery: ["/images/services/uv-printer.jpg"],
    process: [
      { title: "Choose your item", body: "Phone case, bottle, mug, plaque or your own supplied item." },
      { title: "Design placement", body: "We position your artwork to fit the surface." },
      { title: "UV cure printing", body: "Ink is cured directly onto the item." },
      { title: "Quality check", body: "Checked for finish and colour accuracy before dispatch." },
    ],
    faqs: [
      {
        q: "Can you print on items I already own?",
        a: "Yes, as long as the item fits our flatbed and has a printable surface — bring it in or ship it to us for a quote.",
      },
      {
        q: "Is UV print more durable than a sticker or vinyl decal?",
        a: "Yes — the ink is cured directly onto the surface rather than applied as an overlay, so there's no edge to lift or peel over time.",
      },
      {
        q: "Can you print on curved items like tumblers?",
        a: "Yes, using a rotary jig we can produce clean wraparound prints on cylindrical items without visible seam stretching.",
      },
    ],
    relatedProductSlugs: ["uv-printed-phone-case", "custom-mug", "branded-water-bottle"],
  },
  {
    slug: "laser-cutting-engraving",
    metaTitle: "Laser Cutting & Engraving in Nairobi | Brandmark Print Media",
    name: "Laser Cutting & Engraving",
    description: "Precision-cut wood, acrylic and metal signage, awards and decor pieces engraved to exact specification.",
    longDescription:
      "Our CNC laser cuts and engraves wood, acrylic and select metals with fine detail impossible by hand — office signage, awards, decor pieces and intricate wall art, all produced in-house to your exact specification.",
    extendedDescription:
      "A laser cutter reads your design as a vector file and burns or cuts along that exact path, which means fine detail that would be tedious or impossible to replicate by hand — thin bridges in lettering, intricate silhouette art, consistent engraving depth across dozens of identical awards — comes out identical every time. We work primarily in MDF and birch plywood, cast acrylic, and select thin-gauge metals, choosing material based on whether the piece needs to survive outdoors (acrylic, treated wood) or is purely decorative indoors (raw wood, engraved detail). Any logo or artwork can be converted into a cut-ready vector file by our design team if you don't already have one, and we always send a proof of the exact cut lines before committing material to the laser.",
    points: [
      "Wood & acrylic signage",
      "Awards, plaques & tile plaques",
      "Stamps & company seals",
      "Leather & flask labelling",
      "Custom decor pieces",
    ],
    whoFor: [
      "Offices wanting a reception or meeting-room logo sign",
      "Event organisers needing custom awards or trophies",
      "Individuals commissioning personalised wall art or gifts",
      "Brands wanting a distinctive laser-cut retail display piece",
    ],
    included: [
      "Vector conversion of your logo or artwork if needed",
      "Cut-line proof before production",
      "Choice of wood, acrylic or metal finish",
      "Mounting hardware fitted where required",
    ],
    pricingNote:
      "Small engraved plaques start from KSh 2,500; wall art and larger signage pieces range KSh 3,500–15,000 depending on size and material. Custom awards are priced per piece — send your design and quantity for a quote.",
    icon: "laser",
    image: "/images/services/laser-cutter-machine.jpg",
    gallery: [
      "/images/services/laser-cutter-machine.jpg",
      "/images/services/laser-elephant-art.jpg",
      "/images/services/laser-wood-signage.jpg",
    ],
    process: [
      { title: "Vector your design", body: "We convert your logo or artwork into a cut-ready file." },
      { title: "Material selection", body: "Wood, acrylic or metal, in your preferred finish." },
      { title: "Laser cut & engrave", body: "Precision-cut on our in-house CNC laser." },
      { title: "Finish & mount", body: "Sanded, sealed and fitted with mounting hardware if needed." },
    ],
    faqs: [
      {
        q: "I only have a low-resolution logo — can you still cut it?",
        a: "Yes, our design team can trace and rebuild most logos into a clean cut-ready vector file for a small design fee.",
      },
      {
        q: "Can laser-cut signage be used outdoors?",
        a: "Acrylic and properly sealed/treated wood hold up outdoors well; raw untreated wood is best kept for indoor pieces.",
      },
      {
        q: "Do you make bulk awards for events with many recipients?",
        a: "Yes — once the design and engraving text template are approved, we can produce dozens of consistent awards efficiently.",
      },
    ],
    relatedProductSlugs: ["laser-cut-wall-art", "acrylic-signage-plaque"],
  },
  {
    slug: "advertising-materials",
    metaTitle: "Pull-Up Banners & Event Branding in Nairobi | Brandmark",
    name: "Indoor / Outdoor Advertising",
    description: "Pull-up banners, teardrop flags, billboards and promotional giveaways for events, activations and everyday visibility.",
    longDescription:
      "Everything you need to show up at an event or activation — pull-up banners, teardrop flags, point-of-sale standees and branded giveaways, produced and ready in days, not weeks.",
    extendedDescription:
      "Event and activation materials live or die by the deadline — a banner that arrives the day after your launch is worthless, no matter how good it looks. We built this service around speed without cutting corners on durability: pull-up banners on retractable aluminium stands that survive repeated setup and teardown across a multi-city tour, teardrop flags weighted to stay upright in Nairobi's wind gusts, and point-of-sale standees sturdy enough to survive a busy retail floor for months. We also handle the awkward middle ground of billboards and hoardings for brands that need outdoor reach without committing to a long-term static site lease. If you're ordering for a specific date, tell us upfront — we build our production schedule around your event date, not the other way round.",
    points: ["Pull-up & teardrop banners", "Billboards & hoardings", "Branded promotional items"],
    whoFor: [
      "Event organisers needing banners and flags for a fixed date",
      "Retailers wanting point-of-sale standees for a promotion",
      "Brands running outdoor billboard or hoarding campaigns",
      "Companies needing branded giveaways for activations",
    ],
    included: [
      "Design layout confirmation before print",
      "Durable stands and bases included with banners/flags",
      "Delivery timed to your event date",
      "Bulk pricing on branded giveaway items",
    ],
    pricingNote:
      "Pull-up banners start from KSh 4,500 and teardrop flags from KSh 5,500, both including the stand/base. Billboard and hoarding campaigns are quoted per site and duration — tell us your event date and materials needed for a full quote.",
    icon: "megaphone",
    image: "/images/services/advertising-pullup.jpg",
    gallery: ["/images/services/advertising-pullup.jpg", "/images/services/advertising-teardrop.jpg"],
    process: [
      { title: "Tell us the event", body: "Date, venue and what materials you need." },
      { title: "Design & proof", body: "Layouts confirmed before print." },
      { title: "Print & assemble", body: "Produced and fitted to stands or bases." },
      { title: "On-time delivery", body: "Ready before your event date, guaranteed." },
    ],
    faqs: [
      {
        q: "How far in advance should I order for an event?",
        a: "For standard banners and flags, 3–5 working days is usually enough. Billboard or hoarding bookings should be arranged at least 2–3 weeks ahead.",
      },
      {
        q: "Can pull-up banners and flags be reused for future events?",
        a: "Yes — the hardware is designed for repeated setup and teardown, so only the print panel needs replacing if your messaging changes.",
      },
      {
        q: "Do teardrop flags stay upright in windy conditions?",
        a: "Yes, the weighted cross base is designed for outdoor stability; a ground spike option is also available for grass or soft ground.",
      },
    ],
    relatedProductSlugs: ["pull-up-banner", "teardrop-flag"],
  },
];

export const clients = [
  "Jumia", "Safaricom", "Kenya Power", "KTDA", "Standard Chartered",
  "Kenya Railways", "Citizen TV", "Equity Bank", "Absa", "EABL", "Kenya Revenue Authority", "Track & Trace",
];

export const testimonials = [
  {
    name: "Wanjiru K.",
    role: "Marketing Lead, Retail",
    quote: "Brandmark turned our shop rebrand around in days — the signage looks better in person than the mockups did.",
    project: "Branding & Signage",
    date: "June 2026",
  },
  {
    name: "Otieno M.",
    role: "Founder, Startup",
    quote: "We needed 200 DTF shirts for a launch with two days' notice. Colours came out exactly as designed.",
    project: "DTF Printing",
    date: "May 2026",
  },
  {
    name: "Achieng P.",
    role: "Operations Manager, Logistics",
    quote: "Our whole fleet is wrapped now. Durable, sharp, and installed with zero downtime to our trucks.",
    project: "Car & Fleet Branding",
    date: "April 2026",
  },
  {
    name: "Kamau S.",
    role: "Events Coordinator",
    quote: "Teardrop flags and pull-up banners arrived a full day early for our activation. Will reorder every quarter.",
    project: "Outdoor Advertising",
    date: "March 2026",
  },
  {
    name: "Njeri A.",
    role: "Office Manager, Finance",
    quote: "The laser-cut reception signage is the first thing every visitor comments on. Worth every shilling.",
    project: "Laser Cutting & Engraving",
    date: "February 2026",
  },
  {
    name: "Barasa T.",
    role: "Brand Manager, FMCG",
    quote: "Their UV-printed merchandise held up through an entire outdoor sampling season without fading.",
    project: "UV Printing",
    date: "January 2026",
  },
];

export const faqs = [
  {
    q: "How fast is your standard turnaround?",
    a: "Most digital and DTF orders ship within 2–4 working days. Large format, vehicle wraps and laser-cut signage typically take 5–10 working days depending on volume — we'll confirm an exact date on your quote.",
  },
  {
    q: "Is there a minimum order quantity?",
    a: "No. DTF printing, UV printing and most promotional items have no minimum — we print single pieces and bulk orders on the same lines.",
  },
  {
    q: "Do you handle installation for signage and vehicle branding?",
    a: "Yes — our team installs shop signage, wall graphics and vehicle wraps on-site across Nairobi and can arrange installation further afield.",
  },
  {
    q: "What file formats do you accept for artwork?",
    a: "Vector files (AI, EPS, PDF, SVG) print best. We also accept high-resolution PNG/JPG and can recreate or clean up low-res logos for a small design fee.",
  },
  {
    q: "Do I need to pay a deposit?",
    a: "Custom and bulk orders require a 50% deposit to begin production, with the balance due on completion. Catalogue products from the shop are paid in full via the checkout request.",
  },
  {
    q: "Can you match my exact brand colours?",
    a: "Yes — send us your Pantone/CMYK/HEX codes and we'll colour-match across print, vinyl and vehicle wrap materials wherever the substrate allows.",
  },
];
