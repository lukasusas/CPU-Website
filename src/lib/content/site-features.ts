import type { RouteKey } from "./types";

export const siteFeatures = {
  team: false
} as const;

export function isRouteEnabled(routeKey: RouteKey) {
  if (routeKey === "team") {
    return siteFeatures.team;
  }

  return true;
}
