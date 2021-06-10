import mongoose from 'mongoose'

const carSchema = mongoose.Schema(
  {
    licenseNumber: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    // if needed just uncomment
    // state: {
    //   type: String,
    //   required: true,
    // },
    // images: [
    //   {
    //     image: { type: String }, //path
    //   },
    // ],
  },
  {
    timestamps: true,
  }
)

const Car = mongoose.model('Car', carSchema)

export default Car
