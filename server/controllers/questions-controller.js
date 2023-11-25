import { data } from "../data/data.js";
import Question from "../model/question.js";

const addQuestions = async() => {
  try {
    const questions = data.map(
      ({ question, marks, subject, topic, difficulty }) => ({
        question,
        marks,
        subject,
        topic,
        difficulty,
      })
    );
    await Question.insertMany(questions);
  } catch (error) {
    console.error(error);
  }
};

const selectQuestions = async (totalMarks, distribution) => {
  const questionPaper = [];
  const difficultyLevels = Object.keys(distribution);
  const firstDocument = await Question.findOne();
  if(!firstDocument){
    addQuestions();
  }

  for (const difficulty of difficultyLevels) {
    const difficultyPercentage = distribution[difficulty] / 100;
    const marksForDifficulty = totalMarks * difficultyPercentage;

    // Sort questions by marks in descending order
    const questions = await Question.find({ difficulty })
      .sort({ marks: -1 })
      .exec();

    let currentMarks = 0;

    for (const question of questions) {
      if (currentMarks + question.marks <= marksForDifficulty) {
        questionPaper.push(question);
        currentMarks += question.marks;
      }
    }
  }

  return questionPaper;
};

export const generatePaper = async (req, res) => {
  try {
    const { total, easy, medium, hard } = req.body;
    const distribution = {
      easy: easy,
      medium: medium,
      hard: hard,
    };
    if (!total || !easy || !medium || !hard) {
      return res.status(400).json({ error: "Invalid request parameters" });
    }
    if(Number(easy)+Number(medium)+Number(hard)>100){
      return res.status(400).json({message:"Total percentage cannot be greater than 100%"})
    }

    const questionPaper = await selectQuestions(total, distribution);
    res.status(200).json({ questionPaper });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
