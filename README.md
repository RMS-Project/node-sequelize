Instalação do Docker no Linux

https://www.youtube.com/watch?v=xKzvU6pSmE4

Cria micro-aplicações para serem utilizados no sistema.
Possui portas para conectar um container no outro.

Baixar container do POSTGRES

```
docker run --name database -e POSTGRES_PASSWORD=DOCKER -p 5432:5432 -d postgres
```

Ver as imagens instaladas no Docker

```
docker image ls
```

Para executar um container é necessário utilizar o ID.

Para iniciar o container do Postgres

```
docker start postgres               // Não está funcionando
```

Criar as migrações do banco de dados. Criando o arquivo na pasta migrations.
npx sequelize migration:create --name=create-users

Criar o arquivo condig.json

```
npx sequelize init
```

Trocar no arquivo config.josn dentro da pasta config o nome do banco de dados, de "mysql", para "postgres".

```
"dialect": "postgres"
```

Fazer o mesmo para username, caso seu usuário seja postgrers. 

```
"username": "postgres",
```

Criar migração do sequelize do banco de dados.
OBS: name recebe o nome da migration.
```
npx sequelize migration:create --name=create-files
```
Faça as alterações na migration e depois execute.

Executar migration.

```
npx sequelize db:migrate
```

Desfazer uma migração (Apaga todos os dados)

```
npx sequelize db:migrate:undo
```

Desfazer todas as migrações. 

```
npx sequelize db:migrate:undoAll
```

Caso esteja usnado instalação fisica do PostgresQL, apartir do pgadmin use os sequintes comandos SQL para visualizar as tabelas:
```
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';

select * from users

select * from files
```
OBS: O primeiro lista todas as tabelas do banco de dados "sistema".

<h2>Criar requisições para a API Backend</h2>

Instalar extensão do Vs Code - Thunder Client -> Que cria soliciações rest como o postman

Instalação do bcryptjs para criptografar a senha antes de cadastrar no banco

Instalar o JWT
```
yarn add jsonwebtoken
```

Instalação do Yup para validações.
```
yarn add yup
```

Instalação do Multer que é um multiform form data, permitindo o upload de imagens.
```
yarn multer
```

<h2>Mongodb</h2>

Mongodb - Banco de dados orientado a documento, normalmente JSON.

Crie uma conta em: https://www.mongodb.com/

Baixe o aplicativo Comppass: mongodb.com/try/donload/compass

Criar um banco sistema e alterar a string de conexão do mongodb em database/index.js
onde é "retryWrites" colocar sistema. 


Gerar hash MD5 - https://www.md5.cz


Rochetseat - https://www.youtube.com/watch?v=Fbu7z5dXcRs