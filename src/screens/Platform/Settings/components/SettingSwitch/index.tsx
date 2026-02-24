import { Switch } from '@/components/ui/switch';
import React from 'react'

type SettingsSwitchProps = {
  title: string;
  subtitle: string;
  onChange: (checked: boolean) => void;
  switchState: boolean;
}

export const SettingSwitch = ({
  title,
  subtitle,
  onChange,
  switchState,
}:SettingsSwitchProps ):React.ReactElement => {
  return (
    <div className='flex flex-row items-center justify-between px-4'>

      <div className='flex flex-col items-start justify-start'>
          <p className='text-lg font-heading font-semibold text-gray-900'>{title}</p>
          <p className='text-sm font-normal text-gray-500'>{subtitle}</p>
      </div>

      <Switch checked={switchState} onCheckedChange={onChange} size='lg'/>

    </div>
  )
}