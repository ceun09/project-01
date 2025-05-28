window.addEventListener('load', () => {
  adjustHeight();
})

window.addEventListener('resize', () => {
  adjustHeight();
})

const adjustHeight = () => {
  // height 값을 구할 요소
  const copyElement = document.querySelector('.height-copy');
  // height 값을 적용할 요소
  const targetElement = document.querySelector('.height-target');
  // 적용할 height 값
  let heightValue = copyElement.clientHeight;

  if(copyElement == null) return;

  window.addEventListener('scroll', () => {
    targetElement.style.height = heightValue + 'px';
  })
}