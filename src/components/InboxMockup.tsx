import { useState } from 'react';
import { 
  Sparkles, 
  Inbox, 
  Star, 
  Send, 
  FileText, 
  Archive, 
  Trash, 
  Search, 
  CornerUpLeft, 
  CornerUpRight, 
  MoreHorizontal, 
  Paperclip, 
  Trash2 
} from 'lucide-react';
import { MESSAGES, NAV_ITEMS } from '../types';

interface DetailedMessage {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread: boolean;
  avatarLetter: string;
  avatarBg: string;
  label: 'Work' | 'Personal' | 'Travel' | 'Finance';
  summary: string;
  paragraphs: string[];
  attachment?: string;
}

const DETAILED_MESSAGES: DetailedMessage[] = [
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
    summary: 'Your team closed 23 issues, merged 14 PRs, and shipped 2 features. Top contributor: Marcus. No action needed.',
    paragraphs: [
      'Hi team,',
      'Here is your weekly digest of everything happening across your projects. This was a strong week with significant progress on the Q3 roadmap.',
      'Twenty-three issues were closed, fourteen pull requests were merged, and two customer-facing features went out. The velocity trend continues to climb.',
      'Let me know if you would like a deeper breakdown by project or contributor.',
      '— The Linear team'
    ],
    attachment: 'digest-may-6.pdf'
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
    summary: 'Sophia reviewed the Q3 roadmap draft. She recommends sliding the public API release forward and adding an extra review cycle for styling.',
    paragraphs: [
      'Hey! Thanks for sending the deck over. I had a few thoughts on the styling timeline and our release calendar.',
      'I think we can move the public API release up by two weeks if we deprioritize the beta console. This aligns better with our partnership goals.',
      'Let me know if you are free for a quick sync at 2 PM today to lock down slide 12.',
      'Best,',
      'Sophia'
    ]
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
    summary: 'Marcus approved the latest liquid-glass styling changes on the primary dashboard and left suggestions for micro-animations.',
    paragraphs: [
      'Marcus commented on Aura Desktop - Main:',
      '"Love the new direction on the landing hero. The liquid glass effect is looking incredible! Let\'s make sure we also add nice slide/fade transitions on card selection."',
      'Click below to view the comment threads directly or respond in-file.',
      '— Figma Notifications'
    ],
    attachment: 'aura-v2-mockup.fig'
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
    summary: 'Stripe completed a standard merchant transfer of ₹10,42,000.00 INR to your primary banking partner. Expected clearance: 1 business day.',
    paragraphs: [
      'Payout details:',
      'A payout of ₹10,42,000.00 was created and has been sent to your bank account. Funds usually arrive in 1-2 business days depending on your bank.',
      'Reference ID: px_19G2A7L9Z0K. You can review payout details and export CSV files from your dashboard settings.',
      'Thank you,',
      'The Stripe Team'
    ]
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
    summary: 'Vercel successfully bundled aura-web in production mode. Zero errors or warnings were generated. Site is accessible.',
    paragraphs: [
      'Project: aura-web',
      'Branch: main',
      'Commit: 8e50b12 (Set up macOS Menu Bar and Liquid-glass styles)',
      'Preview: https://aura-web-g3f.vercel.app',
      'Your deployment is fully replicated and active. Enjoy fast performance and seamless page-loads.',
      '— Vercel Bot'
    ]
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
    summary: 'David Lim reviewed and approved pull request #482, praising the clean state architecture and modular typography.',
    paragraphs: [
      'david-lim approved your pull request on aura/core:',
      '"Looks solid. Thanks for isolating types and static lists early. Code compiles cleanly and types are perfectly safe. Ready to merge once checkout tests complete."',
      'Check checklist status or trigger deployment pipelines.',
      '— GitHub Core notifications'
    ]
  }
];

