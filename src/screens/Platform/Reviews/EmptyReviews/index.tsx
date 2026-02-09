import { Filter } from 'lucide-react'
import React from 'react'

export const EmptyReviews = (): React.ReactElement => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 text-center">

        <div className="h-12 w-12 flex items-center justify-center bg-orange-200 text-orange-600 rounded-lg shadow-glow">
          <Filter className="h-8 w-8" />
        </div>

        <div>
          <p className="font-heading font-semibold text-lg text-gray-900">
            No se encontraron reseñas
          </p>
          <p className="font-normal text-gray-400 text-md">
            Probá ajustar los filtros o la búsqueda
          </p>
        </div>

      </div>
    </div>
  );
};
