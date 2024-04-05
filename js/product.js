const images = [
    './images/bottle-black.png',
    './images/bottle-blue.png',
    './images/bottle-green.png',
    './images/bottle-orange.webp',
    './images/bottle-white.webp'
  ];
  
  let currentIndex = 0;
  
  function changePic(direction) {
    if(direction === 'right') {
      currentIndex = (currentIndex + 1) % images.length; 
    } else if(direction === 'left') {
      currentIndex = (currentIndex - 1 + images.length) % images.length; 
    }
  
    document.getElementById('product-img').src = images[currentIndex];
  }

document.getElementById("btn-left").addEventListener("click", function() { changePic('left'); });
document.getElementById("btn-right").addEventListener("click", function() { changePic('right'); });

document.getElementById("header-logo").addEventListener("click", () => {
  window.location = "./index.html";
})

document.getElementById("bottle-black").addEventListener("click", () => {
  window.location = "./product.html";
})