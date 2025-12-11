<img width="1648" height="184" alt="image" src="https://github.com/user-attachments/assets/c3226465-ddc2-4504-bd31-5412f7b27fd9" />

# МЕТР

Сборщик аналитики для бедных

## ⚙️ Конфигурация

Создайте файл `.env` в директории `server/`:

```bash
# Сгенерировать API ключ
echo "API_KEY=$(openssl rand -hex 32)" > .env
```

Или вручную:

```env
API_KEY=your_secret_key
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

**Пример запроса:**

```bash
curl -X POST http://localhost:3000/api/track \
  -H "Content-Type: application/json" \
  -H "X-Metr-Key: your_secret_key" \
  -d '[{"event": "signup", "props": {"plan": "free"}}]'
```
