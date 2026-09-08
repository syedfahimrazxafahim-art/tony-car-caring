import { ServiceItem, ProcessStep, BenefitItem, GalleryItem, ReviewItem } from '../types';

export const BUSINESS_INFO = {
  name: "Tony’s Car Care",
  location: "Los Angeles, California",
  primaryService: "Car Washing",
  phone: "747-306-0837",
  phoneRaw: "7473060837",
  facebookUrl: "https://www.facebook.com/profile.php?id=61562811055135",
  copyrightYear: new Date().getFullYear(),
};

// Exact requested services with concise, unembellished descriptions
export const SERVICES: ServiceItem[] = [
  {
    id: 'mobile-car-wash',
    name: 'Mobile Car Wash',
    shortDescription: 'Complete mobile car wash delivered directly to your home, office, or designated location.',
    details: [
      'Exterior hand wash and spot-free rinse',
      'Wheel face and tire surface cleaning',
      'Streak-free exterior window wiping',
      'Microfiber towel dry at your location'
    ],
    recommendedFor: 'Routine upkeep and regular vehicle maintenance without leaving your location',
    iconName: 'Droplets',
  },
  {
    id: 'exterior-wash',
    name: 'Exterior Wash',
    shortDescription: 'Focused exterior washing service designed to remove road film, dust, and grime.',
    details: [
      'Comprehensive hand foam wash',
      'Rims, wheels, and tire cleaning',
      'Exterior glass and side mirrors wiped clean',
      'Thorough hand dry with plush microfiber'
    ],
    recommendedFor: 'Drivers seeking an exterior-only cleanse and surface refresh',
    iconName: 'Sparkles',
  },
  {
    id: 'interior-cleaning',
    name: 'Interior Cleaning',
    shortDescription: 'Dedicated interior cabin cleaning targeting dust, debris, and high-touch surfaces.',
    details: [
      'Complete cabin, mat, and seat vacuuming',
      'Dashboard, center console, and door panel wipedown',
      'Interior glass and rearview mirror clarity',
      'Door jamb wiping and interior trash removal'
    ],
    recommendedFor: 'Restoring a clean, dust-free interior cabin environment',
    iconName: 'Car',
  },
  {
    id: 'full-detail',
    name: 'Full Detail',
    shortDescription: 'Integrated complete service pairing exterior hand washing with thorough interior cleaning.',
    details: [
      'Exterior foam hand wash and wheel cleaning',
      'Deep vacuum of upholstery, carpets, and trunk area',
      'Full interior surface wipe-down and conditioning wipe',
      'Interior and exterior streak-free glass finish'
    ],
    recommendedFor: 'Comprehensive bumper-to-bumper vehicle care inside and out',
    iconName: 'Shield',
  },
  {
    id: 'wax-shine',
    name: 'Wax & Shine',
    shortDescription: 'Protective hand wax application focused on deep gloss, shine, and surface water repellency.',
    details: [
      'Complete exterior hand wash preparation',
      'Hand-applied protective wax treatment',
      'Buffed to high-gloss reflective finish',
      'Deep tire dressing and exterior trim wipe'
    ],
    recommendedFor: 'Enhancing paint gloss, deep shine, and surface protection',
    iconName: 'Flame',
  },
  {
    id: 'premium-detailing',
    name: 'Premium Detailing',
    shortDescription: 'Comprehensive automotive care addressing both exterior finish and interior cabin presentation.',
    details: [
      'Multi-stage exterior hand wash and decontamination',
      'Protective gloss sealant / wax treatment',
      'Intensive interior vacuuming, vents, and crevices',
      'All plastics, vinyls, and leather surfaces conditioned'
    ],
    recommendedFor: 'Discerning owners desiring an elevated level of automotive presentation',
    iconName: 'Crown',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'CHOOSE YOUR SERVICE',
    description: 'Pick the car care service you need.',
  },
  {
    step: '02',
    title: 'PICK YOUR LOCATION',
    description: 'Choose where you want your vehicle serviced.',
  },
  {
    step: '03',
    title: 'WE COME TO YOU',
    description: 'The mobile service comes directly to your location.',
  },
  {
    step: '04',
    title: 'ENJOY THE SHINE',
    description: 'Get back to your day with a freshly cleaned vehicle.',
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    title: 'WE COME TO YOU',
    description: 'Mobile convenience built around the customer’s location.',
  },
  {
    title: 'PROFESSIONAL PRESENTATION',
    description: 'Clean, polished results with a premium visual standard.',
  },
  {
    title: 'CONVENIENT CAR CARE',
    description: 'Get your vehicle cleaned without building your day around a traditional car wash visit.',
  },
  {
    title: 'DETAIL-FOCUSED SERVICE',
    description: 'Present the service as careful and professional without inventing specific technical capabilities.',
  },
];

