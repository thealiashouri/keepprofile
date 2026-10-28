 "use client";
import { useState } from "react";
import Link from "next/link";
import { PageHeading } from "@/components/ui";
export default function NewTicketPage() {
 const [title,setTitle]=useState(""); const [body,setBody]=useState(""); const [status,setStatus]=useState("");
 function submit(e:React.FormEvent){e.preventDefault();if(!title.trim()||!body.trim()){setStatus("عنوان و شرح درخواست الزامی است.");return;}setStatus("اعتبارسنجی انجام شد؛ تیکت ثبت نشد چون API پشتیبانی هنوز متصل نیست.");}
 return <div className="container page"><PageHeading title="ایجاد تیکت جدید" description="فرم آماده اتصال به سرویس پشتیبانی است."/><form className="surface form-panel" onSubmit={submit}><div className="field"><label htmlFor="ticket-title">عنوان تیکت</label><input id="ticket-title" value={title} onChange={e=>setTitle(e.target.value)} required maxLength={120}/></div><div className="field" style={{marginTop:16}}><label htmlFor="ticket-body">شرح درخواست</label><textarea id="ticket-body" value={body} onChange={e=>setBody(e.target.value)} required maxLength={5000}/></div>{status&&<p role="status" className="form-message">{status}</p>}<div className="form-actions"><button className="btn btn-primary" type="submit">بررسی و ثبت</button><Link className="btn btn-secondary" href="/profile/tickets">بازگشت</Link></div></form></div>;
}