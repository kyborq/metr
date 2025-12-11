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
