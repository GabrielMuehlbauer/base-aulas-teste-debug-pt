import Service from "../services/exercicios.js"

class Controller {
    Somar(req, res) {
        const { num1, num2 } = req.body
        const resultado = Service.Somar(num1, num2)
        
        res.status(200).send({ resultado })
    }

    Subtrair(req, res) {
        const { num1, num2 } = req.body
        const resultado = Service.Subtrair(num1, num2)
        
        res.status(200).send({ resultado })
    }

    Multiplicar(req, res) {
        const { num1, num2 } = req.body
        const resultado = Service.Multiplicar(num1, num2)
        
        res.status(200).send({ resultado })
    }

    Dividir(req, res) {
        const { num1, num2 } = req.body
        const resultado = Service.Dividir(num1, num2)
        
        res.status(200).send({ resultado })
    }

}

export default new Controller()