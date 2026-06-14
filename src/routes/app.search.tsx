import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { aiSuggestedQuestions, aiResponses } from "@/lib/mock-data";
import { Search, Sparkles, FileText, Clock } from "lucide-react";

export const Route = createFileRoute("/app/search")({
  component: SearchPage,
});

function SearchPage() {
  const [q, setQ] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);

  const ask = (question: string) => {
    setQ(question);
    setSubmitted(question);
  };

  const response = submitted ? (aiResponses[submitted] ?? {
    answer: `AdminTwin reviewed the workforce memory for "${submitted}". No direct match — try rephrasing, or pick one of the suggested questions.`,
    evidence: [],
  }) : null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">HR Memory Search</h1>
        <p className="mt-1 text-sm text-muted-foreground">Ask anything about your workforce. Every answer is grounded in evidence.</p>
      </div>

      <Card className="p-6">
        <form
          onSubmit={(e) => { e.preventDefault(); if (q.trim()) setSubmitted(q.trim()); }}
          className="flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-ring"
        >
          <Sparkles className="h-5 w-5 text-brand" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ask AdminTwin…"
            className="border-0 bg-transparent text-base shadow-none focus-visible:ring-0"
          />
          <Button type="submit"><Search className="mr-1.5 h-4 w-4" />Search</Button>
        </form>

        <div className="mt-4">
          <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Suggested questions</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {aiSuggestedQuestions.map((s) => (
              <button
                key={s}
                onClick={() => ask(s)}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-sm transition hover:border-brand hover:text-brand"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {response && (
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand text-brand-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">AdminTwin says</div>
              <p className="mt-1 text-base leading-relaxed">{response.answer}</p>
            </div>
          </div>

          {response.evidence.length > 0 && (
            <div className="mt-6">
              <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Evidence</div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {response.evidence.map((e) => (
                  <div key={e.title} className="rounded-lg border border-border p-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <FileText className="h-4 w-4 text-brand" />
                      {e.title}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{e.date}</span>
                      <Badge variant="secondary">{e.source}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
