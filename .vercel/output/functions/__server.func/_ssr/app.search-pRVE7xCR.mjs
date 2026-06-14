import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { b as aiResponses, c as aiSuggestedQuestions } from "./mock-data-DZqg2j7u.mjs";
import { g as Sparkles, S as Search, b as FileText, k as Clock } from "../_libs/lucide-react.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
function SearchPage() {
  const [q, setQ] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(null);
  const ask = (question) => {
    setQ(question);
    setSubmitted(question);
  };
  const response = submitted ? aiResponses[submitted] ?? {
    answer: `AdminTwin reviewed the workforce memory for "${submitted}". No direct match — try rephrasing, or pick one of the suggested questions.`,
    evidence: []
  } : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight md:text-3xl", children: "HR Memory Search" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Ask anything about your workforce. Every answer is grounded in evidence." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        if (q.trim()) setSubmitted(q.trim());
      }, className: "flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-ring", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-brand" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Ask AdminTwin…", className: "border-0 bg-transparent text-base shadow-none focus-visible:ring-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "mr-1.5 h-4 w-4" }),
          "Search"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-muted-foreground", children: "Suggested questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: aiSuggestedQuestions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => ask(s), className: "rounded-full border border-border bg-background px-3 py-1.5 text-sm transition hover:border-brand hover:text-brand", children: s }, s)) })
      ] })
    ] }),
    response && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand text-brand-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-muted-foreground", children: "AdminTwin says" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-base leading-relaxed", children: response.answer })
        ] })
      ] }),
      response.evidence.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-muted-foreground", children: "Evidence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid gap-3 sm:grid-cols-2", children: response.evidence.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-brand" }),
            e.title
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
              e.date
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: e.source })
          ] })
        ] }, e.title)) })
      ] })
    ] })
  ] });
}
export {
  SearchPage as component
};
