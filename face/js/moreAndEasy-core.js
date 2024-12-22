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
});

document.addEventListener("DOMContentLoaded", function () {
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
const media = window.matchMedia("screen and (min-width:1540px)");
if (media.matches) {
  const floatingIconEl = document.querySelector(".floating-icons");
  floatingIconEl.style.position = "fixed";
  floatingIconEl.style.bottom = "0";
  floatingIconEl.style.top = "unset";
} else {
  const footerEl = document.querySelector("footer");
  const footerElOffsetTop = footerEl.offsetTop;
  const floatingIconEl = document.querySelector(".floating-icons");
  window.addEventListener("scroll", function () {
    const st = this.scrollY;

    if (st + window.innerHeight > footerElOffsetTop) {
      floatingIconEl.style.position = "absolute";
      floatingIconEl.style.top = `${
        footerElOffsetTop - floatingIconEl.offsetHeight
      }px`;
      floatingIconEl.style.bottom = "unset";
    } else {
      floatingIconEl.style.position = "fixed";
      floatingIconEl.style.bottom = "0";
      floatingIconEl.style.top = "unset";
    }
  });
}

function loadContentHomePage() {
  loadSearchEngine("search-engine.bc", "searchbox");
}
async function loadSearchEngine(url, sectionload) {
  try {
    var xhrobj = new XMLHttpRequest();
    xhrobj.open("GET", url);
    xhrobj.send();

    xhrobj.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var container = document.getElementById(sectionload);
        container.innerHTML = xhrobj.responseText;

        var scripts = container.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
          var scriptTag = document.createElement("script");

          if (scripts[i].src) {
            scriptTag.src = scripts[i].src;
            scriptTag.async = false;
          } else {
            scriptTag.text = scripts[i].textContent;
          }

          document.head
            .appendChild(scriptTag)
            .parentNode.removeChild(scriptTag);
        }
      }
    };
  } catch (error) {}
}
