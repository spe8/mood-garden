import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  achievements: { type: [String], default: [] },
});

export default mongoose.model("user", UserSchema);
