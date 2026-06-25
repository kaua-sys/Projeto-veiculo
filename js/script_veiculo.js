//Pegando o import das funções do script_calculo
import { calIpva,calSeguro } from "./script_calculo.js"

//Pegando os elementos do DOM
const divCada = document.querySelector('#div-cadastro')
const formCada = document.querySelector('#form-cadastro')
const divLista = document.querySelector('#div-lista-veiculos')

//Criando o array veiculos
const veiculos = []

//Capturação do elemento submit do form
formCada.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const dadosFormCadas = new FormData(formCada)

    const veiculo = {
            modelo: dadosFormCadas.get('modelo'),
            marca: dadosFormCadas.get('marca'),
            placa: dadosFormCadas.get('placa'),
            ano: dadosFormCadas.get('ano'),
            valor: Number(dadosFormCadas.get('valor')),
            tipo: dadosFormCadas.get('combustivel'),

           valor: Number(
            dadosFormCadas
            .get('valor')
            .replaceAll('.','')
            .replace(',','.')
           )
 
    }

    addVeiculos(veiculo)

})
const addVeiculos = (objVeiculos) =>{
    veiculos.push(objVeiculos)

    listVeiculos()

}


const listVeiculos = () => {
    divLista.innerHTML = ''

    veiculos.forEach((elem, i) => {

        const seguro = calSeguro(elem)
        const ipva = calIpva(elem)

        divLista.innerHTML += `
            ${i + 1} - Modelo: ${elem.modelo}
            - Marca: ${elem.marca}
            - Placa: ${elem.placa}
            - Ano: ${elem.ano}
            - Valor: ${elem.valor.toFixed(2).replace('.', ',')}
            - Tipo: ${elem.tipo}
            - Seguro: ${seguro.toFixed(2).replace('.', ',')}
            - IPVA: ${ipva}
            <br>
        `
    })
}