const navButton = document.querySelector('button.hed__menu--btn')
navButton.addEventListener('click', e => {
  e.preventDefault()
  navButton.classList.toggle('selected')
  const nav = document.querySelector('.hed')
  const navVisible = document.querySelector('.hed.visible')
  if (nav != navVisible) {
    nav.classList.add('visible')
  } else {
    nav.classList.remove('visible')
  }
})
const modal = document.getElementById('modal')
const closeModal = document.querySelectorAll('button.close')

for (let i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener('click', e => {
    modal.innerHTML = ""
    modal.classList.toggle('hidden')
  })
}
(function(window, document, undefined) {
  "use strict";

  // List of Video Vendors embeds you want to support
  var players = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]'];

  // Select videos
  var fitVids = document.querySelectorAll(players.join(","));

  // If there are videos on the page...
  if (fitVids.length) {
    // Loop through videos
    for (var i = 0; i < fitVids.length; i++) {
      // Get Video Information
      var fitVid = fitVids[i];
      var width = fitVid.getAttribute("width");
      var height = fitVid.getAttribute("height");
      var aspectRatio = height / width;
      var parentDiv = fitVid.parentNode;

      // Wrap it in a DIV
      var div = document.createElement("div");
      div.className = "fitVids-wrapper";
      div.style.paddingBottom = aspectRatio * 100 + "%";
      parentDiv.insertBefore(div, fitVid);
      fitVid.remove();
      div.appendChild(fitVid);

      // Clear height/width from fitVid
      fitVid.removeAttribute("height");
      fitVid.removeAttribute("width");
    }
  }
})(window, document);
// Add labls as placeholder text
// const labels = document.querySelectorAll("label");
// let i = labels.length;
// while (i--) {
//   let label = labels.item(i);
//   let text = label.textContent;
//   label.parentNode.classList.contains("required") && (text += "*");
//   label.nextElementSibling.setAttribute("placeholder", text);
// }