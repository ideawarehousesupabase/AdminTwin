import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { riskAlerts } from "@/lib/mock-data";
import { ShieldAlert, Filter } from "lucide-react";

export const Route = createFileRoute("/app/alerts")({
  component: AlertsPage,
});

const severityStyles: Record<string, string> = {
  High: "bg-destructive/10 text-destructive border-destructive/30",
  Medium: "bg-warning/15 text-warning-foreground border-warning/40",
  Low: "bg-success/10 text-success border-success/30",
};

function AlertsPage() {
  const counts = {
    High: riskAlerts.filter(r => r.severity === "High").length,
    Medium: riskAlerts.filter(r => r.severity === "Medium").length,
    Low: riskAlerts.filter(r => r.severity === "Low").length,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Risk Alerts</h1>
        <p className="mt-1 text-sm text-muted-foreground">Broken obligation chains detected across your workforce.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {(["High", "Medium", "Low"] as const).map((sev) => (
          <Card key={sev} className="p-5">
            <div className="flex items-center justify-between">
              <span className={`rounded-md border px-2 py-0.5 text-xs font-medium ${severityStyles[sev]}`}>{sev}</span>
              <ShieldAlert className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-3 text-3xl font-semibold">{counts[sev]}</div>
            <div className="text-xs text-muted-foreground">{sev} priority alerts</div>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">All alerts</h2>
        <Button variant="outline" size="sm"><Filter className="mr-2 h-4 w-4" />Filter</Button>
      </div>

      <div className="space-y-3">
        {riskAlerts.map((r) => (
          <Card key={r.id} className="p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-md border px-2 py-0.5 text-xs font-medium ${severityStyles[r.severity]}`}>{r.severity}</span>
                  <span className="text-xs text-muted-foreground">· {r.employee}</span>
                  <Badge variant="outline" className="ml-auto sm:ml-0">{r.status}</Badge>
                </div>
                <h3 className="mt-2 text-base font-semibold">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.description}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Dismiss</Button>
                <Button size="sm">Resolve</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
