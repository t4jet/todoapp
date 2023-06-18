# 準備
.envに以下を書き込む
```
MYSQL_ROOT_PASSWORD: 
MYSQL_DATABASE: 
MYSQL_ALLOW_EMPTY_PASSWORD:
MYSQL_RANDOM_ROOT_PASSWORD:
```

# 実行方法
## docker-golang
`docker build --tag docker-golang .`
`docker run --publish 8080:8080 docker-golang`

## docker-compose の起動
`docker-compose up -d`

- MySQLにログイン

`docker exec -it mysql-container bash`
`mysql -u root -p`

- nextを起動
`docker exec -it app sh`
`cd app && npm run dev`

## queryの書き方
```
mutation CreateTodo {
  createTodo(input: {
    text: "todo"
    userId:"1"
  }) {
    text
  }
  
}
```
