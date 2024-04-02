FROM node:20-slim AS base

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и pnpm-lock.yaml
COPY package.json package-lock.json ./

# Устанавливаем зависимости с помощью Yarn
RUN npm install

# Копируем исходный код приложения
COPY . .

# Команда для запуска приложения
CMD ["npm", "run", "devServer"]