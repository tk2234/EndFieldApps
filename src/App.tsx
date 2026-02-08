import React from "react";

import { WeaponContext } from "@/contexts/WeaponContext";
import { useWeapons } from "@/hooks/useWeapons";

import TabsPanel from "@/components/TabsPanel";


const App: React.FC = () => {
  const weapons = useWeapons();
  return (
    <WeaponContext.Provider value={weapons}>
      <TabsPanel />
    </WeaponContext.Provider>
  );
};

export default App;


