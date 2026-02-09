import Navigation from "./navigation";
import { AppToaster } from "@/components/AppToaster";


export const App = (): React.ReactElement => {
  return (
    <main
      className="min-h-screen flex flex-col bg-gray-50"
      id="app-container"
    >
      <AppToaster />
      <Navigation />
    </main>
  );
};
