const PRODUCTION_ORIGIN = "https://construtorapu.com.br";

function resolveSiteUrl() {
  const configuredUrl = process.env.SITE_URL ?? PRODUCTION_ORIGIN;
  const parsed = new URL(configuredUrl);

  if (parsed.origin !== PRODUCTION_ORIGIN) {
    throw new Error(`SITE_URL must be ${PRODUCTION_ORIGIN}. Received ${parsed.origin}.`);
  }

  return PRODUCTION_ORIGIN;
}

export const SITE_URL = resolveSiteUrl();

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, SITE_URL).toString();
}
