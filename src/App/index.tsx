import Navigation from "./navigation";
import { AppToaster } from "@/components/AppToaster";
import moment from "moment";
import "moment/dist/locale/es";

moment.updateLocale("es", {});
moment.locale("es");

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