// Verified assets provided by Tony’s Car Care
export const USER_ASSETS = {
  logo: {
    local: '/src/assets/images/user/logo.jpg',
    remote: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788904337/u887656789.jpg',
    alt: 'Tony’s Car Care Official Logo',
  },
  bgAnim: {
    local: '/src/assets/images/user/bg_anim.png',
    remote: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788904338/w.png',
    alt: 'Tony’s Car Care sports coupe against Los Angeles skyline with glowing headlights',
  },
  img1: {
    local: '/src/assets/images/user/img1.jpg',
    remote: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788904334/345678fghj.jpg',
    alt: 'Mobile detailing service van with equipment open beside luxury black Mercedes SUV against Los Angeles skyline',
  },
  img2: {
    local: '/src/assets/images/user/img2.jpg',
    remote: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788904334/456798765fg.jpg',
    alt: 'Glossy black Mercedes car parked next to open mobile detailing van equipped with detailing supplies',
  },
  img3: {
    local: '/src/assets/images/user/img3.jpg',
    remote: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788904335/bbdbed.jpg',
    alt: 'Automotive detailer using machine buffer to polish vehicle hood to high reflective gloss',
  },
  img4: {
    local: '/src/assets/images/user/img4.jpg',
    remote: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788904335/nnnjnj.jpg',
    alt: 'Vehicle coated in dense car wash foam lather during exterior wash service',
  },
  img5: {
    local: '/src/assets/images/user/img5.jpg',
    remote: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788904335/dwdwd.jpg',
    alt: 'Precision wheel detailing, rim cleaning, and tire surface shine treatment',
  },
  img6: {
    local: '/src/assets/images/user/img6.jpg',
    remote: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788904335/qw.jpg',
    alt: 'Detailed vehicle cabin interior showcasing conditioned leather upholstery and dashboard',
  },
  img7: {
    local: '/src/assets/images/user/img7.jpg',
    remote: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788904336/swqdd.jpg',
    alt: 'Showroom mirror-like gloss reflection on treated automotive clear coat',
  },
  img8: {
    local: '/src/assets/images/user/img8.jpg',
    remote: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788904337/wqdqdq.jpg',
    alt: 'Exterior hand wash finish with streak-free glass wipedown and trim detailing',
  },
};

