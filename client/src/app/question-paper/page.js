"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function questionPaper(searchParams) {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/generate-paper",
          searchParams.searchParams
        );
        setQuestions(response.data.questionPaper);
        console.log(response.data.questionPaper);
      } catch (error) {
        console.log(error);
      }
    };
    getQuestions();
  }, []);
  return (
    <>
      <div className=" flex flex-col items-center p-20">
        <div className="min-w-[600px]">
          <h1 className=" text-3xl font-extrabold mb-2">Questions</h1>
          <p className="mb-5 text-xl">Try to attempt all the questions 👍</p>
          {questions?.map((question) => (
            <div className="flex justify-between py-1" key={question._id}>
              <p className="px-4">{question.question}</p>
              <p className="px-4">{question.marks}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
