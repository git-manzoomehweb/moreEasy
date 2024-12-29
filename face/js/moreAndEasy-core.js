const headerMenu = document.querySelector(".header-menu");
const headerMenuClose = document.querySelector(".header-menu-close");
const bars3 = document.querySelector(".bars3");

if (window.innerWidth >= 1024) {
  headerMenuClose.addEventListener("click", function () {
    headerMenu.style.visibility = "hidden";
    headerMenu.style.opacity = "0";
    // headerMenu.style.display = "none";
  });
  bars3.addEventListener("click", function () {
    headerMenu.style.visibility = "visible";
    headerMenu.style.opacity = "1";
    // headerMenu.style.display = "block";
  });
} else {
  headerMenuClose.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(1024px)";
  });
  bars3.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(0)";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleDropdowns = document.querySelectorAll(".toggle-dropdown");
  const dropdownIcon = document.querySelector(".dropdown-icon");

  toggleDropdowns.forEach((toggle) => {
    const submenu = toggle.nextElementSibling;

    toggle.addEventListener("click", function () {
      dropdownIcon.classList.toggle("rotate-180");

      if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
        submenu.style.opacity = "0";
      } else {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
        submenu.style.opacity = "1";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".email-icon")) {
    const emailIcon = document.querySelector(".email-icon");
    const emailPopup = document.querySelector(".email-popup");
    const closeIcon = document.querySelector(".close-icon");

    emailIcon.addEventListener("click", function () {
      if (window.innerWidth < 1024) {
        emailPopup.classList.toggle("opacity-0");
        emailPopup.classList.toggle("translate-x-full");
        emailPopup.classList.toggle("pointer-events-none");
      } else {
        emailPopup.classList.remove("opacity-0");
        emailPopup.classList.remove("translate-x-full");
        emailPopup.classList.remove("pointer-events-none");
        emailPopup.classList.remove("translate-y-[-50%]");
      }
    });

    closeIcon.addEventListener("click", function () {
      if (window.innerWidth < 1024) {
        emailPopup.classList.add("opacity-0");
        emailPopup.classList.add("translate-x-full");
        emailPopup.classList.add("pointer-events-none");
      } else {
        emailPopup.classList.add("opacity-0");
        emailPopup.classList.add("translate-y-[-50%]");
        emailPopup.classList.add("pointer-events-none");
        emailPopup.classList.add("translate-y-0");
      }
    });
  }

});

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".fetch-content-article")) {
    const toggleButtons = document.querySelectorAll(".toggleButton");
    const tourLists = document.querySelectorAll(".tourList");

    toggleButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        const tourList = tourLists[index];

        button.classList.toggle("rotate-180");
        tourList.classList.toggle("mt-6");

        if (tourList.classList.contains("max-h-0")) {
          tourList.classList.remove("max-h-0", "opacity-0");
          tourList.classList.add("max-h-screen", "opacity-100");
        } else {
          tourList.classList.add("max-h-0", "opacity-0");
          tourList.classList.remove("max-h-screen", "opacity-100");
        }
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const faqBtn = document.querySelectorAll(".faq-btn");
  const faqAnswers = document.querySelectorAll(".faq-answer");
  const faqNumbers = document.querySelectorAll(".faq-number");

  faqBtn.forEach((button, index) => {
    button.addEventListener("click", function () {
      const faqAnswer = faqAnswers[index];
      const faqNumber = faqNumbers[index];

      button.classList.toggle("rotate-180");
      faqAnswer.classList.toggle("mt-2");

      faqNumber.classList.toggle("bg-secondary-600");
      faqNumber.classList.toggle("text-white");

      if (faqAnswer.classList.contains("max-h-0")) {
        faqAnswer.classList.remove("max-h-0", "opacity-0");
        faqAnswer.classList.add("max-h-screen", "opacity-100");
      } else {
        faqAnswer.classList.add("max-h-0", "opacity-0");
        faqAnswer.classList.remove("max-h-screen", "opacity-100");
      }
    });
  });
});

