class Service {
    Somar(num1, num2) {
        if (num1 === undefined || num2 === undefined) {
            return "Envie todos os campos!";
        }
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
            return "Enviar somente números";
        }

        return num1 + num2;
    }

    Subtrair(num1, num2) {
        if (num1 === undefined || num2 === undefined) {
            return "Envie todos os campos!";
        }
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
            return "Enviar somente números";
        }

        return num1 - num2;
    }

    Multiplicar(num1, num2) {
        if (num1 === undefined || num2 === undefined) {
            return "Envie todos os campos!";
        }
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
            return "Enviar somente números";
        }

        return num1 * num2;
    }

    Dividir(num1, num2) {
        if (num1 === undefined || num2 === undefined) {
            return "Envie todos os campos!";
        }
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
            return "Enviar somente números";
        }

        if (num2 === 0) {
            return "Undefined";
        }

        return num1 / num2;
    }
}

export default new Service()