import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({

    patient:
    {
       type: mongoose.Schema.Types.ObjectId ,
       ref: "User" ,
       required: true
    } ,

    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    } ,

    startTime: {
      type: Date,
      required: true,
    },

    endTime: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },

    reason: {
      type: String,
    },

    consultationFee: {
      type: Number,
      required: true,
    },

    isPaid: {
      type: Boolean,
      default: false,
    }

} , {timestamps: true} )

export const Appointment = mongoose.model("Appointment", appointmentSchema)