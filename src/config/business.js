export const BUSINESS = {
  name: "O3 Spa and Salon",
  shortName: "O3 Spa",
  tagline: "Relax • Refresh • Rejuvenate",
  category: "Premium Spa & Salon",

  phone: "7619489280",
  whatsapp: "917619489280",
  email: "contact@o3spaandsalon.com",

  address: "Nallurahalli Main Rd, KIADB Export Promotion Industrial Area, Whitefield, Bengaluru, Karnataka 560066",

  mapQuery: "O3 Spa and Salon, Nallurahalli Main Rd, KIADB Export Promotion Industrial Area, Whitefield, Bengaluru, Karnataka 560066",

  locationShort: "Whitefield, Bengaluru",

  openingHours: "Monday – Sunday | 10:00 AM – 10:00 PM",

  rating: "4.2",
  totalReviews: "125",

  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
    twitter: "https://x.com/",
  },

  seo: {
    title: "O3 Spa and Salon | Premium Spa & Salon in Whitefield, Bengaluru",

    description: "Experience premium spa therapies, relaxing body massage, salon services and wellness treatments at O3 Spa and Salon in Whitefield, Bengaluru.",

    keywords: "O3 Spa and Salon, O3 Spa Whitefield, Spa in Whitefield, Salon in Whitefield, Spa Bengaluru, Body Massage Whitefield, Wellness Spa Bengaluru, Beauty Salon Whitefield, Luxury Spa Bengaluru, Nallurahalli Spa",
  },
};

export const whatsappBookingLink = (service = "spa appointment") => {
  const message = `Hello ${BUSINESS.name},

I would like to book a ${service}.

Please share today's availability.`;

  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const callLink = `tel:${BUSINESS.phone}`;
