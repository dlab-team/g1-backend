import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Router } from "express";

const router = Router();

// Definición de opciones de Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "g1-backend API",
      version: "0.1.0",
      description: "API para el backend de g1-backend",
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: ["./src/routes/*.js"], // Ruta de tus archivos con documentación Swagger
};

// Generar la especificación de Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Usar Swagger UI en la ruta /api-docs
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default router;
