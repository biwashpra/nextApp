import mongoose, { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    require: [true, "prompt is required!"],
  },
  tag: {
    type: String,
    required: [true, "tag is required!"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;
