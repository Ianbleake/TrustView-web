import { Button } from '@/components/ui/button'
import { useSkeleton } from '@/storage/skeletonTest'
import { FlaskConical } from 'lucide-react'
import React from 'react'

export const SkeletonTest = ():React.ReactElement => {

  const { isTesting, setTesting} = useSkeleton();
  return (
    <Button
      className='fixed right-5 bottom-5 rounded-full'
      size={"icon-lg"}
      variant={"gradient"}
      onClick={() => setTesting(!isTesting)}
    >
      <FlaskConical/>
    </Button>
  )
}