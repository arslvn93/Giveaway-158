// This file centralizes all editable content for the giveaway page

// Prize section
export const prizeImages = [
  "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwfGVufDB8fHx8MTc0MjI0NDc5M3ww&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1627627256672-027a4613d028?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsJTIwfGVufDB8fHx8MTc0MjI0NDc5M3ww&ixlib=rb-4.0.3", 
  "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwzfHxiYXNrZXRiYWxsJTIwfGVufDB8fHx8MTc0MjI0NDc5M3ww&ixlib=rb-4.0.3", 
];
export const prizeContent = {
  title: "Win 2 Raptors Tickets for an Unforgettable Night Out!",
  description: "Get ready to experience the thrill of live basketball action with TWO lower bowl tickets to see the Toronto Raptors! Whether you're planning a memorable date night or a special outing with your little one, these tickets promise an electrifying atmosphere and memories to last a lifetime. Enter now for your chance to score an exclusive live sports experience!",
  features: [
    "Lower bowl seating for an up-close view of the game",
    "Tickets valued at $300-$400",
    "Experience the excitement of live NBA action in Toronto",
    "Perfect for an unforgettable date or family outing",
    "Limited time offer – don't miss out!"
  ],
  value: "$300-$400",
};

// Header section
export const headerContent = {
  title: "Score Big with 2 Raptors Tickets!",
  description: "Join our exclusive giveaway for TWO lower bowl tickets to see the Toronto Raptors live on March 28, 2025. The promotion kicks off on March 3, 2025 and ends with the draw on March 21, 2025. Don't miss out on your chance to win this unforgettable live sports experience!",
  ctaText: "Enter Now",
  heroImage: prizeImages[0],
  secondaryImage: prizeImages[1], // Secondary image for the header
};

// Navigation section
export const navigationContent = {
  title: "Raptors Ticket Giveaway",
  links: [
    { name: 'Home', href: '#' },
    { name: 'Prize Details', href: '#prize' },
    { name: 'How to Enter', href: '#howToEnter' },
    { name: 'Rules', href: '#rules' },
    { name: 'Contact', href: '#contact' }
  ]
};

// How to Enter section
export const howToEnterContent = {
  title: "How to Enter",
  description: "Entering is easy! Follow these simple steps for your chance to win two lower bowl Raptors tickets:",
  steps: [
    {
      icon: "Mail",
      title: "Fill Out the Form",
      description: "Enter your name and email address in the form and submit your entry."
    },
    {
      icon: "Share2",
      title: "Share with Friends",
      description: "Share the giveaway on social media for extra entries."
    },
    {
      icon: "Users",
      title: "Confirm Your Entry",
      description: "Check your email to confirm your entry and secure your chance to win!"
    }
  ],
  benefits: [
    { 
      icon: "Clock", 
      title: "Quick & Easy", 
      desc: "Takes less than a minute" 
    },
    { 
      icon: "Trophy", 
      title: "Multiple Entries", 
      desc: "Earn extra entries by sharing" 
    },
    { 
      icon: "Gift", 
      title: "Exclusive Prize", 
      desc: "Valued at $300-$400" 
    }
  ],
  formLabels: {
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    submitButton: "Enter Giveaway",
    processingText: "Processing...",
    sharingPlatforms: ["Facebook", "Twitter", "Instagram"],
    sharingText: "Share for Extra Entries:",
    termsText: "By entering, you agree to our Terms & Conditions and Privacy Policy."
  },
  successMessage: {
    title: "Entry Submitted!",
    description: "Check your email to confirm your entry."
  },
  currentEntries: 482
};

