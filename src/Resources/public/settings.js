document.addEventListener("DOMContentLoaded", function(event) {   

  var html_elements = document.querySelectorAll('a[target="lightbox"]')
  var image_elements = document.querySelectorAll('.ce_gallery, .image_container')
  
  image_elements.forEach(function(element, index, array) {
    lightGallery(element, {
      download: false,
      selector: 'this',
      hideBarsDelay: '2000',
      counter: false,
      getCaptionFromTitleOrAlt: false,
      selector: '.item, [data-lightbox]',
      mode: 'lg-fade',
    })
  })

  html_elements.forEach(function(element, index, array) {
    if ( element.parentElement.parentElement.parentElement.classList.contains('html_modal') || element.parentElement.parentElement.classList.contains('html_modal') ) {
      element.setAttribute("data-iframe", "true")
    }
    lightGallery(element, {
      download: false,
      selector: 'this',
      hideBarsDelay: '2000',
      counter: false,
      youtubePlayerParams: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        controls: 1,
        autoplay: 1,
        width: 100
      }
    })
  })
})
