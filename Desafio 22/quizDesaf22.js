const prompt = require('prompt-sync')();
//const prompt = require('prompt-sync')({sigint:true});

    function perguntasQuiz(){
        let op = 10;
        let pontuacao = 0;

        while (op != 0) {
            op = parseInt(prompt("Qual tema você deseja jogar?  1 - Zoologia  2 - Astronomia 3 - Futebol  0 - Sair "));

            switch (op) {
                case 0:
                    console.log("Você saiu!");
                    break;

                case 1:
                    pontuacao += perguntasZoologia();
                    console.log(`Sua pontuação foi: ${pontuacao}`);
                    break;

                case 2:
                    pontuacao += perguntasAstronomia();
                    break;

                case 3:
                    pontuacao += perguntasFutebol();
                    break;

                default:
                    console.log("Digite uma opção válida.");
                    break;
            }
        }
        console.log(`Sua pontuação foi: ${pontuacao}`);
        //return pontuacao;
    }


    function perguntasZoologia(){
        //let pontuacao;
        resposta = prompt("O maior animal que já vimos no planeta foi um dinossauro! Verdadeiro ou falso? ");
            if (resposta.toLowerCase() === "falso") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta. A baleia azul foi o maior animal que já viveu.");
            }
            resposta = prompt("As tartarugas podem viver mais de 100 anos. Verdadeiro ou falso? ");
            if (resposta.toLowerCase() === "verdadeiro") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta.");
            }
            resposta = prompt("As aranhas são insetos. Verdadeiro ou falso? ");
            if (resposta.toLowerCase() === "falso") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta. Elas são aracnídeos.");
            }
        //return pontuacao;
    }

    function perguntasAstronomia(){
        //let pontuacao;
        resposta = prompt("O maior animal que já vimos no planeta foi um dinossauro! Verdadeiro ou falso? ");
            if (resposta.toLowerCase() === "falso") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta. A baleia azul foi o maior animal que já viveu.");
            }
            resposta = prompt("As tartarugas podem viver mais de 100 anos. Verdadeiro ou falso? ");
            if (resposta.toLowerCase() === "verdadeiro") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta.");
            }
            resposta = prompt("As aranhas são insetos. Verdadeiro ou falso? ");
            if (resposta.toLowerCase() === "falso") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta. Elas são aracnídeos.");
            }
        //return pontuacao;
    }

    function perguntasFutebol(){
        //let pontuacao;
        resposta = prompt("Real Madrid é o maior campeão de Liga dos Campeões. Verdadeiro ou falso? ");
            if (resposta.toLowerCase() === "verdadeiro") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta.");
            }
            resposta = prompt("Vasco tem a maior torcida do Brasil. Verdadeiro ou falso? ");
            if (resposta.toLowerCase() === "falso") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta.");
            }
            resposta = prompt("Santos é o maior time brasileiro. Verdadeiro ou falso? ");
            if (resposta.toLowerCase() === "verdadeiro") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta.");
            }
        //return pontuacao;
    }

    const jogador = prompt('Qual o seu nome? ');

    let pontos = perguntasQuiz();

    console.log(`Obrigado por jogar, ${jogador}! Sua pontuação foi: ${pontos}`);