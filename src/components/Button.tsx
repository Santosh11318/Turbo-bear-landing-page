import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/src/lib/utils"
import { motion } from "motion/react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "primary" | "secondary" | "outline" | "gold"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const variants = {
      primary: "bg-brand-lime text-brand-black hover:bg-white transition-colors duration-300 font-black tracking-widest uppercase",
      secondary: "border border-white/20 bg-white/5 hover:bg-white/10 text-white font-black tracking-widest uppercase transition-all duration-300",
      outline: "border border-white/20 hover:border-white text-white font-black tracking-widest uppercase transition-all duration-300",
      gold: "bg-brand-gold text-black hover:bg-brand-gold-light transition-all duration-300 font-bold tracking-widest uppercase"
    }

    const sizes = {
      default: "px-8 py-4 text-xs",
      sm: "px-6 py-2 text-[10px]",
      lg: "px-10 py-5 text-sm",
      icon: "h-10 w-10",
    }

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-none ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
