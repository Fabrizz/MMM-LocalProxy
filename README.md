<picture>
  <source media="(prefers-color-scheme: dark)" srcset=".github/content/logo-fabrizz-white.svg">
  <source media="(prefers-color-scheme: light)" srcset=".github/content/logo-fabrizz-githubgray.svg">
  <img alt="Fabrizz logo" src=".github/content/logo-fabrizz-fill.png">
</picture>

# MMM-LocalProxy
This [Magic Mirror²](https://github.com/MichMich/MagicMirror) module allows you to proxy a request from the browser to the backend, useful for development or accessing a local resource that does not include the `Access-Control-Allow-Private-Network` header. [[CORS-RFC1918 - Private Network Access](https://developer.chrome.com/blog/private-network-access-update/#what-is-private-network-access)]

# Usage
This module does not expose any configuration entries. To use it you just prefix your urls with `localproxy/?url=`.

For example this image from Home Assistant:
```
http://<ip>:8123/local/imgs/x  >>  localproxy/?url=http://<ip>:8123/local/imgs/x
```

Or this example that uses a icon from a server with the MMM-VisualNotifications module:
```json
  "display": [{
      "type": "icon",
      "url": "localproxy/?url=http://<ip>/icons/x"
    }],
```

 > You can directly use the proxy `[MM2 Origin]/localproxy/?url=[Request]`. Remember to configure the `ipWhitelist` entry to only the devices that you want to be able to access the mirror.

# Instalation
- Clone this repository in your `modules` folder:

```bash
cd ~/MagicMirror/modules # Change acordingly to your folder structure
git clone https://github.com/Fabrizz/MMM-LocalProxy.git
```

- Install dependencies:
```bash
cd MMM-LocalProxy
npm install
```

- Add the module to your `config/config.js` file
```js
{
    module: "MMM-LocalProxy",
},
```
