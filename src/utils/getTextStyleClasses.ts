import { merge } from "./mergeStyles";

export   const getTextStyleClasses = (style: TextStyle):string => {
  return merge(
    style.bold && "font-bold",
    style.italic && "italic",
    style.underline && "underline"
  );
};