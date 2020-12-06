# WebMonetization
Simple [WebMonetization](https://webmonetization.org/) support for Hugo static generated site.

## Install
### Config
[Import module](https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme) in your site
configuration:

```yaml
imports:
- path: gitlab.com/toby3d/hugo/webmonetization
```

### Template
And inject `monetization` partial in your `<head>` (better in the `_default/baseof.html` layout):

```html
<head>
  ...
  {{ partial "monetization" . }}
</head>
```

The template contains logic of meta-tag displaying and preloading of non-blocking script for
blocks manipulation.

## Usage
### Global
Add `monetization` [param in your site configuration](https://gohugo.io/variables/site/#the-siteparams-variable) for monetize all pages by default:

```yaml
baseUrl: https://example.com/
params:
  monetization: "$wallet.example.com/alice"
```

### Local
You can overwrite monetization tag or, if the global parameter is not set, enable monetization
only on specific pages by same [param in front matter](https://gohugo.io/variables/page/#page-level-params):

```markdown
---
title: My monetized post
monetization: "$wallet.example.com/alice"
---
```

Use the `false` value to force disable the current page monetization (if the site is monetized
globally):

```markdown
---
title: My demonetized post
monetization: false
---
```

### Markup
Just wrap paid front matter content into `{{% monetization %}}...{{% /monetization %}}` tags:

```markdown
...
{{% monetization %}}
## Thanks for your support!
Here is exclusive content for you.
{{% /monetization %}}
```

All content between these tags will be completely hidden until the successful monetization.

### Advanced markup
Use `state` parameter to customize the display of monetized content more flexibly:
* Use the named state parameter for readability: `{{% monetization state="start" %}}`
* The parameter name can be omitted for short: `{{% monetization "start" %}}`
* If no parameter is specified, the "start" state will be used by default: `{{% monetization %}}`

#### stop
Use this state to explain what content may be available after activate an add-on or install a
compatible browser. This content will be completely hidden from the moment of monetization
initialization. This event can also be useful for displaying promotional sections until the page
is monetized.

```markdown
{{% monetization state="stop" %}}
Please, install [Coil](https://coil.com/learn-more) browser extension or use
[Puma Browser](https://pumabrowser.com/) to see paid content here. 
{{% /monetization %}}
```

#### progress
This state describes the monetization initialization process and attempts to send the first coins.
Use this to describe what happens to visitors with slow connections.

```markdown
{{% monetization state="progress" %}}
Loading paid content for you...
{{% /monetization %}}
```

#### start
This state is activated as soon as the first coins are successfully sent. This is the standard
state for the monetized block if no parameter was specified.

```markdown
{{% monetization state="start" %}}
## Thanks for your support!
Here is exclusive content for you.
{{% /monetization %}}
```