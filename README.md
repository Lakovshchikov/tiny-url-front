# Tiny URL Front

Фронтенд для сервиса сокращения ссылок на React + Vite + Effector + Ant Design.

## Быстрый старт

### Установка зависимостей

```
npm ci
```

### Запуск в режиме разработки

```
npm run dev
```

Приложение будет доступно на [http://localhost:8080](http://localhost:8080)
(порт можно изменить в vite.config.ts).

### Переменные окружения

Создайте файл `.env` в корне проекта:

```
VITE_API_URL=http://localhost:80
```

### Сборка и предпросмотр production-версии

```
npm run build
npm run preview
```

### Docker

Сборка и запуск контейнера:

```
docker build -t tiny-url-front .
docker run -p 8080:80 tiny-url-front
```

### Тесты

```
npm run test
```

---

**Технологии:**

- React
- Vite
- Effector
- Ant Design

---

Для подробностей смотрите исходный код и комментарии в файлах.
