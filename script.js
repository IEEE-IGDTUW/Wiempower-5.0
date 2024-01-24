document.addEventListener('DOMContentLoaded', function () {
    var spCarousel = new bootstrap.Carousel(document.getElementById('speakersCarousel'), {
        interval: 4000,
        wrap: true,
    });
    var pastCarousel = new bootstrap.Carousel(document.getElementById('pastActsCarousel'), {
        interval: 4000,
        wrap: true,
    });
});

function toggleNav() {
    var navbar = document.querySelector('.navbar');
    var lineBtn = document.querySelector('#line-btn');
    var closeBtn = document.querySelector('#close-btn');
  
    navbar.classList.toggle('active');
  
    if (navbar.classList.contains('active')) {
      lineBtn.style.display = 'none';
      closeBtn.style.display = 'block';
    } else {
      lineBtn.style.display = 'block';
      closeBtn.style.display = 'none';
    }
  }
  
  function handleResize() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var lineBtn = document.querySelector('#line-btn');
    var closeBtn = document.querySelector('#close-btn');
  
    if (screenWidth <= 830) {
      lineBtn.style.display = 'block';
      closeBtn.style.display = 'none';
    } else {
      lineBtn.style.display = 'none';
      closeBtn.style.display = 'none';
    }
  }
  
  // Call the handleResize function on page load and window resize
  window.addEventListener('load', handleResize);
  window.addEventListener('resize', handleResize);

// For Register Button
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
 