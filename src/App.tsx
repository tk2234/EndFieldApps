import React from "react";

import { WeaponProvider } from "./contexts/WeaponContext";

import TabsPanel from "@/components/TabsPanel";


const App: React.FC = () => {

  return (
    <WeaponProvider>
      <TabsPanel />
    </WeaponProvider>
  );
};

export default App;


