import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary cyan pill - gradient style
        default:
          "rounded-full bg-gradient-to-r from-brand-600 to-brand-500 text-ink-900 font-semibold hover:from-brand-500 hover:to-brand-400 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5",
        // Secondary dark pill
        secondary:
          "rounded-full bg-ink-700/90 text-slateCool-200 border border-white/10 hover:bg-ink-600 hover:border-white/20",
        destructive:
          "rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "rounded-full border border-white/10 bg-transparent text-slateCool-200 hover:bg-white/5 hover:border-white/20",
        ghost: 
          "rounded-lg hover:bg-white/5 text-slateCool-200 hover:text-slateCool-100",
        link: 
          "text-brand-500 underline-offset-4 hover:underline hover:text-brand-400",
        gold: 
          "rounded-full bg-gold-500 text-ink-900 font-semibold hover:bg-gold-400 shadow-lg shadow-gold-500/25",
        whatsapp: 
          "rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/25",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10 rounded-lg",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
