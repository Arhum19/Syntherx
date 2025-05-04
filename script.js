
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

