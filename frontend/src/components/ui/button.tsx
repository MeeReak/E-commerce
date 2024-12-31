import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default: "text-white bg-[#00B207] shadow hover:bg-[#2C742F]",
        custom:
          " text-destructive-foreground",
        outline:
          "border-2 border-input border-[#00B207] text-[#00B207] bg-background shadow-sm hover:bg-accent hover:text-[#2C742F] hover:border-[#2C742F]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost:
          "bg-[#56AC591A] hover:bg-[#2C742F33] text-[#00B207] hover:text-[#2C742F]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "py-3 px-8 rounded-md",
        small: "rounded-md px-6 text-xs py-2",
        large: "rounded-md px-10 py-4 text-base",
        icon: "p-2 rounded-full ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      leftIcon,
      rightIcon,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        onClick={onClick}
        className={cn(
          buttonVariants({ variant, size, className }),
          "flex items-center gap-4"
        )}
        ref={ref}
        {...props}
      >
        {leftIcon && <span className={children ? `mr-2` : ``}>{leftIcon}</span>}
        {children}
        {rightIcon && (
          <span className={children ? `mr-2` : ``}>{rightIcon}</span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
