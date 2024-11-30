import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    name: String,
    number: String,
    credits: Number,
    description: String,
    department: String,
    // modules: [{ type: mongoose.Schema.Types.ObjectId, ref: "ModuleModel" }],
    // moduleObjects: [
    //   {
    //     name: String,
    //     description: String,
    //   },
    // ],
  },
  { collection: "courses" }
);
export default courseSchema;