export default function InboxMockup() {
  const [selectedId, setSelectedId] = useState('1');
  const [activeTab, setActiveTab] = useState('inbox');
  const [searchQuery, setSearchQuery] = useState('');

  const currentMsg = DETAILED_MESSAGES.find(m => m.id === selectedId) || DETAILED_MESSAGES[0];

  const getLabelColor = (label: string) => {
    switch (label) {
      case 'Work': return '#00d2ff';
      case 'Personal': return '#A4F4FD';
      case 'Travel': return '#f59e0b';
      case 'Finance': return '#10b981';
      default: return '#ffffff';
    }
  };

  const getLucideIcon = (iconName: string) => {
    switch (iconName) {
      case 'Inbox': return <Inbox className="w-4 h-4" />;
      case 'Star': return <Star className="w-4 h-4" />;
      case 'Send': return <Send className="w-4 h-4" />;
      case 'FileText': return <FileText className="w-4 h-4" />;
      case 'Archive': return <Archive className="w-4 h-4" />;
      case 'Trash': return <Trash className="w-4 h-4" />;
      default: return <Inbox className="w-4 h-4" />;
    }
  };

  const filteredMessages = DETAILED_MESSAGES.filter(msg => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      msg.sender.toLowerCase().includes(query) ||
      msg.subject.toLowerCase().includes(query) ||
      msg.preview.toLowerCase().includes(query)
    );
  });

  return (
    <div id="inbox-mockup-wrapper" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div 
        id="inbox-mockup-container" 
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl shadow-2xl shadow-black/80 flex flex-col"
      >
        {/* Title bar */}
        <div id="title-bar" className="h-11 bg-black/40 border-b border-white/5 flex items-center justify-between px-4 select-none shrink-0">
          <div id="traffic-lights" className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] hover:opacity-80 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] hover:opacity-80 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] hover:opacity-80 transition-opacity" />
          </div>
          <span className="text-xs text-white/50 font-medium">Aura — Inbox</span>
          <div className="w-14" /> {/* Spacer for symmetry */}
        </div>

        {/* Mockup Body */}
        <div id="mockup-grid" className="grid grid-cols-12 h-[520px] divide-x divide-white/5 overflow-hidden">
          
          {/* Sidebar */}
          <div id="mockup-sidebar" className="col-span-3 bg-black/30 p-4 flex flex-col gap-5 h-full overflow-y-auto hidden md:flex">
            {/* Compose Button */}
            <button 
              id="compose-btn"
              className="cursor-pointer rounded-lg bg-white text-black text-xs font-semibold px-3 py-2.5 flex items-center justify-center gap-2 hover:bg-white/90 active:scale-[0.97] transition-all shrink-0 shadow-lg shadow-white/5"
            >
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              <span>Compose with Aura</span>
            </button>

            {/* Navigation items */}
            <div id="sidebar-nav-items" className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <div
                    key={item.id}
                    id={`sidebar-item-${item.id}`}
                    onClick={() => setActiveTab(item.id)}
                    className={`group cursor-pointer rounded-lg px-3 py-2 flex items-center justify-between text-xs transition-all ${
                      isActive 
                        ? 'bg-white/10 text-white font-medium' 
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/80'} transition-colors`}>
                        {getLucideIcon(item.icon)}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    {item.count && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                        isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-white/40'
                      }`}>
                        {item.count}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Labels section */}
            <div id="labels-section" className="flex flex-col gap-2 mt-2">
              <span className="text-[10px] font-semibold text-white/40 tracking-wider uppercase">Labels</span>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Work', color: '#00d2ff' },
                  { name: 'Personal', color: '#A4F4FD' },
                  { name: 'Travel', color: '#f59e0b' },
                  { name: 'Finance', color: '#10b981' }
                ].map((lbl) => (
                  <div key={lbl.name} className="flex items-center gap-2.5 text-xs text-white/60 hover:text-white transition-colors cursor-pointer px-1 py-0.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lbl.color }} />
                    <span>{lbl.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Message List */}
          <div id="message-list-pane" className="col-span-12 md:col-span-4 flex flex-col h-full bg-black/10">
            {/* Search header */}
            <div className="p-3 border-b border-white/5 flex items-center gap-2 text-white/40 bg-black/20 shrink-0">
              <Search className="w-3.5 h-3.5" />
              <input 
                type="text" 
                placeholder="Search mail" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none text-xs text-white focus:outline-none w-full placeholder-white/30"
              />
            </div>

            {/* Messages scrollarea */}
            <div className="flex-1 overflow-y-auto divide-y divide-white/5">
              {filteredMessages.length > 0 ? (
                filteredMessages.map((msg) => {
                  const isActive = selectedId === msg.id;
                  return (
                    <div
                      key={msg.id}
                      id={`msg-item-${msg.id}`}
                      onClick={() => setSelectedId(msg.id)}
                      className={`p-4 cursor-pointer transition-colors relative flex flex-col gap-1 focus:outline-none border-l-2 ${
                        isActive 
                          ? 'bg-white/5 border-l-brand' 
                          : msg.unread 
                            ? 'bg-white/[0.02] border-l-emerald-500/80 hover:bg-white/[0.03]' 
                            : 'border-l-transparent hover:bg-white/[0.015]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white/90">{msg.sender}</span>
                        <span className="text-[10px] text-white/40">{msg.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {msg.unread && (
                          <span className="w-1.5 h-1.5 bg-brand rounded-full shrink-0 animate-ping" />
                        )}
                        <span className={`text-xs ${msg.unread ? 'font-semibold text-white' : 'text-white/80'} truncate`}>
                          {msg.subject}
                        </span>
                      </div>
                      <p className="text-[11px] text-white/50 line-clamp-1">
                        {msg.preview}
                      </p>
                      
                      {/* Label badge */}
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <span 
                          className="w-1.5 h-1.5 rounded-full" 
                          style={{ backgroundColor: getLabelColor(msg.label) }} 
                        />
                        <span className="text-[9px] text-white/40 tracking-wider font-mono">{msg.label}</span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center text-xs text-white/40">
                  No messages matched your query.
                </div>
              )}
            </div>
          </div>

          {/* Reader */}
          <div id="reader-pane" className="col-span-12 md:col-span-5 flex flex-col h-full bg-[#0d0f12]/40 hidden sm:flex">
            {/* Toolbar */}
            <div className="h-11 border-b border-white/5 flex items-center justify-between px-4 bg-black/20 shrink-0 select-none">
              <div className="flex items-center gap-1">
                <button title="Reply" className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center transition-all text-white/60 hover:text-white cursor-pointer active:scale-95">
                  <CornerUpLeft className="w-3.5 h-3.5" />
                </button>
                <button title="Forward" className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center transition-all text-white/60 hover:text-white cursor-pointer active:scale-95">
                  <CornerUpRight className="w-3.5 h-3.5" />
                </button>
                <button title="Archive" className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center transition-all text-white/60 hover:text-white cursor-pointer active:scale-95">
                  <Archive className="w-3.5 h-3.5" />
                </button>
                <button title="Delete" className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center transition-all text-white/60 hover:text-white cursor-pointer active:scale-95">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <button title="More Actions" className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center transition-all text-white/60 hover:text-white cursor-pointer active:scale-95">
                <MoreHorizontal className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Email Contents */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
              
              {/* Header block */}
              <div className="flex flex-col gap-1.5">
                <h2 className="text-sm font-semibold text-white/95 tracking-tight leading-snug">
                  {currentMsg.subject}
                </h2>
                
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2.5">
                    {/* Unique gradient bubble */}
                    <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${currentMsg.avatarBg} flex items-center justify-center text-xs text-white font-medium shadow`}>
                      {currentMsg.avatarLetter}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{currentMsg.sender}</div>
                      <div className="text-[10px] text-white/40">to me · {currentMsg.time}</div>
                    </div>
                  </div>
                  
                  {/* Category Pill */}
                  <span className="px-2 py-0.5 rounded-full text-[10px] border border-white/10 text-white/60 bg-white/5 font-mono">
                    {currentMsg.label}
                  </span>
                </div>
              </div>

              {/* AI summary block */}
              <div className="rounded-xl border border-brand/20 bg-brand/5 p-3.5 mb-1 flex gap-3 items-start select-none shadow">
                <Sparkles className="w-4 h-4 text-[#A4F4FD] shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <div className="text-xs font-semibold text-[#A4F4FD] flex items-center gap-1.5 font-sans">
                    Summary by Aura
                  </div>
                  <p className="text-xs text-white/80 mt-1 leading-relaxed">
                    {currentMsg.summary}
                  </p>
                </div>
              </div>

              {/* Email Body text */}
              <div className="text-xs text-white/85 flex flex-col gap-3 font-sans leading-relaxed">
                {currentMsg.paragraphs.map((para, idx) => (
                  <p key={idx} className={para.startsWith('—') ? 'text-white/40 border-t border-white/5 pt-3 mt-1' : ''}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Attachment block if exists */}
              {currentMsg.attachment && (
                <div className="mt-4 border-t border-white/5 pt-4">
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <Paperclip className="w-3.5 h-3.5 text-white/50" />
                    <span className="text-xs font-medium text-white/80">{currentMsg.attachment}</span>
                    <span className="text-[10px] text-white/40">1.2 MB</span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
