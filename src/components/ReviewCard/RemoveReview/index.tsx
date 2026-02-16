import { ContextMenu, ContextMenuContent, ContextMenuGroup, ContextMenuTrigger } from '@/components/ui/context-menu';
import React from 'react'
import { RemoveReviewAlert } from './RemoveReviewAlert';

type RemoveReviewProps = {
    reviewId: string;
    children: React.ReactElement;
}

export const RemoveReview = ({
  reviewId,
  children,
}:RemoveReviewProps ):React.ReactElement => {

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {children}
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuGroup>
          <RemoveReviewAlert reviewId={reviewId} />
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}