// Rules section
export const rulesContent = {
  title: "Rules & Eligibility",
  description: "Before entering the giveaway, please review the following rules and eligibility requirements:",
  rules: [
    {
      question: "Who is eligible to enter?",
      answer: "Anyone 18 years or older residing in the Greater Toronto Area can enter this giveaway."
    },
    {
      question: "How long does the giveaway run?",
      answer: "This giveaway runs from March 3, 2025 until March 21, 2025. The draw will be held on March 21, 2025."
    },
    {
      question: "How will the winner be selected?",
      answer: "The winner will be selected randomly from all valid entries using a certified random selection tool to ensure fairness."
    },
    {
      question: "When and how will the winner be notified?",
      answer: "The winner will be notified via email within 48 hours after the giveaway ends. They must respond within 72 hours to claim their prize."
    },
    {
      question: "How many times can I enter?",
      answer: "Each person may enter once. Additional entries can be earned through sharing on social media (up to 3 extra entries)."
    },
    {
      question: "Is my information secure?",
      answer: "Yes, we value your privacy. Your information will be used solely for this giveaway and will not be shared with third parties."
    },
  ],
  imageUrl: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800",
  tipsForEntering: [
    "Double-check your email address before submitting your entry",
    "Share on social media for additional entry opportunities",
    "Set a calendar reminder for the draw date"
  ],
  importantNotice: "Winners will be contacted via the email provided during entry. Please be sure to check your inbox (and spam folder) regularly after the giveaway ends.",
  supportEmail: "support@giveaway.com",
  termsText: "By entering, you agree to all rules and terms.",
  downloadRulesText: "Download Full Rules PDF"
};

// Contact section
export const contactContent = {
  title: "Get In Touch",
  email: "arslan@salesgenius.co",
  phone: "416-655-4850",
  brokerage: {
    name: "Sales Genius",
    address: "Toronto, ON"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  privacyPolicyText: "Privacy Policy"
};

// Footer section
export const footerContent = {
  aboutText: "Sales Genius brings you exclusive giveaways and unforgettable live experiences.",
  email: "arslan@salesgenius.co",
  phone: "416-655-4850",
  quickLinks: ["Home", "About", "Listings", "Contact", "Privacy Policy"],
  newsletterText: "Subscribe to our newsletter for the latest updates on giveaways and exclusive offers.",
  brokerage: {
    name: "Sales Genius",
    address: "Toronto, ON"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  company: "The Sky Group Real Estate",
  privacyPolicyText: "Privacy Policy"
};

// Countdown
export const countdownContent = {
  endDate: new Date("March 21, 2025")
};

// Color scheme configuration for the entire giveaway
export const colorScheme = {
  primary: {
    main: 'amber-600',
    light: 'amber-400',
    dark: 'amber-800',
    gradient: 'from-amber-500 to-amber-700',
    text: 'amber-700',
    textLight: 'amber-500',
    textDark: 'amber-900',
    hover: 'amber-700',
    border: 'amber-200',
    background: 'amber-50',
    accent: 'amber-100',
    accentDark: 'amber-300',
  },
  secondary: {
    main: 'white',
    text: 'gray-700',
    textLight: 'gray-600',
    textDark: 'gray-800',
    border: 'gray-200',
    background: 'white',
    accent: 'gray-100',
  },
  utility: {
    success: 'green-600',
    successLight: 'green-100',
    error: 'red-600',
    errorLight: 'red-100',
    warning: 'yellow-600',
    warningLight: 'yellow-100',
    info: 'blue-600',
    infoLight: 'blue-100',
  },
  gradients: {
    header: 'from-amber-100/70 via-amber-50/40 to-transparent',
    countdownBg: 'from-amber-800 to-amber-950',
    countdownText: 'from-amber-200 to-amber-400',
    prizeTitle: 'from-amber-700 to-amber-500',
    button: 'from-amber-500 to-amber-600',
    buttonHover: 'from-amber-600 to-amber-700',
  },
  shadows: {
    small: 'shadow-md',
    medium: 'shadow-lg',
    large: 'shadow-xl',
    extraLarge: 'shadow-2xl',
    glow: 'shadow-[0_0_15px_rgba(251,191,36,0.3)]',
  },
  animations: {
    float: 'animate-float',
    pulseSlow: 'animate-pulse-slow',
    bounceSlow: 'animate-bounce-slow',
  }
};