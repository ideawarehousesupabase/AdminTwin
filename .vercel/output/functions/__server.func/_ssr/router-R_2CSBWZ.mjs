import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-CBuMXbgc.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$d = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AdminTwin AI — Workforce Memory & Risk Intelligence" },
      { name: "description", content: "AI-powered HR Memory and Workforce Risk Intelligence for SMEs. Eliminate HR memory gaps with structured, traceable workforce intelligence." },
      { property: "og:title", content: "AdminTwin AI" },
      { property: "og:description", content: "Structured, Traceable and Reliable Workforce Intelligence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
      { rel: "stylesheet", href: appCss }
    ],
    scripts: [
      {
        children: `(function(){try{var t=localStorage.getItem('admintwin_theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$d.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$c = () => import("./register-nSn3m07u.mjs");
const Route$c = createFileRoute("/register")({
  head: () => ({
    meta: [{
      title: "Create your account — AdminTwin AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./login-D6RhlBeI.mjs");
const Route$b = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Sign In — AdminTwin AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./app-WE6wpPQl.mjs");
const Route$a = createFileRoute("/app")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./index-z04CKo69.mjs");
const Route$9 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "AdminTwin AI — Eliminate HR Memory Gaps"
    }, {
      name: "description",
      content: "Structured, Traceable and Reliable Workforce Intelligence for SMEs."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./app.index-tLqp9dAj.mjs");
const Route$8 = createFileRoute("/app/")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./app.settings-3GWkSg4g.mjs");
const Route$7 = createFileRoute("/app/settings")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./app.search-pRVE7xCR.mjs");
const Route$6 = createFileRoute("/app/search")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./app.payroll-CcESIV99.mjs");
const Route$5 = createFileRoute("/app/payroll")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./app.documents-DII22AD8.mjs");
const Route$4 = createFileRoute("/app/documents")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./app.compliance-ahMv251E.mjs");
const Route$3 = createFileRoute("/app/compliance")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./app.alerts-DLHRqbXv.mjs");
const Route$2 = createFileRoute("/app/alerts")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./app.employees.index-DtSeHK65.mjs");
const Route$1 = createFileRoute("/app/employees/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./app.employees._id-B73SzbCa.mjs");
const Route = createFileRoute("/app/employees/$id")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const RegisterRoute = Route$c.update({
  id: "/register",
  path: "/register",
  getParentRoute: () => Route$d
});
const LoginRoute = Route$b.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$d
});
const AppRoute = Route$a.update({
  id: "/app",
  path: "/app",
  getParentRoute: () => Route$d
});
const IndexRoute = Route$9.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$d
});
const AppIndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppRoute
});
const AppSettingsRoute = Route$7.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => AppRoute
});
const AppSearchRoute = Route$6.update({
  id: "/search",
  path: "/search",
  getParentRoute: () => AppRoute
});
const AppPayrollRoute = Route$5.update({
  id: "/payroll",
  path: "/payroll",
  getParentRoute: () => AppRoute
});
const AppDocumentsRoute = Route$4.update({
  id: "/documents",
  path: "/documents",
  getParentRoute: () => AppRoute
});
const AppComplianceRoute = Route$3.update({
  id: "/compliance",
  path: "/compliance",
  getParentRoute: () => AppRoute
});
const AppAlertsRoute = Route$2.update({
  id: "/alerts",
  path: "/alerts",
  getParentRoute: () => AppRoute
});
const AppEmployeesIndexRoute = Route$1.update({
  id: "/employees/",
  path: "/employees/",
  getParentRoute: () => AppRoute
});
const AppEmployeesIdRoute = Route.update({
  id: "/employees/$id",
  path: "/employees/$id",
  getParentRoute: () => AppRoute
});
const AppRouteChildren = {
  AppAlertsRoute,
  AppComplianceRoute,
  AppDocumentsRoute,
  AppPayrollRoute,
  AppSearchRoute,
  AppSettingsRoute,
  AppIndexRoute,
  AppEmployeesIdRoute,
  AppEmployeesIndexRoute
};
const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AppRoute: AppRouteWithChildren,
  LoginRoute,
  RegisterRoute
};
const routeTree = Route$d._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};
