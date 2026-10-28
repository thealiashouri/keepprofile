import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function PageHeading({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return <div className="page-heading"><div><h1 className="page-title">{title}</h1>{description && <p className="muted heading-description">{description}</p>}</div>{action}</div>;
}
export function SectionTitle({ children }: { children: React.ReactNode }) { return <h2 className="section-title">{children}</h2>; }
export function MenuLink({ href, icon: Icon, title, description, badge }: { href: string; icon: LucideIcon; title: string; description?: string; badge?: string | number }) {
  return <Link href={href} className="menu-link"><span className="menu-icon"><Icon size={21}/></span><span className="menu-copy"><strong>{title}</strong>{description && <small>{description}</small>}</span>{badge !== undefined && <span className="count-badge">{badge}</span>}<ChevronLeft className="menu-chevron" size={18}/></Link>;
}
export function EmptyState({ title, description }: { title: string; description: string }) {
  return <div className="empty-state"><span className="empty-symbol">· · ·</span><strong>{title}</strong><p>{description}</p></div>;
}