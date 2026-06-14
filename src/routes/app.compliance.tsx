import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { compliance } from "@/lib/mock-data";

export const Route = createFileRoute("/app/compliance")({
  component: CompliancePage,
});

const styles: Record<string, string> = {
  Valid: "bg-success/10 text-success border-success/30",
  "Expiring Soon": "bg-warning/15 text-warning-foreground border-warning/40",
  Expired: "bg-destructive/10 text-destructive border-destructive/30",
};

function CompliancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Compliance</h1>
        <p className="mt-1 text-sm text-muted-foreground">Right To Work, DBS checks and training certificates across your workforce.</p>
      </div>

      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-4 py-3 font-medium">Employee</th>
                <th className="px-4 py-3 font-medium">Document Type</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Expiry Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {compliance.map((c, i) => (
                <tr key={i} className="hover:bg-accent/40">
                  <td className="px-4 py-3 font-medium">{c.employee}</td>
                  <td className="px-4 py-3 text-muted-foreground">{c.document}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-md border px-2 py-0.5 text-xs font-medium ${styles[c.status]}`}>{c.status}</span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{c.expiry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
