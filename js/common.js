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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();