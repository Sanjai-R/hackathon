import fs from "fs";
import path from "path";
import cloudinary from "../../utils/clouidinary.js";
import { User } from "../InterCOM/models.js";

const updateSettings = async (req, res) => {
  const { isChat } = req.body;
  const username = req.user.username;
  const __dirname = path.resolve();

  if (!req.files || Object.keys(req.files).length === 0) {
    User.updateOne(
      { username: username },
      {
        ischat: Boolean(isChat),
      },
      {
        new: true,
      },
      (err, docs) => {
        if (err) {
          console.error(err);
          res.status(500).json({
            success: false,
            desc: "Something Went Wrong.",
          });
        } else {
          res.json({
            success: true,
            data: docs,
          });
        }
      }
    );
    return;
  }

  const avatar = req.files.file;

  if (avatar) {
    avatar.mv(
      `${__dirname}/public/assets/uploads/${username}-${avatar.name}`,
      (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({
            success: false,
            desc: "Something Went Wrong.",
          });
          return null;
        }
      }
    );

    await cloudinary.v2.uploader.upload(
      `${__dirname}/public/assets/uploads/${username}-${avatar.name}`,
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({
            success: false,
            desc: "Something Went Wrong.",
          });
        } else {
          User.updateOne(
            { username: username },
            {
              ischat: Boolean(isChat),
              avatar: result.secure_url,
            },
            { new: true },
            (err, docs) => {
              if (err) {
                console.error(err);
                res.status(500).json({
                  success: false,
                  desc: "Something Went Wrong.",
                });
              } else
                res.json({
                  success: true,
                  data: docs,
                });
            }
          );
        }
      }
    );

    fs.unlinkSync(
      `${__dirname}/public/assets/uploads/${username}-${avatar.name}`
    );
  }
};

export default updateSettings;
