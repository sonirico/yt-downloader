doctype html
html
  head
    title= title

    block css
      link(rel='stylesheet', href='/stylesheets/style.css')

  body
    block content

    block gruntedjs
      script(src='/bundles/<bundle-goes-here>.min.js')

