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

-------------------------------

Fügt die lightgallery.js (https://github.com/sachinchoolur/lightgallery.js) mit Videosupport hinzu. Um einen anderen Inhalt in der Modal-Box darzustellen muss dem Textelement indem der Link ist die Klasse html_modal gegeben werden.

Der Trigger für das iframe, also bspw. für Youtube ist a[target="lightbox"] . Es könnte bspw. folgendes in der be_tinyMCE.html5 im templates Verzeichnis hinzugefügt werden:

```js
  target_list: [
    { title: 'same window', value: '' },
    { title: 'new window', value: '_blank' },
    { title: 'open in lightbox', value: 'lightbox' },
  ], 
```

Damit kann dann im Editor im "Link öffnen in ..."-Feld "in Lightbox öffnen" ausgewählt werden.


Commercial licencing: https://sachinchoolur.github.io/lightgallery.js/docs/license.html
