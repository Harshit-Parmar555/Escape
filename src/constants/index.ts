import { SiFusionauth } from "react-icons/si";
import {
  MdOutlineDashboardCustomize,
  MdOutlineRocketLaunch,
  MdElectricBolt,
  MdPalette,
  MdOutlineTrendingUp,
  MdMonitor,
  MdStorefront,
  MdSecurity
} from "react-icons/md";

// perks
export const perks = [
  {
    icon: SiFusionauth,
    title: 'I. Sign Up',
    info: 'Create your free account to start coding with AI assistance and explore the editor instantly.',
  },
  {
    icon: MdOutlineDashboardCustomize,
    title: 'II. Start Coding',
    info: 'Write code with real-time AI suggestions, syntax help, and debugging tools built into the editor.',
  },
  {
    icon: MdOutlineRocketLaunch,
    title: 'III. Learn & Deploy',
    info: 'Build projects, learn faster with guided help, and deploy your work — all from a single platform.',
  },
];

// features
export const features = [
  {
    icon: MdElectricBolt,
    title: 'AI Code Suggestions',
    info: 'Get intelligent, real-time code completions and function suggestions powered by advanced AI models.',
  },
  {
    icon: MdPalette,
    title: 'Smart Error Detection',
    info: 'Catch bugs as you type with real-time error highlighting and instant fix recommendations.',
  },
  {
    icon: MdOutlineTrendingUp,
    title: 'Learning Mode',
    info: 'Enable guided learning with code hints, explanations, and step-by-step walkthroughs tailored to your skill level.',
  },
  {
    icon: MdMonitor,
    title: 'Multi-Language Support',
    info: 'Work seamlessly with JavaScript, Python, C++, and more — all in one powerful editor.',
  },
  {
    icon: MdStorefront,
    title: 'Project-Based Workflow',
    info: 'Organize your code by projects, track progress, and deploy directly from the editor.',
  },
  {
    icon: MdSecurity,
    title: 'Secure & Private Workspace',
    info: 'Your code stays yours. All sessions are encrypted and isolated for maximum privacy and control.',
  },
];

// pricing details
export const pricingCards = [
  {
    title: 'Standard',
    description: 'Essential tools for learners starting their journey',
    price: '$19',
    duration: 'month',
    highlight: 'What you get',
    buttonText: 'Get Started',
    features: [
      'Access to beginner-friendly coding lessons',
      'Basic AI code completions (5/day)',
      'Syntax highlighting and formatting tools',
      'Community discussion access',
      'Light theme and basic layout options',
      'Limited project storage (up to 2 projects)',
    ],
  },
  {
    title: 'Pro',
    description: 'For beginners seeking full resources, support, and AI feedback',
    price: '$49',
    duration: 'month',
    highlight: 'Everything in Standard, plus',
    buttonText: 'Upgrade to Pro',
    features: [
      'Unlimited AI-assisted coding sessions',
      'Error detection with live explanations',
      'Full access to all course modules & quizzes',
      'Auto-refactor suggestions for clean code',
      'Dark mode and custom editor themes',
      'Priority support and roadmap access',
    ],
  },
  {
    title: 'Platinum',
    description: 'Advanced features for professionals and serious learners',
    price: '$69',
    duration: 'month',
    highlight: 'Everything in Pro, plus',
    buttonText: 'Get Started',
    features: [
      
      'Private code review & mentorship sessions',
      'Personalized learning roadmap & feedback',
      'Team collaboration workspace (invite members)',
      'Early access to new AI features and tools',
      'Downloadable certificates after each course',
    ],
  },
];

// bentocards 
export const bentoCards = [
  {
    title: 'Start with Inspiration',
    info: 'Browse our vast library of pre-designed templates or upload your own images.',
    imgSrc: '/assets/bento-1.svg',
    alt: 'Inspiration for website creation',
  },
  {
    title: 'AI Assists Your Vision',
    info: 'Our intelligent AI tailors suggestions and functionalities based on your goals.',
    imgSrc: '/assets/bento1.svg',
    alt: 'AI website building assistant',
  },
  {
    title: 'Drag & Drop Customization',
    info: 'Effortlessly personalize your website with our intuitive drag-and-drop editor.',
    imgSrc: '/assets/bento1.svg',
    alt: 'Website customization with drag and drop',
  },
  {
    title: 'Launch & Shine Online',
    info: 'Publish your website with a single click and take your brand to the world.',
    imgSrc: '/assets/bento1.svg',
    alt: 'Website launch and publication',
  },
];

// reviews
export const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "The AI suggestions are spot-on. It feels like having a senior dev reviewing my code in real-time.",
    avatar: 'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww',
    date: 'July 10, 2025',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I cut my debugging time in half. The auto-refactor and clean code hints are game changers.",
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww',
    date: 'July 9, 2025',
  },
  {
    name: 'John',
    username: '@john',
    body: "Super intuitive and responsive. I didn't expect an AI editor to understand my logic this well.",
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww',
    date: 'July 8, 2025',
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "The smart code completions and error predictions feel like magic. Definitely worth integrating into your daily dev flow.",
    avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    date: 'July 7, 2025',
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I've used a ton of editors, but none this intelligent. The AI actually understands context — not just syntax.",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww',
    date: 'July 6, 2025',
  },
  {
    name: 'James',
    username: '@james',
    body: "From writing boilerplate to optimizing code, this editor boosts productivity without killing creativity.",
    avatar: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    date: 'July 5, 2025',
  },
  {
    name: 'Jack',
    username: '@jack',
    body: "The AI suggestions are spot-on. It feels like having a senior dev reviewing my code in real-time.",
    avatar: 'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww',
    date: 'July 10, 2025',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I cut my debugging time in half. The auto-refactor and clean code hints are game changers.",
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww',
    date: 'July 9, 2025',
  },
  {
    name: 'John',
    username: '@john',
    body: "Super intuitive and responsive. I didn't expect an AI editor to understand my logic this well.",
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww',
    date: 'July 8, 2025',
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "The smart code completions and error predictions feel like magic. Definitely worth integrating into your daily dev flow.",
    avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    date: 'July 7, 2025',
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I've used a ton of editors, but none this intelligent. The AI actually understands context — not just syntax.",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww',
    date: 'July 6, 2025',
  },
  {
    name: 'James',
    username: '@james',
    body: "From writing boilerplate to optimizing code, this editor boosts productivity without killing creativity.",
    avatar: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    date: 'July 5, 2025',
  },
];

