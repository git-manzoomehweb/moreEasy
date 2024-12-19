const headerMenu = document.querySelector(".header-menu");
const headerMenuClose = document.querySelector(".header-menu-close");
const bars3 = document.querySelector(".bars3");

if (innerWidth >= 1024) {
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


document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll(".toggleButton");
  const tourLists = document.querySelectorAll(".tourList");

  toggleButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
          const tourList = tourLists[index];

          button.classList.toggle("rotate-180")
          tourList.classList.toggle("mt-6")

          if (tourList.classList.contains('max-h-0')) {
              tourList.classList.remove('max-h-0', 'opacity-0');
              tourList.classList.add('max-h-screen', 'opacity-100'); 
          } else {
              tourList.classList.add('max-h-0', 'opacity-0');
              tourList.classList.remove('max-h-screen', 'opacity-100');
          }
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const faqBtn = document.querySelectorAll(".faq-btn");
  const faqAnswers = document.querySelectorAll(".faq-answer");

  faqBtn.forEach((button, index) => {
      button.addEventListener('click', function() {
          const faqAnswer = faqAnswers[index];

          button.classList.toggle("rotate-180")
          faqAnswer.classList.toggle("mt-2")

          if (faqAnswer.classList.contains('max-h-0')) {
            faqAnswer.classList.remove('max-h-0', 'opacity-0');
            faqAnswer.classList.add('max-h-screen', 'opacity-100'); 
          } else {
            faqAnswer.classList.add('max-h-0', 'opacity-0');
            faqAnswer.classList.remove('max-h-screen', 'opacity-100');
          }
      });
  });
});