// position fixed
if (document.querySelector(".floating-icons")) {
  const media = window.matchMedia("screen and (min-width:1540px)");
  if (media.matches) {
    const floatingIconEl = document.querySelector(".floating-icons");
    const footerEl = document.querySelector("footer");
    const footerElOffsetTop =
      footerEl.getBoundingClientRect().top + window.scrollY;

    function updateFloatingIconPosition() {
      const windowHeight = window.innerHeight;
      const floatingIconHeight = floatingIconEl.offsetHeight;

      if (window.scrollY + windowHeight > footerElOffsetTop) {
        floatingIconEl.style.position = "absolute";
        floatingIconEl.style.top = `${footerElOffsetTop - floatingIconHeight}px`;
        floatingIconEl.style.bottom = "unset";
      } else {
        floatingIconEl.style.position = "fixed";
        floatingIconEl.style.bottom = "20px";
        floatingIconEl.style.top = "unset";
      }
    }

    updateFloatingIconPosition();
    window.addEventListener("scroll", updateFloatingIconPosition);
    window.addEventListener("resize", updateFloatingIconPosition);
  } else {
    const footerEl = document.querySelector("footer");
    const floatingIconEl = document.querySelector(".floating-icons");

    window.addEventListener("scroll", function () {
      const st = this.scrollY;
      const footerElOffsetTop =
        footerEl.getBoundingClientRect().top + window.scrollY;

      if (st + window.innerHeight > footerElOffsetTop) {
        floatingIconEl.style.position = "absolute";
        floatingIconEl.style.top = `${footerElOffsetTop - floatingIconEl.offsetHeight
          }px`;
        floatingIconEl.style.bottom = "unset";
      } else {
        floatingIconEl.style.position = "fixed";
        floatingIconEl.style.bottom = "0";
        floatingIconEl.style.top = "unset";
      }
    });
  }
}



// fetch services
document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggleButton");
  toggleButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const fetchContentArticle =
        button.parentElement.parentElement.querySelector(
          ".fetch-content-article"
        );
      if (fetchContentArticle) {
        const cmsQuery = fetchContentArticle.getAttribute("data-catid");
        console.log(cmsQuery);
        async function firstContent() {
          const firstResponse = await fetch(
            `/article-load-items.bc?catid=${cmsQuery}`
          );
          const firstData = await firstResponse.text();
          fetchContentArticle.innerHTML = firstData;
        }
        firstContent();
      }
    });
  });
});

// fetch services image
document.addEventListener("DOMContentLoaded", function () {


  const fetchContainerArticle = document.querySelector(".fetch-container-article");
  if (fetchContainerArticle) {
    const cmsGids = fetchContainerArticle.getAttribute("data-gids");
    cmsQueryItems = cmsGids.split(",");
    let counter = 1;
    cmsQueryItems.forEach((cmsQueryItem) => {
      async function fetchGids() {
        const firstResponse = await fetch(
          `/article-image-load-items.bc?id=${cmsQueryItem}`
        );
        const firstData = await firstResponse.text();
        const fetchContentArticleImage = document.querySelector(`.fetch-content-article-image-${counter}`);
        fetchContentArticleImage.innerHTML = firstData;
        counter++
      }
      fetchGids();
    })

  }

  if(window.innerWidth < 1024){
    const sliders = document.querySelectorAll('.slider'); 
  const prevButtons = document.querySelectorAll('.prev'); 
  const nextButtons = document.querySelectorAll('.next'); 
  
  function updateSlider(slider, currentIndex) {
    const slides = slider.querySelector('.slides');
    const offset = -currentIndex * 280; 
    slides.style.transform = `translateX(${offset}px)`;
    console.log(offset);
  }
  
  function nextSlide(event) {
    const slider = event.target.closest('.slider');
    const slideItems = slider.querySelectorAll('.slide'); 
    const slideCount = slideItems.length; 
    let currentIndex = parseInt(slider.getAttribute('data-current-index')) || 0;
    currentIndex = (currentIndex + 1) % slideCount; 
    slider.setAttribute('data-current-index', currentIndex);
    updateSlider(slider, currentIndex);
  }
  
  function prevSlide(event) {
    const slider = event.target.closest('.slider');
    const slideItems = slider.querySelectorAll('.slide'); 
    const slideCount = slideItems.length; 
    let currentIndex = parseInt(slider.getAttribute('data-current-index')) || 0;
    currentIndex = (currentIndex - 1 + slideCount) % slideCount; 
    slider.setAttribute('data-current-index', currentIndex);
    updateSlider(slider, currentIndex);
  }
  
  nextButtons.forEach((nextButton) => {
    nextButton.addEventListener('click', nextSlide);
  });
  
  prevButtons.forEach((prevButton) => {
    prevButton.addEventListener('click', prevSlide);
  });

  }
  
  const sliders = document.querySelectorAll('.slider'); 
  const prevButtons = document.querySelectorAll('.prev'); 
  const nextButtons = document.querySelectorAll('.next'); 
  
  function updateSlider(slider, currentIndex) {
    const slides = slider.querySelector('.slides');
    const slideWidth = slides.querySelector('.slide').clientWidth;
    const offset = -currentIndex * slideWidth; 
    slides.style.transform = `translateX(${offset}px)`;
  }
  
  function nextSlide(event) {
    const slider = event.target.closest('.slider');
    const slideItems = slider.querySelectorAll('.slide'); 
    const slideCount = slideItems.length; 
    let currentIndex = parseInt(slider.getAttribute('data-current-index')) || 0;
    currentIndex = (currentIndex + 1) % slideCount; 
    slider.setAttribute('data-current-index', currentIndex);
    updateSlider(slider, currentIndex);
  }
  
  function prevSlide(event) {
    const slider = event.target.closest('.slider');
    const slideItems = slider.querySelectorAll('.slide'); 
    const slideCount = slideItems.length; 
    let currentIndex = parseInt(slider.getAttribute('data-current-index')) || 0;
    currentIndex = (currentIndex - 1 + slideCount) % slideCount; 
    slider.setAttribute('data-current-index', currentIndex);
    updateSlider(slider, currentIndex);
  }
  
  nextButtons.forEach((nextButton) => {
    nextButton.addEventListener('click', nextSlide);
  });
  
  prevButtons.forEach((prevButton) => {
    prevButton.addEventListener('click', prevSlide);
  });

});


