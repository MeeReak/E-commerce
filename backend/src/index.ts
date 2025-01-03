import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routes/routes";
import * as swaggerDocument from "../build/swagger.json";
import getConfig from "./util/config";
import errorHandler from "./middleware/error";
import { logger } from "./util/logger";

// Initialize the application
const app: Application = express();
const config = getConfig();

// =======================
// Standard Middleware
// =======================
app.use(express.json({ limit: "200mb" }));

// Base route
app.get("/", (_req: Request, res: Response) => {
  res.send("Server is running");
});

// Register tsoa routes
RegisterRoutes(app);

// Swagger documentation
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ========================
// Global Error Handler
// ========================
app.use(errorHandler);

// Start server function
const startServer = async (): Promise<void> => {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.mongoUrl as string, { autoIndex: true });
    logger.info("Connected to MongoDB successfully");
    // Start the server
    app.listen(config.port, () => {
      logger.info(`Server: http://localhost:${config.port}`);
      logger.info(`Swagger: http://localhost:${config.port}/docs`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

// Execute server startup
startServer();
