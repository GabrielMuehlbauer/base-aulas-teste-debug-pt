class Service {
    Somar(num1, num2) {
        if (num1 === undefined || num2 === undefined) {
            throw new Error("Envie todos os campos!");
        }
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
            throw new Error("Enviar somente números");
        }

        return num1 + num2;
    }

    Subtrair(num1, num2) {
        if (num1 === undefined || num2 === undefined) {
            throw new Error("Envie todos os campos!");
        }
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
            throw new Error("Enviar somente números");
        }

        return num1 - num2;
    }

    Multiplicar(num1, num2) {
        if (num1 === undefined || num2 === undefined) {
            throw new Error("Envie todos os campos!");
        }
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
            throw new Error("Enviar somente números");
        }

        return num1 * num2;
    }

    Dividir(num1, num2) {
        if (num1 === undefined || num2 === undefined) {
            throw new Error("Envie todos os campos!");
        }
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
            throw new Error("Enviar somente números");
        }

        if (num2 === 0) {
            throw new Error("Undefined");
        }

        return num1 / num2;
    }

    Potencia(base, expoente) {
        if (base === undefined || expoente === undefined) {
            throw new Error("Envie todos os campos!");
        }
        if (typeof base !== 'number' || typeof expoente !== 'number' || isNaN(base) || isNaN(expoente)) {
            throw new Error("Enviar somente números");
        }

        return Math.pow(base, expoente);
    }

    Radiciar(radicando, indice) {
        if (radicando === undefined || indice === undefined) {
            throw new Error("Envie todos os campos!");
        }
        if (typeof radicando !== 'number' || typeof indice !== 'number' || isNaN(radicando) || isNaN(indice)) {
            throw new Error("Enviar somente números");
        }

        if (indice === 0) {
            throw new Error("Índice não pode ser zero");
        }

        // Validação: Raiz de número negativo com índice par (ex: raiz quadrada de -4)
        if (radicando < 0 && indice % 2 === 0) {
            throw new Error("Não existe raiz real de número negativo com índice par");
        }

        // Tratamento JavaScript: Raiz de número negativo com índice ímpar (ex: CT62 - raiz cúbica de -8)
        if (radicando < 0) {
            return -Math.pow(Math.abs(radicando), 1 / indice);
        }

        // Caminho feliz padrão
        return Math.pow(radicando, 1 / indice);
    }
}

export default new Service()