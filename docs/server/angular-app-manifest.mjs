
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-sevgilim-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-sevgilim-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2901, hash: 'd1d8b15a50419a4dd8691dc62d8d80cd9a41d10c96d92c016e218a340508606e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1292, hash: '71d4be517334bf520543927179fdb6d1f56bcdb8b8aad80427c1a204e544209d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23726, hash: '509dde115700b04e0e2577be40352b3dd9d2b4bb32f2c488fff6bbda550136c9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BGW55XLI.css': {size: 12205, hash: 'UeqttLX4fBY', text: () => import('./assets-chunks/styles-BGW55XLI_css.mjs').then(m => m.default)}
  },
};
