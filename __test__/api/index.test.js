import app from '../../src/index.js'
import request from 'supertest'
import { describe, it, expect } from '@jest/globals'

describe("Teste da API - Endpoint somar - POST /api/somar", () => {
    it("CT01 - dois números positivos", async () => {
        const body = { num1: 1, num2: 2 }
        const response = (await request(app).post("/api/somar").send(body))

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(3)
    });

    it("CT02: Deve somar -5 e 10 e retornar 5", async () => {
        const body = { num1: -5, num2: 10 };
        
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(5);
    });

    it("CT03: Deve somar 10 e -5 e retornar 5", async () => {
        const body = { num1: 10, num2: -5 };
        
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(5);
    });

    it("CT04: Deve somar -5 e -10 e retornar -15", async () => {
        const body = { num1: -5, num2: -10 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-15);
    });

    it("CT05: Deve somar 0.5 e 1.7 e retornar 2.2", async () => {
        const body = { num1: 0.5, num2: 1.7 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(2.2);
    });

    it("CT06 - Deve retornar erro ao enviar letra no primeiro parâmetro", async () => {
        const body = { num1: 'a', num2: 2 }
        const response = (await request(app).post("/api/somar").send(body))

        expect(response.statusCode).toBe(400) 
        expect(response.body.err).toBe("Enviar somente números") 
    });

    it("CT07: Deve retornar erro ao enviar letra no segundo parâmetro", async () => {
        const body = { num1: 1, num2: 'a' };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Enviar somente números");
    });

    it("CT08: Deve somar 0 e 1 e retornar 1", async () => {
        const body = { num1: 0, num2: 1 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(1);
    });

    it("CT09: Deve somar 1 e 0 e retornar 1", async () => {
        const body = { num1: 1, num2: 0 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(1);
    });

    it("CT10: Deve retornar erro ao omitir o primeiro parâmetro", async () => {
        const body = { num2: 1 }; 
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });

    it("CT11: Deve retornar erro ao omitir o segundo parâmetro", async () => {
        const body = { num1: 1 }; 
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });

    it("CT12 - Deve retornar erro ao omitir parâmetros", async () => {
        const body = {} 
        const response = (await request(app).post("/api/somar").send(body))

        expect(response.statusCode).toBe(400) 
        expect(response.body.err).toBe("Envie todos os campos!") 
    });
})


describe("Teste da API - Endpoint subtrair - POST /api/subtrair", () => {
    it("CT13: Deve subtrair 2 e 95 e retornar -93", async () => {
        const body = { num1: 2, num2: 95 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-93);
    });
    
    it("CT14: Deve subtrair -5 e 10 e retornar -15", async () => {
        const body = { num1: -5, num2: 10 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-15);
    });
    
    it("CT15: Deve subtrair 10 e -5 e retornar 15", async () => {
        const body = { num1: 10, num2: -5 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(15);
    });
    
    it("CT16: Deve subtrair -5 e -10 e retornar 5", async () => {
        const body = { num1: -5, num2: -10 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(5);
    });
    
    it("CT17: Deve subtrair 0.5 e 1.7 e retornar -1.2", async () => {
        const body = { num1: 0.5, num2: 1.7 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-1.2);
    });
    
    it("CT18: Deve retornar erro ao enviar letra no primeiro parâmetro", async () => {
        const body = { num1: 'a', num2: 1 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Enviar somente números");
    });
    
    it("CT19: Deve retornar erro ao enviar letra no segundo parâmetro", async () => {
        const body = { num1: 1, num2: 'a' };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Enviar somente números");
    });
    
    it("CT20: Deve subtrair 0 e 1 e retornar -1", async () => {
        const body = { num1: 0, num2: 1 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-1);
    });
    
    it("CT21: Deve subtrair 1 e 0 e retornar 1", async () => {
        const body = { num1: 1, num2: 0 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(1);
    });
    
    it("CT22: Deve retornar erro ao omitir o primeiro parâmetro", async () => {
        const body = { num2: 1 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });
    
    it("CT23: Deve retornar erro ao omitir o segundo parâmetro", async () => {
        const body = { num1: 1 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });
    
    it("CT24: Deve retornar erro ao omitir ambos os parâmetros", async () => {
        const body = {};
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });
})

describe("Teste da API - Endpoint multiplicar - POST /api/multiplicar", () => {
    it("CT25: Deve multiplicar 2 e 95 e retornar 190", async () => {
        const body = { num1: 2, num2: 95 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(190);
    });
    
    it("CT26: Deve multiplicar -5 e 10 e retornar -50", async () => {
        const body = { num1: -5, num2: 10 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-50);
    });
    
    it("CT27: Deve multiplicar 10 e -5 e retornar -50", async () => {
        const body = { num1: 10, num2: -5 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-50);
    });
    
    it("CT28: Deve multiplicar -5 e -10 e retornar 50", async () => {
        const body = { num1: -5, num2: -10 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(50);
    });
    
    it("CT29: Deve multiplicar 0.5 e 1.7 e retornar 0.85", async () => {
        const body = { num1: 0.5, num2: 1.7 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0.85);
    });
    
    it("CT30: Deve retornar erro ao enviar letra no primeiro parâmetro", async () => {
        const body = { num1: 'a', num2: 1 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Enviar somente números");
    });
    
    it("CT31: Deve retornar erro ao enviar letra no segundo parâmetro", async () => {
        const body = { num1: 1, num2: 'a' };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Enviar somente números");
    });
    
    it("CT32: Deve multiplicar 0 e 1 e retornar 0", async () => {
        const body = { num1: 0, num2: 1 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0);
    });
    
    it("CT33: Deve multiplicar 1 e 0 e retornar 0", async () => {
        const body = { num1: 1, num2: 0 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0);
    });
    
    it("CT34: Deve retornar erro ao omitir o primeiro parâmetro", async () => {
        const body = { num2: 1 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });
    
    it("CT35: Deve retornar erro ao omitir o segundo parâmetro", async () => {
        const body = { num1: 1 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });
    
    it("CT36: Deve retornar erro ao omitir ambos os parâmetros", async () => {
        const body = {};
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });
})

describe("Teste da API - Endpoint dividir - POST /api/dividir", () => {
    it("CT37: Deve dividir 2 e 95 corretamente", async () => {
        const body = { num1: 2, num2: 95 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBeCloseTo(0.02105263157, 5);
    });
    
    it("CT38: Deve dividir -5 e 10 e retornar -0.5", async () => {
        const body = { num1: -5, num2: 10 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-0.5);
    });
    
    it("CT39: Deve dividir 10 e -5 e retornar -2", async () => {
        const body = { num1: 10, num2: -5 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-2);
    });
    
    it("CT40: Deve dividir -5 e -10 e retornar 0.5", async () => {
        const body = { num1: -5, num2: -10 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0.5);
    });
    
    it("CT41: Deve dividir 0.5 e 1.7 corretamente", async () => {
        const body = { num1: 0.5, num2: 1.7 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBeCloseTo(0.2941176, 5); 
    });
    
    it("CT42: Deve retornar erro ao enviar letra no primeiro parâmetro", async () => {
        const body = { num1: 'a', num2: 1 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Enviar somente números");
    });
    
    it("CT43: Deve retornar erro ao enviar letra no segundo parâmetro", async () => {
        const body = { num1: 1, num2: 'a' };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Enviar somente números");
    });
    
    it("CT44: Deve dividir 0 e 1 e retornar 0", async () => {
        const body = { num1: 0, num2: 1 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0);
    });
    
    it("CT45: Deve retornar Undefined ao tentar dividir por zero", async () => {
        const body = { num1: 1, num2: 0 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Undefined");
    });
    
    it("CT46: Deve retornar erro ao omitir o primeiro parâmetro", async () => {
        const body = { num2: 1 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });
    
    it("CT47: Deve retornar erro ao omitir o segundo parâmetro", async () => {
        const body = { num1: 1 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });
    
    it("CT48: Deve retornar erro ao omitir ambos os parâmetros", async () => {
        const body = {};
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });
})

describe("Teste da API - Endpoint potenciar - POST /api/potenciar", () => {
    it("CT49: Deve calcular a potência de 2 elevado a 3 e retornar 8", async () => {
        const body = { base: 2, expoente: 3 };
        const response = await request(app).post("/api/potenciar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(8);
    });
    
    it("CT50: Deve calcular a potência de -5 elevado a 2 e retornar 25", async () => {
        const body = { base: -5, expoente: 2 };
        const response = await request(app).post("/api/potenciar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(25);
    });
    
    it("CT51: Deve calcular a potência de 10 elevado a -2 e retornar 0.01", async () => {
        const body = { base: 10, expoente: -2 };
        const response = await request(app).post("/api/potenciar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0.01);
    });
    
    it("CT52: Deve calcular a potência de -5 elevado a -3 e retornar -0.008", async () => {
        const body = { base: -5, expoente: -3 };
        const response = await request(app).post("/api/potenciar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-0.008);
    });
    
    it("CT53: Deve calcular a potência de 0.5 elevado a 2 e retornar 0.25", async () => {
        const body = { base: 0.5, expoente: 2 };
        const response = await request(app).post("/api/potenciar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0.25);
    });
    
    it("CT54: Deve retornar erro ao enviar letra na base", async () => {
        const body = { base: 'a', expoente: 1 };
        const response = await request(app).post("/api/potenciar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Enviar somente números");
    });
    
    it("CT55: Deve retornar erro ao enviar letra no expoente", async () => {
        const body = { base: 1, expoente: 'a' };
        const response = await request(app).post("/api/potenciar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Enviar somente números");
    });
    
    it("CT56: Deve calcular a potência de 0 elevado a 1 e retornar 0", async () => {
        const body = { base: 0, expoente: 1 };
        const response = await request(app).post("/api/potenciar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0);
    });
    
    it("CT57: Deve calcular a potência de 1 elevado a 0 e retornar 1", async () => {
        const body = { base: 1, expoente: 0 };
        const response = await request(app).post("/api/potenciar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(1);
    });
    
    it("CT58: Deve retornar erro ao omitir a base", async () => {
        const body = { expoente: 1 };
        const response = await request(app).post("/api/potenciar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });
    
    it("CT59: Deve retornar erro ao omitir o expoente", async () => {
        const body = { base: 1 };
        const response = await request(app).post("/api/potenciar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });
    
    it("CT60: Deve retornar erro ao omitir ambos os parâmetros", async () => {
        const body = {};
        const response = await request(app).post("/api/potenciar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });
})

describe("Teste da API - Endpoint radiciar - POST /api/radiciar", () => {
    it("CT61: Deve calcular a raiz quadrada de 9 e retornar 3", async () => {
        const body = { radicando: 9, indice: 2 };
        const response = await request(app).post("/api/radiciar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(3);
    });
    
    it("CT62: Deve calcular a raiz cúbica de -8 e retornar -2", async () => {
        const body = { radicando: -8, indice: 3 };
        const response = await request(app).post("/api/radiciar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-2);
    });
    
    it("CT63: Deve calcular a raiz quadrada de 10 e retornar o valor aproximado", async () => {
        const body = { radicando: 10, indice: 2 };
        const response = await request(app).post("/api/radiciar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBeCloseTo(3.16227766, 5);
    });
    
    it("CT64: Deve retornar erro ao tentar calcular raiz real de número negativo com índice par", async () => {
        const body = { radicando: -4, indice: 2 };
        const response = await request(app).post("/api/radiciar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Não existe raiz real de número negativo com índice par");
    });
    
    it("CT65: Deve calcular a raiz quadrada de 0.25 e retornar 0.5", async () => {
        const body = { radicando: 0.25, indice: 2 };
        const response = await request(app).post("/api/radiciar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0.5);
    });
    
    it("CT66: Deve retornar erro ao enviar letra no radicando", async () => {
        const body = { radicando: 'a', indice: 2 };
        const response = await request(app).post("/api/radiciar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Enviar somente números");
    });
    
    it("CT67: Deve retornar erro ao enviar letra no índice", async () => {
        const body = { radicando: 9, indice: 'a' };
        const response = await request(app).post("/api/radiciar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Enviar somente números");
    });
    
    it("CT68: Deve calcular a raiz quadrada de 0 e retornar 0", async () => {
        const body = { radicando: 0, indice: 2 };
        const response = await request(app).post("/api/radiciar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0);
    });
    
    it("CT69: Deve retornar erro ao enviar índice zero", async () => {
        const body = { radicando: 9, indice: 0 };
        const response = await request(app).post("/api/radiciar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Índice não pode ser zero");
    });
    
    it("CT70: Deve retornar erro ao omitir o radicando", async () => {
        const body = { indice: 2 };
        const response = await request(app).post("/api/radiciar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });
    
    it("CT71: Deve retornar erro ao omitir o índice", async () => {
        const body = { radicando: 9 };
        const response = await request(app).post("/api/radiciar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });
    
    it("CT72: Deve retornar erro ao omitir ambos os parâmetros", async () => {
        const body = {};
        const response = await request(app).post("/api/radiciar").send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body.err).toBe("Envie todos os campos!");
    });
})