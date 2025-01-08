import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'operator' | 'secondary';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "h-14 rounded-xl text-lg font-medium transition-all duration-300",
          "hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-calculator-primary focus:ring-opacity-50",
          "transform hover:scale-105 active:scale-95",
          "animate-pop-in",
          {
            "bg-calculator-primary text-white": variant === "default",
            "bg-calculator-operator text-white": variant === "operator",
            "bg-calculator-secondary text-calculator-text": variant === "secondary",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";