# База
FROM node:17-alpine

# Рабочая папка
WORKDIR /usr/SMS/site

# Копирование всех файлов в контейнер 
COPY . .

# Установка зависимостей
RUN npm install

# Занять порт
EXPOSE 3001

# Старт приложения
CMD ["npm", "start"]

