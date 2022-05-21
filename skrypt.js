//   d a n e
const HOV = document.querySelector('.HOV');
const MARVEL_A = document.querySelector('.MARVEL_A');
const SW_A = document.querySelector('.SW_A');
const DIS_A = document.querySelector('.DIS_A');
const NAT_A = document.querySelector('.NAT_A');

//   m e n u
MARVEL_A.addEventListener('mouseenter', function(){
    HOV.classList.add('HOV_M');
})

MARVEL_A.addEventListener('mouseleave', function(){
    HOV.classList.remove('HOV_M');
})

SW_A.addEventListener('mouseenter', function(){
    HOV.classList.add('HOV_SW');
})

SW_A.addEventListener('mouseleave', function(){
    HOV.classList.remove('HOV_SW');
})

DIS_A.addEventListener('mouseenter', function(){
    HOV.classList.add('HOV_DIS');
})

DIS_A.addEventListener('mouseleave', function(){
    HOV.classList.remove('HOV_DIS');
})

NAT_A.addEventListener('mouseenter', function(){
    HOV.classList.add('HOV_NAT');
})

NAT_A.addEventListener('mouseleave', function(){
    HOV.classList.remove('HOV_NAT');
})