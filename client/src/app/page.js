"use client";
import { useState } from "react";
import Link from "next/link";

const initialValues = {
  total: 0,
  easy: 0,
  medium: 0,
  hard: 0,
};

export default function Home() {
  const [data, setData] = useState(initialValues);
  const onValueChange = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex  items-center justify-center h-screen text-slate-600">
        <form className="flex flex-col items-center justify-center min-w-[200px] gap-4">
          <div className="w-full">
            <label htmlFor="total">Total Marks</label>
            <input
              id="total"
              name="total"
              className="border rounded-lg  focus:border-gray-400 p-3 w-full"
              placeholder="Total Marks"
              onChange={(e) => onValueChange(e)}
            ></input>
          </div>
          <h3 className="w-full">Distribution</h3>
          <div className="w-full">
            <label htmlFor="easy">Easy</label>
            <input
              id="easy"
              name="easy"
              className="border rounded-lg  focus:border-gray-400 p-3 w-full"
              placeholder="Easy Percentage"
              onChange={(e) => onValueChange(e)}
            ></input>
          </div>
          <div className="w-full">
            <label htmlFor="medium">Medium</label>
            <input
              id="medium"
              name="medium"
              className="border rounded-lg  focus:border-gray-400 p-3 w-full"
              placeholder="Medium Percentage"
              onChange={(e) => onValueChange(e)}
            ></input>
          </div>
          <div className="w-full">
            <label htmlFor="hard">Hard</label>
            <input
              id="hard"
              name="hard"
              className="border rounded-lg  focus:border-gray-400 p-3 w-full"
              placeholder="Hard Percentage"
              onChange={(e) => onValueChange(e)}
            ></input>
          </div>
          <Link
            href={{
              pathname: "/question-paper",
              query: {
                total: data.total,
                easy: data.easy,
                medium: data.medium,
                hard: data.hard,
              },
            }}
            className="p-4 bg-blue-700 text-white rounded-xl mt-3 hover:bg-blue-900"
          >
            Generate Paper
          </Link>
        </form>
      </div>
    </>
  );
}
