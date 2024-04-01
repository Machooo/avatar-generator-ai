FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Устанавливаем зависимости с помощью Yarn
RUN pnpm install

# Копируем все файлы из текущего каталога в рабочую директорию внутри контейнера
COPY . .

# Команда для сборки и запуска приложения в режиме разработки
CMD ["pnpm", "dev"]