import fs from 'fs'
import multer from 'multer'
const storageImg = multer.diskStorage({
  destination: function (req, res, cb) {
    console.log('===>lalala', req.body)
    let dir = `public`
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    console.log('file: ', file)
    cb(null, Date.now() + file.originalname)
  },
})

export const uploadImg = multer({ storage: storageImg })
