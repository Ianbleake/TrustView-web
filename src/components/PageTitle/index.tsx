import React from 'react'
import { InfoCard } from '../InfoCard';

type PageTitleProps = {
  title: string;
  subtitle?: string;
  info?: string; 
}

export const PageTitle = ({
  title,
  subtitle,
  info,
}:PageTitleProps ):React.ReactElement => {
  return (
    <div className='flex flex-col items-start justify-start gap-1'>

      <div className='flex flex-row items-center gap-2'> 
        <h1 className="text-2xl font-bold font-heading text-gray-900">
          {title}
        </h1>
        {
          info && (
            <InfoCard size='sm' position='bottom'>
              <p className='w-35 text-sm text-gray-500'>{info}</p>
            </InfoCard>
          )
        }
      </div>
      
      <p className="font-normal text-sm text-gray-400">
        {subtitle}
      </p>
    </div>
  )
}