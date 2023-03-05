const display = document.querySelector(".digitsScreen");
const disgitsInput = document.querySelector(".disgitsInput");

let lastInputIsOperator = false;

disgitsInput.addEventListener("click", (e) => {
  if (e.target.tagName == "INPUT") {
    if (display.innerHTML == "Error" || display.innerHTML == "0" ) {
      display.innerHTML = "";
    }
    const lastChar = display.textContent.slice(-1);
    switch (e.target.value ) {
      case "=":
        if (display.textContent) {
          try {
            display.innerHTML = eval(display.textContent);
          } catch {
            display.innerHTML = "Error";
          }
        }
        break;
      case "AC":
        display.innerHTML = "";
        break;
      case "C":
        display.innerHTML = display.textContent.slice(0, -1);
        lastInputIsOperator = false;
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        if (!lastInputIsOperator && lastChar !== "." && lastChar !== "%") {
          display.textContent += e.target.value;
          lastInputIsOperator = true;
        }
        break;
      case ".":
      case "%":
        if (!lastInputIsOperator && !display.textContent.includes(e.target.value)) {
          display.textContent += e.target.value;
          lastInputIsOperator = e.target.value === "%";
        }
        break;
      default:
        display.textContent += e.target.value;
        lastInputIsOperator = false;
        break;
    }
  }
});

// Bu kodda, son karakter lastChar değişkeni ile alınarak kontrol ediliyor. Operatör eklenmek istendiğinde son karakterin nokta veya yüzde işareti olmadığından ve önceki input alanında operatör olmadığından emin olunuyor. Nokta veya yüzde işareti eklenmek istendiğinde de benzer bir kontrol yapılıyor. Son inputun operatör olmadığından ve zaten bu işaretin olmadığından emin olunuyor. Bu kontroller sonucunda istenmeyen simge kullanımları engelleniyor.




