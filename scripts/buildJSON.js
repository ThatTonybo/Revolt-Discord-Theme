const theme = require('../src/theme.json');
const fs = require('fs/promises');

(async () => {
  const css = await fs.readFile('./dist/theme.css', { encoding: 'utf-8' });
  const newTheme = { ...theme, css };
  await fs.writeFile('./dist/theme.json', JSON.stringify(newTheme));
})();