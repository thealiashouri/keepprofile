import Link from "next/link";
import { notFound } from "next/navigation";
export default async function MessageDetail({ params }: { params: Promise<{ messageId: string }> }) {
 const { messageId } = await params;
 notFound();
 return <div className="container page"><Link href="/profile/messages">بازگشت به پیام‌ها</Link><p>{messageId}</p></div>;
}