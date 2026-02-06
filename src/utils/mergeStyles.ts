import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function merge(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
