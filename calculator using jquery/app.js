$(document).ready(function () {
  let displayresult = "";

  function updateDisplay() {
    $("#result").text(displayresult);
  }

  $(".btns").click(function () {
    let btnvalue = $(this).text();
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
      let match = displayresult.match(/([/d.]+)([+\-*/])([/d.]+)$/);
      if (match) {
        console.log("match");
        let first = parseFloat(match[1]);
        let operator = match[2];
        let last = parseFloat(match[3]);

        let per_value = (last / 100) * first;

        displayresult = displayresult.replace(
          /([/d.]+)$/,
          per_value.toString()
        );
      } else if (displayresult.length > 0) {
        displayresult = (parseFloat(displayresult) / 100).toString();
      }
    } else {
      displayresult += btnvalue;
    }

    updateDisplay();
  });
});
