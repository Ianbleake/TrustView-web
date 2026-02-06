import { Toaster } from "sonner";

export function AppToaster(): React.ReactElement {
  return (
    <Toaster
      position="top-right"
      theme="light"
      richColors
      closeButton
      duration={4000}
      toastOptions={{
        closeButton: false,
        classNames: {
          toast: "bg-background text-foreground border border-border shadow-lg rounded-xl",
          title: "text-sm font-semibold",
          description: "text-xs text-muted-foreground",
          success: "bg-green-500 text-white",
          error: "bg-destructive text-white",
        },
      }}
    />
  );
}
