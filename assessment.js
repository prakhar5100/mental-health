document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.accordion-item');
  
    items.forEach(item => {
      item.addEventListener('click', function () {
        if (this.classList.contains('active')) {
          this.classList.remove('active');
        } else {
          items.forEach(item => item.classList.remove('active'));
          this.classList.add('active');
        }
      });
    });
  });

  window.addEventListener('scroll', reveal);
    
  function reveal(){
      var reveals = document.querySelectorAll('.reveal');
  
      for (var i = 0; i < reveals.length; i++) {
          var windowheight = window.innerHeight;
          var revealtop =  reveals[i].getBoundingClientRect().top;
          var revealpoint = 100;
          if (revealtop < windowheight - revealpoint) {
              reveals[i].classList.add('active');
          }
          else {
              reveals[i].classList.remove('active');
          }
      }
  }
  
   
