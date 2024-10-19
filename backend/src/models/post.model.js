import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    image: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("Post", postSchema);