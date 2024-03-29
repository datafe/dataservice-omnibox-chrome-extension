import packageJson from './package.json' assert { type: 'json' };

/**
 * After changing, please reload the extension at `chrome://extensions`
 * @type {chrome.runtime.ManifestV3}
 */
const manifest = {
  manifest_version: 3,
  name: '__MSG_appName__',
  version: packageJson.version,
  description: '__MSG_appDescription__',
  omnibox: { 'keyword': 'api' },
  default_locale: "zh_CN",
  permissions: ['contextMenus'],
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module',
  },
  icons: {
    255: 'logo-255.png',
    128: 'logo-128.png',
    64: 'logo-64.png',
    32: 'logo-32.png',
    16: 'logo-16.png'
  },
  content_security_policy: {
    extension_pages: "script-src 'self'; object-src 'self';",
  },
};

export default manifest;
