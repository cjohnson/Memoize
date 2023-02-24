import { type NextPage } from "next";
import Head from "next/head";

import QuestionCard from "./questioncard";
import MultipleChoiceOption from "./multiplechoiceoption";

const correct = 'B';

interface MultipleChoiceQuestion {
  prompt: string;
  answers: Map<string, boolean>;
}

const question: MultipleChoiceQuestion = {
  prompt: 'What is the electron geometry of a central atom with 5 electron pairs, 2 bonding pairs, and 3 lone pairs?', 
  answers: new Map<string, boolean>([
    ['Tetrahedral', false],
    ['Trigonal bipyramidal', true],
    ['Trigonal pyramidal', false],
    ['Trigonal planar', false]
  ])
};

const handleClick = (option: MultipleChoiceOption): void => {
  option.select();
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
        <div className="columns">
          <MultipleChoiceOption correct={false} click_callback={handleClick} option_index="A" title="Tetrahedral"/>
          <MultipleChoiceOption correct={true} click_callback={handleClick} option_index="B" title="Trigonal bipyramidal"/>
          <MultipleChoiceOption correct={false} click_callback={handleClick} option_index="C" title="Trigonal pyramidal"/>
          <MultipleChoiceOption correct={false} click_callback={handleClick} option_index="D" title="Trigonal planar"/>
        </div>
      </main>
    </>
  );
};

export default Home;
