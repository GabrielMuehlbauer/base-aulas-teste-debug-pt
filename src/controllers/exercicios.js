import Service from "../services/exercicios.js"

class Controller {
    Somar(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Somar(num1, num2)
        
            res.status(200).send({ resultado })
        } catch (e) {
            console.log(e);
            res.status(500).send({ err: e.message });
        }
    }

    Subtrair(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Subtrair(num1, num2)
            
            res.status(200).send({ resultado })
        } catch (e) {
            console.log(e);
            res.status(500).send({ err: e.message });
        }
    }

    Multiplicar(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Multiplicar(num1, num2)
            
            res.status(200).send({ resultado })
        } catch (e) {
            console.log(e);
            res.status(500).send({ err: e.message });
        }
    }

    Dividir(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Dividir(num1, num2)
            
            res.status(200).send({ resultado })
        } catch (e) {
            console.log(e);
            res.status(500).send({ err: e.message });
        }
    }

    Potencia(req, res) {
        try {
            const { base, expoente } = req.body;
            const resultado = Service.Potencia(base, expoente);
            
            res.status(200).send({ resultado });
        } catch (e) {
            console.log(e);
            res.status(500).send({ err: e.message });
        }
    }

    Radiciar(req, res) {
        try {
            const { radicando, indice } = req.body;
            const resultado = Service.Radiciar(radicando, indice);
            
            res.status(200).send({ resultado });
        } catch (e) {
            console.log(e);
            res.status(500).send({ err: e.message });
        }
    }
}

export default new Controller()