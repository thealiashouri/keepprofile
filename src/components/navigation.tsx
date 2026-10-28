"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers3, ClipboardList, Wallet, UserRound, Leaf, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const items = [
  { href: "/home", label: "خانه", icon: Home },
  { href: "/services", label: "خدمات", icon: Layers3 },
  { href: "/orders", label: "سفارش", icon: ClipboardList },
  { href: "/wallet", label: "کیف پول", icon: Wallet },
  { href: "/profile", label: "پروفایل", icon: UserRound },
];
export function AppHeader() {
  const path = usePathname();
  const { theme, toggleTheme } = useTheme();
  return <header className="app-header">
    <div className="container header-inner">
      <Link href="/home" className="brand" aria-label="HiKeep، خانه">
        <span className="brand-mark"><Leaf size={22}/></span><span>HiKeep</span>
      </Link>
      <nav className="desktop-nav" aria-label="ناوبری اصلی">
        {items.map(item => {
          const active = path === item.href || (item.href === "/profile" && path.startsWith("/profile"));
          const Icon = item.icon;
          return <Link key={item.href} href={item.href} className={`desktop-link ${active ? "active" : ""}`} aria-current={active ? "page" : undefined}><Icon size={17}/>{item.label}</Link>;
        })}
      </nav>
      <button className="theme-button" onClick={toggleTheme} aria-label={theme === "light" ? "فعال‌کردن تم تاریک" : "فعال‌کردن تم روشن"} title="تغییر تم">
        {theme === "light" ? <Moon size={19}/> : <Sun size={19}/>}
      </button>
    </div>
  </header>;
}
export function MobileBottomNav() {
  const path = usePathname();
  return <nav className="mobile-bottom-nav" aria-label="ناوبری موبایل">
    {items.map(item => {
      const active = path === item.href || (item.href === "/profile" && path.startsWith("/profile"));
      const Icon = item.icon;
      return <Link key={item.href} href={item.href} className={`mobile-nav-item ${active ? "active" : ""}`} aria-current={active ? "page" : undefined}>
        <Icon size={21} strokeWidth={active ? 2.4 : 1.8}/><span>{item.label}</span>
      </Link>;
    })}
  </nav>;
}