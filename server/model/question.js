import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  question: { type: String, required: true },
  subject: { type: String, required: true },
  topic: { type: String, required: true },
  difficulty: { type: String, required: true },
  marks: { type: Number, required: true },
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
