import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import { Info } from 'lucide-react';
import { merge } from '@/utils/mergeStyles';

type InfoCardProps = {
  children: React.ReactElement;
  size?: "xs" | "sm" | "md" | "lg";
}

export const InfoCard = ({
  children,
  size = "md",
}:InfoCardProps ):React.ReactElement => {

  const sizeStyles = {
    xs: "h-4 w-4",
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  }
  return (
    <HoverCard openDelay={100} closeDelay={100}>

      <HoverCardTrigger  className='cursor-pointer'>
        <Info className={merge("text-orange-600",sizeStyles[size])}/>
      </HoverCardTrigger>

      <HoverCardContent side="top" className='w-fit'>
        {children}
      </HoverCardContent>
    </HoverCard>
  )
}