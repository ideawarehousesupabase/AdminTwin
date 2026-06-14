import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { employees } from "@/lib/mock-data";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/employees/")({
  component: EmployeesPage,
});

function EmployeesPage() {
  const [q, setQ] = useState("");
  const filtered = employees.filter(e =>
    [e.name, e.role, e.department].some(v => v.toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Employees</h1>
          <p className="mt-1 text-sm text-muted-foreground">Everyone in your workforce memory.</p>
        </div>
        <Button><Plus className="mr-2 h-4 w-4" />Add Employee</Button>
      </div>

      <Card className="p-2">
        <div className="flex items-center gap-2 border-b border-border px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name, role or department…" className="border-0 shadow-none focus-visible:ring-0" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-4 py-3 font-medium">Employee</th>
                <th className="px-4 py-3 font-medium">Role</th>
                <th className="px-4 py-3 font-medium">Department</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((e) => (
                <tr key={e.id} className="hover:bg-accent/40">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-accent text-xs font-semibold">
                        {e.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <div className="font-medium">{e.name}</div>
                        <div className="text-xs text-muted-foreground">{e.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{e.role}</td>
                  <td className="px-4 py-3">{e.department}</td>
                  <td className="px-4 py-3">
                    <Badge variant={e.status === "Active" ? "default" : e.status === "On Leave" ? "secondary" : "outline"}>{e.status}</Badge>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Button asChild variant="ghost" size="sm"><Link to="/app/employees/$id" params={{ id: e.id }}>View Profile</Link></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
