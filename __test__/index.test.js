import Service from "../src/services/exercicios.js";

describe("Testes da Calculadora - Adição", () => {
    it("CT01: Deve somar 2 e 95 e retornar 97", () => {
        const result = Service.Somar(2, 95);
        expect(result).toBe(97);
    });
    
    it("CT02: Deve somar -5 e 10 e retornar 5", () => {
        const result = Service.Somar(-5, 10);
        expect(result).toBe(5);
    });
    
    it("CT03: Deve somar 10 e -5 e retornar 5", () => {
        const result = Service.Somar(10, -5);
        expect(result).toBe(5);
    });
    
    it("CT04: Deve somar -5 e -10 e retornar -15", () => {
        const result = Service.Somar(-5, -10);
        expect(result).toBe(-15);
    });
    
    it("CT05: Deve somar 0.5 e 1.7 e retornar 2.2", () => {
        const result = Service.Somar(0.5, 1.7);
        expect(result).toBe(2.2);
    });
    
    it("CT06: Deve retornar erro ao enviar letra no primeiro parâmetro", () => {
        const result = () => Service.Somar('a', 1);
        expect(result).toThrow("Enviar somente números");
    });
    
    it("CT07: Deve retornar erro ao enviar letra no segundo parâmetro", () => {
        const result = () => Service.Somar(1, 'a');
        expect(result).toThrow("Enviar somente números");
    });
    
    it("CT08: Deve somar 0 e 1 e retornar 1", () => {
        const result = Service.Somar(0, 1);
        expect(result).toBe(1);
    });
    
    it("CT09: Deve somar 1 e 0 e retornar 1", () => {
        const result = Service.Somar(1, 0);
        expect(result).toBe(1);
    });
    
    it("CT10: Deve retornar erro ao omitir o primeiro parâmetro", () => {
        const result = () => Service.Somar(undefined, 1);
        expect(result).toThrow("Envie todos os campos!");
    });
    
    it("CT11: Deve retornar erro ao omitir o segundo parâmetro", () => {
        const result = () => Service.Somar(1);
        expect(result).toThrow("Envie todos os campos!");
    });
    
    it("CT12: Deve retornar erro ao omitir ambos os parâmetros", () => {
        const result = () => Service.Somar();
        expect(result).toThrow("Envie todos os campos!");
    });
});

describe("Testes da Calculadora - Subtração", () => {
    it("CT13: Deve subtrair 2 e 95 e retornar -93", () => {
        const result = Service.Subtrair(2, 95);
        expect(result).toBe(-93);
    });
    
    it("CT14: Deve subtrair -5 e 10 e retornar -15", () => {
        const result = Service.Subtrair(-5, 10);
        expect(result).toBe(-15);
    });
    
    it("CT15: Deve subtrair 10 e -5 e retornar 15", () => {
        const result = Service.Subtrair(10, -5);
        expect(result).toBe(15);
    });
    
    it("CT16: Deve subtrair -5 e -10 e retornar 5", () => {
        const result = Service.Subtrair(-5, -10);
        expect(result).toBe(5);
    });
    
    it("CT17: Deve subtrair 0.5 e 1.7 e retornar -1.2", () => {
        const result = Service.Subtrair(0.5, 1.7);
        expect(result).toBe(-1.2);
    });
    
    it("CT18: Deve retornar erro ao enviar letra no primeiro parâmetro", () => {
        const result = () => Service.Subtrair('a', 1);
        expect(result).toThrow("Enviar somente números");
    });
    
    it("CT19: Deve retornar erro ao enviar letra no segundo parâmetro", () => {
        const result = () => Service.Subtrair(1, 'a');
        expect(result).toThrow("Enviar somente números");
    });
    
    it("CT20: Deve subtrair 0 e 1 e retornar -1", () => {
        const result = Service.Subtrair(0, 1);
        expect(result).toBe(-1);
    });
    
    it("CT21: Deve subtrair 1 e 0 e retornar 1", () => {
        const result = Service.Subtrair(1, 0);
        expect(result).toBe(1);
    });
    
    it("CT22: Deve retornar erro ao omitir o primeiro parâmetro", () => {
        const result = () => Service.Subtrair(undefined, 1);
        expect(result).toThrow("Envie todos os campos!");
    });
    
    it("CT23: Deve retornar erro ao omitir o segundo parâmetro", () => {
        const result = () => Service.Subtrair(1);
        expect(result).toThrow("Envie todos os campos!");
    });
    
    it("CT24: Deve retornar erro ao omitir ambos os parâmetros", () => {
        const result = () => Service.Subtrair();
        expect(result).toThrow("Envie todos os campos!");
    });
});

