import blogNativeImg from '../assets/images/blog_native_content_1794894356889.jpg';

export interface LanguageScreen {
  id: string;
  name: string;
  nativeName: string;
  image: string;
  staggered?: boolean;
}

export interface CounterStat {
  id: string;
  target: number;
  label: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  url: string;
}

export interface MediaItem {
  id: string;
  title: string;
  author: string;
  date: string;
  logo: string;
  url: string;
  summary: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface CareerOpening {
  id: string;
  title: string;
  experience: string;
  openings: string;
  location: string;
  employmentType: string;
  posted?: string;
  description: string;
}

export const STORE_LINKS = {
  appStore: 'https://apps.apple.com/in/app/way2news-short-news-app/id1021537384',
  playStore: 'https://play.google.com/store/apps/details?id=sun.way2sms.hyd.com',
};

export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/way2newsapp/',
    icon: '/images/facebook-1.png',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/way2newsapp',
    icon: '/images/twitter-1.png',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/way2_news',
    icon: '/images/twitter.png',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/way2newsapp/',
    icon: '/images/group-9.png',
  },
];

export const LANGUAGE_SCREENS_ROW_1: LanguageScreen[] = [
  { id: 'hindi', name: 'Hindi', nativeName: 'हिन्दी', image: '/images/hindi.png' },
  { id: 'bangla', name: 'Bangla', nativeName: 'বাংলা', image: '/images/bangla.png' },
  { id: 'telugu', name: 'Telugu', nativeName: 'తెలుగు', image: '/images/telugu.png', staggered: true },
  { id: 'tamil', name: 'Tamil', nativeName: 'தமிழ்', image: '/images/tamil.png' },
];

export const LANGUAGE_SCREENS_ROW_2: LanguageScreen[] = [
  { id: 'kannada', name: 'Kannada', nativeName: 'ಕನ್ನಡ', image: '/images/kannada.png' },
  { id: 'malayalam', name: 'Malayalam', nativeName: 'മലയാളം', image: '/images/malayalam.png', staggered: true },
  { id: 'gujarati', name: 'Gujarati', nativeName: 'ગુજરાતી', image: '/images/gujarathi.png' },
  { id: 'marathi', name: 'Marathi', nativeName: 'मराठी', image: '/images/marathi.png' },
];

export const ALL_LANGUAGE_SCREENS: LanguageScreen[] = [
  ...LANGUAGE_SCREENS_ROW_1,
  ...LANGUAGE_SCREENS_ROW_2,
];

export const COUNTER_STATS: CounterStat[] = [
  { id: 'mandal', target: 416138, label: 'Mandal stories' },
  { id: 'district', target: 240922, label: 'District stories' },
  { id: 'village', target: 110000, label: 'Village stories' },
  { id: 'contributors', target: 40000, label: 'Contributors' },
];

export const FEATURES_ROW_1: FeatureItem[] = [
  {
    id: 'share',
    title: 'News Sharing',
    description: 'Let your friends read the news you intend to share with them.',
    icon: '/images/share.png',
  },
  {
    id: 'magazines',
    title: 'Magazines',
    description:
      'Travel, Health, Finance & many more- Pick Magazines of your favourite topic and lay back to read.',
    icon: '/images/magazine.png',
  },
  {
    id: 'categories',
    title: 'Categories',
    description: 'Cinema, Business or sports, read the News from the category of your preference.',
    icon: '/images/category.png',
  },
  {
    id: 'nightmode',
    title: 'Night Mode',
    description: "Reading in dark? Then make it better for your eyes with 'Night Mode'",
    icon: '/images/nightmode.png',
  },
];

