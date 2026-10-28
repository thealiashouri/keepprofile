import { AccountForm } from "@/components/profile-forms";
import { PageHeading } from "@/components/ui";
export default function AccountPage() { return <div className="container page"><PageHeading title="اطلاعات حساب کاربری" description="این فرم با داده نمونه کار می‌کند و هنوز به API متصل نیست."/><AccountForm/></div>; }