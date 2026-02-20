import formatDate from "@/utils/formatDate";
import React from "react";
import { merge } from "@/utils/mergeStyles";
import { StarsRating } from "../StarsRating";

type ReviewCardWidgetProps = {
  review: Review;
  config: WidgetStyles;
};

export const ReviewCardWidget = ({
  review,
  config,
}: ReviewCardWidgetProps): React.ReactElement => {
  const borderRadius = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-xl",
  };

  return (
    <div
      className={merge(
        "w-full shadow-md flex flex-col p-4 hover:shadow-lg transition-all duration-300 overflow-hidden gap-4",
        borderRadius[config.border],
        config.background
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className={merge(
            "flex items-center justify-center h-12 w-12 rounded-full text-white font-semibold",
            config.avatarBackground
          )}
        >
          {review.author.charAt(0).toUpperCase()}
        </div>

        <div className="flex flex-col">
          <h4
            className={merge(
              "text-lg font-semibold",
              config.titleColor
            )}
          >
            {review.author}
          </h4>
          <span
            className={merge(
              "text-sm",
              config.dateColor
            )}
          >
            {formatDate(review.date)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <StarsRating
          count={review.rating}
          size={config.starsSize}
          showCount={config.showCount}
          bodyColor={config.starBodyColor}
          fillColor={config.starFillColor}
          emptyColor={config.emptyStarColor}
        />

        <p
          className={merge(
            "text-md text-justify",
            config.contentColor
          )}
        >
          {review.content}
        </p>
      </div>

      {/* Footer */}
      <div className="border-t pt-4">
        <p className="text-sm font-medium text-gray-500">
          Producto:{" "}
          <span className={config.productColor}>
            {review.product}
          </span>
        </p>
      </div>
    </div>
  );
};