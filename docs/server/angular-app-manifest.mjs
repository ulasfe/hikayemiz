
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-sevgilim-app',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-sevgilim-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2932, hash: '8248aaa054a4f1c4df427f19599124b19ecaa6f16751a8db571ea9e2a01caeed', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1326, hash: '92423a1ea8db25cf70c53e7739952af83f98209b53fd3249715594cc79c0e4f5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23754, hash: 'c631280287c26ea5386bff38ac31e4d95bdda29e3f6be17224e340621889633a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BGW55XLI.css': {size: 12205, hash: 'UeqttLX4fBY', text: () => import('./assets-chunks/styles-BGW55XLI_css.mjs').then(m => m.default)}
  },
};
