window.addEventListener('load', () => {
  useAnchor();        // 버튼 클릭 시 스크롤 다운
  useFoldMenu();      // GNB 메뉴 폴딩
  useTab();           // 탭 메뉴
  useTextEffect();    // 텍스트 한 글자씩 효과 넣기
  useChangeColor();   // 색상 자동 변환
  // useChangeCursor();  // 특정 영역에서 마우스 커서 변경
  useSliderHeight();  // slider 높이 길이 고정정
})

const useAnchor = () => {
  const btn = document.querySelector('.btn_to-next');
  const nextSection = document.querySelector('.mainSolution');

  // 데이터 유효성 검사
  if(btn == null) return;
  if(nextSection == null) return;

  const handleClick = () => {
    let y = nextSection.getBoundingClientRect().top;
    scrollTo({
      top: y,
      behavior: "smooth",
    })
  }

  btn.addEventListener('click', handleClick);
}

const useTextEffect = () => {
  let strItem = document.querySelector('.visual_text-wrap .head');
  let str = strItem.innerText;
  let splitStr = "";

  // 데이터 유효성 검사
  if(strItem == null) return;

  for(let i = 0; i < str.length; i++) {
    splitStr += "<span data-delay='"+ i * 100 +"' aria-hidden='true'>";
    if (str[i] == " "){
      splitStr += " "
  } else {
    splitStr += str[i];
  }
  splitStr += "</span>";
  }

  strItem.innerHTML = splitStr;
  strItem.setAttribute("aria-label", str);
}

const useTab = () => {
  const tabContentItems = document.querySelectorAll('.sol_tab-content .content-item')
  const tabMenuItems = document.querySelectorAll('.sol_tab-menu .menu-item');
  const tabButtons = document.querySelectorAll('.sol_tab-menu .menu-item .s_head');

  let prevItem;

  // 데이터 유효성 검사
  if(tabContentItems == null) return;

  const handleClick = (element, index) => {
    // click 이벤트로 선택된 currItem
    let currItem = element.target;

    // 다른 버튼을 누른 경우, tab menu 부분 on 리셋
    if(currItem !== prevItem) {
      let element = tabMenuItems;
      resetClass(element);
    }

    // tab content 부분 on 리셋셋
    resetClass(tabContentItems);

    // 현재 아이템 on 토글
    currItem.parentNode.classList.toggle('on');
    tabContentItems[index].classList.toggle('on');

    // prevItem 갱신
    prevItem = currItem;
  }

  const resetClass = (element) => {
    // 전체 아이템 on 해제
    element.forEach((item) => {
      if(item.classList.contains('on')) {
        item.classList.remove('on')
      }
    })
  }

  // 이벤트 핸들러 추가
  tabButtons.forEach((item, index) => {
    item.addEventListener('click', (element) => {
      handleClick(element, index);
    })
  });
}

const useChangeColor = () => {
  let item = document.querySelector('.change-color__target');
  let r, g, b;
  let random_color;

  let timer;  // setInterval 함수 부여할 변수
  let time_delay = 1700;  // 색상이 변경되는 시간

  if(item == null) return;

  setTimer();

  function inputNewColor() {
    // 랜덤한 0~255 값을 각각의 변수에 입력
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    // random_color = rgb(r,g,b)
    random_color = 'rgb(' + r + ',' + g + ',' + b + ')';

    // item 색상 변경
    item.style.backgroundColor = random_color;
  }

  function setTimer() {
    timer = setInterval(inputNewColor, time_delay);
  }
}

const useChangeCursor = () => {
  const myCursor = document.querySelector('.cursor_drag');
  const section = document.querySelector('.pro_slider-wrap');

  // 데이터 유효성 검사
  if(myCursor == null) return;
  if(section == null) return;

  // 커서 활성화
  const handleMouseIn = (e) => {
    document.body.classList.add('cursor-none');
    myCursor.classList.add('active');

    // 커서 위치 지정
    myCursor.style.left = e.pageX + 'px';
    myCursor.style.top = e.pageY + 'px';
  }

  // 커서 비활성화
  const handleMouseOut = (e) => {
    document.body.classList.remove('cursor-none');
    myCursor.classList.remove('active');
  }

  section.addEventListener('mousemove', handleMouseIn);
  section.addEventListener('click', handleMouseIn);
  section.addEventListener('mousedown', handleMouseIn);
  section.addEventListener('scroll', handleMouseIn);
  section.addEventListener('wheel', handleMouseIn);

  section.addEventListener('mouseout', handleMouseOut);
}

const useSliderHeight = () => {
  const section = document.querySelector('.mainProgram')
  const slider = document.querySelector('.pro_slider-wrap');

  // 데이터 유효성 검사
  if(section == null) return;
  if(slider == null) return;

  const checkHeight = () => {
    // 활성화 된 slide의 높이를 전체 영역에 적용
    let activeItem = slider.querySelector('.swiper-slide-active');
    let slideHeight = activeItem.offsetHeight;
    slider.style.height = slideHeight + 'px';
  }

  window.addEventListener('scroll', () => {
    // 해당 영역까지 스크롤이 닿았을 때 실행행
    if(section.classList.contains('active')) {
      checkHeight();
    }
  })

  window.addEventListener('resize', checkHeight);
}