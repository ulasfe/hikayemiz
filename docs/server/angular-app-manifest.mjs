
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/hikayemiz/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/hikayemiz"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2890, hash: '549a9e21efc63cad29548fd50ea447a8355fa9eb5629573ab631fded71321941', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1281, hash: '535ef4f434a0fcecd193f98413cae969cfe55a86680219b423d5c7c6dfc21b84', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23715, hash: '4b0dbadbd81bc263b647eb3123d0fdf4b1038c70abf24bcdef63e2114f6966ef', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BGW55XLI.css': {size: 12205, hash: 'UeqttLX4fBY', text: () => import('./assets-chunks/styles-BGW55XLI_css.mjs').then(m => m.default)}
  },
};
