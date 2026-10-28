import { notFound } from "next/navigation";
export default async function TicketDetail({ params }: { params: Promise<{ ticketId: string }> }) { await params; notFound(); }