const calSeguro = (objVeiculo) => {
    return objVeiculo.valor * 0.10
}

const calIpva = (objVeiculo) => {
    let ipva = Number(0)
    const anoAtual = 2026 - Number(objVeiculo.ano)

    if (anoAtual > 20) {
        return "Isento de IPVA"
    }

    if (objVeiculo.tipo == "Gasolina") {
        ipva = objVeiculo.valor * 0.20
    } else if (objVeiculo.tipo == "Etanol") {
        ipva = objVeiculo.valor * 0.15
    } else if (objVeiculo.tipo == "Biocombustível") {
        ipva = objVeiculo.valor * 0.10
    } else if (objVeiculo.tipo == "Híbrido") {
        ipva = objVeiculo.valor * 0.08
    } else if (objVeiculo.tipo == "Elétrico") {
        ipva = objVeiculo.valor * 0.02
    }

    return ipva
}
export {calSeguro,calIpva}