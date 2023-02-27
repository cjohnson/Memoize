import { type NextPage } from "next";
import Head from "next/head";

import QuestionCard from "./questioncard";
import MultipleChoiceQuestion from "./multiplechoicequestion";
import { MultipleChoiceQuestionProps } from "./multiplechoicequestion";

const question: MultipleChoiceQuestionProps = {
  prompt: 'What is the electron geometry of a central atom with 5 electron pairs, 2 bonding pairs, and 3 lone pairs?', 
  answers: [
    { label: "Tetrahedral", correct: false, explanation: "A central atom with a tetrahedral electron geometry would have 4 electron groups." },
    { label: "Trigonal bipyramidal", correct: true, explanation: "A central atom with a trigonal pyramidal electron geometry would have 5 electron groups." },
    { label: "Trigonal planar", correct: false, explanation: "A central atom with a trigonal planar electron geometry would have 3 electron groups." },
    { label: "Trigonal pyramidal", correct: false, explanation: "A central atom with a trigonal pyramidal molecular geometry would have a tetrahedral electron geometry, and thus have 4 electron groups." },
  ],
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>memoize.io</title>
        <meta name="description" content="memorization made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-200 flex justify-center items-center space-between h-screen">
        <QuestionCard prompt="What is the electron geometry of a central atom with 5 electron pairs, 2 bonding pairs, and 3 lone pairs?"/>
        <MultipleChoiceQuestion prompt={question.prompt} answers={question.answers} />
      </main>
    </>
  );
};

export default Home;
