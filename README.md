# NodeJS - Webnar com a Digital Innovation One
API criada em NodeJS para gerenciar os Crushs

# Requisitos
- [NodeJS](https://nodejs.org/en/)
- [NPM](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.getpostman.com/)

# Instalação

Execute os seguintes comandos em um terminal:

```
git clone https://github.com/eskokado/esk-crush-management.git
```

```
cd esk-crush-management
```

```
npm i
```

# Criar container para o banco MongoDB com Docker
Execute o arquivo para gerar o container:

```
./runDocker.sh
```
*Obs.: O Docker precisa estar instalado. Instruções de como instalar o Docker em Windows, Mac e Linux, veja [este post](https://blog.umbler.com/br/containers-102-primeiros-passos-para-realizar-a-instalacao/?a=7e8480pk).*


# Para rodar o projeto

Utilize o comando: 

```
npm start
```

# Navegador ou Postman

Abra a seguinte rotaque está especificada no server.ts:

```
localhost:3000/
```
