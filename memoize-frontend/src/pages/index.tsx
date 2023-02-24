import { type NextPage } from "next";
import Head from "next/head";

import QuestionCard from "./questioncard";
import MultipleChoiceOption from "./multiplechoiceoption";
import type { ReactElement } from "react";

const handleClick = (option: MultipleChoiceOption): void => {
  option.select();
};

interface MultipleChoiceQuestion {
  prompt: string;
  answers: Map<string, boolean>;
}

const Home: NextPage = () => {
  const question: MultipleChoiceQuestion = {
    prompt: 'What is the electron geometry of a central atom with 5 electron pairs, 2 bonding pairs, and 3 lone pairs?', 
    answers: new Map<string, boolean>([
      ['Tetrahedral', false],
      ['Trigonal bipyramidal', true],
      ['Trigonal pyramidal', false],
      ['Trigonal planar', false]
    ])
  };

  const options: Array<ReactElement> = [];
  question.answers.forEach((value, key, _) => {
    options.push(<MultipleChoiceOption 
      key={key} 
      correct={value ?? false} 
      click_callback={handleClick} 
      title={key}
    />);
  });

  return (
    <>
      <Head>
        <title>memoize.io</title>
        <meta name="description" content="memorization made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-200 flex justify-center items-center space-between h-screen">
        <QuestionCard prompt="What is the electron geometry of a central atom with 5 electron pairs, 2 bonding pairs, and 3 lone pairs?"/>
        <div className="columns">
          { options }
        </div>
      </main>
    </>
  );
};

export default Home;
