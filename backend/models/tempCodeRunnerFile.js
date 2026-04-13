import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    specialization: { type: String , required: true },

    qualifications: [
  {
    type: String,
    required: true
  }
] ,
    
    
    experiences: [
      {
        hospital: String,
        role: String,
        from: Date,
        to: Date,
      },
    ],



    bio: { type: String, maxLength: 200 },
    about: { type: String },
    consultationFee: { type: Number, required: true },

    timeSlots: [
      {
        day: {
          type: String,
          enum: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        },
        startTime: String,
        endTime: String,
      },
    ],

    isApproved: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },

    isAvailable: {
  type: Boolean,
  default: true
},

location: {
  hospital: String,
  address: String,
  city: String,
  coordinates: {
    type: String,
    enum: ["Point"],
    default: "Point"
  },
  geo: {
    type: [Number] ,// [lng, lat]
    required: true
  }
}

,

    ratings: [
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    rating: {
  type: Number,
  min: 1,
  max: 5,
  required: true
},
    review: String
  }
],

averageRating: { type: Number, default: 0 },
totalReviews: { type: Number, default: 0 },

  },

  
  { timestamps: true },
);

doctorSchema.index({ "location.geo": "2dsphere" }) 

export const Doctor = mongoose.model("Doctor", doctorSchema);
