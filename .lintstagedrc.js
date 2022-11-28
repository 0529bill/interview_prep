module.exports = {
  // Type check TypeScript files
  // '**/*.(ts|tsx)': (filename) => {
  //   console.log('filename', filename);
  //   return 'npx tsc --noEmit';
  // },

  // no warnings allowed
  // '**/*.(ts|tsx|js)': (filenames) => [`npx eslint . --max-warnings=0 `, `npm run prettier ${filenames.join(' ')}`],

  '**/*.(ts|tsx|js)': (filenames) => [
    `npx eslint . --ext=ts,tsx,js  --exit-on-fatal-error `,
    `npm run prettier ${filenames.join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) => `npm run prettier ${filenames.join(' ')}`,
};
