const fs = require('fs');
const csv = fs.readFileSync('src/data/weapons.csv', 'utf8');

const lines = csv.split('\n');
const headers = lines[0].split(',');

const data = lines.slice(1).map(line => {
  const cols = line.split(',');
  const obj = {};
  headers.forEach((h, i) => obj[h] = cols[i]);
  return obj;
});

fs.writeFileSync('src/data/weapons.json', JSON.stringify(data, null, 2));
console.log('weapons.json 作成完了');