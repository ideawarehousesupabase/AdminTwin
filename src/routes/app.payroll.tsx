import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { payrollReady, payrollNeedsReview } from "@/lib/mock-data";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/app/payroll")({
  component: PayrollPage,
});

function PayrollPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Payroll Verification</h1>
        <p className="mt-1 text-sm text-muted-foreground">Pre-payroll consistency check between approved decisions and pending payroll.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <SummaryCard icon={CheckCircle2} tone="bg-success/15 text-success" label="Payroll Ready" value={payrollReady.length} />
        <SummaryCard icon={AlertCircle} tone="bg-destructive/10 text-destructive" label="Needs Review" value={payrollNeedsReview.length} />
        <SummaryCard icon={Clock} tone="bg-warning/15 text-warning-foreground" label="Pending Validation" value={3} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-success" />
            <h2 className="font-semibold">Payroll Ready</h2>
          </div>
          <ul className="space-y-3">
            {payrollReady.map((p, i) => (
              <li key={i} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <div className="font-medium text-sm">{p.employee}</div>
                  <div className="text-xs text-muted-foreground">{p.change} — {p.note}</div>
                </div>
                <Badge className="bg-success text-success-foreground hover:bg-success">✓</Badge>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <h2 className="font-semibold">Needs Review</h2>
          </div>
          <ul className="space-y-3">
            {payrollNeedsReview.map((p, i) => (
              <li key={i} className="rounded-lg border border-destructive/30 bg-destructive/5 p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-sm">{p.employee}</div>
                  <Badge variant="destructive">Action needed</Badge>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{p.change} — {p.note}</div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

function SummaryCard({ icon: Icon, tone, label, value }: { icon: React.ElementType; tone: string; label: string; value: number }) {
  return (
    <Card className="p-5">
      <div className={`grid h-10 w-10 place-items-center rounded-lg ${tone}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-4 text-3xl font-semibold">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </Card>
  );
}
