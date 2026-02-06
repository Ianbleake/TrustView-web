import { merge } from '@/utils/mergeStyles';
import { Star } from 'lucide-react';
import React from 'react'

type BrandProps = {
  size?: "sm" | "md" | "lg" | "xl";
  position?: "relative" | "absolute";
  icon?: boolean;
  className?: string;
}

export const Brand = ({
  size = "md",
  position = "relative",
  icon = false,
  className,
}:BrandProps ):React.ReactElement => {

  const brandStyles = {
    position: position,
    size: {
      container: size === "sm" ? "h-6 w-6" : size === "md" ? "h-8 w-8" : size === "lg" ? "h-10 w-10" : size === "xl" ? "h-20 w-20" : "",
      icon: size === "sm" ? "h-4 w-4" : size === "md" ? "h-6 w-6" : size === "lg" ? "h-8 w-8" : size === "xl" ? "h-10 w-10" : "",
      text: size === "sm" ? "text-md" : size === "md" ? "text-lg" : size === "lg" ? "text-xl" : size === "xl" ? "text-2xl" : "",
    },

  }
  return (
    <div className={merge("flex flex-row items-center justify-center gap-2",brandStyles.position,className)}>

      <div className={merge('flex items-center justify-center rounded-md gradient-bg shadow-lg shadow-amber-200',brandStyles.size.container)} style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
        <Star className={merge(' text-white fill-white ',brandStyles.size.icon)}/>
      </div>

      {
        !icon && (
          <h1 className={merge('font-bold text-gray-800',brandStyles.size.text)}>
            TrustView
          </h1>
        )
      }
    </div>
  )
}


