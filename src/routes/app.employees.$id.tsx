import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { employees, employeeTimeline } from "@/lib/mock-data";
import { ArrowLeft, FileText, Calendar, Briefcase, Building2, PoundSterling } from "lucide-react";

export const Route = createFileRoute("/app/employees/$id")({
  component: EmployeeProfile,
});

function EmployeeProfile() {
  const { id } = Route.useParams();
  const employee = employees.find(e => e.id === id);
  if (!employee) throw notFound();
  const timeline = employeeTimeline[id] ?? [
    { date: "Jan 2024", title: "Joined Company", description: `Started as ${employee.role}.` },
    { date: "Mar 2024", title: "Contract Uploaded", description: "Employment contract filed." },
  ];

  const docs = [
    { name: "Employment Contract", status: "On file" },
    { name: "DBS Certificate", status: "Valid" },
    { name: "Right To Work", status: "Verified" },
  ];

  return (
    <div className="space-y-6">
      <Button asChild variant="ghost" size="sm" className="-ml-2"><Link to="/app/employees"><ArrowLeft className="mr-1 h-4 w-4" />Back to employees</Link></Button>

      <div className="flex flex-wrap items-center gap-4">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand/15 text-xl font-semibold text-brand">
          {employee.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{employee.name}</h1>
          <div className="mt-1 text-sm text-muted-foreground">{employee.role} · {employee.department}</div>
        </div>
        <Badge className="ml-auto" variant={employee.status === "Active" ? "default" : "secondary"}>{employee.status}</Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-6">
          <h2 className="font-semibold">Employee Details</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <Detail icon={Briefcase} label="Position" value={employee.role} />
            <Detail icon={Building2} label="Department" value={employee.department} />
            <Detail icon={PoundSterling} label="Salary" value={employee.salary} />
            <Detail icon={Calendar} label="Join Date" value={employee.joinDate} />
          </dl>
        </Card>

        <Card className="p-6">
          <h2 className="font-semibold">Documents</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {docs.map((d) => (
              <li key={d.name} className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  {d.name}
                </div>
                <Badge variant="secondary">{d.status}</Badge>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 lg:col-span-1">
          <h2 className="font-semibold">Memory Stats</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 text-center">
            <Stat n={timeline.length} l="Memory Events" />
            <Stat n={docs.length} l="Documents" />
            <Stat n={1} l="Open Risks" />
            <Stat n={0} l="Payroll Issues" />
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="font-semibold">Workforce Timeline</h2>
        <p className="text-xs text-muted-foreground">A traceable record of every decision in {employee.name.split(" ")[0]}'s journey.</p>
        <ol className="relative mt-6 space-y-6 border-l border-border pl-6">
          {timeline.map((t, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[31px] grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground ring-4 ring-background">
                {i + 1}
              </span>
              <div className="text-xs font-medium uppercase tracking-wide text-brand">{t.date}</div>
              <div className="mt-1 text-base font-semibold">{t.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{t.description}</div>
            </li>
          ))}
        </ol>
      </Card>
    </div>
  );
}

function Detail({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="flex items-center gap-2 text-muted-foreground"><Icon className="h-4 w-4" />{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}

function Stat({ n, l }: { n: number; l: string }) {
  return (
    <div className="rounded-lg border border-border p-3">
      <div className="text-2xl font-semibold">{n}</div>
      <div className="text-xs text-muted-foreground">{l}</div>
    </div>
  );
}
