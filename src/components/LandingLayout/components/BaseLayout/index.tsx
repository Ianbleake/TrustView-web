import { merge } from "@/utils/mergeStyles";
import type React from "react";

type BaseLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const BaseLayout = ({ children, className = "" }: BaseLayoutProps): React.ReactElement => {
  return <div className={merge("min-h-screen maw-w-screen pt-16", className)}>{children}</div>;
};

// TODO: algo aqui hace un scroll horizontal sin necesitdad
