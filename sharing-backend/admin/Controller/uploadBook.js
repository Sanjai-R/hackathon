import cloudinary from "../../utils/clouidinary.js";
import { Books, User } from "../InterCOM/models.js";
import path from "path";

const __dirname = path.resolve();

const uploadBook = async (req, res) => {
  const image = req.files;
  const { title, desc } = req.body;

  let url =
    "https://www.thethoughtfinder.co.uk/wp-content/uploads/2017/04/BOOK-PLACEHOLDER-3-188x300.png";

  if (image) {
    const uri = await image.file.mv(
      `${__dirname}/public/assets/uploads/${image.name}`
    );
    url = `${__dirname}/public/assets/uploads/${image.name}`;
  }

  await cloudinary.v2.uploader.upload(url, async (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        isUploaded: false,
        desc: "Something error",
      });
    } else {
      const newUpload = new Books({
        bookname: title,
        bookdesc: desc,
        bookimagepath: result.secure_url,
        upload_at: new Date().toLocaleDateString(),
        uploadby: req.user._id,
      });
      newUpload.save((err) => {
        if (err) {
          console.log("book", err);
          res.status(500).json({
            success: false,
            isUploaded: false,
            desc: "Something error",
          });
          return null;
        }
      });
      const user = await User.findById(req.user._id);
      user.booksupload.push(newUpload._id);
      user.save((err) => {
        if (err) {
          console.error(err);
          res.status(500).json({
            success: false,
            isUploaded: false,
            desc: "Something error",
          });
        } else {
          res.json({
            success: true,
            isUploaded: true,
          });
        }
      });
    }
  });
};

export default uploadBook;
