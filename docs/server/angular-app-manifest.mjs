
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
    'index.csr.html': {size: 2900, hash: '1d8c81cda8a5fde4cba137ee7203ddce520858e6330a4c1e65ebf71b0b9f1923', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1291, hash: '1ae2691f522deb36860401af614f62036d742e3539ce7b61e9dbb0a0157e40bb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23725, hash: '43946cf2b517a60939d2b7d360d40fa490c707fbf58992e1d4a26fcfcc36f673', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BGW55XLI.css': {size: 12205, hash: 'UeqttLX4fBY', text: () => import('./assets-chunks/styles-BGW55XLI_css.mjs').then(m => m.default)}
  },
};
