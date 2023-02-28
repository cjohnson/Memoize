import { type NextPage } from "next";
import Head from "next/head";

import MultipleChoiceQuestion from "@component/components/MultipleChoiceQuestion";
import { MultipleChoiceQuestionData } from "@component/components/QuestionServer/QuestionServer";
import { MultipleChoiceAnswer } from "@component/components/MultipleChoiceQuestion/MultipleChoiceQuestion";

const question: MultipleChoiceQuestionData = {
  questionType: 'multiple_choice',
  prompt: 'What is the electron geometry of a central atom with 5 electron pairs, 2 bonding pairs, and 3 lone pairs?', 
  answers: Array<MultipleChoiceAnswer>(
    { label: "Tetrahedral", correct: false, explanation: "A central atom with a tetrahedral electron geometry would have 4 electron groups." },
    { label: "Trigonal bipyramidal", correct: true, explanation: "A central atom with a trigonal bipyramidal electron geometry would have 5 electron groups." },
    { label: "Trigonal planar", correct: false, explanation: "A central atom with a trigonal planar electron geometry would have 3 electron groups." },
    { label: "Trigonal pyramidal", correct: false, explanation: "A central atom with a trigonal pyramidal molecular geometry would have a tetrahedral electron geometry, and thus have 4 electron groups." },
  ),
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>memoize.io</title>
        <meta name="description" content="memorization made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MultipleChoiceQuestion index={1} prompt={question.prompt} answers={question.answers} />
    </>
  );
};

export default Home;
