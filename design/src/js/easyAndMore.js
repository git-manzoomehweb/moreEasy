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


document.addEventListener('DOMContentLoaded', function () {
  const emailIcon = document.querySelector('.email-icon');
  const emailPopup = document.querySelector('.email-popup');
  const closeIcon = document.querySelector('.close-icon');

  emailIcon.addEventListener('click', function () {
      if (window.innerWidth < 1024) {
          emailPopup.classList.toggle('opacity-0'); // Toggle opacity for mobile
          emailPopup.classList.toggle('translate-x-full'); // Toggle translate for mobile
          emailPopup.classList.toggle('pointer-events-none'); // Allow pointer events when visible
      } else {
          emailPopup.classList.remove('opacity-0'); // Show popup for desktop
          emailPopup.classList.remove('translate-x-full'); // Reset translate for desktop
          emailPopup.classList.remove('pointer-events-none'); // Allow pointer events
          emailPopup.classList.add('translate-y-0'); // Move to center for desktop
      }
  });

  closeIcon.addEventListener('click', function () {
      if (window.innerWidth < 1024) {
          emailPopup.classList.add('opacity-0'); // Hide popup
          emailPopup.classList.add('translate-x-full'); // Add translate for hiding
          emailPopup.classList.add('pointer-events-none'); // Disable pointer events
      } else {
          emailPopup.classList.add('opacity-0'); // Hide popup
          emailPopup.classList.add('translate-y-[-50%]'); // Move up for hiding
          emailPopup.classList.add('pointer-events-none'); // Disable pointer events
      }
  });
});




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