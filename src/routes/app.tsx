import { createFileRoute, Outlet, Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getSession, logout, type Session } from "@/lib/auth";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard, Users, Search, ShieldAlert, Calculator,
  FileCheck, FileText, Settings, LogOut, Brain, Moon, Sun, Menu, X,
} from "lucide-react";

export const Route = createFileRoute("/app")({
  component: AppLayout,
});

const nav = [
  { to: "/app", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/app/employees", label: "Employees", icon: Users },
  { to: "/app/search", label: "HR Memory Search", icon: Search },
  { to: "/app/alerts", label: "Risk Alerts", icon: ShieldAlert },
  { to: "/app/payroll", label: "Payroll Verification", icon: Calculator },
  { to: "/app/compliance", label: "Compliance", icon: FileCheck },
  { to: "/app/documents", label: "Documents", icon: FileText },
  { to: "/app/settings", label: "Settings", icon: Settings },
] as const;

function AppLayout() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const s = getSession();
    if (!s) {
      navigate({ to: "/login" });
      return;
    }
    setSession(s);
    setReady(true);
  }, [navigate]);

  useEffect(() => { setOpen(false); }, [pathname]);

  if (!ready || !session) {
    return <div className="grid min-h-screen place-items-center text-sm text-muted-foreground">Loading…</div>;
  }

  const doLogout = () => { logout(); navigate({ to: "/" }); };

  const isActive = (to: string, exact?: boolean) =>
    exact ? pathname === to : pathname === to || pathname.startsWith(to + "/");

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border bg-sidebar transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-16 items-center gap-2 border-b border-border px-5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-brand-foreground">
            <Brain className="h-4 w-4" />
          </span>
          <span className="font-semibold tracking-tight">AdminTwin <span className="text-brand">AI</span></span>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {nav.map((item) => {
            const active = isActive(item.to, (item as any).exact);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-border p-3">
          <button
            onClick={doLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
          >
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur md:px-8">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div className="text-sm">
              <div className="font-medium leading-tight">{session.companyName}</div>
              <div className="text-xs text-muted-foreground">{session.email}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-brand/15 text-sm font-semibold text-brand">
              {session.companyName.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>
        <main className="px-4 py-6 md:px-8 md:py-10">
          <Outlet />
        </main>
      </div>

      {open && <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setOpen(false)} />}
    </div>
  );
}
