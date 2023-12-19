import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    cb(null, `image-${Date.now()}.${ext}`);
  },
});

const uploadMulter = multer({ storage }).single("image");

export { uploadMulter };
