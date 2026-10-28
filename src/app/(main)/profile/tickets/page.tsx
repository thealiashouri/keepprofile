import Link from "next/link";
import { Plus, Headset } from "lucide-react";
import { PageHeading, EmptyState } from "@/components/ui";
const tickets: {id:string;title:string;status:"open"|"review"|"answered"|"closed";date:string}[] = [];
const statusLabel = {open:"باز",review:"در حال بررسی",answered:"پاسخ داده‌شده",closed:"بسته‌شده"};
export default function TicketsPage() { return <div className="container page"><PageHeading title="تیکت‌های پشتیبانی" description="درخواست‌ها و مکالمات پشتیبانی." action={<Link href="/profile/tickets/new" className="btn btn-primary"><Plus size={17}/> تیکت جدید</Link>}/>
 {tickets.length ? <div className="ticket-list">{tickets.map(t=><Link href={`/profile/tickets/${t.id}`} className="surface ticket-card" key={t.id}><div className="ticket-card-top"><strong>{t.title}</strong><span className={`ticket-status ${t.status}`}>{statusLabel[t.status]}</span></div><div className="ticket-meta"><span>شناسه: {t.id}</span><span>تاریخ ایجاد: {t.date}</span></div></Link>)}</div> : <section className="surface content-panel"><EmptyState title="تیکتی ثبت نشده است" description="فهرست تیکت‌ها پس از اتصال سامانه پشتیبانی نمایش داده می‌شود. فرم ایجاد تیکت در حال حاضر نمایشی است."/><span className="placeholder-icon"><Headset size={22}/></span></section>}
 </div>; }