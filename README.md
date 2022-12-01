# Jogo da memoria
## Requisitos
Para executar o projeto, será necessário ter instalado:
- NodeJs v16.17 ^
- NPM v8.19 ^
- Expo 6.0.5 ^


## Desenvolvimento
Com os requisitos para uso do projeto, somente será necessário clonar o repositorio para o local de preferencia. 
- `$ cd "diretorio"`
- `$ git clone https://github.com/FI12LHO/Jogo-da-memoria`


## Contrução
- ### Backend (Server)
    - Instale os pacotes com `$ npm install`.
    - Execute `$ npx prisma migrate dev` para rodar as migrations e as seeds.
    - Execute `$ npm run dev` para iniciar o backend (servidor).


- ### Mobile
    - Instale os pacotes com `$ npm install`.
    - Crie um app no google para poder ter acesso ao OAuth (https://docs.expo.dev/guides/authentication/#google).
    - Renomei o arquivo `.env.exmaple` na raiz do projeto para `.env` e adicione o **cliente id**.
    - Alterar o endereço do arquivo src/services/api.ts colocando o IP da máquina.
    - Execute `$ npm start` ou `$ expo start` para iniciar a aplicação mobile.

    **Caso o backend (server) não esteja rodando, os dados dos jogos não serão salvos**


## Projeto
Projeto construído utilizando React Native (Expo) e outras tecnologias. Esse é um sistema de entreterimento simples com o objetivo de apresentar ao usuaro um jogo da memoria.


## Tecnologias
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Native Base](https://nativebase.io/)
- [Prisma](https://www.prisma.io/)


### Preview
https://user-images.githubusercontent.com/40048345/204958055-572caf23-0d43-48ff-baaa-3a621bf4a4a6.mp4
![dabae4cc-7178-4a45-aba6-778102a4b46f](https://user-images.githubusercontent.com/40048345/204958123-01c74467-b1c8-499a-8e62-6396bda26f06.jpeg=100x20)
![Screenshot_1669863740](https://user-images.githubusercontent.com/40048345/204958124-6b77e7f4-0a46-463d-a058-fee1b2268df4.png=100x20)

