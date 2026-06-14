import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { employees, recentActivity, riskAlerts } from "@/lib/mock-data";
import { Users, ShieldAlert, Calculator, FileCheck, Plus, Search, Bell, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/app/")({
  component: Dashboard,
});

function Dashboard() {
  const stats = [
    { label: "Total Employees", value: employees.length, icon: Users, tone: "bg-brand/10 text-brand" },
    { label: "Active Alerts", value: riskAlerts.filter(r => r.status !== "Resolved").length, icon: ShieldAlert, tone: "bg-destructive/10 text-destructive" },
    { label: "Payroll Issues", value: 2, icon: Calculator, tone: "bg-warning/15 text-warning-foreground" },
    { label: "Compliance Issues", value: 3, icon: FileCheck, tone: "bg-success/10 text-success" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">A real-time view of your workforce memory and risk posture.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="p-5">
            <div className="flex items-center justify-between">
              <div className={`grid h-10 w-10 place-items-center rounded-lg ${s.tone}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-4 text-3xl font-semibold tracking-tight">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Recent Workforce Activity</h2>
              <p className="text-xs text-muted-foreground">Decisions and changes captured in memory.</p>
            </div>
            <Button asChild variant="ghost" size="sm"><Link to="/app/employees">View all</Link></Button>
          </div>
          <ul className="divide-y divide-border">
            {recentActivity.map((a, i) => (
              <li key={i} className="flex items-center justify-between py-3.5">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-accent text-xs font-semibold">
                    {a.who.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{a.type}</div>
                    <div className="text-xs text-muted-foreground">{a.who}</div>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{a.when}</span>
              </li>
            ))}
          </ul>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="font-semibold">Quick Actions</h2>
            <div className="mt-4 grid gap-2">
              <Button asChild variant="outline" className="justify-start"><Link to="/app/employees"><Plus className="mr-2 h-4 w-4" />Add Employee</Link></Button>
              <Button asChild variant="outline" className="justify-start"><Link to="/app/search"><Search className="mr-2 h-4 w-4" />Search Records</Link></Button>
              <Button asChild variant="outline" className="justify-start"><Link to="/app/alerts"><Bell className="mr-2 h-4 w-4" />View Alerts</Link></Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-semibold">Top Risks</h2>
              <Button asChild variant="ghost" size="sm"><Link to="/app/alerts">All</Link></Button>
            </div>
            <ul className="space-y-3">
              {riskAlerts.slice(0, 3).map((r) => (
                <li key={r.id} className="rounded-lg border border-border p-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant={r.severity === "High" ? "destructive" : "secondary"}>{r.severity}</Badge>
                    <span className="text-xs text-muted-foreground">{r.employee}</span>
                  </div>
                  <p className="mt-2 text-sm">{r.title}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
