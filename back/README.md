# Messages API

### Эндпоинты

#### GET /messages
#### Возвращает список всех сообщений
```
JSON
{
    "id": "BWlTmI5AHit1GGq5ERF2T",
    "message": "Hello, world!",
    "author": "John Doe",
    "datetime": "2018-04-05T10:02:05.081Z"
},
```
#### POST /messages
#### Создает новое сообщение

#### Тело запроса:
```
JSON
{
  "author": "John Doe",
  "message": "Hello, world!"
}
```

#### Ответ:
```
JSON
{
 "id": "BWlTmI5AHit1GGq5ERF2T",
 "message": "Hello, world!",
 "author": "John Doe",
 "datetime": "2018-04-05T10:02:05.081Z"
}
```

#### GET /messages?datetime=2018-04-05T10:02:05.081Z
#### Запрос новых сообщений