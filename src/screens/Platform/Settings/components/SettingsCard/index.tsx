import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import type React from "react";

type SettingsCardProps = {
  title: string;
  description?: string;
  icon?: LucideIcon;
  action?: (() => void) | React.ReactElement;
  actionLabel?: string;
  actionIcon?: LucideIcon;
  children: React.ReactNode;
};

export const SettingsCard = ({
  title,
  description,
  icon,
  action,
  actionLabel,
  actionIcon,
  children,
}: SettingsCardProps): React.ReactElement => {
  const Icon = icon;
  const ActionIcon = actionIcon;

  return (
    <Card className="flex flex-col gap-4 pt-0">
      <div className="flex flex-col md:flex-row justify-between p-4 bg-gray-200/30 rounded-t-lg border-b border-gray-200">
        <div className="flex flex-row items-center justify-start gap-4">
          {Icon && (
            <div className="h-12 w-12 flex items-center justify-center rounded-xl gradient-bg ">
              <Icon className="text-white" />
            </div>
          )}

          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-lg text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500 font-normal">{description}</p>
          </div>
        </div>

        {action && typeof action === "function" ? (
          <Button onClick={action}>
            {ActionIcon && <ActionIcon className="mr-1" />}
            {actionLabel}
          </Button>
        ) : (
          action
        )}
      </div>

      {children}
    </Card>
  );
};
