# Desafio Módulo 2 - API de Banco Digital

Este é um projeto de API de banco desenvolvido com Node.js e Express, que fornece funcionalidades bancárias básicas. Esta API é o resultado da junção de alguns dos conhecimentos adquiridos no segundo módulo do curso de back-end da Cubos Academy.

Neste README, você encontrará informações cruciais sobre como utilizar e testar essa aplicação, juntamente com detalhes sobre suas principais funcionalidades e endpoints. 

## Requisitos do Sistema

- Node.js
- npm (Node Package Manager)

## Instalação

1. Clone este repositório para sua máquina local:

   ```
   git clone https://github.com/livnascimento/desafio-backend-m02-b2bt05.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd desafio-backend-m02-b2bt05
   ```

3. Instale as dependências necessárias:

   ```
   npm install
   ```

## Executando a API

1. Para iniciar a API, execute o seguinte comando:

    ```
    npm start
    ```

A API estará disponível em `http://localhost:3000`.

## Funcionalidades

A API oferece as seguintes funcionalidades:

1. **Listar Contas Bancárias**: Obtenha uma lista de objetos com todas as contas bancárias registradas.

2. **Criar Conta Bancária**: Crie uma nova conta bancária especificando dados do usuário.

3. **Atualizar da Conta Bancária**: Atualize informações do usuário associado a uma conta bancária.

4. **Excluir Conta Bancária**: Remova uma conta bancária.

5. **Depositar**: Faça um depósito em uma conta bancária especificando o número da conta e o valor.

6. **Sacar**: Realize um saque de uma conta bancária especificando o número da conta,  o valor e a senha.

7. **Transferir**: Transfira fundos de uma conta para outra.

8. **Consultar Saldo**: Obtenha o saldo atual de uma conta bancária.

9. **Emitir Extrato**: Receba um extrato detalhado das transações em uma conta bancária.

## Exemplos de Solicitações HTTP

Aqui estão alguns exemplos de como fazer solicitações HTTP para usar as funcionalidades da API. Você pode usar uma ferramenta como o Insomnia para testar essas solicitações.

### Listar contas bancárias

```http
GET http://localhost:3000/contas?senha_banco=exemploSenha
```

### Criar conta

```http
POST http://localhost:3000/contas
Content-Type: application/json


{
    "nome": "Mariana",
    "cpf": "93939381055",
    "data_nascimento": "1988-11-25",
    "telefone": "8165437890",
    "email": "mariana@example.com",
    "senha": "senhaabc"
}
```
<img width=70% src="https://github.com/EricAssisdev/desafio-backend-m2-t15/blob/main/assets/gif/delete%20conta.gif" alt="criar contas">

### Atualizar conta

```http
PUT http://localhost:3000/:numeroConta/usuario
Content-Type: application/json


{
    "nome": "Mariana Sousa",
    "cpf": "93939381055",
    "data_nascimento": "1988-11-30",
    "telefone": "8165437890",
    "email": "mariana@example.com",
    "senha": "senha456"
}
```

### Excluir conta


```http
DELETE http://localhost:3000/contas/:numeroConta
```

### Depositar

```http
POST http://localhost:3000/transacoes/depositar
Content-Type: application/json


{
	"numero_conta": "343833521-1",
	"valor": 10000
}
```
<img width=70% src="https://github.com/EricAssisdev/desafio-backend-m2-t15/assets/64323583/2a4ee4ec-7744-4635-9e6d-75f1d1a8e38d" alt="deposito">

### Sacar

```http
POST http://localhost:3000/transacoes/sacar
Content-Type: application/json


{
	"numero_conta": "343833521-1",
	"valor": 5000,
	"senha": "senha456"
}
```

### Transferir


```http
POST http://localhost:3000/transacoes/transferir
Content-Type: application/json


{
	"numero_conta_origem": "343833521-1",
	"numero_conta_destino": "885748203-3",
	"valor": 2500,
	"senha": "senha456"
}
```
<img width=70% src="https://github.com/EricAssisdev/desafio-backend-m2-t15/assets/64323583/70045868-e878-4bc4-8650-264e9b9aa148" alt="transferir">

### Exibir saldo

```http
GET http://localhost:3000/contas/saldo?numero_conta=885748203-3&senha=senha456
```

### Exibir extrato

```http
GET http://localhost:3000/contas/extrato?numero_conta=343833521-1&senha=senha456
```

<img width=70% src="https://github.com/EricAssisdev/desafio-backend-m2-t15/assets/64323583/427291c4-8744-419d-bcc5-9b0843a8da6a" alt="exibir extrato">

