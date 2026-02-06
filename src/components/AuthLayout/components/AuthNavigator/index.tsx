import { merge } from '@/utils/mergeStyles';
import React from 'react'
import { Link } from 'react-router-dom';

type AuthNavigatorProps = {
  label: string;
  navLabel: string;
  to: string;
  className?: string;
  position?: "absolute" | "relative"
}

export const AuthNavigator = ({
  label,
  navLabel,
  to,
  className,
  position = "absolute",
}:AuthNavigatorProps ):React.ReactElement => {

  const positionStyles = position === "absolute" ? "absolute top-4 right-4" : "relative"

  return (
    <div className={merge('flex flex-row items-center gap-2',className, positionStyles)}>
      <span className='text-center text-sm text-muted-foreground'>{label}</span>
      <Link to={to} className='font-semibold text-sm text-amber-600 hover:underline' >
        {navLabel}
      </Link>
    </div>
  )
}