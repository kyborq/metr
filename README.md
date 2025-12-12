<img width="1648" height="184" alt="image" src="https://github.com/user-attachments/assets/c3226465-ddc2-4504-bd31-5412f7b27fd9" />

# МЕТР

Сборщик аналитики для бедных c дашбордами

## ⚙️ Конфигурация

Создайте файл `.env` в директории `server/`:

```bash
# Сгенерировать API ключ
echo "API_KEY=$(openssl rand -hex 32)" > server/.env
```

Или вручную:

```env
API_KEY=your_secret_key
```

## 🚀 Запуск

```bash
# Сервер
cd server
bun install
bun run dev

# Клиент
cd client
npm install
npm run dev
```

## 📡 API

### Аутентификация

Все запросы требуют заголовок `X-Metr-Key` с вашим API ключом:

```
X-Metr-Key: your_secret_key
```

---

### `POST /api/track`

Отправка событий аналитики.

**Тело запроса:**

```json
[
  {
    "event": "page_view",
    "props": { "page": "/home", "referrer": "google.com" }
  },
  {
    "event": "button_click",
    "props": { "button_id": "signup" }
  }
]
```

**Пример:**

```bash
curl -X POST http://localhost:3000/api/track \
  -H "Content-Type: application/json" \
  -H "X-Metr-Key: your_secret_key" \
  -d '[{"event": "signup", "props": {"plan": "free"}}]'
```

---

### `GET /api/metrics/:event?`

Получение событий с пагинацией.

**Параметры:**

| Параметр | Тип    | Описание                       |
| -------- | ------ | ------------------------------ |
| `event`  | string | Фильтр по названию события     |
| `limit`  | number | Количество записей (макс. 200) |
| `cursor` | number | ID для курсорной пагинации     |

**Примеры:**

```bash
# Все события
curl http://localhost:3000/api/metrics \
  -H "X-Metr-Key: your_secret_key"

# Только page_view
curl http://localhost:3000/api/metrics/page_view \
  -H "X-Metr-Key: your_secret_key"

# С пагинацией
curl "http://localhost:3000/api/metrics?limit=10&cursor=100" \
  -H "X-Metr-Key: your_secret_key"
```

**Ответ:**

```json
{
  "data": [
    {
      "id": 1,
      "event": "page_view",
      "props": { "page": "/home" },
      "createdAt": "2025-12-12T15:32:00.000Z"
    }
  ],
  "nextCursor": 1
}
```
