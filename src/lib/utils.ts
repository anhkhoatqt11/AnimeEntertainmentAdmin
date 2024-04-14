import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumberWithDots(numStr) {
  // Remove all non-numeric characters (except for decimal point)
  const sanitizedStr = numStr.replace(/[^0-9.]/g, "");

  // Convert sanitized string to an array of characters
  // eslint-disable-next-line prefer-const
  let parts = sanitizedStr.split(".");

  // Add commas for thousands, millions, etc.
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Join the array back into a string
  return parts.join(".");
}
