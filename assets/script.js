jQuery("#carousel").owlCarousel({
  autoplay: false,
  rewind: true /* use rewind if you don't want loop */,
  margin: 20,
  dots: false,
  /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  navText: [
    "<img id='#left-button' onmouseover='hover(this);' onmouseout='unhover(this);' src='https://firebasestorage.googleapis.com/v0/b/investa-image-upload.appspot.com/o/Cocopav%2Fleft.png?alt=media&token=d59ba1c0-d92b-42cc-8c10-5ca693849709' class='position-relative d-none d-md-block' style='right:25px'>",
    "<img id='#right-button' onmouseover='hover2(this);' onmouseout='unhover2(this);' src='https://firebasestorage.googleapis.com/v0/b/investa-image-upload.appspot.com/o/Cocopav%2Fright.png?alt=media&token=0980bafa-fb18-4d71-b070-4b16c568c882' class='position-relative d-none d-md-block' style='left:25px'>",
  ],
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },

    600: {
      items: 3,
    },

    1024: {
      items: 4,
    },

    1366: {
      items: 4,
    },
  },
});

function hover(element) {
  element.setAttribute(
    "src",
    "https://firebasestorage.googleapis.com/v0/b/investa-image-upload.appspot.com/o/Cocopav%2Fkiri.png?alt=media&token=905f032d-e803-4701-bcb8-cdcaf835e760"
  );
}

function unhover(element) {
  element.setAttribute(
    "src",
    "https://firebasestorage.googleapis.com/v0/b/investa-image-upload.appspot.com/o/Cocopav%2Fleft.png?alt=media&token=d59ba1c0-d92b-42cc-8c10-5ca693849709"
  );
}

function hover2(element) {
  element.setAttribute(
    "src",
    "https://firebasestorage.googleapis.com/v0/b/investa-image-upload.appspot.com/o/Cocopav%2Fright-1.png?alt=media&token=f156e9a9-b57c-4572-9738-25ad8132c9a6"
  );
}

function unhover2(element) {
  element.setAttribute(
    "src",
    "https://firebasestorage.googleapis.com/v0/b/investa-image-upload.appspot.com/o/Cocopav%2Fright.png?alt=media&token=0980bafa-fb18-4d71-b070-4b16c568c882"
  );
}
// function navbarResponsive() {
//   let navbar = document.getElementById("navbar-responsive-top");
//   navbar.classList.remove("d-none");
// }

// function navbarUnResponsive() {
//   let navbar = document.getElementById("navbar-responsive-top");
//   navbar.classList.add("d-none");
// }
function navbarResponsive() {
  $("#navbar-responsive-top").animate({
    top: "0px",
  });
  $(this).one("click", secondClick);
}

function navbarUnResponsive() {
  $("#navbar-responsive-top").animate({
    top: "-500px",
  });
  $(this).one("click", firstClick);
}

$("#image1").one("click", firstClick);
