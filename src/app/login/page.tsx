 "use client";
import Link from "next/link";
import { useState } from "react";
import { Leaf, LockKeyhole } from "lucide-react";
export default function LoginPage() {
 const [email,setEmail]=useState(""); const [notice,setNotice]=useState("");
 function submit(e:React.FormEvent){e.preventDefault();setNotice("احراز هویت هنوز به سرویس واقعی متصل نشده است. این فرم نشست ایجاد نمی‌کند.");}
 return <main className="login-page"><div className="login-card surface"><Link href="/home" className="brand login-brand"><span className="brand-mark"><Leaf size={22}/></span><span>HiKeep</span></Link><h1>ورود به حساب</h1><p className="muted">برای ورود، سرویس احراز هویت باید پیکربندی شود.</p><form onSubmit={submit}><div className="field"><label htmlFor="login-email">ایمیل</label><input id="login-email" type="email" dir="ltr" value={email} onChange={e=>setEmail(e.target.value)} required/></div><div className="field" style={{marginTop:14}}><label htmlFor="login-password">رمز عبور</label><input id="login-password" type="password" dir="ltr" required minLength={8}/></div>{notice&&<p className="form-message" role="status">{notice}</p>}<button className="btn btn-primary login-submit" type="submit"><LockKeyhole size={17}/> ادامه</button></form><Link className="login-back" href="/profile">بازگشت به پروفایل</Link></div></main>;
}