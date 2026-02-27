import { merge } from "@/utils/mergeStyles";
import type React from "react";

type BaseLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const BaseLayout = ({ children, className = "" }: BaseLayoutProps): React.ReactElement => {
  return <div className={merge("min-h-screen bg-gray-50/80 maw-w-screen pt-16", className)}>{children}</div>;
};
