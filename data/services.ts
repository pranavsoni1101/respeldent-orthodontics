// data/services.ts
export type Service = {
  slug: string;                  // unique slug used in URLs
  title: string;
  category?: string;             // optional grouping
  short: string;                 // short one-liner / card subtitle
  heroImage?: string;            // optional hero image path
  overview: string;              // full overview (HTML or plain text)
  highlights?: string[];         // bullet points / benefits
  indications?: string[];        // when to consider this service
  procedure?: string[];          // steps / what to expect
  faqs?: { q: string; a: string }[];
  related?: string[];            // slugs of related services
  subitems?: {                    // useful for Brackets -> metal/ceramic ...
    id: string;
    title: string;
    short?: string;
    desc?: string;
  }[];
};

export const SERVICES: Service[] = [
  {
    slug: "brackets",
    title: "Brackets",
    short: "Reliable fixed appliance options for all ages",
    overview:
      "Brackets are fixed orthodontic appliances bonded to the teeth and joined by archwires. We offer modern bracket systems tailored to aesthetics and efficiency.",
    highlights: [
      "Precise tooth movement",
      "Durable and time-tested",
      "Options for discrete finishes (ceramic / lingual)",
    ],
    subitems: [
      { id: "metal-brackets", title: "Metal Brackets", short: "Strong, cost-effective" },
      { id: "ceramic-brackets", title: "Ceramic Brackets", short: "Tooth-colored aesthetics" },
      { id: "self-ligating-brackets", title: "Self-ligating Brackets", short: "Faster, lower friction" },
      { id: "lingual-brackets", title: "Lingual Brackets", short: "Hidden behind teeth" },
    ],
    indications: ["Crowding", "Malocclusion", "Complex tooth movements"],
    procedure: [
      "Comprehensive assessment & records",
      "Bonding visit: brackets placed and wire inserted",
      "Periodic adjustments (every 4–8 weeks)",
      "Finishing and retention phase",
    ],
    faqs: [
      { q: "Are brackets painful?", a: "You may feel pressure for a few days after placement or adjustments — usually manageable with mild analgesics." },
      { q: "Can I play sports?", a: "Yes — we recommend a mouthguard for contact sports while wearing braces." }
    ],
    related: ["clear-aligners", ]
  },

  {
    slug: "clear-aligners",
    title: "Clear Aligners",
    short: "Discreet, removable tooth alignment",
    overview:
      "Clear aligners are custom, removable trays that move teeth gradually. Ideal for patients seeking low-visibility treatment.",
    highlights: ["Aesthetic & removable", "Good for mild-to-moderate cases", "Digital treatment planning"],
    indications: ["Mild crowding", "Spacing", "Patients preferring discreet option"],
    procedure: [
      "3D scan & digital treatment plan",
      "Sequential aligner deliveries every 1–2 weeks",
      "Periodic follow-ups and refinements",
      "Retention phase using retainers"
    ],
    faqs: [
      { q: "How many hours per day should I wear them?", a: "Aim for 20–22 hours per day for predictable results." },
      { q: "What if I lose an aligner?", a: "Contact clinic — we will advise whether to move to the next set or issue a replacement." }
    ],
    related: ["brackets", ]
  },

  {
    slug: "growth-modifying-appliances",
    title: "Growth Modifying Appliances",
    short: "Guiding jaw growth at key ages",
    overview:
      "Used mainly in growing patients to encourage or restrain jaw growth and correct skeletal discrepancies.",
    highlights: ["Early intervention", "Can reduce need for surgery later", "Targeted orthopedic change"],
    indications: ["Skeletal Class II/III in growing children", "Crossbite with jaw asymmetry"],
    procedure: [
      "Growth assessment & timing evaluation",
      "Appliance fitting and monitoring",
      "Adjustment visits during growth period",
      "Transition to fixed appliances if required"
    ],
    faqs: [{ q: "At what age should this be considered?", a: "Typically during active growth (around 8–14 years) — exact timing depends on individual evaluation." }],
    related: ["pediatric"]
  },

  {
    slug: "mini-implant",
    title: "Mini-Implants (Temporary Anchorage Devices)",
    short: "Stable anchorage for complex tooth movements",
    overview:
      "Mini-implants provide temporary skeletal anchorage (TADs) to move teeth predictably without relying on patient compliance.",
    highlights: ["Precise anchorage", "Short surgical placement", "Facilitates complex mechanics"],
    indications: ["Intrusion of molars", "Space closure without reciprocal movement"],
    procedure: ["Local anaesthesia placement", "Load with orthodontic mechanics", "Removal after use (minor procedure)"],
    faqs: [{ q: "Are they painful?", a: "Placement is done under local anaesthesia and is usually well tolerated." }],
    related: ["extra-alveolar-screws", "artistic-mechanics"]
  },

  {
    slug: "extra-alveolar-screws",
    title: "Extra-Alveolar Screws",
    short: "Anchorage in specific biomechanical sites",
    overview:
      "Screws placed in extra-alveolar regions (e.g., buccal shelf) to manage larger movements safely and efficiently.",
    highlights: ["Strong anchorage", "Enables en-masse retraction", "Useful in adult cases"],
    indications: ["Large space closure", "Significant retraction needs"],
    procedure: ["CBCT planning if needed", "Placement under local anesthesia", "Integration with mechanics", "Removal post-treatment"],
    faqs: [{ q: "Do they integrate like implants?", a: "These are temporary screws and are easier to remove; they do not osseointegrate like dental implants." }],
    related: ["mini-implant"]
  },

  {
    slug: "digital-surgical-planning",
    title: "Digital Surgical Planning",
    short: "3D planning for combined orthodontic-surgical cases",
    overview:
      "We use CBCT and digital workflows to plan orthognathic surgery with precise surgical splints and coordinated orthodontics.",
    highlights: ["3D visualization", "Predictable surgical results", "Interdisciplinary collaboration"],
    indications: ["Severe skeletal discrepancies", "Facial asymmetry needing surgery"],
    procedure: ["Records & CBCT", "Virtual surgery & splint design", "Surgical execution and postoperative orthodontics"],
    faqs: [{ q: "Do you work with surgeons?", a: "Yes — we collaborate closely with oral & maxillofacial surgeons for combined care." }],
    related: ["artistic-mechanics"]
  },

  {
    slug: "artistic-mechanics",
    title: "Artistic Mechanics",
    short: "Finishing, detailing & smile artistry",
    overview:
      "The finishing phase — bracket positioning, detailing bends, and biomechanics — is where function and aesthetics are perfected.",
    highlights: ["Fine detailing", "Aesthetic tooth positioning", "Occlusal optimization"],
    indications: ["Finalizing alignment", "Smile design refinements"],
    procedure: ["Finishing visits", "Detailing bends and attachments", "Final polishing and retention planning"],
    faqs: [{ q: "What is smile design?", a: "Consideration of tooth proportions, gingival levels, and facial harmony to optimize the final result." }],
    related: ["digital-surgical-planning"]
  },
];
