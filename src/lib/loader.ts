"use server";
import type { ImageLoaderProps } from "next/image";

function imageLoader({ src, width, quality }: ImageLoaderProps) {
  return `${src}`;
}

export default imageLoader;
