import { S3Client } from "@aws-sdk/client-s3";
import getConfig from "./config";

// Configure the AWS SDK
const s3 = new S3Client({
  region: getConfig().aws_region || "us-east-1", // Ensure region is set
  credentials: {
    accessKeyId: getConfig().aws_access_key_id || "",
    secretAccessKey: getConfig().aws_secret_access_key || "",
  },
  // endpoint: process.env.AWS_S3_ENDPOINT || "http://127.0.0.1:4566", // LocalStack endpoint
  // forcePathStyle: true, // Required for LocalStack
});

export default s3;
