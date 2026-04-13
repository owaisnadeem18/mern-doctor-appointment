import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema({
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment", required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    diagnosis: { type: String, required: true },
    medicines: [
        {
            name: { type: String, required: true , trim: true },
            dosage: { type: String }, // e.g., "1-0-1"
            duration: { type: String } // e.g., "5 Days"
        }
    ],
    advice: String
    ,
    issuedAt: {
  type: Date,
  default: Date.now
}

}, { timestamps: true });

export const Prescription = mongoose.model("Prescription", prescriptionSchema);