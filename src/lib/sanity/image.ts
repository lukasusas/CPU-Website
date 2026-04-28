import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { sanityClient } from "./client";

const builder = sanityClient ? createImageUrlBuilder(sanityClient) : null;

export function sanityImageUrl(source?: Image, width = 1800) {
  if (!builder || !source) return undefined;
  return builder.image(source).width(width).quality(82).auto("format").url();
}
