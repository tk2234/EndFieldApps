import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { WeaponListPage } from "@/pages/weaponListPage"
import { QuestSearch } from "@/pages/questSearchPage";

const TabsPanel: React.FC = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
  <Box sx={{
      width: "80%",
      margin: "0 auto",
      mt: 4 , border: "solid 1px #ccc",
      borderRadius: 2,
      boxShadow: 3,
      p: 2
    }}>
    <Tabs
      value={tabIndex}
      onChange={(_, newValue) => setTabIndex(newValue)}
      aria-label="main tabs"
      variant="fullWidth"
      >
        <Tab label="武器一覧" />
        <Tab label="クエスト検索" />
        <Tab label="ダメージ計算" />
      </Tabs>
      <Box sx={{mt: 2}}>
        {tabIndex === 0 && <WeaponListPage />}
        {tabIndex === 1 && <QuestSearch />}
        {tabIndex === 2 && <div>ダメージ計算コンポーネント</div>}
      </Box>
  </Box>
  )
}
export default TabsPanel;