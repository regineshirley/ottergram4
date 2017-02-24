var links = document.querySelectorAll('a');
var linksArr = [].slice.call(links);

function ClickHandler(links) {
    'use strict';
    links.addEventListener('click', function(event) {
        event.preventDefault();
    });
}

linksArr.forEach(ClickHandler);
