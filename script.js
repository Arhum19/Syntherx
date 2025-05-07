
  const fullText = "SyntherX";
  const target = document.querySelector(".auto-type");
  let i = 0;

  function type() {
    if (i < fullText.length) {
      if (fullText[i] === "X") {
        target.innerHTML += `<span class="blue">X</span>`;
      } else {
        target.innerHTML += fullText[i];
      }
      i++;
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        target.innerHTML = "";
        i = 0;
        type(); // loop again
      }, 500); // wait before restarting
    }
  }

  type();

//for navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const servicesSection = document.querySelector("#services");
    const servicesTop = servicesSection.getBoundingClientRect().top;

    if (servicesTop <= 90) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });



  // PROJECT SECTION 

  const container = document.querySelector(".slider-container");
  const items = document.querySelectorAll(".slider-item");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  function getVisibleItemsCount() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  }

  function updateSlider() {
    const itemWidth = items[0].offsetWidth + 16;
    const maxIndex = items.length - getVisibleItemsCount();
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
    const translateX = -currentIndex * itemWidth;
    container.style.transform = `translateX(${translateX}px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    updateSlider();
  });

  window.addEventListener("resize", updateSlider);
  window.addEventListener("load", updateSlider);
  // PROJECT SECTION 
