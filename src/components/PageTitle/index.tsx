import React from 'react'

type PageTitleProps = {
  title: string;
  subtitle?: string;
}

export const PageTitle = ({
  title,
  subtitle,
}:PageTitleProps ):React.ReactElement => {
  return (
    <div className='flex flex-col items-start justify-start gap-1'>
      <h1 className="text-2xl font-bold font-heading text-gray-900">
        {title}
      </h1>
      <p className="font-normal text-sm text-gray-400">
        {subtitle}
      </p>
    </div>
  )
}