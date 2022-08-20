let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{

    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{

    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{

    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}




window.onscroll = () =>{

    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}





var swiper = new Swiper(".popular-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay:{
disableOnInteraction:false,
    },

    centeredSlides:true,

    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
       
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });



  