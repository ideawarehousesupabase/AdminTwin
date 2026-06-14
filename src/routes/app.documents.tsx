import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { documents } from "@/lib/mock-data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/app/documents")({
  component: DocumentsPage,
});

const categories = ["All", "Employment Contract", "DBS Certificate", "Right To Work", "Training Certificate"];

function DocumentsPage() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<typeof documents[number] | null>(null);

  const filtered = cat === "All" ? documents : documents.filter(d => d.type === cat);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Documents</h1>
        <p className="mt-1 text-sm text-muted-foreground">Centralised repository for every workforce document.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-3 py-1.5 text-sm transition ${
              cat === c ? "border-brand bg-brand text-brand-foreground" : "border-border bg-background hover:border-brand/50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-4 py-3 font-medium">Document Name</th>
                <th className="px-4 py-3 font-medium">Employee</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((d) => (
                <tr key={d.name} onClick={() => setOpen(d)} className="cursor-pointer hover:bg-accent/40">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 font-medium">
                      <FileText className="h-4 w-4 text-brand" />
                      {d.name}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{d.employee}</td>
                  <td className="px-4 py-3 text-muted-foreground">{d.type}</td>
                  <td className="px-4 py-3 text-muted-foreground">{d.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-brand" /> {open?.name}
            </DialogTitle>
            <DialogDescription>
              {open?.employee} · {open?.type} · {open?.date}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 rounded-lg border border-border bg-muted/40 p-6 text-sm leading-relaxed">
            {open?.body}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
