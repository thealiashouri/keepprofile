import Link from "next/link";
import { Mail, ChevronLeft } from "lucide-react";
import { PageHeading, EmptyState } from "@/components/ui";
const messages: {id:string;title:string;summary:string;date:string;read:boolean}[] = [];
export default function MessagesPage() { return <div className="container page"><PageHeading title="پیام‌ها" description={`پیام‌های دریافتی شما · ${messages.filter(m=>!m.read).length} خوانده‌نشده`}/>
 {messages.length ? <section className="surface list-panel">{messages.map(m=><Link key={m.id} href={`/profile/messages/${m.id}`} className="message-row"><span className="message-icon"><Mail size={20}/></span><span className="message-copy"><strong>{m.title}</strong><small>{m.summary}</small></span><time>{m.date}</time><ChevronLeft size={18}/></Link>)}</section> : <section className="surface content-panel"><EmptyState title="پیامی برای نمایش وجود ندارد" description="این فهرست خالی است. پیام واقعی پس از اتصال سرویس پیام‌ها نمایش داده می‌شود."/><span className="placeholder-icon"><Mail size={22}/></span></section>}
 <p className="demo-note">هیچ پیام ساختگی به‌عنوان پیام واقعی نمایش داده نشده است.</p></div>; }