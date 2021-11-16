document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM totalmente carregado");

    const bt1 = document.getElementById("btn1");
    const bt2 = document.getElementById("btn2");
    const bt3 = document.getElementById("btn3");
    const bt4 = document.getElementById("btn4");
    const bt5 = document.getElementById("btn5");
    const bt6 = document.getElementById("btn6");
    const bt7 = document.getElementById("btn7");
    const bt8 = document.getElementById("btn8");
    const bt9 = document.getElementById("btn9");
    const bt0 = document.getElementById("btn0");


    bt1.addEventListener("click", function () {
        let valor1 = document.getElementById("campo1").value;
        let valor2 = document.getElementById("campo2").value;

        if (valor1 == "") {
            document.getElementById("campo1").value = 1;
        }
        else if (valor2 == "") {
            document.getElementById("campo2").value = 1;
        };
    });

    bt2.addEventListener("click", function () {
        let valor1 = document.getElementById("campo1").value;
        let valor2 = document.getElementById("campo2").value;

        if (valor1 == "") {
            document.getElementById("campo1").value = 2;
        }
        else if (valor2 == "") {
            document.getElementById("campo2").value = 2;
        };
    });

    bt3.addEventListener("click", function () {
        let valor1 = document.getElementById("campo1").value;
        let valor2 = document.getElementById("campo2").value;

        if (valor1 == "") {
            document.getElementById("campo1").value = 3;
        }
        else if (valor2 == "") {
            document.getElementById("campo2").value = 3;
        };
    });

    bt4.addEventListener("click", function () {
        let valor1 = document.getElementById("campo1").value;
        let valor2 = document.getElementById("campo2").value;

        if (valor1 == "") {
            document.getElementById("campo1").value = 4;
        }
        else if (valor2 == "") {
            document.getElementById("campo2").value = 4;
        };
    });

    bt5.addEventListener("click", function () {
        let valor1 = document.getElementById("campo1").value;
        let valor2 = document.getElementById("campo2").value;

        if (valor1 == "") {
            document.getElementById("campo1").value = 5;
        }
        else if (valor2 == "") {
            document.getElementById("campo2").value = 5;
        };
    });

    bt6.addEventListener("click", function () {
        let valor1 = document.getElementById("campo1").value;
        let valor2 = document.getElementById("campo2").value;

        if (valor1 == "") {
            document.getElementById("campo1").value = 6;
        }
        else if (valor2 == "") {
            document.getElementById("campo2").value = 6;
        };
    });

    bt7.addEventListener("click", function () {
        let valor1 = document.getElementById("campo1").value;
        let valor2 = document.getElementById("campo2").value;

        if (valor1 == "") {
            document.getElementById("campo1").value = 7;
        }
        else if (valor2 == "") {
            document.getElementById("campo2").value = 7;
        };
    });

    bt8.addEventListener("click", function () {
        let valor1 = document.getElementById("campo1").value;
        let valor2 = document.getElementById("campo2").value;

        if (valor1 == "") {
            document.getElementById("campo1").value = 8;
        }
        else if (valor2 == "") {
            document.getElementById("campo2").value = 8;
        };
    });

    bt9.addEventListener("click", function () {
        let valor1 = document.getElementById("campo1").value;
        let valor2 = document.getElementById("campo2").value;

        if (valor1 == "") {
            document.getElementById("campo1").value = 9;
        }
        else if (valor2 == "") {
            document.getElementById("campo2").value = 9;
        };
    });

    bt0.addEventListener("click", function () {
        let valor1 = document.getElementById("campo1").value;
        let valor2 = document.getElementById("campo2").value;

        if (valor1 == "") {
            document.getElementById("campo1").value = 0;
        }
        else if (valor2 == "") {
            document.getElementById("campo2").value = 0;
        };
    });

    //////////////////////////////////////////////////////

    const btnconf = document.getElementById("btnconfirma");

    const msn3 = document.getElementById("mensagem3");
    const msn4 = document.getElementById("mensagem4");
    const msn5 = document.getElementById("mensagem5");
    const msn6 = document.getElementById("mensagem6");
    const msn7 = document.getElementById("mensagem7");
    const msn8 = document.getElementById("mensagem8");
    const msn9 = document.getElementById("mensagem9");
    const msn10 = document.getElementById("mensagem10");
    const msn11 = document.getElementById("mensagem11");
    const msn12 = document.getElementById("mensagem12");
    const msn13 = document.getElementById("mensagem13");

    msn3.textContent = "";
    msn4.textContent = "";
    msn5.textContent = "";
    msn6.textContent = "";
    msn7.textContent = "";
    msn8.textContent = "";
    msn9.textContent = "";
    msn10.textContent = "";
    msn11.textContent = "";
    msn12.textContent = "";
    msn13.textContent = "";

    let voto17 = 0;
    let voto13 = 0;
    let voto10 = 0;
    let voto20 = 0;
    let voto00 = 0;
    let totalvotos = 0;
    let percentual17 = 0;
    let percentual13 = 0;
    let percentual10 = 0;
    let percentual20 = 0;
    let percentual00 = 0;

    msn4.innerHTML = voto17;
    msn5.innerHTML = percentual17;
    msn6.innerHTML = voto13;
    msn7.innerHTML = percentual13;
    msn8.innerHTML = voto10;
    msn9.innerHTML = percentual10;
    msn10.innerHTML = voto20;
    msn11.innerHTML = percentual20;
    msn12.innerHTML = voto00;
    msn13.innerHTML = percentual00;

    btnconf.addEventListener("click", function () {
        const msn1 = document.getElementById("mensagem1");
        const msn2 = document.getElementById("mensagem2");

        msn1.textContent = "";
        msn2.textContent = "";

        const cp1 = document.getElementById("campo1");
        const cp2 = document.getElementById("campo2");

        let n1 = cp1.value.toString();
        let n2 = cp2.value.toString();
        let cod = n1 + n2;

        switch (cod) {
            case '17':
                msn1.textContent = "BOZOLINO";
                msn2.textContent = "PD";
                break;
            case '13':
                msn1.textContent = "MOLUSCO";
                msn2.textContent = "PE";
                break;
            case '10':
                msn1.textContent = "CRAVELLA";
                msn2.textContent = "PSBD";
                break;
            case '20':
                msn1.textContent = "VITZEL";
                msn2.textContent = "ROUBAR";
                break;
            case '00':
                msn1.textContent = "NULO";
                break;
            default:
                alert("NÚMERO ERRADO");
        };
    });

    btnconf.addEventListener("dblclick", function () {
        const msn1 = document.getElementById("mensagem1");
        const msn2 = document.getElementById("mensagem2");

        msn1.textContent = "";
        msn2.textContent = "";

        const cp1 = document.getElementById("campo1");
        const cp2 = document.getElementById("campo2");

        let n1 = cp1.value.toString();
        let n2 = cp2.value.toString();
        let cod = n1 + n2;

        switch (cod) {
            case '17':
                voto17++;
                let percentual17 = voto17 / 100;

                msn4.innerHTML = voto17;
                msn5.innerHTML = percentual17;
                totalvotos = voto00 + voto10 + voto13 + voto17 + voto20 + voto99;

                msn3.textContent = "Total de votos é: " + totalvotos;
                msn4.textContent = "Total de voto do Bozolino 17 é: " + voto17;
                msn5.textContent = "Percentual de votos do Bozolino 17 é: " + percentual17 + " %";
                break;
            case '13':
                voto13++;
                let percentual13 = voto13 / 100;

                msn6.innerHTML = voto13;
                msn7.innerHTML = percentual13;
                totalvotos = voto00 + voto10 + voto13 + voto17 + voto20 + voto99;

                msn3.textContent = "Total de votos é: " + totalvotos;
                msn6.textContent = "Total de voto do Molusco 13 é: " + voto13;
                msn7.textContent = "Percentual de votos do Molusco 13 é: " + percentual13 + " %";
                break;
            case '10':
                voto10++;
                let percentual10 = voto10 / 100;

                msn8.innerHTML = voto10;
                msn9.innerHTML = percentual10;
                totalvotos = voto00 + voto10 + voto13 + voto17 + voto20 + voto99;

                msn3.textContent = "Total de votos é: " + totalvotos;
                msn8.textContent = "Total de voto do Cravella 10 é: " + voto10;
                msn9.textContent = "Percentual de votos do Cravella 10 é: " + percentual10 + " %";
                break;
            case '20':
                voto20++;
                let percentual20 = voto20 / 100;

                msn10.innerHTML = voto20;
                msn11.innerHTML = percentual20;
                totalvotos = voto00 + voto10 + voto13 + voto17 + voto20 + voto99;

                msn3.textContent = "Total de votos é: " + totalvotos;
                msn10.textContent = "Total de voto do Vitzel 20 é: " + voto20;
                msn11.textContent = "Percentual de votos do Vitzel 20 é: " + percentual20 + " %";
                break;
            case '00':
                voto00++;
                let percentual00 = voto00 / 100;

                msn12.innerHTML = voto00;
                msn13.innerHTML = percentual00;
                totalvotos = voto00 + voto10 + voto13 + voto17 + voto20 + voto99;

                msn3.textContent = "Total de votos é: " + totalvotos;
                msn12.textContent = "Total de voto Nulo 00 é: " + voto00;
                msn13.textContent = "Percentual de votos Nulo 00 é: " + percentual00 + " %";
                break;
            default:
                alert("NÚMERO ERRADO");
        };
        document.getElementById("campo1").value = "";
        document.getElementById("campo2").value = "";
    });

    /////////////////////////////////////////////////////////////////////

    const btnbra = document.getElementById("btnbranco");

    const msn14 = document.getElementById("mensagem14");
    const msn15 = document.getElementById("mensagem15");

    let voto99 = 0;
    let percentual99 = 0;

    msn14.innerHTML = voto99; //element.innerHTML é uma propriedade que examina o código-fonte do HTML.
    msn15.innerHTML = percentual99;

    btnbra.addEventListener("click", function () {
        const msn1 = document.getElementById("mensagem1");
        const msn2 = document.getElementById("mensagem2");

        msn1.textContent = "EM BRANCO";
        msn2.textContent = "";
        
        voto99++;
        let percentual99 = voto99 / 100;

        msn14.innerHTML = voto99;
        msn15.innerHTML = percentual99;
        totalvotos = voto00 + voto10 + voto13 + voto17 + voto20 + voto99;

        msn3.textContent = "Total de votos é: " + totalvotos;
        msn14.textContent = "Total de voto em Branco é: " + voto99;
        msn15.textContent = "Percentual de votos em Branco é: " + percentual99 + " %";

        document.getElementById("campo1").value = "";
        document.getElementById("campo2").value = "";
    });

    const btncorrigir = document.getElementById("btncorrigir");

    btncorrigir.addEventListener("click", function () {
        const msn1 = document.getElementById("mensagem1");
        const msn2 = document.getElementById("mensagem2");

        msn1.textContent = "";
        msn2.textContent = "";
        document.getElementById("campo1").value = "";
        document.getElementById("campo2").value = "";
        
    })
});