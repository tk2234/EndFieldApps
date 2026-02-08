import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import WeaponList from "@/components/WeaponList";
import QuestSearch from "@/components/QusetSearch";
import WeaponSearch from "@/components/WeaponSearch";

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
        <Tab label="武器検索" />
      </Tabs>
      <Box sx={{mt: 2}}>
        {tabIndex === 0 && <WeaponList />}
        {tabIndex === 1 && <QuestSearch />}
        {tabIndex === 2 && <div>ダメージ計算コンポーネント</div>}
        {tabIndex === 3 && <WeaponSearch />}
      </Box>
  </Box>
  )
}
export default TabsPanel;