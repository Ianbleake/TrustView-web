import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { type LucideIcon } from "lucide-react"

type NoDataProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  action: ()=>void;
  actionLabel: string;
  actionIcon?: LucideIcon;
}

export function Nodata({
  title,
  description,
  icon,
  action,
  actionLabel,
  actionIcon,
}:NoDataProps):React.ReactElement {

  const Icon = icon;
  const ActionIcon = actionIcon;

  return (
    <Empty>

      <EmptyHeader>
        <div className="h-12 w-12 flex items-center justify-center bg-orange-200 text-orange-600 rounded-lg shadow-glow mb-4">
          <Icon className="h-8 w-8"/>
        </div>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>
          {description}
        </EmptyDescription>
      </EmptyHeader>

      <EmptyContent className="flex-row justify-center gap-2">
        <Button
          variant="gradient"
          size="sm"
          onClick={action}
          className="flex-row gap-2"
        >
          { ActionIcon && <ActionIcon/>}
          {actionLabel}
        </Button>
      </EmptyContent>
    </Empty>
  )
}
