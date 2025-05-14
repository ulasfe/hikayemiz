
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
    'index.csr.html': {size: 2890, hash: '71f2ac13b7c8a10af0b7d41704628c99b24c29d98b7d3e1e8012b69d77b0ecaf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1281, hash: '2b51bf8febcfb391e2c3316711d6f31a3e3486f30aaf5b67707d8bb8c496df1a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23715, hash: 'fe9d2dc2a834d9fc53f11c7b5168dee7ed4ebbd0f64ee27875f91124250e3fa7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BGW55XLI.css': {size: 12205, hash: 'UeqttLX4fBY', text: () => import('./assets-chunks/styles-BGW55XLI_css.mjs').then(m => m.default)}
  },
};
