// Congiguring Multer for file upload
import multer from "multer";

//Using disk storage rather than memory storage from multer as videos may get too big
const storage = multer.diskStorage({
  // Destination to store file
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
  // Provide file with its name
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

export const upload = multer({
    storage,
});
