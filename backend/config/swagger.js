const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const path = require("path");

// Сканируем все файлы маршрутов в папке routes и собираем их в массив
const routesPath = path.join(__dirname, "./../routes");
const routes = fs
  .readdirSync(routesPath)
  .filter((file) => file.endsWith(".js") && file !== "index.js")
  .map((file) => require(`${routesPath}/${file}`));

// Формируем опции для swagger-jsdoc на основе найденных маршрутов
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description: "A simple Express API with Swagger documentation",
    },
  },
  // Указываем маршруты для сканирования и файлы (если нужно для игнорирования)
  apis: [`${routesPath}/**.js`], 
  ignore: [`${routesPath}/index.js`]
};

console.log(routesPath);

const specs = swaggerJsdoc(options);

module.exports = {
  swagger_serve: swaggerUi.serve,
  swagger_settings: swaggerUi.setup(specs),
};
