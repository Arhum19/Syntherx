
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

