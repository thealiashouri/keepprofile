"use client";
import { useState } from "react";
import { Check, X, Save } from "lucide-react";
const initial = { firstName: "کاربر", lastName: "نمونه", email: "user@example.com", phone: "" };
export function AccountForm() {
  const [values, setValues] = useState(initial);
  const [draft, setDraft] = useState(initial);
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");
  function update(key: keyof typeof initial, value: string) { setDraft(old => ({ ...old, [key]: value })); setMessage(""); }
  function save() {
    if (!draft.firstName.trim() || !draft.lastName.trim()) { setMessage("نام و نام خانوادگی الزامی هستند."); return; }
    if (draft.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email)) { setMessage("فرمت ایمیل معتبر نیست."); return; }
    setValues(draft); setEditing(false); setMessage("تغییرات فقط در همین صفحه نگه داشته شد؛ برای ذخیره دائمی باید API متصل شود.");
  }
  function cancel() { setDraft(values); setEditing(false); setMessage(""); }
  return <section className="surface form-panel">
    <div className="form-panel-heading"><div><h2>مشخصات فردی</h2><p className="muted">اطلاعات نمایشی قابل ویرایش</p></div>{!editing && <button className="btn btn-secondary" onClick={() => {setDraft(values);setEditing(true);}}><span>ویرایش اطلاعات</span></button>}</div>
    <div className="grid-two">
      <div className="field"><label htmlFor="firstName">نام</label><input id="firstName" value={editing ? draft.firstName : values.firstName} disabled={!editing} onChange={e=>update("firstName",e.target.value)} /></div>
      <div className="field"><label htmlFor="lastName">نام خانوادگی</label><input id="lastName" value={editing ? draft.lastName : values.lastName} disabled={!editing} onChange={e=>update("lastName",e.target.value)} /></div>
      <div className="field"><label htmlFor="email">ایمیل</label><input id="email" type="email" dir="ltr" value={editing ? draft.email : values.email} disabled={!editing} onChange={e=>update("email",e.target.value)} /></div>
      <div className="field"><label htmlFor="phone">شماره تماس</label><input id="phone" inputMode="tel" dir="ltr" placeholder="ثبت نشده" value={editing ? draft.phone : values.phone} disabled={!editing} onChange={e=>update("phone",e.target.value)} /></div>
    </div>
    {message && <p className="form-message" role="status">{message}</p>}
    {editing && <div className="form-actions"><button className="btn btn-primary" onClick={save}><Save size={16}/> ذخیره تغییرات</button><button className="btn btn-secondary" onClick={cancel}><X size={16}/> لغو</button></div>}
    <p className="form-footnote"><Check size={15}/> شناسه کاربر، تاریخ عضویت و وضعیت حساب تا زمان اتصال به سامانه احراز هویت در دسترس نیستند.</p>
  </section>;
}