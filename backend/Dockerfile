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

# Копируем исходный код приложения
COPY . .

# Команда для запуска приложения
CMD ["node", "bin/www"]