import Link from "next/link";
import { UserRound, Settings2, Mail, Headset, Scale, Info, LogOut, CalendarDays, ShieldCheck, PencilLine } from "lucide-react";
import { PageHeading, MenuLink } from "@/components/ui";

export default function ProfilePage() {
  return <div className="container page">
    <PageHeading title="پروفایل من" description="اطلاعات حساب و تنظیمات شخصی شما."/>
    <section className="profile-card surface">
      <div className="profile-cover"><div className="cover-grid"/><span className="cover-brand">HiKeep<span>.</span></span><div className="cover-blob"/></div>
      <div className="profile-identity">
        <div className="avatar" aria-label="تصویر پیش‌فرض کاربر"><UserRound size={36}/></div>
        <div className="identity-copy"><h2>کاربر نمونه</h2><span className="role-badge"><ShieldCheck size={14}/> حساب کاربری</span><p className="muted identity-caption">اطلاعات نمایشی نمونه؛ هنوز به حساب واقعی متصل نیست.</p></div>
        <Link href="/profile/account" className="btn btn-secondary edit-profile"><PencilLine size={16}/> ویرایش پروفایل</Link>
      </div>
      <div className="profile-meta"><span><CalendarDays size={16}/> تاریخ عضویت: <b>ثبت نشده</b></span><span><ShieldCheck size={16}/> وضعیت حساب: <b>نامشخص</b></span></div>
    </section>
    <div className="profile-layout">
      <section className="surface menu-panel"><h2 className="menu-panel-title">حساب کاربری</h2>
        <MenuLink href="/profile/account" icon={UserRound} title="اطلاعات حساب کاربری" description="نام، ایمیل و اطلاعات تماس"/>
        <MenuLink href="/profile/settings" icon={Settings2} title="تنظیمات" description="تم و تنظیمات عمومی"/>
        <MenuLink href="/profile/messages" icon={Mail} title="پیام‌ها" description="مشاهده پیام‌های دریافتی"/>
        <MenuLink href="/profile/tickets" icon={Headset} title="تیکت‌های پشتیبانی" description="پیگیری درخواست‌های پشتیبانی"/>
      </section>
      <section className="surface menu-panel"><h2 className="menu-panel-title">درباره و راهنما</h2>
        <MenuLink href="/profile/terms" icon={Scale} title="قوانین و مقررات" description="شرایط استفاده و حریم خصوصی"/>
        <MenuLink href="/profile/about" icon={Info} title="درباره HiKeep" description="اطلاعات پلتفرم"/>
        <Link href="/login" className="menu-link logout-link"><span className="menu-icon"><LogOut size={21}/></span><span className="menu-copy"><strong>خروج از حساب کاربری</strong><small>فرایند احراز هویت هنوز متصل نشده است</small></span></Link>
      </section>
    </div>
  </div>;
}