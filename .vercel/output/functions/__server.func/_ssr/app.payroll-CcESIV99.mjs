import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { p as payrollReady, d as payrollNeedsReview } from "./mock-data-DZqg2j7u.mjs";
import { l as CircleCheck, m as CircleAlert, k as Clock } from "../_libs/lucide-react.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
function PayrollPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight md:text-3xl", children: "Payroll Verification" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Pre-payroll consistency check between approved decisions and pending payroll." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { icon: CircleCheck, tone: "bg-success/15 text-success", label: "Payroll Ready", value: payrollReady.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { icon: CircleAlert, tone: "bg-destructive/10 text-destructive", label: "Needs Review", value: payrollNeedsReview.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { icon: Clock, tone: "bg-warning/15 text-warning-foreground", label: "Pending Validation", value: 3 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Payroll Ready" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: payrollReady.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-lg border border-border p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: p.employee }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              p.change,
              " — ",
              p.note
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-success text-success-foreground hover:bg-success", children: "✓" })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-5 w-5 text-destructive" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Needs Review" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: payrollNeedsReview.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-lg border border-destructive/30 bg-destructive/5 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: p.employee }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", children: "Action needed" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
            p.change,
            " — ",
            p.note
          ] })
        ] }, i)) })
      ] })
    ] })
  ] });
}
function SummaryCard({
  icon: Icon,
  tone,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-10 w-10 place-items-center rounded-lg ${tone}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-3xl font-semibold", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label })
  ] });
}
export {
  PayrollPage as component
};
