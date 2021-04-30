const searchEl = document.querySelector('.search');
// document = HTML 거의 그자체
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  // Logic...
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused'); //class추가
  searchInputEl.setAttribute('placeholder', '통합검색');
  // placeholder속성에 통합검색 추가
});

searchInputEl.addEventListener('blur', function() { 
  // blur : focus가 해제되면
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl =document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  if (window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      //객체데이터 형식 제이슨?
      opacity : 0,
      display : 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
//함수가 수십개가 한번에 실행되는데 그것을 0.3초단위로 부하를 줘서 함수가 무분별하게 쓰이는것을 방지하기위해 throttle사용
//lodash 외부라이브러리 사용
//scroll 할때 자주 사용됨
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0,
    ease:Power1.easeInOuteaseInOut
  })
})


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){ 
  //각각의 요소는 단수형태로 받을수있고(fadeEl), 반복되는 횟수 매개변수로 받음
  gsap.to(fadeEl, 1, {
    delay : (index + 1) * .7, // 0.7초, 1.4초, 2.1초, 2.8초 뒤에 순차적으로 애니메이션실행
    //반복처리 로직활용이 중요하다. 
    opacity : 1
  });
  //fadeEl의 요소를 
});


// vertical swiper
// new Swiper(선택자, json옵션, )
new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',
  autoplay : true,
  loop : true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView : 3, // 한번에 보여지는 슬라이드 갯수
  spadeBetween : 10, // 슬라이드 사이 여백
  centeredSlides : true, // 1번 슬라이드가 가운데 보이기
  loop : true,
  autoplay : {
    delay : 4000
  }, 
  pagination : {
    el: '.promotion .swiper-pagination', //페이지 번호요소 선택자
    clickable : true,
  },
  navigation : {
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next'
  }
});

// AWARDS
new Swiper('.awards .swiper-container',{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //값이 바뀔수있음
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion; //true
  if(isHidePromotion){
    //숨김처리
    promotionEl.classList.add('hide');
  }else{
    //보임처리
    promotionEl.classList.remove('hide');
  }
});
//css에서 제어하는게 좋음 hide클래스를


// FLOATING
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //무한반복
    yoyo: true,
    ease:Power1.easeInOuteaseInOut,
    delay: random(0, delay),
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8, // 뷰포트 세로축 0~1사이 위치
  })
  .setClassToggle(spyEl, 'show') // spyEl에 show라는 클래스를
  .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();