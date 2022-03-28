# lightgallery.js for Contao

Adds the [lightgallery.js](https://github.com/sachinchoolur/lightgallery.js) with video support. To display other content in the modal box, the text element containing the link must be given the class html_modal.

The trigger for the iframe, eg. for YouTube is `a[target="lightbox"]`. For example, the following could be added to the _be_tinyMCE.html5_ in the templates directory:

```js
  target_list: [
    { title: 'same window', value: '' },
    { title: 'new window', value: '_blank' },
    { title: 'open in lightbox', value: 'lightbox' },
  ], 
```

This will then allow you to select “open in lightbox” in the “open link in…” field in the editor. Commercial licensing: https://sachinchoolur.github.io/lightgallery.js/docs/license.html
