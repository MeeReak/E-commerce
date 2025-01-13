import multer from "multer";
import multerS3 from "multer-s3";
import s3 from "./s3";
import { Request } from "express";
import getConfig from "./config";

interface MulterFile extends Express.Multer.File {
  originalname: string;
  key: string;
}

const upload = multer({
  storage: multerS3({
    s3: s3, // Using the new S3Client instance
    bucket: getConfig().aws_s3_bucket || "my-image-storage-bucket-1234", // Ensure bucket name is provided
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (
      _req: Request,
      file: MulterFile,
      cb: (error: Error | null, key?: string) => void
    ): void {
      const uniqueFileName = Date.now().toString() + "-" + file.originalname;
      cb(null, uniqueFileName); // File name in S3
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
});

export default upload;