describe("Testes da Calculadora - Multiplicação", () => {
    it("CT25: Deve multiplicar 2 e 95 e retornar 190", () => {
        const result = Service.Multiplicar(2, 95);
        expect(result).toBe(190);
    });
    
    it("CT26: Deve multiplicar -5 e 10 e retornar -50", () => {
        const result = Service.Multiplicar(-5, 10);
        expect(result).toBe(-50);
    });
    
    it("CT27: Deve multiplicar 10 e -5 e retornar -50", () => {
        const result = Service.Multiplicar(10, -5);
        expect(result).toBe(-50);
    });
    
    it("CT28: Deve multiplicar -5 e -10 e retornar 50", () => {
        const result = Service.Multiplicar(-5, -10);
        expect(result).toBe(50);
    });
    
    it("CT29: Deve multiplicar 0.5 e 1.7 e retornar 0.85", () => {
        const result = Service.Multiplicar(0.5, 1.7);
        expect(result).toBe(0.85);
    });
    
    it("CT30: Deve retornar erro ao enviar letra no primeiro parâmetro", () => {
        const result = () => Service.Multiplicar('a', 1);
        expect(result).toThrow("Enviar somente números");
    });
    
    it("CT31: Deve retornar erro ao enviar letra no segundo parâmetro", () => {
        const result = () => Service.Multiplicar(1, 'a');
        expect(result).toThrow("Enviar somente números");
    });
    
    it("CT32: Deve multiplicar 0 e 1 e retornar 0", () => {
        const result = Service.Multiplicar(0, 1);
        expect(result).toBe(0);
    });
    
    it("CT33: Deve multiplicar 1 e 0 e retornar 0", () => {
        const result = Service.Multiplicar(1, 0);
        expect(result).toBe(0);
    });
    
    it("CT34: Deve retornar erro ao omitir o primeiro parâmetro", () => {
        const result = () => Service.Multiplicar(undefined, 1);
        expect(result).toThrow("Envie todos os campos!");
    });
    
    it("CT35: Deve retornar erro ao omitir o segundo parâmetro", () => {
        const result = () => Service.Multiplicar(1);
        expect(result).toThrow("Envie todos os campos!");
    });
    
    it("CT36: Deve retornar erro ao omitir ambos os parâmetros", () => {
        const result = () => Service.Multiplicar();
        expect(result).toThrow("Envie todos os campos!");
    });
});

describe("Testes da Calculadora - Divisão", () => {
    it("CT37: Deve dividir 2 e 95 corretamente", () => {
        const result = Service.Dividir(2, 95);
        expect(result).toBeCloseTo(0.02105263157, 5);
    });
    
    it("CT38: Deve dividir -5 e 10 e retornar -0.5", () => {
        const result = Service.Dividir(-5, 10);
        expect(result).toBe(-0.5);
    });
    
    it("CT39: Deve dividir 10 e -5 e retornar -2", () => {
        const result = Service.Dividir(10, -5);
        expect(result).toBe(-2);
    });
    
    it("CT40: Deve dividir -5 e -10 e retornar 0.5", () => {
        const result = Service.Dividir(-5, -10);
        expect(result).toBe(0.5);
    });
    
    it("CT41: Deve dividir 0.5 e 1.7 corretamente", () => {
        const result = Service.Dividir(0.5, 1.7);
        expect(result).toBeCloseTo(0.2941176, 5); 
    });
    
    it("CT42: Deve retornar erro ao enviar letra no primeiro parâmetro", () => {
        const result = () => Service.Dividir('a', 1);
        expect(result).toThrow("Enviar somente números");
    });
    
    it("CT43: Deve retornar erro ao enviar letra no segundo parâmetro", () => {
        const result = () => Service.Dividir(1, 'a');
        expect(result).toThrow("Enviar somente números");
    });
    
    it("CT44: Deve dividir 0 e 1 e retornar 0", () => {
        const result = Service.Dividir(0, 1);
        expect(result).toBe(0);
    });
    
    it("CT45: Deve retornar Undefined ao tentar dividir por zero", () => {
        const result = () => Service.Dividir(1, 0);
        expect(result).toThrow("Undefined");
    });
    
    it("CT46: Deve retornar erro ao omitir o primeiro parâmetro", () => {
        const result = () => Service.Dividir(undefined, 1);
        expect(result).toThrow("Envie todos os campos!");
    });
    
    it("CT47: Deve retornar erro ao omitir o segundo parâmetro", () => {
        const result = () => Service.Dividir(1);
        expect(result).toThrow("Envie todos os campos!");
    });
    
    it("CT48: Deve retornar erro ao omitir ambos os parâmetros", () => {
        const result = () => Service.Dividir();
        expect(result).toThrow("Envie todos os campos!");
    });
});