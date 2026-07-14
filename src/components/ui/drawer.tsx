import * as React from "react"
import { cn } from "@/lib/utils"

export const Drawer = ({ children, open, onOpenChange }: any) => {
  const childArray = React.Children.toArray(children)
  return (
    <div>
      {childArray.map((child: any) => {
        if (child.type === DrawerTrigger) {
          return React.cloneElement(child, { onClick: () => onOpenChange(!open) } as any)
        }
        if (child.type === DrawerContent) {
          return open ? child : null
        }
        return child
      })}
    </div>
  )
}

export const DrawerTrigger = ({ children, asChild, ...props }: any) => {
  const Comp = asChild ? React.Fragment : 'button'
  return <Comp {...props}>{children}</Comp>
}

export const DrawerContent = ({ children, className }: any) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center">
      <div className={cn("bg-white w-full max-w-md rounded-t-2xl p-6", className)}>
        {children}
      </div>
    </div>
  )
}
