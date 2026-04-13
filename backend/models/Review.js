import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor",required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    appointment : {
        type : mongoose.Schema.Types.ObjectId , 
        ref: "Appointment",
        required: true
    } ,
    reviewText: {
  type: String,
  required: true,
  trim: true,
  maxlength: 500
},
    rating: { type: Number, required: true, min: 1, max: 5 }
}, { timestamps: true });

// prevent duplicate reviews
reviewSchema.index({ doctor: 1, user: 1 }, { unique: true });

export const Review = mongoose.model("Review" , reviewSchema)