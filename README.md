Sistema de Cadastro de Veículos

Este é um projeto simples desenvolvido com HTML, CSS e JavaScript (ES Modules) para cadastro e listagem de veículos, incluindo o cálculo de seguro e IPVA de acordo com regras específicas.

📌 Funcionalidades
Cadastro de veículos (modelo, marca, placa, ano, valor e tipo de combustível)
Armazenamento temporário em memória (array)
Listagem dinâmica dos veículos cadastrados
Cálculo automático de:
💰 Seguro (10% do valor do veículo)
🧾 IPVA baseado no tipo de combustível
Regra de isenção de IPVA para veículos com mais de 20 anos
🧮 Regras de cálculo
Seguro
Valor fixo de 10% do valor do veículo
IPVA
Gasolina: 20%
Etanol: 15%
Biocombustível: 10%
Híbrido: 8%
Elétrico: 2%
Veículos com mais de 20 anos: isentos de IPVA
🛠️ Tecnologias utilizadas
HTML5
CSS3
JavaScript (ES6 Modules)
DOM Manipulation
FormData API
📂 Estrutura do projeto
/projeto
│
├── index.html
├── css/
│   └── style_veiculo.css
├── js/
│   ├── script_veiculo.js
│   └── script_calculo.js
⚙️ Como funciona
O usuário preenche o formulário com os dados do veículo
Os dados são capturados via FormData
O veículo é armazenado em um array local
As funções de cálculo são importadas de outro módulo JS:
calSeguro()
calIpva()
A lista é atualizada dinamicamente no HTML
