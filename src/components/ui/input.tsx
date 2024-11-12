import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode; // Accept children as prop
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {leftIcon && (
          <span className="absolute left-5 text-muted-foreground">
            {leftIcon}
          </span>
        )}
        <input
          type={type}
          className={cn(
            "flex w-full rounded-md border border-input bg-transparent py-4 pl-14 pr-14 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            leftIcon ? "" : "pl-3", // Add padding-left if leftIcon exists
            rightIcon ? "" : "pr-3", // Add padding-right if rightIcon exists
            className
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <span className="absolute right-5 text-muted-foreground">
            {rightIcon}
          </span>
        )}
        {children && (
          <div className="absolute inset-y-0 right-10 flex items-center">
            {children}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
