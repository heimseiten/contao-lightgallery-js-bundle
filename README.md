# lightgallery.js for Contao

Fügt die lightgallery.js (https://github.com/sachinchoolur/lightgallery.js) mit Videosupport hinzu. Um einen anderen Inhalt in der Modal-Box darzustellen muss dem Textelement indem der Link ist die Klasse html_modal gegeben werden.

Der Trigger für das iframe, also bspw. für Youtube ist a[target="lightbox"] . Es könnte bspw. folgendes in der be_tinyMCE.html5 im templates Verzeichnis hinzugefügt werden:


  target_list: [
    { title: 'gleiches Fenster', value: '' },
    { title: 'neues Fenster', value: '_blank' },
    { title: 'in Lightbox öffnen', value: 'lightbox' },
  ], 
  
Damit kann dann im Editor im "Link öffnen in ..."-Feld "in Lightbox öffnen" ausgewählt werden.


Commercial licencing: https://sachinchoolur.github.io/lightgallery.js/docs/license.html
