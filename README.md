## Node + Express Quick Starter project

O objetivo deste projeto é auxiliar na aula de introdução a Node com TypeScript.

## Requirements

    Node 10+
    Baixar em: https://nodejs.org

## Instruções

- Crie um diretorio para armazenar os arquivos do seu projeto #commandline: mkdir aula_node
- Defina o seu package.json para utilizar o npm #commandline: npm init
- Instale o typescript em sua máquina #commandline: npm i -g typescript
- Instale os pacotes do express e do typescript no projeto #commandline: npm i express typescript
- Instale o pacote de tipo do express: npm i @types/express
- Crie o arquivo tsconfig.json #commandline: tsc --init
- Abra o arquivo tsconfig.json e descomente as linhas 15, 55 e 56
- Ainda na linha 15 do arquivo tsconfig.json, altere o código "./" para "./build"
- Abra o arquivo do package.json e acrescente os scripts build e start (conforme está neste package.json)
- Implemente sua lógica em arquivos .ts (conforme o arquivo index.ts deste projeto)