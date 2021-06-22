import fs from 'fs'
import multer from 'multer'
const storageImg = multer.diskStorage({
  destination: function (req, res, cb) {
    let dir = `public/${req.user._id}`
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    console.log('body: ', req.body)
    cb(null, Date.now() + file.originalname)
  },
})

export const uploadImg = multer({ storage: storageImg })