if (document.querySelectorAll(".see-more-btn")) {
  document.addEventListener("DOMContentLoaded", function () {
    const seeMoreBtns = document.querySelectorAll(".see-more-btn");
    const informationArticles = document.querySelectorAll(
      ".information-article"
    );

    seeMoreBtns.forEach((btn, index) => {
      btn.addEventListener("click", function () {
        const informationArticle = informationArticles[index];
        informationArticle.classList.toggle("line-clamp-7");
      });
    });
  });
}

function uploadDocumentFooter(args) {
  document.querySelector("#contact-form-resize .Loading_Form").style.display =
    "block";
  const captcha = document
    .querySelector("#contact-form-resize")
    .querySelector("#captchaContainer input[name='captcha']").value;
  const captchaid = document
    .querySelector("#contact-form-resize")
    .querySelector("#captchaContainer input[name='captchaid']").value;
  const stringJson = JSON.stringify(args.source?.rows[0]);
  $bc.setSource("cms.uploadFooter", {
    value: stringJson,
    captcha: captcha,
    captchaid: captchaid,
    run: true,
  });
}

function refreshCaptchaFooter(e) {
  $bc.setSource("captcha.refreshFooter", true);
}

async function OnProcessedEditObjectFooter(args) {
  var response = args.response;
  var json = await response.json();
  var errorid = json.errorid;
  if (errorid == "6") {
    document.querySelector("#contact-form-resize .Loading_Form").style.display =
      "none";
    document.querySelector("#contact-form-resize .message-api").innerHTML =
      "Your request has been successfully registered.";
  } else {
    refreshCaptchaFooter();
    setTimeout(() => {
      document.querySelector(
        "#contact-form-resize .Loading_Form"
      ).style.display = "none";
      document.querySelector("#contact-form-resize .message-api").innerHTML =
        "An error occurred, please try again.";
    }, 2000);
  }
}

async function RenderFormFooter() {
  var inputElementVisa7 = document.querySelector(
    ".username-form input[data-bc-text-input]"
  );
  inputElementVisa7.setAttribute("placeholder", "Name");

  var inputElementVisa7 = document.querySelector(
    " .email-form input[data-bc-text-input]"
  );
  inputElementVisa7.setAttribute("placeholder", "Email");

  var inputElementVisa7 = document.querySelector(
    " .number-form input[data-bc-text-input]"
  );
  inputElementVisa7.setAttribute("placeholder", "Phone Number");

  var inputElementVisa7 = document.querySelector(
    " .message-form input[data-bc-text-input]"
  );
  inputElementVisa7.setAttribute("placeholder", "Message");
}

if (document.querySelector(".services-swiper")) {
  var servicesSwiper = new Swiper(".services-swiper", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });
}

if (document.querySelector(".services-swiper-mobile")) {
  var servicesSwiperMobile = new Swiper(".services-swiper-mobile", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });
}




if (document.querySelector(".services-list-swiper-mobile")) {
  var servicesListSwiperMobile = new Swiper(".services-list-swiper-mobile", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });
}

if (document.querySelector(".hotel-list-swiper")) {
  var hotelListSwiper = new Swiper(".hotel-list-swiper", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });
}

if (document.querySelector(".hotel-list-swiper-mobile")) {
  var hotelListSwiperMobile = new Swiper(".hotel-list-swiper-mobile", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

if (document.querySelector(".contact-swiper")) {
  var contactSwiper = new Swiper(".contact-swiper", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });
}

if (document.querySelector(".swiperMain")) {
  var swiperMain = new Swiper(".swiperMain", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });
}

if (document.querySelector(".swiperMainContent")) {
  var swiperMainContent = new Swiper(".swiperMainContent", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });
}

if (document.querySelector(".swiper-main-mobile")) {
  var swiperMainMobile = new Swiper(".swiper-main-mobile", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });
}

if (document.querySelector(".swiper-main-content-mobile")) {
  var swiperMainContentMobile = new Swiper(".swiper-main-content-mobile", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

