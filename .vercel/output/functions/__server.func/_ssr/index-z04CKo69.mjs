import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { u as useTheme } from "./use-theme-BEfFIwZv.mjs";
import { g as Sparkles, A as ArrowRight, S as Search, N as Network, a as ShieldAlert, C as Calculator, F as FileCheck, h as Check, B as Brain, e as Sun, f as Moon } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/tailwind-merge.mjs";
function PublicNav() {
  const { theme, toggle } = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-lg bg-brand text-brand-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tracking-tight", children: [
        "AdminTwin ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "AI" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-7 text-sm text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-foreground", children: "Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#how", className: "hover:text-foreground", children: "How it works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#pricing", className: "hover:text-foreground", children: "Pricing" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: toggle, "aria-label": "Toggle theme", children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Sign in" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", children: "Get started" }) })
    ] })
  ] }) });
}
function PublicFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/60 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-7 w-7 place-items-center rounded-md bg-brand text-brand-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-3.5 w-3.5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "AdminTwin AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear()
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Privacy Policy" })
    ] })
  ] }) });
}
const features = [{
  icon: Network,
  title: "Workforce Memory",
  desc: "Every decision, change and approval captured in a structured employee timeline."
}, {
  icon: ShieldAlert,
  title: "Risk Detection",
  desc: "Spot broken obligation chains before they become compliance issues."
}, {
  icon: Calculator,
  title: "Payroll Verification",
  desc: "Pre-payroll consistency checks against approved workforce decisions."
}, {
  icon: FileCheck,
  title: "Compliance Tracking",
  desc: "Right To Work, DBS and training certificates — always up to date."
}, {
  icon: Search,
  title: "AI HR Search",
  desc: "Ask anything about your workforce and get sourced, evidence-backed answers."
}, {
  icon: Sparkles,
  title: "Built for SMEs",
  desc: "Lightweight, fast and designed for teams without a full HR department."
}];
const plans = [{
  name: "Starter",
  price: "£49",
  desc: "Up to 15 employees",
  features: ["Workforce memory timeline", "Risk alerts", "Email support"]
}, {
  name: "Growth",
  price: "£149",
  desc: "Up to 50 employees",
  featured: true,
  features: ["Everything in Starter", "AI HR search", "Payroll verification"]
}, {
  name: "Pro",
  price: "£299",
  desc: "Up to 150 employees",
  features: ["Everything in Growth", "Compliance tracking", "Priority support"]
}, {
  name: "Trust / Group",
  price: "£499",
  desc: "Multi-entity orgs",
  features: ["Everything in Pro", "Group reporting", "Dedicated success manager"]
}];
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PublicNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-24 md:py-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-brand" }),
            " AI Workforce Memory for SMEs"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-balance text-5xl font-bold tracking-tight md:text-6xl", children: [
            "Eliminate HR ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "Memory Gaps" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-balance text-lg text-muted-foreground md:text-xl", children: "Structured, Traceable and Reliable Workforce Intelligence — so nothing important about your people ever slips through the cracks." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/register", children: [
              "Get Started ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Sign In" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-16 max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-brand/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gradient-to-br from-accent/60 to-background p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-3", children: ["Total Employees", "Active Alerts", "Payroll Ready"].map((k, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-semibold", children: [68, 4, 62][i] })
          ] }, k)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-lg border border-border bg-card p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-brand" }),
              " Ask AdminTwin"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-muted/60 px-3 py-2 text-sm text-muted-foreground", children: '"Why was Emma promoted?" → Approved by Sarah Jones, 15 March 2025.' })
          ] })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "border-t border-border/60 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight md:text-4xl", children: "Everything your workforce needs, remembered." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "A single source of truth for every decision, document and obligation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 transition hover:shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: f.desc })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "how", className: "border-t border-border/60 bg-gradient-to-b from-accent/30 to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight md:text-4xl", children: "How it works" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: [{
        n: "01",
        t: "Capture Decisions",
        d: "Promotions, salary changes, leave and contracts — all stored as structured memory."
      }, {
        n: "02",
        t: "Detect Risks",
        d: "AdminTwin flags broken obligation chains the moment they appear."
      }, {
        n: "03",
        t: "Stay Payroll Ready",
        d: "Verify every decision is reflected in payroll before the run."
      }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 text-xs font-semibold text-brand", children: [
          "STEP ",
          s.n
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.d }),
        i < 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground md:block" })
      ] }, s.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pricing", className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight md:text-4xl", children: "Simple, transparent pricing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Pick the plan that matches your team size. Cancel anytime." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: plans.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `relative flex flex-col p-6 ${p.featured ? "border-brand shadow-xl shadow-brand/15" : ""}`, children: [
        p.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-6 rounded-full bg-brand px-2.5 py-0.5 text-xs font-medium text-brand-foreground", children: "Most popular" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-baseline gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold tracking-tight", children: p.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "/month" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: p.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 flex-1 space-y-2 text-sm", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 text-brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-6", variant: p.featured ? "default" : "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/register", children: [
          "Start with ",
          p.name
        ] }) })
      ] }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PublicFooter, {})
  ] });
}
export {
  Landing as component
};