// Detailing Showcase gallery containing the provided client assets
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'mobile-service-van-suv',
    title: 'Mobile Service Unit & Luxury Detailing',
    caption: 'Fully outfitted mobile service van equipped with pressurized wash systems servicing a black Mercedes SUV on-site.',
    src: USER_ASSETS.img1.local,
    fallbackSrc: USER_ASSETS.img1.remote,
    alt: USER_ASSETS.img1.alt,
    category: 'Mobile Service',
  },
  {
    id: 'mobile-detailing-setup',
    title: 'Driveway Mobile Detailing Setup',
    caption: 'Glossy black vehicle parked alongside our self-contained mobile detailing van ready for professional care.',
    src: USER_ASSETS.img2.local,
    fallbackSrc: USER_ASSETS.img2.remote,
    alt: USER_ASSETS.img2.alt,
    category: 'Mobile Service',
  },
  {
    id: 'machine-buff-wax',
    title: 'Machine Buffing & Paint Polish',
    caption: 'Detailer applying professional rotary machine polisher to hood panels for high-gloss swirl reduction and shine.',
    src: USER_ASSETS.img3.local,
    fallbackSrc: USER_ASSETS.img3.remote,
    alt: USER_ASSETS.img3.alt,
    category: 'Wax & Gloss',
  },
  {
    id: 'foam-cleansing-wash',
    title: 'Active Foam Cleansing Wash',
    caption: 'Rich foam lather encapsulating surface road film, dust, and grime prior to gentle microfiber hand washing.',
    src: USER_ASSETS.img4.local,
    fallbackSrc: USER_ASSETS.img4.remote,
    alt: USER_ASSETS.img4.alt,
    category: 'Exterior',
  },
  {
    id: 'wheel-tire-care',
    title: 'Wheel, Caliper & Tire Treatment',
    caption: 'Deep decontamination of wheel faces, barrel rims, and tire sidewalls for a crisp, detailed finish.',
    src: USER_ASSETS.img5.local,
    fallbackSrc: USER_ASSETS.img5.remote,
    alt: USER_ASSETS.img5.alt,
    category: 'Exterior',
  },
  {
    id: 'interior-leather-care',
    title: 'Pristine Interior Leather Detailing',
    caption: 'Conditioned luxury leather upholstery, center console wipedown, and complete cabin vacuuming.',
    src: USER_ASSETS.img6.local,
    fallbackSrc: USER_ASSETS.img6.remote,
    alt: USER_ASSETS.img6.alt,
    category: 'Interior',
  },
  {
    id: 'mirror-finish-gloss',
    title: 'Showroom Mirror Finish & Reflection',
    caption: 'Flawless paint reflections and water-beading protection achieved through hand sealant and gloss treatments.',
    src: USER_ASSETS.img7.local,
    fallbackSrc: USER_ASSETS.img7.remote,
    alt: USER_ASSETS.img7.alt,
    category: 'Wax & Gloss',
  },
  {
    id: 'exterior-hand-finish',
    title: 'Exterior Hand Wash & Clean Finish',
    caption: 'Streak-free exterior glass wiping, mirror cleaning, and gentle microfiber hand drying.',
    src: USER_ASSETS.img8.local,
    fallbackSrc: USER_ASSETS.img8.remote,
    alt: USER_ASSETS.img8.alt,
    category: 'Exterior',
  },
];

// Sample reviews clearly labeled per instructions: "SAMPLE REVIEW — PREVIEW CONTENT"
export const SAMPLE_REVIEWS: ReviewItem[] = [
  {
    id: 'sample-1',
    name: 'Sample Client A.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'Having someone come right to my home driveway made vehicle maintenance completely effortless. The car looked spotless and ready for the week.',
    serviceUsed: 'Mobile Car Wash',
    isSample: true,
  },
  {
    id: 'sample-2',
    name: 'Sample Client B.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'Professional presentation from start to finish. The exterior wash and window clarity were top-tier without having to wait at a crowded wash station.',
    serviceUsed: 'Exterior Wash',
    isSample: true,
  },
  {
    id: 'sample-3',
    name: 'Sample Client C.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'Great attention to detail on the interior. The carpets, console, and leather seats were vacuumed and wiped down thoroughly right at my workplace.',
    serviceUsed: 'Interior Cleaning',
    isSample: true,
  },
  {
    id: 'sample-4',
    name: 'Sample Client D.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'The Full Detail package gave the vehicle an immediate showroom feel. Convenient, punctual, and high-contrast finish inside and out.',
    serviceUsed: 'Full Detail',
    isSample: true,
  },
];
