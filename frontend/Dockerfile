FROM node:20-slim AS base

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и pnpm-lock.yaml
COPY package.json package-lock.json ./

# Устанавливаем зависимости с помощью Yarn
RUN npm install

# Копируем все файлы из текущего каталога в рабочую директорию внутри контейнера
COPY . .

# Команда для сборки и запуска приложения в режиме разработки
CMD ["npm", "run", "dev"]