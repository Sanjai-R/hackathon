import cloudinary from "../../utils/clouidinary.js";
import { Stationary, User } from "../InterCOM/models.js";
import path from "path";

const __dirname = path.resolve();

const uploadStationary = async (req, res) => {
  const image = req.files?.file;

  const { title, desc } = req.body;

  const url =
    "https://advertisingabc.websites.co.in/obaju-turquoise/img/product-placeholder.png";

  if (image) {
    image.mv(
      `${__dirname}/public/assets/uploads/${image.name}-${Date.now()}`,
      (err) => {
        if (err) {
          console.error(err);
          return false;
        }
        url = `${__dirname}/public/assets/uploads/${image.name}-${Date.now()}`;
      }
    );
  }

  await cloudinary.v2.uploader.upload(url, async (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        isUploaded: false,
        desc: "Something error",
      });
    } else {
      const newUpload = new Stationary({
        productname: title,
        productdesc: desc,
        productimagepath: result.secure_url,
        upload_at: new Date().toLocaleDateString(),
        uploadby: req.user._id,
      });
      newUpload.save((err) => {
        if (err) {
          res.status(500).json({
            success: false,
            isUploaded: false,
            desc: "Something error",
          });
          return null;
        }
      });
      const user = await User.findById(req.user._id);
      user.stationaryupload.push(newUpload._id);
      user.save((err) => {
        if (err) {
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

export default uploadStationary;
