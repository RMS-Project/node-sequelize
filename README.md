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

Executar migration.

```
npx sequelize db:migrate
```

Desfazer uma migração (Apaga todos os dados)

```
npx sequelize db:migrate:indo
```

Desfazer todas as migrações. 

```
npx sequelize db:migrate:indoAll
```

Rochetseat - https://www.youtube.com/watch?v=Fbu7z5dXcRs