import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// This is from shadcn-ui:
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
