let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        if (buttonText == "℃") {
            var x = screen.value;
            x = ((x - 32) * 5) / 9;
            screen.value = x;
        } else if (buttonText == "DEL") {
            screen.value = screenValue.slice(0, -1);
            screenValue = screen.value;
        } else if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == "℉") {
            var x = screen.value;
            x = ((x - 32) * 5) / 9;
            screen.value = x;
        } else if (buttonText == "tan") {
            var x = screen.value;
            x = (x * Math.PI) / 180;
            screen.value = Math.tan(x);
            screenValue = screen.value;
        } else if (buttonText == "cos") {
            var x = screen.value;
            x = (x * Math.PI) / 180;
            screen.value = Math.cos(x);
            screenValue = screen.value;
        } else if (buttonText == "sin") {
            var x = screen.value;
            x = (x * Math.PI) / 180;
            screen.value = Math.sin(x);
            screenValue = screen.value;
        } else if (buttonText == "log10") {
            var x = screen.value;
            screen.value = Math.log10(x);
            screenValue = screen.value;
        } else if (buttonText == "log") {
            var x = screen.value;
            screen.value = Math.log(x);
            screenValue = screen.value;
        } else if (buttonText == "π") {
            var x = screen.value;
            screen.value = x * Math.PI;
        } else if (buttonText == "1/x") {
            screen.value = 1 / screen.value;
        } else if (buttonText == "x²") {
            screen.value = screen.value * screen.value;
        } else if (buttonText == "%") {
            screen.value = screen.value / 100;
        } else if (buttonText == "√") {
            screen.value = Math.sqrt(screen.value);
        } else if (buttonText == "∛") {
            screen.value = Math.cbrt(screen.value);
        } else if (buttonText == "x!") {
            let fact = 1;
            for (i = 1; i <= screen.value; i++) {
                fact = fact * i;
            }
            screen.value = fact;
        } else {
        }
    });
}
