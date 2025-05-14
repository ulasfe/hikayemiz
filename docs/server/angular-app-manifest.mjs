
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
    'index.csr.html': {size: 2933, hash: 'd0f29133e54251050eb64b6d8096080e0cb0bc576972e501be6051ff2814b98c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1327, hash: '59f90424d854d6e6fb4f9c6c9d5f751df014c765442728beab442be30d725d3d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23755, hash: 'beadd40df7bfb95b4a8a9b8822e1e3b5fed2eec384c86346724f080cf2a544c3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BGW55XLI.css': {size: 12205, hash: 'UeqttLX4fBY', text: () => import('./assets-chunks/styles-BGW55XLI_css.mjs').then(m => m.default)}
  },
};
