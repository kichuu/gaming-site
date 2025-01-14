import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string; // Optional error message prop
  success?: boolean; // Optional success state
  placeholderColor?: string; // Custom placeholder color
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, success, placeholderColor = 'text-gray-400', ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-md border-2 border-green-500 bg-background px-4 py-3 text-sm placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-all", // Green border at all times
            "peer", // Adding the peer class for label interaction
            className
          )}
          ref={ref}
          aria-invalid={!!error} // Accessibility improvement for error state
          aria-describedby={error ? "error-message" : undefined} // Link error message for screen readers
          placeholder={placeholderColor} // Apply custom placeholder color
          {...props}
        />
        {error && (
          <p
            id="error-message"
            className="mt-1 text-xs text-red-500"
            role="alert"
          >
            {error}
          </p>
        )}
        {success && (
          <p className="mt-1 text-xs text-green-500">
            Input is valid!
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
