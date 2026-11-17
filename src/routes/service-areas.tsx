import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for /service-areas and its nested children (/service-areas/$slug).
// The overview body lives in service-areas.index.tsx so child routes can mount.
export const Route = createFileRoute("/service-areas")({
  component: ServiceAreasLayout,
});

function ServiceAreasLayout() {
  return <Outlet />;
}
