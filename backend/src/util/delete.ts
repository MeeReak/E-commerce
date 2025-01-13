import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import s3 from "./s3";
import getConfig from "./config";

// Function to delete an image from S3
export const deleteImage = async (key: any) => {
  if (!key) {
    throw new Error("No key provided for deletion.");
  }

  const params = {
    Bucket: getConfig().aws_s3_bucket, // Your bucket name
    Key: key, // The key of the file to delete
  };

  try {
    const command = new DeleteObjectCommand(params);
    await s3.send(command); // Use the S3 client to send the delete command
    return { message: "Image deleted successfully." }; // Return success message
  } catch (error) {
    console.error("Error deleting image:", error);
    throw new Error("Failed to delete image."); // Throw error for handling in route
  }
};
