import { merge } from "@/utils/mergeStyles";
import { Star } from "lucide-react";
import React from "react";

type StarsCountProps = {
  count: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
  bodyColor: string;
  fillColor: string;
  emptyColor: string;
};

export const StarsRating = ({
  count,
  maxStars = 5,
  size = "md",
  showCount = false,
  bodyColor,
  fillColor,
  emptyColor,
}: StarsCountProps): React.ReactElement => {
  const sizes = {
    sm: "h-3.5 w-3.5",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxStars }, (_, i) => {
        const isFull = i < Math.floor(count);
        const isHalf = i < count && !isFull;

        return (
          <Star
            key={i}
            className={merge(
              sizes[size],
              bodyColor,
              isFull
                ? merge("fill-current", fillColor || "text-yellow-500")
                : isHalf
                ? merge(
                    "fill-current opacity-50",
                    fillColor || "text-yellow-500"
                  )
                : merge(
                    "fill-transparent",
                    emptyColor || "text-gray-300"
                  )
            )}
          />
        );
      })}

      {showCount && (
        <span
          className={merge(
            "ml-1 font-medium text-muted-foreground",
            textSizes[size]
          )}
        >
          {count.toFixed(1)}
        </span>
      )}
    </div>
  );
};