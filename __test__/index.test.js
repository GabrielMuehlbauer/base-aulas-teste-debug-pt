import Service from "../src/services/exercicios.js";

describe("Testes da Calculadora - Adição", () => {
    // Cálculos Matemáticos
    it("CT01: Deve somar 2 e 95 e retornar 97", () => {
        expect(Service.Somar(2, 95)).toBe(97);
    });
    it("CT02: Deve somar -5 e 10 e retornar 5", () => {
        expect(Service.Somar(-5, 10)).toBe(5);
    });
    it("CT03: Deve somar 10 e -5 e retornar 5", () => {
        expect(Service.Somar(10, -5)).toBe(5);
    });
    it("CT04: Deve somar -5 e -10 e retornar -15", () => {
        expect(Service.Somar(-5, -10)).toBe(-15);
    });
    it("CT05: Deve somar 0.5 e 1.7 e retornar 2.2", () => {
        expect(Service.Somar(0.5, 1.7)).toBe(2.2);
    });
    it("CT08: Deve somar 0 e 1 e retornar 1", () => {
        expect(Service.Somar(0, 1)).toBe(1);
    });
    it("CT09: Deve somar 1 e 0 e retornar 1", () => {
        expect(Service.Somar(1, 0)).toBe(1);
    });

    // Caminhos de Exceção (Validações de Tipo)
    it("CT06 e CT07: Deve retornar erro ao enviar letras em vez de números", () => {
        expect(Service.Somar('a', 1)).toBe("Enviar somente números");
        expect(Service.Somar(1, 'a')).toBe("Enviar somente números");
    });

    // Caminhos de Exceção (Validações de Preenchimento)
    it("CT10, CT11 e CT12: Deve retornar erro ao omitir parâmetros", () => {
        expect(Service.Somar(1)).toBe("Envie todos os campos!"); // Falta o segundo
        expect(Service.Somar(undefined, 1)).toBe("Envie todos os campos!"); // Falta o primeiro
        expect(Service.Somar()).toBe("Envie todos os campos!"); // Faltam os dois
    });
});

describe("Testes da Calculadora - Subtração", () => {
    // Cálculos Matemáticos
    it("CT13: Deve subtrair 2 e 95 e retornar -93", () => {
        expect(Service.Subtrair(2, 95)).toBe(-93);
    });
    it("CT14: Deve subtrair -5 e 10 e retornar -15", () => {
        expect(Service.Subtrair(-5, 10)).toBe(-15);
    });
    it("CT15: Deve subtrair 10 e -5 e retornar 15", () => {
        expect(Service.Subtrair(10, -5)).toBe(15);
    });
    it("CT16: Deve subtrair -5 e -10 e retornar 5", () => {
        expect(Service.Subtrair(-5, -10)).toBe(5);
    });
    it("CT17: Deve subtrair 0.5 e 1.7 e retornar -1.2", () => {
        expect(Service.Subtrair(0.5, 1.7)).toBe(-1.2);
    });
    it("CT20: Deve subtrair 0 e 1 e retornar -1", () => {
        expect(Service.Subtrair(0, 1)).toBe(-1);
    });
    it("CT21: Deve subtrair 1 e 0 e retornar 1", () => {
        expect(Service.Subtrair(1, 0)).toBe(1);
    });

    // Caminhos de Exceção
    it("CT18 e CT19: Deve retornar erro ao enviar letras", () => {
        expect(Service.Subtrair('a', 1)).toBe("Enviar somente números");
        expect(Service.Subtrair(1, 'a')).toBe("Enviar somente números");
    });
    it("CT22, CT23 e CT24: Deve retornar erro ao omitir parâmetros", () => {
        expect(Service.Subtrair(1)).toBe("Envie todos os campos!");
        expect(Service.Subtrair(undefined, 1)).toBe("Envie todos os campos!");
        expect(Service.Subtrair()).toBe("Envie todos os campos!");
    });
});

describe("Testes da Calculadora - Multiplicação", () => {
    // Cálculos Matemáticos
    it("CT25: Deve multiplicar 2 e 95 e retornar 190", () => {
        expect(Service.Multiplicar(2, 95)).toBe(190);
    });
    it("CT26: Deve multiplicar -5 e 10 e retornar -50", () => {
        expect(Service.Multiplicar(-5, 10)).toBe(-50);
    });
    it("CT27: Deve multiplicar 10 e -5 e retornar -50", () => {
        expect(Service.Multiplicar(10, -5)).toBe(-50);
    });
    it("CT28: Deve multiplicar -5 e -10 e retornar 50", () => {
        expect(Service.Multiplicar(-5, -10)).toBe(50);
    });
    it("CT29: Deve multiplicar 0.5 e 1.7 e retornar 0.85", () => {
        expect(Service.Multiplicar(0.5, 1.7)).toBe(0.85);
    });
    it("CT32: Deve multiplicar 0 e 1 e retornar 0", () => {
        expect(Service.Multiplicar(0, 1)).toBe(0);
    });
    it("CT33: Deve multiplicar 1 e 0 e retornar 0", () => {
        expect(Service.Multiplicar(1, 0)).toBe(0);
    });

    // Caminhos de Exceção
    it("CT30 e CT31: Deve retornar erro ao enviar letras", () => {
        expect(Service.Multiplicar('a', 1)).toBe("Enviar somente números");
        expect(Service.Multiplicar(1, 'a')).toBe("Enviar somente números");
    });
    it("CT34, CT35 e CT36: Deve retornar erro ao omitir parâmetros", () => {
        expect(Service.Multiplicar(1)).toBe("Envie todos os campos!");
        expect(Service.Multiplicar(undefined, 1)).toBe("Envie todos os campos!");
        expect(Service.Multiplicar()).toBe("Envie todos os campos!");
    });
});

describe("Testes da Calculadora - Divisão", () => {
    // Cálculos Matemáticos
    it("CT37: Deve dividir 2 e 95 corretamente", () => {
        expect(Service.Dividir(2, 95)).toBeCloseTo(0.02105263157, 5);
    });
    it("CT38: Deve dividir -5 e 10 e retornar -0.5", () => {
        expect(Service.Dividir(-5, 10)).toBe(-0.5);
    });
    it("CT39: Deve dividir 10 e -5 e retornar -2", () => {
        expect(Service.Dividir(10, -5)).toBe(-2);
    });
    it("CT40: Deve dividir -5 e -10 e retornar 0.5", () => {
        expect(Service.Dividir(-5, -10)).toBe(0.5);
    });
    it("CT41: Deve dividir 0.5 e 1.7 corretamente", () => {
        expect(Service.Dividir(0.5, 1.7)).toBeCloseTo(0.2941176, 5); 
    });
    it("CT44: Deve dividir 0 e 1 e retornar 0", () => {
        expect(Service.Dividir(0, 1)).toBe(0);
    });

    // Caminhos de Exceção Específicos
    it("CT45: Deve retornar Undefined ao tentar dividir por zero", () => {
        expect(Service.Dividir(1, 0)).toBe("Undefined");
    });

    // Caminhos de Exceção Padrões
    it("CT42 e CT43: Deve retornar erro ao enviar letras", () => {
        expect(Service.Dividir('a', 1)).toBe("Enviar somente números");
        expect(Service.Dividir(1, 'a')).toBe("Enviar somente números");
    });
    it("CT46, CT47 e CT48: Deve retornar erro ao omitir parâmetros", () => {
        expect(Service.Dividir(1)).toBe("Envie todos os campos!");
        expect(Service.Dividir(undefined, 1)).toBe("Envie todos os campos!");
        expect(Service.Dividir()).toBe("Envie todos os campos!");
    });
});