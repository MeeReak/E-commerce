import dotenv from "dotenv";
import path from "path";
import { logger } from "./logger";

function createConfig(configPath: string) {
  dotenv.config({ path: configPath });

  // Validate essential configuration
  const requiredConfig = ["PORT", "MONGODB_URL"];
  const missingConfig = requiredConfig.filter((key) => !process.env[key]);

  if (missingConfig.length > 0) {
    logger.error(
      `Missing required environment variables: ${missingConfig.join(", ")}`
    );
  }

  // Return configuration object
  return {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongoUrl: process.env.MONGODB_URL,
    aws_region: process.env.AWS_REGION,
    aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
    aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
    aws_s3_bucket: process.env.AWS_S3_BUCKET,
  };
}

const getConfig = (currentEnv: string = "development") => {
  const configPath =
    currentEnv === "development"
      ? path.join(__dirname, `../../configs/.env`)
      : path.join(__dirname, `../../configs/.env.${currentEnv}`);
  return createConfig(configPath);
};

export default getConfig;
