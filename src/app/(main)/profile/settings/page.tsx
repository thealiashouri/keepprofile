 "use client";
import { Bell, Shield, Globe, Moon, Sun, CheckCircle2 } from "lucide-react";
import { PageHeading } from "@/components/ui";
import { useTheme } from "@/components/theme-provider";
export default function SettingsPage() {
 const {theme,setTheme}=useTheme();
 return <div className="container page"><PageHeading title="تنظیمات" description="ترجیحات ظاهری و گزینه‌های حساب."/>
 <section className="surface settings-panel"><div className="setting-row"><span className="setting-icon"><Moon size={21}/></span><div className="setting-copy"><strong>حالت نمایش</strong><small>انتخاب تم روشن یا تاریک</small></div><div className="theme-switch" role="group" aria-label="انتخاب تم"><button onClick={()=>setTheme("light")} className={theme==="light"?"selected":""}><Sun size={16}/> روشن</button><button onClick={()=>setTheme("dark")} className={theme==="dark"?"selected":""}><Moon size={16}/> تاریک</button></div></div>
 <div className="setting-row"><span className="setting-icon"><Bell size={21}/></span><div className="setting-copy"><strong>اعلان‌ها</strong><small>تنظیم اعلان‌ها پس از اتصال سرویس در دسترس خواهد بود.</small></div><span className="status-pill">نیازمند API</span></div>
 <div className="setting-row"><span className="setting-icon"><Shield size={21}/></span><div className="setting-copy"><strong>امنیت حساب</strong><small>مدیریت نشست‌ها و تنظیمات امنیتی هنوز پیاده‌سازی نشده است.</small></div><span className="status-pill">نیازمند بک‌اند</span></div>
 <div className="setting-row"><span className="setting-icon"><Globe size={21}/></span><div className="setting-copy"><strong>زبان و نحوه نمایش</strong><small>زبان فعلی رابط کاربری فارسی است.</small></div><span className="status-pill"><CheckCircle2 size={14}/> فارسی</span></div></section></div>;
}