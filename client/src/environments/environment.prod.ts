// declare var process: {
//   env: {
//     [key: string]: string | undefined;
//   };
// };

export const environment = {
  production: true,
  apiBaseUrl: 'https://dtwebsolutions.org/.netlify/functions',
  // apiBaseUrl: '/.netlify/functions',
  // apiBaseUrl: process.env['API_BASE_URL'] || '/.netlify/functions',
};
