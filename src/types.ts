/**
 * Shared types for the Aura Landing Page
 */

export interface Message {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread: boolean;
  active?: boolean;
  avatarLetter: string;
  avatarBg: string;
  label?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string; // Lucide icon name or similar
  count?: number;
}

export interface FeatureChip {
  id: string;
  label: string;
}

export interface TriageCategory {
  id: string;
  title: string;
  count: number;
  items: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  desc: string;
  priceMonthly: string;
  priceYearly: string;
  features: string[];
}

// Data Sets

export const MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'Linear',
    subject: 'Weekly product digest',
    preview: 'Your team shipped 23 issues this week...',
    time: '9:41 AM',
    unread: true,
    avatarLetter: 'L',
    avatarBg: 'from-[#00d2ff] to-[#0B2551]',
    label: 'Work',
  },
  {
    id: '2',
    sender: 'Sophia Chen',
    subject: 'Re: Q3 roadmap review',
    preview: 'Thanks for sending the deck over. I had a few thoughts...',
    time: '8:12 AM',
    unread: true,
    avatarLetter: 'S',
    avatarBg: 'from-[#ff5e62] to-[#ff9966]',
    label: 'Work',
  },
  {
    id: '3',
    sender: 'Figma',
    subject: 'Marcus commented on your file',
    preview: 'Love the new direction on the landing hero.',
    time: 'Yesterday',
    unread: false,
    avatarLetter: 'F',
    avatarBg: 'from-[#f12711] to-[#f5af19]',
    label: 'Personal',
  },
  {
    id: '4',
    sender: 'Stripe',
    subject: 'Payout of ₹10,42,000.00 sent',
    preview: 'Your payout is on its way to your bank...',
    time: 'Yesterday',
    unread: false,
    avatarLetter: 'S',
    avatarBg: 'from-[#11998e] to-[#38ef7d]',
    label: 'Finance',
  },
  {
    id: '5',
    sender: 'Vercel',
    subject: 'Deployment ready for aura-web',
    preview: 'Preview is live at aura-web-g3f.vercel.app',
    time: 'Mon',
    unread: false,
    avatarLetter: 'V',
    avatarBg: 'from-[#4e54c8] to-[#8f94fb]',
    label: 'Work',
  },
  {
    id: '6',
    sender: 'GitHub',
    subject: '[aura/core] PR #482 approved',
    preview: 'david-lim approved your pull request.',
    time: 'Mon',
    unread: false,
    avatarLetter: 'G',
    avatarBg: 'from-[#3a7bd5] to-[#3a6073]',
    label: 'Work',
  },
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'inbox', label: 'Inbox', icon: 'Inbox', count: 12 },
  { id: 'starred', label: 'Starred', icon: 'Star', count: 3 },
  { id: 'sent', label: 'Sent', icon: 'Send' },
  { id: 'drafts', label: 'Drafts', icon: 'FileText', count: 2 },
  { id: 'archive', label: 'Archive', icon: 'Archive' },
  { id: 'trash', label: 'Trash', icon: 'Trash' },
];

export const FEATURE_CHIPS: FeatureChip[] = [
  { id: '1', label: 'Auto-categorize' },
  { id: '2', label: 'Snooze for later' },
  { id: '3', label: 'Silent newsletters' },
  { id: '4', label: 'One-tap unsubscribe' },
];

export const TRIAGE_CATEGORIES: TriageCategory[] = [
  {
    id: 'priority',
    title: 'Priority',
    count: 4,
    items: ['Sophia Chen — Q3 review', 'David Lim — contract signoff'],
  },
  {
    id: 'follow-up',
    title: 'Follow-up',
    count: 7,
    items: ['Marcus — design review', 'Figma — comment thread'],
  },
  {
    id: 'updates',
    title: 'Updates',
    count: 18,
    items: ['Vercel — deploy ready', 'GitHub — PR #482 merged'],
  },
  {
    id: 'archived',
    title: 'Archived',
    count: 13,
    items: ['Stripe payout · Newsletter · Receipts'],
  },
];

export const LOGO_NAMES = ['Linear', 'Vercel', 'Figma', 'Stripe', 'Ramp', 'Notion', 'Loom', 'Arc'];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: '"Aura gave our leadership team four hours of their week back. It reads like email from the future."',
    author: 'Parker Wilf',
    role: 'Group Product Manager',
    company: 'MERCURY',
  },
  {
    id: '2',
    quote: '"The command palette alone has changed how I process messages. I can\'t imagine going back to a traditional client."',
    author: 'Andrew von Rosenbach',
    role: 'Senior Engineering Program Manager',
    company: 'COHERE',
  },
  {
    id: '3',
    quote: '"Triage that actually understands context. Our team stopped dreading Monday morning inboxes."',
    author: 'Mathies Christensen',
    role: 'Engineering Manager',
    company: 'LUNAR',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    desc: 'For creators taking their first steps with Forma.',
    priceMonthly: '₹0',
    priceYearly: '₹0',
    features: [
      'Up to 3 projects in the cloud',
      'Image export up to 1080p',
      'Basic editing tools',
      'Free templates and icons',
      'Access via web and mobile app',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    desc: 'For freelancers and small teams who need more freedom and flexibility.',
    priceMonthly: '₹799/m',
    priceYearly: '₹7,999/y',
    features: [
      'Up to 50 projects in the cloud',
      'Export up to 4K',
      'Advanced editing toolkit',
      'Team collaboration (up to 5 members)',
      'Access to premium template library',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    desc: 'For studios, agencies, and professional creators working with brands.',
    priceMonthly: '₹1,599/m',
    priceYearly: '₹15,999/y',
    features: [
      'Unlimited projects',
      'Export up to 8K + animations',
      'AI-powered content generation tools',
      'Unlimited team members',
      'Brand customization',
    ],
  },
];
