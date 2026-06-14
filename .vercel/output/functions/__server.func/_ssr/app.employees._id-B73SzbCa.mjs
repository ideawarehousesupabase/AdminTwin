import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { e as employees, h as employeeTimeline } from "./mock-data-DZqg2j7u.mjs";
import { R as Route } from "./router-R_2CSBWZ.mjs";
import { o as ArrowLeft, p as Briefcase, q as Building2, r as PoundSterling, s as Calendar, b as FileText } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function EmployeeProfile() {
  const {
    id
  } = Route.useParams();
  const employee = employees.find((e) => e.id === id);
  if (!employee) throw notFound();
  const timeline = employeeTimeline[id] ?? [{
    date: "Jan 2024",
    title: "Joined Company",
    description: `Started as ${employee.role}.`
  }, {
    date: "Mar 2024",
    title: "Contract Uploaded",
    description: "Employment contract filed."
  }];
  const docs = [{
    name: "Employment Contract",
    status: "On file"
  }, {
    name: "DBS Certificate",
    status: "Valid"
  }, {
    name: "Right To Work",
    status: "Verified"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", className: "-ml-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/app/employees", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-1 h-4 w-4" }),
      "Back to employees"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-16 w-16 place-items-center rounded-2xl bg-brand/15 text-xl font-semibold text-brand", children: employee.name.split(" ").map((n) => n[0]).join("") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight md:text-3xl", children: employee.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-sm text-muted-foreground", children: [
          employee.role,
          " · ",
          employee.department
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto", variant: employee.status === "Active" ? "default" : "secondary", children: employee.status })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Employee Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-4 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: Briefcase, label: "Position", value: employee.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: Building2, label: "Department", value: employee.department }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: PoundSterling, label: "Salary", value: employee.salary }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: Calendar, label: "Join Date", value: employee.joinDate })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Documents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm", children: docs.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-lg border border-border px-3 py-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-muted-foreground" }),
            d.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: d.status })
        ] }, d.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Memory Stats" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: timeline.length, l: "Memory Events" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: docs.length, l: "Documents" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: 1, l: "Open Risks" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: 0, l: "Payroll Issues" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Workforce Timeline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "A traceable record of every decision in ",
        employee.name.split(" ")[0],
        "'s journey."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative mt-6 space-y-6 border-l border-border pl-6", children: timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[31px] grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground ring-4 ring-background", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-brand", children: t.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-base font-semibold", children: t.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: t.description })
      ] }, i)) })
    ] })
  ] });
}
function Detail({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("dt", { className: "flex items-center gap-2 text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-medium", children: value })
  ] });
}
function Stat({
  n,
  l
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold", children: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: l })
  ] });
}
export {
  EmployeeProfile as component
};
