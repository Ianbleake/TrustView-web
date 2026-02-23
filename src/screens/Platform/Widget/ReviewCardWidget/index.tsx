import formatDate from "@/utils/formatDate";
import React from "react";
import { merge } from "@/utils/mergeStyles";
import { StarsRating } from "../StarsRating";
import { getTextStyleClasses } from "@/utils/getTextStyleClasses";

type ReviewCardWidgetProps = {
  review: Review;
  config: WidgetStyles;
  showProduct?: boolean;
};

export const ReviewCardWidget = ({
  review,
  config,
  showProduct = true,
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
        borderRadius[config.border]
      )}
      style={{ backgroundColor: config.background }}
    >
      
      <div className="flex items-center gap-4">
        <div
          className="flex items-center justify-center h-12 w-12 rounded-full text-white font-semibold"
          style={{
            background: config.avatarGradient
              ? `linear-gradient(135deg, ${config.avatarBackground}, ${config.avatarContrastColor})`
              : config.avatarBackground,
            color: config.avatarTextColor
          }}
        >
          {review.author.charAt(0).toUpperCase()}
        </div>

        <div className="flex flex-col">
        <h4
          className={merge(
            "text-lg",
            getTextStyleClasses(config.titleStyle)
          )}
          style={{ color: config.titleColor }}
        >
            {review.author}
          </h4>

          <span
            className="text-sm"
            style={{ color: config.dateColor }}
          >
            {formatDate(review.date)}
          </span>
        </div>
      </div>

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
            getTextStyleClasses(config.contentStyle)
          )}
          style={{ color: config.contentColor }}
        >
          {review.content}
        </p>
      </div>

      {
        showProduct && (
          <div className="border-t pt-4">
            <p className="text-sm text-gray-500">
              <span className="font-medium">Producto: </span>
              <span style={{ color: config.productColor }}>
                {review.product}
              </span>
            </p>
          </div>
        )
      }

    </div>
  );
};