export const FEATURES_ROW_2: FeatureItem[] = [
  {
    id: 'flip',
    title: 'Flip Experience',
    description: 'Read the News articles at ease by just flipping them up and down.',
    icon: '/images/flip.png',
  },
  {
    id: 'polls',
    title: 'Polls',
    description:
      'Participate in Polls on different issues and contribute your opinion to country wide taken stats.',
    icon: '/images/polls.png',
  },
  {
    id: 'buzz',
    title: 'Top Buzz',
    description: "Read the most trendy and widely shared flips from 'Top Buzz'.",
    icon: '/images/buzz.png',
  },
  {
    id: 'bookmark',
    title: 'Bookmark',
    description: "Save the articles you want to revisit by adding them to 'My bookmarks'.",
    icon: '/images/bookmark.png',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'print-to-digital',
    title: "Are 'News' papers transforming from print to digital?",
    author: 'by Way2News',
    date: 'December 18, 2023',
    excerpt:
      'A cup of chai/coffee and the morning newspaper were synonymous with the Indian start to the day. Newspapers were the town criers, heralding the breaking news to readers.',
    image: '/images/blog/blog-1.webp',
    url: 'https://blog.way2news.com/are-news-papers-transforming-from-print-to-digital/',
  },
  {
    id: 'mobile-first',
    title: 'Why Should Brands Switch to Mobile-first Approach?',
    author: 'by Way2News',
    date: 'November 22, 2023',
    excerpt:
      'As your eyes flutter open, you instinctively reach for your phone. It’s your alarm clock, your news source, and your weather forecast all in one. Your phone is the very first thing that welcomes you to the world each day.',
    image: '/images/blog/blog-2.jpg',
    url: 'https://blog.way2news.com/why-should-brands-switch-to-mobile-first-approach/',
  },
  {
    id: 'native-content',
    title: 'Native Content + Premium Language Audience is Gold. How do Brands target and where?',
    author: 'by Way2News',
    date: 'June 27, 2023',
    excerpt:
      'Have you ever wondered what it takes to tap into the premium language audience base? How do brands thrive tapping into such a high-end consumer...',
    image: blogNativeImg,
    url: 'https://blog.way2news.com/native-content-premium-language-audience-is-gold-how-do-brands-target-and-where/',
  },
];

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 'et-be',
    title: "Viacom18's Mansi Shah joins Way2News as region head - West",
    author: 'by BE Staff',
    date: 'Published - OCT 17, 2024',
    logo: '/images/logos/et-be-1.png',
    url: 'https://brandequity.economictimes.indiatimes.com/news/the-people-report/viacom18s-mansi-shah-joins-way2news-as-region-head-west/114307966',
    summary:
      'In a strategic move to bolster its leadership and strengthen its presence in Western India, Way2News appointed Mansi Shah as Region Head - West.',
  },
  {
    id: 'stb18',
    title: '1 in 3 car buyers are likely to buy an electric vehicle: Way2News survey',
    author: 'by Storyboard18',
    date: 'Published - OCT 03, 2024',
    logo: '/images/logos/stb18-1.png',
    url: 'https://www.storyboard18.com/advertising/1-in-3-car-buyers-are-likely-to-buy-an-electric-vehicle-way2news-survey-43901.htm',
    summary:
      'As India approaches its festive season, Way2News unveiled consumer sentiment insights revealing growing enthusiasm for electric mobility across regional markets.',
  },
  {
    id: 'the-ec',
    title:
      'Hyperlocal news startup Way2News raises $14 million in funding from existing backer WestBridge, others',
    author: 'by Ajay Rag',
    date: 'Published - SEP 17, 2024',
    logo: '/images/logos/the-ec-1.png',
    url: 'https://economictimes.indiatimes.com/tech/funding/hyperlocal-news-startup-way2news-raises-14-million-in-funding-from-westbridge-capital-others/articleshow/113420783.cms?from=mdr',
    summary:
      'Hyperlocal news platform Way2News raised $14 million in a new funding round backed by WestBridge Capital to deepen hyperlocal coverage and AI-enabled reporting.',
  },
  {
    id: 'fe-chai',
    title: "BrandWagon Chai pe Charcha with Way2News' Raju Vanapala",
    author: 'by Gopika Nair',
    date: 'Published - SEP 14, 2024',
    logo: '/images/logos/financial-express-1.png',
    url: 'https://www.financialexpress.com/business/brandwagon-brandwagon-chai-pe-charcha-with-way2news-raju-vanapala-3610375/',
    summary:
      'Raju Vanapala shares how building hyperlocal journalism from district and mandal levels created unmatched vernacular reader engagement.',
  },
  {
    id: 'tech-circle',
    title: 'How Way2News is leveraging AI for faster, smarter hyperlocal reporting',
    author: 'by Shraddha Goled',
    date: 'Published - Aug 08, 2024',
    logo: '/images/logos/tech-circle-1.png',
    url: 'https://www.techcircle.in/2024/08/08/how-way2news-is-leveraging-ai-for-faster-smarter-hyperlocal-reporting',
    summary:
      'Way2News uses AI workflows to verify, summarize, and speed up ground-level stories submitted by tens of thousands of local contributors.',
  },
  {
    id: 'pti-invest',
    title:
      "South India's Investment Landscape Shifts: Gold Reigns, FDs Decline, Stocks Gain Momentum, Finds Way2News Survey",
    author: 'by PTI News',
    date: 'Published - Aug 01, 2024',
    logo: '/images/logos/pti-1.png',
    url: 'https://www.ptinews.com/press-release/south-india-s-investment-landscape-shifts-gold-reigns-fds-decline-stocks-gain-momentum-finds-way2news-survey/1702674',
    summary:
      'A comprehensive regional reader survey by Way2News highlights changing wealth-building habits across Tier-2 and Tier-3 towns in South India.',
  },
  {
    id: 'campaign',
    title: '24 hours with... Raju Vanapala',
    author: 'by Campaign India',
    date: 'Published - JUL 25, 2024',
    logo: '/images/logos/campaign-1.png',
    url: 'https://www.campaignindia.in/article/24-hours-with-raju-vanapala/497389',
    summary:
      'A day-in-the-life profile with Way2News founder Raju Vanapala covering editorial reviews, product strategy, and hyperlocal expansion.',
  },
  {
    id: 'twitter-ann',
    title:
      'IMPORTANT ANNOUNCEMENT !! We, at Way2News, raised $16.75 million in funding from @WestBridge_Cap Capital.',
    author: 'by Way2News Twitter',
    date: 'Published - JUNE 10, 2022',
    logo: '/images/logos/twitter-1.png',
    url: 'https://twitter.com/way2_news/status/1535205916387119105?t=wXd-fR48dVbJSCek1-pfDw&s=19',
    summary:
      'Official announcement celebrating the $16.75 million Series-A investment partnership with WestBridge Capital.',
  },
  {
    id: 'the-hindu',
    title: 'Hyperlocal news app, Way2News, raises $16.75 m',
    author: 'by SPECIAL CORRESPONDENT',
    date: 'Published - JUNE 10, 2022',
    logo: '/images/logos/thehindu-1.png',
    url: 'https://www.thehindu.com/news/cities/Hyderabad/hyperlocal-news-app-way2news-raises-1675-m/article65511879.ece',
    summary:
      'The Hindu covers Way2News securing $16.75M to expand its hyperlocal vernacular reporting network across India.',
  },
  {
    id: 'moneycontrol',
    title: 'Way2News raises $16.75 million led by WestBridge Capital',
    author: 'by CR SUKUMAR',
    date: 'Published - JUNE 09, 2022',
    logo: '/images/logos/mc-1.png',
    url: 'https://www.moneycontrol.com/news/business/startup/way2news-raises-16-75-million-led-by-westbridge-capital-8662391.html',
    summary:
      'Moneycontrol reports on Way2News scaling its vernacular short-news footprint to millions of daily active readers.',
  },
  {
    id: 'businessline',
    title: 'Hyperlocal news app Way2News raises ₹130 cr in Series-A',
    author: 'by K V Kurmanath',
    date: 'Published - Jun 09, 2022',
    logo: '/images/logos/businessline-1.png',
    url: 'https://www.thehindubusinessline.com/info-tech/hyperlocal-news-app-way2news-raises-130-cr-in-series-a/article65509853.ece',
    summary:
      'Hindu BusinessLine details how Way2News plans to deploy Series-A capital into technology, reporter networks, and new regional languages.',
  },
  {
    id: 'startup-hyd',
    title:
      'Vernacular short news app Way2News raises $16.75 mn in Series-A round led by WestBridge Capital',
    author: 'by Tata Teja',
    date: 'Published - JUNE 09, 2022',
    logo: '/images/logos/start-uphyd-1.png',
    url: 'http://startuphyderabad.com/vernacular-short-news-app-way2news-raises-16-75-mn-in-series-a-round-led-by-westbridge-capital/',
    summary:
      'Startup Hyderabad highlights the Hyderabad-headquartered startup’s milestone Series-A round.',
  },
  {
    id: 'msn',
    title: 'Way2News raises $16.75 million led by WestBridge Capital',
    author: 'by CR Sukumar',
    date: 'Published - Jun 09, 2022',
    logo: '/images/logos/msn-1.png',
    url: 'https://www.msn.com/en-in/money/topstories/way2news-raises-16-75-million-led-by-westbridge-capital/ar-AAYfdK3',
    summary:
      'MSN Money syndication covering the WestBridge Capital-led Series-A investment in Way2News.',
  },
  {
    id: 'uniindia',
    title: 'Hyderabad-based Way2News raises $16.75 million in series-A round',
    author: 'by Tata Teja',
    date: 'Published - JUNE 09, 2022',
    logo: '/images/logos/uniindia-1.png',
    url: 'http://www.uniindia.com/~/hyderabad-based-way2news-raises-16-75-million-in-series-a-round/Business%20Economy/news/2753259.html',
    summary:
      'UNI India reports on Way2News expanding hyperlocal news delivery down to village and mandal readers.',
  },
  {
    id: 'yourstory',
    title: '[Funding alert] Short news app Way2News raises $16.75M in Series A led by WestBridge Capital',
    author: 'by Sujata Sangwan',
    date: 'Published - Jun 09, 2022',
    logo: '/images/logos/yourstory-1.png',
    url: 'https://yourstory.com/2022/06/funding-vernacular-short-news-app-way2news-westbridge-capital/amp',
    summary:
      'YourStory profiles Way2News’s rapid growth across Telugu, Tamil, Kannada, Malayalam, Hindi, Bangla, Gujarati, and Marathi.',
  },
  {
    id: 'inc42',
    title: 'Hyperlocal News App Way2News Bags $16.75 Mn To Expand User Base In Southern States',
    author: 'by Inc42',
    date: 'Published - Jun 09, 2022',
    logo: '/images/logos/inc42-1.png',
    url: 'https://inc42.com/buzz/hyperlocal-news-app-way2news-bags-16-75-mn-to-expand-user-base-in-southern-states/',
    summary:
      'Inc42 covers the funding round geared toward accelerating penetration across southern and western Indian states.',
  },
  {
    id: 'outlook',
    title: 'Way2news Raises $16.75 Million In Series-A Funding',
    author: 'by Press Trust of India',
    date: 'Published - Jun 09, 2022',
    logo: '/images/logos/outlook-1.png',
    url: 'https://www.outlookindia.com/business/way2news-raises-16-75-million-in-series-a-funding-news-201319',
    summary:
      'Outlook India business desk reports on the Series-A round led by WestBridge Capital.',
  },
  {
    id: 'fe-series-a',
    title: 'Way2news raises $16.75 million in Series A funding',
    author: 'by PTI',
    date: 'Published - JUNE 09, 2022',
    logo: '/images/logos/financial-express-1.png',
    url: 'https://www.financialexpress.com/brandwagon/way2news-raises-16-75-million-in-series-a-funding/2554659/',
    summary:
      'Financial Express BrandWagon reports on Way2News strengthening both editorial infrastructure and native brand solutions.',
  },
  {
    id: 'telangana-today',
    title: 'Hyderabad-based Way2News raises Rs 130 crore',
    author: 'by TELANGANA TODAY',
    date: 'Published - Jun 09, 2022',
    logo: '/images/logos/telangana-today-1.png',
    url: 'https://telanganatoday.com/hyderabad-based-way2news-raises-rs-130-crore',
    summary:
      'Telangana Today highlights the homegrown Hyderabad media-tech platform crossing 4 billion monthly screen views.',
  },
  {
    id: 'bizzbuzz',
    title: 'Hyderabad based Way2News raises $16.75 million, touted as top news app',
    author: 'by Dwaipayan Bhattacharjee',
    date: 'Published - JUNE 09, 2022',
    logo: '/images/logos/bizzbuzz-1.png',
    url: 'https://www.bizzbuzz.news/corporate/hyderabad-based-way2news-raises-1675-million-touted-as-top-news-app-1142402',
    summary:
      'BizzBuzz spotlights Way2News’s hyperlocal contributor model and industry-leading retention metrics.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'AISHWARY GOYAL',
    quote:
      'This is a must have app. It keeps me updated about the everyday national and international news. Also helps me improve my vocabulary and pick some trending words. Thank you so much Way2News',
    avatar: '/images/testi4.png',
    rating: 4.5,
  },
  {
    id: 'testi-2',
    name: 'Hriday S. Singh Parihar',
    quote:
      "The best news app. I tried almost all news apps for updated and latest breaking news but all are in vein. Also other news apps occupy large space on hard card but Way2News doesn't. I find Way2News the best app ever with latest breaking news, light in weight, beautiful GUI. Thanks to Way2News team.",
    avatar: '/images/testi3.png',
    rating: 4.5,
  },
  {
    id: 'testi-3',
    name: 'A Google User',
    quote:
      'Love you short and sweet story news, daily knowing very well. Everyday and anytime updating, what is going on, in the society. This app really useful. Always I love this app ever and forever...',
    avatar: '/images/testi1.png',
    rating: 4.5,
  },
  {
    id: 'testi-4',
    name: 'Mounika Kompally',
    quote:
      'Very nice app u can get information on time very useful for daily news readers and followers',
    avatar: '/images/testi2.png',
    rating: 4.5,
  },
];

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: 'field-marketing',
    title: 'Field Marketing Executive',
    experience: '0-8 Years',
    openings: '50',
    location: 'Tamil Nadu all Districts',
    employmentType: 'Full Time',
    posted: 'Posted 1 Month Ago',
    description:
      'We are looking for trained and intellectual individuals to promote app installs through door-to-door marketing.',
  },
  {
    id: 'ad-specialist',
    title: 'Advertisement Specialist / Executives',
    experience: '2 Years',
    openings: '4',
    location: 'All Districts in AP & TS',
    employmentType: 'Full Time',
    description:
      'We are looking for an Ad Sales Executives with experience in newspaper classifieds.',
  },
  {
    id: 'content-telugu',
    title: 'Content Writer - Telugu',
    experience: '0-3 Years',
    openings: '3',
    location: 'Hyderabad',
    employmentType: 'Full Time',
    description: 'We are looking for a Content Writer who is fluent in Telugu reading and typing.',
  },
  {
    id: 'content-hindi',
    title: 'Content Writer - Hindi',
    experience: '0-3 Years',
    openings: '4',
    location: 'Hyderabad',
    employmentType: 'Full Time',
    posted: 'Posted 1 Month Ago',
    description: 'We are looking for a Content writer who is fluent in Hindi reading and typing.',
  },
  {
    id: 'backend-dev',
    title: 'Backend developer',
    experience: '1-4 Years',
    openings: '2',
    location: 'Hyderabad',
    employmentType: 'Full Time',
    description:
      'We are looking for a Backend Developer with the technical skills of Node JS, Angular, Mysql, Mongo and Visual studio.',
  },
  {
    id: 'content-malayalam',
    title: 'Content Writer - Malayalam',
    experience: '0-3 Years',
    openings: '2',
    location: 'Hyderabad',
    employmentType: 'Full Time',
    description: 'We are looking for a Content writer who is fluent in Malayalam reading and typing.',
  },
];

export const EVENTS_GALLERY = [
  { year: '2019', image: '/images/2019.jpg', caption: 'Way2News Annual Celebrations & Team Milestones 2019' },
  { year: '2020', image: '/images/2020.jpg', caption: 'Way2News Hyperlocal Expansion & Culture 2020' },
  { year: '2021', image: '/images/2021.jpg', caption: 'Way2News Editorial & Engineering Summit 2021' },
];

export const FOOTER_LEGAL_LINKS = [
  { id: 'terms', label: 'Terms & Conditons', href: 'https://www.way2news.com/terms.html' },
  {
    id: 'ad-terms',
    label: 'Advertisement T&C',
    href: 'https://www.way2news.com/advertisement-terms-and-condition.html',
  },
  { id: 'payment', label: 'Payment Policy', href: 'https://www.way2news.com/payment-policy.html' },
  { id: 'privacy', label: 'Privacy-Policy', href: 'https://www.way2news.com/privacy_policy.html' },
  { id: 'whistle', label: 'Whistle Blower Policy', href: 'https://www.way2news.com/whistle-blower.html' },
  { id: 'grievance', label: 'Grievance', href: '#contact-page' },
];
