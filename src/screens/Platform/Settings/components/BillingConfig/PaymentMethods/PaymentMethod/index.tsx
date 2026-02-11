import { Badge } from '@/components/ui/badge'
import React from 'react'

export const PaymentMethod = (): React.ReactElement => {

  const card = {
    brand: "VISA",
    last4: "4821",
    expMonth: "08",
    expYear: "28",
    holder: "Ian Bleake",
  };

  return (
    <div className='w-full flex flex-row items-center justify-between bg-gray-100/30 border border-gray-200 px-4 py-4 rounded-lg'>

      <div className='flex flex-row items-center gap-4'>
        
        <div className='font-heading italic text-white font-semibold flex items-center justify-center h-10 w-14 rounded-lg bg-linear-to-r from-blue-800 to-indigo-900'>
          {card.brand}
        </div>

        <div className='flex flex-col'>
          <p className='font-medium text-sm'>
            •••• •••• •••• {card.last4}
          </p>
          <p className='text-xs text-muted-foreground'>
            Expira {card.expMonth}/{card.expYear} · {card.holder}
          </p>
        </div>

      </div>

      <Badge variant="secondary">
        Predeterminado
      </Badge>
    </div>
  )
}
