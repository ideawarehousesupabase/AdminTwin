import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, e as useRouterState, L as Link, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { g as getSession, a as logout } from "./auth-CEUhlSTb.mjs";
import { u as useTheme } from "./use-theme-BEfFIwZv.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import { B as Brain, L as LayoutDashboard, U as Users, S as Search, a as ShieldAlert, C as Calculator, F as FileCheck, b as FileText, c as Settings, d as LogOut, X, M as Menu, e as Sun, f as Moon } from "../_libs/lucide-react.mjs";
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
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__component.mjs";
import "../_libs/firebase__util.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/idb.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/firebase__webchannel-wrapper.mjs";
import "../_libs/@grpc/grpc-js.mjs";
import "process";
import "tls";
import "fs";
import "os";
import "net";
import "events";
import "http2";
import "http";
import "url";
import "dns";
import "zlib";
import "../_libs/@grpc/proto-loader.mjs";
import "path";
import "../_libs/lodash.camelcase.mjs";
import "../_libs/protobufjs.mjs";
import "../_libs/protobufjs__aspromise.mjs";
import "../_libs/protobufjs__base64.mjs";
import "../_libs/protobufjs__eventemitter.mjs";
import "../_libs/protobufjs__float.mjs";
import "../_libs/protobufjs__utf8.mjs";
import "../_libs/protobufjs__pool.mjs";
import "../_libs/long.mjs";
import "../_libs/protobufjs__codegen.mjs";
import "../_libs/protobufjs__fetch.mjs";
import "../_libs/protobufjs__path.mjs";
const nav = [{
  to: "/app",
  label: "Dashboard",
  icon: LayoutDashboard,
  exact: true
}, {
  to: "/app/employees",
  label: "Employees",
  icon: Users
}, {
  to: "/app/search",
  label: "HR Memory Search",
  icon: Search
}, {
  to: "/app/alerts",
  label: "Risk Alerts",
  icon: ShieldAlert
}, {
  to: "/app/payroll",
  label: "Payroll Verification",
  icon: Calculator
}, {
  to: "/app/compliance",
  label: "Compliance",
  icon: FileCheck
}, {
  to: "/app/documents",
  label: "Documents",
  icon: FileText
}, {
  to: "/app/settings",
  label: "Settings",
  icon: Settings
}];
function AppLayout() {
  const navigate = useNavigate();
  const [session, setSession] = reactExports.useState(null);
  const [ready, setReady] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const {
    theme,
    toggle
  } = useTheme();
  const pathname = useRouterState({
    select: (s) => s.location.pathname
  });
  reactExports.useEffect(() => {
    const s = getSession();
    if (!s) {
      navigate({
        to: "/login"
      });
      return;
    }
    setSession(s);
    setReady(true);
  }, [navigate]);
  reactExports.useEffect(() => {
    setOpen(false);
  }, [pathname]);
  if (!ready || !session) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-screen place-items-center text-sm text-muted-foreground", children: "Loading…" });
  }
  const doLogout = () => {
    logout();
    navigate({
      to: "/"
    });
  };
  const isActive = (to, exact) => exact ? pathname === to : pathname === to || pathname.startsWith(to + "/");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: `fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border bg-sidebar transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-16 items-center gap-2 border-b border-border px-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-lg bg-brand text-brand-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold tracking-tight", children: [
          "AdminTwin ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "AI" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 space-y-1 overflow-y-auto px-3 py-4", children: nav.map((item) => {
        const active = isActive(item.to, item.exact);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: item.to, className: `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-4 w-4" }),
          item.label
        ] }, item.to);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: doLogout, className: "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-sidebar-accent/50 hover:text-sidebar-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
        " Logout"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:pl-64", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "lg:hidden", onClick: () => setOpen(!open), children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium leading-tight", children: session.companyName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: session.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: toggle, "aria-label": "Toggle theme", children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-full bg-brand/15 text-sm font-semibold text-brand", children: session.companyName.charAt(0).toUpperCase() })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "px-4 py-6 md:px-8 md:py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-30 bg-black/40 lg:hidden", onClick: () => setOpen(false) })
  ] });
}
export {
  AppLayout as component
};
