import fs from "fs";
import cloudinary from "../../utils/clouidinary.js";
import { User } from "../InterCOM/models.js";

const updateSettings = async (req, res) => {
  const { isChat } = req.body;
  const username = req.user.username;

  if (!req.files || Object.keys(req.files).length === 0) {
    User.updateOne(
      { username: username },
      {
        ischat: isChat,
      },
      (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({
            success: false,
            desc: "Something Went Wrong.",
          });
        } else {
          res.json({
            success: true,
          });
        }
      }
    );
    return;
  }

  const avatar = req.files.file;

  if (avatar) {
    avatar.mv(
      `${__dirname}/public/assets/uploads/${userName}-${avatar.name}`,
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
      `${__dirname}/public/assets/uploads/${userName}-${avatar.name}`,
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
              ischat: isChat,
              avatar: result.secure_url,
            },
            (err) => {
              if (err) {
                console.error(err);
                res.status(500).json({
                  success: false,
                  desc: "Something Went Wrong.",
                });
              } else
                res.json({
                  success: true,
                });
            }
          );
        }
      }
    );

    fs.unlinkSync(
      `${__dirname}/public/assets/uploads/${userName}-${avatar.name}`
    );
  }
};

export default updateSettings;
