import mongoose from "mongoose";

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
    },
    weight: {
      type: Number,
    },
    photo: {
      type: String,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "viewer",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pet", PetSchema);
