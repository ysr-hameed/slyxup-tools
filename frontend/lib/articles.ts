export interface Article {
  title: string;
  slug: string;
  description: string;
  category: string;
  datePublished: string;
  readTime: string;
  href: string;
}

/**
 * Central blog registry.
 *
 * Add a new article here and it will automatically appear on the /blog index.
 * Each entry maps to a page under `app/blog/[slug]/`. The `href` is where the
 * full article lives (for now existing guides keep their own routes).
 */
export const articles: Article[] = [
  {
    title: "How Much Does TikTok Pay Per View? (2026)",
    slug: "how-much-does-tiktok-pay",
    description:
      "Real Creator Fund and Creativity Program RPM rates for 2026, with per-1,000-views earnings.",
    category: "TikTok",
    datePublished: "2026-08-13",
    readTime: "6 min read",
    href: "/how-much-does-tiktok-pay",
  },
  {
    title: "How Many Views to Make $1,000 on TikTok?",
    slug: "how-many-views-to-make-1000-on-tiktok",
    description:
      "The Creator Fund math for $1,000, and why brand deals and longer videos get you there faster.",
    category: "TikTok",
    datePublished: "2026-08-13",
    readTime: "5 min read",
    href: "/how-many-views-to-make-1000-on-tiktok",
  },
  {
    title: "How Much Do Instagram Creators Make? (2026)",
    slug: "how-much-do-instagram-creators-make",
    description:
      "Real Instagram income figures for Reels bonuses, brand deals, and affiliate income by follower count and niche.",
    category: "Instagram",
    datePublished: "2026-08-13",
    readTime: "6 min read",
    href: "/how-much-do-instagram-creators-make",
  },
  {
    title: "How Much Does TikTok Pay for 1 Million Views? (2026)",
    slug: "how-much-does-tiktok-pay-for-1-million-views",
    description:
      "TikTok payouts for 1 million views across the Creator Fund, Creativity Program, and brand deals.",
    category: "TikTok",
    datePublished: "2026-08-13",
    readTime: "5 min read",
    href: "/how-much-does-tiktok-pay-for-1-million-views",
  },
  {
    title: "How Much Do TikTok Creators Make With 100K Followers? (2026)",
    slug: "how-much-do-tiktok-creators-make-with-100k-followers",
    description:
      "What TikTok creators with 100K followers earn across the Creativity Program, brand deals, and LIVE gifts.",
    category: "TikTok",
    datePublished: "2026-08-13",
    readTime: "6 min read",
    href: "/how-much-do-tiktok-creators-make-with-100k-followers",
  },
  {
    title: "How Many Followers to Make Money on Instagram? (2026)",
    slug: "how-many-followers-to-make-money-on-instagram",
    description:
      "The follower milestones where Instagram creators start earning from affiliate links and brand deals.",
    category: "Instagram",
    datePublished: "2026-08-13",
    readTime: "5 min read",
    href: "/how-many-followers-to-make-money-on-instagram",
  },
  {
    title: "How Much Does Instagram Pay Per View on Reels? (2026)",
    slug: "how-much-does-instagram-pay-per-view",
    description:
      "The invite-only Reels Play bonus, real per-view rates, and why brand deals pay more.",
    category: "Instagram",
    datePublished: "2026-08-13",
    readTime: "5 min read",
    href: "/how-much-does-instagram-pay-per-view",
  },
  {
    title: "YouTube RPM: How Much Does YouTube Pay Per 1,000 Views? (2026)",
    slug: "how-much-does-youtube-pay-per-1000-views",
    description:
      "Real YouTube RPM figures by niche for 2026, and what actually drives your revenue per 1,000 views.",
    category: "YouTube",
    datePublished: "2026-08-13",
    readTime: "6 min read",
    href: "/how-much-does-youtube-pay-per-1000-views",
  },
  {
    title: "How Much Does YouTube Pay for 1 Million Views? (2026)",
    slug: "how-much-does-youtube-pay-for-1-million-views",
    description:
      "What 1 million views pays across different RPMs, and why sponsorships often beat ad revenue.",
    category: "YouTube",
    datePublished: "2026-08-13",
    readTime: "5 min read",
    href: "/how-much-does-youtube-pay-for-1-million-views",
  },
  {
    title: "How Much Ad Revenue Does a YouTuber Make? (2026)",
    slug: "how-much-ad-revenue-do-youtubers-make",
    description:
      "Typical monthly YouTube ad revenue by channel size, and how sponsorships stack up against ads.",
    category: "YouTube",
    datePublished: "2026-08-13",
    readTime: "6 min read",
    href: "/how-much-ad-revenue-do-youtubers-make",
  },
  {
    title: "YouTube Shorts RPM: How Much Do Shorts Pay Per View? (2026)",
    slug: "youtube-shorts-rpm-per-1000-views",
    description:
      "Real YouTube Shorts RPM figures for 2026, how Shorts payouts work, and why Shorts earn less than long-form.",
    category: "YouTube",
    datePublished: "2026-08-13",
    readTime: "5 min read",
    href: "/youtube-shorts-rpm-per-1000-views",
  },
  {
    title: "How Much Do 1 Million Shorts Views Pay on YouTube? (2026)",
    slug: "how-much-do-1-million-shorts-views-pay",
    description:
      "Real payouts for 1 million YouTube Shorts views, including ad revenue and bonus incentives.",
    category: "YouTube",
    datePublished: "2026-08-13",
    readTime: "5 min read",
    href: "/how-much-do-1-million-shorts-views-pay",
  },
  {
    title: "How to Make Money With YouTube Shorts in 2026",
    slug: "how-to-make-money-with-youtube-shorts",
    description:
      "A practical guide to Shorts monetization: requirements, RPM, bonuses, and the fastest income strategies.",
    category: "YouTube",
    datePublished: "2026-08-13",
    readTime: "6 min read",
    href: "/how-to-make-money-with-youtube-shorts",
  },
  {
    title: "How Much Do Twitch Streamers Make? (2026)",
    slug: "how-much-do-twitch-streamers-make",
    description:
      "Real Twitch income figures for 2026 across subscriptions, Bits, ads, and donations.",
    category: "Twitch",
    datePublished: "2026-08-13",
    readTime: "6 min read",
    href: "/how-much-do-twitch-streamers-make",
  },
  {
    title: "How Much Does Twitch Pay Per Sub? (2026)",
    slug: "how-much-does-twitch-pay-per-sub",
    description:
      "The 50/50 sub split, Tier 1/2/3 payouts, Prime subs, and gifted subs explained.",
    category: "Twitch",
    datePublished: "2026-08-13",
    readTime: "5 min read",
    href: "/how-much-does-twitch-pay-per-sub",
  },
  {
    title: "How Many Subscribers to Make Money on Twitch? (2026)",
    slug: "how-many-subscribers-to-make-money-on-twitch",
    description:
      "The follower and subscription milestones where Twitch streamers start earning real money.",
    category: "Twitch",
    datePublished: "2026-08-13",
    readTime: "5 min read",
    href: "/how-many-subscribers-to-make-money-on-twitch",
  },
];
