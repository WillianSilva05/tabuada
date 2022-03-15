function ver() {
    event.preventDefault();

    var select = document.getElementById("tabuada");

    var result = [];
    result[1] = document.getElementById("result");
    result[2] = document.getElementById("result1");
    result[3] = document.getElementById("result2");
    result[4] = document.getElementById("result3");
    result[5] = document.getElementById("result4");
    result[6] = document.getElementById("result5");
    result[7] = document.getElementById("result6");
    result[8] = document.getElementById("result7");
    result[9] = document.getElementById("result8");
    result[10] = document.getElementById("result9");

    if (select.options[select.selectedIndex].value == "Tabuada do dois") {
        var dois = 0;
        for (cont = 1; cont < 11; cont++) {
            dois += 2;
            result[cont].innerHTML =  "2 x " + cont + " = " + dois;
        }

    } else if (select.options[select.selectedIndex].value == "Tabuada do três") {
        var tres = 0;
        for (cont = 1; cont < 11; cont++) {
            tres += 3;
            result[cont].innerHTML =  "3 x " + cont + " = " + tres;
        }

    } else if (select.options[select.selectedIndex].value == "Tabuada do quatro") {
        var quatro = 0;
        for (cont = 1; cont < 11; cont++) {
            quatro += 4;
            result[cont].innerHTML =  "4 x " + cont + " = " + quatro;
        }

    } else if (select.options[select.selectedIndex].value == "Tabuada do cinco") {
        var cinco = 0;
        for (cont = 1; cont < 11; cont++) {
            cinco += 5;
            result[cont].innerHTML =  "5 x " + cont + " = " + cinco;
        }
    } else if (select.options[select.selectedIndex].value == "Tabuada do seis") {
        var seis = 0;
        for (cont = 1; cont < 11; cont++) {
            seis += 6;
            result[cont].innerHTML =  "6 x " + cont + " = " + seis;
        }
    } else if (select.options[select.selectedIndex].value == "Tabuada do sete") {
        var sete = 0;
        for (cont = 1; cont < 11; cont++) {
            sete += 7;
            result[cont].innerHTML =  "7 x " + cont + " = " + sete;
        }
    } else if (select.options[select.selectedIndex].value == "Tabuada do oito") {
        var oito = 0;
        for (cont = 1; cont < 11; cont++) {
            oito += 8;
            result[cont].innerHTML =  "8 x " + cont + " = " + oito;
        }
    } else if (select.options[select.selectedIndex].value == "Tabuada do nove") {
        var nove = 0;
        for (cont = 1; cont < 11; cont++) {
            nove += 9;
            result[cont].innerHTML =  "9 x " + cont + " = " + nove;
        }
    } else if (select.options[select.selectedIndex].value == "Tabuada do dez") {
        var dez = 0;
        for (cont = 1; cont < 11; cont++) {
            dez += 10;
            result[cont].innerHTML =  "10 x " + cont + " = " + dez;
        }
    }
}