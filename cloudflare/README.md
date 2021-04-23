# Cloudflare
[Cloudflare](https://cloudflare.com/) tools for compiled Hugo-website.

## Install
### Config
[Import module](https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme) in your site
configuration:

```yaml
imports:
  - path: gitlab.com/toby3d/hugo/cloudflare
```

Then, connect and configure the necessary/all modules.

## Web Analytics
[See the official Cloudflare documentation](https://blog.cloudflare.com/privacy-first-web-analytics/)
about how it works and how to get the token.

### Install
#### Config
```yaml
baseUrl: https://example.com/
params:
  cloudflare:
    webAnalytics: 1d59a54b73a94728a4a9ed1b09767b1f
```

#### Template
Inject `cloudflare/web-analytics` partial in your `<body>` (preferably as close as possible to the closing tag):

```html
<head>
  {{ partialCached "cloudflare/web-analytics/head" . $.Site.Language.Lang }}
</head>
...
<body>
  ...
  {{ partialCached "cloudflare/web-analytics/body" . $.Site.Language.Lang }}
</body>
```