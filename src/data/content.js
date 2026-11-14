// ---------------------------------------------------------------------------
// Villa Cavo — default page content
// Site-wide text and every page section. The admin panel (/admin) edits a copy
// of this; whatever is published there is layered on top at runtime.
// Every section can be switched off with `hidden: true`.
// A page's `cta` with an empty title/text falls back to `site.cta`.
// ---------------------------------------------------------------------------

import {
  images, contact, navLinks, rooms, experiences, services, attractions, testimonials, dayAtVilla, gallery,
} from './site'

// Built-in photos, shown in the admin media library next to uploaded ones.
export const builtInMedia = [
  { url: images.aerial, label: 'Villa from the air' },
  { url: images.villaDusk, label: 'Villa at dusk' },
  { url: images.villaDusk2, label: 'Villa at dusk, wide' },
  { url: images.jacuzzi, label: 'Hot tub at sunset' },
  { url: images.rooftopSunset, label: 'Rooftop at sunset' },
  { url: images.rooftopBar, label: 'Rooftop lounge & bar' },
  { url: images.dining, label: 'Candlelit dining table' },
  { url: images.suiteLiving, label: 'Suite living area' },
  { url: images.suiteLounge, label: 'Suite lounge' },
  { url: images.bedroomView, label: 'Bedroom with view' },
  { url: images.bedroomDesk, label: 'Bedroom with desk' },
  { url: images.bedroomDancer, label: 'Bedroom, red painting' },
  { url: images.bedroomNight, label: 'Bedroom, evening' },
  { url: images.bedroomDetail, label: 'Wardrobe & vase' },
  { url: images.walkway, label: 'Red walkway' },
  { url: images.verandaDusk, label: 'Veranda at dusk' },
  { url: images.verandaEvening, label: 'Veranda, evening' },
  { url: images.verandaNight, label: 'Veranda at night' },
]

// Site-wide text: navigation, footer, enquiry band, SEO.
export const site = {
  seoTitle: 'Villa Cavo | Luxury Villa in Haputale, Sri Lanka',
  seoDescription:
    'Villa Cavo — a luxury hill-country villa in Haputale, Sri Lanka. Beneath the misty peaks, among tea estates and mountain views.',
  navButtonLabel: 'Enquire',
  menuButtonLabel: 'Make an enquiry',
  footerTagline: 'A luxury hill-country retreat in Haputale, Sri Lanka — beneath the misty peaks.',
  footerExploreLabel: 'Explore',
  footerVisitLabel: 'Visit',
  footerEnquiriesLabel: 'Enquiries',
  footerMotto: 'Beneath the misty peaks',
  copyright: 'Villa Cavo, Haputale. All rights reserved.',
  showWhatsappButton: true,
  cta: {
    eyebrow: 'Enquiries',
    title: ['Your escape', 'above the clouds'],
    text: 'Limited suites, limitless views. Send us an enquiry by WhatsApp or email and our hosts will reply personally.',
    primaryLabel: 'Make an enquiry',
    secondaryLabel: 'WhatsApp us',
  },
}

