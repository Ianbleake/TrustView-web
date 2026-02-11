import React from 'react'
import { Lock, Unlock } from 'lucide-react'

type BillFeatureProps = {
  isLocked?: boolean;
  name: string;
}

export const BillFeature = ({
  isLocked = false,
  name,
}:BillFeatureProps ):React.ReactElement => {
  return (
    <div className="w-full h-fit flex flex-row items-center justify-start gap-2">
      <div className="flex items-center justify-center">
        { isLocked ? (
          <Lock className="h-5 w-5 text-orange-600"/>
        ) : (
          <Unlock className="h-5 w-5 text-orange-600"/>
        )}
      </div>

      <div className="flex flex-row items-center gap-2">
        <p className="font-heading font-medium text-lg text-gray-500">{name}</p>
      </div>
    </div>
  )
}