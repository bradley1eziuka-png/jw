import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for /services and its nested children (/services/$slug).
// The page body lives in services.index.tsx so child routes can mount.
export const Route = createFileRoute("/services")({
  component: ServicesLayout,
});

function ServicesLayout() {
  return <Outlet />;
}