export const pages = {
  home: {
    hero: {
      eyebrow: 'Welcome to Villa Cavo',
      title: ['A luxury villa', 'beneath the', 'misty peaks'],
      text: 'Wake above the clouds in Haputale, unwind in private luxury and savour the timeless beauty of Sri Lanka’s hill country.',
      primaryLabel: 'Enquire on WhatsApp',
      whatsappMessage: 'Hello Villa Cavo, I would like to enquire about a stay.',
      secondaryLabel: 'Email us',
      location: 'Haputale · Sri Lanka',
      slides: [
        { src: images.aerial, alt: 'Villa Cavo in the forest above Haputale' },
        { src: images.villaDusk, alt: 'Villa Cavo at dusk' },
        { src: images.jacuzzi, alt: 'Hot tub and deck at sunset' },
        { src: images.suiteLiving, alt: 'Misty Peak Suite' },
        { src: images.rooftopSunset, alt: 'Rooftop view over the hills' },
      ],
    },
    welcome: {
      eyebrow: 'Welcome to Villa Cavo',
      title: ['An intimate retreat', 'in the heart of', 'tea country'],
      paragraphs: [
        'Set on a quiet ridge above Haputale, Villa Cavo is a private sanctuary where colonial elegance meets the untamed beauty of Sri Lanka’s Uva highlands. Mist-veiled peaks, emerald tea terraces and the gentle rhythm of hill-country life surround you.',
        'With only a handful of suites, every stay is personal — attentive hosts, a private chef and spaces designed for slowing down.',
      ],
      linkLabel: 'Discover our story',
      image: images.walkway,
      imageAlt: 'Villa Cavo walkway',
      inset: images.bedroomDetail,
      insetAlt: 'Teak wardrobe and clay vase',
      badgeSmall: 'Uva Highlands',
      badgeLarge: 'Haputale',
      stats: [
        { n: 4, s: '', label: 'Private suites' },
        { n: 180, s: '°', label: 'Mountain views' },
        { n: 24, s: 'h', label: 'Butler service' },
      ],
    },
    banner: {
      image: images.villaDusk2,
      alt: 'Villa Cavo',
      eyebrow: 'Villa Cavo · Haputale',
      text: 'A home in the clouds.',
    },
    rooms: {
      eyebrow: 'Rooms & Suites',
      titleStart: 'Sleep where',
      titleAccent: 'the clouds',
      titleEnd: 'rest',
      text: 'Four individually designed suites, each with its own character and an uninterrupted view of the hills.',
      linkLabel: 'View all suites',
    },
    services: {
      eyebrow: 'The Villa Cavo Touch',
      title: ['Thoughtful service,', 'quietly delivered'],
      text: 'From the moment you arrive, our team is devoted to making your stay effortless and unforgettable.',
    },
    quote: {
      image: images.rooftopSunset,
      lines: ['“Here, the mountains', 'breathe slowly — and', 'so do you.”'],
      caption: 'The Haputale Gap · Uva Province',
    },
    experiences: {
      eyebrow: 'Curated Experiences',
      title: ['Discover the', 'hill country'],
      linkLabel: 'All experiences',
    },
    day: {
      eyebrow: 'A Day at Villa Cavo',
      title: ['From mist', 'to starlight'],
      text: 'Every day in the highlands unfolds at its own gentle pace. Here is how a perfect one might look.',
    },
    dining: {
      image: images.dining,
      eyebrow: 'Dining',
      title: ['Flavours of', 'the highlands'],
      text: 'Our chef blends heirloom Sri Lankan recipes with produce from local farms and our own kitchen garden. Breakfast on the lawn, high tea at four, candlelit dinners by the fire.',
      items: ['Traditional Sri Lankan rice & curry', 'Colonial high tea service', 'Private candlelit dinners', 'Garden-to-table breakfasts'],
      linkLabel: 'Explore dining',
    },
    testimonials: {
      eyebrow: 'Guest Stories',
      hint: '← Swipe to read more →',
    },
    location: {
      image: images.aerial,
      eyebrow: 'The Location',
      title: ['Haputale —', 'the edge of the hills'],
      text: 'Perched at the southern edge of the central highlands, Haputale offers some of Sri Lanka’s most dramatic views — on a clear day, all the way to the southern coast.',
      linkLabel: 'How to reach us',
    },
    gallery: {
      eyebrow: 'Moments',
      title: 'Life at Villa Cavo',
      linkLabel: 'View the gallery',
      count: 8,
    },
    cta: { image: images.jacuzzi, title: [], text: '' },
  },

  about: {
    hero: {
      eyebrow: 'Our Story',
      title: ['A home', 'among the clouds'],
      text: 'Villa Cavo was born from a love of the hill country — its silence, its seasons and its people. This is our story.',
      image1: images.villaDusk,
      image2: images.verandaEvening,
    },
    intro: {
      eyebrow: 'Philosophy',
      title: ['Luxury, slowed', 'to the pace of', 'the mountains'],
      paragraphs: [
        'We believe true luxury is found in the details that cannot be rushed: a pot of tea brewed just right, the first light catching the peaks, a fire lit before you return from your walk.',
        'Villa Cavo is not a hotel. It is a carefully crafted hill-country home, where a small team of hosts looks after a handful of guests with the warmth and care Sri Lanka is famous for.',
      ],
      signature: '— The Villa Cavo Family',
      image: images.verandaDusk,
      imageAlt: 'Villa veranda at dusk',
    },
    story: {
      eyebrow: 'How it began',
      title: 'Our journey',
      items: [
        { year: 'The Land', text: 'A quiet ridge above Haputale, surrounded by tea estates and cloud forest, where the mist rolls in each afternoon.' },
        { year: 'The Vision', text: 'To create a retreat that feels like a private hill-country home — elegant, intimate and deeply connected to its landscape.' },
        { year: 'The Villa', text: 'Built with local craftsmen using timber, stone and hand-loomed textiles, honouring the colonial bungalows of the region.' },
        { year: 'Today', text: 'Villa Cavo welcomes travellers from around the world seeking stillness, beauty and the finest of Sri Lankan hospitality.' },
      ],
    },
    statement: {
      image: images.aerial,
      lines: ['Four suites.', 'Endless horizons.', 'One unforgettable stay.'],
    },
    values: {
      eyebrow: 'What we stand for',
      title: 'Our values',
      items: [
        { icon: 'heart', title: 'Heartfelt Hospitality', text: 'Sri Lankan warmth at its most genuine — we welcome every guest as family.' },
        { icon: 'leaf', title: 'Rooted in Nature', text: 'We tread lightly: local sourcing, plastic-free rooms and support for estate communities.' },
        { icon: 'mountain', title: 'Sense of Place', text: 'Design, food and experiences that celebrate the soul of the Uva highlands.' },
      ],
    },
    haputale: {
      image: images.rooftopSunset,
      imageAlt: 'Haputale mountains from the rooftop',
      eyebrow: 'Haputale, Sri Lanka',
      title: ['Where the', 'hill country ends'],
      paragraphs: [
        'Haputale sits at over 1,400 metres on the southern rim of Sri Lanka’s central highlands. From its ridges the land falls away dramatically, revealing views across the plains to the distant coast.',
        'It is the land of Lipton’s Seat and Dambatenne, of the Adisham monastery and the famous hill-country railway — a cool, misty world far from the heat of the lowlands.',
      ],
      facts: [
        { value: '18–24°C', label: 'Daytime' },
        { value: '4 hrs', label: 'From Kandy' },
      ],
    },
    closing: {
      quote: '“We built Villa Cavo so that others could feel what we feel every morning here — wonder.”',
    },
    cta: { image: images.jacuzzi, title: [], text: '' },
  },

  rooms: {
    hero: {
      eyebrow: 'Rooms & Suites',
      title: ['Rest in', 'quiet luxury'],
      text: 'Villa Cavo is yours alone — every bedroom, lounge and terrace, booked together for your group. Warm timber, soft linens and views that change with every hour.',
      image: images.suiteLiving,
    },
    photos: {
      eyebrow: 'The whole villa, just for you',
      title: 'Inside the rooms',
      text: 'There are no room types to choose between: when you stay, the entire villa is yours.',
      alt: 'Villa Cavo room',
      images: [
        images.bedroomView, images.suiteLiving, images.suiteLounge,
        images.bedroomDesk, images.bedroomDancer, images.bedroomDetail,
      ],
    },
    amenities: {
      eyebrow: 'Throughout the villa',
      title: 'Thoughtful comforts',
      items: [
        'Hand-loomed linens', 'Ceylon tea & coffee bar', 'Luxury bath amenities', 'Heated rain showers',
        'Daily turndown service', 'Complimentary Wi-Fi', 'In-room safe', 'Plush robes & slippers',
        'Daily breakfast', 'Evening fireplace setup', 'Mountain-view seating', 'Bottled spring water',
      ],
    },
    policies: {
      items: [
        { title: 'Check-in & out', text: 'Check-in from {checkIn}, check-out by {checkOut}. Early arrival and late departure on request.' },
        { title: 'Children', text: 'Families are warmly welcome. Cots and children’s amenities are available on request.' },
        { title: 'Cancellation', text: 'Free cancellation up to 14 days before arrival. Please contact us for festive-season terms.' },
      ],
    },
    cta: { image: images.bedroomView, title: ['Make the villa', 'yours'], text: '' },
  },

  experiences: {
    hero: {
      eyebrow: 'Experiences & Services',
      title: ['Moments', 'worth the climb'],
      text: 'Sunrise viewpoints, tea trails, sacred monasteries and Ayurvedic rituals — curated by our hosts and tailored to you.',
      image: images.rooftopSunset,
    },
    list: { allLabel: 'All' },
    spa: {
      image: images.jacuzzi,
      imageAlt: 'Hot tub at sunset',
      eyebrow: 'Wellness',
      title: ['The Highland', 'Spa'],
      text: 'Ancient Ayurvedic wisdom meets the restorative calm of the mountains. Treatments are performed by trained therapists using oils and herbs prepared fresh each day.',
      treatments: [
        { name: 'Abhyanga Ritual', time: '90 min', text: 'Full-body warm herbal oil massage to balance the doshas.' },
        { name: 'Shirodhara', time: '60 min', text: 'A continuous stream of warm oil over the forehead for deep calm.' },
        { name: 'Ceylon Tea Scrub', time: '45 min', text: 'Exfoliating scrub with green tea, coconut and island spices.' },
        { name: 'Highland Herbal Steam', time: '30 min', text: 'Detoxifying steam infused with garden herbs.' },
      ],
    },
    services: {
      eyebrow: 'Villa Services',
      title: ['Everything,', 'taken care of'],
    },
    celebrations: {
      eyebrow: 'Celebrations',
      title: ['Honeymoons, proposals', '& private occasions'],
      text: 'From a candlelit dinner on a misty ridge to an intimate vow renewal in the garden, our team will help you mark life’s most precious moments in an unforgettable setting.',
      image1: images.dining,
      image2: images.rooftopBar,
    },
    cta: { image: images.aerial, title: ['Let us plan', 'your journey'], text: '' },
  },

  dining: {
    hero: {
      eyebrow: 'Dining',
      title: ['A table set', 'above the clouds'],
      text: 'Heritage recipes, highland produce and the warmth of a family kitchen. Every meal at Villa Cavo is a celebration of Sri Lanka.',
      image: images.dining,
    },
    care: {
      eyebrow: 'Dining at Villa Cavo',
      title: ['Private Chef, Personal Butler', '& Traditional Village Cooking'],
      items: [
        {
          label: 'Private Chef',
          title: ['Your meals,', 'freshly prepared'],
          text: 'Wake up to your choice of a Sri Lankan or Western breakfast, included with your stay at Villa Cavo. For lunch and dinner, choose from our à la carte menu and have your meals freshly prepared by your private chef.',
          image: images.rooftopSunset,
          alt: 'Rooftop seating at Villa Cavo with a mountain view at dusk',
          dark: false,
        },
        {
          label: 'Traditional Village Cooking',
          title: ['Slow-cooked in', 'clay pots over', 'a wood fire'],
          text: 'For a taste of local village life, try authentic Sri Lankan dishes slow-cooked in traditional clay pots over a wood fire. The slow cooking brings out the flavours of the spices and gives each dish the warmth of a home-cooked village meal.',
          image: images.verandaNight,
          alt: 'Villa Cavo veranda at night',
          dark: true,
        },
        {
          label: 'Personal Butler',
          title: ['Every little detail,', 'looked after'],
          text: 'Your personal butler is on hand throughout your stay to coordinate meals, arrange local outings and look after the little details so you can enjoy the villa at your own pace.',
          image: images.verandaEvening,
          alt: 'Villa Cavo veranda in the evening, lamps lit',
          dark: false,
        },
      ],
    },
    venues: {
      eyebrow: 'Where to dine',
      title: 'Every corner, a table',
      items: [
        { title: 'The Fireside Room', text: 'Candlelit dinners beside the crackling hearth on cool highland nights.', image: images.dining },
        { title: 'The Rooftop Lounge', text: 'Breakfast and high tea in the open air, with mist rising from the valley.', image: images.rooftopBar },
        { title: 'The Ridge Terrace', text: 'Private sunset dinners for two, high above the Haputale gap.', image: images.rooftopSunset },
      ],
    },
    quote: {
      image: images.aerial,
      lines: ['“Tea is the soul', 'of these hills.”'],
    },
    cta: { image: images.rooftopBar, title: ['Plan a', 'private dinner'], text: '' },
  },

  gallery: {
    hero: {
      eyebrow: 'Gallery',
      title: ['Glimpses of', 'Villa Cavo'],
      text: 'Mist-wrapped mornings, golden evenings and every quiet moment in between.',
      image: images.villaDusk2,
    },
    grid: { allLabel: 'All' },
    cta: { image: images.rooftopSunset, title: [], text: '' },
  },

  contact: {
    hero: {
      eyebrow: 'Contact Us',
      title: ['We’d love', 'to hear from you'],
      text: 'Whether you’re planning a getaway, a celebration or simply have a question, our team is here to help.',
      image: images.verandaEvening,
    },
    cards: {
      callLabel: 'Call us',
      emailLabel: 'Email',
      visitLabel: 'Visit',
      visitText: 'Haputale, Sri Lanka',
      hoursLabel: 'Reception',
      hoursText: 'Open 24 hours',
    },
    form: {
      eyebrow: 'Send a message',
      title: ['Begin the', 'conversation'],
      subjects: ['General enquiry', 'Reservations', 'Celebrations & events', 'Transfers & tours', 'Press'],
      nameLabel: 'Full name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      phoneLabel: 'Phone',
      phonePlaceholder: '+94 ...',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      messagePlaceholder: 'How can we help?',
      buttonLabel: 'Send message',
      thanksTitle: 'Thank you, {name}.',
      sendAnotherLabel: 'Send another',
      thanksText: 'Your message has been sent. If you need us, write to {email}. We usually reply within a few hours.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: ['Good to', 'know'],
      items: [
        { q: 'How do I get to Villa Cavo?', a: 'Haputale is around 5–6 hours by road from Colombo airport, or a scenic train ride from Kandy (approx. 5 hrs) or Ella (approx. 1 hr). We gladly arrange private chauffeured transfers.' },
        { q: 'What is the best time to visit?', a: 'Haputale is lovely year-round. January to April generally brings the clearest mornings and best views; the misty months have their own magical atmosphere.' },
        { q: 'Is breakfast included?', a: 'Yes — a full Sri Lankan or continental breakfast is included with every stay. Lunch, high tea and dinner can be added.' },
        { q: 'Do you cater to dietary requirements?', a: 'Absolutely. Let us know in advance and our chef will prepare vegetarian, vegan, gluten-free or allergy-friendly menus.' },
        { q: 'What should I pack?', a: 'Evenings can be cool (12–16°C), so bring a warm layer, comfortable walking shoes and a light rain jacket.' },
      ],
    },
  },

  booking: {
    intro: {
      eyebrow: 'Enquiries',
      title: ['Plan your', 'stay with us'],
      text: 'Tell us a little about your trip and send it to our hosts by WhatsApp or email. We will reply personally with availability and everything you need to know.',
    },
    form: {
      step1: 'Your stay',
      datesLabel: 'Preferred dates (optional)',
      datesPlaceholder: 'e.g. 12 – 15 March, or flexible',
      guestsLabel: 'Guests',
      guestOptions: ['1', '2', '3', '4', '5', '6', '7+'],
      showRoomStep: false,
      step2: 'Suite of interest',
      anyRoomName: 'Any suite',
      anyRoomText: 'Our hosts will suggest the best fit',
      anyRoomImage: images.villaDusk,
      step3: 'You may also enjoy',
      interests: ['Lipton’s Seat sunrise tour', 'Tea estate walk', 'Private candlelit dinner', 'Honeymoon setup', 'Celebration / event'],
      step4: 'Your details',
      nameLabel: 'Full name',
      emailLabel: 'Email',
      phoneLabel: 'Phone / WhatsApp',
      countryLabel: 'Country',
      messageLabel: 'Message',
      messagePlaceholder: 'Questions, celebrations, dietary needs, arrival plans…',
      nameError: 'Please add your name so our hosts know who to reply to.',
      sendEmailLabel: 'Send to email',
      summaryLabel: 'Your enquiry',
      summaryTitle: 'Villa Cavo',
      summaryDatesLabel: 'Dates',
      summaryGuestsLabel: 'Guests',
      flexibleText: 'Flexible',
      interestedLabel: 'Interested in',
      whatsappButtonLabel: 'Send via WhatsApp',
      emailButtonLabel: 'Send via email',
      perks: ['Personal reply from our hosts', 'No payment needed to enquire', 'Or call us on {phone}'],
    },
  },

  notFound: {
    main: {
      eyebrow: 'Error 404',
      titleStart: 'Lost in',
      titleAccent: 'the mist',
      text: 'The page you’re looking for has wandered off into the hills.',
      buttonLabel: 'Return home',
    },
  },
}

export const defaultContent = {
  site,
  contact,
  navLinks,
  rooms,
  experiences,
  services,
  attractions,
  testimonials,
  dayAtVilla,
  gallery,
  pages,
}
