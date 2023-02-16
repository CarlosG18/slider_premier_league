const imgs = document.getElementsByClassName('img-team');
const texts = document.getElementsByClassName('text');
const btn_right = document.getElementById('right');
const btn_left = document.getElementById('left');

let slide_atual = 0;
let prox_slide;


btn_right.addEventListener('click',() => {
  if((slide_atual + 1) >= imgs.length){
    prox_slide = 0;
    slide_atual = prox_slide;
  }else{
    prox_slide = slide_atual + 1;
    slide_atual = prox_slide;
  }
  
  for(var i=0; i<imgs.length; i++){
    imgs[i].classList.add('off');
    texts[i].classList.add('off');
  }
  
  imgs[prox_slide].classList.remove('off');
  texts[prox_slide].classList.remove('off');
  
  anime({
    targets: `.img-team`,
    opacity: [0,1],
    duration: 800,
    easing: 'linear'
  })
  anime({
    targets: '.text',
    opacity: [0,1],
    duration: 800,
    easing: 'linear'
  })
  
});

btn_left.addEventListener('click',() => {
  
  if ((slide_atual - 1) < 0) {
    prox_slide = imgs.length - 1;
    slide_atual = prox_slide;
  } else {
    prox_slide = slide_atual - 1;
    slide_atual = prox_slide;
  }
  
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].classList.add('off');
    texts[i].classList.add('off');
  }
  
  imgs[prox_slide].classList.remove('off');
  texts[prox_slide].classList.remove('off');
  
  anime({
    targets: `.img-team`,
    opacity: [0, 1],
    duration: 800,
    easing: 'linear'
  })
  anime({
    targets: '.text',
    opacity: [0, 1],
    duration: 800,
    easing: 'linear'
  })
})

