import { AppHeader, MobileBottomNav } from "@/components/navigation";
export function AppShell({ children }: { children: React.ReactNode }) {
  return <><AppHeader/><main>{children}</main><MobileBottomNav/></>;
}