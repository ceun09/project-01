window.addEventListener('load', () => {
  // Swiper Pagination 이미지 변수
  let tab_pagination_img_1 = ['../assets/images/img-5.jpg','../assets/images/img-9.jpg','../assets/images/img-6.jpg']
  let tab_pagination_img_2 = ['../assets/images/img-4.jpg','../assets/images/img-13.jpg']
  let tab_pagination_img_3 = ['../assets/images/img-3.jpg','../assets/images/img-7.jpg']
  let tab_pagination_txt_1 = ['Quality', 'Development', 'Research']
  let tab_pagination_txt_2 = ['Customization', 'Effectiveness']
  let tab_pagination_txt_3 = ['Environment', 'Employment']


  // Main Tab Content - 1
  new Swiper('.swiper__tab-content-1', {
    slidesPerView: 1,

    autoplay: {
      delay: 3500,
    },

    navigator: {
      nextEl: '',
      prevEl: '',
    }, 
    pagination: {
      el: '.swiper__tab-menu-1',
      clickable: true,
      bulletClass: 'item',
      bulletActiveClass: 'item-active',
      renderBullet: function (index, className) {
        return '<div class="'+ className +'"><div class="sub_image"><img src="' + (tab_pagination_img_1[index]) + '" /></div><span class="sub_title">' + (tab_pagination_txt_1[index]) + '</span></div>';
      },
    },
  })

  // Main Tab Content - 2
  new Swiper('.swiper__tab-content-2', {
    slidesPerView: 1,

    navigator: {
      nextEl: '',
      prevEl: '',
    }, 
    pagination: {
      el: '.swiper__tab-menu-2',
      clickable: true,
      bulletClass: 'item',
      bulletActiveClass: 'item-active',
      renderBullet: function (index, className) {
        return '<div class="'+ className +'"><div class="sub_image"><img src="' + (tab_pagination_img_2[index]) + '" /></div><span class="sub_title">' + (tab_pagination_txt_2[index]) + '</span></div>';
      },
    },
  })

  // Main Tab Content - 3
  new Swiper('.swiper__tab-content-3', {
    slidesPerView: 1,

    navigator: {
      nextEl: '',
      prevEl: '',
    },
    pagination: {
      el: '.swiper__tab-menu-3',
      clickable: true,
      bulletClass: 'item',
      bulletActiveClass: 'item-active',
      renderBullet: function (index, className) {
        return '<div class="'+ className +'"><div class="sub_image"><img src="' + (tab_pagination_img_3[index]) + '" /></div><span class="sub_title">' + (tab_pagination_txt_3[index]) + '</span></div>';
      },
    },
  })

  // Main Program
  new Swiper('.swiper2', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    navigation: {
      nextEl: '.pro_button.next',
      prevEl: '.pro_button.prev',
    },
  });

  // Product Detail
  new Swiper('.swiper__prd', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.progress',
      type: 'progressbar',
    }
  })

})