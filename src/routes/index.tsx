import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PublicNav, PublicFooter } from "@/components/public-shell";
import {
  Brain, ShieldAlert, Calculator, FileCheck, Search, Network,
  ArrowRight, Check, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AdminTwin AI — Eliminate HR Memory Gaps" },
      { name: "description", content: "Structured, Traceable and Reliable Workforce Intelligence for SMEs." },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: Network, title: "Workforce Memory", desc: "Every decision, change and approval captured in a structured employee timeline." },
  { icon: ShieldAlert, title: "Risk Detection", desc: "Spot broken obligation chains before they become compliance issues." },
  { icon: Calculator, title: "Payroll Verification", desc: "Pre-payroll consistency checks against approved workforce decisions." },
  { icon: FileCheck, title: "Compliance Tracking", desc: "Right To Work, DBS and training certificates — always up to date." },
  { icon: Search, title: "AI HR Search", desc: "Ask anything about your workforce and get sourced, evidence-backed answers." },
  { icon: Sparkles, title: "Built for SMEs", desc: "Lightweight, fast and designed for teams without a full HR department." },
];

const plans = [
  { name: "Starter", price: "£49", desc: "Up to 15 employees", features: ["Workforce memory timeline", "Risk alerts", "Email support"] },
  { name: "Professional", price: "£149", desc: "Up to 50 employees", featured: true, features: ["Everything in Starter", "AI HR search", "Payroll verification", "Compliance tracking"] },
  { name: "Enterprise", price: "£499", desc: "Multi-entity orgs", features: ["Everything in Professional", "Group reporting", "Priority support", "Dedicated success manager"] },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-brand" /> AI Workforce Memory for SMEs
            </div>
            <h1 className="text-balance text-5xl font-bold tracking-tight md:text-6xl">
              Eliminate HR <span className="text-brand">Memory Gaps</span>
            </h1>
            <p className="mt-6 text-balance text-lg text-muted-foreground md:text-xl">
              Structured, Traceable and Reliable Workforce Intelligence — so nothing important about your people ever slips through the cracks.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/register">Get Started <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-brand/10">
              <div className="rounded-xl bg-gradient-to-br from-accent/60 to-background p-8">
                <div className="grid gap-4 md:grid-cols-3">
                  {["Total Employees", "Active Alerts", "Payroll Ready"].map((k, i) => (
                    <div key={k} className="rounded-lg border border-border bg-card p-4">
                      <div className="text-xs text-muted-foreground">{k}</div>
                      <div className="mt-2 text-3xl font-semibold">{[68, 4, 62][i]}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-border bg-card p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                    <Search className="h-4 w-4 text-brand" /> Ask AdminTwin
                  </div>
                  <div className="rounded-md bg-muted/60 px-3 py-2 text-sm text-muted-foreground">
                    "Why was Emma promoted?" → Approved by Sarah Jones, 15 March 2025.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything your workforce needs, remembered.</h2>
            <p className="mt-4 text-muted-foreground">A single source of truth for every decision, document and obligation.</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title} className="p-6 transition hover:shadow-lg">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-border/60 bg-gradient-to-b from-accent/30 to-background">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">How it works</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Capture Decisions", d: "Promotions, salary changes, leave and contracts — all stored as structured memory." },
              { n: "02", t: "Detect Risks", d: "AdminTwin flags broken obligation chains the moment they appear." },
              { n: "03", t: "Stay Payroll Ready", d: "Verify every decision is reflected in payroll before the run." },
            ].map((s, i) => (
              <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6">
                <div className="mb-3 text-xs font-semibold text-brand">STEP {s.n}</div>
                <h3 className="text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                {i < 2 && <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Simple, transparent pricing</h2>
            <p className="mt-4 text-muted-foreground">Pick the plan that matches your team size. Cancel anytime.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {plans.map((p) => (
              <Card key={p.name} className={`relative flex flex-col p-6 ${p.featured ? "border-brand shadow-xl shadow-brand/15" : ""}`}>
                {p.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-brand px-2.5 py-0.5 text-xs font-medium text-brand-foreground">Most popular</span>
                )}
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{p.price}</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{p.desc}</div>
                <ul className="mt-5 flex-1 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-brand" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6" variant={p.featured ? "default" : "outline"}>
                  <Link to="/register">Start with {p.name}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
