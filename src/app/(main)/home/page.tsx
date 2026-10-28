import Link from "next/link";
import { ArrowUpLeft, Sparkles, Wallet, ClipboardList, Layers3, UserRound, MessageCircle } from "lucide-react";
import { PageHeading } from "@/components/ui";

const shortcuts = [
  { href: "/services", title: "خدمات", text: "مشاهده بخش خدمات", icon: Layers3 },
  { href: "/orders", title: "سفارش‌ها", text: "پیگیری سفارش‌ها", icon: ClipboardList },
  { href: "/wallet", title: "کیف پول", text: "مدیریت کیف پول", icon: Wallet },
  { href: "/profile/messages", title: "پیام‌ها", text: "پیام‌های حساب", icon: MessageCircle },
];
export default function HomePage() {
  return <div className="container page">
    <PageHeading title="خانه" description="به فضای کاربری HiKeep خوش آمدید." />
    <section className="welcome-card">
      <div className="welcome-orb orb-one"/><div className="welcome-orb orb-two"/>
      <div className="welcome-content"><span className="eyebrow"><Sparkles size={15}/> فضای کاربری شما</span><h2>همه‌چیز، ساده و یک‌جا.</h2><p>از اینجا می‌توانید به بخش‌های مختلف حساب خود دسترسی داشته باشید.</p><Link href="/profile" className="btn welcome-btn">مشاهده پروفایل <ArrowUpLeft size={17}/></Link></div>
      <div className="welcome-art"><div className="art-ring"><LeafMark/></div></div>
    </section>
    <div className="section-heading-row"><h2 className="section-title">دسترسی سریع</h2><span className="muted">میان‌برهای حساب</span></div>
    <div className="shortcut-grid">{shortcuts.map(({href,title,text,icon:Icon})=><Link href={href} key={href} className="shortcut-card"><span className="shortcut-icon"><Icon size={22}/></span><strong>{title}</strong><span className="muted">{text}</span><ArrowUpLeft size={16} className="shortcut-arrow"/></Link>)}</div>
    <p className="demo-note">نسخه آغازین رابط کاربری — اطلاعات تجاری تا اتصال به سرویس‌های اصلی نمایش داده نمی‌شوند.</p>
  </div>;
}
function LeafMark() { return <svg viewBox="0 0 100 100" aria-hidden="true"><path d="M78 18C43 17 21 34 24 59c2 18 20 25 34 14C74 59 78 18 78 18Z" fill="currentColor" opacity=".9"/><path d="M20 82C35 60 49 48 70 32" stroke="var(--surface)" strokeWidth="4" fill="none" strokeLinecap="round"/></svg>; }