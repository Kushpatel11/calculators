$(document).ready(function () {
  let displayresult = "";
  const maxChars = 132; // Prevents adding more characters when full

  function updateDisplay() {
    let resultElement = $("#result");
    resultElement.text(displayresult);

    // Dynamic font size reduction based on length
    let fontSize;
    if (displayresult.length > 81) {
      fontSize = "0.8rem";
    } else if (displayresult.length > 18) {
      fontSize = "1rem";
    } else if (displayresult.length > 13) {
      fontSize = "1.5rem";
    } else {
      fontSize = "2rem";
    }

    resultElement.css({
      "font-size": fontSize,
      "word-break": "break-all",
      "text-align": "right",
      "max-width": "100%",
    });
  }

  function handleInput(btnvalue) {
    if (btnvalue === "C") {
      displayresult = "";
    } else if (btnvalue === "x") {
      displayresult = displayresult.slice(0, -1);
    } else if (btnvalue === "=") {
      try {
        displayresult = eval(displayresult).toString();
      } catch {
        displayresult = "Error";
      }
    } else if (btnvalue === "+/-") {
      if (displayresult.length > 0) {
        displayresult = (parseFloat(displayresult) * -1).toString();
      }
    } else if (btnvalue === "%") {
      let match = displayresult.match(/([\d.]+)([+\-*/])([\d.]+)$/);
      if (match) {
        let first = parseFloat(match[1]);
        let operator = match[2];
        let last = parseFloat(match[3]);

        let per_value = (last / 100) * first;
        displayresult = displayresult.replace(
          /([\d.]+)$/,
          per_value.toString()
        );
      } else if (displayresult.length > 0) {
        displayresult = (parseFloat(displayresult) / 100).toString();
      }
    } else {
      // Prevent adding more characters if max limit is reached
      if (displayresult.length >= maxChars) {
        return;
      }
      displayresult += btnvalue;
    }

    updateDisplay();
  }

  $(".btns").click(function () {
    handleInput($(this).text());
  });

  $(document).keydown(function (event) {
    let key = event.key;

    if (key >= "0" && key <= "9") {
      handleInput(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
      handleInput(key);
    } else if (key === "Enter") {
      handleInput("=");
    } else if (key === "Backspace") {
      handleInput("x");
    } else if (key === "Escape") {
      handleInput("C");
    } else if (key === "%") {
      handleInput("%");
    }
  });
});
