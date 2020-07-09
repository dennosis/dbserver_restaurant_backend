# Teste DBServer

#### Deploy Server
https://dbserver-restaurant-backend.herokuapp.com

#### Repository Client
https://github.com/dennosis/dbserver_restaurant_frontend

#### Deploy Client
https://dbserver-restaurant-frontend.herokuapp.com


## Requisitos de ambiente necessários para compilar e rodar o software

* node 12.16.3  
* express 4.17.1
* bcryptjs 2.4.3
* body-parser 1.19.0
* cors 2.8.5
* dotenv 8.2.0
* jsonwebtoken 8.5.1
* lowdb 1.0.0
* shortid 2.2.15

### Installing

#### Clone the project
```
git clone github.com/dennosis/dbserver_restaurant_backend.git
cd dbserver_restaurant_backend
```

#### Install dependencies
```
npm install
```
#### Start app
```
npm run start
```
#### Test app
```
npm run test
```


## Instruções de como utilizar o sistema.

* O sistema é composto por 3 modulos: usuário, restaurante e voto, no qual é possivel cadastrar cadastar e alterar o registro de cada um. 
* Para o cadastro do usuario é possivel cadastrar o nome e o restaurante favorito; depois de cadastrar o usuario já fica disponivel para escolha do restaurante.
* Para o cadastro do restaurante é possivel informar o nome e o localização(opicional), depois do cadastro já fica disponivel para receber os votos.
* Para efetuar o voto do restaurante, no modulo Voto, selecione o dia, e na seuqencia, adicione ao restaurante escolhido o voto do usuario.

## O que poderia ser feito para melhorar o sistema?
* Futuramente incluir um sistema de login com JWT. 

##  Algo a mais que você tenha a dizer
* Aprendi uma coisa nova, o lowdb, não tinha usado anteriormente. 



