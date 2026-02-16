import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import React from 'react'
import useRemoveReview from '@/hooks/reviews/useRemoveReview';
import { Ban, Trash, TrashIcon } from 'lucide-react';
import { ContextMenuItem } from '@/components/ui/context-menu';


type RemoveReviewProps = {
  reviewId: string;
}
export const RemoveReviewAlert = ({
  reviewId,
}: RemoveReviewProps): React.ReactElement => {

  const { mutate: removeReview, isPending } = useRemoveReview();

  const handleRemoveReview = (): void => {
    removeReview(reviewId);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <ContextMenuItem
          disabled={isPending}
          className="cursor-pointer"
          variant="destructive"
          onSelect={(e) => e.preventDefault()}
        >
          <TrashIcon />
          Delete
        </ContextMenuItem>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. La reseña será eliminada permanentemente.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel variant={"outline"}>Cancelar <Ban/></AlertDialogCancel>

          <AlertDialogAction
            onClick={handleRemoveReview}
            disabled={isPending}
            variant={"destructive"}
          >
            {isPending ? "Eliminando..." : "Eliminar"}
            <Trash/>
          </AlertDialogAction>

        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
