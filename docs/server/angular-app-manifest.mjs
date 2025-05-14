
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
    'index.csr.html': {size: 2887, hash: '8cb12851cc50f43b59723bcb7c25e23933e2ba092c5ede5ae1170143353c347c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1278, hash: '2038e8512fae9b51f015f73f9a226948e08c87d82af32d612fac5e21fd87b4fe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23712, hash: 'bf75ba1d28fba1c5b3a8a7cd552ac1b5fe15e7bc2fc23601f4ea370035e856da', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BGW55XLI.css': {size: 12205, hash: 'UeqttLX4fBY', text: () => import('./assets-chunks/styles-BGW55XLI_css.mjs').then(m => m.default)}
  },
};
