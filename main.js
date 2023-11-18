var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1024: {
          slidesPerView: 3,
          
        },
      },
  });

  let switcherlang=document.querySelector('.rotat');
let bodyy=document.getElementById('bodyy')
let darkSwitcher=document.querySelector('.switch')
let darkM=document.querySelector('.fa-moon')
let sunM=document.querySelector('.fa-sun')
  switcherlang.onclick=function(){
   
    console.log('hekkkkkkkkk')
    if(switcherlang.textContent==='العربيه'){
        bodyy.setAttribute('dir','rtl')
        return switcherlang.textContent='english'
    }else{
        bodyy.setAttribute('dir','ltr')
        return switcherlang.textContent="العربيه"
    }
  }

  darkSwitcher.addEventListener('click',function(){
    if(darkM){
        darkM.style.display='none';
        sunM.style.display='block';
    }else{
       darkM.style.display='block';
        sunM.style.display='none';
       
    }

  })