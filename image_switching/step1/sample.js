'use strict';

const thumbs = document.querySelectorAll('.thumb')
thumbs.forEach(function(item, sample) {
   item.onclick = function() {
       document.getElementById('bigimg').src = this.dataset.image;
   } 
});
