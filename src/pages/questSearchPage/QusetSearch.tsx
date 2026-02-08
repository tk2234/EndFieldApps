import { useState } from "react";

import weapons from "@/data/weapons.json";
import quests from "@/data/quests.json";

import type { Weapon, Quest } from "@/types";

export const QuestSearch: React.FC = () => {
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon | null>(null);

  // 選んだ武器にマッチするクエストを返す
  const matchingQuests = selectedWeapon
    ? (quests as Quest[]).filter(
        (q) =>
          q.dropTable.baseEffects.includes(selectedWeapon.baseEffect) &&
          q.dropTable.extraEffects.includes(selectedWeapon.extraEffect) &&
          q.dropTable.skillEffects.includes(selectedWeapon.skillEffect)
      )
    : [];

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* 武器選択 */}
      <div>
        <label>武器を選択: </label>
        <select
          onChange={(e) => {
            const w = weapons.find((w) => w.name === e.target.value) as Weapon;
            setSelectedWeapon(w);
          }}
        >
          <option value="">-- 選択 --</option>
          {weapons.map((w) => (
            <option key={w.name} value={w.name}>
              {w.name} (攻撃力: {w.attack})
            </option>
          ))}
        </select>
      </div>

      {/* 選択中の武器 */}
      {selectedWeapon && (
        <div style={{ marginTop: "20px" }}>
          <h2>選択中の武器: {selectedWeapon.name}</h2>
          <p>
            効果: {selectedWeapon.baseEffect}, {selectedWeapon.extraEffect},{" "}
            {selectedWeapon.skillEffect}
          </p>
        </div>
      )}

      {/* マッチするクエスト一覧 */}
      <div style={{ marginTop: "20px" }}>
        <h2>この武器にマッチするクエスト:</h2>
        {matchingQuests.length > 0 ? (
          <ul>
            {matchingQuests.map((q) => (
              <li key={q.id}>
                {q.name} (ID: {q.id})
              </li>
            ))}
          </ul>
        ) : (
          <p>マッチするクエストはありません。</p>
        )}
      </div>
    </div>
  );
}