module.exports = {
  // Type check TypeScript files
  // '**/*.(ts|tsx)': (filename) => {
  //   console.log('filename', filename);
  //   return 'npx tsc --noEmit';
  // },

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': (filenames) => [`npx eslint \"**/*.{ts,tsx}\"`, `npm run prettier ${filenames.join(' ')}`],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) => `npm run prettier ${filenames.join(' ')}`,
};
