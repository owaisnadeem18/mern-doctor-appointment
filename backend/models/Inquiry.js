import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
      enum: ["General Inquiry", "Doctor Support", "Technical Issue", "Other"],
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "read", "resolved"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Inquiry = mongoose.model("Inquiry", inquirySchema);