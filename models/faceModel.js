import mongoose from 'mongoose'

const faceSchema = mongoose.Schema(
  {
    images: [
      {
        image: { type: String }, //path
      },
    ],
    video: {
      type: String, //path in cloud service
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const Face = mongoose.model('Face', faceSchema)

export default Face
