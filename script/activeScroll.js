window.addEventListener('load', () => {
  useScroll();
  useScrollToTop(); // 새로고침 시 스크롤을 맨 위로로
})

const useScroll = () => {
  const items = document.querySelectorAll('.sect_scroll');
  let currIndex = 0;
  let nextIndex;

  setClassName();
  updateIndex();

  const handleScroll = (item, index) => {
    const nextItem = items[nextIndex];
    let nextItemTop = nextItem.getBoundingClientRect().top;

    let currentScrollTop = window.scrollY;

    if(nextItemTop < window.inner - 150) {
      nextItem.classList.add('on');
    }
    
    if(nextItemTop < 500) {
      currIndex++;
      updateIndex();
    }

  }

  items.forEach((item, index) => {
    window.addEventListener('scroll', () => {
      setClassName();
      if(nextIndex < items.length) {
        handleScroll(item, index);
      }
    })
  })

  function setClassName() {
    items[currIndex].classList.add('active');
  }

  function updateIndex() {
    nextIndex = currIndex + 1;
  }
}

const useScrollToTop = () => {
  setTimeout(() => {
    scrollTo(0,0);
  }, 100);
}