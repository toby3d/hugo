# Functions
Various useful utilities for Hugo static generated site.

## Install
### Config
[Import module](https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme) in your site
configuration:

```yaml
imports:
  - path: gitlab.com/toby3d/hugo/functions
```

## Usage
### `srcset`
Generates the `srcset` attribute for adaptive image resources. Takes an image resource as an argument and returns an attribute with references to alternate sizes of that resource. If no alternate resources can be generated based on the settings, an empty string will be returned.

#### Config
Add the following parameters to the site configuration. The example below shows the default values:

```yaml
params:
  imaging:
    min: 50 # Minimum width for generated images
    max: 1000 # Maximum width for generated images
    count: 20 # Maximum number of generated images
```

#### Usage
```html
{{- $image := resources.GetMatch "sample" -}}
<img src="{{ $image.Permalink }}" {{ partial "functions/srcset" $image | safeHTMLAttr }} loading="lazy" />
```

#### Result
```html
<img src="https://example.com/images/image.jpg" srcset="https://example.com/images/image_hu163a76a9d5551ae508ac1b34fee2c6dc_611848_960x0_resize_box_2.png 960w, https://example.com/images/image_hu163a76a9d5551ae508ac1b34fee2c6dc_611848_480x0_resize_box_2.png 480w, https://example.com/images/image_hu163a76a9d5551ae508ac1b34fee2c6dc_611848_240x0_resize_box_2.png 240w" />
```

### `wbr`
Renders long URLs with hyphenation tags. See «[Better Line Breaks for Long URLs](https://css-tricks.com/better-line-breaks-for-long-urls/)».

#### Usage
```html
{{ partial "functions/wbr" $.Page.Permalink | safeHTML }}
```

#### Result
```html
http:<wbr>//<wbr>www<wbr>.<wbr>example<wbr>.com<wbr>/<wbr>s/<wbr>ref<wbr>=<wbr>sr<wbr>_<wbr>nr<wbr>_<wbr>i<wbr>_o<wbr>
```